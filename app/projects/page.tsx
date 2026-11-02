import type { Metadata } from 'next';
import SectionHeading from '@/components/section-heading';
import ProjectsView from '@/components/projects-view';
import { projects } from '@/data/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies across Brand Identity, UI/UX Product Design, and High-Performance Web Design.',
  openGraph: {
    title: 'Projects — Al-ameen Aderibigbe',
    description:
      'Case studies across Brand Identity, UI/UX Product Design, and High-Performance Web Design.',
    url: '/projects',
    images: [
      {
        url: '/Open-graph-image.jpg',
        secureUrl: 'https://alameenaderibigbe.site/Open-graph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Selected Works by Al-ameen Aderibigbe',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects — Al-ameen Aderibigbe',
    description:
      'Case studies across Brand Identity, UI/UX Product Design, and High-Performance Web Design.',
    images: ['https://alameenaderibigbe.site/Open-graph-image.jpg'],
  },
};

const categories = [
  'UI/UX Design',
  'Brand Identity Design',
  'Web Design',
] as const;

export default function Projects() {
  return (
    <main className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Work Archive"
        title="Selected work across brand, product and web."
        copy="A comprehensive showcase of documented case studies. Each project details the strategic rationale, operational system architecture, and measurable outcomes."
      />

      <div className="mt-16">
        <ProjectsView categories={categories} projects={projects} />
      </div>
    </main>
  );
}
