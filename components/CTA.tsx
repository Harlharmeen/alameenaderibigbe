"use client"

import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <section className="bg-white text-neutral-900 py-36 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Serious about building a brand that commands respect?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto"
        >
          I work with founders and growing teams who understand that positioning,
          clarity, and system-level execution determine long-term authority.
        </motion.p>

        {/* Soft Qualification Line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-sm text-neutral-500"
        >
          Limited onboarding each month to maintain execution depth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="/start-project"
            className="inline-block bg-neutral-900 text-white hover:bg-neutral-800 transition font-semibold px-8 py-4 rounded-full text-lg"
          >
            Start a Strategic Conversation
          </a>

          <a
            href="/portfolio"
            className="inline-block border border-neutral-300 hover:border-neutral-900 hover:text-neutral-900 transition px-8 py-4 rounded-full text-lg text-neutral-700"
          >
            Review Case Studies
          </a>
        </motion.div>

        {/* Footer Line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-xs text-neutral-500"
        >
          © 2026 Aderibigbe Alameen. Brand Identity & Strategic Systems.
        </motion.p>

      </div>
    </section>
  )
}