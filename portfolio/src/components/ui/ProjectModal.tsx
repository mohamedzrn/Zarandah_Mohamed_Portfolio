import { useEffect, useCallback } from 'react';
import { Badge } from './Badge';
import type { Project } from '../../types';

// ─── Per-project banner themes ────────────────────────────────────────────────
// Each project gets a unique color identity: a dark gradient overlay that sits
// on top of the blurred project image, plus an accent colour used for badges,
// bullet dots, CTA buttons and the left-border rule.
// ─────────────────────────────────────────────────────────────────────────────
interface BannerTheme {
  /** Tailwind gradient classes applied as the colour tint overlay */
  overlay: string;
  /** CSS hex accent colour for interactive elements */
  accent: string;
  /** Light text colour used for title + category on the banner */
  titleColor: string;
}

const themes: Record<string, BannerTheme> = {
  // Kavorka — beauty/cosmetics: deep burgundy velvet + champagne gold
  kavorka: {
    overlay: 'from-[#1a0508]/95 via-[#5c1a28]/80 to-transparent',
    accent: '#c9a84c',
    titleColor: '#fdf6e3',
  },
  // MHZ Earbuds — tech product: deep midnight blue + electric cyan
  mhz: {
    overlay: 'from-[#020510]/95 via-[#071535]/82 to-transparent',
    accent: '#38bdf8',
    titleColor: '#e0f2fe',
  },
  // Quatro — adult beverage branding: forest dark + citrus lime
  quatro: {
    overlay: 'from-[#06140a]/95 via-[#103a18]/82 to-transparent',
    accent: '#a3e635',
    titleColor: '#ecfccb',
  },
  // Bootcamp WebView — education: cardinal red + warm white
  bootcamp: {
    overlay: 'from-[#200606]/95 via-[#5e1515]/82 to-transparent',
    accent: '#f87171',
    titleColor: '#fff1f2',
  },
  // Event Simplified — events/corporate: deep navy + teal
  'event-simplified': {
    overlay: 'from-[#020c1c]/95 via-[#04284e]/82 to-transparent',
    accent: '#2dd4bf',
    titleColor: '#ccfbf1',
  },
  // Foundation Sixty6 — mental wellness: deep plum + soft lavender
  'foundation-sixty6': {
    overlay: 'from-[#0c0618]/95 via-[#260d52]/82 to-transparent',
    accent: '#c4b5fd',
    titleColor: '#f5f3ff',
  },
  // Art for Rights — activism/poster: dark crimson + warm amber
  fundraiser: {
    overlay: 'from-[#1a0504]/95 via-[#4a1008]/82 to-transparent',
    accent: '#fb923c',
    titleColor: '#fff7ed',
  },
  // Fragments of Reality — film/cinematic: near-black + cool silver
  fragments: {
    overlay: 'from-[#030305]/98 via-[#0c0c1a]/94 to-transparent',
    accent: '#94a3b8',
    titleColor: '#f1f5f9',
  },
  // Manga API Webstore — manga/anime: deep black + vivid red
  'manga-api': {
    overlay: 'from-[#0e0204]/98 via-[#2a0608]/92 to-transparent',
    accent: '#ef4444',
    titleColor: '#fef2f2',
  },
  // Mothersun & The Captain — documentary/warm: deep umber + amber
  mothersun: {
    overlay: 'from-[#160a02]/95 via-[#3d2008]/82 to-transparent',
    accent: '#f59e0b',
    titleColor: '#fffbeb',
  },
  // CSL Car Enthusiast — automotive: dark steel + electric blue
  csl: {
    overlay: 'from-[#030810]/95 via-[#071a30]/82 to-transparent',
    accent: '#60a5fa',
    titleColor: '#eff6ff',
  },
  // Star Wars API — sci-fi/space: near-black void + star gold
  starwars: {
    overlay: 'from-[#020204]/98 via-[#06060e]/96 to-transparent',
    accent: '#fbbf24',
    titleColor: '#fefce8',
  },
  // AI Outreach Engine — AI/tech: dark terminal + neon green
  lemlist: {
    overlay: 'from-[#020802]/98 via-[#051a06]/94 to-transparent',
    accent: '#4ade80',
    titleColor: '#f0fdf4',
  },
  // Notion → Discord Bot — automation: deep indigo + Discord purple
  'notion-discord': {
    overlay: 'from-[#040210]/98 via-[#0c0828]/94 to-transparent',
    accent: '#818cf8',
    titleColor: '#eef2ff',
  },
  // Noctura Pulse — Instagram AI: deep magenta night + hot pink neon
  noctura: {
    overlay: 'from-[#0e020e]/98 via-[#220830]/94 to-transparent',
    accent: '#e879f9',
    titleColor: '#fdf4ff',
  },
};

const defaultTheme: BannerTheme = {
  overlay: 'from-black/95 via-warm-800/80 to-transparent',
  accent: '#818cf8',
  titleColor: '#e0e7ff',
};

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const theme = themes[project.slug] ?? defaultTheme;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  // Parse highlights string into individual bullet points
  const bullets = project.highlights
    .split(/\.\s+/)
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* ── Backdrop ────────────────────────────────────── */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Modal panel ─────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-2xl my-8 mx-4 bg-cream dark:bg-warm-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">

        {/* ╔══════════════════════════════╗
            ║   CUSTOM BANNER AREA         ║
            ╚══════════════════════════════╝ */}
        <div className="relative h-60 sm:h-72 overflow-hidden">
          {/* Blurred project image as backdrop */}
          <img
            src={project.imageUrl}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 brightness-75"
            style={{ filter: 'blur(3px)' }}
          />

          {/* Per-project colour tint gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t ${theme.overlay}`} />

          {/* Bottom feather — blends into the panel background */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream dark:from-warm-900 to-transparent" />

          {/* Banner content */}
          <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-8 pb-6">
            {/* Category badge */}
            <span
              className="mb-3 inline-flex w-fit items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{
                backgroundColor: `${theme.accent}22`,
                color: theme.accent,
                border: `1px solid ${theme.accent}44`,
              }}
            >
              {project.category === 'api' ? 'API / Backend' : project.category}
            </span>

            {/* Project title */}
            <h2
              className="text-3xl sm:text-4xl font-black leading-tight drop-shadow-lg"
              style={{ color: theme.titleColor }}
            >
              {project.title}
            </h2>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ╔══════════════════════════════╗
            ║   CONTENT AREA               ║
            ╚══════════════════════════════╝ */}
        <div className="px-6 sm:px-8 pb-8 space-y-6">

          {/* Description */}
          <p
            className="text-sm leading-relaxed text-[#555] dark:text-warm-300 italic pl-4 border-l-2"
            style={{ borderColor: theme.accent }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#777] dark:text-warm-400 mb-2">
              About
            </h3>
            <p className="text-sm leading-relaxed text-[#555] dark:text-warm-300">
              {project.about}
            </p>
          </div>

          {/* Highlights */}
          {bullets.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#777] dark:text-warm-400 mb-3">
                Highlights
              </h3>
              <ul className="space-y-2">
                {bullets.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#555] dark:text-warm-300">
                    <span
                      className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: theme.accent }}
                      aria-hidden="true"
                    />
                    {point}.
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Review / reflection quote */}
          {project.review && (
            <blockquote className="rounded-xl border border-cream-border dark:border-warm-700 bg-cream-dark dark:bg-warm-800/50 p-4">
              <p className="text-sm italic leading-relaxed text-[#555] dark:text-warm-300">
                "{project.review}"
              </p>
            </blockquote>
          )}

          {/* Screenshots carousel (if present) */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#777] dark:text-warm-400 mb-3">
                Screenshots
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory">
                {project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="flex-shrink-0 w-56 sm:w-72 rounded-lg object-cover aspect-video snap-start border border-cream-border dark:border-warm-700"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}

          {/* CTA links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ backgroundColor: theme.accent, color: '#0f0f0f', '--tw-ring-color': theme.accent } as React.CSSProperties}
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cream-dark dark:bg-warm-800 text-[#555] dark:text-warm-300 hover:bg-cream-border dark:hover:bg-warm-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve"
                >
                  View on GitHub
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
            </div>
          )}

          {!project.liveUrl && !project.githubUrl && (
            <p className="text-xs text-[#777] dark:text-warm-400 italic pt-2">
              College / Client project — not publicly available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
