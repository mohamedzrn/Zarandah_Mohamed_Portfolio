import { SectionTitle } from '../ui/SectionTitle';
import { useInView } from '../../hooks/useInView';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
  activities?: string[];
}

const education: EducationItem[] = [
  {
    degree: 'Ontario College Graduate Certificate — Software and Information Systems Testing',
    institution: 'Fanshawe College',
    period: 'Sep 2024 – Jan 2026',
    description:
      'A two-year graduate certificate covering software quality assurance protocols and test engineering for mobile, web, and cloud-based applications within Agile and DevOps environments.',
    highlights: [
      'Test Methodologies & Test Planning',
      'Automated Test Tools (Selenium)',
      'Non-Functional & IS Security Testing',
      'Coding for Test',
      'Applied Project Management',
      'Defect tracking and regression testing',
    ],
    activities: [
      'Participated in collaborative usability and functional test simulations',
      'Engaged in mock interviews and career development workshops focused on QA roles',
      'Contributed to team-based test case creation and execution exercises',
      'Actively involved in group discussions on Agile testing methodologies and real-world bug reporting',
    ],
  },
  {
    degree: 'Diploma — Interactive Media Design and Production',
    institution: 'Fanshawe College',
    period: 'Sep 2022 – Apr 2024',
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
    degree: 'Advanced Diploma — Mechanical Engineering',
    institution: 'Conestoga College',
    period: 'Sep 2021 – Apr 2022',
    description:
      'Advanced diploma program in mechanical engineering, building foundational engineering principles, technical problem-solving, and systematic analytical skills.',
    highlights: [
      'Engineering fundamentals and applied mathematics',
      'Technical drawing and CAD modelling',
      'Systematic problem-solving methodology',
      'Project-based collaborative learning',
    ],
  },
];

export function Education() {
  const { ref, inView } = useInView();

  return (
    <section
      id="education"
      className="py-24 bg-cream-dark dark:bg-warm-900"
      aria-labelledby="education-heading"
    >
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <SectionTitle
          label="Education"
          title="Academic Background"
          description="Formal training that built my foundation in design and engineering."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((item, i) => (
            <article
              key={i}
              className="bg-cream dark:bg-warm-800 rounded-2xl p-8 border border-cream-border dark:border-warm-700 hover:border-mauve dark:hover:border-mauve transition-colors"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-mauve/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-mauve" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#333] dark:text-cream leading-tight text-base">
                    {item.degree}
                  </h3>
                  <p className="text-mauve text-sm font-medium mt-1">
                    {item.institution}
                  </p>
                  <p className="text-[#777] dark:text-warm-400 text-sm">{item.period}</p>
                </div>
              </div>

              <p className="text-[#555] dark:text-warm-300 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#555] dark:text-warm-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-mauve shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>

              {item.activities && (
                <div className="mt-5 pt-4 border-t border-cream-border dark:border-warm-700">
                  <p className="text-xs font-semibold tracking-widest uppercase text-mauve mb-3">
                    Activities
                  </p>
                  <ul className="space-y-2">
                    {item.activities.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#555] dark:text-warm-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-mauve/50 shrink-0 mt-1.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
