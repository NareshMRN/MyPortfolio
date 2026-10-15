import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Eye } from 'lucide-react';
import { CERTIFICATES, type CertificateItem } from '../data/content';
import { CertificateTerminalModal } from '../components/CertificateTerminalModal';
import { useSeo } from '../hooks/useSeo';

export const CertificatesArchivePage: React.FC = () => {
  useSeo({
    title: 'Certifications & Credentials — Naresh N',
    description:
      'Verified engineering credentials, AI/ML workshops, deep learning masterclasses, and technical certifications earned by Naresh N.',
    path: '/certificates',
  });

  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="min-h-screen py-28 px-6 sm:px-10 lg:px-16 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <Link to="/#achievements" className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider mb-8 hover:underline" style={{ color: 'var(--text-muted)' }}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="mb-14">
          <span className="text-[11px] font-mono-code uppercase tracking-[0.35em] block mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>
            ARCHIVE // 04
          </span>
          <h1 className="font-section-head text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider font-extrabold">
            <span className="gold-gradient-text">ALL CERTIFICATES</span>
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Official certifications and workshop accreditations across AI Agents, Speech Synthesis, Robotics, Autonomous Systems, and Full-Stack Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden card-gold-border card-top-line"
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
                {/* Thumbnail - Fit Container Cleanly */}
                <div
                  onClick={() => {
                    setSelectedCert(item);
                  }}
                  className="relative w-full h-48 rounded-xl border mb-5 overflow-hidden flex items-center justify-center cursor-pointer group-hover:border-white/50 transition-all bg-black/80"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShieldCheck className="w-7 h-7 text-white/80 mb-2" />
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-300 font-semibold line-clamp-1">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono-code text-zinc-400 mt-1 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Click for Lightbox
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {item.issuer}
                  </span>
                  <span className="text-[10px] font-mono-code" style={{ color: 'var(--text-muted)' }}>
                    {item.date}
                  </span>
                </div>
                <h2 className="font-work-title text-base min-[400px]:text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 break-words" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h2>

                <p className="text-xs leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>

              {/* Action Links - Clean Overview Link */}
              <div className="flex items-center justify-end pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <Link
                  to={`/certificates/${item.slug}`}
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

        {/* Certificate Lightbox Modal - Theme-Adaptive Terminal Viewer */}
        <CertificateTerminalModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </div>
  );
};

export default CertificatesArchivePage;
