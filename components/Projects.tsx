"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Project = {
  title: string
  href: string
  impact: string
  summary: string
  category: string
  images: string[]
}

type TabKey = "brand" | "event" | "individual"

const projectData: Record<TabKey, { projects: Project[]; viewAll: string }> = {
  brand: {
    viewAll: "/projects",
    projects: [
      {
        title: "IVote",
        href: "/IVote",
        impact: "Foundational Branding for a SaaS Product",
        summary:
          "Designed a brand architecture to build product and position it for success.",
        category: "Brand Identity Design",
        images: [
          "https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650668/Artboard_50-100_ob00ve.jpg",
          "https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650634/Artboard_30-100_ev8bvg.jpg",
          "https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650661/Artboard_44-100_brsssa.jpg",
        ],
      },
      {
        title: "AMAAN",
        href: "/Amaan",
        impact: "Setting their footprint in their industry",
        summary:
          "Designed a cohesive brand architecture to support long-term credibility and growth.",
        category: "Brand Identity Design",
        images: [
          "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200761/Artboard_1-100_oya5ql.jpg",
          "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200807/Artboard_59-100_ugs6bu.jpg",
          "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200807/Artboard_48-100_ohnlon.jpg",
        ],
      },
      {
        title: "ShopMaxxi",
        href: "/ShopMaxxi",
        impact: "Repositioning for better conversion",
        summary:
          "Repositioned the brand and rebuilt the identity system to align perception with their ambition.",
        category: "Brand Identity / Rebranding",
        images: [
          "/ShopMaxxi CaseStudy-01.jpg",
          "/ShopMaxxi CaseStudy-02.jpg",
          "/ShopMaxxi CaseStudy-03.jpg",
        ],
      },
    ],
  },

  event: {
    viewAll: "/projects/event",
    projects: [
      {
        title: "Event Project Placeholder",
        href: "#",
        impact: "Event identity experience",
        summary:
          "Placeholder case study representing a full event branding system including stage visuals and attendee materials.",
        category: "Event Branding",
        images: ["/placeholder.jpg"],
      },
      {
        title: "Event Project Placeholder 2",
        href: "#",
        impact: "Conference visual identity",
        summary:
          "Placeholder case study representing promotional graphics and conference branding systems.",
        category: "Event Branding",
        images: ["/placeholder.jpg"],
      },
    ],
  },

  individual: {
    viewAll: "/projects/individual",
    projects: [
      {
        title: "Personal Brand Placeholder",
        href: "#",
        impact: "Authority positioning",
        summary:
          "Placeholder case study representing personal brand positioning and identity design.",
        category: "Individual Branding",
        images: ["/placeholder.jpg"],
      },
      {
        title: "Creator Identity Placeholder",
        href: "#",
        impact: "Online presence clarity",
        summary:
          "Placeholder project showing social presence engineering and profile identity design.",
        category: "Individual Branding",
        images: ["/placeholder.jpg"],
      },
    ],
  },
}

export default function Works() {
  const [activeTab, setActiveTab] = useState<TabKey>("brand")

  const data = projectData[activeTab]

  return (
    <section id="Projects" className="py-32 bg-[#f8f8f6] text-neutral-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}

        <span className="text-xs uppercase tracking-widest text-neutral-400">
          Selected Work
        </span>

        {/* Headline */}

        <h2 className="mt-8 text-3xl md:text-5xl font-semibold max-w-4xl leading-tight">
          Strategic brand systems that shifted
          <br />
          <span className="text-neutral-900">
            perception, authority, and measurable growth.
          </span>
        </h2>

        {/* Supporting text */}

        <p className="mt-8 text-neutral-600 max-w-2xl text-lg">
          Each engagement reflects structured thinking — not decoration.
          Every decision was engineered to influence how the brand is understood,
          trusted, and valued.
        </p>

        {/* TABS */}

        <div className="mt-14 flex justify-center">

          <div className="inline-flex bg-white border border-neutral-200 rounded-full p-1.5">

            {(["brand", "event", "individual"] as TabKey[]).map((tab) => {

              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-7 py-3 text-sm font-medium rounded-full transition-colors"
                >

                  {isActive && (
                    <motion.div
                      layoutId="activeWorkTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-emerald-600 rounded-full shadow-lg shadow-emerald-600/30"
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      isActive ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    {tab === "brand" && "Brand Identity"}
                    {tab === "event" && "Event Branding"}
                    {tab === "individual" && "Individual Branding"}
                  </span>

                </button>
              )
            })}

          </div>

        </div>

        {/* PROJECTS */}

        <div className="mt-28 space-y-36">

          {data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

        </div>

        {/* VIEW ALL */}

        <div className="mt-32 flex justify-center">
          <Link
            href={data.viewAll}
            className="px-8 py-4 border border-neutral-900 rounded-full text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  )
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }, 3500)

    return () => clearInterval(interval)
  }, [project.images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group grid md:grid-cols-2 gap-20 items-center"
    >

      {/* IMAGE */}

      <div className="relative rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-sm">

        <div className="relative aspect-video w-full">

          {project.images.map((img, i) => (

            <Image
              key={i}
              src={img}
              alt={project.title}
              fill
              className={`object-contain transition-all duration-1000 ${
                i === activeIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            />

          ))}

        </div>

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

        {/* Progress */}

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-200">

          <motion.div
            key={activeIndex}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "linear" }}
            className="h-full bg-emerald-500"
          />

        </div>

      </div>

      {/* TEXT */}

      <div>

        <span className="text-xs uppercase tracking-widest text-emerald-600">
          {project.category}
        </span>

        <h3 className="mt-6 text-3xl md:text-4xl font-semibold leading-snug">
          {project.title}
        </h3>

        <div className="mt-4 inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium">
          {project.impact}
        </div>

        <p className="mt-8 text-neutral-600 text-lg leading-relaxed max-w-lg">
          {project.summary}
        </p>

        <Link
          href={project.href}
          className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 text-white rounded-full hover:opacity-90 transition text-sm"
        >
          View Project
          <ArrowUpRight size={16} />
        </Link>

      </div>

    </motion.div>
  )
}