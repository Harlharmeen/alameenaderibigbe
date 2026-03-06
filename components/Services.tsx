"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"

export default function Services() {
  return (
    <section
      id="Services"
      className="py-24 bg-neutral-950 text-white border-t border-neutral-800"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* LABEL */}
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Work With Me
        </span>

        {/* HEADLINE */}
        <h2 className="mt-8 text-3xl md:text-5xl font-semibold leading-tight max-w-4xl">
          A complete brand identity system
          <br />
          built for clarity, authority, and growth.
        </h2>

        {/* SUBTEXT */}
        <p className="mt-8 text-neutral-400 max-w-2xl leading-relaxed text-lg">
          This is not a logo package.
          It’s a structured brand foundation designed to position you
          correctly from day one — or realign you for your next level.
        </p>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-12 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-emerald-600/40 transition-all duration-300"
        >
          {/* Accent Line */}
          <div className="w-14 h-[2px] bg-emerald-600 mb-10"></div>

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-4">
            Brand Identity System
          </h3>

          {/* Price */}
          <div className="mb-8">
            <span className="text-3xl font-medium text-white">
              $500
            </span>
            <p className="text-sm text-neutral-500 mt-2">
              Foundational engagement · Custom scope available
            </p>
          </div>

          {/* Description */}
          <p className="text-neutral-400 mb-10 leading-relaxed max-w-2xl">
            Designed for founders and growing brands who understand
            that perception shapes opportunity.
            Every element is built intentionally —
            from strategic positioning to scalable visual systems.
          </p>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 text-sm text-neutral-300">
            {[
              "Brand positioning clarity session",
              "Strategic direction & visual exploration",
              "Primary logo system & variations",
              "Typography & color architecture",
              "Core brand applications",
              "Structured brand guidelines document",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check
                  size={16}
                  className="text-emerald-600 mt-[2px]"
                />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            <div>
              <p className="text-sm text-neutral-400">
                Currently onboarding a limited number of projects.
              </p>
            </div>
            <button className="px-7 py-3.5 bg-emerald-600 text-white rounded-full hover:opacity-90 transition flex items-center justify-center gap-2 text-sm whitespace-nowrap">
                <a href="/start-project" className="hover:text-neutral-900 transition">Commence Project</a> <ArrowUpRight size={16} />
              </button>
            {/* <button className="px-7 py-3.5 bg-emerald-600 text-black font-medium rounded-full hover:opacity-90 transition flex items-center gap-2 text-sm">
              Commence Project
              <ArrowUpRight size={16} />
            </button> */}

          </div>
        </motion.div>

        {/* POSITIONING LINE */}
        <div className="mt-16 text-neutral-400 max-w-2xl">
          <p className="text-lg leading-relaxed">
            Strong brands reduce friction, attract alignment,
            and increase perceived value.
            This engagement is where that begins.
          </p>
        </div>

      </div>
    </section>
  )
}