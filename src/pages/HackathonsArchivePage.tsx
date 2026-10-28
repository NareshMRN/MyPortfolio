import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Users } from 'lucide-react';
import { HACKATHONS } from '../data/content';
import { TechBadge } from '../components/TechBadge';
import { useSeo } from '../hooks/useSeo';

export const HackathonsArchivePage: React.FC = () => {
  useSeo({
    title: 'Hackathons Archive — Naresh N',
    description:
      'High-intensity hackathon projects, sprint builds, and engineering prototypes developed by Naresh N.',
    path: '/hackathons',
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
            <span className="gold-gradient-text inline-block max-w-full">ALL HACKATHONS</span>
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Intensive builds, time-constrained hackathons, and sprint-delivered software prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HACKATHONS.map((item) => (
            <div
              key={item.id}
              className="card-gold-border card-top-line group relative rounded-2xl border p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              {/* Top Accent Line: White in dark theme, black in light theme */}
              <div
                className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                style={{ backgroundColor: 'var(--card-top-line)' }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-code uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span
                    className="px-3.5 py-1.5 rounded-full text-[10px] font-mono-code uppercase tracking-wider font-bold inline-flex items-center gap-1.5 shadow-lg"
                    style={{
                      ...(item.result === 'Winner' || item.result === '3rd Place Winner'
                        ? {
                          background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #FFD700 100%)',
                          color: '#1a1000',
                          border: '1px solid rgba(255, 215, 0, 0.6)',
                          boxShadow: '0 4px 16px rgba(218, 165, 32, 0.35)',
                        }
                        : item.result === 'Finalist'
                          ? {
                            background: 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 50%, #D1D5DB 100%)',
                            color: '#111827',
                            border: '1px solid rgba(209, 213, 219, 0.6)',
                            boxShadow: '0 4px 16px rgba(156, 163, 175, 0.35)',
                          }
                          : {
                            background: 'linear-gradient(135deg, #78716C 0%, #A8A29E 50%, #D6D3D1 100%)',
                            color: '#1C1917',
                            border: '1px solid rgba(168, 162, 158, 0.5)',
                            boxShadow: '0 4px 16px rgba(120, 113, 108, 0.3)',
                          }),
                    }}
                  >
                    <span style={{ fontSize: '12px', lineHeight: 1 }}>★</span> {item.result}
                  </span>
                </div>

                <h2 className="font-display text-xl min-[400px]:text-2xl uppercase tracking-wide mb-1 break-words" style={{ color: 'var(--text-primary)' }}>
                  {item.eventName}
                </h2>
                <div className="text-xs font-mono-code mb-4" style={{ color: 'var(--text-muted)' }}>
                  Built: <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.projectBuilt}</span> · Role: <span style={{ color: 'var(--text-secondary)' }}>{item.role}</span> · <span style={{ color: 'var(--text-secondary)' }}>{item.teamSize}</span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex flex-wrap gap-1 min-[360px]:gap-1.5 w-full">
                  {item.tech.map((t) => (
                    <TechBadge key={t} name={t} size="sm" />
                  ))}
                </div>
                <div className="flex justify-end">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonsArchivePage;
