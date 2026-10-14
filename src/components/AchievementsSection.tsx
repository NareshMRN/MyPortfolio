import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Calendar, Users, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  ACHIEVEMENTS,
  HACKATHONS,
  CERTIFICATES,
  type AchievementItem,
  type HackathonItem,
  type CertificateItem,
} from '../data/content';
import { GlassCard } from './GlassCard';
import { TechBadge } from './TechBadge';
import { CertificateTerminalModal } from './CertificateTerminalModal';

interface AchievementsSectionProps {
  limitAchievements?: number;
  limitHackathons?: number;
  limitCertificates?: number;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  limitAchievements = 4,
  limitHackathons = 2,
  limitCertificates = 2,
}) => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'hackathons' | 'certificates'>('achievements');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const tabs = [
    { id: 'achievements', label: 'ACHIEVEMENTS', count: ACHIEVEMENTS.length, path: '/achievements' },
    { id: 'hackathons', label: 'HACKATHONS', count: HACKATHONS.length, path: '/hackathons' },
    { id: 'certificates', label: 'CERTIFICATES', count: CERTIFICATES.length, path: '/certificates' },
  ] as const;

  return (
    <section
      id="achievements"
      className="relative py-24 sm:py-32 px-4 sm:px-10 lg:px-16 border-t"
      style={{
        borderColor: 'var(--border-subtle)',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span
              className="text-[11px] font-mono-code uppercase tracking-[0.35em] block mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              04 / ACHIEVEMENTS & CREDENTIALS
            </span>
            <h2
              className="font-section-head text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider font-extrabold"
            >
              <span className="gold-gradient-text">MILESTONES & PROOF</span>
            </h2>
          </div>

          {/* Three Tab Switcher */}
          <div
            className="inline-flex p-1.5 rounded-full border backdrop-blur-md self-start md:self-auto"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-5 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                  style={{
                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 rounded-full border shadow-md"
                      style={{
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-strong)',
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5 font-bold">
                    {tab.label}

                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            {/* 1. ACHIEVEMENTS TAB */}
            {activeTab === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ACHIEVEMENTS.slice(0, limitAchievements).map((item) => (
                    <GlassCard key={item.id} className="p-4 sm:p-7 card-gold-border card-top-line">

                      {/* Header: Large Year & Result Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-work-title text-3xl sm:text-5xl tracking-tight opacity-35 font-extrabold" style={{ color: 'var(--text-primary)' }}>
                          {item.year}
                        </span>
                        {item.result && (
                          <span
                            className="px-3.5 py-1.5 rounded-full text-[10px] font-mono-code uppercase tracking-wider font-bold inline-flex items-center gap-1.5 shadow-lg"
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
                            <span style={{ fontSize: '12px', lineHeight: 1 }}>★</span> {item.result}
                          </span>

                        )}
                      </div>


                      {/* Title & Organization */}
                      <span className="text-[11px] font-mono-code uppercase tracking-wider block mb-1" style={{ color: 'var(--text-muted)' }}>
                        {item.organization}
                      </span>
                      <h3 className="font-work-title text-lg min-[400px]:text-xl sm:text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-white transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>

                      {/* 2-line Description */}
                      <p className="text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 font-body" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      {/* Tags & Detail Link */}
                      <div className="pt-4 border-t space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
                        <div className="flex flex-wrap gap-1 min-[360px]:gap-1.5 w-full">
                          {item.tags.map((t) => (
                            <TechBadge key={t} name={t} size="sm" />
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <Link
                            to={`/achievements/${item.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <span>Details</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <div className="pt-4 text-center">
                  <Link
                    to="/achievements"
                    className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider px-6 py-3 rounded-full border hover:bg-white/10 transition-colors"
                    style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                  >
                    <span>View all achievements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}

            {/* 2. HACKATHONS TAB */}
            {activeTab === 'hackathons' && (
              <motion.div
                key="hackathons"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {HACKATHONS.slice(0, limitHackathons).map((item) => (
                    <GlassCard key={item.id} className="p-4 sm:p-7 card-gold-border card-top-line">


                      {/* Header Row: Date & Result Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono-code uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                        <span
                          className="px-3.5 py-1.5 rounded-full text-[10px] font-mono-code uppercase tracking-wider font-bold inline-flex items-center gap-1.5 shadow-lg"
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
                          <span style={{ fontSize: '12px', lineHeight: 1 }}>★</span> {item.result}
                        </span>
                      </div>

                      {/* Event Name & Project Built */}
                      <h3 className="font-display text-xl min-[400px]:text-2xl uppercase tracking-wide mb-1 break-words" style={{ color: 'var(--text-primary)' }}>
                        {item.eventName}
                      </h3>
                      <div className="text-xs font-mono-code mb-4" style={{ color: 'var(--text-muted)' }}>
                        Built: <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{item.projectBuilt}</span> · Role: <span style={{ color: 'var(--text-secondary)' }}>{item.role}</span> · <span style={{ color: 'var(--text-secondary)' }}>{item.teamSize}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      {/* Tech Stack & Links */}
                      <div className="pt-4 border-t space-y-2" style={{ borderColor: 'var(--border-subtle)' }}>
                        <div className="flex flex-wrap gap-1 min-[360px]:gap-1.5 w-full">
                          {item.tech.map((t) => (
                            <TechBadge key={t} name={t} size="sm" />
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <Link
                            to={`/hackathons/${item.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <span>Review</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <div className="pt-4 text-center">
                  <Link
                    to="/hackathons"
                    className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider px-6 py-3 rounded-full border hover:bg-white/10 transition-colors"
                    style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                  >
                    <span>View all hackathons</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}

            {/* 3. CERTIFICATES TAB */}
            {activeTab === 'certificates' && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(() => {
                    const masterclassCerts = CERTIFICATES.filter(
                      (c) => c.id === 'cert-gradio-llm' || c.id === 'cert-vector-search'
                    );
                    const homeCerts = masterclassCerts.length === 2 ? masterclassCerts : CERTIFICATES.slice(0, 2);
                    return homeCerts.slice(0, limitCertificates).map((item) => (
                      <GlassCard key={item.id} className="p-4 sm:p-6 flex flex-col justify-between card-gold-border card-top-line">
                        <div>
                          {/* Certificate Thumbnail Preview / Fit to Container */}
                          <div
                            onClick={() => {
                              setSelectedCert(item);
                            }}
                            className="relative w-full h-48 rounded-xl border mb-5 overflow-hidden flex items-center justify-center cursor-pointer group-hover:border-white/50 transition-all bg-black/80"
                            style={{
                              borderColor: 'var(--border-subtle)',
                            }}
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
                              <ShieldCheck className="w-8 h-8 text-white/80 mb-2" />
                              <span className="text-[11px] font-mono-code uppercase tracking-wider text-zinc-300 font-semibold">
                                {item.title}
                              </span>
                              <span className="text-[10px] font-mono-code text-zinc-400 mt-1 flex items-center gap-1">
                                <Eye className="w-3 h-3" /> Click for Lightbox Preview
                              </span>
                            </div>
                          </div>

                          {/* Title & Issuer */}
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                              {item.issuer}
                            </span>
                            <span className="text-[10px] font-mono-code" style={{ color: 'var(--text-muted)' }}>
                              {item.date}
                            </span>
                          </div>
                          <h3 className="font-work-title text-base min-[400px]:text-lg sm:text-xl font-bold uppercase tracking-tight mb-2 break-words" style={{ color: 'var(--text-primary)' }}>
                            {item.title}
                          </h3>

                          <p className="text-xs leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                            {item.description}
                          </p>
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center justify-end pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                          <Link
                            to={`/certificates/${item.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline font-semibold"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            <span>Full Certificate</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </GlassCard>
                    ));
                  })()}
                </div>

                <div className="pt-6 text-center">
                  <Link
                    to="/certificates"
                    className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider px-8 py-3.5 rounded-full border bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all  font-semibold"
                    style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                  >
                    <span>View all certificates </span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Certificate Lightbox Modal - Theme-Adaptive Terminal Viewer */}
        <CertificateTerminalModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
};

export default AchievementsSection;
