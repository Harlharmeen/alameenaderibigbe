"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { X } from "lucide-react"

/* ===============================
   REPLACE THIS DATA PER PROJECT
================================= */

const project = {
  title: "ShopMaxxi",
  subtitle:
    "Repositioning an e-commerce brand for scale and conversion clarity.",
  category: "Brand Identity / Web",
  year: "2026",
  impact: "+48% Conversion Uplift",
  images: [
    "https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/shopmaxxi/01.jpg",
    "https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/shopmaxxi/02.jpg",
    "https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/shopmaxxi/03.jpg",
    "https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/shopmaxxi/04.jpg",
  ],
}

/* ===============================
   COMPONENT
================================= */

export default function CaseStudyPage() {
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPoint =
        document.body.scrollHeight * 0.35

      if (scrollPosition > triggerPoint) {
        setShowCTA(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-[#f8f8f6] text-neutral-900">

      {/* ===============================
         HERO INTRO
      ================================ */}

      <section className="pt-32 pb-20 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">

          <p className="text-sm uppercase tracking-wider text-neutral-500">
            {project.category} · {project.year}
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            {project.title}
          </h1>

          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            {project.subtitle}
          </p>

          <div className="mt-8 inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            {project.impact}
          </div>

        </div>
      </section>

      {/* ===============================
         STACKED VISUALS
      ================================ */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-24">

          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={img}
                alt={`${project.title} visual ${index + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}

        </div>
      </section>

      {/* ===============================
         OTHER PROJECTS
      ================================ */}

      <section className="py-32 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold">
            Explore Other Work
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-12">

            <Link href="/projects/amaan" className="group">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/Amaan Project-01.jpg"
                  alt="Amaan"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium">
                Amaan
              </h3>
            </Link>

            <Link href="/projects/hopebridge" className="group">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/HopeBridge Guideline ds-01.jpg"
                  alt="HopeBridge"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium">
                HopeBridge FC
              </h3>
            </Link>

          </div>

        </div>
      </section>

      {/* ===============================
         FLOATING CTA
      ================================ */}

      {showCTA && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 bg-white border border-neutral-200 shadow-lg rounded-2xl p-6 max-w-xs z-50"
        >
          <button
            onClick={() => setShowCTA(false)}
            className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-700"
          >
            <X size={16} />
          </button>

          <p className="text-sm text-neutral-600">
            Building something intentional?
          </p>

          <Link
            href="/start-project"
            className="inline-block mt-4 bg-neutral-900 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition"
          >
            Start a Strategic Conversation
          </Link>
        </motion.div>
      )}

    </main>
  )
}