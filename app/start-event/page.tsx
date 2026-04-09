"use client"

import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { CheckCircle2, Users, Calendar } from "lucide-react"
import { useUniversalEmailJS } from "@/utils/emailjsUniversal"
import CTA from "@/components/CTA"
export default function StartEventBranding() {

  const { formRef, handleSubmit, loading, success } =
    useUniversalEmailJS("Event Branding")

  return (
    <section className="bg-neutral-950 text-white py-32">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6">

        {/* HERO */}

        <motion.h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Design an Event That Feels Intentional.
        </motion.h1>

        <p className="mt-6 text-lg text-neutral-400 max-w-2xl">
          Events communicate before a single word is spoken. Visuals,
          atmosphere, and materials shape attendees’ perceptions.
        </p>

        <p className="mt-4 text-neutral-500 max-w-2xl">
          This engagement focuses on aligning your event’s visual identity
          and experience for professional perception.
        </p>

        <div className="border-t border-neutral-800 my-16" />

        {/* EXPECTATION */}

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">What to Expect</h2>

          <ul className="space-y-4 text-neutral-300">

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              I personally review every event submission.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              If aligned, a visual direction discussion follows.
            </li>

            <li className="flex gap-3">
              <CheckCircle2 size={18} className="text-green-500 mt-[2px]" />
              Engagements focus on clarity, cohesion, and audience impact.
            </li>

          </ul>
        </div>

        <div className="border-t border-neutral-800 my-16" />

        {/* QUALIFICATION */}

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-green-500" size={20} />
              <h3 className="text-xl font-semibold">This is for you if:</h3>
            </div>

            <ul className="space-y-3 text-neutral-400">
              <li>You are organizing a conference or summit.</li>
              <li>You want your event to look professionally coordinated.</li>
              <li>You need consistent visuals across platforms.</li>
              <li>You value a memorable attendee experience.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-neutral-600" size={20} />
              <h3 className="text-xl font-semibold text-neutral-400">
                This may not be for you if:
              </h3>
            </div>

            <ul className="space-y-3 text-neutral-500">
              <li>You only need a quick poster.</li>
              <li>Your event is happening within a few days.</li>
              <li>You are not concerned with visual cohesion.</li>
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
              Event Branding engagements begin at{" "}
              <span className="text-white font-semibold">$1,850 USD</span>.
            </p>

            <p className="mt-4 text-neutral-400 text-sm">
              Detailed proposal shared after confirming alignment.
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

          <input
            type="hidden"
            name="form_type"
            value="Event Branding"
          />

          <h2 className="text-2xl font-semibold">
            Event Project Application
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
            name="event_name"
            placeholder="Event Name"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <textarea
            name="message"
            placeholder="Briefly describe your event."
            rows={5}
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition"
          />

          <select
            name="budget_or_goal"
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-green-500 transition text-neutral-400"
          >
            <option value="">Estimated Event Branding Budget</option>
            <option>$1,500 – $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000+</option>
          </select>

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
          Memorable events are designed, not improvised.
        </p>

      </div>
  
            <CTA />
    </section>
  )
}