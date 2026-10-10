# Naresh — Cinematic Personal Portfolio

A cinematic, pixel-perfect, monochromatic personal portfolio engineered for **Naresh**, first-year B.Tech CSE-IT student at NIAT (NxtWave Institute of Advanced Technologies, Mangaluru, affiliated with Yenepoya University) & Founder and Developer of **Sangeetha** and **Aira**.

---

## 💎 Architecture & Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (Strict Monochrome Design System — Black, White, Grays only)
- **Animation**: Framer Motion (staggered blur fade-ups, spring physics, tactile keycaps)
- **Card Aesthetics**: Cinematic card styling adapted from `cinematic-portfolio-main` (corner L-bracket accents, top border light flares, big watermark background typography, architecture metrics grids)
- **Smooth Scroll**: Lenis Virtual Scroll
- **Audio & Video**: Full-viewport fixed video background with interactive sound toggle
- **Routing**: React Router DOM (with full archive grids and dedicated slug detail pages)
- **Forms**: Terminal CLI `$ send_message --to naresh` with Formspree / EmailJS support and mailto fallback
- **Icons**: Lucide React + custom SVG icons

---

## 📋 Asset & Content Checklist

Where to place all your media and where to edit your real details:

| Asset / Content | File Location | Purpose & Instructions |
| :--- | :--- | :--- |
| **All Text & Data** | [`src/data/content.ts`](file:///c:/Users/ACER/Downloads/Portfolio-me/src/data/content.ts) | **Single source of truth**: Projects, Skills, Achievements, Hackathons, Certificates, Bio, Socials, and Manifesto. Clearly marked placeholders with `"TODO: replace"`. |
| **AI Video of Me** | `public/videos/hero.mp4` | Fixed looping background video (muted by default with sound on/off button at bottom right). |
| **Video Poster** | `public/videos/hero-poster.jpg` | Fallback poster before video playback starts. |
| **Profile Photo** | `public/assets/photo.jpg` | Your photo for the About section (features 3D mouse tilt and corner brackets). |
| **Resume PDF** | `public/resume.pdf` | Direct link triggered by the "Download resume" and "Download CV" buttons. |
| **Certificate Images** | `public/certificates/` | Place your certificate images here (`vector-search.jpg`, `gradio-llm.jpg`, `placeholder-1.jpg`). They load in both the cards and high-resolution Lightbox modals. |

---

## 🚀 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Validation
```bash
npm run build
```
Creates an optimized, minified production bundle in `dist/`.

---

## ✉️ Contact Form Configuration

The terminal contact form (`$ send_message --to naresh`) works immediately out of the box with an automated `mailto:` fallback. To send messages directly without opening an email client:

Create a `.env` file in the project root:

```env
# Option A: Formspree (Recommended, free and instant setup)
# Get your form ID at https://formspree.io
VITE_FORMSPREE_ID=your_form_id_here

# Option B: EmailJS
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If neither is configured, the terminal form executes the `mailto:` protocol addressed directly to `nareshn141819@gmail.com`.

---

## 🌐 Vercel Deployment & SPA Subdomain Setup

### 1. Deploying to Vercel
1. Push this repository to your GitHub account: `github.com/NareshMRN/portfolio`
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework preset: **Vite**
5. Root directory: `./`
6. Click **Deploy**.

> The included `vercel.json` automatically configures single-page application (SPA) rewrites so direct navigation to detail routes (`/projects`, `/projects/:slug`, `/achievements`, `/achievements/:slug`, `/hackathons`, `/hackathons/:slug`, `/certificates`, `/certificates/:slug`) never returns a 404 error.

### 2. Configuring a Custom Domain or Subdomain
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your desired domain or subdomain (e.g., `naresh.yourdomain.com` or `portfolio.yourdomain.com`).
3. Add the generated `CNAME` record to your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.):
   - **Type**: `CNAME`
   - **Name**: `naresh` (or your subdomain prefix)
   - **Target**: `cname.vercel-dns.com`
4. Once DNS propagates, Vercel will provision an SSL certificate automatically.

---

## 🎨 Global Design Rules Applied

- **Strict Monochrome**: Pure blacks (`#000000`), whites (`#ffffff`), and grays only. Zero gold, blue, pink, purple, or decorative colors.
- **Hero Consistency**: The hero stays dark in both themes so text is always high-contrast over the video. Sections below the hero switch between dark and light modes.
- **Persistent Theme Toggle**: Seamless switch between deep dark editorial and clean light editorial, remembered in `localStorage`.
- **Horizontal Projects Slider**: Projects slide left/right with prev/next buttons, keyboard arrows, touch swipe, counter indicator, and card animations adapted from `cinematic-portfolio-main`.
- **Keyboard Keycaps**: Mechanical keycaps that depress on hover with tooltips for Web/Mobile, AI/ML, and Security/Tooling.
- **Luminous Timeline**: Timeline whose line draws dynamically as you scroll through philosophy milestones.
- **Accessibility**: Full respect for `prefers-reduced-motion`, coarse pointer (touch device) cursor suppression, and high-contrast typography. Strictly no LinkedIn anywhere.
