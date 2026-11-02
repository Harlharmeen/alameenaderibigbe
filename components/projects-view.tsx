'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { Project, ProjectCategory } from '../data/content';

interface ProjectsViewProps {
  categories: readonly ProjectCategory[];
  projects: Project[];
}

export default function ProjectsView({
  categories,
  projects,
}: ProjectsViewProps) {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | ProjectCategory>('ALL');

  const scrollToCategory = (cat: ProjectCategory) => {
    setSelectedFilter('ALL');
    const element = document.getElementById(cat.toLowerCase().replace(/[\s/]+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Category Navigation Bar */}
      <div className="sticky top-[72px] z-30 mb-16 -mx-4 border-y border-[color:var(--line)] bg-[color:var(--bg)]/90 px-4 py-4 backdrop-blur-md md:mx-0 md:rounded-full md:border md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--muted)]">
              Jump to:
            </span>

            <button
              type="button"
              onClick={() => setSelectedFilter('ALL')}
              className={`tab-btn ${selectedFilter === 'ALL' ? 'is-active' : ''}`}
            >
              All Disciplines
            </button>

            {categories.map((category) => {
              const catSlug = category.toLowerCase().replace(/[\s/]+/g, '-');
              const isActive = selectedFilter === category;
              const count = projects.filter((p) => p.categories.includes(category)).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(category);
                    scrollToCategory(category);
                  }}
                  className={`tab-btn ${isActive ? 'is-active' : ''}`}
                >
                  <span>{category}</span>
                  <span className="mono text-[11px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          <p className="mono hidden text-xs text-[color:var(--muted)] lg:block">
            {projects.length} Total Case Studies
          </p>
        </div>
      </div>

      {/* Vertical Block Progression */}
      <div className="space-y-28">
        {categories
          .filter((cat) => selectedFilter === 'ALL' || selectedFilter === cat)
          .map((category, index) => {
            const items = projects.filter((p) => p.categories.includes(category));
            const catId = category.toLowerCase().replace(/[\s/]+/g, '-');

            return (
              <section
                key={category}
                id={catId}
                className="scroll-mt-32"
              >
                {/* Category Header */}
                <div className="mb-10 flex flex-col justify-between gap-2 border-b border-[color:var(--line)] pb-5 sm:flex-row sm:items-end">
                  <div>
                    <p className="eyebrow">
                      0{index + 1} · Discipline
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-[-.05em] md:text-5xl">
                      {category}
                    </h2>
                  </div>
                  <p className="mono text-xs text-[color:var(--muted)]">
                    {String(items.length).padStart(2, '0')} Selected Works
                  </p>
                </div>

                {/* All Cards Equal - 16:9 Ratio Dimension */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  {items.map((project) => (
                    <ProjectCard
                      key={`${category}-${project.slug}`}
                      project={project}
                      aspectRatio="16/9"
                    />
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
}
