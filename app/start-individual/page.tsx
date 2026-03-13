"use client"

import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { CheckCircle2, User, TrendingUp } from "lucide-react"
import { useUniversalEmailJS } from "@/utils/emailjsUniversal"

export default function StartIndividualBranding() {
  const { formRef, handleSubmit } = useUniversalEmailJS("Personal Branding")

  return (
    <section className="bg-neutral-950 text-white py-32">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6">

        {/* HERO */}

        <motion.h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Build a Personal Brand That Communicates Credibility.
        </motion.h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
          In the digital age, your personal presence speaks before you do.
          The way you present yourself visually influences trust, authority,
          and opportunity.
        </p>

        <p className="mt-4 text-neutral-500 max-w-2xl">
          This engagement focuses on shaping a cohesive personal brand identity
          that reflects who you are, what you stand for, and how you want to be
          perceived.
        </p>

        <div className="border-t border-neutral-800 my-16" />

        {/* WHAT TO EXPECT */}

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What to Expect</h2>

          <ul className="space-y-4 text-neutral-300">

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Each submission is personally reviewed before engagement.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Qualified applicants proceed to a short discovery conversation.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              A proposal outlining the identity direction and deliverables is shared.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Approved engagements move into the structured personal branding process.
            </li>

          </ul>
        </div>

        <div className="border-t border-neutral-800 my-16" />

        {/* QUALIFICATION */}

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <User className="text-green-500" size={20} />
              <h3 className="text-xl font-semibold">This is for you if:</h3>
            </div>

            <ul className="space-y-3 text-neutral-400">
              <li>You want to build a strong professional presence.</li>
              <li>You want your personal brand to look intentional.</li>
              <li>You are a founder, creator, or professional building visibility.</li>
              <li>You want consistency across platforms and materials.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-neutral-600" size={20} />
              <h3 className="text-xl font-semibold text-neutral-400">
                This may not be for you if:
              </h3>
            </div>

            <ul className="space-y-3 text-neutral-500">
              <li>You only want a quick social media graphic.</li>
              <li>You are not interested in strategic brand positioning.</li>
              <li>You prefer extremely fast turnaround design.</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-800 my-16" />

        {/* INVESTMENT */}

        <div>

          <h2 className="text-2xl font-semibold mb-6">
            Investment Overview
          </h2>

          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800">

            <p className="text-neutral-300 leading-relaxed">
              Personal Branding engagements begin at{" "}
              <span className="text-white font-semibold">$150 USD</span>.
            </p>

            <p className="mt-4 text-neutral-400 text-sm">
              Final investment depends on scope, deliverables, and identity depth.
              A detailed proposal will be shared after confirming alignment.
            </p>

          </div>

        </div>

        <div className="border-t border-neutral-800 my-16" />

        {/* FORM */}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

          <input
            type="hidden"
            name="form_type"
            value="Personal Branding"
          />

          <h2 className="text-2xl font-semibold">
            Personal Branding Application
          </h2>

          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            autoComplete="name"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            autoComplete="email"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <input
            type="text"
            name="budget_or_goal"
            placeholder="Primary Platform or Personal Branding Goal"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <textarea
            name="message"
            placeholder="Briefly describe yourself and what you want your personal brand to communicate."
            rows={5}
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <button
            type="submit"
            className="mt-8 bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-xl font-semibold text-white"
          >
            Submit Application
          </button>

        </form>

        <p className="mt-16 text-sm text-neutral-600 text-center">
          A respected personal brand is built intentionally.
        </p>

      </div>
    </section>
  )
}