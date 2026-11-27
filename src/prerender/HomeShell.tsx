/**
 * Build-time only: renders the above-the-fold home page (navbar + hero) to static HTML.
 * Used by scripts/prerender-home.mjs — never imported by the client bundle.
 *
 * The markup mirrors App.tsx's layout wrappers so the static shell sits exactly where
 * React later renders the real page, and React replaces it on its first render.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ThemeProvider } from '../context/ThemeContext';
import { VideoLayer } from '../components/VideoLayer';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';

export function renderHomeShell(): string {
  return renderToString(
    <ThemeProvider>
      <VideoLayer />
      <div className="relative z-10 min-h-screen flex flex-col font-body w-full max-w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden">
          <div className="relative w-full z-10 transition-colors duration-500">
            <HeroSection />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default renderHomeShell;
