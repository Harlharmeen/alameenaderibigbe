"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  category: string
  year: string
  impact: string
  summary: string
  image: string
  href: string
  featured?: boolean
}

const allProjects: Project[] = [
  {
    title: "ShopMaxxi",
    category: "Brand Identity / Rebranding",
    year: "2026",
    impact: "Repositioning for better conversion",
    summary:
      "Repositioned the brand and rebuilt the identity system to align perception with product ambition.",
    image: "/ShopMaxxi CaseStudy-01.jpg",
    href: "/ShopMaxxi",
    featured: true,
  },

  {
    title: "HopeBridge Football Club",
    category: "Brand Identity",
    year: "2025",
    impact: "Birth of identity",
    summary:
      "Designed a cohesive brand system to support long-term credibility and growth.",
    image: "/HopeBridge Guideline ds-01.jpg",
    href: "/Hopebridge",
  },

  {
    title: "Rofee'ah Modest Fashion",
    category: "Brand Identity",
    year: "2025",
    impact: "Positioning refinement",
    summary:
      "Elevated perception through clarity-driven identity construction.",
    image:
      "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275496/Brand_guidelines_-_1_fh0owy.png",
    href: "/Rofeeah",
  },

  {
    title: "PureTential Cleaning Agency",
    category: "Brand Identity",
    year: "2025",
    impact: "Identity Inception",
    summary:
      "",
    image:
      "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772770352/Artboard_1-100_yfrhfd.jpg",
    href: "/Puretential",
  },

  {
    title: "Osmart Tech Concept",
    category: "Brand Identity",
    year: "2025",
    impact: "Upscale brand perception",
    summary:
      "",
    image:
      "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772788933/1_kh1ijy.jpg",
    href: "/Osmart",
  },
]

const filters = ["All", "Brand Identity", "Brand + Web", "Strategy"]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [visibleCount, setVisibleCount] = useState(4)

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter)

  const featuredProject = filtered.find((p) => p.featured)
  const gridProjects = filtered.filter((p) => !p.featured)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setVisibleCount((prev) => prev + 2)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="pt-40 pb-24 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
            Selected Brand Systems
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            A curated archive of identity systems engineered for clarity,
            positioning, and measurable growth.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-20 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 flex gap-8 py-5 text-sm">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter)
                setVisibleCount(4)
              }}
              className={`relative pb-2 ${
                activeFilter === filter
                  ? "text-black"
                  : "text-neutral-500"
              }`}
            >
              {filter}
              {activeFilter === filter && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED PROJECT */}
      {featuredProject && (
        <section className="py-32 border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div>
              <p className="text-sm text-emerald-600 uppercase tracking-wider">
                Featured · {featuredProject.category}
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight">
                {featuredProject.title}
              </h2>

              <div className="mt-4 inline-block px-4 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                {featuredProject.impact}
              </div>

              <p className="mt-8 text-neutral-600 leading-relaxed text-lg">
                {featuredProject.summary}
              </p>

              <Link
                href={featuredProject.href}
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-black text-white rounded-full text-sm hover:opacity-90 transition"
              >
                View Case Study
                <ArrowUpRight size={16} />
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* EDITORIAL GRID */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {gridProjects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >

              {/* Image now keeps natural ratio */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="mt-6">
                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                  {project.category} · {project.year}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                  {project.impact}
                </p>

                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition"
                >
                  View Case Study
                  <ArrowUpRight size={14} />
                </Link>
              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold leading-tight">
            Building the next system?
          </h3>

          <p className="mt-6 text-neutral-600">
            Let’s create clarity that compounds into long-term authority.
          </p>

          <Link
            href="/start-project"
            className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-full"
          >
            Start a Strategic Conversation
          </Link>
        </div>
      </section>

    </main>
  )
}