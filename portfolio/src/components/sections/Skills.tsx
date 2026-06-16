import { SectionTitle } from '../ui/SectionTitle';
import { skillCategories } from '../../data/skills';

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-900"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Skills"
          title="My Toolbox"
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors shadow-sm"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-100 dark:border-slate-700 text-sm tracking-wide uppercase">
                {category.name}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2.5 text-slate-600 dark:text-slate-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
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
