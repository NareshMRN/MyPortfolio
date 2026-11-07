import React from 'react';

export const VideoLayer: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    />
  );
};

export default VideoLayer;
