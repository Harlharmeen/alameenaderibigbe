"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-[#f6f6f4] relative min-h-screen flex flex-col justify-center pt-40">

      {/* MAIN GRID */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16  w-full grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Role + Availability */}
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Brand Identity Designer
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for projects
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight max-w-2xl">
            I build brand identities that 
            <span className="text-neutral-900"> command clarity</span>.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg text-neutral-600 mt-8 max-w-xl leading-relaxed">
            Helping ambitious brands look 
            <span className="text-neutral-900 font-medium"> refined</span>, 
            <span className="text-neutral-900 font-medium"> intentional</span>, 
            and positioned for 
            <span className="text-neutral-900 font-medium"> long-term growth</span>.
          </p>

          {/* CTA */}
<div  className="mt-12 flex gap-4 w-full max-w-md">
  <button className="flex-1 px-6 py-3.5 bg-neutral-900 text-white rounded-full hover:opacity-90 transition flex items-center justify-center gap-2 text-sm whitespace-nowrap">
    <a href="/projects" className="hover:text-neutral-900 transition">View Work</a> <ArrowRight size={16} />
  </button>

  <button className="flex-1 px-6 py-3.5 border border-neutral-300 rounded-full hover:border-neutral-900 transition text-sm whitespace-nowrap">
    <a href="/start-project" className="hover:text-neutral-900 transition">Start a Project</a>
  </button>
</div>

          {/* Tools */}
          <div className="mt-16">
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-5">
              Tools I Use
            </p>

            <div className="flex flex-wrap gap-8 text-neutral-500 text-sm">
              <span className="hover:text-neutral-900 transition">Adobe Illustrator</span>
              <span className="hover:text-neutral-900 transition">Photoshop</span>
              <span className="hover:text-neutral-900 transition">Figma</span>
              <span className="hover:text-neutral-900 transition">Canva</span>
              <span className="hover:text-neutral-900 transition">After Effects</span>
            </div>
          </div>

        </motion.div>


        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          transition={{ duration: 1 }}
          whileHover={{
            rotate: 0,
            y: -8,
            scale: 1.02,
          }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-transparent blur-3xl rounded-3xl scale-110" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-neutral-200 bg-white">
              <Image
                src="/Xdp-01.jpg"
                alt="Al-ameen Aderibigbe"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

      </div>


      {/* CREDIBILITY STRIP */}
      <div className="my-12 border-t border-neutral-200 pt-12">

        <p className="text-xs uppercase tracking-widest text-neutral-400 text-center mb-8">
          Trusted by forward-thinking brands
        </p>

        <div className="relative overflow-hidden">

          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f6f6f4] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f6f6f4] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-24">
                <img src="/logo stripe-01.svg" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />
                <img src="/logo stripe-02.svg" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />
                <img src="/logo stripe-03.svg" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />
                <img src="/logo stripe-04.svg" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />
                <img src="/logo stripe-05.svg" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />
                <img src="/logo stripe-06.svg" className="h-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  )
}