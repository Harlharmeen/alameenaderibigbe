"use client"

import { motion } from "framer-motion"
import { AlertCircle, EyeOff, Target } from "lucide-react"

export default function Problem() {
  return (
    <section className="py-16 bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION LABEL */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            The Clarity Gap
          </span>
        </div>

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl"
        >
          You’re building something real.
          <br />
          <span className="text-red-500">
            But your brand doesn’t communicate it yet.
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl leading-relaxed">
          Whether you're launching, pivoting, or scaling —
          when your identity lacks clarity, momentum slows.
          Perception shapes opportunity long before conversation begins.
        </p>

        {/* DIVIDER */}
        <div className="border-t border-neutral-800 my-14" />

        {/* PROBLEM CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group border border-neutral-800 rounded-2xl p-8 hover:border-red-500/40 transition duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <AlertCircle className="text-red-500" size={18} />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Your value isn’t instantly clear
            </h3>

            <p className="text-neutral-400 leading-relaxed">
              If people need explanations to understand you,
              your positioning isn’t doing its job.
              Confusion delays trust and slows decisions.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="group border border-neutral-800 rounded-2xl p-8 hover:border-red-500/40 transition duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <EyeOff className="text-red-500" size={18} />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Your presence lacks authority
            </h3>

            <p className="text-neutral-400 leading-relaxed">
              Inconsistent visuals and scattered messaging
              reduce perceived credibility.
              Opportunity often moves toward confidence.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group border border-neutral-800 rounded-2xl p-8 hover:border-red-500/40 transition duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
              <Target className="text-red-500" size={18} />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              You’re attracting interest — not alignment
            </h3>

            <p className="text-neutral-400 leading-relaxed">
              Without strategic brand direction,
              visibility increases noise instead of fit.
              Growth becomes unpredictable.
            </p>
          </motion.div>

        </div>

        {/* PIVOT STATEMENT */}
        <div className="mt-16 max-w-3xl">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            Brand identity isn’t decoration.
            <br />
            It’s strategic clarity — engineered for growth.
          </p>
        </div>

      </div>
    </section>
  )
}