import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Award, Trophy, CheckCircle2, Layers, ShieldCheck, ArrowRight, Sparkles, Target } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/content';
import { TechBadge } from '../components/TechBadge';
import { useSeo } from '../hooks/useSeo';

export const AchievementDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = ACHIEVEMENTS.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, [slug]);

  useSeo({
    title: item ? `${item.title} — Achievement by Naresh N` : 'Achievement — Naresh N',
    description: item?.description ?? '',
    path: `/achievements/${slug}`,
    noindex: !item,
  });

  if (!item) {
    return <Navigate to="/achievements" replace />;
  }

  // Find next achievement for recommendation
  const currentIndex = ACHIEVEMENTS.findIndex((a) => a.slug === slug);
  const nextItem = ACHIEVEMENTS[(currentIndex + 1) % ACHIEVEMENTS.length];

  return (
    <div
      className="min-h-screen py-24 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 mb-8 text-xs font-mono-code uppercase tracking-wider flex-wrap">
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

        {/* Text-First Header Area (Full Width, Open Text) */}
        <div className="mb-10">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
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
            className="font-work-title text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight font-extrabold mb-4 break-normal leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.title}
          </h1>

          {/* Overview text */}
          <p
            className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6 max-w-4xl font-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            {item.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Achievements</span>
            </Link>
          </div>

          {/* Quick Badges Row */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>

        {/* Metrics Strip - Small Minimal Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div
            className="card-gold-border card-top-line relative p-4 sm:p-5 rounded-xl border text-center flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />
            <div className="text-[10px] font-mono-code uppercase tracking-[0.25em] mb-1.5" style={{ color: 'var(--text-muted)' }}>
              YEAR ACHIEVED
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--gold-primary)' }}>
              {item.year}
            </div>
          </div>

          <div
            className="card-gold-border card-top-line relative p-4 sm:p-5 rounded-xl border text-center flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />
            <div className="text-[10px] font-mono-code uppercase tracking-[0.25em] mb-1.5" style={{ color: 'var(--text-muted)' }}>
              ORGANIZATION / PLATFORM
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
              {item.organization}
            </div>
          </div>

          <div
            className="card-gold-border card-top-line relative p-4 sm:p-5 rounded-xl border text-center flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />
            <div className="text-[10px] font-mono-code uppercase tracking-[0.25em] mb-1.5" style={{ color: 'var(--text-muted)' }}>
              RECOGNITION STANDING
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--gold-primary)' }}>
              {item.result || 'Distinction'}
            </div>
          </div>

          <div
            className="card-gold-border card-top-line relative p-4 sm:p-5 rounded-xl border text-center flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />
            <div className="text-[10px] font-mono-code uppercase tracking-[0.25em] mb-1.5" style={{ color: 'var(--text-muted)' }}>
              VERIFIED DOMAIN
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
              {item.tags[0] || 'Software'}
            </div>
          </div>
        </div>

        {/* Milestone & Impact Overview */}
        <div
          className="rounded-2xl border overflow-hidden shadow-2xl mb-12 card-gold-border card-top-line relative transition-colors duration-300"
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

          {/* Technical Documentation Content */}
          <div className="p-6 sm:p-10 font-body space-y-10">
            {/* Title & Organization Header */}
            <div className="border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2 text-xs font-mono-code mb-2" style={{ color: 'var(--gold-primary)' }}>
                <span># milestone</span>
                <span>/</span>
                <span>{item.slug}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h2>
              <p className="text-sm sm:text-base font-mono-code mt-2 font-normal" style={{ color: 'var(--text-muted)' }}>
                Organization: <strong className="text-emerald-400">{item.organization}</strong> · Year: {item.year}
              </p>
            </div>

            {/* GitHub Callout Alert: Milestone Scope */}
            <div
              className="p-5 rounded-xl border-l-4 text-xs sm:text-sm font-mono-code space-y-2"
              style={{
                backgroundColor: 'rgba(229, 184, 66, 0.06)',
                borderColor: 'var(--border-subtle)',
                borderLeftColor: 'var(--gold-primary)',
              }}
            >
              <div className="font-bold flex items-center gap-2 text-amber-500 uppercase tracking-widest text-xs">
                <Target className="w-4 h-4" /> [!MILESTONE_DISTINCTION]
              </div>
              <p className="leading-relaxed font-body text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>

            {/* Markdown Section 1: Technical Specification & Background */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Technical Specification & Comprehensive Overview
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  {item.details || item.description}
                </p>
                <div
                  className="p-4 rounded-xl border font-mono-code text-xs space-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="text-[10px] uppercase tracking-wider font-bold" style={{ color: 'var(--gold-primary)' }}>
                    ACCREDITING PLATFORM / BODY:
                  </div>
                  <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {item.organization} · {item.year}
                  </div>
                </div>
              </div>
            </div>

            {/* Markdown Section 2: Core Competencies Demonstrated */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Core Competencies & Technical Rigor Demonstrated
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div
                  className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span style={{ color: 'var(--text-secondary)' }}>
                    Disciplined execution adhering to rigorous production engineering benchmarks and industry standards.
                  </span>
                </div>

                <div
                  className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span style={{ color: 'var(--text-secondary)' }}>
                    Autonomous ownership across entire architectural lifecycle from concept to verified proof.
                  </span>
                </div>

                <div
                  className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed md:col-span-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <Trophy className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span style={{ color: 'var(--text-secondary)' }}>
                    Competitive excellence with distinction: <strong style={{ color: 'var(--gold-primary)' }}>{item.result || 'Achieved'}</strong>.
                  </span>
                </div>
              </div>
            </div>

            {/* Markdown Section 3: Deployed Stack / Domain Areas */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Layers className="w-5 h-5 text-purple-400" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Verified Domain Areas & Technologies
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {item.tags.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Recommendation / Explore Card */}
        {nextItem && nextItem.slug !== item.slug && (
          <div
            className="card-gold-border card-top-line relative p-6 sm:p-8 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden mb-12"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
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

        {/* Footer Navigation */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 pt-8 border-t mb-12"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <span className="text-xs sm:text-sm font-mono-code" style={{ color: 'var(--text-muted)' }}>
            Achievement <strong style={{ color: 'var(--text-primary)' }}>{item.title}</strong> · {item.year}
          </span>

          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all achievements</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetailPage;
