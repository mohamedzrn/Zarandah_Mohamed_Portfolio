import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';

interface Cert {
  name: string;
  issuer: string;
  year: string;
  tags: string[];
}

const certifications: Cert[] = [
  {
    name: 'Software and Information Systems Testing (SST3)',
    issuer: 'Fanshawe College',
    year: '2024',
    tags: ['QA', 'Selenium', 'Test Planning'],
  },
  {
    name: 'Interactive Media Design and Production',
    issuer: 'Fanshawe College',
    year: '2024',
    tags: ['Web Dev', 'UI/UX', 'React'],
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-slate-50 dark:bg-slate-900"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Certifications"
          title="Credentials"
          description="Recognized qualifications from accredited institutions."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, i) => (
            <article
              key={i}
              className="flex items-start gap-5 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                  {cert.name}
                </h3>
                <p className="text-violet-600 dark:text-violet-400 text-sm font-medium mt-1">
                  {cert.issuer}
                </p>
                <p className="text-slate-400 text-xs mb-3">{cert.year}</p>
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
