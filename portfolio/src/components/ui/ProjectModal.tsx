import { useEffect, useRef } from 'react';
import type { Project } from '../../types';
import { Badge } from './Badge';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const highlights = project.highlights
    .split(/\.\s+/)
    .map((h) => h.replace(/\.$/, '').trim())
    .filter(Boolean);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#333]/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-cream dark:bg-warm-900 border border-cream-border dark:border-warm-700 shadow-2xl"
      >
        {/* Banner image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Close button — overlaid on image */}
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-cream/90 dark:bg-warm-900/90 text-[#333] dark:text-cream hover:bg-mauve hover:text-cream transition-colors shadow-md"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Category pill */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-mauve text-cream capitalize">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title + tags */}
          <div>
            <h2 className="text-2xl font-bold text-[#333] dark:text-cream mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-mauve mb-2">
              About
            </h3>
            <p className="text-[#555] dark:text-warm-300 leading-relaxed">{project.about}</p>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-mauve mb-3">
                Highlights
              </h3>
              <ul className="space-y-2">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#555] dark:text-warm-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-mauve shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-mauve mb-3">
                Screenshots
              </h3>
              <div className={`grid gap-3 ${project.screenshots.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full rounded-xl object-cover border border-cream-border dark:border-warm-700"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Review / testimonial */}
          {project.review && (
            <blockquote className="border-l-4 border-mauve pl-4 py-1">
              <p className="text-[#555] dark:text-warm-300 text-sm italic leading-relaxed">
                {project.review}
              </p>
            </blockquote>
          )}

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-4 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-mauve hover:bg-mauve-dark text-cream transition-colors"
                >
                  Live Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-mauve text-mauve hover:bg-mauve hover:text-cream transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
