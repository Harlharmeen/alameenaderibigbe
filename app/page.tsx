import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '../components/contact-form';
import SectionHeading from '../components/section-heading';
import SelectedWork from '../components/selected-work';
import TestimonialsSlider from '../components/testimonials-slider';

import { posts, projects, testimonials } from '../data/content';

const services = [
  {
    name: 'Branding',
    copy: 'Brand strategy, visual identity, identity systems and art direction.',
  },
  {
    name: 'UI/UX',
    copy: 'Product thinking, user flows, interface systems and interaction design.',
  },
  {
    name: 'Web Design',
    copy: 'Responsive digital experiences that connect brand, content and product.',
  },
];

const faqs = [
  {
    question: 'What do you design?',
    answer:
      'I work across brand identity and digital product experiences, with web design sitting between the two.',
  },
  {
    question: 'Do you work with existing brands?',
    answer:
      'Yes. A project can start from a blank page, a messy existing identity, or a product that needs a clearer experience.',
  },
  {
    question: 'Can you handle both brand and product?',
    answer:
      'Yes. That intersection is the core of how I position my practice.',
  },
];

export default function Home() {
  return (
    <main>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          container
          grid
          min-h-[calc(100vh-72px)]
          items-center
          gap-10
          py-20
          md:grid-cols-[1.2fr_.8fr]
          md:py-28
        "
      >
        {/* Hero Content */}

        <div className="reveal">

          <p className="eyebrow mb-6">
            Brand Identity & Product Designer
          </p>

          <h1
            className="
              display
              max-w-5xl
              text-[clamp(4rem,10vw,9rem)]
              font-extrabold
            "
          >
            Designing brands{' '}
            <span className="text-[color:var(--muted)]">
              and
            </span>{' '}
            digital products.
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-base
              leading-7
              text-[color:var(--muted)]
            "
          >
            I help businesses turn ideas into identities and digital
            experiences that feel clear, useful and distinctly theirs.
          </p>

          {/* Hero CTAs */}

<div className="mt-8 flex flex-wrap items-center gap-3">

  {/* Primary CTA */}

  <Link
    href="/projects"
    className="cta-primary"
  >
    <span>View selected work</span>
    <span className="cta-arrow" aria-hidden="true">
      →
    </span>
  </Link>


  {/* CV CTA */}

  <a
    href="/Al-Ameen_Aderibigbe_Product_Designer_CV.pdf"
    download
    className="cta-secondary"
  >
    <span>Download CV</span>
    <span className="cta-arrow" aria-hidden="true">
      ↓
    </span>
  </a>

</div>
        </div>

        {/* =================================================
            HERO IMAGE CONTAINER
        ================================================= */}

        <div
          className="
            mx-auto
            w-full
            max-w-sm
            md:justify-self-end
          "
        >
          <div
            className="
              float
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-[20px]
              bg-[color:var(--surface)]
              shadow-2xl
            "
          >
            <Image
              src="/al-ameen.jpg"
              alt="Al-ameen Aderibigbe"
              fill
              priority
              sizes="
                (max-width: 768px) 90vw,
                380px
              "
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/5
                to-transparent
              "
            />

            {/* Image Information */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-6
                text-white
              "
            >
              <p className="eyebrow !text-white/70">
                Available for selected work
              </p>

              <p
                className="
                  mt-2
                  text-2xl
                  font-bold
                  tracking-[-.05em]
                "
              >
                Al-ameen
                <br />
                Aderibigbe.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="border-y grid-line">

        <div
          className="
            container
            grid
            md:grid-cols-[.65fr_1.35fr]
          "
        >

          {/* Section Introduction */}

          <div
            className="
              border-b
              grid-line
              py-16
              md:border-b-0
              md:border-r
              md:pr-12
            "
          >
            <SectionHeading
              eyebrow="What I do"
              title="Three disciplines. One design practice."
            />
          </div>

          {/* Service Accordion */}

          <div className="py-8 md:pl-14">

            {services.map((service, index) => (
              <details
                key={service.name}
                className="
                  group
                  border-b
                  grid-line
                  py-6
                "
                open={index === 0}
              >

                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    text-xl
                    font-bold
                    tracking-[-.04em]
                  "
                >

                  <span>
                    <span
                      className="
                        mr-4
                        text-xs
                        font-normal
                        text-[color:var(--muted)]
                      "
                    >
                      0{index + 1}
                    </span>

                    {service.name}
                  </span>

                  <span
                    className="
                      text-[color:var(--muted)]
                      transition
                      group-open:rotate-45
                    "
                  >
                    +
                  </span>

                </summary>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    pl-10
                    text-sm
                    leading-6
                    text-[color:var(--muted)]
                  "
                >
                  {service.copy}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          SELECTED PROJECTS
      ===================================================== */}

      <section className="container py-24">

        <SectionHeading
          eyebrow="Selected work"
          title="A few things I’ve built, shaped and rethought."
          copy="
            A growing selection of identity and digital product work.
            Use the category tabs to filter across product, brand, and web design disciplines.
          "
        />

        <SelectedWork projects={projects} />

        <div className="mt-14 flex items-center justify-between border-t border-[color:var(--line)] pt-8">
          <p className="text-xs text-[color:var(--muted)]">
            Showing curated selections across {projects.length} featured case studies.
          </p>
          <Link
            href="/projects"
            className="
              eyebrow
              border-b
              pb-1
              transition-opacity
              hover:opacity-60
            "
          >
            View all projects archive →
          </Link>
        </div>
      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="border-y grid-line">

        <div
          className="
            container
            grid
            md:grid-cols-[.8fr_1.2fr]
          "
        >

          {/* About Copy */}

          <div className="py-20 md:pr-14">

            <SectionHeading
              eyebrow="About"
              title="I design with equal attention to meaning and making."
              copy="
                My practice sits between brand identity and digital
                product design. I care about the strategy behind a
                visual decision, the system that keeps it consistent,
                and the experience a person has when they actually use it.
              "
            />

            <Link
              href="/about"
              className="
                text-sm
                font-semibold
                underline
                underline-offset-4
              "
            >
              More about me →
            </Link>

          </div>


          {/* Design Principles */}

          <div
            className="
              border-t
              grid-line
              py-20
              md:border-l
              md:border-t-0
              md:pl-14
            "
          >

            <div className="grid gap-8 sm:grid-cols-3">

              {[
                [
                  '01',
                  'Brand systems',
                  'Clear foundations that can grow.',
                ],
                [
                  '02',
                  'Product thinking',
                  'Flows before pixels, always.',
                ],
                [
                  '03',
                  'Visual craft',
                  'Details that make the system feel considered.',
                ],
              ].map(([number, title, copy]) => (
                <div key={number}>

                  <p
                    className="
                      mono
                      text-xs
                      text-[color:var(--accent)]
                    "
                  >
                    {number}
                  </p>

                  <h3 className="mt-3 font-bold">
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-[color:var(--muted)]
                    "
                  >
                    {copy}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="border-y grid-line">
        <div className="container py-24">
          <SectionHeading
            eyebrow="Client perspective"
            title="Good work should make sense to the people you build it with."
            copy="Feedback from founders, engineering leads, and product collaborators who have partnered with me."
          />

          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="container py-24">

        <SectionHeading
          eyebrow="FAQs"
          title="A few things worth knowing."
        />

        <div className="mx-auto max-w-3xl">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="
                border-b
                grid-line
                py-6
              "
            >

              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  justify-between
                  gap-6
                  font-semibold
                "
              >
                <span>{faq.question}</span>

                <span>+</span>
              </summary>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-6
                  text-[color:var(--muted)]
                "
              >
                {faq.answer}
              </p>

            </details>
          ))}

        </div>
      </section>


      {/* =====================================================
          WRITING
      ===================================================== */}

      <section className="border-y grid-line">

        <div className="container py-24">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-12">
            <SectionHeading
              eyebrow="Writing & Thoughts"
              title="Design thoughts, experiments and lessons."
              copy="Observations on digital product craft, brand consistency, and building deliberate systems."
            />
            <Link
              href="/blog"
              className="eyebrow border-b pb-1 transition-opacity hover:opacity-60 whitespace-nowrap self-start md:self-auto"
            >
              All articles ({posts.length}) →
            </Link>
          </div>

          <div
            className="
              grid
              gap-8
              md:grid-cols-3
            "
          >

            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="
                  group
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-[color:var(--line)]
                  bg-[color:var(--card)]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-[color:var(--fg)]
                  hover:shadow-lg
                "
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[color:var(--surface)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="eyebrow">{post.date}</p>
                  <span className="mono text-xs text-[color:var(--muted)]">{post.read}</span>
                </div>

                <h3
                  className="
                    mt-3
                    text-xl
                    font-bold
                    tracking-[-.04em]
                    transition-colors
                    group-hover:text-[color:var(--accent)]
                  "
                >
                  {post.title}
                </h3>

                <p
                  className="
                    mt-2
                    line-clamp-3
                    text-sm
                    leading-6
                    text-[color:var(--muted)]
                  "
                >
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-[color:var(--line)]">
                  <span className="text-xs font-semibold text-[color:var(--fg)]">
                    Read article
                  </span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </div>

              </Link>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
  id="contact"
  className="container py-28"
>

  <div
    className="
      rounded-[20px]
      border
      border-[color:var(--line)]
      bg-[color:var(--card)]
      p-6
      md:p-10
      lg:p-14
    "
  >

    <div
      className="
        grid
        gap-12
        lg:grid-cols-[0.85fr_1.15fr]
        lg:gap-16
        lg:items-start
      "
    >

      {/* LEFT */}

      <div>

        <p className="eyebrow">
          Let’s work together
        </p>

        <h2
          className="
            display
            mt-6
            text-4xl
            font-extrabold
            leading-[0.98]
            tracking-[-0.05em]
            sm:text-5xl
            md:text-6xl
          "
        >
          Have a brand, product or idea worth shaping?
        </h2>

        <p
          className="
            mt-6
            max-w-lg
            text-sm
            leading-6
            text-[color:var(--muted)]
            md:text-base
            md:leading-7
          "
        >
          Tell me what you’re building, where you are
          in the process and what you need help making
          clearer.
        </p>

        <div
          className="
            mt-8
            border-t
            border-[color:var(--line)]
            pt-6
          "
        >

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.08em]
              text-[color:var(--muted)]
            "
          >
            Services
          </p>

          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >

            <span
              className="
                rounded-full
                border
                border-[color:var(--line)]
                px-3
                py-2
                text-xs
              "
            >
              Brand Identity
            </span>

            <span
              className="
                rounded-full
                border
                border-[color:var(--line)]
                px-3
                py-2
                text-xs
              "
            >
              UI/UX Design
            </span>

            <span
              className="
                rounded-full
                border
                border-[color:var(--line)]
                px-3
                py-2
                text-xs
              "
            >
              Web Design
            </span>

          </div>

        </div>

      </div>


      {/* RIGHT */}

      <div>

        <ContactForm />

      </div>

    </div>

  </div>

      </section>

    </main>
  );
}