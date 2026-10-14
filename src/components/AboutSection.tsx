import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ABOUT_CONTENT, PERSONAL_INFO } from '../data/content';
import { GlassCard } from './GlassCard';

/* ------------------------------------------------------------------ */
/*  Animated Counter – Counts up from 0 when scrolled into view       */
/* ------------------------------------------------------------------ */
const AnimatedCounter: React.FC<{
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}> = ({ value, suffix, label, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const timeout = setTimeout(() => {
      const duration = 1800; // ms
      const steps = 40;
      const increment = value / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), value);
        setDisplay(current);
        if (step >= steps) clearInterval(interval);
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {display}
        <span className="text-2xl sm:text-3xl lg:text-4xl" style={{ color: 'var(--text-muted)' }}>
          {suffix}
        </span>
      </div>
      <div
        className="mt-2 text-[11px] font-mono-code uppercase tracking-[0.25em]"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  3D Tilt Photo Frame – Subtle perspective shift on mouse move      */
/* ------------------------------------------------------------------ */
const TiltPhoto: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm mx-auto"
      style={{ perspective: '800px' }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative rounded-2xl overflow-hidden border"
        style={{
          borderColor: 'var(--border-subtle)',
          background: 'var(--bg-card)',
        }}
      >
        {/* Photo */}
        <div className="aspect-[3/4] w-full overflow-hidden">
          <img
            src={PERSONAL_INFO.photo}
            alt={`${PERSONAL_INFO.name} portrait`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Fallback if photo doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center" style="background: var(--bg-secondary);">
                    <span class="font-display text-7xl tracking-widest" style="color: var(--text-muted);">${PERSONAL_INFO.name.charAt(0)}</span>
                  </div>
                `;
              }
            }}
          />
        </div>

        {/* Bottom label */}
        <div
          className="absolute bottom-0 inset-x-0 py-3 px-4 text-center"
          style={{
            background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
          }}
        >
          <span
            className="text-[10px] font-mono-code uppercase tracking-[0.35em]"
            style={{ color: 'var(--text-muted)' }}
          >
            {PERSONAL_INFO.name} · {new Date().getFullYear()}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Stagger Fade Up Variants                                          */
/* ------------------------------------------------------------------ */
const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  AboutSection                                                      */
/* ------------------------------------------------------------------ */
export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-10 lg:px-16 border-t"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section eyebrow */}
          <motion.div variants={fadeUpVariants}>
            <span
              className="text-[11px] font-mono-code uppercase tracking-[0.35em]"
              style={{ color: 'var(--text-muted)' }}
            >
              {ABOUT_CONTENT.sectionNumber} / {ABOUT_CONTENT.sectionTitle}
            </span>
          </motion.div>

          {/* Section heading */}
          <motion.h2
            variants={fadeUpVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider mt-4 mb-12 lg:mb-16"
            style={{ color: 'var(--text-primary)' }}
          >
            ABOUT ME
          </motion.h2>

          {/* Content grid: Photo + Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Photo - Left side */}
            <motion.div variants={fadeUpVariants} className="lg:col-span-4">
              <TiltPhoto />
            </motion.div>

            {/* Bio Text - Right side */}
            <motion.div variants={fadeUpVariants} className="lg:col-span-8 flex flex-col justify-center space-y-6">
              <p
                className="text-base sm:text-lg leading-relaxed font-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                {ABOUT_CONTENT.bioParagraph1}
              </p>
              <p
                className="text-base sm:text-lg leading-relaxed font-body"
                style={{ color: 'var(--text-secondary)' }}
              >
                {ABOUT_CONTENT.bioParagraph2}
              </p>

              {/* Manifesto Glass Card */}
              <div className="mt-4 w-full max-w-lg">
                <GlassCard className="p-5 sm:p-6 rounded-2xl">
                  <div
                    className="flex items-center justify-between pb-3 mb-3 border-b text-[10px] font-mono-code uppercase tracking-widest"
                    style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
                  >
                    <span>MANIFESTO</span>
                    <span>EST. 2026</span>
                  </div>

                  <p
                    className="text-xs sm:text-sm italic font-light leading-relaxed mb-3 font-body"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    "{PERSONAL_INFO.quote}"
                  </p>

                  {/* Handwritten signature */}
                  <div
                    className="font-signature text-3xl sm:text-4xl font-normal tracking-wide select-none"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    ~ {PERSONAL_INFO.signatureText}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-16 sm:mt-20 pt-12 border-t grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            {ABOUT_CONTENT.stats.map((stat, idx) => (
              <GlassCard key={stat.label} className="p-6 text-center shadow-lg">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={idx * 150}
                />
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
