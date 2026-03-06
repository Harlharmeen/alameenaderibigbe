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
    
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769914/Artboard_1_mbkuxi.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769915/Artboard_2_lm2rtv.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769913/Artboard_3_i4jqr9.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769914/Artboard_4_kpr80h.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769915/Artboard_5_yhha0q.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769915/Artboard_6_fbqaqe.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769916/Artboard_7_gmalq3.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769916/Artboard_8_r25nfa.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769931/Artboard_9_smdxwt.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769917/Artboard_10_qdknwp.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769924/Artboard_11_ggwn2c.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769918/Artboard_12_nclhif.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769925/Artboard_13_agb8rj.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769931/Artboard_14_ais5tr.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769922/Artboard_15_wpm83g.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769931/Artboard_16_cddqdp.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769925/Artboard_17_jdbk7t.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769928/Artboard_18_dwmra9.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769926/Artboard_19_gutd14.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769928/Artboard_20_msvigd.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769928/Artboard_21_iidbfu.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769931/Artboard_22_i02z7r.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769930/Artboard_23_pgowh3.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769930/Artboard_24_pzfkwn.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769933/Artboard_25_ojabjv.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769961/Artboard_26_shrdxl.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769945/Artboard_27_rdtbat.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769950/Artboard_28_iryyyk.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769941/Artboard_29_qkb56g.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769941/Artboard_30_c4ppns.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769960/Artboard_31_h4oiyq.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769945/Artboard_32_cesmqf.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769946/Artboard_33_e7yg60.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769948/Artboard_34_ezeull.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769973/Artboard_35_eep9po.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769954/Artboard_36_luy4oj.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769966/Artboard_37_q5bg7n.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769976/Artboard_38_qbu8w8.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769968/Artboard_39_ndzfxv.png",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1772769975/Artboard_40_zd7w2n.png",
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