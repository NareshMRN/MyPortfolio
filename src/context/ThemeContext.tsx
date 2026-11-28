import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { withThemeTransition } from '../lib/themeTransition';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** Reflects the theme on <html> (data-theme attribute + dark/light class). */
function applyThemeToDocument(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('naresh_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // fallback
    }
    return 'light'; // default cinematic light
  });

  // Latest theme, so rapid repeated toggles always flip from the current value
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    applyThemeToDocument(theme);
    try {
      localStorage.setItem('naresh_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  /**
   * Switches theme with a diagonal wipe: the new theme sweeps in from the top-right
   * corner (where the toggle lives) to the bottom-left, via the View Transitions API.
   * Falls back to an instant switch where unsupported or when reduced motion is preferred.
   */
  const changeTheme = (next: Theme) => {
    if (next === themeRef.current) return;
    withThemeTransition(() => {
      setThemeState(next);
      applyThemeToDocument(next);
    });
  };

  const toggleTheme = () => {
    changeTheme(themeRef.current === 'dark' ? 'light' : 'dark');
  };

  const setTheme = (t: Theme) => {
    changeTheme(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
