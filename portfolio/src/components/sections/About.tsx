import { SectionTitle } from '../ui/SectionTitle';

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-950"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="About Me"
          title="Creative Developer &amp; QA Engineer"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/me-1.jpg"
                alt="Mohamed Zarandah"
                className="w-full rounded-2xl object-cover aspect-[3/4] shadow-xl"
                loading="lazy"
              />
              <img
                src="/images/me-2.jpg"
                alt="Mohamed Zarandah"
                className="w-full rounded-2xl object-cover aspect-[3/4] shadow-xl mt-8"
                loading="lazy"
              />
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Welcome to the intersection of artistry and technology. I'm a Creative Developer
              based in London, Ontario, blending innovative development with imaginative design
              to build memorable web experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              With a diploma in{' '}
              <span className="text-violet-600 dark:text-violet-400 font-medium">
                Interactive Media Design and Production
              </span>{' '}
              and a certificate in{' '}
              <span className="text-violet-600 dark:text-violet-400 font-medium">
                Software and Information Systems Testing (SST3)
              </span>{' '}
              from Fanshawe College, I bring both the creative vision and the technical rigour
              that modern development demands.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I've worked on projects spanning interactive websites, enterprise solutions,
              mobile WebViews, 3D modelling, and video production — always pushing to explore
              what's next.
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                'Front-End Development',
                'Back-End Development',
                'UI / UX Design',
                'QA & Testing',
                'Creative Development',
                'Video Production',
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  {service}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              {[
                { value: '12+', label: 'Projects' },
                { value: '2', label: 'Credentials' },
                { value: '4+', label: 'Years Learning' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
