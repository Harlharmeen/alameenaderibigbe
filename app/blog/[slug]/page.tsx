import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Quote } from 'lucide-react';
import { posts } from '../../../data/content';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((x) => x.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found — Al-ameen Aderibigbe',
    };
  }

  return {
    title: `${post.title} — Al-ameen Aderibigbe`,
    description: post.seoDescription || post.excerpt,
    keywords: [
      ...post.tags,
      'Product Design',
      'Brand Identity',
      'Design Systems',
      'UX Strategy',
      'Al-ameen Aderibigbe',
    ],
    authors: [{ name: post.author || 'Al-ameen Aderibigbe' }],
    openGraph: {
      title: post.title,
      description: post.seoDescription || post.excerpt,
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postIndex = posts.findIndex((x) => x.slug === slug);
  const post = posts[postIndex];

  if (!post) return notFound();

  const otherArticles = posts.filter((p) => p.slug !== slug);

  return (
    <main className="container py-16 md:py-24">
      {/* Back Link */}
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
        >
          <span>←</span> Back to all articles
        </Link>
      </div>

      {/* Article Header */}
      <header className="mx-auto mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--muted)]"
            >
              {tag}
            </span>
          ))}
          <span className="text-[color:var(--muted)]">·</span>
          <span className="mono text-xs text-[color:var(--muted)]">
            {post.date}
          </span>
          <span className="text-[color:var(--muted)]">·</span>
          <span className="mono text-xs text-[color:var(--accent)] font-semibold">
            {post.read}
          </span>
        </div>

        <h1 className="display mt-6 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
          {post.title}
        </h1>

        <p className="mt-8 text-lg font-medium leading-relaxed text-[color:var(--muted)] md:text-xl">
          {post.excerpt}
        </p>

        {/* Author Bio Bar */}
        <div className="mt-8 flex items-center gap-3.5 border-y border-[color:var(--line)] py-4">
          <div className="relative size-10 overflow-hidden rounded-full border border-[color:var(--line)]">
            <Image
              src="/al-ameen.jpg"
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-[color:var(--fg)]">
              {post.author}
            </p>
            <p className="text-xs text-[color:var(--muted)]">
              Brand Identity & Product Designer
            </p>
          </div>
        </div>
      </header>

      {/* Featured Article Cover Image */}
      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-[color:var(--line)] shadow-xl">
        <div className="relative aspect-[16/9] w-full bg-[color:var(--card)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="mx-auto mt-16 max-w-3xl">
        {/* Lead Abstract */}
        <div className="border-b border-[color:var(--line)] pb-8">
          <p className="text-lg leading-relaxed font-normal text-[color:var(--fg)] md:text-xl">
            {post.content.lead}
          </p>
        </div>

        {/* Structured Sections */}
        <div className="mt-12 space-y-14">
          {post.content.sections.map((section, idx) => (
            <section key={section.heading} className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {section.heading}
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {section.quote && (
                <div className="my-8 rounded-2xl border-l-4 border-[color:var(--accent)] bg-[color:var(--card)] p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <Quote className="size-8 text-[color:var(--accent)] opacity-60 flex-shrink-0" />
                    <blockquote className="text-lg font-bold italic tracking-tight text-[color:var(--fg)] md:text-xl">
                      “{section.quote}”
                    </blockquote>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Actionable Key Takeaways Box */}
        {post.content.takeaways && post.content.takeaways.length > 0 && (
          <div className="mt-16 rounded-3xl border border-[color:var(--line)] bg-[color:var(--card)] p-8 md:p-10">
            <span className="mono text-xs font-semibold uppercase tracking-wider text-[color:var(--accent)]">
              Summary & Principles
            </span>
            <h3 className="mt-2 text-2xl font-bold">
              Key Takeaways for Designers & Builders
            </h3>

            <ul className="mt-6 space-y-3.5">
              {post.content.takeaways.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[color:var(--fg)] md:text-base"
                >
                  <span className="mt-1 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--fg)] text-[10px] font-bold text-[color:var(--bg)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Author Bio Footer */}
        <div className="mt-16 rounded-3xl border border-[color:var(--line)] p-8 md:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative size-16 flex-shrink-0 overflow-hidden rounded-full border border-[color:var(--line)]">
              <Image
                src="/al-ameen.jpg"
                alt="Al-ameen Aderibigbe"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[color:var(--muted)] font-semibold">
                About the Author
              </p>
              <h4 className="mt-1 text-xl font-bold">Al-ameen Aderibigbe</h4>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                Brand Identity & Product Designer partnering with founders and teams
                globally to craft memorable identities and high-performing digital
                products.
              </p>
              <div className="mt-4 flex gap-4 text-xs font-semibold">
                <Link href="/#contact" className="underline underline-offset-4">
                  Get in touch →
                </Link>
                <Link href="/projects" className="underline underline-offset-4">
                  View portfolio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* More Articles Section */}
      {otherArticles.length > 0 && (
        <section className="mx-auto mt-24 max-w-4xl border-t border-[color:var(--line)] pt-16">
          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight">More Articles</h3>
            <Link
              href="/blog"
              className="text-xs font-semibold text-[color:var(--muted)] hover:text-[color:var(--fg)]"
            >
              All essays →
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {otherArticles.slice(0, 2).map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="group flex flex-col rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5 transition hover:-translate-y-1 hover:border-[color:var(--fg)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[color:var(--surface)]">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-[color:var(--muted)]">
                  <span>{other.date}</span>
                  <span>·</span>
                  <span className="mono">{other.read}</span>
                </div>
                <h4 className="mt-2 text-lg font-bold tracking-tight group-hover:text-[color:var(--accent)]">
                  {other.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[color:var(--muted)]">
                  {other.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
