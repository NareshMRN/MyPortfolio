/// <reference types="vite/client" />

interface Window {
  __lenis?: any;
  /** True when index.html shipped a build-time pre-rendered hero (see scripts/prerender-home.mjs) */
  __HERO_PRERENDERED?: boolean;
}

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ID?: string;
  /** Public Google reCAPTCHA v3 site key for the contact form (secret key lives in Formspree) */
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

