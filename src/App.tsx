import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { VideoLayer } from './components/VideoLayer';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProjectsArchivePage } from './pages/ProjectsArchivePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AchievementsArchivePage } from './pages/AchievementsArchivePage';
import { AchievementDetailPage } from './pages/AchievementDetailPage';
import { HackathonsArchivePage } from './pages/HackathonsArchivePage';
import { HackathonDetailPage } from './pages/HackathonDetailPage';
import { CertificatesArchivePage } from './pages/CertificatesArchivePage';
import { CertificateDetailPage } from './pages/CertificateDetailPage';
import { ScrollToTopFloating } from './components/ScrollToTopFloating';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top upon route transition
function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If navigating with a hash (e.g. /#achievements or /#projects), let the hash handler or element scroll handle it
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const timer = setTimeout(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo(element, { offset: -40, immediate: true });
          } else {
            element.scrollIntoView({ behavior: 'auto' });
          }
        }, 80);
        return () => clearTimeout(timer);
      }
      return;
    }

    const resetToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true, force: true });
      }
    };

    resetToTop();
    const rafId = requestAnimationFrame(resetToTop);
    const timeoutId = setTimeout(resetToTop, 60);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname, search, hash]);

  return null;
}

export function App() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration to ensure user always starts at top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    window.__lenis = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />

        {/* Minimalist Custom Cursor (Disabled automatically on touch) */}
        <CustomCursor />

        {/* Global Fixed Video Background Layer */}
        <VideoLayer />

        {/* Main Application Container */}
        <div className="relative z-10 min-h-screen flex flex-col font-body w-full max-w-full overflow-x-hidden">
          {/* Top Sticky/Floating Navbar */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsArchivePage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/achievements" element={<AchievementsArchivePage />} />
              <Route path="/achievements/:slug" element={<AchievementDetailPage />} />
              <Route path="/hackathons" element={<HackathonsArchivePage />} />
              <Route path="/hackathons/:slug" element={<HackathonDetailPage />} />
              <Route path="/certificates" element={<CertificatesArchivePage />} />
              <Route path="/certificates/:slug" element={<CertificateDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          {/* Floating Scroll to Top Button */}
          <ScrollToTopFloating />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
