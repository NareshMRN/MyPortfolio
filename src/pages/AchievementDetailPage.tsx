import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Award, Trophy, CheckCircle2, Layers, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/content';
import { TechBadge } from '../components/TechBadge';

export const AchievementDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = ACHIEVEMENTS.find((a) => a.slug === slug);

  if (!item) {
    return <Navigate to="/achievements" replace />;
  }

  // Find next achievement for recommendation
  const currentIndex = ACHIEVEMENTS.findIndex((a) => a.slug === slug);
  const nextItem = ACHIEVEMENTS[(currentIndex + 1) % ACHIEVEMENTS.length];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Full-width Hero */}
      <div
        className="relative pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden border-b"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        {/* Top Accent Line: White in dark theme, black in light theme */}
        <div
          className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
          style={{ backgroundColor: 'var(--card-top-line)' }}
        />

        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(229,184,66,0.05) 0%, transparent 50%, rgba(229,184,66,0.02) 100%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Breadcrumb */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10 text-xs font-mono-code uppercase tracking-wider flex-wrap">
            <Link
              to="/#achievements"
              className="inline-flex items-center gap-1.5 hover:underline transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <Link
              to="/achievements"
              className="hover:underline transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              Achievements
            </Link>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <span className="truncate max-w-[200px] sm:max-w-none" style={{ color: 'var(--text-primary)' }}>
              {item.title}
            </span>
          </div>

          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm font-mono-code font-bold" style={{ color: 'var(--gold-primary)' }}>
              {item.year} //
            </span>
            <span
              className="text-[11px] font-mono-code tracking-[0.2em] uppercase px-3 py-1 rounded-full border"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {item.organization}
            </span>

            {/* Result Badge */}
            {item.result && (
              <span
                className="px-4 py-1.5 rounded-full text-[10.5px] font-mono-code uppercase tracking-wider font-bold inline-flex items-center gap-1.5 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #FFD700 100%)',
                  color: '#1a1000',
                  border: '1px solid rgba(255, 215, 0, 0.6)',
                  boxShadow: '0 4px 16px rgba(218, 165, 32, 0.35)',
                }}
              >
                <Trophy className="w-3.5 h-3.5" /> {item.result}
              </span>
            )}
          </div>

          {/* Main Title */}
          <h1
            className="font-work-title text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight font-extrabold mb-6 break-words"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.title}
          </h1>

          {/* Overview text */}
          <p
            className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-4xl font-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            {item.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3.5 sm:gap-4">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #E5B842 0%, #DAA520 50%, #B8860B 100%)',
                  color: '#1a1000',
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Project / Verification Proof</span>
              </a>
            )}

            <Link
              to="/achievements"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/5 transition-all text-zinc-400 hover:text-white"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <span>All Achievements</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div
        className="border-b"
        style={{
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="py-6 sm:py-8 px-4 sm:px-6 text-center">
            <div className="text-[10px] font-mono-code uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--text-muted)' }}>
              YEAR ACHIEVED
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider break-words" style={{ color: 'var(--gold-primary)' }}>
              {item.year}
            </div>
          </div>

          <div className="py-6 sm:py-8 px-4 sm:px-6 text-center">
            <div className="text-[10px] font-mono-code uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--text-muted)' }}>
              ORGANIZATION / PLATFORM
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider break-words" style={{ color: 'var(--text-primary)' }}>
              {item.organization}
            </div>
          </div>

          <div className="py-6 sm:py-8 px-4 sm:px-6 text-center">
            <div className="text-[10px] font-mono-code uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--text-muted)' }}>
              RECOGNITION STANDING
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider break-words" style={{ color: 'var(--gold-primary)' }}>
              {item.result || 'Distinction'}
            </div>
          </div>

          <div className="py-6 sm:py-8 px-4 sm:px-6 text-center">
            <div className="text-[10px] font-mono-code uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--text-muted)' }}>
              VERIFIED DOMAIN
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider break-words" style={{ color: 'var(--text-primary)' }}>
              {item.tags[0] || 'Software'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        {/* Two-Column Deep-Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Card 1: Comprehensive Details */}
          <div
            className="card-gold-border card-top-line relative p-6 sm:p-9 rounded-2xl border transition-all duration-300 hover:shadow-xl overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(229,184,66,0.15) 0%, rgba(229,184,66,0.05) 100%)',
                  border: '1px solid rgba(229,184,66,0.3)',
                }}
              >
                <Award className="w-5 h-5" style={{ color: 'var(--gold-primary)' }} />
              </div>
              <div>
                <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                  TECHNICAL SPECIFICATION & OVERVIEW
                </h2>
                <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  COMPREHENSIVE BACKGROUND
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
              <p>
                {item.details || item.description}
              </p>
              <div
                className="p-4 rounded-xl border text-xs font-mono-code"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--gold-primary)' }}>
                  ASSOCIATED PLATFORM:
                </div>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  {item.organization} · {item.year}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Key Engineering Competencies */}
          <div
            className="card-gold-border card-top-line relative p-6 sm:p-9 rounded-2xl border transition-all duration-300 hover:shadow-xl overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />

            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)',
                  border: '1px solid rgba(16,185,129,0.3)',
                }}
              >
                <CheckCircle2 className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <div>
                <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                  CORE COMPETENCIES DEMONSTRATED
                </h2>
                <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  VERIFIED TECHNICAL RIGOR
                </span>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                <span
                  className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{
                    backgroundColor: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" style={{ color: '#10B981' }} />
                </span>
                <span>Disciplined execution adhering to rigorous production engineering benchmarks and industry standards.</span>
              </li>

              <li className="flex items-start gap-3 text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                <span
                  className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{
                    backgroundColor: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" style={{ color: '#10B981' }} />
                </span>
                <span>Autonomous ownership across entire architectural lifecycle from concept to verified proof.</span>
              </li>

              <li className="flex items-start gap-3 text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                <span
                  className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{
                    backgroundColor: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" style={{ color: '#10B981' }} />
                </span>
                <span>Competitive excellence with distinction: <strong className="font-semibold" style={{ color: 'var(--gold-primary)' }}>{item.result || 'Achieved'}</strong>.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack / Tags Card */}
        <div
          className="card-gold-border card-top-line relative p-6 sm:p-9 rounded-2xl border mb-12 sm:mb-16 overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-strong)',
          }}
        >
          {/* Top Accent Line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
            style={{ backgroundColor: 'var(--card-top-line)' }}
          />

          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 100%)',
                border: '1px solid rgba(168,85,247,0.3)',
              }}
            >
              <Layers className="w-5 h-5" style={{ color: '#A855F7' }} />
            </div>
            <div>
              <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                VERIFIED SKILLS & TECHNOLOGIES
              </h2>
              <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {item.tags.length} Domain Focus Areas
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {item.tags.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>

        {/* Next Recommendation / Explore Card */}
        {nextItem && nextItem.slug !== item.slug && (
          <div
            className="card-gold-border card-top-line relative p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />

            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-widest block mb-1" style={{ color: 'var(--text-muted)' }}>
                NEXT MILESTONE //
              </span>
              <h3 className="font-work-title text-xl sm:text-2xl font-bold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {nextItem.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono-code mt-1" style={{ color: 'var(--text-secondary)' }}>
                {nextItem.organization} · {nextItem.year} {nextItem.result && `· ${nextItem.result}`}
              </p>
            </div>

            <Link
              to={`/achievements/${nextItem.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold border hover:bg-white hover:text-black transition-all flex-shrink-0"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
              }}
            >
              <span>Explore Milestone</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementDetailPage;
