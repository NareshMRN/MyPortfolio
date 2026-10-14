import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { SocialIcons } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative w-full border-t transition-colors duration-500 overflow-x-hidden"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      {/* Top Meta Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span
            className="text-xs font-mono-code uppercase tracking-wider"
            style={{ color: 'var(--text-secondary)' }}
          >
            Available for high-impact roles & AI collaborations
          </span>
        </div>

        <div className="flex items-center gap-6">
          <SocialIcons size="sm" />
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono-code uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)',
            }}
          >
          </button>
        </div>
      </div>

      {/* Massive Full-Width Name Display */}
      <div
        className="w-full overflow-hidden select-none py-6 sm:py-10 md:py-14 text-center border-y"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <h2
          className="font-display font-black uppercase text-center leading-[0.82] w-full block select-none whitespace-nowrap transition-all duration-300 pointer-events-none"
          style={{
            fontSize: 'clamp(3.8rem, 18.2vw, 24rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.015em',
          }}
        >
          {PERSONAL_INFO.fullName.toUpperCase()}
        </h2>
      </div>

      {/* Bottom Legal / Copyright Row */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code"
        style={{ color: 'var(--text-muted)' }}
      >
        <div>
          © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-4">
          <span>BUILT WITH INTENT</span>
          <span>·</span>
          <span>MANGALURU, INDIA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
