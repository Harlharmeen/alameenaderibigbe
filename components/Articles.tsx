"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User } from "lucide-react"
import Image from "next/image"

const transformations = [
  {
    title: "From Confusion to Strategic Clarity",
    excerpt:
      "How refining positioning and narrative architecture helped a mid-size company attract higher-value clients with less friction.",
    date: "Feb 10, 2026",
    author: "Aderibigbe Alameen",
    tags: ["Positioning", "Clarity", "Growth"],
    image: "/images/transformations/clarity.jpg",
    link: "/transformations/clarity",
  },
  {
    title: "Consistency That Commands Market Respect",
    excerpt:
      "When identity systems aligned across touchpoints, this brand transitioned from overlooked to authoritative.",
    date: "Jan 20, 2026",
    author: "Aderibigbe Alameen",
    tags: ["Authority", "Identity", "Systems"],
    image: "/images/transformations/consistency.jpg",
    link: "/transformations/consistency",
  },
  {
    title: "Transformation Through Strategic Direction",
    excerpt:
      "A system-first branding approach led to measurable growth, sharper differentiation, and long-term positioning power.",
    date: "Dec 15, 2025",
    author: "Aderibigbe Alameen",
    tags: ["Strategy", "Differentiation", "Impact"],
    image: "/images/transformations/strategy.jpg",
    link: "/transformations/strategy",
  },
]

export default function BrandingTransformations() {
  return (
    <section
      id="Insights"
      className="py-36 bg-neutral-950 text-white border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Strategic Insights
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-3xl md:text-5xl font-semibold max-w-4xl leading-tight"
        >
          Thinking behind the transformations.
        </motion.h2>

        <p className="mt-6 text-neutral-400 text-lg max-w-2xl leading-relaxed">
          Deep dives into positioning, brand architecture, and the structural decisions that create long-term authority.
        </p>

        <div className="mt-20 grid md:grid-cols-3 gap-12">
          {transformations.map((item: any, i: number) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-neutral-900/60 backdrop-blur border border-neutral-800 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Link href={item.link} className="flex flex-col h-full">

                {/* IMAGE */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7 flex flex-col flex-1">

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs text-emerald-400 border border-emerald-400/20 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold mb-3 leading-snug group-hover:text-white transition">
                    {item.title}
                  </h3>

                  {/* EXCERPT */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                    {item.excerpt}
                  </p>

                  {/* META (own space now) */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {item.author}
                    </span>
                  </div>

                  {/* DIVIDER */}
                  <div className="border-t border-neutral-800 my-4" />

                  {/* CTA (no longer buried) */}
                  <div className="flex justify-center pt-4">
                    <span className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-neutral-700 text-white text-sm font-medium group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                      Read Insight →
                    </span>
                  </div>

                </div>

              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/Insights"
            className="inline-block border border-neutral-700 hover:border-white transition px-8 py-4 rounded-full text-lg"
          >
            Explore All Insights
          </a>
        </div>

      </div>
    </section>
  )
}