import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../../components/section-heading';

export const metadata = {
  title: 'About — Al-ameen Aderibigbe',
  description:
    'Background, design philosophy, and principles of Al-ameen Aderibigbe, Brand Identity & Product Designer.',
};

export default function About() {
  return (
    <main className="container py-20 md:py-28">
      {/* =====================================================
          HERO & PORTRAIT
      ===================================================== */}
      <section className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <div>
          <p className="eyebrow">About · Al-ameen Aderibigbe</p>
          <h1 className="display mt-6 text-5xl font-extrabold sm:text-7xl md:text-8xl">
            A designer between identity and experience.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            I help ambitious founders, tech companies, and forward-thinking businesses
            turn complex ideas into cohesive identities and digital products that feel
            effortlessly clear, useful, and distinctly theirs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/projects" className="cta-primary">
              <span>Explore selected work</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </Link>
            <a
              href="/Al-Ameen_Aderibigbe_Product_Designer_CV.pdf"
              download
              className="cta-secondary"
            >
              <span>Download CV</span>
              <span className="cta-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* Featured Portrait Card from Landing Page */}
        <div className="mx-auto w-full max-w-sm lg:justify-self-end">
          <div className="float relative aspect-[4/5] overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-2xl">
            <Image
              src="/al-ameen.jpg"
              alt="Al-ameen Aderibigbe portrait"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 380px"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Information */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Selected Work
              </span>
              <p className="mt-3 text-2xl font-bold tracking-[-.04em] text-white">
                Al-ameen Aderibigbe
              </p>
              <p className="text-xs text-white/70">
                Lagos, Nigeria · Operating Globally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY NARRATIVE
      ===================================================== */}
      <section className="mt-28 border-t grid-line pt-16">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="eyebrow">The Perspective</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Meaning before making. Systems before screens.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
            <p>
              Most design practices specialize narrowly: either they make logos that
              look sharp on billboards but fall apart in a UI design system, or they
              design interfaces that function cleanly but lack brand memorability
              and soul.
            </p>
            <p>
              My work exists deliberately at the intersection of both. A brand is not
              just a logo guideline; it is the promise of what the product will deliver.
              And a product is not just a collection of wireframes; it is the physical
              evidence that proves the brand promise is real.
            </p>
            <p>
              When I design for a company, we do not simply produce pretty visuals.
              We build scalable foundations—from atomic design tokens and typography
              hierarchies to high-conversion checkout flows and developer-ready
              handoffs.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCIPLINES BREAKDOWN
      ===================================================== */}
      <section className="mt-24 border-y grid-line py-20">
        <SectionHeading
          eyebrow="Capabilities"
          title="Where I deliver the highest leverage."
          copy="Every project is approached as an end-to-end design engagement where strategy and visual craft are inseparable."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-8">
            <p className="mono text-xs font-semibold text-[color:var(--accent)]">01 / BRAND</p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight">Brand Identity & Strategy</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Transforming raw ideas and scattered propositions into mature, future-proof
              identities. Deliverables include brand strategy, visual systems, bespoke
              typography direction, iconography, and multi-channel brand books.
            </p>
            <ul className="mt-6 space-y-2 border-t border-[color:var(--line)] pt-5 text-xs text-[color:var(--muted)]">
              <li>· Brand Positioning & Architecture</li>
              <li>· Visual Identity & Guidelines</li>
              <li>· Packaging & Physical Touchpoints</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-8">
            <p className="mono text-xs font-semibold text-[color:var(--accent)]">02 / PRODUCT</p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight">UI/UX Product Design</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Crafting mobile and web application workflows designed around human
              behavior, cognitive trust, and business metrics. From foundational
              information architecture to multi-state micro-interactions.
            </p>
            <ul className="mt-6 space-y-2 border-t border-[color:var(--line)] pt-5 text-xs text-[color:var(--muted)]">
              <li>· User Journey & Wireframing</li>
              <li>· Design Systems & Token Architecture</li>
              <li>· High-Fidelity Interactive Prototypes</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-8">
            <p className="mono text-xs font-semibold text-[color:var(--accent)]">03 / WEB</p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight">High-Conversion Web Design</h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              Responsive digital flagships, marketing websites, and editorial web
              portals where typography, speed, and narrative storytelling work in
              unison to convert visitors into loyal advocates.
            </p>
            <ul className="mt-6 space-y-2 border-t border-[color:var(--line)] pt-5 text-xs text-[color:var(--muted)]">
              <li>· Editorial & Commercial Art Direction</li>
              <li>· Responsive Grid & Layout Systems</li>
              <li>· Engineering-Ready Component Handoff</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================================
          ELEVATED LOWER SECTION: HOW I WORK & TOOLS
      ===================================================== */}
      <section className="py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Operating Values */}
          <div>
            <p className="eyebrow">Operating Principles</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Principles I hold sacred in every engagement.
            </h2>

            <div className="mt-10 space-y-8">
              <div className="border-l-2 border-[color:var(--fg)] pl-6">
                <h3 className="text-lg font-bold">1. Flows before pixels, always</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  I never jump straight into high-fidelity decoration. We clarify the
                  mental model, user motivations, and operational constraints first.
                </p>
              </div>

              <div className="border-l-2 border-[color:var(--accent)] pl-6">
                <h3 className="text-lg font-bold">2. Design systems that engineers love</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  My Figma files aren't disorganized artboards. They are structured
                  with clear naming, auto-layout, documented edge-cases, and variable
                  tokens that match modern React/CSS architectures.
                </p>
              </div>

              <div className="border-l-2 border-[color:var(--fg)] pl-6">
                <h3 className="text-lg font-bold">3. Radical transparency & collaboration</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  No disappearing for months to deliver a surprise reveal. We work in
                  tight feedback loops with frequent asynchronous updates and honest
                  technical dialogue.
                </p>
              </div>
            </div>
          </div>

          {/* Toolkit & Details */}
          <div className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--card)] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="eyebrow">Toolkit & Environment</p>
              <h3 className="mt-4 text-2xl font-bold">Tools & Technologies</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                I operate fluently between design tools and modern frontend paradigms,
                ensuring designs survive transition into production code without loss
                of fidelity.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  'Figma Master Systems',
                  'Component Tokens',
                  'Interactive Prototyping',
                  'Information Architecture',
                  'User Testing & Heuristics',
                  'Next.js & React Awareness',
                  'Tailwind CSS & Styling',
                  'Typography & Grid Theory',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[color:var(--line)] bg-[color:var(--bg)] px-3.5 py-1.5 text-xs font-medium text-[color:var(--fg)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* High-contrast CTA block */}
            <div className="mt-12 border-t border-[color:var(--line)] pt-8">
              <p className="text-sm font-bold text-[color:var(--fg)]">
                Ready to elevate your brand or product?
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">
                Currently discussing projects for the upcoming quarter.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="cta-primary"
                >
                  <span>Start a conversation</span>
                  <span className="cta-arrow" aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/projects"
                  className="cta-secondary"
                >
                  <span>Browse archive</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
