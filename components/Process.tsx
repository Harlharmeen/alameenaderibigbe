"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const processSteps = [
  {
    phase: "01",
    title: "Strategic Immersion",
    duration: "Week 1",
    description:
      "We begin with deep immersion into your business model, competitive landscape, audience psychology, and long-term ambition.",
    deliverables: [
      "Stakeholder discovery session",
      "Brand perception audit",
      "Competitive positioning analysis",
      "Strategic insight summary",
    ],
  },
  {
    phase: "02",
    title: "Positioning & Narrative Architecture",
    duration: "Week 1–2",
    description:
      "Before visuals, we define the strategic core — what you stand for, how you differ, and what you must signal.",
    deliverables: [
      "Positioning statement",
      "Value proposition refinement",
      "Messaging hierarchy",
      "Creative direction board",
    ],
  },
  {
    phase: "03",
    title: "Identity Concept Systems",
    duration: "Week 2–3",
    description:
      "Strategically grounded identity routes are developed and presented with rationale — not just aesthetics.",
    deliverables: [
      "Logo architecture concepts",
      "Typography direction",
      "Color logic mapping",
      "Application mockups",
    ],
  },
  {
    phase: "04",
    title: "Refinement & Precision Build",
    duration: "Week 3–4",
    description:
      "The chosen direction is refined with system-level precision to ensure scalability, clarity, and consistency.",
    deliverables: [
      "Final logo suite",
      "Color & typography system",
      "Spacing & grid rules",
      "Legibility optimization",
    ],
  },
  {
    phase: "05",
    title: "System Expansion",
    duration: "Week 4–5",
    description:
      "We extend the identity into real-world and digital touchpoints to ensure authority across every interaction.",
    deliverables: [
      "Brand guidelines document",
      "Social & marketing templates",
      "Core collateral system",
      "Digital UI tokens (if applicable)",
    ],
  },
  {
    phase: "06",
    title: "Delivery & Launch Advisory",
    duration: "Week 5–6",
    description:
      "All assets are delivered production-ready. Optional rollout support ensures seamless execution post-handover.",
    deliverables: [
      "Master asset exports",
      "Organized brand library",
      "Launch advisory session",
      "30-day support window",
    ],
  },
]

export default function Process() {
  return (
    <section
      id="Process"
      className="py-36 bg-neutral-900 text-white border-t border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Methodology
        </span>

        {/* Stronger Headline */}
        <h2 className="mt-8 text-3xl md:text-5xl font-semibold max-w-4xl leading-tight">
          A structured 6-week transformation
          <br />
          designed for clarity, alignment, and authority.
        </h2>

        {/* Supporting Context */}
        <p className="mt-8 text-neutral-400 text-lg max-w-2xl leading-relaxed">
          This isn’t rushed design work. It’s a controlled, step-by-step system
          that ensures your brand is strategically sound before it is visually expressed.
        </p>

        {/* Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Phase + Duration */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-emerald-500">
                  Phase {step.phase}
                </span>
                <span className="text-xs text-neutral-500 border border-neutral-700 px-3 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Deliverables */}
              <ul className="space-y-3">
                {step.deliverables.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-500 mt-[2px]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

        {/* Closing Conviction */}
        <div className="mt-24 max-w-3xl">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            Clarity first. Systems second.
            <br />
            Visual authority as the outcome.
          </p>
        </div>

      </div>
    </section>
  )
}