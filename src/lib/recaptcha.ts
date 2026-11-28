/**
 * Google reCAPTCHA v3 (invisible, score-based) for the contact form.
 *
 * Formspree's built-in reCAPTCHA rejects AJAX submissions, so the form uses a custom
 * v3 key: the SITE key lives here (public by design), the SECRET key is configured in
 * the Formspree form settings, and each submission carries a `g-recaptcha-response` token.
 *
 * The Google script is loaded lazily — only when a visitor starts using the form — so it
 * never affects initial page-load performance.
 */

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Public reCAPTCHA v3 site key (safe to ship in client code — it only identifies the site).
 * Can be overridden with the VITE_RECAPTCHA_SITE_KEY build env var.
 * The matching SECRET key must never be in this repo; it is configured in Formspree.
 */
export const RECAPTCHA_SITE_KEY: string = (
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LfJojYuAAAAAD0NvUTwM3q5bvG-XPxzYZ7Uq5gb'
).trim();

let loadPromise: Promise<void> | null = null;

/** Injects the reCAPTCHA v3 script once. Safe to call repeatedly (e.g. on every field focus). */
export function loadRecaptcha(): Promise<void> {
  if (!RECAPTCHA_SITE_KEY) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loadPromise = null; // allow a retry on the next attempt
      reject(new Error('Failed to load reCAPTCHA'));
    };
    document.head.appendChild(script);
  });
  return loadPromise;
}

/** Returns a fresh reCAPTCHA v3 token, or null when no site key is configured. */
export async function getRecaptchaToken(action = 'contact'): Promise<string | null> {
  if (!RECAPTCHA_SITE_KEY) return null;
  await loadRecaptcha();
  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) throw new Error('reCAPTCHA unavailable');
  await new Promise<void>((resolve) => grecaptcha.ready(resolve));
  return grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
}
