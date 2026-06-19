import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream dark:bg-warm-950"
      aria-label="Hero"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-mauve/5 dark:bg-mauve/8 blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-mauve/5 dark:bg-mauve/5 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-mauve/30 bg-mauve/10 text-mauve text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-mauve animate-pulse" />
          Available for work
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#333] dark:text-cream tracking-tight leading-none mb-6">
          Mohamed
          <br />
          <span className="text-mauve">Zarandah</span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-[#555] dark:text-warm-300 font-light mb-4">
          Full-Cycle Developer &amp; Business Growth Partner
        </p>

        {/* Location */}
        <p className="flex items-center gap-1.5 text-[#777] dark:text-warm-400 text-sm mb-10">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          London, Ontario, Canada
        </p>

        {/* Description */}
        <p className="max-w-2xl text-[#555] dark:text-warm-300 text-lg leading-relaxed mb-12">
          I help teams grow through better systems — whether that's building the product,
          testing it, or creating the outreach pipeline that fills the funnel. Double{' '}
          <span className="text-[#333] dark:text-cream font-medium">Fanshawe</span> grad in{' '}
          <span className="text-[#333] dark:text-cream font-medium">Interactive Media Design</span> and{' '}
          <span className="text-[#333] dark:text-cream font-medium">Software Testing</span>, with
          hands-on B2B partnership experience.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Button as="a" href="#projects" variant="primary" className="px-8 py-3 text-base">
            View My Work
          </Button>
          <Button as="a" href="/Mohamed_Zarandah_Resume.pdf" download variant="outline" className="px-8 py-3 text-base">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" />
            </svg>
            Download Resume
          </Button>
          <Button as="a" href="#contact" variant="ghost" className="px-8 py-3 text-base">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mauve/50 animate-bounce">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
