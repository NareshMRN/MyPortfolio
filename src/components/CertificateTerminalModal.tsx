import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Minus,
  Maximize2,
  Minimize2,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sun,
  Moon,
  Plus,
  ExternalLink,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import type { CertificateItem } from '../data/content';

interface CertificateTerminalModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateTerminalModal: React.FC<CertificateTerminalModalProps> = ({
  certificate,
  onClose,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  // Optional local terminal theme override (null = auto follows global theme)
  const [localTheme, setLocalTheme] = useState<'light' | 'dark' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset states when a new certificate is opened
  useEffect(() => {
    if (certificate) {
      setIsMinimized(false);
      setIsMaximized(false);
    }
  }, [certificate]);

  // Lock body scroll when open and not minimized
  useEffect(() => {
    if (!certificate || isMinimized) {
      document.body.style.overflow = 'auto';
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMaximized) {
          setIsMaximized(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, isMinimized, isMaximized, onClose]);

  if (!mounted || !certificate) return null;

  // Active terminal theme (auto adjusts to global theme, or local toggle)
  const activeTheme = localTheme ?? theme;
  const isDark = activeTheme === 'dark';

  const toggleTerminalTheme = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Toggle both local terminal state and synchronize with user preference
    setLocalTheme((prev) => {
      const next = (prev ?? theme) === 'dark' ? 'light' : 'dark';
      return next;
    });
  };

  const modalContent = (
    <AnimatePresence>
      {/* 1. Minimized Floating Dock */}
      {isMinimized && (
        <motion.div
          key="minimized-dock"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMinimized(false)}
          className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[99999] flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border backdrop-blur-xl shadow-2xl cursor-pointer select-none transition-all group max-w-[calc(100vw-32px)] ${isDark
            ? 'border-white/20 bg-[#0c1017]/95 text-white hover:border-white/40'
            : 'border-black/15 bg-white/95 text-zinc-900 hover:border-black/30'
            }`}
          style={{
            boxShadow: isDark
              ? '0 20px 40px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
              : '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          {/* Traffic light buttons */}
          <div
            className={`flex items-center gap-1.5 pr-2 sm:pr-2.5 border-r shrink-0 ${isDark ? 'border-white/15' : 'border-black/15'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setIsMinimized(false);
                onClose();
              }}
              title="Close"
              aria-label="Close"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
            >
              <X className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-[#4a0000]" strokeWidth={3} />
            </button>
            <button
              type="button"
              onClick={() => setIsMinimized(false)}
              title="Restore"
              aria-label="Restore"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
            >
              <Plus className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-[#003d13]" strokeWidth={3} />
            </button>
          </div>

          <div className="flex items-center gap-2 min-w-0">
            <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0" />
            <span className="font-mono-code text-[11px] sm:text-xs font-semibold truncate max-w-[140px] sm:max-w-[200px]">
              {certificate.slug}.cert
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-mono-code uppercase px-1.5 sm:px-2 py-0.5 rounded font-medium shrink-0 ${isDark ? 'bg-white/10 text-zinc-300' : 'bg-black/5 text-zinc-700'
                }`}
            >
              Restore
            </span>
          </div>
        </motion.div>
      )}

      {/* 2. Main Full Terminal Modal Lightbox */}
      {!isMinimized && (
        <div
          key="terminal-modal-backdrop"
          className={`fixed inset-0 z-[99999] flex items-center justify-center transition-all duration-300 ${isMaximized ? 'p-0' : 'p-2 sm:p-6 lg:p-8'
            }`}
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`absolute inset-0 backdrop-blur-md cursor-pointer transition-colors duration-300 ${isDark ? 'bg-black/85' : 'bg-black/50'
              }`}
          />

          {/* Terminal Window Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative flex flex-col overflow-hidden z-10 transition-all duration-300 ${isMaximized
              ? 'w-full h-full max-w-none rounded-none border-none'
              : 'w-full max-w-5xl h-[94vh] sm:h-[88vh] rounded-xl sm:rounded-2xl border shadow-2xl'
              }`}
            style={{
              backgroundColor: isDark ? '#0c1017' : '#ffffff',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.15)',
              boxShadow: isMaximized
                ? 'none'
                : isDark
                  ? '0 25px 60px -15px rgba(0, 0, 0, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.18)'
                  : '0 25px 60px -15px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            {/* macOS Title Bar with Close, Minimize, Full View Controls & Icons */}
            <div
              className={`flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 border-b select-none shrink-0 transition-colors duration-300 gap-2 ${isDark
                ? 'border-white/10 bg-[#161b26] text-white'
                : 'border-black/10 bg-[#f1f5f9] text-zinc-900'
                }`}
            >
              {/* Traffic Light Controls & Title */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div
                  className={`group/controls flex items-center gap-1.5 pr-2 sm:pr-2.5 border-r shrink-0 ${isDark ? 'border-white/15' : 'border-black/15'
                    }`}
                >
                  {/* Close Red Button */}
                  <button
                    type="button"
                    onClick={onClose}
                    title="Close Terminal"
                    aria-label="Close Terminal"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56] hover:opacity-90 transition-all cursor-pointer flex items-center justify-center shadow-sm hover:scale-110"
                    style={{ border: '1px solid #e0443e' }}
                  >
                    <X className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-[#4a0000] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                  </button>

                  {/* Minimize Yellow Button */}
                  <button
                    type="button"
                    onClick={() => setIsMinimized(true)}
                    title="Minimize to Dock"
                    aria-label="Minimize to Dock"
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e] hover:opacity-90 transition-all cursor-pointer flex items-center justify-center shadow-sm hover:scale-110"
                    style={{ border: '1px solid #dea123' }}
                  >
                    <Minus className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-[#4a2e00] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                  </button>

                  {/* Maximize Green Button */}
                  <button
                    type="button"
                    onClick={() => setIsMaximized(!isMaximized)}
                    title={isMaximized ? 'Exit Full Screen' : 'Full Screen'}
                    aria-label={isMaximized ? 'Exit Full Screen' : 'Full Screen'}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f] hover:opacity-90 transition-all cursor-pointer flex items-center justify-center shadow-sm hover:scale-110"
                    style={{ border: '1px solid #1aab29' }}
                  >
                    {isMaximized ? (
                      <Minimize2 className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-[#003d13] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                    ) : (
                      <Plus className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-[#003d13] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                    )}
                  </button>
                </div>

                {/* Window Title Path */}
                <div className="flex items-center gap-1.5 text-xs font-mono-code font-medium min-w-0 truncate">
                  <Terminal className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className={`truncate ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    <span className="hidden sm:inline">naresh@portfolio: ~/certificates/</span>
                    <span className="font-semibold">{certificate.slug}.cert</span>
                  </span>
                </div>
              </div>

              {/* Title Bar Actions & Controls with Icons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Auto Theme Adjust Toggle Button */}
                <button
                  type="button"
                  onClick={toggleTerminalTheme}
                  title={`Terminal Mode: ${isDark ? 'Dark (Click for Light)' : 'Light (Click for Dark)'}`}
                  className={`inline-flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider border transition-all cursor-pointer ${isDark
                    ? 'border-white/15 bg-white/5 text-zinc-300 hover:border-white/35 hover:text-white'
                    : 'border-black/15 bg-black/5 text-zinc-700 hover:border-black/30 hover:text-black'
                    }`}
                >
                  {isDark ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span className="hidden md:inline">Light Term</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-blue-600" />
                      <span className="hidden md:inline">Dark Term</span>
                    </>
                  )}
                </button>

                {/* Full View / Restore Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMaximized(!isMaximized)}
                  title={isMaximized ? 'Restore View' : 'Full View'}
                  className={`inline-flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider border transition-all cursor-pointer ${isDark
                    ? 'border-white/15 bg-white/5 text-zinc-300 hover:border-white/35 hover:text-white'
                    : 'border-black/15 bg-black/5 text-zinc-700 hover:border-black/30 hover:text-black'
                    }`}
                >
                  {isMaximized ? (
                    <>
                      <Minimize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Restore</span>
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Full View</span>
                    </>
                  )}
                </button>

                {/* Window Close X */}
                {/*<button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${isDark
                    ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/10'
                    }`}
                >
                  <X className="w-4 h-4" />
                </button>
                */}
              </div>
            </div>

            {/* Terminal Command Prompt Bar */}
            <div
              className={`p-2.5 sm:p-4 font-mono-code text-[11px] sm:text-xs border-b space-y-1 shrink-0 transition-colors duration-300 ${isDark
                ? 'border-white/10 bg-[#0d111a] text-zinc-300'
                : 'border-black/10 bg-[#f8fafc] text-zinc-800'
                }`}
            >
              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                <span className="text-emerald-500 font-bold shrink-0">naresh@portfolio</span>
                <span className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>:</span>
                <span className={`${isDark ? 'text-cyan-400' : 'text-cyan-700'} font-semibold truncate max-w-[110px] sm:max-w-none`}>
                  ~/certificates
                </span>
                <span className="text-emerald-500 font-bold">$</span>
                <span className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold shrink-0`}>
                  view_cert
                </span>
                <span className={`${isDark ? 'text-cyan-300' : 'text-cyan-600'} shrink-0`}>--slug</span>
                <span className={`${isDark ? 'text-amber-300' : 'text-amber-700'} font-semibold break-all`}>
                  {certificate.slug}
                </span>
                <span className="hidden sm:inline text-cyan-300">--mode</span>
                <span className="hidden sm:inline text-emerald-500 font-medium">{isMaximized ? 'fullscreen' : 'standard'}</span>
              </div>
              <div
                className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-[11px] ${isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}
              >
                <span className="text-emerald-500 font-semibold flex items-center gap-1 shrink-0">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> [VERIFIED_ACCREDITATION]
                </span>
                <span className="truncate max-w-[180px] min-[400px]:max-w-xs sm:max-w-none">
                  // {certificate.issuer} · {certificate.date}
                </span>
              </div>
            </div>

            {/* High-Fidelity Certificate Canvas (Fits properly and centers beautifully) */}
            <div
              className={`flex-1 w-full min-h-0 relative flex items-center justify-center p-2 sm:p-6 overflow-auto transition-colors duration-300 ${isDark ? 'bg-[#06080d]' : 'bg-[#eef2f6]'
                }`}
            >
              {certificate.image ? (
                <div className="relative max-w-full max-h-full flex items-center justify-center p-1 sm:p-2">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className={`max-w-full max-h-full w-auto h-auto object-contain rounded-lg sm:rounded-xl shadow-2xl transition-all duration-300 ${isMaximized ? 'max-h-[75vh]' : 'max-h-[48vh] min-[480px]:max-h-[56vh] sm:max-h-[64vh]'
                      }`}
                    style={{
                      border: isDark
                        ? '1px solid rgba(255, 255, 255, 0.15)'
                        : '1px solid rgba(0, 0, 0, 0.12)',
                      boxShadow: isDark
                        ? '0 20px 50px rgba(0, 0, 0, 0.8)'
                        : '0 20px 45px rgba(0, 0, 0, 0.18)',
                    }}
                  />
                </div>
              ) : (
                <div className="p-6 text-center font-mono-code text-xs">
                  <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500 mx-auto mb-2" />
                  <span className={`font-semibold text-xs sm:text-sm ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    {certificate.title}
                  </span>
                </div>
              )}
            </div>

            {/* Terminal Status & Action Footer */}
            <div
              className={`px-3 sm:px-6 py-2.5 sm:py-3 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 select-none shrink-0 transition-colors duration-300 ${isDark
                ? 'border-white/10 bg-[#161b26] text-white'
                : 'border-black/10 bg-[#f1f5f9] text-zinc-900'
                }`}
            >
              <div className="flex items-center gap-1.5 min-w-0 max-w-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span
                  className={`text-[10.5px] sm:text-[11px] font-mono-code truncate ${isDark ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                >
                  // TITLE:{' '}
                  <strong className={isDark ? 'text-white font-medium' : 'text-zinc-900 font-medium'}>
                    {certificate.title}
                  </strong>
                </span>
              </div>

              {/* Action buttons with clear icons */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap sm:flex-nowrap justify-end w-full sm:w-auto">
                {certificate.kaggleLink && (
                  <a
                    href={certificate.kaggleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-mono-code uppercase tracking-wider border transition-all cursor-pointer ${isDark
                      ? 'border-amber-500/30 bg-amber-950/20 text-amber-300 hover:border-amber-400'
                      : 'border-amber-600/30 bg-amber-50 text-amber-800 hover:border-amber-600'
                      }`}
                  >
                    <span>Kaggle</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}

                {certificate.credentialLink && (
                  <a
                    href={certificate.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-mono-code uppercase tracking-wider border transition-all cursor-pointer ${isDark
                      ? 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300 hover:border-emerald-400'
                      : 'border-emerald-600/30 bg-emerald-50 text-emerald-800 hover:border-emerald-600'
                      }`}
                  >
                    <span>Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <Link
                  to={`/certificates/${certificate.slug}`}
                  onClick={onClose}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 sm:px-3.5 rounded-lg text-[11px] sm:text-xs font-mono-code uppercase tracking-wider font-semibold transition-all shadow-md ${isDark
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                    }`}
                >
                  <span className="hidden min-[380px]:inline">Overview & Specs</span>
                  <span className="min-[380px]:hidden">Overview</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};
