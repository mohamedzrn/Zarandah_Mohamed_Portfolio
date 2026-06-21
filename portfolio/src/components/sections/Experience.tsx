import { SectionTitle } from '../ui/SectionTitle';
import { useInView } from '../../hooks/useInView';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'freelance';
}

const experiences: ExperienceItem[] = [
  {
    role: 'Business Development and Relations',
    company: 'Uobo.ca',
    period: 'Aug 2025 – Feb 2026',
    type: 'work',
    description: [
      'Conducted dealer outreach to identify potential partners.',
      'Managed communication with B2B clients and prospects.',
      'Supported partnership discussions and relationship building.',
      'Assisted with outreach campaigns and affiliate growth.',
    ],
  },
  {
    role: 'UX Designer (Internship)',
    company: 'The Door Face Panels — Riipen LevelUP',
    period: 'Feb 2025 – Mar 2025',
    type: 'work',
    description: [
      'Designed mobile and dashboard interfaces for a smart home system.',
      'Created wireframes and user flows for device control features.',
      'Collaborated with the client remotely to refine the product design.',
      'Delivered UX documentation and interface prototypes.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Event Simplified',
    period: 'Feb 2024 – May 2024',
    type: 'work',
    description: [
      'Developed a web platform using React and Node.js.',
      'Designed responsive UI and frontend components.',
      'Integrated backend logic and APIs.',
      'Delivered the project independently from planning to launch.',
    ],
  },
  {
    role: 'Creative Developer & Web Designer',
    company: 'Freelance / Self-Employed',
    period: '2022 – Present',
    type: 'freelance',
    description: [
      'Designed and developed client websites including Event Simplified and Foundation Sixty6.',
      'Delivered full-stack web solutions from wireframes to production deployment.',
      'Produced brand identities, motion graphics, and video productions for small businesses.',
      'Applied QA testing methodologies to ensure cross-browser and cross-device compatibility.',
    ],
  },
  {
    role: 'Interactive Media & Web Developer',
    company: 'Fanshawe College — Academic Projects',
    period: '2022 – 2024',
    type: 'work',
    description: [
      'Built 10+ projects spanning web development, UX/UI design, API integrations, and video production.',
      'Developed Bootcamp WebView platform for Industry Night, connecting students with industry professionals.',
      'Created REST API integrations using PHP/Lumen and JavaScript Fetch API.',
      'Gained hands-on experience with Selenium automated testing and QA documentation.',
    ],
  },
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      className="py-24 bg-cream dark:bg-warm-950"
      aria-labelledby="experience-heading"
    >
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <SectionTitle
          label="Experience"
          title="Work History"
          description="Projects, roles, and experiences that have shaped my skills."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-cream-border dark:bg-warm-700 md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-mauve border-2 border-cream dark:border-warm-950 -translate-x-1/2 mt-1.5 z-10" />

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] bg-cream-dark dark:bg-warm-800 rounded-2xl p-6 border border-cream-border dark:border-warm-700 shadow-sm ${
                    i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-[#333] dark:text-cream">{exp.role}</h3>
                      <p className="text-mauve text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-[#777] dark:text-warm-400 whitespace-nowrap pt-0.5">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#555] dark:text-warm-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-mauve/50 shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
