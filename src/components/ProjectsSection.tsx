import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Play, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Link } from 'react-router-dom';
import { PROJECTS, type ProjectItem } from '../data/content';

import { GlassCard } from './GlassCard';
import { TechBadge } from './TechBadge';
import { StatusBadge } from './StatusBadge';
import { TeamMemberCard } from './TeamMemberCard';

export const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const total = PROJECTS.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prevSlide = useCallback(() => {
    setDirection('backward');
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const nextSlide = useCallback(() => {
    setDirection('forward');
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only react if user is looking at or focused around projects
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const currentProject = PROJECTS[currentIndex];

  const sliderVariants = {
    enter: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: 'forward' | 'backward') => ({
      x: dir === 'forward' ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t overflow-hidden select-none"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Eyebrow & Nav Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <span
              className="text-[11px] font-mono-code uppercase tracking-[0.35em] block mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              03 / PROJECTS
            </span>
            <h2
              className="font-section-head text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider font-extrabold"
            >
              <span className="gold-gradient-text">SELECTED WORKS</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Slide Counter - Clear and Visible in Both Themes */}
            <div
              className="font-mono-code text-xs tracking-widest px-3.5 py-1.5 rounded-full border flex items-center gap-1.5 font-bold shadow-sm"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <span style={{ color: 'var(--text-primary)' }}>
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span style={{ color: 'var(--text-muted)' }}>/</span>
              <span style={{ color: 'var(--text-muted)' }}>
                {String(total).padStart(2, '0')}
              </span>
            </div>

            {/* Prev (Backward) / Next (Forward) Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                title="Backward (Previous Project)"
                aria-label="Previous project"
                className="p-3 rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md flex items-center justify-center group"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                title="Forward (Next Project)"
                aria-label="Next project"
                className="p-3 rounded-full border transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer shadow-md flex items-center justify-center group"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* View All Projects Link */}
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider px-4 py-2.5 rounded-full border transition-all duration-200 hover:border-white hover:bg-white/10"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
              }}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>View all</span>
            </Link>
          </div>
        </div>

        {/* Horizontal Slider Area */}
        <div className="relative min-h-[540px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* Card Container with Glass & Cinematic Styling */}
              <GlassCard className="p-4 sm:p-8 lg:p-12 shadow-2xl card-gold-border">
                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-extrabold select-none pointer-events-none leading-none opacity-5 font-work-title"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {currentProject.number}
                </span>

                {/* Card Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                  {/* Left Column (7 cols): Header, Description, Tech Stack */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Eyebrow & Status Chip */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-mono-code font-bold" style={{ color: 'var(--text-primary)' }}>
                          {currentProject.number} //
                        </span>
                        <span className="text-[11px] font-mono-code tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
                          {currentProject.category}
                        </span>

                        {/* Status Chip: Proper border line and solid color, no background */}
                        <StatusBadge status={currentProject.status} />
                      </div>

                      {/* Project Title */}
                      <h3
                        className="font-work-title text-2xl min-[480px]:text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 font-extrabold group-hover:text-white transition-colors break-words"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {currentProject.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-xs sm:text-sm lg:text-base leading-relaxed font-light mb-6 max-w-2xl font-body"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {currentProject.description}
                      </p>

                      {/* Team Collaborators if present */}
                      {currentProject.teamMembers && currentProject.teamMembers.length > 0 && (
                        <div className="mb-6">
                          <span className="text-[10px] font-mono-code uppercase tracking-widest block mb-2" style={{ color: 'var(--text-muted)' }}>
                            TEAM MEMBERS ({currentProject.teamMembers.length})
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {currentProject.teamMembers.map((member) => (
                              <TeamMemberCard key={member.name} member={member} variant="circle-only" />
                            ))}

                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                      <span className="text-[10px] font-mono-code uppercase tracking-widest block mb-3" style={{ color: 'var(--text-muted)' }}>
                        TECH STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5 min-[380px]:gap-2 sm:gap-2.5">
                        {currentProject.tech.map((t) => (
                          <TechBadge key={t} name={t} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Architecture Metrics & Action Links */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pl-8 lg:border-l" style={{ borderColor: 'var(--border-subtle)' }}>
                    {/* Metrics List */}
                    <div>
                      <span className="text-[10px] font-mono-code tracking-[0.25em] uppercase block mb-4" style={{ color: 'var(--text-muted)' }}>
                        // ARCHITECTURE METRICS
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3">
                        {currentProject.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-2.5 sm:p-3.5 rounded-xl border flex flex-col justify-center sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2"
                            style={{
                              backgroundColor: 'var(--bg-card)',
                              borderColor: 'var(--border-subtle)',
                            }}
                          >
                            <span className="text-[9.5px] sm:text-[10px] font-mono-code uppercase tracking-wider truncate" style={{ color: 'var(--text-muted)' }}>
                              {m.label}
                            </span>
                            <span className="font-mono-code text-xs sm:text-sm font-bold truncate" style={{ color: 'var(--text-primary)' }}>
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3 pt-4">
                      <div className="flex flex-wrap gap-3">
                        {currentProject.links.live && (
                          <a
                            href={currentProject.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-lg"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}

                        {currentProject.links.github && (
                          <a
                            href={currentProject.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all"
                            style={{
                              borderColor: 'var(--border-strong)',
                              color: 'var(--text-primary)',
                            }}
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}

                        {currentProject.links.video && (
                          <a
                            href={currentProject.links.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all"
                            style={{
                              borderColor: 'var(--border-strong)',
                              color: 'var(--text-primary)',
                            }}
                          >
                            <Play className="w-3.5 h-3.5" />
                            <span>Demo Video</span>
                          </a>
                        )}
                      </div>

                      {/* Detail Page Link */}
                      <Link
                        to={`/projects/${currentProject.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider hover:underline pt-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <span>Deep Dive Architecture & Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Dots Bar */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {PROJECTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to project ${p.title}`}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${idx === currentIndex ? 'w-9' : 'w-2.5 hover:opacity-80'}`}
              style={{
                backgroundColor: idx === currentIndex ? 'var(--text-primary)' : 'var(--border-strong)',
              }}
            />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider px-5 py-2.5 rounded-full border"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--text-primary)',
            }}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>View all projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
