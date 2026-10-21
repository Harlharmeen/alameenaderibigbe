import SectionHeading from '../../components/section-heading';
import ProjectsView from '../../components/projects-view';
import { projects } from '../../data/content';

export const metadata = {
  title: 'Projects — Al-ameen Aderibigbe',
  description:
    'Case studies across Brand Identity, UI/UX Product Design, and High-Performance Web Design.',
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
