import { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import { ProjectModal } from '../ui/ProjectModal';
import { projects } from '../../data/projects';
import { useInView } from '../../hooks/useInView';
import type { Project } from '../../types';

type FilterCategory = 'all' | Project['category'];

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Design', value: 'design' },
  { label: 'Video', value: 'video' },
  { label: 'API / Backend', value: 'api' },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, inView } = useInView();

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section
        id="projects"
        className="py-24 bg-cream-dark dark:bg-warm-900"
        aria-labelledby="projects-heading"
      >
        <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <SectionTitle
            label="Projects"
            title="Selected Work"
            description="A collection of projects spanning web development, design, video production, and API integrations."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={activeFilter === f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeFilter === f.value
                    ? 'bg-mauve text-cream shadow-md shadow-mauve/20'
                    : 'text-[#555] dark:text-warm-300 hover:text-mauve dark:hover:text-mauve-faint bg-cream dark:bg-warm-800 hover:bg-mauve/10 dark:hover:bg-mauve/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

// ─── Custom banner per project ────────────────────────────────────────────────

function ProjectBanner({ slug }: { slug: string }) {
  switch (slug) {

    /* ── Kavorka: deep burgundy velvet, gold Art-Deco rules ── */
    case 'kavorka':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 relative overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at center, #3d1010 0%, #140406 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, #c9a84c08 0px, #c9a84c08 1px, transparent 1px, transparent 12px)' }} />
          <div style={{ width: '55%', height: '1px', background: 'linear-gradient(90deg, transparent, #d4a017cc, transparent)' }} />
          <span style={{ color: '#d4a017', letterSpacing: '0.55em', fontSize: '1.35rem', fontWeight: 300, fontFamily: 'serif', textTransform: 'uppercase' as const }}>Kavorka</span>
          <div style={{ width: '55%', height: '1px', background: 'linear-gradient(90deg, transparent, #d4a017cc, transparent)' }} />
          <span style={{ color: '#c9a84c', letterSpacing: '0.28em', fontSize: '0.5rem', opacity: 0.65 }}>BEAUTY · BRANDING · IDENTITY</span>
        </div>
      );

    /* ── MHZ Earbuds: midnight space, electric-blue glow ── */
    case 'mhz':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at 50% 70%, #0a1535 0%, #020510 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#38bdf811 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <span style={{ color: '#38bdf8', fontSize: '3.8rem', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1,
            textShadow: '0 0 30px #38bdf877, 0 0 70px #38bdf833' }}>MHZ</span>
          <span style={{ color: '#38bdf899', fontSize: '0.6rem', letterSpacing: '0.45em', marginTop: '10px' }}>EARBUDS · 3D · WEB DESIGN</span>
        </div>
      );

    /* ── Quatro: forest green, italic lime brand name ── */
    case 'quatro':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(155deg, #0d2010 0%, #1a3d1a 60%, #0a1a0a 100%)' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, #a3e63522 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
          <span style={{ color: '#a3e635', fontSize: '2.8rem', fontWeight: 800, fontStyle: 'italic', letterSpacing: '-0.04em' }}>Quatro</span>
          <div style={{ width: '36px', height: '2px', background: '#a3e635', margin: '10px 0', opacity: 0.8 }} />
          <span style={{ color: '#84cc16', letterSpacing: '0.3em', fontSize: '0.55rem', opacity: 0.75 }}>ADULT BEVERAGE · REBRAND</span>
        </div>
      );

    /* ── Bootcamp: cardinal red, bold white stacked text ── */
    case 'bootcamp':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #1a0505 0%, #4a1010 55%, #1a0505 100%)' }}>
          <span style={{ position: 'absolute', fontSize: '6rem', fontWeight: 900, color: 'white', opacity: 0.04, letterSpacing: '-0.08em', userSelect: 'none' as const }}>{'{ }'}</span>
          <span style={{ color: 'white', fontSize: '1.7rem', fontWeight: 900, letterSpacing: '0.12em' }}>BOOTCAMP</span>
          <span style={{ color: '#f87171', fontSize: '0.65rem', letterSpacing: '0.35em', marginTop: '8px', opacity: 0.9 }}>WEBVIEW · REACT · UI/UX</span>
        </div>
      );

    /* ── Event Simplified: deep navy, teal ES monogram ── */
    case 'event-simplified':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #020c1c 0%, #04284e 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#2dd4bf0a 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <span style={{ color: '#2dd4bf', fontSize: '3.2rem', fontWeight: 900, lineHeight: 1, opacity: 0.25, position: 'absolute', letterSpacing: '-0.05em' }}>ES</span>
          <span style={{ color: '#2dd4bf', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.02em', position: 'relative' }}>Event</span>
          <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 300, letterSpacing: '0.15em', position: 'relative' }}>Simplified</span>
          <div style={{ width: '40px', height: '2px', background: '#2dd4bf', marginTop: '10px', opacity: 0.7 }} />
        </div>
      );

    /* ── Foundation Sixty6: deep plum, ghost "66" watermark ── */
    case 'foundation-sixty6':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #0c0618 0%, #260d52 70%, #0c0618 100%)' }}>
          <span style={{ position: 'absolute', fontSize: '7rem', fontWeight: 900, color: '#c4b5fd', opacity: 0.07, letterSpacing: '-0.05em', userSelect: 'none' as const }}>66</span>
          <span style={{ color: 'white', fontSize: '0.75rem', letterSpacing: '0.35em', opacity: 0.8, position: 'relative' }}>FOUNDATION</span>
          <span style={{ color: '#c4b5fd', fontSize: '2rem', fontWeight: 700, letterSpacing: '0.08em', position: 'relative' }}>Sixty6</span>
          <span style={{ color: '#a78bfa', fontSize: '0.5rem', letterSpacing: '0.3em', marginTop: '8px', opacity: 0.6, position: 'relative' }}>MENTAL HEALTH · WEB DESIGN</span>
        </div>
      );

    /* ── Art for Rights: bold red→amber activist gradient ── */
    case 'fundraiser':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a0504 0%, #7a1a08 40%, #c2410c 100%)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, #fb923c08 0px, #fb923c08 1px, transparent 1px, transparent 14px)' }} />
          <span style={{ color: 'white', fontSize: '2.2rem', fontWeight: 900, letterSpacing: '0.06em', lineHeight: 1 }}>ART</span>
          <div style={{ width: '50px', height: '2px', background: '#fb923c', margin: '8px 0' }} />
          <span style={{ color: '#fb923c', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.22em' }}>FOR RIGHTS</span>
          <span style={{ color: '#fed7aa', fontSize: '0.5rem', letterSpacing: '0.3em', marginTop: '10px', opacity: 0.65 }}>POSTER DESIGN · ACTIVISM</span>
        </div>
      );

    /* ── Fragments of Reality: near-black cinematic, silver thin text ── */
    case 'fragments':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #030305 0%, #0c0c1a 100%)' }}>
          {/* film-strip side bars */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '18px', background: '#0f0f14', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-evenly', alignItems: 'center', padding: '6px 0' }}>
            {[...Array(6)].map((_, i) => <div key={i} style={{ width: '8px', height: '6px', background: '#1e1e2e', borderRadius: '1px' }} />)}
          </div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '18px', background: '#0f0f14', display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-evenly', alignItems: 'center', padding: '6px 0' }}>
            {[...Array(6)].map((_, i) => <div key={i} style={{ width: '8px', height: '6px', background: '#1e1e2e', borderRadius: '1px' }} />)}
          </div>
          <span style={{ color: '#94a3b8', fontSize: '1.2rem', fontWeight: 200, letterSpacing: '0.45em', textTransform: 'uppercase' as const }}>Fragments</span>
          <span style={{ color: '#475569', fontSize: '0.65rem', fontWeight: 400, letterSpacing: '0.55em', marginTop: '6px' }}>OF REALITY</span>
          <span style={{ color: '#334155', fontSize: '0.48rem', letterSpacing: '0.3em', marginTop: '14px', opacity: 0.7 }}>SHORT FILM · VIDEO</span>
        </div>
      );

    /* ── Manga API: black + bold red diagonal stripe ── */
    case 'manga-api':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: '#080808' }}>
          <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '55%', height: '160%', background: 'linear-gradient(180deg, #9f0712 0%, #450a0a 100%)', transform: 'skewX(-12deg)', opacity: 0.85 }} />
          <span style={{ color: '#ef4444', fontSize: '2rem', fontWeight: 900, letterSpacing: '0.08em', position: 'relative' }}>MANGA</span>
          <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.55em', position: 'relative', marginTop: '4px' }}>API</span>
          <span style={{ color: '#fca5a5', fontSize: '0.5rem', letterSpacing: '0.3em', marginTop: '12px', opacity: 0.65, position: 'relative' }}>PHP · MySQL · WEBSTORE</span>
        </div>
      );

    /* ── Mothersun & The Captain: warm umber, music-staff lines ── */
    case 'mothersun':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #160a02 0%, #3d2008 60%, #160a02 100%)' }}>
          {/* music staff */}
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} style={{ position: 'absolute', left: '10%', right: '10%', height: '1px', background: '#f59e0b', opacity: 0.12, top: `${32 + i * 10}%` }} />
          ))}
          <span style={{ color: '#fef3c7', fontSize: '1.3rem', fontWeight: 400, fontStyle: 'italic', fontFamily: 'Georgia, serif', position: 'relative', textShadow: '0 1px 8px #92400e88' }}>Mothersun</span>
          <span style={{ color: '#f59e0b', fontSize: '0.65rem', fontWeight: 300, letterSpacing: '0.2em', position: 'relative', marginTop: '4px', fontStyle: 'italic' }}>& the Captain</span>
          <span style={{ color: '#d97706', fontSize: '0.48rem', letterSpacing: '0.3em', marginTop: '14px', opacity: 0.6, position: 'relative' }}>DOCUMENTARY · VIDEO</span>
        </div>
      );

    /* ── CSL Car Enthusiast: gunmetal, speed lines ── */
    case 'csl':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #030810 0%, #071a30 100%)' }}>
          {/* speed lines */}
          {[-20, -10, 0, 10, 20].map((offset, i) => (
            <div key={i} style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #60a5fa22, #60a5fa44, transparent)', top: `calc(50% + ${offset}px)`, transform: 'skewY(-3deg)' }} />
          ))}
          <span style={{ color: 'white', fontSize: '3rem', fontWeight: 900, letterSpacing: '0.08em', position: 'relative', lineHeight: 1 }}>CSL</span>
          <span style={{ color: '#60a5fa', fontSize: '0.6rem', letterSpacing: '0.4em', marginTop: '10px', position: 'relative', opacity: 0.85 }}>CAR ENTHUSIAST · WEB</span>
        </div>
      );

    /* ── Star Wars API: space black, star field, gold title ── */
    case 'starwars':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: '#010104' }}>
          {/* star field */}
          {[...Array(30)].map((_, i) => (
            <div key={i} style={{ position: 'absolute', width: '2px', height: '2px', borderRadius: '50%', background: 'white', opacity: ((i * 17 + 3) % 10) / 10 * 0.7 + 0.2, left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%` }} />
          ))}
          <span style={{ color: '#fbbf24', fontSize: '1.05rem', fontWeight: 900, letterSpacing: '0.45em', position: 'relative', textShadow: '0 0 20px #fbbf2466' }}>STAR WARS</span>
          <span style={{ color: '#fde68a', fontSize: '0.65rem', fontWeight: 300, letterSpacing: '0.55em', position: 'relative', marginTop: '6px', opacity: 0.75 }}>API</span>
          <span style={{ color: '#78350f', fontSize: '0.48rem', letterSpacing: '0.25em', marginTop: '14px', opacity: 0.6, position: 'relative' }}>NODE.JS · REST API</span>
        </div>
      );

    /* ── AI Outreach Engine: terminal black, green cursor ── */
    case 'lemlist':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: '#020802' }}>
          {/* scanlines */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, #4ade8005 0px, #4ade8005 1px, transparent 1px, transparent 3px)' }} />
          <div style={{ fontFamily: 'monospace', color: '#4ade80', fontSize: '0.7rem', letterSpacing: '0.1em', position: 'relative', opacity: 0.5, alignSelf: 'flex-start', marginLeft: '24px', marginBottom: '8px' }}>
            {'> run outreach.js'}
          </div>
          <div style={{ alignSelf: 'flex-start', marginLeft: '24px', position: 'relative' }}>
            <span style={{ fontFamily: 'monospace', color: '#4ade80', fontSize: '1.3rem', fontWeight: 700, textShadow: '0 0 20px #4ade8066' }}>AI Outreach</span>
            <br />
            <span style={{ fontFamily: 'monospace', color: '#86efac', fontSize: '0.9rem', fontWeight: 400 }}>Engine<span style={{ animation: 'none', opacity: 1 }}>_</span></span>
          </div>
          <span style={{ color: '#166534', fontSize: '0.48rem', letterSpacing: '0.3em', marginTop: '14px', opacity: 0.6, position: 'relative', fontFamily: 'monospace' }}>NODE.JS · AI · AUTOMATION</span>
        </div>
      );

    /* ── Notion → Discord: dark indigo, arrow element ── */
    case 'notion-discord':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #040210 0%, #120828 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
            {/* Notion N */}
            <div style={{ width: '42px', height: '42px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'black', fontWeight: 900, fontSize: '1.3rem', fontFamily: 'serif' }}>N</span>
            </div>
            <span style={{ color: '#818cf8', fontSize: '1.4rem', fontWeight: 300 }}>→</span>
            {/* Discord icon */}
            <div style={{ width: '42px', height: '42px', background: '#5865F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="white">
                <path d="M18.64 1.35A17.93 17.93 0 0 0 14 0c-.18.33-.4.77-.54 1.12a16.6 16.6 0 0 0-5 0A11.6 11.6 0 0 0 7.95 0a17.96 17.96 0 0 0-4.65 1.36C.47 5.37-.28 9.27.09 13.12A18.07 18.07 0 0 0 5.6 16c.44-.6.83-1.24 1.17-1.91a11.7 11.7 0 0 1-1.84-.9l.45-.35a12.87 12.87 0 0 0 11.23 0l.45.35c-.6.35-1.2.65-1.84.9.34.67.73 1.31 1.17 1.91a18.02 18.02 0 0 0 5.51-2.88c.45-4.43-.75-8.27-3.26-11.67zM7.34 10.72c-1.08 0-1.97-1-1.97-2.23 0-1.24.87-2.24 1.97-2.24 1.1 0 1.98 1 1.97 2.24 0 1.23-.87 2.23-1.97 2.23zm7.33 0c-1.08 0-1.97-1-1.97-2.23 0-1.24.87-2.24 1.97-2.24 1.1 0 1.97 1 1.97 2.24 0 1.23-.87 2.23-1.97 2.23z"/>
              </svg>
            </div>
          </div>
          <span style={{ color: '#a5b4fc', fontSize: '0.6rem', letterSpacing: '0.3em', marginTop: '14px', position: 'relative' }}>AUTOMATION · BOT · API</span>
        </div>
      );

    /* ── Noctura Pulse: deep magenta, pulse wave, neon glow ── */
    case 'noctura':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at center, #2a0a38 0%, #0e020e 100%)' }}>
          {/* pulse wave SVG */}
          <svg style={{ position: 'absolute', bottom: '20%', left: 0, right: 0, opacity: 0.25 }} height="30" viewBox="0 0 200 30" preserveAspectRatio="none">
            <polyline points="0,15 25,15 35,5 45,25 55,2 65,28 75,8 85,22 95,15 200,15" stroke="#e879f9" strokeWidth="2" fill="none"/>
          </svg>
          <span style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '0.25em', position: 'relative',
            textShadow: '0 0 20px #e879f9aa, 0 0 50px #e879f955' }}>NOCTURA</span>
          <span style={{ color: '#e879f9', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.6em', position: 'relative', marginTop: '6px',
            textShadow: '0 0 12px #e879f988' }}>PULSE</span>
          <span style={{ color: '#a21caf', fontSize: '0.48rem', letterSpacing: '0.3em', marginTop: '14px', opacity: 0.7, position: 'relative' }}>INSTAGRAM · AI · NODE.JS</span>
        </div>
      );

    default:
      return (
        <img
          src={projects.find((p) => p.slug === slug)?.imageUrl ?? ''}
          alt={slug}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      );
  }
}

// ─── Project card ─────────────────────────────────────────────────────────────

interface CardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: CardProps) {
  return (
    <article
      className="group bg-cream dark:bg-warm-800 rounded-2xl border border-cream-border dark:border-warm-700 overflow-hidden hover:border-mauve dark:hover:border-mauve hover:shadow-xl hover:shadow-mauve/10 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve"
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      {/* Custom banner */}
      <div className="relative overflow-hidden aspect-video">
        <ProjectBanner slug={project.slug} />
        {/* Category pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-black/50 text-white backdrop-blur-sm capitalize">
            {project.category === 'api' ? 'API' : project.category}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center z-10">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-semibold bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-[#333] dark:text-cream mb-2 text-lg leading-tight">
          {project.title}
        </h3>
        <p className="text-[#555] dark:text-warm-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-cream-border dark:border-warm-700">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium text-mauve dark:text-mauve-faint hover:underline"
            >
              Live Demo
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium text-[#555] dark:text-warm-300 hover:text-mauve dark:hover:text-mauve-faint"
            >
              GitHub
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-xs text-[#777] dark:text-warm-400 italic">
              College / Client project
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
