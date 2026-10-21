import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../../components/section-heading';
import { posts } from '../../data/content';

export const metadata = {
  title: 'Blog & Essays — Al-ameen Aderibigbe',
  description:
    'Essays, case study breakdowns, and tactical guides on product strategy, UX trust systems, and brand architecture.',
};

export default function Blog() {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Writing & Thought Leadership"
        title="Notes from the intersection of brand and product."
        copy="Tactical essays and design reflections exploring why clarity, psychological trust, and system discipline matter when building digital experiences."
      />

      <div className="mt-16 space-y-16">
        {/* ===================================================
            FEATURED HERO ARTICLE
        =================================================== */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group grid gap-8 overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--fg)] hover:shadow-xl lg:grid-cols-[1.1fr_.9fr] lg:p-8"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[color:var(--surface)]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute top-4 left-4">
                <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  Featured Essay
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-3 text-xs text-[color:var(--muted)]">
                  <span className="eyebrow">{featuredPost.date}</span>
                  <span>·</span>
                  <span className="mono">{featuredPost.read}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--line)] px-2.5 py-0.5 text-[11px] text-[color:var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)] md:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[color:var(--line)] pt-5">
                <div className="flex items-center gap-3">
                  <div className="relative size-8 overflow-hidden rounded-full">
                    <Image
                      src="/al-ameen.jpg"
                      alt={featuredPost.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[color:var(--fg)]">
                    {featuredPost.author}
                  </span>
                </div>

                <span className="inline-flex items-center gap-2 text-xs font-bold text-[color:var(--fg)]">
                  Read complete article
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* ===================================================
            GRID OF REMAINING ARTICLES
        =================================================== */}
        <div className="grid gap-10 md:grid-cols-2">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--fg)] hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[color:var(--surface)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="eyebrow">{post.date}</span>
                  <span className="text-[color:var(--muted)]">·</span>
                  <span className="mono text-xs text-[color:var(--muted)]">{post.read}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[color:var(--bg)] px-2.5 py-0.5 text-[10px] font-semibold text-[color:var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)]">
                {post.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-6 flex items-center justify-between border-t border-[color:var(--line)]">
                <span className="text-xs font-semibold text-[color:var(--fg)]">
                  Read article
                </span>
                <span className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
