import React from 'react';

interface StatusBadgeProps {
  status: 'Live' | 'In progress' | 'Past' | string;
  size?: 'sm' | 'md';
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = 'sm',
  className = '',
}) => {
  const norm = status.toLowerCase();
  const isLive = norm === 'live';
  const isInProgress = norm.includes('progress');

  const colorClasses = isLive
    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400'
    : isInProgress
    ? 'border-amber-500 text-amber-600 dark:text-amber-400 dark:border-amber-400'
    : 'border-zinc-400 text-zinc-700 dark:text-zinc-300 dark:border-zinc-500';

  const dotClasses = isLive
    ? 'bg-emerald-500 dark:bg-emerald-400'
    : isInProgress
    ? 'bg-amber-500 dark:bg-amber-400'
    : 'bg-zinc-500 dark:bg-zinc-400';

  const sizeClasses =
    size === 'md'
      ? 'text-xs px-3 py-1 gap-1.5'
      : 'text-[10px] px-2.5 py-0.5 gap-1.5';

  return (
    <span
      className={`inline-flex items-center font-mono-code uppercase rounded-full border bg-transparent font-semibold tracking-wider ${colorClasses} ${sizeClasses} ${className}`.trim()}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClasses}`} />
      <span>{status}</span>
    </span>
  );
};

export default StatusBadge;
