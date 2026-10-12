import { useEffect } from 'react';

export const SITE_URL = 'https://nareshn.me';

interface SeoProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    noindex?: boolean;
}

function upsert(selector: string, create: () => HTMLElement, set: (el: any) => void) {
    let el = document.head.querySelector(selector) as HTMLElement | null;
    if (!el) { el = create(); document.head.appendChild(el); }
    set(el);
}

const meta = (attr: 'name' | 'property', key: string, value: string) =>
    upsert(
        `meta[${attr}="${key}"]`,
        () => { const m = document.createElement('meta'); m.setAttribute(attr, key); return m; },
        (el) => el.setAttribute('content', value),
    );

export function useSeo({ title, description, path, image = '/og-image.jpg', noindex = false }: SeoProps) {
    useEffect(() => {
        const url = SITE_URL + path;
        const img = image.startsWith('http') ? image : SITE_URL + image;

        document.title = title;
        meta('name', 'description', description);
        meta('name', 'robots', noindex ? 'noindex,follow' : 'index,follow');
        meta('property', 'og:title', title);
        meta('property', 'og:description', description);
        meta('property', 'og:url', url);
        meta('property', 'og:image', img);
        meta('name', 'twitter:title', title);
        meta('name', 'twitter:description', description);
        meta('name', 'twitter:image', img);

        upsert(
            'link[rel="canonical"]',
            () => { const l = document.createElement('link'); l.rel = 'canonical'; return l; },
            (el) => (el.href = url),
        );
    }, [title, description, path, image, noindex]);
}