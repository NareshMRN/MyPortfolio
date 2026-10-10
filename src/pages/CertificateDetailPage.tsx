import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATES } from '../data/content';

export const CertificateDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = CERTIFICATES.find((c) => c.slug === slug);

  if (!item) {
    return <Navigate to="/certificates" replace />;
  }

  return (
    <div className="min-h-screen py-28 px-6 sm:px-10 lg:px-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10 text-xs font-mono-code uppercase tracking-wider">
          <Link to="/#achievements" className="inline-flex items-center gap-1.5 hover:underline" style={{ color: 'var(--text-muted)' }}>
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <Link to="/certificates" className="hover:underline" style={{ color: 'var(--text-muted)' }}>
            Certificates
          </Link>
          <span style={{ color: 'var(--border-strong)' }}>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{item.title}</span>
        </div>

        <div
          className="relative rounded-2xl border p-8 sm:p-12 mb-10 shadow-2xl overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-strong)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono-code uppercase tracking-widest text-zinc-400">
              {item.issuer} · {item.date}
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-mono-code uppercase tracking-wider border border-white/30 text-white bg-white/10 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            {item.title}
          </h1>

          <p className="text-base font-light leading-relaxed mb-8 font-body" style={{ color: 'var(--text-secondary)' }}>
            {item.description}
          </p>

          {/* Certificate Image Frame Large */}
          <div className="w-full h-96 rounded-xl border flex items-center justify-center overflow-hidden mb-8 bg-black/60 border-white/20">
            <img
              src={item.image}
              alt={item.title}
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
              className="w-full h-full object-contain"
            />
            <div className="p-8 text-center text-zinc-400 font-mono-code text-xs">
              <ShieldCheck className="w-8 h-8 text-white/70 mx-auto mb-3" />
              Certificate Asset: <span className="text-white">{item.image}</span>
              <p className="mt-2 text-[11px] text-zinc-500 max-w-sm mx-auto">
                Place the high-resolution certificate image at this path inside the <code className="text-zinc-300">public/certificates/</code> folder to render automatically.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <span className="text-xs font-mono-code text-zinc-400">
              Credential ID: <span className="text-white">{item.credentialId}</span>
            </span>

            {item.credentialLink && (
              <a
                href={item.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Verify Credential on Issuer Site</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetailPage;
