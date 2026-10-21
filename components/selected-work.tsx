'use client';

import { useState } from 'react';
import ProjectCard from './project-card';
import { Project, ProjectCategory } from '../data/content';

interface SelectedWorkProps {
  projects: Project[];
}

type TabFilter = 'All' | ProjectCategory;

const categories: TabFilter[] = [
  'All',
  'UI/UX Design',
  'Brand Identity Design',
  'Web Design',
];

export default function SelectedWork({ projects }: SelectedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<TabFilter>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[color:var(--line)] pb-6">
        <span className="mr-2 text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--muted)]">
          Filter:
        </span>
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count =
            category === 'All'
              ? projects.length
              : projects.filter((p) => p.categories.includes(category)).length;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`tab-btn ${isActive ? 'is-active' : ''}`}
            >
              <span>{category}</span>
              <span className="mono text-[11px] opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Grid of 16:9 equal-sized cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            aspectRatio="16/9"
          />
        ))}
      </div>
    </div>
  );
}
