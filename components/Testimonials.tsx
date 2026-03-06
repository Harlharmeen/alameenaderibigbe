"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "This is the most impressive borehole drilling and geotechnical services branding I have encountered so far, distinguished by its captivating presentation, persuasive content, and exceptionally well-organized structure.",
    name: "Odemakin Sodiq",
    role: "GM & Technical Lead",
    company: "AMAAN",
    image: "/dp-placeholder.jpg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    name: "aaaaaaaaaaaaaaa",
    role: "Technical Lead",
    company: "ShopMaxxi",
    image: "/clients/mariam.jpg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    name: "bbbbbbbbb",
    role: "Founder",
    company: "Osmart Tech Concept",
    image: "/clients/tolu.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-36 bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Client Validation
        </span>

        {/* Headline */}
        <h2 className="mt-8 text-3xl md:text-5xl font-semibold max-w-4xl leading-tight text-neutral-900">
          Trusted by founders who value
          <br />
          clarity, structure, and long-term positioning.
        </h2>

        {/* Supporting line */}
        <p className="mt-8 text-neutral-600 text-lg max-w-2xl leading-relaxed">
          Real outcomes from leaders who chose strategic alignment over surface-level design.
        </p>

        {/* Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-emerald-500/40 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-5xl text-emerald-500 mb-8 leading-none">
                “
              </div>

              {/* Quote */}
              <p className="text-neutral-700 leading-relaxed mb-12 text-lg">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="h-px bg-neutral-200 mb-6"></div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                
                {/* Portrait */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <div>
                  <p className="font-medium text-neutral-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {item.role}, {item.company}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Closing Conviction */}
        <div className="mt-28 max-w-3xl">
          <p className="text-2xl md:text-3xl font-medium leading-relaxed text-neutral-900">
            Strategy builds confidence.
            <br />
            Systems build longevity.
          </p>
        </div>

      </div>
    </section>
  )
}