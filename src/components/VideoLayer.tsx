import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/content';

export const VideoLayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { theme } = useTheme();

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
          muted
          loop
          playsInline
          poster={PERSONAL_INFO.videoPoster}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`h-screen w-auto max-w-none min-w-full object-cover lg:object-contain object-right lg:scale-100 transition-opacity duration-1000 ${
            isVideoLoaded
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
    </div>
  );
};

export default VideoLayer;
