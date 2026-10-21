import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects } from '../../../data/content';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found — Al-ameen Aderibigbe',
    };
  }

  return {
    title: `${project.title} — Case Study by Al-ameen Aderibigbe`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Al-ameen Aderibigbe`,
      description: project.summary,
      type: 'article',
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((x) => x.slug === slug);
  const project = projects[projectIndex];

  if (!project) return notFound();

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  const behanceLink =
    project.behanceUrl || 'https://www.behance.net/alameenaderibigbe';

  return (
    <main>
      {/* =====================================================
          HERO & HEADER
      ===================================================== */}
      <section className="container pt-16 pb-20 md:pt-24 md:pb-28">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
        >
          <span aria-hidden="true">←</span> Back to all projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">
          {project.categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-1 text-[11px]"
            >
              {c}
            </span>
          ))}
          <span>·</span>
          <span className="mono">{project.year}</span>
        </div>

        <h1 className="display mt-6 max-w-5xl text-5xl font-extrabold sm:text-7xl md:text-8xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[color:var(--muted)] md:text-xl">
          {project.summary}
        </p>

        {/* Primary Action Buttons including Behance */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={behanceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            <span>See design on Behance</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </a>

          <a
            href="#overview"
            className="cta-secondary"
          >
            <span>Read case study</span>
            <span className="cta-arrow" aria-hidden="true">↓</span>
          </a>
        </div>

        {/* ===================================================
            PROJECT SPECS MATRIX
        =================================================== */}
        <div className="mt-14 grid gap-8 border-y border-[color:var(--line)] py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow">Client / Org</p>
            <p className="mt-2 text-sm font-bold text-[color:var(--fg)]">
              {project.client || 'Proprietary Initiative'}
            </p>
          </div>

          <div>
            <p className="eyebrow">Role & Focus</p>
            <p className="mt-2 text-sm font-bold text-[color:var(--fg)]">
              {project.role || 'Principal Designer'}
            </p>
          </div>

          <div>
            <p className="eyebrow">Timeline</p>
            <p className="mt-2 text-sm font-bold text-[color:var(--fg)]">
              {project.timeline || 'Multi-Phase Sprint'}
            </p>
          </div>

          <div>
            <p className="eyebrow">Core Tags</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[color:var(--card)] px-2.5 py-0.5 text-[11px] font-medium text-[color:var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            FEATURED HERO MEDIA BANNER (16:9 RATIO, MATCHING ROUNDNESS)
        =================================================== */}
        <div className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] shadow-2xl">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1180px"
              className="object-cover"
            />
          ) : (
            <div className={`size-full project-tone-${project.tone} noise`} />
          )}

          {/* Top and Bottom Atmosphere Shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/70">
                Design Direction
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                {project.title}
              </h2>
            </div>

            <a
              href={behanceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black shadow-lg transition hover:bg-white/90"
            >
              <span>See full design on Behance</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Callout Notice: Full Design Screens on Behance */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] p-6 md:p-8">
          <div>
            <span className="mono text-xs font-semibold uppercase tracking-wider text-[color:var(--accent)]">
              Complete Visual Showcase
            </span>
            <h3 className="mt-1 text-base sm:text-lg font-bold tracking-tight">
              Looking for the full screen-by-screen presentation?
            </h3>
            <p className="mt-1 text-sm text-[color:var(--muted)] max-w-xl">
              We focus on strategy and systems here; view the full high-fidelity Figma screens, interactive prototypes, and visual assets on Behance.
            </p>
          </div>
          <a
            href={behanceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary flex-shrink-0"
          >
            <span>See design on Behance</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* =====================================================
          EXECUTIVE OVERVIEW & DELIVERABLES
      ===================================================== */}
      <section id="overview" className="border-t border-[color:var(--line)] py-20 bg-[color:var(--card)]/40 scroll-mt-24">
        <div className="container grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow">Executive Summary</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Bridging the gap between intent and execution.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
              {project.overview || project.description}
            </p>
          </div>

          {project.deliverables && project.deliverables.length > 0 && (
            <div className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] p-8">
              <p className="eyebrow">Delivered Assets & Milestones</p>
              <ul className="mt-6 space-y-3.5">
                {project.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-[color:var(--fg)]"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-[color:var(--fg)] text-[10px] text-[color:var(--bg)] font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          THE CHALLENGE VS THE APPROACH
      ===================================================== */}
      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Challenge */}
          <div className="rounded-[20px] border border-red-500/20 bg-red-500/5 p-8 md:p-12">
            <span className="mono text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
              01 / The Friction & Challenge
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              What stood in the way of success?
            </h3>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)]">
              {project.challenge ||
                'Navigating operational complexity, unclear user mental models, and competing stakeholder requirements that were causing high friction in previous iterations.'}
            </p>
          </div>

          {/* Approach & Solution */}
          <div className="rounded-[20px] border border-emerald-500/20 bg-emerald-500/5 p-8 md:p-12">
            <span className="mono text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              02 / The Strategic Solution
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              How the system solves the problem
            </h3>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--muted)]">
              {project.solution ||
                project.approach ||
                'Engineered an intuitive interface hierarchy, unified design tokens, and progressive disclosure flows that prioritize psychological safety, rapid task completion, and long-term brand equity.'}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYSTEM FEATURES ARCHITECTURE
      ===================================================== */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <section className="border-y border-[color:var(--line)] py-24 bg-[color:var(--card)]/30">
          <div className="container">
            <p className="eyebrow">System Architecture</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
              Key Features & Interaction Models
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[color:var(--muted)]">
              A closer look at the intentional mechanisms engineered to make the
              product trustworthy, resilient, and effortless to operate.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.keyFeatures.map((feat, index) => (
                <div
                  key={feat.title}
                  className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] p-8 transition hover:-translate-y-1 hover:border-[color:var(--fg)]"
                >
                  <span className="mono text-xs font-semibold text-[color:var(--accent)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          MEASURABLE IMPACT
      ===================================================== */}
      {project.impact && project.impact.length > 0 && (
        <section className="container py-24">
          <p className="eyebrow">Outcomes & Growth</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Measurable results that moved the needle.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {project.impact.map((stat, i) => (
              <div
                key={stat}
                className="flex flex-col justify-between rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] p-6"
              >
                <span className="mono text-xs text-[color:var(--muted)]">Metric 0{i + 1}</span>
                <p className="mt-4 text-base font-bold leading-relaxed text-[color:var(--fg)] md:text-lg">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =====================================================
          MID-PAGE BEHANCE PROMINENT CARD
      ===================================================== */}
      <section className="container pb-16">
        <div className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] p-8 md:p-12 text-center">
          <p className="eyebrow">Behance Portfolio Publication</p>
          <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Explore the complete visual identity on Behance
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--muted)]">
            Dive into the full screen walkthroughs, typographic design systems, color tokens, and user flow mockups directly on Behance.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={behanceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              <span>See design on Behance</span>
              <span className="cta-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT FOOTER CTA
      ===================================================== */}
      <section className="border-t border-[color:var(--line)] py-20 bg-[color:var(--card)]">
        <div className="container flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Next Case Study</p>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              {nextProject.title}
            </h3>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              {nextProject.categories.join(' · ')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/projects/${nextProject.slug}`}
              className="cta-primary"
            >
              <span>View next project</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </Link>

            <a
              href={behanceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              <span>See on Behance ↗</span>
            </a>

            <Link href="/projects" className="cta-secondary">
              <span>Back to archive</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
