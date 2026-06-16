import { SectionTitle } from '../ui/SectionTitle';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

const education: EducationItem[] = [
  {
    degree: 'Diploma — Interactive Media Design and Production',
    institution: 'Fanshawe College',
    period: '2021 – 2024',
    description:
      'A comprehensive program covering web development, UX/UI design, motion graphics, video production, and interactive media across full-stack technologies.',
    highlights: [
      'Full-stack web development (HTML, CSS, JS, PHP, MySQL)',
      'UX/UI Design with Figma and Adobe Suite',
      'Motion graphics and video production',
      '3D modelling and animation',
      'Client-facing project delivery',
    ],
  },
  {
    degree: 'Certificate — Software and Information Systems Testing (SST3)',
    institution: 'Fanshawe College',
    period: '2023 – 2024',
    description:
      'Specialized certificate focused on industry-standard QA testing methodologies, test planning, defect tracking, and automated testing with Selenium.',
    highlights: [
      'Test planning and strategy documentation',
      'Selenium WebDriver for automated testing',
      'Defect tracking and regression testing',
      'Black-box and white-box testing techniques',
      'Agile QA integration',
    ],
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-white dark:bg-slate-950"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Education"
          title="Academic Background"
          description="Formal training that built my foundation in design and engineering."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {education.map((item, i) => (
            <article
              key={i}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white leading-tight text-base">
                    {item.degree}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 text-sm font-medium mt-1">
                    {item.institution}
                  </p>
                  <p className="text-slate-400 text-sm">{item.period}</p>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
