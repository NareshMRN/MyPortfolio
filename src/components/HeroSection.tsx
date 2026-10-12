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
  const fullTerminalText = PERSONAL_INFO.whoamiTerminal;
  const [typedText, setTypedText] = useState('');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTypedText(fullTerminalText);
      return;
    }

    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentIndex++;
        setTypedText(fullTerminalText.slice(0, currentIndex));
        if (currentIndex >= fullTerminalText.length) {
          clearInterval(interval);
        }
      }, 35);

      return () => clearInterval(interval);
    }, 350);

    return () => clearTimeout(startTimeout);
  }, [fullTerminalText]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-28 pb-16 pl-2 sm:pl-4 lg:pl-6 xl:pl-8 pr-4 sm:pr-8 lg:pr-12 xl:pr-16 transition-colors duration-500"
    >
      {/* Hero Content Container - Full Width edge-to-edge alignment */}
      <div className="w-full relative z-10 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl xl:max-w-4xl flex flex-col items-start space-y-5 sm:space-y-6 lg:space-y-8"
        >
          {/* Top Row: Availability Badge + Terminal Line */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            {/* Internship Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 ${isDark
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
              <span className="text-[10px] sm:text-[11px] font-mono-code uppercase tracking-wider font-semibold">
                {PERSONAL_INFO.statusBadge}
              </span>
            </div>

            {/* Terminal Typed Line Pill */}
            <div
              className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border shadow-lg backdrop-blur-md text-[10px] sm:text-[11px] font-mono-code transition-all duration-300 max-w-full overflow-hidden ${isDark
                ? 'border-white/15 bg-black/80 text-zinc-200'
                : 'border-black/15 bg-white/85 text-zinc-800'
                }`}
            >
              <span className="font-medium truncate">{typedText}</span>
              <span
                className={`animate-pulse inline-block w-1.5 h-3 flex-shrink-0 ${isDark ? 'bg-white' : 'bg-black'
                  }`}
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={fadeUpVariants}>
            <p
              className={`text-xs sm:text-sm font-mono-code uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold flex items-center gap-2 transition-colors duration-300 ${isDark ? 'text-zinc-400' : 'text-zinc-600'
                }`}
            >
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{PERSONAL_INFO.title}</span>
            </p>
          </motion.div>

          {/* Headline: strictly maximum 3 lines with mobile responsive scaling */}
          <motion.div variants={fadeUpVariants} className="relative w-full max-w-full overflow-hidden">
            <h1
              className={`font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.6rem] leading-[1.0] sm:leading-[0.96] tracking-tight uppercase transition-colors duration-300 ${isDark
                ? 'text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]'
                : 'text-black drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]'
                }`}
            >
              <span className={`block whitespace-nowrap font-light ${isDark ? 'text-white' : 'text-black'}`}>
                BUILDING DIGITAL
              </span>
              <span className={`block whitespace-nowrap font-light italic ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                EXPERIENCES AT THE
              </span>
              <span
                className={`block whitespace-nowrap font-light underline decoration-1 underline-offset-8 ${isDark
                  ? 'text-white decoration-white/30'
                  : 'text-black decoration-black/30'
                  }`}
              >
                EDGE OF CODE
              </span>
            </h1>
          </motion.div>

          {/* Intro Paragraph */}
          <motion.p
            variants={fadeUpVariants}
            className={`text-xs sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed font-body transition-colors duration-300 ${isDark ? 'text-zinc-300' : 'text-zinc-800'
              }`}
          >
            {PERSONAL_INFO.subheadline}
          </motion.p>

          {/* Action Buttons: "Explore my work", "View resume" & "Download" */}
          <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full">
            <a
              href="#projects"
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
                ? 'border-white/35 bg-white/10 text-white hover:bg-white/20'
                : 'border-black/30 bg-black/5 text-black hover:bg-black/10'
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
