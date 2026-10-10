import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/content';

interface VideoLayerProps {
  showSoundButton?: boolean;
}

export const VideoLayer: React.FC<VideoLayerProps> = ({ showSoundButton = true }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Video aligned right to preserve face view */}
      <div className="relative w-full h-full flex items-center justify-end">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={PERSONAL_INFO.videoPoster}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`h-screen w-auto max-w-none min-w-full object-cover lg:object-contain object-right lg:scale-100 transition-opacity duration-1000 ${isVideoLoaded
              ? theme === 'dark'
                ? 'opacity-90'
                : 'opacity-75'
              : 'opacity-30'
            }`}
        >
          <source src={PERSONAL_INFO.videoUrl} type="video/mp4" />
        </video>

        {/* Seamless Soft Left Mask - Switches with Theme */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-500"
          style={{
            background: 'var(--video-mask)',
          }}
        />

        {/* Bottom edge soft blend - Switches with Theme */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 pointer-events-none transition-all duration-500"
          style={{
            background: 'var(--video-mask-bottom)',
          }}
        />
      </div>

      {/* Sound On / Off Control Toggle Button - Follows theme colors and glass styling */}
      {showSoundButton && (
        <div className="fixed bottom-8 right-8 lg:bottom-10 lg:right-10 z-40 pointer-events-auto">
          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Turn video sound on' : 'Mute video sound'}
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
              color: 'var(--text-primary)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: 'inset 0 1px 0 0 var(--glass-highlight)',
            }}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-[11px] font-mono-code tracking-wider opacity-80 group-hover:opacity-100">AUDIO OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span className="text-[11px] font-mono-code tracking-wider font-semibold">AUDIO ON</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoLayer;
