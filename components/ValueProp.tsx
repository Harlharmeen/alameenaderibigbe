"use client"

import { motion } from "framer-motion"
import { Compass, Layers, Sparkles } from "lucide-react"

export default function Value() {
  return (
    <section className="py-20 bg-[#f6f6f4] text-neutral-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* LABEL */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            The Strategy
          </span>
        </div>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl"
        >
          I build identity systems that align
          <br />
          perception with <span className="text-emerald-600">ambition</span>.
        </motion.h2>

        {/* SUBTEXT */}
        <p className="mt-8 text-lg text-neutral-600 max-w-2xl leading-relaxed">
          Whether you're launching with intent or scaling with clarity,
          your brand should communicate direction, authority,
          and strategic focus — instantly.
        </p>

        {/* DIVIDER */}
        <div className="border-t border-neutral-200 my-16" />

        {/* PILLARS */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* 01 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                <Compass className="text-emerald-600" size={18} />
              </div>
              <span className="text-sm text-neutral-400 tracking-widest">
                01
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Positioning First
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              We define clarity before creativity — audience insight,
              competitive space, and perception goals —
              so every visual decision supports a strategic outcome.
            </p>
          </motion.div>

          {/* 02 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                <Layers className="text-emerald-600" size={18} />
              </div>
              <span className="text-sm text-neutral-400 tracking-widest">
                02
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Systems Over Symbols
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              A logo alone doesn’t scale a brand.
              I design cohesive identity systems — typography,
              color logic, and visual structure —
              built for consistency and growth.
            </p>
          </motion.div>

          {/* 03 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 flex items-center justify-center">
                <Sparkles className="text-emerald-600" size={18} />
              </div>
              <span className="text-sm text-neutral-400 tracking-widest">
                03
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Designed for Momentum
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              The objective isn’t visual appeal.
              It’s alignment — so your brand signals confidence,
              direction, and readiness for the next level.
            </p>
          </motion.div>

        </div>

        {/* CONVICTION BLOCK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl"
        >
          <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            Strong brands don’t happen by accident.
            <br />
            They are built with clarity — and engineered for growth.
          </p>
        </motion.div>

      </div>
    </section>
  )
}