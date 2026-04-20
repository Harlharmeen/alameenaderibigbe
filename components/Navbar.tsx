"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
        >
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

          <Link
            href="/#Services"
            className="hover:text-neutral-900 transition"
          >
            Services
          </Link>

          <Link
            href="/#Projects"
            className="hover:text-neutral-900 transition"
          >
            Projects
          </Link>

          <Link
            href="/#Process"
            className="hover:text-neutral-900 transition"
          >
            The Process
          </Link>

          <Link
            href="/#Insights"
            className="hover:text-neutral-900 transition"
          >
            Insights
          </Link>
          


          {/* START PROJECT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >

            <button className="ml-4 flex items-center gap-1 px-5 py-2 bg-neutral-900 text-white rounded-full text-sm hover:opacity-90 transition">
              Start Project
              <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-60 bg-white border border-neutral-200 rounded-xl shadow-lg flex flex-col overflow-hidden"
                >

                  <Link
                    href="/start-project"
                    className="block w-full px-5 py-3 text-sm hover:bg-neutral-50"
                  >
                    Brand Identity Project
                  </Link>

                  <Link
                    href="/start-event"
                    className="block w-full px-5 py-3 text-sm hover:bg-neutral-50"
                  >
                    Event Branding
                  </Link>

                  <Link
                    href="/start-individual"
                    className="block w-full px-5 py-3 text-sm hover:bg-neutral-50"
                  >
                    Personal Branding
                  </Link>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>


        {/* MOBILE MENU ICON */}
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
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >

            <div className="flex flex-col px-6 py-6 space-y-6 text-neutral-700">

              <Link
                href="/#Services"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/#Projects"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="/#Process"
                onClick={() => setOpen(false)}
              >
                Process
              </Link>

              <Link
                href="/#Insights"
                onClick={() => setOpen(false)}
              >
                Insights
              </Link>


              {/* MOBILE START PROJECT */}
              <button
                onClick={() => setMobileServices(!mobileServices)}
                className="flex justify-between items-center mt-2 px-5 py-3 bg-neutral-900 text-white rounded-full"
              >
                Start Project
                <ChevronDown size={18} />
              </button>

              <AnimatePresence>
                {mobileServices && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col space-y-4 pl-4 pt-2 text-sm"
                  >

                    <Link
                      href="/start-project"
                      onClick={() => setOpen(false)}
                    >
                      Brand Identity Project
                    </Link>

                    <Link
                      href="/start-event"
                      onClick={() => setOpen(false)}
                    >
                      Event Branding
                    </Link>

                    <Link
                      href="/start-individual"
                      onClick={() => setOpen(false)}
                    >
                      Personal Branding
                    </Link>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}