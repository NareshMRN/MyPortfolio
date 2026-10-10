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
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
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
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[9999] flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/20 bg-[#0a0a0c]/95 backdrop-blur-xl shadow-2xl cursor-pointer hover:border-white/40 transition-all group"
          onClick={() => setIsMinimized(false)}
        >
          {/* Controls on dock */}
          <div className="flex items-center gap-1.5 pr-2.5 border-r border-white/10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                setIsMinimized(false);
                onClose();
              }}
              className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer"
              title="Close"
              aria-label="Close"
            >
              <X className="w-2 h-2 text-[#4a0000]" strokeWidth={3} />
            </button>
            <button
              onClick={() => setIsMinimized(false)}
              className="w-3.5 h-3.5 rounded-full bg-[#27c93f] flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer"
              title="Restore"
              aria-label="Restore"
            >
              <Maximize2 className="w-2 h-2 text-[#003d13]" strokeWidth={3} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-zinc-300" />
            <span className="font-mono-code text-xs text-white font-medium">
              {PERSONAL_INFO.name}_Resume_2026.pdf
            </span>
            <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-white/10 text-zinc-300">
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
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
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
              backgroundColor: '#0a0a0c',
              borderColor: 'rgba(255, 255, 255, 0.18)',
              boxShadow: isFullscreen
                ? 'none'
                : '0 25px 60px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Custom Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/60 backdrop-blur-lg">
              {/* Left: Window Title & Status */}
              <div className="flex items-center gap-3">
                {/* Traffic lights aesthetic with functional icons */}
                <div className="group/controls flex items-center gap-1.5 pr-2 border-r border-white/10">
                  {/* Red: Close */}
                  <button
                    onClick={onClose}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
                    title="Close"
                    aria-label="Close"
                  >
                    <X className="w-2 h-2 text-[#4a0000] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                  </button>

                  {/* Yellow: Minimize */}
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
                    title="Minimize"
                    aria-label="Minimize"
                  >
                    <Minus className="w-2 h-2 text-[#4a2e00] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                  </button>

                  {/* Green: Fullscreen Toggle */}
                  <button
                    onClick={() => setIsFullscreen((prev) => !prev)}
                    className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center shadow-sm"
                    title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                    aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  >
                    {isFullscreen ? (
                      <Minimize2 className="w-2 h-2 text-[#003d13] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                    ) : (
                      <Maximize2 className="w-2 h-2 text-[#003d13] opacity-80 group-hover/controls:opacity-100 transition-opacity" strokeWidth={3} />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-zinc-300" />
                  <span className="font-mono-code text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {PERSONAL_INFO.name}_Resume_2026.pdf
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono-code bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Verified · 2nd Year
                  </span>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider text-zinc-300 border border-white/15 hover:border-white/40 hover:text-white transition-all bg-white/5"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Tab</span>
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                {/* Fullscreen Toggle Header Button */}
                <button
                  onClick={() => setIsFullscreen((prev) => !prev)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer hidden sm:inline-flex"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
                  title="Close resume viewer"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Viewer Body */}
            <div className="flex-1 w-full h-full relative bg-[#121214] overflow-hidden">
              <iframe
                src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Naresh Resume Document"
                className="w-full h-full border-none"
              />

              {/* Mobile Fallback Overlay if embedded PDF is unsupported */}
              <noscript>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-zinc-300">
                  <p className="mb-4">Unable to render PDF preview directly.</p>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download
                    className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs font-mono-code"
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
