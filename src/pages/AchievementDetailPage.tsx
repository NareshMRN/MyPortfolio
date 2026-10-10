import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/content';

export const AchievementDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = ACHIEVEMENTS.find((a) => a.slug === slug);

  if (!item) {
    return <Navigate to="/achievements" replace />;
  }

  return (
    <div className="min-h-screen py-28 px-6 sm:px-10 lg:px-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-xs font-mono-code uppercase tracking-wider">
          <Link to="/#achievements" className="inline-flex items-center gap-1.5 hover:underline" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <Link to="/achievements" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            Achievements
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{item.title}</span>
        </div>

        <div
          className="relative rounded-2xl border p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-strong)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono-code uppercase tracking-widest text-zinc-400">
              {item.organization} · {item.year}
            </span>
            {item.result && (
              <span className="px-3.5 py-1 rounded-full text-xs font-mono-code uppercase tracking-wider border border-white/30 text-white bg-white/10 font-medium">
                {item.result}
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
            {item.title}
          </h1>

          <p className="text-base sm:text-lg font-light leading-relaxed mb-8 font-body" style={{ color: 'var(--text-secondary)' }}>
            {item.details || item.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            {item.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-mono-code uppercase rounded-md border" style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-card)' }}>
                {t}
              </span>
            ))}
          </div>

          {item.link && (
            <div className="mt-8">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Associated Project / Proof</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementDetailPage;
