import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import { useInView } from '../../hooks/useInView';

interface Cert {
  name: string;
  issuer: string;
  year: string;
  tags: string[];
}

const certifications: Cert[] = [
  {
    name: 'ISTQB Certified Tester — Foundation Level (CTFL)',
    issuer: 'ISTQB',
    year: '2024',
    tags: ['QA', 'CTFL', 'Test Planning'],
  },
  {
    name: 'Meta Front-End Developer Certificate',
    issuer: 'Coursera / Meta',
    year: '2025',
    tags: ['React', 'JavaScript', 'Web Dev'],
  },
  {
    name: 'Google UX Design Certificate',
    issuer: 'Coursera / Google',
    year: '2025',
    tags: ['UX Design', 'Figma', 'Research'],
  },
  {
    name: 'Google Analytics 4 Certification',
    issuer: 'Google',
    year: '2025',
    tags: ['Analytics', 'Data', 'Growth'],
  },
  {
    name: 'HubSpot Inbound Marketing',
    issuer: 'HubSpot Academy',
    year: '2025',
    tags: ['Marketing', 'Funnels', 'B2B'],
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    year: '2025',
    tags: ['AI', 'Automation', 'Prompting'],
  },
];

export function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section
      id="certifications"
      className="py-24 bg-cream dark:bg-warm-950"
      aria-labelledby="certifications-heading"
    >
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <SectionTitle
          label="Certifications"
          title="Credentials"
          description="Recognized qualifications from accredited institutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <article
              key={i}
              className="flex items-start gap-5 bg-cream-dark dark:bg-warm-800 rounded-2xl p-6 border border-cream-border dark:border-warm-700 hover:border-mauve dark:hover:border-mauve transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-mauve/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-[#333] dark:text-cream text-sm leading-tight">
                  {cert.name}
                </h3>
                <p className="text-mauve text-sm font-medium mt-1">
                  {cert.issuer}
                </p>
                <p className="text-[#777] dark:text-warm-400 text-xs mb-3">{cert.year}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
