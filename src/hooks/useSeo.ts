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
        
        // Resolve image URL and prefer WhatsApp-optimized certificate versions if available
        let resolvedImg = image || '/og-image.jpg';
        if (resolvedImg.includes('/certificates/') && !resolvedImg.includes('/certificates/og/')) {
            resolvedImg = resolvedImg.replace('/certificates/', '/certificates/og/');
        }
        const img = resolvedImg.startsWith('http') ? resolvedImg : SITE_URL + resolvedImg;
        const imgType = img.endsWith('.png') ? 'image/png' : 'image/jpeg';

        // Document Title
        document.title = title;

        // Standard Meta
        meta('name', 'description', description);
        meta('name', 'robots', noindex ? 'noindex,follow' : 'index,follow');

        const isProfile = path === '/' || image === '/og-image.jpg' || image === '/assets/photo.jpg';

        // Open Graph (WhatsApp, Facebook, LinkedIn, Discord)
        meta('property', 'og:type', isProfile ? 'profile' : 'website');
        meta('property', 'og:site_name', 'Naresh N');
        meta('property', 'og:title', title);
        meta('property', 'og:description', description);
        meta('property', 'og:url', url);
        meta('property', 'og:image', img);
        meta('property', 'og:image:secure_url', img);
        meta('property', 'og:image:type', imgType);
        meta('property', 'og:image:width', isProfile ? '576' : '1200');
        meta('property', 'og:image:height', isProfile ? '1024' : '630');
        meta('property', 'og:image:alt', title);

        // Twitter Cards
        meta('name', 'twitter:card', 'summary_large_image');
        meta('name', 'twitter:title', title);
        meta('name', 'twitter:description', description);
        meta('name', 'twitter:image', img);

        // Canonical URL
        upsert(
            'link[rel="canonical"]',
            () => { const l = document.createElement('link'); l.rel = 'canonical'; return l; },
            (el) => (el.href = url),
        );

        // Image Src fallback for WhatsApp and legacy chat bots
        upsert(
            'link[rel="image_src"]',
            () => { const l = document.createElement('link'); l.rel = 'image_src'; return l; },
            (el) => (el.href = img),
        );
    }, [title, description, path, image, noindex]);
}
