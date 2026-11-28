import { flushSync } from 'react-dom';

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { finished: Promise<void> };
};

/**
 * Runs a theme-style state change with the site's diagonal gradient wipe: the new look
 * sweeps in from the top-right corner to the bottom-left via the View Transitions API
 * (animation defined by `theme-diagonal-wipe` in index.css).
 *
 * `update` must perform the change (typically React state setters); it is flushed
 * synchronously so the browser can snapshot the "after" state. Falls back to applying
 * the change instantly where the API is unsupported or reduced motion is preferred.
 */
export function withThemeTransition(update: () => void): void {
  const doc = document as ViewTransitionDocument;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!doc.startViewTransition || prefersReducedMotion) {
    update();
    return;
  }

  const root = document.documentElement;
  // Suspend per-element colour transitions so the incoming state is fully painted
  // inside the wipe instead of fading underneath it.
  root.classList.add('theme-switching');

  const transition = doc.startViewTransition(() => {
    flushSync(update);
  });
  transition.finished.finally(() => root.classList.remove('theme-switching'));
}
