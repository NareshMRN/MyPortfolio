import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { skillCategories, type SkillCategory, type Skill } from '../data/content';
import { getTechMeta } from './TechBadge';
import { useTheme } from '../context/ThemeContext';

/* ========================================================================== */
/*  BRAIN REGION CONSTANTS (Fractions of image coordinate space: 0.0 to 1.0)   */
/* ========================================================================== */
export const BRAIN_REGION = {
  xMin: 0.29,
  xMax: 0.67,
  yMin: 0.16,
  yMax: 0.50,
};

interface PlacedSkill {
  name: string;
  info: string;
  categoryId: string;
  categoryTitle: string;
  color: string;
  icon?: React.ReactNode;
  xPercent: number; // 0 to 100%
  yPercent: number; // 0 to 100%
}

/* -------------------------------------------------------------------------- */
/*  Verified Non-Overlapping Brain Positions                                  */
/*  Precomputed offline from the artwork's bright brain pixels, maximising    */
/*  the minimum Chebyshev (square) spacing: >= 0.0524 of the container width, */
/*  so square touch targets never overlap (>= 24px apart on a 412px phone).   */
/* -------------------------------------------------------------------------- */
const VERIFIED_BRAIN_POSITIONS: { x: number; y: number }[] = [
  { x: 0.4429, y: 0.1690 }, { x: 0.5119, y: 0.1690 }, { x: 0.3833, y: 0.1714 },
  { x: 0.5857, y: 0.1810 }, { x: 0.3238, y: 0.1905 }, { x: 0.6595, y: 0.2071 },
  { x: 0.4381, y: 0.2310 }, { x: 0.5143, y: 0.2333 }, { x: 0.5905, y: 0.2405 },
  { x: 0.3810, y: 0.2429 }, { x: 0.3262, y: 0.2452 }, { x: 0.6595, y: 0.2619 },
  { x: 0.4476, y: 0.2929 }, { x: 0.5095, y: 0.2952 }, { x: 0.2976, y: 0.3000 },
  { x: 0.3929, y: 0.3000 }, { x: 0.5833, y: 0.3024 }, { x: 0.6571, y: 0.3262 },
  { x: 0.3452, y: 0.3548 }, { x: 0.5262, y: 0.3595 }, { x: 0.5857, y: 0.3667 },
  { x: 0.4690, y: 0.3690 }, { x: 0.4071, y: 0.3786 }, { x: 0.6405, y: 0.3810 },
  { x: 0.3524, y: 0.4095 }, { x: 0.2976, y: 0.4167 }, { x: 0.5833, y: 0.4238 },
  { x: 0.4714, y: 0.4262 }, { x: 0.5262, y: 0.4286 }, { x: 0.4071, y: 0.4381 },
  { x: 0.3524, y: 0.4643 }, { x: 0.2976, y: 0.4786 }, { x: 0.5738, y: 0.4810 },
  { x: 0.5190, y: 0.4857 }, { x: 0.4619, y: 0.4881 },
];

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-60px' });
  const { theme } = useTheme();

  // Active hover/focus skill
  const [activeSkill, setActiveSkill] = useState<PlacedSkill | null>(null);
  // Active category filter chip
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Mobile detection (reactive to window resize) & Reduced Motion
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Flatten skills with tech metadata (colors & SVG icons)
  const allSkills = useMemo(() => {
    const list: {
      name: string;
      info: string;
      categoryId: string;
      categoryTitle: string;
      color: string;
      icon?: React.ReactNode;
    }[] = [];

    skillCategories.forEach((cat) => {
      cat.skills.forEach((s) => {
        const meta = getTechMeta(s.name);
        list.push({
          name: s.name,
          info: s.info,
          categoryId: cat.id,
          categoryTitle: cat.title,
          color: meta.color,
          icon: meta.icon,
        });
      });
    });
    return list;
  }, []);

  // Skills are placed on precomputed, verified non-overlapping brain coordinates.
  // (Previously the 1.1 MB artwork was re-downloaded and pixel-sampled on a canvas at
  // runtime, which cost main-thread time and a forced getImageData readback.)
  const placedSkills = useMemo<PlacedSkill[]>(
    () =>
      allSkills.map((s, idx) => {
        const pos = VERIFIED_BRAIN_POSITIONS[idx] || { x: 0.5, y: 0.35 };
        return { ...s, xPercent: pos.x * 100, yPercent: pos.y * 100 };
      }),
    [allSkills]
  );

  // Handle keyboard Escape to dismiss active tooltip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSkill(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Category filter toggle handler
  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-10 lg:px-16 border-t transition-colors duration-500 overflow-hidden"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Section Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span
            className="text-[11px] font-mono-code uppercase tracking-[0.35em]"
            style={{ color: 'var(--text-muted)' }}
          >
            02 / SKILLS
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mt-4 mb-8 sm:mb-12 gap-3"
        >
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider"
            style={{ color: 'var(--text-primary)' }}
          >
            TECHNICAL ARSENAL
          </h2>
          <p
            className="text-xs sm:text-sm font-light max-w-md leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Cognitive synapse matrix. Core technologies filled directly across the cortical folds. Hover or tap any icon to inspect implementation details.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------------ */}
        {/*  CATEGORY FILTER CHIPS (Horizontal scroll on mobile)               */}
        {/* ------------------------------------------------------------------ */}
        <div className="w-full mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {/* Reset / All Chip */}
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono-code uppercase tracking-wider border transition-all duration-200 cursor-pointer shrink-0 backdrop-blur-md flex items-center gap-2 ${
                activeCategory === null
                  ? 'border-[var(--text-primary)] shadow-md font-bold'
                  : 'hover:border-[var(--text-muted)]'
              }`}
              style={{
                backgroundColor: activeCategory === null ? 'var(--text-primary)' : 'var(--glass-bg)',
                color: activeCategory === null ? 'var(--bg-primary)' : 'var(--text-muted)',
                borderColor: activeCategory === null ? 'var(--text-primary)' : 'var(--glass-border)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span>All ({allSkills.length})</span>
            </button>

            {skillCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              const catColor = getTechMeta(cat.skills[0]?.name || '').color;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono-code uppercase tracking-wider border transition-all duration-200 cursor-pointer shrink-0 backdrop-blur-md flex items-center gap-2 ${
                    isSelected
                      ? 'shadow-md font-bold'
                      : 'hover:border-[var(--text-primary)]'
                  }`}
                  style={{
                    backgroundColor: isSelected ? 'var(--text-primary)' : 'var(--glass-bg)',
                    color: isSelected ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    borderColor: isSelected ? 'var(--text-primary)' : 'var(--glass-border)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ backgroundColor: catColor }}
                  />
                  <span>
                    {cat.title} ({cat.skills.length})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  CENTER ART & TECHNOLOGY ICONS FILLED IN BRAIN                     */}
        {/* ------------------------------------------------------------------ */}
        <div
          ref={imageContainerRef}
          onClick={() => isMobile && setActiveSkill(null)}
          className="relative -mx-4 sm:mx-auto w-[calc(100%+2rem)] sm:w-full max-w-[500px] sm:max-w-[760px] md:max-w-[900px] lg:max-w-[1060px] xl:max-w-[1200px] 2xl:max-w-[1300px] aspect-square flex items-center justify-center select-none my-5 sm:my-0"
        >
          {/* Mobile Display Scale Wrapper (Bit bigger on mobile, 1:1 on large devices) */}
          <div className="relative w-full h-full flex items-center justify-center scale-[1.18] sm:scale-100 origin-center transition-transform duration-300">
            {/* Subtle Idle Float Wrapper */}
            {/* CSS keyframe float (compositor-only) instead of a JS-driven infinite loop,
                which recalculated styles for all 35 badges every frame */}
            <div className="relative w-full h-full flex items-center justify-center skills-idle-float">
            {/* Center Line Art Image */}
            <img
              src="/images/Cybernetic_Mind_in_Profile-800.webp"
              srcSet="/images/Cybernetic_Mind_in_Profile-480.webp 480w, /images/Cybernetic_Mind_in_Profile-800.webp 800w, /images/Cybernetic_Mind_in_Profile-1254.webp 1254w"
              sizes="(min-width: 1536px) 1300px, (min-width: 1280px) 1200px, (min-width: 1024px) 1060px, (min-width: 768px) 900px, (min-width: 640px) 760px, 100vw"
              alt="Cybernetic Mind in Profile"
              className="w-full h-full object-contain pointer-events-none transition-[filter] duration-500"
              style={{
                mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
                filter: theme === 'dark' ? 'none' : 'invert(1)',
              }}
              width={1254}
              height={1254}
              loading="lazy"
              decoding="async"
            />

            {/* -------------------------------------------------------------- */}
            {/*  ICONS FILLED IN BRAIN (Always visible with official brand SVGs) */}
            {/* -------------------------------------------------------------- */}
            {placedSkills.map((skill, sIdx) => {
              const isHovered = activeSkill?.name === skill.name;
              const isDimmedByCategory =
                activeCategory !== null && activeCategory !== skill.categoryId;

              // Placement coordinates
              const leftPos = `${skill.xPercent}%`;
              const topPos = `${skill.yPercent}%`;

              // Flip tooltip side near edges
              const isRightSide = skill.xPercent > 54;
              const isLowerSide = skill.yPercent > 55;

              return (
                <div
                  key={skill.name}
                  className="absolute"
                  style={{
                    left: leftPos,
                    top: topPos,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isHovered ? 50 : 10,
                  }}
                >
                  {/* Technology Icon Badge in Brain */}
                  <motion.button
                    type="button"
                    tabIndex={0}
                    aria-label={`${skill.name} (${skill.categoryTitle})`}
                    aria-describedby={isHovered ? `tooltip-${skill.name}` : undefined}
                    onMouseEnter={() => !isMobile && setActiveSkill(skill)}
                    onMouseLeave={() => !isMobile && setActiveSkill(null)}
                    onFocus={() => setActiveSkill(skill)}
                    onBlur={() => !isMobile && setActiveSkill(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSkill((prev) => (prev?.name === skill.name ? null : skill));
                    }}
                    initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    animate={{
                      opacity: isDimmedByCategory ? 0.18 : (isHovered ? 1 : 0.95),
                      scale: isHovered ? 1.3 : 1,
                    }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : sIdx * 0.015,
                      duration: 0.3,
                    }}
                    // Sizes stay below the minimum centre-to-centre spacing of the brain
                    // positions (~0.06 × container width) at every breakpoint, so no two
                    // targets overlap (WCAG 2.5.8 target size / Lighthouse target-size).
                    className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center cursor-pointer outline-none transition-all duration-200 border backdrop-blur-md shadow-md group"
                    style={{
                      backgroundColor:
                        theme === 'dark'
                          ? 'rgba(12, 12, 16, 0.88)'
                          : 'rgba(255, 255, 255, 0.94)',
                      borderColor: isHovered ? skill.color : `${skill.color}66`,
                      boxShadow: isHovered
                        ? `0 0 16px ${skill.color}, 0 0 26px ${skill.color}77, inset 0 1px 0 rgba(255,255,255,0.4)`
                        : `0 2px 8px ${skill.color}35, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    }}
                  >
                    {/* Outer animated ring on active/hovered */}
                    {isHovered && (
                      <span
                        className="absolute -inset-1 rounded-full border pointer-events-none animate-pulse"
                        style={{ borderColor: skill.color }}
                      />
                    )}

                    {/* Brand SVG / Image Icon */}
                    <span className="w-full h-full p-1 sm:p-1.5 md:p-2 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full [&>img]:w-full [&>img]:h-full [&>img]:max-w-full [&>img]:max-h-full [&>img]:object-contain">
                      {skill.icon}
                    </span>
                  </motion.button>

                  {/* ---------------------------------------------------------- */}
                  {/*  DESKTOP GLASS TOOLTIP DETAILS CARD (Shown on hover)       */}
                  {/* ---------------------------------------------------------- */}
                  <AnimatePresence>
                    {!isMobile && isHovered && (
                      <motion.div
                        id={`tooltip-${skill.name}`}
                        initial={{ opacity: 0, y: isLowerSide ? 6 : -6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                        className={`absolute w-72 p-4 rounded-2xl pointer-events-none z-50 shadow-2xl border ${
                          isRightSide
                            ? 'right-full mr-3.5'
                            : 'left-full ml-3.5'
                        } ${isLowerSide ? 'bottom-0' : 'top-0'}`}
                        style={{
                          backgroundColor: 'var(--glass-bg)',
                          borderColor: 'var(--glass-border)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          boxShadow: `inset 0 1px 0 0 var(--glass-highlight), 0 20px 40px rgba(0,0,0,0.4), 0 0 25px ${skill.color}22`,
                        }}
                      >
                        {/* Connecting Line Pointer */}
                        <div
                          className={`absolute top-4 w-3 h-[1px] pointer-events-none ${
                            isRightSide
                              ? 'left-full bg-gradient-to-r from-[var(--glass-border)] to-transparent'
                              : 'right-full bg-gradient-to-l from-[var(--glass-border)] to-transparent'
                          }`}
                        />

                        {/* Top Row: Category and Color Dot */}
                        <div className="flex items-center justify-between pb-2 mb-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
                          <span
                            className="text-[9px] font-mono-code uppercase tracking-widest"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            // {skill.categoryTitle}
                          </span>
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{
                              backgroundColor: skill.color,
                              boxShadow: `0 0 6px ${skill.color}`,
                            }}
                          />
                        </div>

                        {/* Header: Brand SVG Icon + Skill Name */}
                        <div className="flex items-center gap-2.5 mb-2">
                          {skill.icon && (
                            <span
                              className="p-1.5 rounded-lg border flex items-center justify-center shrink-0 [&>img]:w-4 [&>img]:h-4 [&>img]:object-contain"
                              style={{
                                backgroundColor: `${skill.color}18`,
                                borderColor: `${skill.color}44`,
                              }}
                            >
                              {skill.icon}
                            </span>
                          )}
                          <h4
                            className="font-mono-code font-bold text-sm tracking-tight"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {skill.name}
                          </h4>
                        </div>

                        {/* One-line Info */}
                        <p
                          className="text-xs leading-relaxed font-body"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {skill.info}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* ------------------------------------------------------------------ */}
        {/*  MOBILE TOOLTIP CARD (Floating bottom sheet on tap with icon & info) */}
        {/* ------------------------------------------------------------------ */}
        <AnimatePresence>
          {isMobile && activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:w-96 z-[9999] p-4 rounded-2xl border backdrop-blur-2xl shadow-2xl"
              style={{
                backgroundColor:
                  theme === 'dark'
                    ? 'rgba(14, 14, 18, 0.94)'
                    : 'rgba(255, 255, 255, 0.96)',
                borderColor: `${activeSkill.color}66`,
                boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${activeSkill.color}35`,
              }}
            >
              <div
                className="flex items-center justify-between pb-2 mb-2 border-b"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <span
                  className="text-[10px] font-mono-code uppercase tracking-widest flex items-center gap-1.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ backgroundColor: activeSkill.color }}
                  />
                  // {activeSkill.categoryTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveSkill(null)}
                  className="p-1 rounded-full text-zinc-400 hover:text-white cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                {activeSkill.icon && (
                  <span
                    className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 p-1.5 [&>img]:w-full [&>img]:h-full [&>img]:object-contain"
                    style={{
                      backgroundColor: `${activeSkill.color}18`,
                      borderColor: `${activeSkill.color}44`,
                    }}
                  >
                    {activeSkill.icon}
                  </span>
                )}
                <h4
                  className="font-mono-code font-bold text-base"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {activeSkill.name}
                </h4>
              </div>

              <p
                className="text-xs leading-relaxed font-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                {activeSkill.info}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ------------------------------------------------------------------ */}
        {/*  SEO & SCREEN READER ACCESSIBLE INVENTORY (Visually hidden)         */}
        {/* ------------------------------------------------------------------ */}
        <div className="sr-only">
          <h3>Skills & Technologies Matrix</h3>
          {skillCategories.map((cat) => (
            <div key={cat.id}>
              <h4>{cat.title}</h4>
              <ul>
                {cat.skills.map((s) => (
                  <li key={s.name}>
                    <strong>{s.name}</strong>: {s.info}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
