import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, ExternalLink, CheckCircle2, Target, Cpu, BookOpen, Layers, Award } from 'lucide-react';
import { CERTIFICATES } from '../data/content';
import { TechBadge } from '../components/TechBadge';
import { useSeo } from '../hooks/useSeo';

export const CertificateDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = CERTIFICATES.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, [slug]);

  useSeo({
    title: item ? `${item.title} — Certificate earned by Naresh N` : 'Certificate — Naresh N',
    description: item?.description ?? '',
    path: `/certificates/${slug}`,
    noindex: !item,
  });

  if (!item) {
    return <Navigate to="/certificates" replace />;
  }

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
            to="/certificates"
            className="hover:underline transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            Certificates
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span className="font-semibold truncate max-w-xs sm:max-w-md" style={{ color: 'var(--text-primary)' }}>
            {item.title}
          </span>
        </div>

        {/* Text-First Header Area (Full Width, No Giant Box) */}
        <div className="mb-8">
          {/* Header Row: Issuer, Date, Verified Status */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span
              className="text-xs sm:text-sm font-mono-code uppercase tracking-widest font-semibold"
              style={{ color: 'var(--text-muted)' }}
            >
              {item.issuer} · {item.date}
            </span>
            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono-code uppercase tracking-wider border font-bold flex items-center gap-1.5"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Verified Accreditation
            </span>
          </div>

          {/* Certificate Title */}
          <h1
            className="font-work-title text-2xl min-[360px]:text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight mb-4 font-extrabold break-normal leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.title}
          </h1>

          {/* Certificate Description */}
          <p
            className="text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-6 max-w-4xl font-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            {item.description}
          </p>

          {/* Action Links & External Proof */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {item.credentialLink && (
              <a
                href={item.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold border transition-all hover:scale-105 shadow-md"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>View Official Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {item.kaggleLink && (
              <a
                href={item.kaggleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold border transition-all hover:scale-105 shadow-md"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <span>View Kaggle Notebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {item.projectLink && (
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold border transition-all hover:scale-105 shadow-md"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)',
                }}
              >
                <span>Project Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
              style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Certificates</span>
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>

        {/* Certificate Image Frame - Clean Showcase Container */}
        <div
          className="w-full min-h-[260px] sm:min-h-[440px] max-h-[82vh] rounded-2xl border flex items-center justify-center overflow-hidden mb-14 bg-black/90 p-2 sm:p-5 shadow-2xl"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
          ) : (
            <div className="p-8 text-center font-mono-code text-xs" style={{ color: 'var(--text-muted)' }}>
              <ShieldCheck className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</span>
            </div>
          )}
        </div>

        {/* Technical Syllabus & Verified Criteria Viewer */}
        {(item.problemStatement || item.objective || item.concepts || item.deliverables || item.workshopHighlights || item.keyHighlights || item.datasetDetails || item.evaluationCriteria) && (
          <div
            className="rounded-2xl border overflow-hidden shadow-2xl mb-14 card-gold-border card-top-line relative transition-colors duration-300"
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

            {/* Technical Specification Content */}
            <div className="p-6 sm:p-10 font-body space-y-10">
              {/* Document Header */}
              <div className="border-b pb-6" style={{ borderColor: 'var(--border-subtle)' }}>
                <div className="flex items-center gap-2 text-xs font-mono-code mb-2" style={{ color: 'var(--gold-primary)' }}>
                  <span># credential-syllabus</span>
                  <span>/</span>
                  <span>{item.slug}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base font-mono-code mt-2 font-normal" style={{ color: 'var(--text-muted)' }}>
                  Issuer: <strong className="text-emerald-400">{item.issuer}</strong> · Date: <strong style={{ color: 'var(--gold-primary)' }}>{item.date}</strong> · Credential ID: <span className="font-mono">{item.credentialId}</span>
                </p>
              </div>

              {/* Callout Quote: Objective or Problem Statement */}
              {(item.objective || item.problemStatement) && (
                <div
                  className="p-5 rounded-xl border-l-4 text-xs sm:text-sm font-mono-code space-y-2"
                  style={{
                    backgroundColor: 'rgba(229, 184, 66, 0.06)',
                    borderColor: 'var(--border-subtle)',
                    borderLeftColor: 'var(--gold-primary)',
                  }}
                >
                  <div className="font-bold flex items-center gap-2 text-amber-500 uppercase tracking-widest text-xs">
                    <Target className="w-4 h-4" /> [!ENGINEERING_OBJECTIVE]
                  </div>
                  <p className="leading-relaxed font-body text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {item.objective || item.problemStatement}
                  </p>
                </div>
              )}

              {/* Section: Problem Statement (if distinct from objective) */}
              {item.problemStatement && item.objective && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <BookOpen className="w-5 h-5 text-amber-500" />
                    <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                      ## Problem Statement & Context
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                    {item.problemStatement}
                  </p>
                </div>
              )}

              {/* Section: Core Concepts & Technical Rigor */}
              {item.concepts && item.concepts.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <Cpu className="w-5 h-5 text-blue-500" />
                    <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                      ## Core Concepts & Architectural Pipeline
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {item.concepts.map((concept, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed"
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
                        <span style={{ color: 'var(--text-secondary)' }}>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section: Workshop & Sprint Highlights */}
              {item.workshopHighlights && item.workshopHighlights.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <Layers className="w-5 h-5 text-purple-400" />
                    <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                      ## Intensive Workshop Modules & Practical Implementations
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {item.workshopHighlights.map((wh, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          borderColor: 'var(--border-subtle)',
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span style={{ color: 'var(--text-secondary)' }}>{wh}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section: Deliverables & Milestones */}
              {item.deliverables && item.deliverables.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                      ## Verified Deliverables & Artifacts
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {item.deliverables.map((deliv, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          borderColor: 'var(--border-subtle)',
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span style={{ color: 'var(--text-secondary)' }}>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section: Dataset & Domain Details */}
              {item.datasetDetails && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                      ## Dataset & Technical Constraints
                    </h3>
                  </div>
                  <div
                    className="p-4 sm:p-5 rounded-xl border font-mono-code text-xs leading-relaxed"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.datasetDetails}
                  </div>
                </div>
              )}

              {/* Section: Evaluation Criteria */}
              {item.evaluationCriteria && item.evaluationCriteria.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <Award className="w-5 h-5 text-amber-500" />
                    <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                      ## Rigorous Evaluation Criteria
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {item.evaluationCriteria.map((crit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          borderColor: 'var(--border-subtle)',
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span style={{ color: 'var(--text-secondary)' }}>{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section: Practical Highlights */}
              {item.keyHighlights && item.keyHighlights.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <Award className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-base sm:text-lg font-mono-code uppercase tracking-wider font-bold" style={{ color: 'var(--text-primary)' }}>
                      ## Application Domains & Industry Readiness
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {item.keyHighlights.map((kh, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl border text-xs sm:text-sm font-body leading-relaxed"
                        style={{
                          backgroundColor: 'var(--bg-card)',
                          borderColor: 'var(--border-subtle)',
                        }}
                      >
                        <span className="text-emerald-500 font-mono-code font-bold">✓</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{kh}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div
          className="flex items-center justify-between flex-wrap gap-4 pt-8 border-t mb-12"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <span className="text-xs sm:text-sm font-mono-code" style={{ color: 'var(--text-muted)' }}>
            Accredited by <strong style={{ color: 'var(--text-primary)' }}>{item.issuer}</strong> · {item.date}
          </span>

          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider border hover:bg-white/10 transition-colors font-semibold"
            style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all certificates</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetailPage;
