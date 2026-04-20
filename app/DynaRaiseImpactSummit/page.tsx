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
  title: "DynaRaise Impact Summit 2026",
  subtitle:
    "This project was developed as a strategic exploration of how digital-first brands can extend into meaningful physical experiences through intentional design.",
  category: "Brand Identity / Web",
  year: "2026",
  impact: "Presenting Brand Growth Expansion Window",
  images: [
    
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581730/Artboard_1_yhpptj.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581730/Artboard_2_ro35ck.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581731/Artboard_3_kafg8e.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581732/Artboard_4_vf3eby.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581734/Artboard_5_zx5szu.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581736/Artboard_6_eko0q5.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581737/Artboard_7_g6drhc.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581738/Artboard_8_b5oser.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581739/Artboard_9_z3lg6h.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581741/Artboard_10_cmtmiq.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581742/Artboard_11_t4pkjd.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581743/Artboard_12_eimg1o.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581744/Artboard_13_pj6an8.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581745/Artboard_14_uqs6s7.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581747/Artboard_15_qf6pca.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581750/Artboard_16_gyur9r.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581751/Artboard_17_fj8qen.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581752/Artboard_18_fh6swb.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581752/Artboard_19_qkbiok.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581755/Artboard_20_bvodfp.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581759/Artboard_21_ozbwkh.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581761/Artboard_22_to2zp5.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581762/Artboard_23_vynntv.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581760/Artboard_24_c6a3tm.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581761/Artboard_25_fj0grt.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581764/Artboard_26_ksbtyr.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581766/Artboard_27_y9wa3e.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581766/Artboard_28_ulrwvn.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581767/Artboard_29_rb5ans.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581769/Artboard_30_mt5v8x.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581770/Artboard_31_gesefp.jpg", 
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581772/Artboard_32_bsz3xf.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581773/Artboard_33_xq5zdh.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581775/Artboard_34_zeyidx.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581776/Artboard_35_xgywk6.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581778/Artboard_36_t8jwwi.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581780/Artboard_37_zxutqb.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581781/Artboard_38_c2bym0.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581782/Artboard_39_llbvub.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581784/Artboard_40_rhhxtj.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581785/Artboard_41_qb2jem.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581787/Artboard_42_yldsay.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/q_auto/f_auto/v1776581788/Artboard_43_osfl4q.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581789/Artboard_44_yzhdzd.jpg",
    "https://res.cloudinary.com/dfqh2niw3/image/upload/v1776581791/Artboard_45_lpm6it.jpg",
    
    
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