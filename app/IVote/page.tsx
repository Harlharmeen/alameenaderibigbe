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
  title: "IVote",
  subtitle:
    "Designed a brand architecture to build product and position it for success.",
  category: "Brand Identity / Web",
  year: "2026",
  impact: "Foundational Branding for a SaaS Product",
  images: [
    
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650551/Artboard_1-100_zwp6jf.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650549/Artboard_2-100_kfllzl.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650550/Artboard_3-100_if44lw.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650550/Artboard_4-100_ywplvl.jpg",

"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650552/Artboard_5-100_dg3nn3.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650555/Artboard_6-100_jfvlvz.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650557/Artboard_8-100_bpyku5.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650559/Artboard_7-100_yqnbu4.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650590/Artboard_9-100_qgbjqw.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650602/Artboard_10-100_hfswmx.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650603/Artboard_11-100_mwifo7.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650604/Artboard_12-100_ucheqo.jpg",

"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650609/Artboard_13-100_u5ryqc.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650610/Artboard_14-100_yrkzkt.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650611/Artboard_15-100_yfq7fh.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650615/Artboard_16-100_ak2jdj.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650616/Artboard_17-100_wibv8q.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650617/Artboard_18-100_soatts.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650620/Artboard_19-100_v1me94.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650621/Artboard_20-100_gsjbmm.jpg",

"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650623/Artboard_21-100_kyd9z6.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650625/Artboard_22-100_dc9nwy.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650626/Artboard_23-100_vjzmwx.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650627/Artboard_24-100_ir6kei.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650629/Artboard_25-100_t3vieo.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650630/Artboard_26-100_zgfji7.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650630/Artboard_27-100_dhntnm.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650631/Artboard_28-100_yrucm6.jpg",

"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650633/Artboard_29-100_akokew.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650634/Artboard_30-100_ev8bvg.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650636/Artboard_31-100_fchbtk.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650637/Artboard_32-100_itn6hs.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650641/Artboard_33-100_ykhyt7.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650644/Artboard_34-100_tibxsk.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650647/Artboard_35-100_t9kdvp.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650649/Artboard_36-100_ynnk8d.jpg",

"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650651/Artboard_37-100_pth3be.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650652/Artboard_38-100_tskwrn.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650655/Artboard_39-100_junhey.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650656/Artboard_40-100_gjm3e7.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650657/Artboard_41-100_slidpb.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650660/Artboard_42-100_bxczfu.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650660/Artboard_43-100_uogpru.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650661/Artboard_44-100_brsssa.jpg",

"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650662/Artboard_45-100_w8n6bk.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650664/Artboard_46-100_onwaga.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650665/Artboard_47-100_acw03x.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650666/Artboard_48-100_yav41j.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650667/Artboard_49-100_zakhsr.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650668/Artboard_50-100_ob00ve.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650671/Artboard_51-100_osubag.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650671/Artboard_52-100_m2w05w.jpg",

"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650672/Artboard_53-100_pqpcic.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650673/Artboard_54-100_eqqqom.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650675/Artboard_55-100_xqeyuc.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650676/Artboard_56-100_zjrkjj.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650677/Artboard_57-100_i7z2ho.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650678/Artboard_58-100_ytexlx.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650680/Artboard_59-100_mnbec7.jpg",
"https://res.cloudinary.com/dfqh2niw3/image/upload/v1775650682/Artboard_60-100_mebqpf.jpg",
    
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