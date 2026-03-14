"use client"

import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { CheckCircle2, Target, Shield } from "lucide-react"
import { useUniversalEmailJS } from "@/utils/emailjsUniversal"

export default function StartProject() {

  const { formRef, handleSubmit, loading, success } =
    useUniversalEmailJS("Project Branding")

  return (
    <section className="bg-neutral-950 text-white py-32">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6">

        {/* HERO */}

        <motion.h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Start a Brand Identity Project Built on Strategy.
        </motion.h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
          Effective brands do more than look good. They communicate clarity,
          credibility, and positioning the moment people encounter them.
        </p>

        <p className="mt-4 text-neutral-500 max-w-2xl">
          This process focuses on developing a thoughtful visual identity
          system that aligns with your business goals and audience perception.
        </p>

        <div className="border-t border-neutral-800 my-16" />

        {/* WHAT TO EXPECT */}

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What to Expect</h2>

          <ul className="space-y-4 text-neutral-300">

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Every submission is personally reviewed before engagement.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Qualified projects proceed to a short discovery conversation.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              A proposal outlining scope, direction, and investment is prepared.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Approved engagements move into the structured branding process.
            </li>

          </ul>
        </div>

        <div className="border-t border-neutral-800 my-16" />

        {/* QUALIFICATION */}

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-green-500" size={20} />
              <h3 className="text-xl font-semibold">This is for you if:</h3>
            </div>

            <ul className="space-y-3 text-neutral-400">
              <li>You are launching a new business or product.</li>
              <li>You want a professional brand identity system.</li>
              <li>You care about audience perception and positioning.</li>
              <li>You value thoughtful design over quick graphics.</li>
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
              <li>You only need a quick logo.</li>
              <li>You want extremely fast turnaround.</li>
              <li>You are not interested in strategic brand development.</li>
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
              Brand Identity engagements begin at{" "}
              <span className="text-white font-semibold">$525 USD</span>.
            </p>

            <p className="mt-4 text-neutral-400 text-sm">
              Final investment depends on project scope and deliverables.
              A detailed proposal is shared after confirming alignment.
            </p>

          </div>

        </div>

        <div className="border-t border-neutral-800 my-16" />

        {/* SUCCESS MESSAGE */}

        {success && (
          <div className="mb-10 p-6 rounded-2xl bg-green-900/30 border border-green-700 text-green-200">
            <p className="font-semibold">✔ Application received</p>
            <p className="text-sm mt-1">
              I will review your request and respond within 24–48 hours.
            </p>
          </div>
        )}

        {/* FORM */}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

          <input type="hidden" name="form_type" value="Project Branding" />

          <h2 className="text-2xl font-semibold">
            Project Application
          </h2>

          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <input
            type="text"
            name="budget_or_goal"
            placeholder="Estimated Branding Budget or Business Goal"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <textarea
            name="message"
            placeholder="Briefly describe your business or brand."
            rows={5}
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-8 bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                Sending...
              </>
            ) : (
              "Submit Application"
            )}
          </button>

        </form>

        <p className="mt-16 text-sm text-neutral-600 text-center">
          Strong brands are designed deliberately.
        </p>

      </div>
    </section>
  )
}