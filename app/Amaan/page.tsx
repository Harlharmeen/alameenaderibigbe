"use client"

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
    "Repositioning an e-commerce brand for scale and conversion clarity.",
  category: "Brand Identity / Web",
  year: "2026",
  impact: "",
  images: [
    
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200761/Artboard_1-100_oya5ql.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200765/Artboard_2-100_eg8jir.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200761/Artboard_3-100_qyn3un.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200761/Artboard_4-100_kufcyy.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200763/Artboard_5-100_wkjpiu.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200763/Artboard_6-100_exrqjs.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200761/Artboard_7-100_kvgqjc.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200760/Artboard_8-100_wl1s2q.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200761/Artboard_9-100_ayazxw.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200762/Artboard_10-100_pdaaow.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200762/Artboard_11-100_px3ynj.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200764/Artboard_12-100_p0jtlt.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200764/Artboard_13-100_qpth3v.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200764/Artboard_14-100_rgkjr2.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200764/Artboard_15-100_zwaj3z.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200766/Artboard_16-100_sflqer.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200765/Artboard_17-100_iae3p8.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200765/Artboard_18-100_ot9433.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200766/Artboard_19-100_kneiee.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200767/Artboard_20-100_glg7oy.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200766/Artboard_21-100_qtpwxi.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200768/Artboard_22-100_uansse.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200773/Artboard_23-100_bw16nc.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200773/Artboard_24-100_cxnuqv.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200773/Artboard_25-100_ti5giy.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200774/Artboard_26-100_qi734c.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200775/Artboard_27-100_elhaoo.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200774/Artboard_28-100_wdh4kt.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200777/Artboard_29-100_fsvdnw.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200778/Artboard_30-100_z7fesh.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200778/Artboard_31-100_pddsss.jpg", 
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200778/Artboard_34-100_imhpeu.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200779/Artboard_35-100_lascgn.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200779/Artboard_36-100_sgazcm.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200779/Artboard_37-100_m9jmel.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200780/Artboard_38-100_px4wo9.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200783/Artboard_39-100_ql7w7u.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200786/Artboard_40-100_dggq4x.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200786/Artboard_41-100_xw69oh.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200787/Artboard_42-100_tatjgp.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200787/Artboard_43-100_gh2kea.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200787/Artboard_44-100_xscegs.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200787/Artboard_45-100_vanhxj.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200787/Artboard_46-100_vd9yiz.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200789/Artboard_47-100_xnzqog.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200791/Artboard_48-100_ohnlon.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200791/Artboard_49-100_xyll5x.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200790/Artboard_50-100_wfo9k2.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200791/Artboard_51-100_fl965b.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200790/Artboard_53-100_qfzx2c.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200793/Artboard_54-100_tkqfb4.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200804/Artboard_55-100_j7m3we.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200803/Artboard_56-100_zip9tl.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200809/Artboard_57-100_nceksx.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200808/Artboard_58-100_qas9vp.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200807/Artboard_59-100_ugs6bu.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200805/Artboard_60-100_nue9xk.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200808/Artboard_61-100_imtttc.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200809/Artboard_62-100_kzplbh.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1773200822/Artboard_71-100_oydnhl.jpg",
    
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

      <CTA />

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