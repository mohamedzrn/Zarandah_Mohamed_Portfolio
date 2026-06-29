import { SectionTitle } from '../ui/SectionTitle';
import { imgUrl } from '../../utils/assets';
import { useInView } from '../../hooks/useInView';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      className="py-24 bg-cream-dark dark:bg-warm-900"
      aria-labelledby="about-heading"
    >
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <SectionTitle
          label="About Me"
          title="Full-Cycle Builder"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={imgUrl('/images/me-1.jpg')}
                alt="Mohamed Zarandah"
                className="w-full rounded-2xl object-cover aspect-[3/4] shadow-xl"
                loading="lazy"
              />
              <img
                src={imgUrl('/images/me-2.jpg')}
                alt="Mohamed Zarandah"
                className="w-full rounded-2xl object-cover aspect-[3/4] shadow-xl mt-8"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-mauve/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-[#555] dark:text-warm-300 text-lg leading-relaxed">
              I help teams grow through better systems — whether that's building the
              product, testing it, or creating the outreach pipeline that fills the funnel.
              I've shipped a full-stack event planning platform, built automation workflows
              for B2B lead generation, and delivered production-level QA documentation.
            </p>
            <p className="text-[#555] dark:text-warm-300 leading-relaxed">
              I'm a double Fanshawe grad with a diploma in{' '}
              <span className="text-mauve font-medium">
                Interactive Media Design and Production
              </span>{' '}
              and a certificate in{' '}
              <span className="text-mauve font-medium">
                Software and Information Systems Testing (SST3)
              </span>
              , plus a foundation in{' '}
              <span className="text-mauve font-medium">
                Mechanical Engineering
              </span>{' '}
              from Conestoga College.
            </p>
            <p className="text-[#555] dark:text-warm-300 leading-relaxed">
              I work across the full cycle — design, development, testing, and outreach.
              From wireframes to deployed products to cold email pipelines, I've delivered
              at every stage.
            </p>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {[
                'Full-Stack Development',
                'QA & Testing',
                'UI / UX Design',
                'B2B Outreach & Lead Gen',
                'Creative Development',
                'Video Production',
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-sm text-[#555] dark:text-warm-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-mauve shrink-0" />
                  {service}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-cream-border dark:border-warm-700">
              {[
                { value: '15+', label: 'Projects' },
                { value: '6', label: 'Credentials' },
                { value: '5+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-mauve">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#777] dark:text-warm-400 mt-1">
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
