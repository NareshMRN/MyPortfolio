import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/content';
import { TechBadge } from '../components/TechBadge';
import { useSeo } from '../hooks/useSeo';

export const AchievementsArchivePage: React.FC = () => {
  useSeo({
    title: 'Achievements & Milestones — Naresh N',
    description:
      'Milestones, recognitions, Kaggle Gradio Rank #63, and production releases by Naresh N.',
    path: '/achievements',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, []);

  return (
    <div className="min-h-screen py-24 sm:py-28 px-4 sm:px-10 lg:px-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <Link to="/#achievements" className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider mb-8 hover:underline" style={{ color: 'var(--text-muted)' }}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="mb-14">
          <span className="text-[11px] font-mono-code uppercase tracking-[0.35em] block mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>
            ARCHIVE // 04
          </span>
          <h1 className="font-section-head text-xl min-[360px]:text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight min-[480px]:tracking-normal font-extrabold break-normal leading-tight max-w-full">
            <span className="gold-gradient-text inline-block max-w-full">ALL ACHIEVEMENTS</span>
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Recognitions, production releases, and milestones achieved across competitions and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden card-gold-border card-top-line"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-strong)',
              }}
            >
              {/* Top Accent Line: White in dark theme, black in light theme */}
              <div
                className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                style={{ backgroundColor: 'var(--card-top-line)' }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-work-title text-3xl sm:text-4xl tracking-tight opacity-35 font-extrabold" style={{ color: 'var(--text-primary)' }}>
                    {item.year}
                  </span>
                  {item.result && (
                    <span
                      className="px-3.5 py-1.5 rounded-full text-[10.5px] font-mono-code uppercase tracking-wider border font-bold shadow-sm transition-all"
                      style={{
                        borderColor: 'var(--border-strong)',
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-card)',
                      }}
                    >
                      {item.result}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-mono-code uppercase tracking-wider block mb-1" style={{ color: 'var(--text-muted)' }}>
                  {item.organization}
                </span>
                <h2 className="font-work-title text-lg min-[400px]:text-xl sm:text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-white transition-colors break-words" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex flex-wrap gap-1 min-[360px]:gap-1.5 w-full">
                  {item.tags.map((t) => (
                    <TechBadge key={t} name={t} size="sm" />
                  ))}
                </div>
                <div className="flex justify-end">
                  <Link
                    to={`/achievements/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsArchivePage;
