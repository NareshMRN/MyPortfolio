import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { TIMELINE, type TimelineMilestone } from '../data/content';
import { GlassCard } from './GlassCard';

/* ------------------------------------------------------------------ */
/*  Single Timeline Node                                              */
/* ------------------------------------------------------------------ */
const TimelineNode: React.FC<{
  milestone: TimelineMilestone;
  index: number;
  isLast: boolean;
}> = ({ milestone, index, isLast }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const bulletRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-60px' });

  // Track when the scroll line arrives at this specific bubble
  const { scrollYProgress: bulletScroll } = useScroll({
    target: bulletRef,
    offset: ['start 60%', 'center 56%'],
  });

  const dotScale = useTransform(bulletScroll, [0, 0.8, 1], [0, 0.2, 1]);
  const dotOpacity = useTransform(bulletScroll, [0, 0.4, 1], [0, 0.5, 1]);
  const outerBorder = useTransform(
    bulletScroll,
    [0, 1],
    ['var(--border-strong)', 'var(--text-primary)']
  );

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-start gap-5 sm:gap-8 ${isLast ? 'pb-4' : 'pb-12 sm:pb-16'}`}
    >
      {/* Node Bullet Dot - Perfectly centered at x = 12px */}
      <div ref={bulletRef} className="relative z-10 w-6 flex items-center justify-center flex-shrink-0 mt-1.5">
        <motion.div
          className="w-5 h-5 rounded-full border-2 transition-all duration-200 shadow-md flex items-center justify-center"
          style={{
            borderColor: outerBorder,
            backgroundColor: 'var(--bg-primary)',
          }}
        >
          {/* Inner Dot: fills ONLY when the scroll line arrives */}
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{
              scale: dotScale,
              opacity: dotOpacity,
              backgroundColor: 'var(--text-primary)',
            }}
          />
        </motion.div>
      </div>

      {/* Node Content Card */}
      <GlassCard className="flex-1 p-6 sm:p-8">
        {/* Period Label */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b" style={{ borderColor: 'var(--border-subtle)' }}>
          <span
            className="text-[10px] font-mono-code uppercase tracking-[0.3em] font-semibold"
            style={{ color: 'var(--text-muted)' }}
          >
            0{index + 1} // {milestone.period}
          </span>
          <span
            className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded border"
            style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}
          >
            {milestone.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-heading text-xl sm:text-2xl uppercase tracking-wide font-medium mb-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {milestone.title}
        </h3>

        {/* Subtitle */}
        <span
          className="text-xs font-mono-code tracking-wider block mb-4"
          style={{ color: 'var(--text-muted)' }}
        >
          {milestone.subtitle}
        </span>

        {/* Description */}
        <p
          className="text-xs sm:text-sm leading-relaxed font-light font-body"
          style={{ color: 'var(--text-secondary)' }}
        >
          {milestone.description}
        </p>
      </GlassCard>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Scroll-Drawn Line Component                                       */
/* ------------------------------------------------------------------ */
const ScrollDrawnLine: React.FC<{ targetRef: React.RefObject<HTMLDivElement | null> }> = ({ targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 60%', 'end 80%'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="absolute left-[11px] top-3 bottom-10 w-[2px] overflow-hidden pointer-events-none z-0">
      {/* Background static faint guide */}
      <div className="w-full h-full opacity-25" style={{ backgroundColor: 'var(--border-strong)' }} />
      {/* Active illuminated drawn line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full origin-top"
        style={{
          scaleY,
          backgroundColor: 'var(--text-primary)',
          boxShadow: '0 0 12px rgba(255,255,255,0.6)',
        }}
      />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  ExperienceSection – 05 BEYOND THE CODE                            */
/* ------------------------------------------------------------------ */
export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      id="beyond"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
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
            05 / BEYOND THE CODE
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mt-4 mb-16"
        >
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider font-light"
            style={{ color: 'var(--text-primary)' }}
          >
            PHILOSOPHY & TRAJECTORY
          </h2>
          <p
            className="text-xs sm:text-sm font-light mt-3 md:mt-0 max-w-md leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            The driving principles behind the architecture. How I work, what creates velocity, and the uncharted domains currently being explored.
          </p>
        </motion.div>

        {/* Timeline Container with Scroll-Drawn Line */}
        <div ref={timelineRef} className="relative max-w-4xl">
          <ScrollDrawnLine targetRef={timelineRef} />
          {TIMELINE.map((milestone, idx) => (
            <TimelineNode
              key={milestone.id}
              milestone={milestone}
              index={idx}
              isLast={idx === TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
