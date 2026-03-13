"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="bg-white text-neutral-900 py-36 border-t border-neutral-200">

      {/* CTA AREA */}
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Serious about building a brand that commands respect?
        </motion.h2>

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

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-sm text-neutral-500"
        >
          Limited onboarding each month to maintain execution depth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="/start-project"
            className="inline-block bg-neutral-900 text-white hover:bg-neutral-800 transition font-semibold px-8 py-4 rounded-full text-lg"
          >
            Start a Strategic Conversation
          </Link>

          <Link
            href="/#Projects"
            className="inline-block border border-neutral-300 hover:border-neutral-900 hover:text-neutral-900 transition px-8 py-4 rounded-full text-lg text-neutral-700"
          >
            Explore Case Studies
          </Link>
        </motion.div>

      </div>


      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mt-24 pt-12 border-t border-neutral-200"
      >

        <div className="grid md:grid-cols-2 gap-12 text-sm text-neutral-600">

          {/* Brand */}
          <div className="max-w-sm">
            <p className="font-semibold text-neutral-900">
              Al-ameen Aderibigbe
            </p>

            <p className="mt-3 text-neutral-500">
              Brand Identity Designer helping founders build brands that
              communicate clarity, credibility, and authority.
            </p>
          </div>


          {/* Navigation + Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-neutral-900">
                Navigation
              </p>

              <Link href="/#Services" className="hover:text-neutral-900 transition">
                Services
              </Link>

              <Link href="/#Projects" className="hover:text-neutral-900 transition">
                Projects
              </Link>

              <Link href="/#Process" className="hover:text-neutral-900 transition">
                Process
              </Link>

              <Link href="/#Articles" className="hover:text-neutral-900 transition">
                Insights
              </Link>
            </div>


            {/* Start Project */}
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-neutral-900">
                Start a Project
              </p>

              <Link
                href="/start-project"
                className="hover:text-neutral-900 transition"
              >
                Brand Identity Project
              </Link>

              <Link
                href="/start-event"
                className="hover:text-neutral-900 transition"
              >
                Event Branding
              </Link>

              <Link
                href="/start-individual"
                className="hover:text-neutral-900 transition"
              >
                Personal Branding
              </Link>
            </div>

          </div>

        </div>


        {/* Bottom line */}
        <div className="mt-14 pt-6 border-t border-neutral-200 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between gap-4">
          <p>© 2026 Al-ameen Aderibigbe</p>
          <p>Brand Identity & Strategic Systems</p>
        </div>

      </motion.div>

    </section>
  )
}