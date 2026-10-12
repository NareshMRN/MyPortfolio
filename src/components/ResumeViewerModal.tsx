import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Minus,
  Maximize2,
  Minimize2,
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Sun,
  Moon,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  // Always default to natural white theme until the user manually clicks "Dark Doc"
  const [invertDoc, setInvertDoc] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset modal view states when closed
  useEffect(() => {
    if (!isOpen) {
      setIsFullscreen(false);
      setIsMinimized(false);
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen && !isMinimized) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isMinimized, isFullscreen, onClose]);

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {/* Minimized Dock Bar */}
      {isOpen && isMinimized && (
        <motion.div
          key="minimized-dock"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[9999] flex items-center gap-3 px-4 py-2.5 rounded-2xl border backdrop-blur-xl shadow-2xl cursor-pointer transition-all group ${
            isDark
              ? 'border-white/20 bg-[#0a0a0c]/95 text-white hover:border-white/40'
              : 'border-black/15 bg-white/95 text-zinc-900 hover:border-black/30'
          }`}
          onClick={() => setIsMinimized(false)}
        >
          {/* Controls on dock */}
          <div
            className={`flex items-center gap-1.5 pr-2.5 border-r ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsMinimized(false);
                onClose();
              }}
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer shadow-sm"
              title="Close"
              aria-label="Close"
            >
              <X className="w-2 h-2 text-[#4a0000]" strokeWidth={3} />
            </button>
            <button
              onClick={() => setIsMinimized(false)}
              className="w-3.5 h-3.5 rounded-full bg-[#27c93f] flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer shadow-sm"
              title="Restore"
              aria-label="Restore"
            >
              <Maximize2 className="w-2 h-2 text-[#003d13]" strokeWidth={3} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <FileText className={`w-4 h-4 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`} />
            <span
              className={`font-mono-code text-xs font-medium ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              {PERSONAL_INFO.name}_Resume_2026.pdf
            </span>
            <span
              className={`text-[10px] font-mono-code uppercase px-2 py-0.5 rounded ${
                isDark ? 'bg-white/10 text-zinc-300' : 'bg-black/5 text-zinc-600'
              }`}
            >
              Restore
            </span>
          </div>
        </motion.div>
      )}

      {/* Full Modal Viewer */}
      {isOpen && !isMinimized && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ${
            isFullscreen ? 'p-0' : 'p-3 sm:p-6 lg:p-10'
          }`}
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`absolute inset-0 backdrop-blur-md cursor-pointer transition-colors duration-300 ${
              isDark ? 'bg-black/85' : 'bg-black/40'
            }`}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col overflow-hidden z-10 transition-all duration-300 ${
              isFullscreen
                ? 'w-full h-full max-w-none rounded-none border-none shadow-none'
                : 'w-full max-w-5xl h-[92vh] sm:h-[88vh] rounded-2xl border shadow-2xl'
            }`}
            style={{
              backgroundColor: isDark ? '#0a0a0c' : '#ffffff',
              borderColor: isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.12)',
              boxShadow: isFullscreen
                ? 'none'
                : isDark
                ? '0 25px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                : '0 25px 60px -15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            {/* Custom Header Bar */}
            <div
              className={`flex items-center justify-between px-4 sm:px-6 py-3.5 border-b backdrop-blur-lg transition-colors duration-300 ${
                isDark
                  ? 'border-white/10 bg-black/60 text-white'
                  : 'border-black/10 bg-zinc-100/90 text-zinc-900'
              }`}
            >
              {/* Left: Window Title & Status */}
              <div className="flex items-center gap-3">
                {/* Traffic lights aesthetic with functional icons */}
                <div
                  className={`group/controls flex items-center gap-1.5 pr-2 border-r ${
                    isDark ? 'border-white/10' : 'border-black/10'
                  }`}
                >
                  {/* Red: Close */}
                  <button
                    onClick={onClose}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
                    title="Close"
                    aria-label="Close"
                  >
                    <X
                      className="w-2 h-2 text-[#4a0000] opacity-80 group-hover/controls:opacity-100 transition-opacity"
                      strokeWidth={3}
                    />
                  </button>

                  {/* Yellow: Minimize */}
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
                    title="Minimize"
                    aria-label="Minimize"
                  >
                    <Minus
                      className="w-2 h-2 text-[#4a2e00] opacity-80 group-hover/controls:opacity-100 transition-opacity"
                      strokeWidth={3}
                    />
                  </button>

                  {/* Green: Fullscreen Toggle */}
                  <button
                    onClick={() => setIsFullscreen((prev) => !prev)}
                    className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
                    title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                    aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  >
                    {isFullscreen ? (
                      <Minimize2
                        className="w-2 h-2 text-[#003d13] opacity-80 group-hover/controls:opacity-100 transition-opacity"
                        strokeWidth={3}
                      />
                    ) : (
                      <Maximize2
                        className="w-2 h-2 text-[#003d13] opacity-80 group-hover/controls:opacity-100 transition-opacity"
                        strokeWidth={3}
                      />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <FileText className={`w-4 h-4 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`} />
                  <span
                    className={`font-mono-code text-xs sm:text-sm font-semibold tracking-wide ${
                      isDark ? 'text-white' : 'text-zinc-900'
                    }`}
                  >
                    {PERSONAL_INFO.name}_Resume_2026.pdf
                  </span>
                  <span
                    className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono-code ${
                      isDark
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                    }`}
                  >
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified · 2nd Year
                  </span>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Manual Document reading tone toggle (defaults to White Doc until clicked) */}
                <button
                  type="button"
                  onClick={() => setInvertDoc((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider border transition-all cursor-pointer ${
                    isDark
                      ? 'border-white/15 bg-white/5 text-zinc-300 hover:border-white/40 hover:text-white'
                      : 'border-black/15 bg-black/5 text-zinc-700 hover:border-black/30 hover:text-black'
                  }`}
                  title={invertDoc ? 'Switch back to original white document' : 'Switch to dark document tone'}
                >
                  {invertDoc ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                  <span className="hidden md:inline">
                    {invertDoc ? 'White Doc' : 'Dark Doc'}
                  </span>
                </button>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider border transition-all ${
                    isDark
                      ? 'text-zinc-300 border-white/15 bg-white/5 hover:border-white/40 hover:text-white'
                      : 'text-zinc-700 border-black/15 bg-black/5 hover:border-black/30 hover:text-black'
                  }`}
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Tab</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider font-semibold transition-all shadow-md ${
                    isDark
                      ? 'bg-white text-black hover:bg-zinc-200'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                {/* Fullscreen Toggle Header Button */}
                <button
                  onClick={() => setIsFullscreen((prev) => !prev)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer hidden sm:inline-flex ${
                    isDark
                      ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/10'
                  }`}
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={onClose}
                  className={`p-1.5 rounded-lg transition-colors ml-1 cursor-pointer ${
                    isDark
                      ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                      : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/10'
                  }`}
                  title="Close resume viewer"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Viewer Body */}
            <div
              className={`flex-1 w-full h-full relative overflow-hidden transition-colors duration-300 ${
                isDark ? 'bg-[#121214]' : 'bg-[#e4e4e7]'
              }`}
            >
              <iframe
                src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Naresh Resume Document"
                className="w-full h-full border-none transition-all duration-300"
                style={{
                  filter: invertDoc ? 'invert(0.92) hue-rotate(180deg) contrast(0.95)' : 'none',
                }}
              />

              {/* Mobile Fallback Overlay if embedded PDF is unsupported */}
              <noscript>
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${
                    isDark ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  <p className="mb-4">Unable to render PDF preview directly.</p>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download
                    className={`px-6 py-2.5 rounded-full font-semibold text-xs font-mono-code ${
                      isDark ? 'bg-white text-black' : 'bg-black text-white'
                    }`}
                  >
                    Download Resume PDF
                  </a>
                </div>
              </noscript>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ResumeViewerModal;
