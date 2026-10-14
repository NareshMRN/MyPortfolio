import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { NAVIGATION_LINKS } from '../data/content';

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
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
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
        {/* LOGO - Cursive aesthetic signature brand */}
        <a
          href="/#hero"
          onClick={(e) => handleNavClick(e, '/#hero')}
          className="group flex items-center gap-1.5 select-none py-1"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Naresh Portfolio Home"
        >
          <span className="font-signature text-3xl sm:text-4xl font-normal tracking-wide transition-all duration-200 group-hover:scale-105 inline-block leading-none">
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <nav className="flex flex-col space-y-3">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono-code uppercase tracking-[0.25em] py-2 border-b transition-colors"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="inline-flex items-center justify-center gap-2 w-full text-xs font-mono-code uppercase tracking-wider px-4 py-3 rounded-full font-semibold mt-2"
            style={{
              backgroundColor: 'var(--accent-contrast)',
              color: 'var(--accent-contrast-inv)',
            }}
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
