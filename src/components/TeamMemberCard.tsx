import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { TeamMember } from '../data/content';

interface TeamMemberCardProps {
  member: TeamMember;
  variant?: 'card' | 'circle-only';
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  variant = 'card',
  className = '',
}) => {
  // Generate 2-letter uppercase initials from name
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

  if (variant === 'circle-only') {
    return (
      <a
        href={member.github || '#'}
        target={member.github ? '_blank' : undefined}
        rel="noopener noreferrer"
        title={`${member.name}${member.role ? ` · ${member.role}` : ''} — View GitHub`}
        className={`group relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-200 hover:scale-110 hover:z-20 cursor-pointer shadow-sm ${className}`.trim()}
        style={{
          borderColor: 'var(--border-strong)',
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-primary)',
        }}
      >
        <span className="text-[11px] font-mono-code font-bold tracking-tight group-hover:hidden select-none">
          {initials}
        </span>
        <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden group-hover:block transition-transform select-none" />
      </a>
    );
  }

  return (
    <a
      href={member.github || '#'}
      target={member.github ? '_blank' : undefined}
      rel="noopener noreferrer"
      title={`${member.name} — Click to open GitHub profile`}
      className={`group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-zinc-400 dark:hover:border-zinc-400 cursor-pointer ${className}`.trim()}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Small circle avatar with initials / GitHub hover swap */}
      <div
        className="relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:scale-105"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-strong)',
        }}
      >
        <span
          className="text-xs font-mono-code font-bold tracking-wider group-hover:opacity-0 transition-opacity select-none"
          style={{ color: 'var(--text-primary)' }}
        >
          {initials}
        </span>
        <GithubIcon className="w-4 h-4 absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity text-current" />
      </div>

      {/* Member details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span
            className="text-xs sm:text-sm font-semibold truncate group-hover:underline"
            style={{ color: 'var(--text-primary)' }}
          >
            {member.name}
          </span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-70 transition-opacity flex-shrink-0" />
        </div>
        {member.role && (
          <span
            className="text-[10px] font-mono-code uppercase tracking-wider block truncate"
            style={{ color: 'var(--text-muted)' }}
          >
            {member.role}
          </span>
        )}
      </div>
    </a>
  );
};

export default TeamMemberCard;
