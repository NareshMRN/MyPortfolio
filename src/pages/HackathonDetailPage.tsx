import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Award, Rocket, CheckCircle2, Cpu, Layers, Trophy, ShieldCheck, ArrowRight, Target } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { TechBadge } from '../components/TechBadge';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { HACKATHONS } from '../data/content';
import { useSeo } from '../hooks/useSeo';

export const HackathonDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = HACKATHONS.find((h) => h.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, [slug]);

  useSeo({
    title: item ? `${item.eventName} — Hackathon by Naresh N` : 'Hackathon — Naresh N',
    description: item?.description ?? '',
    path: `/hackathons/${slug}`,
    noindex: !item,
  });

  if (!item) {
    return <Navigate to="/hackathons" replace />;
  }

  // Find next hackathon for recommendation
  const currentIndex = HACKATHONS.findIndex((h) => h.slug === slug);
  const nextItem = HACKATHONS[(currentIndex + 1) % HACKATHONS.length];

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
            to="/hackathons"
            className="hover:underline transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            Hackathons
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span className="truncate max-w-[140px] min-[400px]:max-w-[200px] sm:max-w-none" style={{ color: 'var(--text-primary)' }}>
            {item.eventName}
          </span>
        </div>

        {/* Text-First Header Area (Full Width, Open Text) */}
        <div className="mb-10">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="text-sm font-mono-code font-bold" style={{ color: 'var(--gold-primary)' }}>
              {item.date} //
            </span>
            <span
              className="text-[10.5px] sm:text-[11px] font-mono-code tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-full border"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {item.teamSize}
            </span>
            <span
              className="text-[10.5px] sm:text-[11px] font-mono-code tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-full border"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              ROLE: {item.role}
            </span>

            {/* Gradient Result Badge */}
            <span
              className="px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[10.5px] font-mono-code uppercase tracking-wider font-bold inline-flex items-center gap-1.5 shadow-lg"
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
              <Trophy className="w-3.5 h-3.5" /> {item.result}
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="font-work-title text-2xl min-[360px]:text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight font-extrabold mb-4 break-normal leading-tight max-w-full"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.eventName}
          </h1>

          {/* Project Built Callout */}
          <div
            className="card-gold-border card-top-line relative inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl border mb-5 text-xs sm:text-sm font-mono-code max-w-full"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />
            <Rocket className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--gold-primary)' }} />
            <span style={{ color: 'var(--text-muted)' }}>Project Built:</span>
            <span className="font-bold break-all" style={{ color: 'var(--text-primary)' }}>
              {item.projectBuilt}
            </span>
          </div>

          {/* Overview text */}
          <p
            className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6 max-w-4xl font-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            {item.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {item.links.project && (
              <a
                href={item.links.project}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #E5B842 0%, #DAA520 50%, #B8860B 100%)',
                  color: '#1a1000',
                }}
              >
                <Rocket className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}

            {item.links.repo && (
              <a
                href={item.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all duration-300 shadow-md font-semibold"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}

            {item.links.certificate && (
              <a
                href={item.links.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all duration-300 shadow-md font-semibold"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>View Certificate Proof</span>
              </a>
            )}

            <Link
              to="/hackathons"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Hackathons</span>
            </Link>
          </div>

          {/* Quick Badges Row */}
          <div className="flex flex-wrap gap-2">
            {item.tech.map((t) => (
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
              EVENT TIMELINE
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--gold-primary)' }}>
              {item.date}
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
              ENGINEERING ROLE
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
              {item.role}
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
              TEAM STRUCTURE
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
              {item.teamSize}
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
              FINAL OUTCOME
            </div>
            <div className="font-display text-lg min-[400px]:text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--gold-primary)' }}>
              {item.result}
            </div>
          </div>
        </div>

        {/* Technical Sprint & Submission Overview */}
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

          {/* Technical Submission Content */}
          <div className="p-6 sm:p-10 font-body space-y-10">
            {/* Title & Built Header */}
            <div className="border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2 text-xs font-mono-code mb-2" style={{ color: 'var(--gold-primary)' }}>
                <span># hackathon-submission</span>
                <span>/</span>
                <span>{item.slug}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {item.eventName}
              </h2>
              <p className="text-sm sm:text-base font-mono-code mt-2 font-normal" style={{ color: 'var(--text-muted)' }}>
                Built: <strong className="text-emerald-400">{item.projectBuilt}</strong> · Result: <strong style={{ color: 'var(--gold-primary)' }}>{item.result}</strong>
              </p>
            </div>

            {/* GitHub Callout Alert: Sprint Objective */}
            <div
              className="p-5 rounded-xl border-l-4 text-xs sm:text-sm font-mono-code space-y-2"
              style={{
                backgroundColor: 'rgba(229, 184, 66, 0.06)',
                borderColor: 'var(--border-subtle)',
                borderLeftColor: 'var(--gold-primary)',
              }}
            >
              <div className="font-bold flex items-center gap-2 text-amber-500 uppercase tracking-widest text-xs">
                <Target className="w-4 h-4" /> [!COMPETITIVE_SPRINT_CHALLENGE]
              </div>
              <p className="leading-relaxed font-body text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                Under intense time constraints at <strong>{item.eventName}</strong>, engineered an end-to-end operational software prototype with clean separation of computational workflows, asynchronous message queues, and a responsive frontend interface.
              </p>
            </div>

            {/* Markdown Section 1: Challenge & Problem */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Sprint Challenge & Submission Overview
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm font-body leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  In the <strong style={{ color: 'var(--text-primary)' }}>{item.eventName}</strong>, engineering under strict time limits required rapid architectural decisions, disciplined modularity, and delivering an authentic functioning prototype rather than an unlinked visual mock.
                </p>
                <div
                  className="p-4 rounded-xl border font-mono-code text-xs space-y-1"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div className="text-[10px] uppercase tracking-wider font-bold" style={{ color: 'var(--gold-primary)' }}>
                    DELIVERED SPRINT SOLUTION:
                  </div>
                  <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {item.projectBuilt}
                  </div>
                  <div className="text-[11px] pt-1" style={{ color: 'var(--text-muted)' }}>
                    Collaborated across {item.teamSize} as {item.role}, maintaining rigorous code reviews and continuous sprint integration.
                  </div>
                </div>
              </div>
            </div>

            {/* Markdown Section 2: Production Deliverables */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Sprint Deliverables & Technical Rigor
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
                    Fully operational prototype deployed live with verifiable end-to-end functionality.
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
                    Asynchronous architecture capable of handling real-time API integrations without latency bottlenecks.
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
                    Defended system architecture and technical demo before panel of judges, recognized with distinction: <strong style={{ color: 'var(--gold-primary)' }}>{item.result}</strong>.
                  </span>
                </div>
              </div>
            </div>

            {/* Markdown Section 3: Deployed Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Layers className="w-5 h-5 text-purple-400" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Technologies Deployed During Sprint
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {item.tech.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Collaborators Card (if present) */}
        {item.teamMembers && item.teamMembers.length > 0 && (
          <div
            className="p-6 sm:p-8 rounded-2xl border card-gold-border card-top-line relative mb-12 overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
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
                <Users className="w-5 h-5" style={{ color: 'var(--gold-bright)' }} />
              </div>
              <div>
                <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                  HACKATHON SPRINT TEAM ({item.teamMembers.length})
                </h2>
                <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Click avatar or card to view GitHub profile
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {item.teamMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} variant="card" />
              ))}
            </div>
          </div>
        )}

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
                NEXT HACKATHON CASE STUDY //
              </span>
              <h3 className="font-work-title text-xl sm:text-2xl font-bold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {nextItem.eventName}
              </h3>
              <p className="text-xs sm:text-sm font-mono-code mt-1" style={{ color: 'var(--text-secondary)' }}>
                Built: {nextItem.projectBuilt} · {nextItem.result}
              </p>
            </div>

            <Link
              to={`/hackathons/${nextItem.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold border hover:bg-white hover:text-black transition-all flex-shrink-0"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
              }}
            >
              <span>Explore Case Study</span>
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
            Hackathon <strong style={{ color: 'var(--text-primary)' }}>{item.eventName}</strong> · {item.result}
          </span>

          <Link
            to="/hackathons"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all hackathons</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetailPage;
