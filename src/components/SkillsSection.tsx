import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skillCategories, type SkillCategory, type Skill } from '../data/content';
import { getTechMeta } from './TechBadge';
import { useTheme } from '../context/ThemeContext';

/* ========================================================================== */
/*  BRAIN REGION CONSTANTS (Fractions of image coordinate space: 0.0 to 1.0)   */
/* ========================================================================== */
export const BRAIN_REGION = {
  xMin: 0.27,
  xMax: 0.72,
  yMin: 0.15,
  yMax: 0.52,
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
/*  Deterministic Seeded PRNG (Mulberry32) for stable reload placement        */
/* -------------------------------------------------------------------------- */
function createSeededRandom(seed: number) {
  let s = seed;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* -------------------------------------------------------------------------- */
/*  Algorithmic Fallback Grid on Brain Folds                                  */
/* -------------------------------------------------------------------------- */
function generateFallbackPositions(total: number): { x: number; y: number }[] {
  const rng = createSeededRandom(42);
  const points: { x: number; y: number }[] = [];
  const { xMin, xMax, yMin, yMax } = BRAIN_REGION;

  for (let i = 0; i < total; i++) {
    const angle = rng() * Math.PI * 2;
    const rX = 0.48 * (xMax - xMin);
    const rY = 0.48 * (yMax - yMin);
    const cX = xMin + rX;
    const cY = yMin + rY;

    const rad = 0.3 + Math.sqrt(rng()) * 0.65;
    const foldWobble = Math.sin(angle * 6 + rng() * 2) * 0.035;

    const x = Math.min(xMax - 0.03, Math.max(xMin + 0.03, cX + Math.cos(angle) * (rX * rad + foldWobble)));
    const y = Math.min(yMax - 0.03, Math.max(yMin + 0.03, cY + Math.sin(angle) * (rY * rad + foldWobble)));

    points.push({ x, y });
  }

  return points;
}

export const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-60px' });
  const { theme } = useTheme();

  // Active hover/focus skill
  const [activeSkill, setActiveSkill] = useState<PlacedSkill | null>(null);
  // Active category filter chip
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  // Placed skills with calculated coordinates
  const [placedSkills, setPlacedSkills] = useState<PlacedSkill[]>([]);

  // Mobile detection & Reduced Motion
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
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

  /* -------------------------------------------------------------------------- */
  /*  IMAGE SAMPLING & POISSON-DISK STYLE SKILL PLACEMENT                       */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    let isCancelled = false;
    const img = new Image();
    img.src = '/images/Cybernetic_Mind_in_Profile.png';

    const handlePlacement = (candidatePixels?: { x: number; y: number }[]) => {
      if (isCancelled) return;

      const total = allSkills.length;
      const rng = createSeededRandom(1337);
      const chosenCoords: { x: number; y: number }[] = [];

      if (candidatePixels && candidatePixels.length > total * 2) {
        // Minimum distance tailored for icon badges (diameter ~ 26px)
        let minDist = 0.065;
        const maxAttempts = 14;

        for (let attempt = 0; attempt < maxAttempts && chosenCoords.length < total; attempt++) {
          chosenCoords.length = 0;
          const pool = [...candidatePixels].sort(() => rng() - 0.5);

          for (const cand of pool) {
            let tooClose = false;
            for (const picked of chosenCoords) {
              const dx = (cand.x - picked.x) * 1.15;
              const dy = cand.y - picked.y;
              if (dx * dx + dy * dy < minDist * minDist) {
                tooClose = true;
                break;
              }
            }

            if (!tooClose) {
              chosenCoords.push(cand);
              if (chosenCoords.length >= total) break;
            }
          }

          minDist *= 0.88;
        }

        if (chosenCoords.length < total) {
          const pool = [...candidatePixels].sort(() => rng() - 0.5);
          for (const cand of pool) {
            if (!chosenCoords.includes(cand)) {
              chosenCoords.push(cand);
              if (chosenCoords.length >= total) break;
            }
          }
        }
      }

      const finalPositions =
        chosenCoords.length >= total
          ? chosenCoords.slice(0, total)
          : generateFallbackPositions(total);

      const placed: PlacedSkill[] = allSkills.map((s, idx) => {
        const pos = finalPositions[idx] || { x: 0.5, y: 0.35 };
        return {
          ...s,
          xPercent: pos.x * 100,
          yPercent: pos.y * 100,
        };
      });

      setPlacedSkills(placed);
    };

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const size = 420;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          handlePlacement();
          return;
        }

        ctx.drawImage(img, 0, 0, size, size);
        const imgData = ctx.getImageData(0, 0, size, size).data;

        const { xMin, xMax, yMin, yMax } = BRAIN_REGION;
        const minPxX = Math.floor(xMin * size);
        const maxPxX = Math.floor(xMax * size);
        const minPxY = Math.floor(yMin * size);
        const maxPxY = Math.floor(yMax * size);

        const brightCandidates: { x: number; y: number }[] = [];

        for (let py = minPxY; py < maxPxY; py += 2) {
          for (let px = minPxX; px < maxPxX; px += 2) {
            const idx = (py * size + px) * 4;
            const r = imgData[idx];
            const g = imgData[idx + 1];
            const b = imgData[idx + 2];
            const brightness = (r + g + b) / 3;

            if (brightness > 60) {
              brightCandidates.push({
                x: px / size,
                y: py / size,
              });
            }
          }
        }

        handlePlacement(brightCandidates);
      } catch {
        handlePlacement();
      }
    };

    img.onerror = () => {
      handlePlacement();
    };

    return () => {
      isCancelled = true;
    };
  }, [allSkills]);

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
      <div className="max-w-7xl mx-auto w-full">
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
          className="relative w-full max-w-[680px] sm:max-w-[760px] lg:max-w-[940px] xl:max-w-[1080px] 2xl:max-w-[1140px] aspect-square mx-auto flex items-center justify-center select-none"
        >
          {/* Subtle Idle Float Wrapper */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={prefersReducedMotion ? {} : { y: [-3, 3, -3] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Center Line Art Image */}
            <img
              src="/images/Cybernetic_Mind_in_Profile.png"
              alt="Cybernetic Mind in Profile"
              className="w-full h-full object-contain pointer-events-none transition-all duration-500"
              style={{
                mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
                filter: theme === 'dark' ? 'none' : 'invert(1)',
              }}
              loading="eager"
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
                    zIndex: isHovered ? 40 : 20,
                  }}
                >
                  {/* Technology Icon Badge in Brain */}
                  <motion.button
                    type="button"
                    tabIndex={0}
                    aria-label={`${skill.name} (${skill.categoryTitle})`}
                    aria-describedby={isHovered ? `tooltip-${skill.name}` : undefined}
                    onMouseEnter={() => setActiveSkill(skill)}
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
                      scale: isHovered ? 1.35 : 1,
                    }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : sIdx * 0.015,
                      duration: 0.3,
                    }}
                    className="relative w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 rounded-full flex items-center justify-center cursor-pointer outline-none transition-all duration-200 border backdrop-blur-md shadow-md group"
                    style={{
                      backgroundColor:
                        theme === 'dark'
                          ? 'rgba(12, 12, 16, 0.85)'
                          : 'rgba(255, 255, 255, 0.92)',
                      borderColor: isHovered ? skill.color : `${skill.color}66`,
                      boxShadow: isHovered
                        ? `0 0 16px ${skill.color}, 0 0 26px ${skill.color}77, inset 0 1px 0 rgba(255,255,255,0.3)`
                        : `0 2px 8px ${skill.color}35, inset 0 1px 0 rgba(255,255,255,0.15)`,
                    }}
                  >
                    {/* Outer animated ring on active/hovered */}
                    {isHovered && (
                      <span
                        className="absolute -inset-1 rounded-full border pointer-events-none animate-pulse"
                        style={{ borderColor: skill.color }}
                      />
                    )}

                    {/* Brand SVG Icon */}
                    <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
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
                              className="p-1.5 rounded-lg border flex items-center justify-center shrink-0"
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
          </motion.div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  MOBILE TOOLTIP CARD (Bottom sheet docked on tap with icon & color) */}
        {/* ------------------------------------------------------------------ */}
        <AnimatePresence>
          {isMobile && activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="mt-6 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl relative z-30"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: `${activeSkill.color}55`,
                boxShadow: `inset 0 1px 0 0 var(--glass-highlight), 0 15px 35px rgba(0,0,0,0.3), 0 0 25px ${activeSkill.color}25`,
              }}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
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
                  className="text-xs font-mono-code px-2 py-0.5 rounded border text-[10px] uppercase"
                  style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
                >
                  Close
                </button>
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                {activeSkill.icon && (
                  <span
                    className="p-1.5 rounded-lg border flex items-center justify-center shrink-0"
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
