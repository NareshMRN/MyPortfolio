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

// Scroll to top upon route transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  useEffect(() => {
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

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
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
        <div className="relative z-10 min-h-screen flex flex-col font-body">
          {/* Top Sticky/Floating Navbar */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-1 w-full">
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
              <Route path="*" element={<Navigate to="/" replace />} />
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
