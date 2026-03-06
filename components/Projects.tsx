"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "ShopMaxxi",
    href: "/ShopMaxxi",
    impact: "+48% conversion uplift",
    summary:
      "Repositioned the brand and rebuilt the identity system to align perception with product ambition.",
    category: "Brand Identity / Web",
    images: [
      "/ShopMaxxi CaseStudy-01.jpg",
      "/ShopMaxxi CaseStudy-02.jpg",
      "/ShopMaxxi CaseStudy-03.jpg",
    ],
  },
  {
    title: "HopeBridge FC",
    href: "/Hopebridge",
    impact: "Complete identity rebuild",
    summary:
      "Designed a cohesive brand architecture to support long-term credibility and growth.",
    category: "Brand Identity",
    images: [
      "/HopeBridge Guideline ds-01.jpg",
      "/HopeBridge Guideline ds-02.jpg",
      "/HopeBridge Guideline ds-27.jpg",
    ],
  },
]

export default function Works() {
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

        {/* Projects */}
        <div className="mt-28 space-y-36">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-32 flex justify-center">
          <Link
            href="/projects"
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

function ProjectCard({ project }: any) {
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

      {/* IMAGE SIDE */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-sm transition-all duration-500">

        <div className="relative aspect-video w-full">
          {project.images.map((img: string, i: number) => (
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />

        {/* Progress bar */}
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

      {/* TEXT SIDE */}
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

        {/* CTA */}
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