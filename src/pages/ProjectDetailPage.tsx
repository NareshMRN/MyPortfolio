import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, CheckCircle2, Cpu, Layers, Zap, Target, Code2, Rocket, Users } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { TechBadge } from '../components/TechBadge';
import { StatusBadge } from '../components/StatusBadge';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { PROJECTS } from '../data/content';
import { useSeo } from '../hooks/useSeo';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, [slug]);

  useSeo({
    title: project ? `${project.title} — Project by Naresh N` : 'Not found',
    description: project?.description ?? '',
    path: `/projects/${slug}`,
    noindex: !project,
  });

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div
      className="min-h-screen py-24 sm:py-28 px-4 sm:px-8 lg:px-12 xl:px-16 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 mb-8 text-xs font-mono-code uppercase tracking-wider flex-wrap">
          <Link to="/#projects" className="inline-flex items-center gap-1.5 hover:underline transition-colors" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <Link to="/projects" className="hover:underline transition-colors" style={{ color: 'var(--text-muted)' }}>
            Projects
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span className="font-semibold truncate max-w-xs sm:max-w-md" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </span>
        </div>

        {/* Text-First Repository Header (Full Width, Open Text) */}
        <div className="mb-10">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm font-mono-code font-bold" style={{ color: 'var(--gold-primary)' }}>
              {project.number} //
            </span>
            <span className="text-[11px] font-mono-code tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
              {project.category}
            </span>
            <StatusBadge status={project.status} size="md" />
          </div>

          {/* Main Title */}
          <h1
            className="font-work-title text-3xl min-[360px]:text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight font-extrabold mb-4 break-normal leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h1>

          {/* Tagline / Overview */}
          <p
            className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6 max-w-4xl font-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.fullOverview || project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, #E5B842 0%, #DAA520 50%, #B8860B 100%)',
                  color: '#1a1000',
                }}
              >
                <Rocket className="w-4 h-4" />
                <span>Launch Live System</span>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all duration-300 shadow-md font-semibold"
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

            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all duration-300 shadow-md font-semibold"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-card)',
                }}
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </a>
            )}

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Projects</span>
            </Link>
          </div>

          {/* Quick Badges Row */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>

        {/* Metrics Strip - Small Minimal Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="card-gold-border card-top-line relative p-4 sm:p-5 rounded-xl border flex flex-col justify-between"
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
                {m.label}
              </div>
              <div className="font-display text-xl sm:text-2xl uppercase tracking-wider font-bold" style={{ color: 'var(--gold-primary)' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specification & Architecture Viewer */}
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
            {/* Title & Tagline Header */}
            <div className="border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2 text-xs font-mono-code mb-2" style={{ color: 'var(--gold-primary)' }}>
                <span># repository</span>
                <span>/</span>
                <span>{project.slug}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-mono-code mt-2 font-normal" style={{ color: 'var(--text-muted)' }}>
                {project.tagline}
              </p>
            </div>

            {/* GitHub Callout Alert: Project Overview */}
            <div
              className="p-5 rounded-xl border-l-4 text-xs sm:text-sm font-mono-code space-y-2"
              style={{
                backgroundColor: 'rgba(229, 184, 66, 0.06)',
                borderColor: 'var(--border-subtle)',
                borderLeftColor: 'var(--gold-primary)',
              }}
            >
              <div className="font-bold flex items-center gap-2 text-amber-500 uppercase tracking-widest text-xs">
                <Target className="w-4 h-4" /> [!PROJECT_MISSION]
              </div>
              <p className="leading-relaxed font-body text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                {project.fullOverview || project.description}
              </p>
            </div>

            {/* Markdown Section 1: System Architecture */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Cpu className="w-5 h-5 text-blue-500" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## System Architecture & Technical Pipelines
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {project.architectureDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed transition-all hover:border-blue-500/40"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    <span
                      className="px-2 py-0.5 rounded text-[11px] font-mono-code font-bold mt-0.5 shrink-0"
                      style={{
                        backgroundColor: 'rgba(59, 130, 246, 0.12)',
                        color: '#60A5FA',
                        border: '1px solid rgba(59, 130, 246, 0.25)',
                      }}
                    >
                      Step {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Markdown Section 2: Key Capabilities & Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Zap className="w-5 h-5 text-emerald-500" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Core Features & Verified Capabilities
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed transition-all hover:border-emerald-500/40"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-subtle)',
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span style={{ color: 'var(--text-secondary)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Markdown Section 3: Deployed Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                <Layers className="w-5 h-5 text-purple-400" />
                <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                  ## Technologies & Production Tooling
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Members & Contributors Section (Small Modular Container) */}
        {project.teamMembers && project.teamMembers.length > 0 && (
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
                  CONTRIBUTORS & TEAM ({project.teamMembers.length})
                </h2>
                <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Click avatar or card to view GitHub profile
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {project.teamMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} variant="card" />
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 pt-8 border-t mb-12"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <span className="text-xs sm:text-sm font-mono-code" style={{ color: 'var(--text-muted)' }}>
            Project <strong style={{ color: 'var(--text-primary)' }}>{project.title}</strong> · {project.status}
          </span>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
