import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, CheckCircle2, Cpu, Layers, Zap, Target, Code2, Rocket, Users } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { TechBadge } from '../components/TechBadge';
import { StatusBadge } from '../components/StatusBadge';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { PROJECTS } from '../data/content';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

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
            background: 'linear-gradient(135deg, rgba(229,184,66,0.04) 0%, transparent 50%, rgba(229,184,66,0.02) 100%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Breadcrumb */}
          <div className="flex items-center gap-3 mb-10 text-xs font-mono-code uppercase tracking-wider flex-wrap">
            <Link to="/#projects" className="inline-flex items-center gap-1.5 hover:underline transition-colors" style={{ color: 'var(--text-muted)' }}>
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <Link to="/projects" className="hover:underline transition-colors" style={{ color: 'var(--text-muted)' }}>
              Projects
            </Link>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{project.title}</span>
          </div>

          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-sm font-mono-code font-bold" style={{ color: 'var(--gold-primary)' }}>
              {project.number} //
            </span>
            <span className="text-[11px] font-mono-code tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
              {project.category}
            </span>
            <StatusBadge status={project.status} size="md" />
          </div>

          <h1
            className="font-work-title text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight font-extrabold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-4xl font-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.fullOverview || project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
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
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all duration-300 shadow-md font-semibold"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
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
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all duration-300 shadow-md font-semibold"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div
        className="border-y"
        style={{
          borderColor: 'var(--border-subtle)',
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'var(--border-subtle)' }}>
          {project.metrics.map((m) => (
            <div key={m.label} className="py-6 sm:py-8 px-6 sm:px-8 text-center">
              <div className="text-[10px] font-mono-code uppercase tracking-[0.3em] mb-2" style={{ color: 'var(--text-muted)' }}>
                {m.label}
              </div>
              <div className="font-display text-xl sm:text-2xl uppercase tracking-wider" style={{ color: 'var(--gold-primary)' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        {/* Architecture + Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Architecture Details */}
          <div
            className="p-6 sm:p-9 rounded-2xl border card-gold-border card-top-line relative transition-all duration-300 hover:shadow-lg overflow-hidden"
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

            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)',
                  border: '1px solid rgba(59,130,246,0.3)',
                }}
              >
                <Cpu className="w-5 h-5" style={{ color: '#3B82F6' }} />
              </div>
              <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                SYSTEM ARCHITECTURE
              </h2>
            </div>

            <ul className="space-y-5">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                  <span
                    className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 text-[10px] font-mono-code font-bold"
                    style={{
                      backgroundColor: 'rgba(59,130,246,0.1)',
                      color: '#3B82F6',
                      border: '1px solid rgba(59,130,246,0.2)',
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Capabilities */}
          <div
            className="p-6 sm:p-9 rounded-2xl border card-gold-border card-top-line relative transition-all duration-300 hover:shadow-lg overflow-hidden"
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

            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)',
                  border: '1px solid rgba(16,185,129,0.3)',
                }}
              >
                <Zap className="w-5 h-5" style={{ color: '#10B981' }} />
              </div>
              <h2 className="font-mono-code text-xs sm:text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                KEY CAPABILITIES
              </h2>
            </div>

            <ul className="space-y-5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                  <span
                    className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{
                      backgroundColor: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: '#10B981' }} />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div
          className="p-6 sm:p-9 rounded-2xl border card-gold-border card-top-line relative mb-16 overflow-hidden"
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
          <div className="flex items-center gap-3 mb-7">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 100%)',
                border: '1px solid rgba(168,85,247,0.3)',
              }}
            >
              <Layers className="w-5 h-5" style={{ color: '#A855F7' }} />
            </div>
            <div>
              <h2 className="font-mono-code text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                DEPLOYED TECH STACK
              </h2>
              <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {project.tech.length} technologies
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>

        {/* Team Members & Contributors Section (if present) */}
        {project.teamMembers && project.teamMembers.length > 0 && (
          <div
            className="p-6 sm:p-9 rounded-2xl border card-gold-border card-top-line relative mb-16 overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div className="flex items-center gap-3 mb-7">
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
                <h2 className="font-mono-code text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                  TEAM COLLABORATORS ({project.teamMembers.length})
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
      </div>
    </div>
  );
};

export default ProjectDetailPage;
