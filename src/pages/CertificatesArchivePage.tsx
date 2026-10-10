import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Eye, ExternalLink, X } from 'lucide-react';
import { CERTIFICATES, type CertificateItem } from '../data/content';

export const CertificatesArchivePage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

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
            ALL CERTIFICATES
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Official certifications and masterclass accreditations in Machine Learning, Vector Retrieval, and Generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <div>
                {/* Thumbnail */}
                <div
                  onClick={() => setSelectedCert(item)}
                  className="relative w-full h-44 rounded-xl border mb-5 overflow-hidden flex items-center justify-center cursor-pointer group-hover:border-white/50 transition-all"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-subtle)' }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60 group-hover:bg-black/40 transition-colors">
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
                <h2 className="font-display text-2xl uppercase tracking-wide mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h2>

                <p className="text-xs leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                {item.credentialLink ? (
                  <a
                    href={item.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider text-zinc-300 hover:text-white"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verify</span>
                  </a>
                ) : (
                  <span className="text-[10px] font-mono-code text-zinc-500">{item.credentialId}</span>
                )}

                <Link
                  to={`/certificates/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span>Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl border p-6 sm:p-8 shadow-2xl"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-strong)',
              }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full border hover:bg-white/10 transition-colors text-white"
                style={{ borderColor: 'var(--border-strong)' }}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-[11px] font-mono-code uppercase tracking-widest text-zinc-400">
                  {selectedCert.issuer} · {selectedCert.date}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wider text-white mt-1">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="w-full h-80 rounded-xl border flex items-center justify-center overflow-hidden mb-6 bg-black/60 border-white/20">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-contain"
                />
                <div className="p-8 text-center text-zinc-400 font-mono-code text-xs">
                  Certificate Image: <span className="text-white">{selectedCert.image}</span>
                  <p className="mt-2 text-[11px] text-zinc-500">
                    Image path: <code className="text-zinc-300">public/certificates/</code>
                  </p>
                </div>
              </div>

              {selectedCert.credentialLink && (
                <a
                  href={selectedCert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Credential Certificate</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesArchivePage;
