"use client"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { CheckCircle2, Shield, Target } from "lucide-react"

export default function StartProject() {
  return (
    
    <section className="bg-neutral-950 text-white py-32">
        <Navbar />
      <div className="max-w-4xl mx-auto px-6">

        {/* HERO */}
        <motion.h1
          
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Start a Strategic Conversation.
        </motion.h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
          This is not a generic inquiry form.  
          It’s the first step toward building a brand identity system
          engineered for clarity, authority, and long-term positioning.
        </p>

        {/* DIVIDER */}
        <div className="border-t border-neutral-800 my-16" />

        {/* EXPECTATION BLOCK */}
        <div className="space-y-6">

          <h2 className="text-2xl font-semibold">
            What to Expect
          </h2>

          <ul className="space-y-4 text-neutral-300">
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              I personally review every submission.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              If aligned, you’ll receive next steps within 24 hours.
            </li>
            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Projects are accepted based on strategic fit, not urgency.
            </li>
          </ul>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-800 my-16" />

        {/* QUALIFICATION */}
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-green-500" size={20} />
              <h3 className="text-xl font-semibold">
                This is for you if:
              </h3>
            </div>

            <ul className="space-y-3 text-neutral-400">
              <li>You value strategy before aesthetics.</li>
              <li>You want clarity in positioning.</li>
              <li>You understand branding is an investment.</li>
              <li>You’re building for long-term equity.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-neutral-600" size={20} />
              <h3 className="text-xl font-semibold text-neutral-400">
                This may not be for you if:
              </h3>
            </div>

            <ul className="space-y-3 text-neutral-500">
              <li>You’re looking for the cheapest option.</li>
              <li>You need a logo in 48 hours.</li>
              <li>You don’t believe branding impacts perception.</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-800 my-16" />

        {/* ENGAGEMENT OVERVIEW */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Investment Overview
          </h2>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800">
            <p className="text-neutral-300 leading-relaxed">
              Brand Identity System engagements currently start at
              <span className="text-white font-semibold"> $500 USD</span>.
              Final scope is defined after understanding your business goals,
              complexity, and growth stage.
            </p>

            <p className="mt-4 text-neutral-400 text-sm">
              A detailed proposal is shared only after strategic alignment is confirmed.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-neutral-800 my-16" />

        {/* APPLICATION FORM */}
        <form className="space-y-8">

          <h2 className="text-2xl font-semibold">
            Project Application
          </h2>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
            />

            <textarea
              placeholder="Briefly describe your business and what you are trying to achieve."
              rows={5}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
            />

            <select
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition text-neutral-400"
            >
              <option>Estimated Budget Range</option>
              <option>$500 – $1,000</option>
              <option>$1,000 – $2,500</option>
              <option>$2,500+</option>
            </select>

          </div>

          <button
            type="submit"
            className="mt-8 bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl font-semibold text-white"
          >
            Submit Application
          </button>

        </form>

        {/* FINAL NOTE */}
        <p className="mt-16 text-sm text-neutral-600 text-center">
          Thoughtful brands take thoughtful steps.
        </p>

      </div>
    </section>
  )
}