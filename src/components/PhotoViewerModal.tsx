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
  Image as ImageIcon,
  Terminal,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface PhotoViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoViewerModal: React.FC<PhotoViewerModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

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

  // Handle ESC key press and scroll locking
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
      if (window.__lenis) {
        window.__lenis.stop();
      }
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
      if (window.__lenis) {
        window.__lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = 'auto';
      if (window.__lenis) {
        window.__lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isMinimized, isFullscreen, onClose]);

  if (!mounted || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {/* Minimized Dock Bar */}
      {isOpen && isMinimized && (
        <motion.div
          key="minimized-photo-dock"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className={`fixed bottom-4 right-3 sm:bottom-8 sm:right-8 z-[9999] max-w-[calc(100vw-1.5rem)] flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border backdrop-blur-xl shadow-2xl cursor-pointer transition-all group ${isDark
            ? 'border-white/20 bg-[#0a0a0c]/95 text-white hover:border-white/40'
            : 'border-black/15 bg-white/95 text-zinc-900 hover:border-black/30'
            }`}
          onClick={() => setIsMinimized(false)}
        >
          {/* Controls on dock */}
          <div
            className={`flex items-center gap-1.5 pr-2 sm:pr-2.5 border-r ${isDark ? 'border-white/10' : 'border-black/10'
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

          <div className="flex items-center gap-2 min-w-0">
            <ImageIcon className={`w-4 h-4 shrink-0 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`} />
            <span
              className={`font-mono-code text-xs font-medium truncate max-w-[100px] min-[360px]:max-w-[130px] sm:max-w-none ${isDark ? 'text-white' : 'text-zinc-900'
                }`}
            >
              photo.jpg
            </span>
            <span
              className={`text-[10px] font-mono-code uppercase px-2 py-0.5 rounded shrink-0 ${isDark ? 'bg-white/10 text-zinc-300' : 'bg-black/5 text-zinc-600'
                }`}
            >
              Restore
            </span>
          </div>
        </motion.div>
      )}

      {/* Full Modal Terminal Viewer */}
      {isOpen && !isMinimized && (
        <div
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          className={`fixed inset-0 z-[9999] flex items-center justify-center overscroll-contain transition-all duration-300 ${isFullscreen ? 'p-0' : 'p-3 sm:p-6 lg:p-10'
            }`}
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`absolute inset-0 backdrop-blur-md cursor-pointer transition-colors duration-300 ${isDark ? 'bg-black/85' : 'bg-black/40'
              }`}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent
            onWheel={(e) => e.stopPropagation()}
            className={`relative flex flex-col overflow-hidden z-10 transition-all duration-300 overscroll-contain ${isFullscreen
              ? 'w-full h-full max-w-none rounded-none border-none shadow-none'
              : 'w-full max-w-4xl h-[92vh] sm:h-[88vh] rounded-2xl border shadow-2xl'
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
            {/* Terminal Header Bar */}
            <div
              className={`flex items-center justify-between border-b backdrop-blur-lg transition-all duration-300 ${isFullscreen ? 'px-3 sm:px-6 py-1.5 sm:py-2' : 'px-4 sm:px-6 py-2.5 sm:py-3.5'
                } ${isDark
                  ? 'border-white/10 bg-black/60 text-white'
                  : 'border-black/10 bg-zinc-100/90 text-zinc-900'
                }`}
            >
              {/* Left: Window Controls & Title */}
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                {/* Traffic lights aesthetic */}
                <div
                  className={`group/controls flex items-center gap-1.5 pr-2 border-r ${isDark ? 'border-white/10' : 'border-black/10'
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

                <div className="flex items-center gap-2 min-w-0">
                  <Terminal className={`w-4 h-4 shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span
                    className={`font-mono-code text-xs sm:text-sm font-semibold tracking-wide truncate max-w-[120px] min-[360px]:max-w-[160px] min-[420px]:max-w-[210px] sm:max-w-none ${isDark ? 'text-white' : 'text-zinc-900'
                      }`}
                  >
                    naresh@portfolio: ~/photo.jpg
                  </span>
                  <span
                    className={`hidden sm:inline-block text-[10px] font-mono-code uppercase px-2 py-0.5 rounded shrink-0 ${isDark ? 'bg-white/10 text-zinc-300' : 'bg-black/5 text-zinc-600'
                      }`}
                  >
                    JPEG · 1080×1920
                  </span>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <a
                  href={PERSONAL_INFO.photo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider border transition-all ${isDark
                    ? 'text-zinc-300 border-white/15 bg-white/5 hover:border-white/40 hover:text-white'
                    : 'text-zinc-700 border-black/15 bg-black/5 hover:border-black/30 hover:text-black'
                    }`}
                  title="Open photo in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Tab</span>
                </a>





              </div>
            </div>

            {/* Terminal Command Subheader */}
            <div
              className={`border-b flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code whitespace-nowrap overflow-hidden transition-all duration-300 ${isFullscreen ? 'px-3 sm:px-6 py-1' : 'px-3 sm:px-6 py-1.5 sm:py-2'
                } ${isDark ? 'bg-black/40 border-white/5 text-zinc-400' : 'bg-zinc-50 border-black/5 text-zinc-500'}`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap min-w-0 overflow-hidden">
                <span className="text-emerald-500 font-bold shrink-0">➜</span>
                <span className={`shrink-0 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>~/assets</span>
                <span className="text-zinc-500 shrink-0">git:(main)</span>
                <span className={`truncate ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>cat photo.jpg --render</span>
              </div>
            </div>

            {/* Terminal Photo Body - Exact Fit with Zero Scrollbar */}
            <div
              className={`flex-1 w-full min-h-0 relative overflow-hidden flex items-center justify-center transition-all duration-300 ${isFullscreen ? 'p-1' : 'p-2 sm:p-4'
                } ${isDark ? 'bg-[#050507]' : 'bg-[#f4f4f5]'}`}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={`${PERSONAL_INFO.name} full portrait`}
                  className="h-full w-auto max-h-full max-w-full object-contain rounded-lg sm:rounded-xl shadow-2xl border transition-all duration-300 ease-out select-none"
                  style={{
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)',
                  }}
                />
              </div>
            </div>

            {/* Terminal Status Footer */}
            <div
              className={`border-t flex items-center justify-between text-[10px] sm:text-[11px] font-mono-code transition-all duration-300 ${isFullscreen ? 'px-3 sm:px-6 py-1' : 'px-4 sm:px-6 py-1.5 sm:py-2'
                } ${isDark
                  ? 'border-white/10 bg-black/60 text-zinc-400'
                  : 'border-black/10 bg-zinc-100/90 text-zinc-600'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>RENDER_OK</span>
                </span>
                <span className="hidden sm:inline text-zinc-500">|</span>
                <span className="hidden sm:inline">
                  {isFullscreen ? 'FULLSCREEN' : 'WINDOWED'} · 200 OK · 1080×1920
                </span>
              </div>
              <div>
                <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>{PERSONAL_INFO.fullName}</span>
                <span className="text-zinc-500"> · Mangaluru, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default PhotoViewerModal;

