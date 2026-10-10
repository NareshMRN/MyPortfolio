import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Calendar, Users, Eye, X, ArrowRight, ShieldCheck } from 'lucide-react';
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

export const AchievementsSection: React.FC = () => {
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
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t"
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
              className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wider"
              style={{ color: 'var(--text-primary)' }}
            >
              MILESTONES & PROOF
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
                    <span className="text-[10px] opacity-60">({tab.count})</span>
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
                  {ACHIEVEMENTS.map((item) => (
                    <GlassCard key={item.id} className="p-7">


                      {/* Header: Large Year & Result Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-display text-4xl sm:text-5xl tracking-tight opacity-20 font-bold" style={{ color: 'var(--text-primary)' }}>
                          {item.year}
                        </span>
                        {item.result && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider border border-white/30 text-white bg-white/10 font-medium">
                            {item.result}
                          </span>
                        )}
                      </div>

                      {/* Title & Organization */}
                      <span className="text-[11px] font-mono-code uppercase tracking-wider block mb-1" style={{ color: 'var(--text-muted)' }}>
                        {item.organization}
                      </span>
                      <h3 className="font-display text-2xl uppercase tracking-wide mb-3 group-hover:text-white transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>

                      {/* 2-line Description */}
                      <p className="text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 font-body" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      {/* Tags & Detail Link */}
                      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <span key={t} className="px-2.5 py-0.5 text-[10px] font-mono-code uppercase rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/achievements/${item.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
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
                    <span>View all achievements ({ACHIEVEMENTS.length})</span>
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
                  {HACKATHONS.map((item) => (
                    <GlassCard key={item.id} className="p-7">


                      {/* Header Row: Date & Result Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono-code uppercase tracking-wider flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider border font-bold ${
                            item.result === 'Winner'
                              ? 'border-white text-white bg-white/20'
                              : item.result === 'Finalist'
                              ? 'border-zinc-300 text-zinc-200 bg-white/10'
                              : 'border-zinc-500 text-zinc-400 bg-zinc-900/30'
                          }`}
                        >
                          ★ {item.result}
                        </span>
                      </div>

                      {/* Event Name & Project Built */}
                      <h3 className="font-display text-2xl uppercase tracking-wide mb-1" style={{ color: 'var(--text-primary)' }}>
                        {item.eventName}
                      </h3>
                      <div className="text-xs font-mono-code mb-4" style={{ color: 'var(--text-muted)' }}>
                        Built: <span className="text-white font-semibold">{item.projectBuilt}</span> · Role: {item.role} · {item.teamSize}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      {/* Tech Stack & Links */}
                      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tech.map((t) => (
                            <span key={t} className="px-2.5 py-0.5 text-[10px] font-mono-code uppercase rounded border" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/hackathons/${item.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          <span>Review</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
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
                    <span>View all hackathons ({HACKATHONS.length})</span>
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
                  {CERTIFICATES.map((item) => (
                    <GlassCard key={item.id} className="p-6 flex flex-col justify-between">


                      <div>
                        {/* Certificate Thumbnail Preview / Fallback Box */}
                        <div
                          onClick={() => setSelectedCert(item)}
                          className="relative w-full h-44 rounded-xl border mb-5 overflow-hidden flex items-center justify-center cursor-pointer group-hover:border-white/50 transition-all"
                          style={{
                            backgroundColor: 'var(--bg-card)',
                            borderColor: 'var(--border-subtle)',
                          }}
                        >
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              onError={(e) => {
                                // Graceful fallback if image file not placed yet
                                (e.currentTarget as HTMLElement).style.display = 'none';
                              }}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : null}

                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60 group-hover:bg-black/40 transition-colors">
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
                        <h3 className="font-display text-2xl uppercase tracking-wide mb-2" style={{ color: 'var(--text-primary)' }}>
                          {item.title}
                        </h3>

                        <p className="text-xs leading-relaxed mb-6 font-body" style={{ color: 'var(--text-secondary)' }}>
                          {item.description}
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                        {item.credentialLink ? (
                          <a
                            href={item.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider text-zinc-300 hover:text-white"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Verify ID</span>
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono-code text-zinc-500">ID: {item.credentialId}</span>
                        )}

                        <Link
                          to={`/certificates/${item.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider hover:underline"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          <span>Full Certificate</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <div className="pt-4 text-center">
                  <Link
                    to="/certificates"
                    className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider px-6 py-3 rounded-full border hover:bg-white/10 transition-colors"
                    style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                  >
                    <span>View all certificates ({CERTIFICATES.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full rounded-2xl border p-6 sm:p-8 shadow-2xl"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-strong)',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full border hover:bg-white/10 transition-colors text-white"
                  style={{ borderColor: 'var(--border-strong)' }}
                  aria-label="Close certificate lightbox"
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
                      Place your image in <code className="text-zinc-300">public/certificates/</code> to display in high resolution.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                  <span className="text-xs font-mono-code text-zinc-400">
                    Credential ID: <span className="text-white">{selectedCert.credentialId}</span>
                  </span>

                  <div className="flex items-center gap-3">
                    {selectedCert.credentialLink && (
                      <a
                        href={selectedCert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider bg-white text-black font-semibold hover:bg-zinc-200"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Verify Credential</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AchievementsSection;
