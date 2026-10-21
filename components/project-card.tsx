import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: '16/9';
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card group block w-full"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] shadow-sm transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-xl">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className={`size-full project-tone-${project.tone} noise`} />
        )}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Category & Year Header Tags */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md"
              >
                {category}
              </span>
            ))}
          </div>
          <span className="mono rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
            {project.year}
          </span>
        </div>

        {/* Hover Action Pill */}
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-5 sm:right-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-black shadow-lg">
            <span>View Case Study</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>

      {/* Project Meta Info */}
      <div className="mt-4 flex items-start justify-between gap-4 px-1">
        <div>
          <h3 className="text-base font-bold tracking-tight text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)] sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            {project.categories.join(' · ')}
          </p>
        </div>
        <span className="project-link inline-flex items-center gap-1 pt-0.5 text-xs font-semibold text-[color:var(--muted)] transition group-hover:translate-x-1 group-hover:text-[color:var(--fg)]">
          Case study <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
