import { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import { ProjectModal } from '../ui/ProjectModal';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

type FilterCategory = 'all' | Project['category'];

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Design', value: 'design' },
  { label: 'Video', value: 'video' },
  { label: 'API / Backend', value: 'api' },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 bg-cream-dark dark:bg-warm-900"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Projects"
          title="Selected Work"
          description="A collection of projects spanning web development, design, video production, and API integrations."
        />

        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={activeFilter === f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                activeFilter === f.value
                  ? 'bg-mauve text-cream shadow-md shadow-mauve/20'
                  : 'text-[#555] dark:text-warm-300 hover:text-mauve dark:hover:text-mauve-faint bg-cream dark:bg-warm-800 hover:bg-mauve/10 dark:hover:bg-mauve/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <article
      className="group bg-cream dark:bg-warm-800 rounded-2xl border border-cream-border dark:border-warm-700 overflow-hidden hover:border-mauve dark:hover:border-mauve hover:shadow-xl hover:shadow-mauve/10 transition-all duration-300 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-cream-dark dark:bg-warm-900">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category pill */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-cream/90 dark:bg-warm-900/90 text-mauve border border-mauve/20 capitalize">
            {project.category}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-mauve/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-cream text-sm font-medium">View Details</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-[#333] dark:text-cream mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-mauve hover:text-mauve-dark transition-colors"
            >
              Live Demo
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#555] dark:text-warm-400 hover:text-mauve dark:hover:text-mauve-faint transition-colors"
            >
              GitHub
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="text-xs text-[#777] dark:text-warm-400 italic">
              College / Client project
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
