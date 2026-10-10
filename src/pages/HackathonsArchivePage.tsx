import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Users } from 'lucide-react';
import { HACKATHONS } from '../data/content';

export const HackathonsArchivePage: React.FC = () => {
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
            ALL HACKATHONS
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Intensive builds, time-constrained hackathons, and sprint-delivered software prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HACKATHONS.map((item) => (
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
                  <span className="text-xs font-mono-code uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider border border-white/30 text-white bg-white/10 font-bold">
                    ★ {item.result}
                  </span>
                </div>

                <h2 className="font-display text-2xl uppercase tracking-wide mb-1" style={{ color: 'var(--text-primary)' }}>
                  {item.eventName}
                </h2>
                <div className="text-xs font-mono-code mb-4" style={{ color: 'var(--text-muted)' }}>
                  Built: <span className="text-white font-semibold">{item.projectBuilt}</span> · Role: {item.role} · {item.teamSize}
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-[10px] font-mono-code uppercase rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/hackathons/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span>Case Study</span>
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

export default HackathonsArchivePage;
