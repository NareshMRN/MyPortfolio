import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDownRight, FileText, Sparkles, Eye, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/content';
import { ResumeViewerModal } from './ResumeViewerModal';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Dynamic typing animation cycling through multiple phrases
  const phrases = React.useMemo(() => {
    return PERSONAL_INFO.terminalPhrases && PERSONAL_INFO.terminalPhrases.length > 0
      ? PERSONAL_INFO.terminalPhrases
      : [PERSONAL_INFO.whoamiTerminal];
  }, []);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedText(phrases[phraseIndex]);
      const timer = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 4000);
      return () => clearTimeout(timer);
    }

    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing phase: add one character at a time
      if (typedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
        }, 40);
      } else {
        // Full phrase typed; pause for reading before erasing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting phase: backspace snappily
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length - 1));
        }, 20);
      } else {
        // Entire phrase deleted; brief pause before starting next phrase
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 350);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  // Slow, cinematic smooth scroll down to the projects section
  const handleExploreWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(projectsSection, {
        duration: 2.2, // Slow, graceful, cinematic glide
        offset: -40,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      const startPosition = window.pageYOffset;
      const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset - 40;
      const distance = targetPosition - startPosition;
      const duration = 2200;
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        window.scrollTo(0, startPosition + distance * ease);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-24 sm:pt-28 pb-16 px-3.5 min-[360px]:px-5 sm:px-6 lg:px-8 xl:px-12 transition-colors duration-500"
    >
      {/* Laptop/Desktop Top-Right Corner Status Badge (Hidden on mobile) */}
      <div className="hidden md:inline-flex absolute top-24 sm:top-28 right-6 lg:right-10 xl:right-16 z-20">
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 ${isDark
            ? 'border-white/20 bg-black/80 text-zinc-100'
            : 'border-black/15 bg-white/85 text-zinc-900'
            }`}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'
                }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'
                }`}
            />
          </span>
          <span className="text-[11px] font-mono-code uppercase tracking-wider font-semibold">
            {PERSONAL_INFO.statusBadge}
          </span>
        </div>
      </div>

      {/* Hero Content Container - Full Width edge-to-edge alignment */}
      <div className="w-full relative z-10 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl xl:max-w-4xl flex flex-col items-start space-y-4 sm:space-y-6 lg:space-y-7"
        >
          {/* Top Row: Terminal Typed Line Pill - Fully responsive, strictly bounded within viewport width */}
          <motion.div variants={fadeUpVariants} className="w-full max-w-full min-w-0">
            <div
              className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border shadow-lg backdrop-blur-md text-[10px] sm:text-[11px] font-mono-code transition-all duration-300 max-w-full min-h-[32px] sm:min-h-[36px] overflow-hidden ${isDark
                ? 'border-white/15 bg-black/80 text-zinc-200'
                : 'border-black/15 bg-white/85 text-zinc-800'
                }`}
            >
              <span className="font-medium truncate block max-w-[calc(100vw-4.5rem)] sm:max-w-xl min-w-0">
                {typedText || '\u00A0'}
              </span>
              <span
                className={`animate-pulse inline-block w-1.5 h-3 flex-shrink-0 ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'
                  }`}
              />
            </div>
          </motion.div>

          {/* Tagline & Entity Disambiguation - Featuring Emerald & Amber Accent Colors */}
          <motion.div variants={fadeUpVariants} className="w-full">
            <div
              className={`text-xs sm:text-sm font-mono-code uppercase tracking-[0.14em] min-[380px]:tracking-[0.2em] sm:tracking-[0.28em] font-semibold flex flex-wrap items-center gap-2 sm:gap-2.5 transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}
            >
              <span className={`font-bold tracking-wider text-sm sm:text-base ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                NARESH N
              </span>
              <span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>/</span>
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-amber-400" />
              <span className={`text-[11px] min-[360px]:text-xs sm:text-sm font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                {PERSONAL_INFO.title}
              </span>
            </div>
          </motion.div>

          {/* Headline: Big, bold serif typography that wraps cleanly & naturally on mobile like reference image */}
          <motion.div variants={fadeUpVariants} className="relative w-full max-w-full overflow-hidden">
            <h1
              className={`font-serif text-[2.75rem] min-[360px]:text-[3.25rem] min-[420px]:text-6xl md:text-7xl lg:text-8xl xl:text-[6.6rem] leading-[1.04] sm:leading-[0.96] tracking-tight uppercase transition-colors duration-300 ${isDark
                ? 'text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]'
                : 'text-black drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]'
                }`}
            >
              <span className="sr-only">Naresh N — Full Stack &amp; AI/ML Developer — </span>
              <span className={`block whitespace-normal sm:whitespace-nowrap font-light ${isDark ? 'text-white' : 'text-black'}`}>
                BUILDING DIGITAL
              </span>
              <span className={`block whitespace-normal sm:whitespace-nowrap font-light italic ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                EXPERIENCES AT THE
              </span>
              <span
                className={`block whitespace-normal sm:whitespace-nowrap font-light underline decoration-1 underline-offset-8 ${isDark
                  ? 'text-white decoration-white/30'
                  : 'text-black decoration-black/30'
                  }`}
              >
                EDGE OF CODE
              </span>
            </h1>
          </motion.div>

          {/* Intro Paragraph - Clean, legible small text hierarchy like the reference image */}
          <motion.p
            variants={fadeUpVariants}
            className={`text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed font-body transition-colors duration-300 ${isDark ? 'text-zinc-300' : 'text-zinc-700'
              }`}
          >
            {PERSONAL_INFO.subheadline}
          </motion.p>

          {/* Action Buttons: "Explore my work", "View resume" & "Download" - Pure Monochrome */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full">
            <a
              href="#projects"
              onClick={handleExploreWork}
              className={`group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm font-mono-code tracking-wider uppercase transition-all duration-300 active:scale-[0.98] shadow-2xl cursor-pointer ${isDark
                ? 'bg-white text-black hover:bg-zinc-200'
                : 'bg-black text-white hover:bg-zinc-800'
                }`}
            >
              <span>Explore my work</span>
              <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            {/* Custom Interactive Resume Viewer Trigger */}
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className={`group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border text-xs sm:text-sm font-mono-code tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 ${isDark
                ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                : 'border-black/25 bg-black/5 text-black hover:bg-black/10'
                }`}
            >
              <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>View resume</span>
            </button>

            {/* Quick Direct Download Action */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className={`group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full border text-xs sm:text-sm font-mono-code tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md hover:scale-105 ${isDark
                ? 'border-white/20 bg-black/60 text-zinc-300 hover:border-white/40 hover:text-white'
                : 'border-black/20 bg-white/75 text-zinc-700 hover:border-black/40 hover:text-black'
                }`}
              title="Download Resume PDF directly"
            >
              <Download className="w-4 h-4" />
              <span className="inline sm:hidden text-xs">Download</span>
              <span className="hidden sm:inline">Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
