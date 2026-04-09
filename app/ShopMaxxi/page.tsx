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
  title: "ShopMaxxi",
  subtitle:
    "Repositioning an e-commerce brand for scale and better conversion.",
  category: "Brand Identity / Rebranding",
  year: "2026",
  impact: "Scaling & Conversion Uplift",
  images: [
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500221/Artboard_1_txujzc.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500202/Artboard_2_zmu5lh.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500202/Artboard_3_qxwlpi.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500200/Artboard_4_vy8bs4.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500203/Artboard_5_kar7gz.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500205/Artboard_6_pvl8bf.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500202/Artboard_7_nhkmmi.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500205/Artboard_8_jdbfvk.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500206/Artboard_9_yup9sw.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500212/Artboard_10_fex2gu.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500227/Artboard_11_qbgeqm.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500207/Artboard_12_jyrnv7.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500217/Artboard_13_lrpc5r.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500220/Artboard_14_t2vvsz.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500222/Artboard_15_oyg5im.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500231/Artboard_16_mnt4qn.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500232/Artboard_17_bntozy.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500233/Artboard_18_rt4tnt.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500259/Artboard_19_h87yub.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500254/Artboard_20_vffsop.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500289/Artboard_21_xrtvbj.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500286/Artboard_22_rbzmmn.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500259/Artboard_23_cntwu7.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772500287/Artboard_24_ojhfi4.png",
    
    
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

      {/* ===============================
         STACKED VISUALS
      ================================ */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">

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

      
      <CTA />

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