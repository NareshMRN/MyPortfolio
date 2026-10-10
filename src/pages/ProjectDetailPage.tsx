import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PROJECTS } from '../data/content';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div
      className="min-h-screen py-28 px-6 sm:px-10 lg:px-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-10 text-xs font-mono-code uppercase tracking-wider">
          <Link to="/#projects" className="inline-flex items-center gap-1.5 hover:underline" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <Link to="/projects" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            Projects
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{project.title}</span>
        </div>

        {/* Hero Banner Box */}
        <div
          className="relative rounded-2xl border p-8 sm:p-14 mb-12 shadow-2xl overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-strong)',
          }}
        >
          {/* Top border flare */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

          {/* Eyebrow */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono-code font-bold" style={{ color: 'var(--text-primary)' }}>
              {project.number} //
            </span>
            <span className="text-[11px] font-mono-code tracking-[0.25em] uppercase" style={{ color: 'var(--text-muted)' }}>
              {project.category}
            </span>
            <span
              className={`text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded-full border ${
                project.status === 'Live'
                  ? 'border-emerald-500/40 text-emerald-400 bg-emerald-950/20'
                  : project.status === 'In progress'
                  ? 'border-amber-500/40 text-amber-300 bg-amber-950/20'
                  : 'border-zinc-500/40 text-zinc-400 bg-zinc-900/20'
              }`}
            >
              ● {project.status}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-light leading-relaxed mb-8 max-w-3xl font-body" style={{ color: 'var(--text-secondary)' }}>
            {project.fullOverview || project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200 transition-all shadow-xl"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Launch Live System</span>
              </a>
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all shadow-md"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}

            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:border-white hover:bg-white/10 transition-all shadow-md"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <Play className="w-3.5 h-3.5" />
                <span>Watch Demonstration</span>
              </a>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-xl border text-center"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="text-[10px] font-mono-code uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
                {m.label}
              </div>
              <div className="font-display text-2xl uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* System Architecture Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Architecture Details */}
          <div
            className="p-7 sm:p-9 rounded-2xl border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-4 h-4 text-white" />
              <h2 className="font-mono-code text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                SYSTEM ARCHITECTURE
              </h2>
            </div>

            <ul className="space-y-4">
              {project.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-light leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Capabilities */}
          <div
            className="p-7 sm:p-9 rounded-2xl border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-strong)',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <h2 className="font-mono-code text-sm uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                KEY CAPABILITIES
              </h2>
            </div>

            <ul className="space-y-4">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-light leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div
          className="p-6 rounded-2xl border mb-16"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-strong)',
          }}
        >
          <span className="text-[10px] font-mono-code uppercase tracking-widest block mb-4" style={{ color: 'var(--text-muted)' }}>
            DEPLOYED TECH STACK
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 text-xs font-mono-code uppercase tracking-wider rounded-md border"
                style={{
                  borderColor: 'var(--border-strong)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
