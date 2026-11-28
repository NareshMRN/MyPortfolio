import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trophy, Medal, BadgeCheck, Rocket, CheckCircle2, Award, type LucideIcon } from 'lucide-react';
import { ACHIEVEMENTS, type AchievementItem } from '../data/content';
import { TechBadge } from '../components/TechBadge';
import { useSeo } from '../hooks/useSeo';

/* ------------------------------------------------------------------ */
/*  Result badges: each kind of result gets its own metallic finish +  */
/*  icon. The year coin is always natural gold (YEAR_COIN_FINISH).      */
/* ------------------------------------------------------------------ */
interface ResultTier {
  icon: LucideIcon;
  /** Metallic finish class (see .metal-* in index.css) */
  badge: string;
  /** Top accent bar gradient */
  accent: string;
}

/** The year coin keeps one consistent finish on every card. */
const YEAR_COIN_FINISH = 'metal-gold';

type TierKey = 'gold' | 'silver' | 'bronze' | 'rank' | 'launch' | 'solved' | 'participant' | 'default';

const TIERS: Record<TierKey, ResultTier> = {
  gold: { icon: Trophy, badge: 'metal-gold', accent: 'from-[#eadbb0] via-[#c9a85f] to-[#eadbb0]' },
  silver: { icon: Trophy, badge: 'metal-silver', accent: 'from-zinc-200 via-slate-400 to-zinc-200' },
  bronze: { icon: Trophy, badge: 'metal-bronze', accent: 'from-orange-200 via-amber-600 to-orange-200' },
  rank: { icon: Medal, badge: 'metal-silver', accent: 'from-zinc-200 via-slate-400 to-zinc-200' },
  launch: { icon: Rocket, badge: 'metal-amber', accent: 'from-[#FFEAB5] via-[#C99726] to-[#FFEAB5]' },
  solved: { icon: CheckCircle2, badge: 'metal-champagne', accent: 'from-[#f4e4d2] via-[#c9a581] to-[#f4e4d2]' },
  participant: { icon: BadgeCheck, badge: 'metal-platinum', accent: 'from-slate-200 via-indigo-300 to-slate-200' },
  default: { icon: Award, badge: 'metal-platinum', accent: 'from-slate-200 via-indigo-300 to-slate-200' },
};

/** Medal convention: 1st/winner → gold, 2nd → silver, 3rd → bronze; ranks → silver; warm golds for the rest. */
function getTier(result?: string): ResultTier {
  const r = (result || '').toLowerCase();
  if (/\b(3rd|third)\b/.test(r)) return TIERS.bronze;
  if (/\b(2nd|second|runner)/.test(r)) return TIERS.silver;
  if (r.includes('winner') || r.includes('place') || /\b(1st|first)\b/.test(r)) return TIERS.gold;
  if (r.includes('rank')) return TIERS.rank;
  if (r.includes('launch')) return TIERS.launch;
  if (r.includes('solved')) return TIERS.solved;
  if (r.includes('participant')) return TIERS.participant;
  return TIERS.default;
}

/** "67/366 th Rank" → "Rank 67 / 366"; other results pass through unchanged. */
function formatResult(result: string): string {
  const rank = result.match(/^\s*(\d+)\s*\/\s*(\d+)\s*(?:st|nd|rd|th)?\s*rank\s*$/i);
  return rank ? `Rank ${rank[1]} / ${rank[2]}` : result;
}

/**
 * Removes text the badge already says: a leading "<result> — " or "67th Rank — "
 * prefix on the title, e.g. "3rd Place Winner — Build to Ship Hackathon" → "Build to Ship Hackathon".
 */
function displayTitle(item: AchievementItem): string {
  let title = item.title;
  if (item.result) {
    const escaped = item.result.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    title = title.replace(new RegExp(`^${escaped}\\s*[—–-]\\s*`, 'i'), '');
  }
  return title.replace(/^\d+(?:st|nd|rd|th)\s+rank\s*[—–-]\s*/i, '');
}

/** Use the lighter 1200px social-preview copy for certificate images (same picture, smaller file). */
function cardImage(src?: string): string | undefined {
  if (!src) return undefined;
  return src.includes('/certificates/') && !src.includes('/certificates/og/')
    ? src.replace('/certificates/', '/certificates/og/')
    : src;
}

export const AchievementsArchivePage: React.FC = () => {
  useSeo({
    title: 'Achievements & Milestones — Naresh N',
    description:
      'Milestones, recognitions, Kaggle Gradio Rank #63, and production releases by Naresh N.',
    path: '/achievements',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true, force: true });
    }
  }, []);

  return (
    <div className="min-h-screen py-24 sm:py-28 px-4 sm:px-10 lg:px-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <Link to="/#achievements" className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider mb-8 hover:underline" style={{ color: 'var(--text-muted)' }}>
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="mb-14">
          <span className="text-[11px] font-mono-code uppercase tracking-[0.35em] block mb-3 font-semibold" style={{ color: 'var(--text-muted)' }}>
            ARCHIVE // 04
          </span>
          <h1 className="font-section-head text-xl min-[360px]:text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight min-[480px]:tracking-normal font-extrabold break-normal leading-tight max-w-full">
            <span className="gold-gradient-text inline-block max-w-full">ALL ACHIEVEMENTS</span>
          </h1>
          <p className="text-sm font-light mt-3 max-w-xl font-body" style={{ color: 'var(--text-secondary)' }}>
            Recognitions, production releases, and milestones achieved across competitions and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {ACHIEVEMENTS.map((item) => {
            const tier = getTier(item.result);
            const TierIcon = tier.icon;
            const title = displayTitle(item);
            // Hide the organisation line when it would just repeat the title
            const showOrg = item.organization.trim().toLowerCase() !== title.trim().toLowerCase();
            const image = cardImage(item.image);

            return (
              <article
                key={item.id}
                className="group relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-strong)',
                }}
              >
                {/* Year coin: scalloped natural-gold coin (same on every card), pinned top-right.
                    The rounded rim turns and breathes; the engraved face stays upright. */}
                <span
                  className={`year-coin ${YEAR_COIN_FINISH} absolute top-3 right-3 z-30 font-mono-code`}
                  role="img"
                  aria-label={`Year ${item.year}`}
                >
                  <span className="year-coin__spin" aria-hidden="true">
                    <span className="year-coin__edge" />
                    <span className="year-coin__rim" />
                  </span>
                  <span className="year-coin__face" aria-hidden="true">
                    <span className="text-[7px] uppercase tracking-[0.18em] leading-none font-bold">Year</span>
                    <span className="text-[12.5px] font-extrabold leading-tight">{item.year}</span>
                  </span>
                </span>

                {/* Tier-coloured accent bar */}
                <div className={`absolute top-0 inset-x-0 h-1 z-20 bg-gradient-to-r ${tier.accent}`} />

                {/* Visual: the certificate / project image */}
                {image && (
                  <Link
                    to={`/achievements/${item.slug}`}
                    className="relative block aspect-[16/8] overflow-hidden border-b"
                    style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-card)' }}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                  </Link>
                )}

                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  {/* Meta row: result badge + organisation · year */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                    {item.result && (
                      <span
                        className={`metal-badge ${tier.badge} inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10.5px] font-mono-code uppercase tracking-wider font-extrabold`}
                      >
                        <TierIcon className="relative z-[2] w-3.5 h-3.5" aria-hidden="true" />
                        <span className="relative z-[2]">{formatResult(item.result)}</span>
                      </span>
                    )}
                    {showOrg && (
                      <span className="text-[11px] font-mono-code uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
                        {item.organization}
                      </span>
                    )}
                  </div>

                  <h2 className="font-work-title text-lg min-[400px]:text-xl sm:text-2xl font-bold uppercase tracking-tight mb-3 break-words leading-snug">
                    <Link to={`/achievements/${item.slug}`} className="hover:underline underline-offset-4 decoration-1" style={{ color: 'var(--text-primary)' }}>
                      {title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm leading-relaxed mb-6 font-body flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>

                  <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: 'var(--border-subtle)' }}>
                    <div className="flex flex-wrap gap-1 min-[360px]:gap-1.5">
                      {item.tags.map((t) => (
                        <TechBadge key={t} name={t} size="sm" />
                      ))}
                    </div>
                    <Link
                      to={`/achievements/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider font-bold hover:underline ml-auto"
                      style={{ color: 'var(--text-primary)' }}
                      aria-label={`View details: ${title}`}
                    >
                      <span>View details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsArchivePage;
