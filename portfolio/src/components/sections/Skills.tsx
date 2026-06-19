import { SectionTitle } from '../ui/SectionTitle';
import { skillCategories } from '../../data/skills';
import { useInView } from '../../hooks/useInView';

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      className="py-24 bg-cream dark:bg-warm-950"
      aria-labelledby="skills-heading"
    >
      <div ref={ref} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <SectionTitle
          label="Skills"
          title="My Toolbox"
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-cream-dark dark:bg-warm-800 rounded-2xl p-6 border border-cream-border dark:border-warm-700 hover:border-mauve dark:hover:border-mauve transition-colors shadow-sm"
            >
              <h3 className="font-semibold text-[#333] dark:text-cream mb-4 pb-3 border-b border-cream-border dark:border-warm-700 text-sm tracking-wide uppercase">
                {category.name}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2.5 text-[#555] dark:text-warm-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-mauve shrink-0" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
