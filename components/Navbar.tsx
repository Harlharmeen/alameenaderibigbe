"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <Image
            src="/icon.svg"
            alt="Al-ameen Aderibigbe logo"
            width={24}
            height={24}
            priority
          />
          <span>Al-ameen Aderibigbe</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm text-neutral-600">
          <a href="#Services" className="hover:text-neutral-900 transition">Services</a>
          <a href="#Projects" className="hover:text-neutral-900 transition">Projects</a>
          <a href="#Process" className="hover:text-neutral-900 transition">The Process</a>
          <a href="#Articles" className="hover:text-neutral-900 transition">Insights</a>

          <a
            href="/start-project"
            className="ml-4 px-5 py-2 bg-neutral-900 text-white rounded-full text-sm hover:opacity-90 transition"
          >
            Start Project
          </a>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-900"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="flex flex-col px-6 py-6 space-y-6 text-neutral-700">

              <a href="#Services" onClick={() => setOpen(false)}>Services</a>
              <a href="#Projects" onClick={() => setOpen(false)}>Projects</a>
              <a href="#Process" onClick={() => setOpen(false)}>Process</a>
              <a href="#Articles" onClick={() => setOpen(false)}>Articles</a>

              <a
                href="/start-project"
                onClick={() => setOpen(false)}
                className="mt-4 px-5 py-3 bg-neutral-900 text-white rounded-full text-center"
              >
                Start Project
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}