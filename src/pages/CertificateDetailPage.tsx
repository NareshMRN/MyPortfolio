import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, ExternalLink, CheckCircle2, FileText } from 'lucide-react';
import { CERTIFICATES } from '../data/content';
import { TechBadge } from '../components/TechBadge';

export const CertificateDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = CERTIFICATES.find((c) => c.slug === slug);

  if (!item) {
    return <Navigate to="/certificates" replace />;
  }

  return (
    <div
      className="min-h-screen py-24 sm:py-28 px-4 sm:px-8 lg:px-16 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
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

        {/* Clean Overview Card (Old-Style View Option) */}
        <div
          className="card-gold-border card-top-line relative rounded-2xl border p-6 sm:p-10 mb-10 shadow-2xl overflow-hidden transition-colors duration-300"
          style={{
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          {/* Top Accent Line: White in dark theme, black in light theme */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
            style={{ backgroundColor: 'var(--card-top-line)' }}
          />

          {/* Header Row: Issuer, Date, Verified Status */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <span
              className="text-xs font-mono-code uppercase tracking-widest font-semibold"
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
            className="font-work-title text-2xl min-[480px]:text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mb-4 font-extrabold break-words"
            style={{ color: 'var(--text-primary)' }}
          >
            {item.title}
          </h1>

          {/* Certificate Description */}
          <p
            className="text-sm sm:text-base font-light leading-relaxed mb-8 font-body"
            style={{ color: 'var(--text-secondary)' }}
          >
            {item.description}
          </p>

          {/* Certificate Image Frame - Clean Full-Width Container Fit */}
          <div
            className="w-full min-h-[300px] sm:min-h-[460px] max-h-[82vh] rounded-xl border flex items-center justify-center overflow-hidden mb-8 bg-black/90 p-2 sm:p-4 shadow-inner"
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

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {item.tags.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>

          {/* Action Links (Kaggle / Project Link) */}
          {(item.kaggleLink || item.projectLink) && (
            <div className="flex flex-wrap gap-3 mb-10 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
              {item.kaggleLink && (
                <a
                  href={item.kaggleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold border transition-all hover:scale-105"
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider font-semibold border transition-all hover:scale-105"
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
            </div>
          )}

          {/* DETAILED OVERVIEW SECTIONS */}
          {(item.problemStatement || item.objective || item.concepts || item.deliverables) && (
            <div className="space-y-8 pt-8 border-t mb-10" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-emerald-500" />
                <h2 className="text-sm font-mono-code uppercase tracking-widest font-bold" style={{ color: 'var(--text-primary)' }}>
                  TECHNICAL ARCHITECTURE & SPECIFICATIONS
                </h2>
              </div>

              {/* 1. Problem Statement */}
              {item.problemStatement && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-amber-500 font-bold block">
                    PROBLEM STATEMENT
                  </span>
                  <p className="text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                    {item.problemStatement}
                  </p>
                </div>
              )}

              {/* 2. Objective */}
              {item.objective && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-emerald-500 font-bold block">
                    ENGINEERING OBJECTIVE
                  </span>
                  <p className="text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                    {item.objective}
                  </p>
                </div>
              )}

              {/* 3. Dataset & Domain Details */}
              {item.datasetDetails && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-2"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-cyan-500 font-bold block">
                    DATASET & CONSTRAINTS
                  </span>
                  <p className="text-sm leading-relaxed font-body" style={{ color: 'var(--text-secondary)' }}>
                    {item.datasetDetails}
                  </p>
                </div>
              )}

              {/* 4. Concepts / Pipeline Steps */}
              {item.concepts && item.concepts.length > 0 && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-3"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-purple-400 font-bold block">
                    CORE CONCEPTS & PIPELINE ARCHITECTURE
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm font-body">
                    {item.concepts.map((concept, idx) => (
                      <li key={idx} className="flex items-start gap-2.5" style={{ color: 'var(--text-secondary)' }}>
                        <span className="text-emerald-500 font-mono-code font-bold mt-0.5">›</span>
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 5. Evaluation Criteria (if competition) */}
              {item.evaluationCriteria && item.evaluationCriteria.length > 0 && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-3"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-amber-400 font-bold block">
                    EVALUATION CRITERIA & SCORING METRICS
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm font-body">
                    {item.evaluationCriteria.map((crit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{crit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 6. Workshop Highlights (for Murf AI & Workshops) */}
              {item.workshopHighlights && item.workshopHighlights.length > 0 && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-3"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-indigo-400 font-bold block">
                    WORKSHOP HIGHLIGHTS
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm font-body">
                    {item.workshopHighlights.map((wh, idx) => (
                      <li key={idx} className="flex items-start gap-2.5" style={{ color: 'var(--text-secondary)' }}>
                        <span className="text-indigo-400 font-mono-code font-bold mt-0.5">●</span>
                        <span>{wh}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 7. Key Highlights & Use Cases */}
              {item.keyHighlights && item.keyHighlights.length > 0 && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-3"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-cyan-400 font-bold block">
                    PRACTICAL APPLICATION DOMAINS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-body">
                    {item.keyHighlights.map((kh, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg border flex items-start gap-2"
                        style={{
                          backgroundColor: 'var(--bg-secondary)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <span className="text-emerald-500 font-mono-code font-bold">✓</span>
                        <span>{kh}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 8. Deliverables */}
              {item.deliverables && item.deliverables.length > 0 && (
                <div
                  className="card-top-line relative overflow-hidden p-5 sm:p-6 rounded-xl border space-y-3"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                    style={{ backgroundColor: 'var(--card-top-line)' }}
                  />
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-emerald-400 font-bold block">
                    DELIVERABLES & VERIFIED ARTIFACTS
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm font-body">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5" style={{ color: 'var(--text-secondary)' }}>
                        <span className="text-emerald-500 font-mono-code font-bold mt-0.5">■</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Footer Navigation */}
          <div
            className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <span className="text-xs font-mono-code" style={{ color: 'var(--text-muted)' }}>
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
    </div>
  );
};

export default CertificateDetailPage;
