import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { HACKATHONS } from '../data/content';

export const HackathonDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = HACKATHONS.find((h) => h.slug === slug);

  if (!item) {
    return <Navigate to="/hackathons" replace />;
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
          <Link to="/hackathons" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            Hackathons
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{item.eventName}</span>
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
              {item.date}
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-mono-code uppercase tracking-wider border border-white/30 text-white bg-white/10 font-bold">
              ★ {item.result}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
            {item.eventName}
          </h1>

          <div className="text-sm font-mono-code text-zinc-400 mb-6">
            Project Built: <span className="text-white font-semibold">{item.projectBuilt}</span> · Role: {item.role} · Team: {item.teamSize}
          </div>

          <p className="text-base font-light leading-relaxed mb-8 font-body" style={{ color: 'var(--text-secondary)' }}>
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            {item.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-mono-code uppercase rounded-md border" style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)', backgroundColor: 'var(--bg-card)' }}>
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {item.links.repo && (
              <a
                href={item.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
            {item.links.project && (
              <a
                href={item.links.project}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Project</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetailPage;
