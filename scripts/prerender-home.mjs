/**
 * Post-build performance step (runs after `vite build` and generate-seo-pages.js):
 *
 * 1. Inlines the main CSS bundle into every generated HTML page, removing the
 *    render-blocking stylesheet request from the critical path.
 * 2. Pre-renders the home page's navbar + hero (real React components, via Vite SSR)
 *    into dist/index.html, so the LCP headline paints from HTML + CSS alone instead of
 *    waiting for the JavaScript bundles. React replaces the shell on first render.
 *
 * The shell is rendered in the default (light) theme. An inline script in index.html
 * hides it on non-home routes (SPA fallback) and for visitors who chose dark mode.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const indexPath = path.join(distDir, 'index.html');

function listHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listHtmlFiles(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

// ---------------------------------------------------------------------------
// 1. Inline the CSS bundle
// ---------------------------------------------------------------------------
const cssLinkRe = /<link rel="stylesheet"(?: crossorigin)? href="(\/assets\/index-[\w-]+\.css)">/;
const indexHtml = fs.readFileSync(indexPath, 'utf8');
const cssMatch = indexHtml.match(cssLinkRe);
if (!cssMatch) {
  console.error('[Prerender] Could not find the CSS <link> in dist/index.html');
  process.exit(1);
}
const cssHref = cssMatch[1];
const css = fs.readFileSync(path.join(distDir, cssHref), 'utf8').replace(/<\/style/gi, '<\\/style');

let inlined = 0;
for (const file of listHtmlFiles(distDir)) {
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(cssLinkRe);
  if (!m || m[1] !== cssHref) continue;
  fs.writeFileSync(file, html.replace(cssLinkRe, () => `<style>${css}</style>`), 'utf8');
  inlined++;
}
console.log(`[Prerender] Inlined ${cssHref} (${(css.length / 1024).toFixed(1)} KiB) into ${inlined} HTML files`);

// ---------------------------------------------------------------------------
// 2. Pre-render the home page hero into dist/index.html
// ---------------------------------------------------------------------------
const vite = await createServer({
  root: rootDir,
  configFile: path.join(rootDir, 'vite.config.ts'),
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false },
  // One-off SSR render: no need for the client dependency pre-bundler/scanner
  optimizeDeps: { noDiscovery: true, include: [] },
});

try {
  const { renderHomeShell } = await vite.ssrLoadModule('/src/prerender/HomeShell.tsx');
  const shellHtml = renderHomeShell();

  let html = fs.readFileSync(indexPath, 'utf8');
  const rootTag = '<div id="root"></div>';
  if (!html.includes(rootTag)) {
    throw new Error('Could not find an empty <div id="root"></div> in dist/index.html');
  }
  html = html.replace(rootTag, () => `<div id="root"><div id="hero-shell">${shellHtml}</div></div>`);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log(`[Prerender] Injected pre-rendered hero shell (${(shellHtml.length / 1024).toFixed(1)} KiB) into dist/index.html`);
} finally {
  await vite.close();
}
