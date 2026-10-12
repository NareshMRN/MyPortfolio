import React, { useState, useRef } from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  enableSpotlight?: boolean;
  enableShineSweep?: boolean;
  hoverLift?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  enableSpotlight = true,
  enableShineSweep = true,
  hoverLift = true,
  style,
  ...props
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableSpotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos(null);
    if (props.onMouseLeave) props.onMouseLeave(e);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
        hoverLift ? 'hover:-translate-y-1 hover:shadow-2xl' : ''
      } ${className}`.trim()}
      style={{
        backgroundColor: 'var(--glass-bg)',
        borderColor: 'var(--glass-border)',
        borderWidth: '1px',
        borderStyle: 'solid',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'inset 0 1px 0 0 var(--glass-highlight)',
        ...style,
      }}
      {...props}
    >
      {/* 0. Thin Top Accent Line: White in dark theme, black in light theme */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
        style={{
          backgroundColor: 'var(--card-top-line, var(--text-primary))',
        }}
      />

      {/* 1. Cursor Following Spotlight Glow */}
      {enableSpotlight && mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, var(--glass-spotlight), transparent 65%)`,
          }}
        />
      )}

      {/* 2. Diagonal Light Sweep on Hover (disabled on reduced motion) */}
      {enableShineSweep && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -inset-y-12 -left-3/4 w-1/2 bg-gradient-to-r from-transparent via-[var(--glass-highlight)] to-transparent opacity-30 transform -skew-x-25 group-hover:translate-x-[400%] transition-transform duration-1000 ease-out reduced-motion:hidden" />
        </div>
      )}

      {/* 3. Card Inner Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default GlassCard;
