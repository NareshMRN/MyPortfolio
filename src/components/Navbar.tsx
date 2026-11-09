import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NAVIGATION_LINKS } from '../data/content';

// Streamlined mobile navigation links for a cleaner, compact experience on small devices
const MOBILE_NAV_LINKS = [
  { name: 'ABOUT', href: '/#about' },
  { name: 'SKILLS', href: '/#skills' },
  { name: 'PROJECTS', href: '/#projects' },
  { name: 'ACHIEVEMENTS', href: '/#achievements' },
  { name: 'CONTACT', href: '/#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        setMobileMenuOpen(false);
        setTimeout(() => {
          if (window.__lenis) {
            window.__lenis.scrollTo(element, {
              duration: 1.8,
              offset: -40,
              easing: (t: number) => 1 - Math.pow(1 - t, 4),
            });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'backdrop-blur-md border-b shadow-xl py-3.5'
        : 'backdrop-blur-sm border-b py-4 lg:py-5'
        }`}
      style={{
        backgroundColor: scrolled
          ? theme === 'dark'
            ? 'rgba(0, 0, 0, 0.85)'
            : 'rgba(255, 255, 255, 0.85)'
          : theme === 'dark'
            ? 'rgba(0, 0, 0, 0.5)'
            : 'rgba(255, 255, 255, 0.5)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* LOGO - Segoe Script brand name */}
        <a
          href="https://nareshn.me"
          onClick={(e) => handleNavClick(e, 'https://nareshn.me')}
          className="group flex items-center gap-1.5 select-none py-1"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Naresh Portfolio Home"
        >
          <span className="font-segoe-script font-bold text-2xl sm:text-3xl tracking-normal transition-all duration-200 group-hover:opacity-80 inline-block leading-none">
            Naresh N
          </span>
        </a>

        {/* RIGHT SIDE: Desktop Nav items + Controls, occupying full right side */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-10 ml-auto">
          <nav className="flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[12px] font-medium tracking-[0.28em] transition-colors duration-200 uppercase relative group py-1"
                style={{
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-secondary)')
                }
              >
                {link.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--text-primary)' }}
                />
              </a>
            ))}
          </nav>

          {/* RIGHT CONTROLS: "Let's talk" + Theme Toggle */}
          <div className="flex items-center space-x-4 pl-2">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="group flex items-center gap-1.5 text-[11px] font-mono-code tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200 shadow-sm hover:scale-105"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full border transition-colors cursor-pointer"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-white" />
              ) : (
                <Moon className="w-4 h-4 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-black" />}
          </button>

          {/* 2-line animated hamburger toggle button for small devices */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 w-9 h-9 rounded-full border flex flex-col justify-center items-center gap-[6px] transition-colors cursor-pointer select-none"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="w-[18px] h-[2px] rounded-full block origin-center pointer-events-none"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="w-[18px] h-[2px] rounded-full block origin-center pointer-events-none"
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU - Smooth Animated Transition with inner wrapper to eliminate padding-height stall */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="md:hidden overflow-hidden border-t shadow-2xl backdrop-blur-xl"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div className="px-6 py-5 space-y-4">
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.04, delayChildren: 0.02 } },
                  closed: { transition: { staggerChildren: 0.01, staggerDirection: -1 } },
                }}
                className="flex flex-col space-y-1"
              >
                {MOBILE_NAV_LINKS.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -6 },
                    }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between text-xs font-mono-code uppercase tracking-[0.22em] py-3 px-2 border-b transition-colors active:opacity-70"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] font-mono-code opacity-40">→</span>
                  </motion.a>
                ))}
              </motion.nav>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="pt-1"
              >
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="inline-flex items-center justify-center gap-2 w-full text-xs font-mono-code uppercase tracking-wider px-4 py-3 rounded-full font-semibold active:scale-[0.98] transition-transform shadow-md"
                  style={{
                    backgroundColor: 'var(--accent-contrast)',
                    color: 'var(--accent-contrast-inv)',
                  }}
                >
                  <span>LET'S TALK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
