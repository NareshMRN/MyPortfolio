import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

const QUICK_LINKS = [
  { label: 'Projects', to: '/projects' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Hackathons', to: '/hackathons' },
  { label: 'Certificates', to: '/certificates' },
  { label: 'Contact', to: '/#contact' },
];

// Everything is drawn with your existing theme variables, so light/dark both work.
const GOLD = 'var(--gold-primary)';
const INK = 'var(--text-primary)';
const SURFACE = 'var(--bg-secondary)';
const LINE = 'var(--border-strong)';
const SKIN = '#F2C7A0';
const HAIR = '#2B2118';

// Leaf shape pointing up from its base at (0,0)
const Leaf: React.FC<{ x: number; y: number; r: number; s?: number; opacity?: number }> = ({
  x,
  y,
  r,
  s = 1,
  opacity = 1,
}) => (
  <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} opacity={opacity}>
    <path d="M0 0 C 34 -40 34 -110 0 -160 C -34 -110 -34 -40 0 0Z" fill={GOLD} />
    <path d="M0 -6 L0 -140" stroke="var(--bg-primary)" strokeOpacity="0.5" strokeWidth="2" />
  </g>
);

const Sparkle: React.FC<{ x: number; y: number; size?: number }> = ({ x, y, size = 14 }) => (
  <path
    transform={`translate(${x} ${y})`}
    d={`M0 ${-size} Q2 -2 ${size} 0 Q2 2 0 ${size} Q-2 2 ${-size} 0 Q-2 -2 0 ${-size}Z`}
    fill={GOLD}
  />
);

const Scene: React.FC<{ pathname: string }> = ({ pathname }) => {
  const reduce = useReducedMotion();
  const shown = pathname.length > 26 ? pathname.slice(0, 25) + '…' : pathname;

  return (
    <svg
      viewBox="0 0 800 640"
      role="img"
      aria-label="A confused developer at a desk scratching their head, in front of a terminal window showing 404 page not found"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="nf-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" style={{ stopColor: GOLD }} />
          <stop offset="100%" style={{ stopColor: GOLD, stopOpacity: 0.6 }} />
        </linearGradient>
        <filter id="nf-glow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Dashed flight path + plane */}
      <path
        d="M470 70 C 560 -10 690 20 720 120"
        fill="none"
        stroke={GOLD}
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="6 7"
        strokeLinecap="round"
      />
      <motion.g
        animate={reduce ? undefined : { x: [0, 8, 0], y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M700 118 L778 88 L742 150 L728 128 Z" fill={GOLD} />
        <path d="M728 128 L778 88 L736 136 Z" fill={GOLD} opacity="0.65" />
      </motion.g>

      {/* Cloud */}
      <g fill={SURFACE} stroke={LINE} strokeWidth="1">
        <circle cx="660" cy="60" r="20" />
        <circle cx="690" cy="48" r="26" />
        <circle cx="722" cy="62" r="18" />
        <rect x="640" y="58" width="100" height="22" rx="11" />
      </g>

      {/* Back leaves */}
      <Leaf x={335} y={380} r={-18} s={1.15} opacity={0.3} />
      <Leaf x={325} y={400} r={-48} s={0.95} opacity={0.5} />
      <Leaf x={440} y={70} r={12} s={0.55} opacity={0.35} />

      {/* Sparkles */}
      <Sparkle x={300} y={85} size={16} />
      <Sparkle x={500} y={42} size={11} />
      <Sparkle x={782} y={330} size={12} />
      <Sparkle x={500} y={592} size={13} />

      {/* Terminal window */}
      <g filter="url(#nf-glow)">
        <rect x="330" y="110" width="440" height="330" rx="22" fill={SURFACE} stroke={LINE} strokeWidth="1.5" />
      </g>
      <path d="M330 132 a22 22 0 0 1 22 -22 h396 a22 22 0 0 1 22 22 v36 h-440 Z" fill={GOLD} />
      <circle cx="362" cy="139" r="7" fill="var(--bg-primary)" opacity="0.9" />
      <circle cx="386" cy="139" r="7" fill="var(--bg-primary)" opacity="0.9" />
      <circle cx="410" cy="139" r="7" fill="var(--bg-primary)" opacity="0.9" />
      <rect x="436" y="129" width="298" height="20" rx="10" fill="var(--bg-primary)" opacity="0.9" />
      <text
        x="448"
        y="143.5"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="12"
        fill="var(--text-muted)"
      >
        {`~/portfolio${shown}`}
      </text>

      <text
        x="550"
        y="316"
        textAnchor="middle"
        fontWeight={800}
        fontSize="150"
        fill="url(#nf-gold)"
        className="font-display"
        aria-hidden="true"
      >
        404
      </text>
      <text
        x="550"
        y="372"
        textAnchor="middle"
        fontSize="26"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fill={INK}
        aria-hidden="true"
      >
        <tspan fill={GOLD}>$ </tspan>page not found
        <motion.tspan
          fill={GOLD}
          animate={reduce ? undefined : { opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        >
          {' '}
          ▌
        </motion.tspan>
      </text>

      {/* Front leaves on the right of the window */}
      <Leaf x={770} y={400} r={22} s={0.9} opacity={0.75} />
      <Leaf x={775} y={470} r={-12} s={0.8} opacity={0.5} />
      <Leaf x={760} y={500} r={55} s={0.55} opacity={0.9} />

      {/* Floor shadow */}
      <ellipse cx="215" cy="620" rx="210" ry="12" fill={GOLD} opacity="0.18" />

      {/* Chair */}
      <g fill={INK} opacity="0.75">
        <rect x="100" y="360" width="28" height="130" rx="14" />
        <rect x="110" y="480" width="150" height="18" rx="9" />
        <rect x="180" y="498" width="10" height="70" />
        <rect x="120" y="566" width="130" height="8" rx="4" />
        <circle cx="125" cy="590" r="9" />
        <circle cx="245" cy="590" r="9" />
      </g>

      {/* Legs and shoes */}
      <g fill={INK} opacity="0.92">
        <rect x="140" y="462" width="150" height="30" rx="14" />
        <rect x="268" y="470" width="28" height="120" rx="13" />
      </g>
      <path d="M255 592 q0 -14 20 -14 h40 q14 0 14 14 v6 h-74 Z" fill={GOLD} />
      <rect x="255" y="596" width="74" height="6" rx="3" fill="var(--bg-primary)" opacity="0.85" />

      {/* Torso (hoodie) */}
      <path d="M135 380 Q175 345 215 375 L232 470 L140 480 Z" fill={GOLD} />
      <path d="M175 372 v36 M190 374 v30" stroke="var(--bg-primary)" strokeWidth="2" opacity="0.7" strokeLinecap="round" />

      {/* Arm to keyboard */}
      <path d="M205 400 Q240 420 262 458" fill="none" stroke={GOLD} strokeOpacity="0.8" strokeWidth="22" strokeLinecap="round" />
      <circle cx="266" cy="462" r="9" fill={SKIN} />

      {/* Head */}
      <circle cx="182" cy="330" r="27" fill={SKIN} />
      <path d="M154 328 Q150 292 188 296 Q218 300 210 330 Q198 312 182 314 Q166 314 154 328Z" fill={HAIR} />
      <circle cx="196" cy="332" r="2.6" fill={HAIR} />
      <circle cx="210" cy="332" r="2.6" fill={HAIR} />
      <path d="M196 349 q7 -5 14 0" fill="none" stroke={HAIR} strokeWidth="2" strokeLinecap="round" />
      <path d="M190 320 l8 -3 M206 317 l8 3" stroke={HAIR} strokeWidth="2" strokeLinecap="round" />

      {/* Raised arm, scratching head */}
      <path d="M146 400 Q96 380 118 340 L152 322" fill="none" stroke={GOLD} strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="158" cy="318" r="10" fill={SKIN} />

      {/* Desk */}
      <g fill={INK} opacity="0.85">
        <rect x="20" y="478" width="410" height="14" rx="3" />
        <rect x="44" y="492" width="12" height="128" />
        <rect x="394" y="492" width="12" height="128" />
      </g>

      {/* Monitor */}
      <path d="M262 370 L378 356 L378 462 L262 466 Z" fill={SURFACE} stroke={LINE} strokeWidth="3" strokeLinejoin="round" />
      <path d="M276 392 h46 M276 408 h70 M276 424 h34" stroke={GOLD} strokeWidth="4" strokeLinecap="round" opacity="0.7" />
      <rect x="312" y="462" width="26" height="16" fill={INK} opacity="0.7" />
      <ellipse cx="325" cy="478" rx="48" ry="5" fill={INK} opacity="0.85" />

      {/* Mug */}
      <path d="M392 450 h30 v28 h-30 Z" fill={GOLD} />
      <path d="M422 456 q14 0 14 10 t-14 10" fill="none" stroke={GOLD} strokeWidth="5" />

      {/* Plant */}
      <path d="M48 444 h38 l-5 34 h-28 Z" fill={GOLD} opacity="0.55" />
      <Leaf x={67} y={446} r={-30} s={0.32} />
      <Leaf x={67} y={446} r={0} s={0.38} opacity={0.7} />
      <Leaf x={67} y={446} r={32} s={0.32} />
    </svg>
  );
};

/** Types out `text` one character at a time; shows it instantly if motion is reduced. */
function useTyped(text: string, reduce: boolean | null, startDelay = 500) {
  const [n, setN] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) {
      setN(text.length);
      return;
    }
    setN(0);
    let i = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        setN(i);
        if (i >= text.length) window.clearInterval(interval);
      }, 55);
    }, startDelay);
    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
  }, [text, reduce, startDelay]);

  return { typed: text.slice(0, n), done: n >= text.length };
}

export const NotFoundPage: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const { typed, done } = useTyped(`cd ${pathname}`, reduce);

  // Vercel serves this route with HTTP 200, so noindex is what keeps it out of Google.
  useSeo({
    title: 'Page not found | Naresh N',
    description: 'This page does not exist. Return to the portfolio of Naresh N.',
    path: '/404',
    noindex: true,
  });

  const goBack = () => {
    // If the visitor landed here directly, there is nothing to go back to.
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  // Lines appear one after another once the command has finished typing
  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 6 },
    animate: done ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.3, delay: reduce ? 0 : i * 0.35 },
  });

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center py-24 px-6 sm:px-10 lg:px-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Soft golden background shapes */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMax slice"
      >
        <path
          d="M560 900 C 600 760 760 740 840 640 C 920 540 880 380 1000 260 C 1120 140 1300 110 1440 140 L1440 900 Z"
          fill={GOLD}
          opacity="0.07"
        />
        <path d="M1100 900 C 1130 790 1260 740 1440 720 L1440 900 Z" fill={GOLD} opacity="0.08" />
        <path d="M0 900 C 120 820 240 800 380 840 C 470 866 540 880 600 900 Z" fill={GOLD} opacity="0.06" />
      </svg>

      <div className="relative max-w-7xl mx-auto w-full grid items-center gap-12 lg:gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Left column */}
        <div className="min-w-0">
          <h1
            className="font-headline font-extrabold tracking-tight leading-none text-[4.5rem] sm:text-[7rem] lg:text-[8rem]"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="gold-gradient-text">Oops!</span>
          </h1>

          <p
            className="font-body text-xl sm:text-2xl font-medium leading-snug mt-5 max-w-sm"
            style={{ color: 'var(--text-primary)' }}
          >
            We can&rsquo;t seem to find the page you&rsquo;re looking for.
          </p>
          <p className="font-body text-base mt-4" style={{ color: 'var(--text-secondary)' }}>
            Error code: <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>404</span>
          </p>

          {/* Live terminal: types the broken path, fails, then lists where to go */}
          <div
            className="relative mt-8 rounded-xl border overflow-hidden max-w-xl"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-strong)' }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
              style={{ backgroundColor: 'var(--card-top-line)' }}
            />
            <div className="p-4 sm:p-5 font-mono-code text-xs sm:text-sm leading-7 break-all">
              <div style={{ color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--gold-primary)' }}>$</span> {typed}
                {!done && (
                  <span
                    aria-hidden="true"
                    className="inline-block w-2 h-4 align-middle ml-0.5"
                    style={{ backgroundColor: 'var(--text-primary)' }}
                  />
                )}
              </div>

              <motion.div style={{ color: 'var(--text-muted)' }} {...reveal(0)}>
                bash: cd: {pathname}: No such file or directory
              </motion.div>

              <motion.div style={{ color: 'var(--text-primary)' }} {...reveal(1)}>
                <span style={{ color: 'var(--gold-primary)' }}>$</span> ls ~/portfolio
              </motion.div>

              <motion.nav aria-label="Site sections" {...reveal(2)}>
                <ul className="flex flex-wrap gap-x-5 gap-y-0.5">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="underline-offset-4 hover:underline focus-visible:underline"
                        style={{ color: 'var(--gold-primary)' }}
                      >
                        {l.label.toLowerCase()}/
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>

              <motion.div style={{ color: 'var(--text-primary)' }} {...reveal(3)}>
                <span style={{ color: 'var(--gold-primary)' }}>$</span>{' '}
                <motion.span
                  aria-hidden="true"
                  className="inline-block w-2 h-4 align-middle"
                  style={{ backgroundColor: 'var(--text-primary)' }}
                  animate={reduce ? undefined : { opacity: [1, 1, 0, 0] }}
                  transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
                />
              </motion.div>
            </div>
          </div>

          {/* Primary actions */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-body transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: 'var(--accent-contrast)',
                color: 'var(--accent-contrast-inv)',
                outlineColor: 'var(--text-primary)',
              }}
            >
              Go to homepage
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium font-body transition-colors hover:bg-[var(--bg-card-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--text-primary)',
                outlineColor: 'var(--text-primary)',
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Go back
            </button>
          </div>
        </div>

        {/* Right column: illustration */}
        <div className="w-full max-w-2xl mx-auto lg:max-w-none">
          <Scene pathname={pathname} />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;