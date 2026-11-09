import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('[SEO Prerender] dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');
const SITE_URL = 'https://nareshn.me';

// Extract data dynamically from src/data/content.ts
// We'll read content.ts to get projects, certificates, achievements, and hackathons
const contentTs = fs.readFileSync(path.resolve(rootDir, 'src/data/content.ts'), 'utf8');

function extractArray(name) {
  const match = contentTs.match(new RegExp(`export const ${name}:\\s*\\w+\\[\\]\\s*=\\s*(\\[[\\s\\S]*?\\n\\];)`, 'm'));
  if (!match) return [];
  // Parse objects roughly with regex for slug, title/eventName, description, image
  const code = match[1];
  const items = [];
  const itemMatches = code.match(/\{[\s\S]*?\n\s*\},?/g) || [];
  for (const itemCode of itemMatches) {
    const slugMatch = itemCode.match(/slug:\s*['"]([^'"]+)['"]/);
    const titleMatch = itemCode.match(/(?:title|eventName):\s*['"]([^'"]+)['"]/);
    const descMatch = itemCode.match(/description:\s*\n?\s*['"]([^'"]+)['"]/);
    const imgMatch = itemCode.match(/image:\s*['"]([^'"]+)['"]/);
    if (slugMatch) {
      items.push({
        slug: slugMatch[1],
        title: titleMatch ? titleMatch[1] : '',
        description: descMatch ? descMatch[1] : '',
        image: imgMatch ? imgMatch[1] : '',
      });
    }
  }
  return items;
}

const projects = extractArray('PROJECTS');
const certificates = extractArray('CERTIFICATES');
const achievements = extractArray('ACHIEVEMENTS');
const hackathons = extractArray('HACKATHONS');

const routes = [];

// 1. Projects
for (const p of projects) {
  routes.push({
    path: `/projects/${p.slug}`,
    title: `${p.title} — Project by Naresh N`,
    description: p.description || `Software project ${p.title} architected and engineered by Naresh N.`,
    image: p.image || `/images/projects/${p.slug}.jpg`,
  });
}

// 2. Certificates
for (const c of certificates) {
  let img = c.image;
  if (img && img.includes('/certificates/') && !img.includes('/certificates/og/')) {
    img = img.replace('/certificates/', '/certificates/og/');
  }
  routes.push({
    path: `/certificates/${c.slug}`,
    title: `${c.title} — Certificate earned by Naresh N`,
    description: c.description || `Verified technical credential and certificate earned by Naresh N.`,
    image: img || '/og-image.jpg',
  });
}

// 3. Achievements
for (const a of achievements) {
  routes.push({
    path: `/achievements/${a.slug}`,
    title: `${a.title} — Milestone by Naresh N`,
    description: a.description || `Achievement and engineering milestone by Naresh N.`,
    image: a.image || '/og-image.jpg',
  });
}

// 4. Hackathons
for (const h of hackathons) {
  routes.push({
    path: `/hackathons/${h.slug}`,
    title: `${h.title} — Hackathon by Naresh N`,
    description: h.description || `Hackathon prototype and sprint build by Naresh N.`,
    image: h.image || '/certificates/og/Build2Ship_Participants_Sem3.jpg',
  });
}

console.log(`[SEO Prerender] Generating static HTML preview pages for ${routes.length} routes...`);

for (const r of routes) {
  const fullUrl = `${SITE_URL}${r.path}`;
  const fullImg = r.image.startsWith('http') ? r.image : `${SITE_URL}${r.image}`;
  const imgType = fullImg.endsWith('.png') ? 'image/png' : 'image/jpeg';

  let html = template;

  // Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${r.title} | Naresh N</title>`);
  html = html.replace(/<meta name="title" content="[^"]*"\s*\/?>/i, `<meta name="title" content="${r.title} | Naresh N" />`);

  // Replace Description
  html = html.replace(/<meta name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${r.description}" />`);

  // Replace Open Graph tags
  html = html.replace(/<meta property="og:type" content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="website" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${r.title}" />`);
  html = html.replace(/<meta property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${r.description}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${fullUrl}" />`);
  html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${fullImg}" />`);
  html = html.replace(/<meta property="og:image:secure_url" content="[^"]*"\s*\/?>/i, `<meta property="og:image:secure_url" content="${fullImg}" />`);
  html = html.replace(/<meta property="og:image:type" content="[^"]*"\s*\/?>/i, `<meta property="og:image:type" content="${imgType}" />`);
  html = html.replace(/<meta property="og:image:width" content="[^"]*"\s*\/?>/i, `<meta property="og:image:width" content="1200" />`);
  html = html.replace(/<meta property="og:image:height" content="[^"]*"\s*\/?>/i, `<meta property="og:image:height" content="630" />`);

  // Replace Twitter tags
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${r.title}" />`);
  html = html.replace(/<meta name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${r.description}" />`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/i, `<meta name="twitter:image" content="${fullImg}" />`);

  // Replace Canonical and image_src
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${fullUrl}" />`);
  html = html.replace(/<link rel="image_src" href="[^"]*"\s*\/?>/i, `<link rel="image_src" href="${fullImg}" />`);

  // Output destination: dist/<path>/index.html
  const targetDir = path.join(distDir, r.path.replace(/^\//, ''));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

console.log(`[SEO Prerender] Successfully generated ${routes.length} static Open Graph social preview pages!`);

