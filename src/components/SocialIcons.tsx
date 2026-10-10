import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';
import { GithubIcon } from './Icons';

// Instagram Vector Icon
export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Kaggle Vector Icon
export const KaggleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.046-.054.088-.092.122s-.084.058-.133.07h-3.414a.5.5 0 0 1-.363-.156l-5.35-5.918-1.745 1.664v4.06a.35.35 0 0 1-.35.35H4.825a.35.35 0 0 1-.35-.35V.35a.35.35 0 0 1 .35-.35h2.553a.35.35 0 0 1 .35.35v14.417l6.837-7.234a.5.5 0 0 1 .363-.156h3.498a.35.35 0 0 1 .341.428l-6.046 6.326 6.13 9.408c.038.058.052.128.024.195z" />
  </svg>
);

// X (formerly Twitter) Vector Icon
export const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface SocialIconsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ size = 'md', className = '' }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const socials = [
    {
      name: 'GitHub',
      href: PERSONAL_INFO.githubUrl,
      icon: <GithubIcon className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />,
      ariaLabel: 'Visit Naresh on GitHub',
    },
    {
      name: 'Kaggle',
      href: PERSONAL_INFO.kaggleUrl,
      icon: <KaggleIcon className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />,
      ariaLabel: 'Visit Naresh on Kaggle',
    },
    {
      name: 'X (Twitter)',
      href: PERSONAL_INFO.xUrl,
      icon: <XIcon className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />,
      ariaLabel: 'Visit Naresh on X',
    },
    {
      name: 'Email',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: <Mail className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />,
      ariaLabel: 'Send email to Naresh',
    },
    {
      name: 'Instagram',
      href: PERSONAL_INFO.instagramUrl,
      icon: <InstagramIcon className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />,
      ariaLabel: 'Visit Naresh on Instagram',
    }
  ];

  const sizeClasses = {
    sm: 'w-9 h-9 rounded-lg',
    md: 'w-12 h-12 rounded-xl',
    lg: 'w-14 h-14 rounded-2xl',
  }[size];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {socials.map((social) => (
        <div key={social.name} className="relative">
          {/* Tooltip on hover */}
          {activeTooltip === social.name && (
            <div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[10px] font-mono-code uppercase tracking-wider whitespace-nowrap shadow-xl pointer-events-none z-30 transition-all border animate-in fade-in zoom-in-95 duration-150"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
              }}
            >
              {social.name}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 border-b border-r"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-strong)',
                }}
              />
            </div>
          )}

          {/* Glass Button with Shine and Lift */}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            onMouseEnter={() => setActiveTooltip(social.name)}
            onMouseLeave={() => setActiveTooltip(null)}
            className={`group relative flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-md overflow-hidden cursor-pointer ${sizeClasses}`}
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--glass-border)',
              borderWidth: '1px',
              borderStyle: 'solid',
              color: 'var(--text-primary)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: 'inset 0 1px 0 0 var(--glass-highlight)',
            }}
          >
            {/* Diagonal Light Sweep Shine */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -inset-y-6 -left-full w-full bg-gradient-to-r from-transparent via-[var(--glass-highlight)] to-transparent opacity-40 transform -skew-x-25 group-hover:translate-x-[280%] transition-transform duration-700 ease-out" />
            </div>

            {/* Icon */}
            <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
              {social.icon}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
