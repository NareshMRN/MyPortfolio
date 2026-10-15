import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PROJECTS } from '../data/content';
import { TechBadge } from '../components/TechBadge';
import { useSeo } from '../hooks/useSeo';

export const ProjectsArchivePage: React.FC = () => {
  useSeo({
    title: 'Projects Archive — Naresh N | Full Stack & AI/ML Developer',
    description:
      'Browse all software engineering projects by Naresh N, including Sangeetha, TradeVault, TryScan, RAG pipelines, and full-stack web applications.',
    path: '/projects',
  });

  return (
    <div
      className="min-h-screen py-28 px-6 sm:px-10 lg:px-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider mb-8 hover:underline"
          style={{ color: 'var(--text-muted)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-14">
          <span className="text-[11px] font-mono-code uppercase tracking-[0.35em] block mb-3" style={{ color: 'var(--text-muted)' }}>
            ARCHIVE // 03
          </span>
          <h1 className="font-section-head text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider font-extrabold">
            <span className="gold-gradient-text">ALL PROJECTS</span>
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Every product, AI agent, and distributed system engineered solo. Click any card for architecture deep dive.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border p-4 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden card-gold-border card-top-line"
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
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-code font-bold" style={{ color: 'var(--text-primary)' }}>
                    {project.number} //
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

                <span className="text-[10px] font-mono-code tracking-[0.2em] uppercase block mb-1" style={{ color: 'var(--text-muted)' }}>
                  {project.category}
                </span>
                <h2 className="font-work-title text-lg min-[400px]:text-xl sm:text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-white transition-colors break-words" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h2>

                <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                  {project.tagline || project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <TechBadge key={t} name={t} size="sm" />
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                      aria-label="Live Demo"
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                      aria-label="GitHub Repo"
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.video && (
                    <a
                      href={project.links.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                      aria-label="Video Demo"
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      <Play className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span>Overview</span>
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

export default ProjectsArchivePage;
