"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check } from "lucide-react"
import Link from "next/link"

type ServiceKey = "brand" | "event" | "individual"

export default function Services() {

  const [activeTab, setActiveTab] = useState<ServiceKey>("brand")

  const services = {
    brand: {
      title: "Brand Identity System",
      price: "$525",
      route: "/start-project",
      note: "Foundational engagement · Custom scope available",
      description:
        "Designed for founders and growing brands who understand that perception shapes opportunity. Every element is built intentionally — from strategic positioning to scalable visual systems.",
      features: [
        "Brand positioning clarity session",
        "Strategic direction & visual exploration",
        "Primary logo system & variations",
        "Typography & color architecture",
        "Core brand applications",
        "Structured brand guidelines document",
      ],
    },

    event: {
      title: "Event Branding System",
      price: "$1,850",
      route: "/start-event",
      note: "End-to-end visual direction for events",
      description:
        "For conferences, summits, and cultural events that require a cohesive identity. This engagement ensures every touchpoint — from stage visuals to attendee materials — reflects a unified experience.",
      features: [
        "Event visual identity concept",
        "Event logo / graphic mark",
        "Stage & screen visual system",
        "Social media promotional graphics",
        "Event collateral (badges, banners, etc)",
        "Visual direction guidelines",
      ],
    },

    individual: {
      title: "Individual Branding",
      price: "$150",
      route: "/start-individual",
      note: "Social presence engineering",
      description:
        "Designed for professionals, creators, and founders building authority online. This engagement aligns your visual presence and messaging to communicate credibility and intentional positioning.",
      features: [
        "Personal brand positioning clarity",
        "Profile identity design",
        "Social media visual direction",
        "Content identity templates",
        "Profile optimization guidance",
        "Mini brand guideline",
      ],
    },
  }

  const service = services[activeTab]

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
          Three strategic branding engagements
          <br />
          designed for different growth stages.
        </h2>

        {/* SUBTEXT */}

        <p className="mt-8 text-neutral-400 max-w-2xl leading-relaxed text-lg">
          Whether you’re building a company, producing a major event,
          or establishing a personal authority — each engagement is
          structured to create clarity, alignment, and perception power.
        </p>

        {/* TABS */}

        <div className="mt-14 flex justify-center">

          <div className="inline-flex bg-neutral-900 border border-neutral-800 rounded-full p-1.5 relative">

            {(["brand", "event", "individual"] as ServiceKey[]).map((tab) => {

              const isActive = activeTab === tab

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="relative px-7 py-3 text-sm font-medium rounded-full transition-colors"
                >

                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-emerald-600 rounded-full shadow-lg shadow-emerald-600/30"
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      isActive ? "text-white" : "text-neutral-400"
                    }`}
                  >
                    {tab === "brand" && "Brand Identity"}
                    {tab === "event" && "Event Branding"}
                    {tab === "individual" && "Individual Branding"}
                  </span>

                </button>
              )
            })}

          </div>

        </div>

        {/* SERVICE CARD */}

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-16 p-12 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-emerald-600/40 transition-all duration-300"
        >

          {/* Accent Line */}

          <div className="w-14 h-[2px] bg-emerald-600 mb-10"></div>

          {/* Title */}

          <h3 className="text-2xl font-semibold mb-4">
            {service.title}
          </h3>

          {/* Price */}

          <div className="mb-8">
            <span className="text-3xl font-medium text-white">
              {service.price}
            </span>
            <p className="text-sm text-neutral-500 mt-2">
              {service.note}
            </p>
          </div>

          {/* Description */}

          <p className="text-neutral-400 mb-10 leading-relaxed max-w-2xl">
            {service.description}
          </p>

          {/* FEATURES */}

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 text-sm text-neutral-300">

            {service.features.map((item: string, i: number) => (

              <div key={i} className="flex items-start gap-3">
                <Check size={16} className="text-emerald-600 mt-[2px]" />
                {item}
              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            <p className="text-sm text-neutral-400">
              Currently onboarding a limited number of engagements.
            </p>

            <Link
              href={service.route}
              className="px-7 py-3.5 bg-emerald-600 text-white rounded-full hover:opacity-90 transition flex items-center justify-center gap-2 text-sm whitespace-nowrap"
            >
              Start Application
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </motion.div>

        {/* POSITIONING */}

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