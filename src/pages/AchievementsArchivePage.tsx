import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/content';

export const AchievementsArchivePage: React.FC = () => {
  return (
    <div className="min-h-screen py-28 px-6 sm:px-10 lg:px-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <Link to="/#achievements" className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider mb-8 hover:underline" style={{ color: 'var(--text-muted)' }}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="mb-14">
          <span className="text-[11px] font-mono-code uppercase tracking-[0.35em] block mb-3" style={{ color: 'var(--text-muted)' }}>
            ARCHIVE // 04
          </span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
            ALL ACHIEVEMENTS
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Recognitions, production releases, and milestones achieved across competitions and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-4xl tracking-tight opacity-20 font-bold" style={{ color: 'var(--text-primary)' }}>
                    {item.year}
                  </span>
                  {item.result && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider border border-white/30 text-white bg-white/10 font-medium">
                      {item.result}
                    </span>
                  )}
                </div>

                <span className="text-[11px] font-mono-code uppercase tracking-wider block mb-1" style={{ color: 'var(--text-muted)' }}>
                  {item.organization}
                </span>
                <h2 className="font-display text-2xl uppercase tracking-wide mb-3 group-hover:text-white transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-[10px] font-mono-code uppercase rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>

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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsArchivePage;
