"use client"
import Navbar from "@/components/Navbar"
import CTA from "@/components/CTA"
import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/* ================= DATA ================= */

const allInsights = [
  {
    title: "Why Good Businesses Still Look Cheap",
    excerpt:
      "A breakdown of perception gaps that cause strong businesses to appear low-value.",
    date: "March 2026",
    category: "Perception",
    image: "/images/transformations/clarity.jpg",
    link: "/insights/good-businesses-look-cheap",
  },
  {
    title: "What Branding Actually Is (And What It Is Not)",
    excerpt:
      "Clearing the confusion between branding, logo design, and identity systems.",
    date: "March 2026",
    category: "Strategy",
    image: "/images/transformations/consistency.jpg",
    link: "/insights/what-branding-is",
  },
  {
    title: "Case Study: Repositioning for Clarity",
    excerpt:
      "How strategic direction reshaped perception and improved client alignment.",
    date: "Feb 2026",
    category: "Case Study",
    image: "/images/transformations/strategy.jpg",
    link: "/insights/repositioning-case",
  },
]

const filters = ["All", "Perception", "Strategy", "Case Study"]

/* ================= PAGE ================= */

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredInsights =
    activeFilter === "All"
      ? allInsights
      : allInsights.filter((item) => item.category === activeFilter)

  return (
    
    <section className="bg-[#f8f8f6] min-h-screen text-neutral-900 py-32">
        <Navbar />
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-neutral-400">
            Insights Library
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            Strategic thinking,
            <br />
            applied to real brand problems.
          </h1>

          <p className="mt-6 text-neutral-600 text-lg leading-relaxed">
            A growing collection of perspectives on positioning, brand identity,
            and the decisions that shape how businesses are perceived.
          </p>
        </div>

        {/* FILTERS */}
        <div className="mt-16 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                activeFilter === filter
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "border-neutral-300 text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {filteredInsights.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col"
            >

              {/* IMAGE */}
              <Link href={item.link}>
                <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
              </Link>

              {/* CATEGORY */}
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                {item.category}
              </span>

              {/* TITLE */}
              <Link href={item.link}>
                <h3 className="mt-3 text-xl font-semibold leading-snug group-hover:underline">
                  {item.title}
                </h3>
              </Link>

              {/* EXCERPT */}
              <p className="mt-4 text-neutral-600 text-sm leading-relaxed flex-1">
                {item.excerpt}
              </p>

              {/* META */}
              <div className="mt-6 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {item.date}
                </span>

                <Link
                  href={item.link}
                  className="font-medium hover:underline"
                >
                  Read →
                </Link>
              </div>

            </motion.article>
          ))}

        </div>

        {/* LOAD MORE (PLACEHOLDER) */}
        <div className="mt-20 text-center">
          <button className="px-8 py-3 border border-neutral-300 rounded-full text-sm hover:border-neutral-900 transition">
            Load More
          </button>
        </div>

      </div>
      <CTA />
    </section>
  )
}