import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      aria-label="Hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6">
          Mohamed
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
            Zarandah
          </span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-slate-400 font-light mb-4">
          Creative Developer &amp; QA Engineer
        </p>

        {/* Location */}
        <p className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          London, Ontario, Canada
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-12">
          I bridge the gap between design and development, building interactive,
          efficient, and visually compelling web experiences. Graduate of{' '}
          <span className="text-white font-medium">Interactive Media Design</span> and{' '}
          <span className="text-white font-medium">Software Testing (SST3)</span> at Fanshawe College.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href="#projects" variant="primary" className="px-8 py-3 text-base">
            View My Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
          <Button as="a" href="#contact" variant="outline" className="px-8 py-3 text-base border-slate-600 text-slate-300 hover:border-violet-500 hover:text-violet-400">
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
