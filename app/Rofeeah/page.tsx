"use client"
import Navbar from "@/components/Navbar"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import CTA from "@/components/CTA" 
/* ===============================
   REPLACE THIS DATA PER PROJECT
================================= */

const project = {
  title: "Rofee'ah Modest Fashion",
  subtitle:
    "Elevated perception through clarity-driven identity construction.",
  category: "Brand Identity",
  year: "2025",
  impact: "Positioning refinement",
  images: [
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275496/Brand_guidelines_-_1_fh0owy.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275494/Brand_guidelines_-_2_g33g1g.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275503/Brand_guidelines_-_4_kmes60.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275511/Brand_guidelines_-_5_ppcpyj.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275516/Brand_guidelines_-_7_pdag57.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275529/Brand_guidelines_-_8_aln9pj.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275529/Brand_guidelines_-_9_umlkau.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275538/Brand_guidelines_-_10_stibee.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275546/Brand_guidelines_-_11_cg1uzi.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275554/Brand_guidelines_-_12_p0ttqm.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275561/Brand_guidelines_-_16_rbb18d.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275569/Brand_guidelines_-_17_opad5y.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275576/Brand_guidelines_-_18_nrmman.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275584/Brand_guidelines_-_20_td7bw7.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275594/Brand_guidelines_-_21_mtsrq8.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275601/Brand_guidelines_-_22_tx5ytu.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275619/Brand_guidelines_-_23_eytm9m.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772275629/Brand_guidelines_-_24_no54rj.png",
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
      const triggerPoint = document.body.scrollHeight * 0.35

      if (scrollPosition > triggerPoint) {
        setShowCTA(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-[#f8f8f6] text-neutral-900">

      {/* HERO */}

      <section className="pt-32 pb-20 border-b border-neutral-200">

              <Navbar />
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


      {/* STACKED VISUALS */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">

          {project.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={img}
                alt={`${project.title} visual ${index + 1}`}
                width={2000}
                height={1200}
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </motion.div>
          ))}

        </div>
      </section>


      {/* OTHER PROJECTS */}

      {/* <section className="py-32 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold">
            Explore Other Work
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-12">

            <Link href="/amaan" className="group">
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

            <Link href="/hopebridge" className="group">
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
      </section> */}
<CTA />

      {/* FLOATING CTA */}

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