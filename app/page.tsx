import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Problem from "@/components/Problem"
import ValueProp from "@/components/ValueProp"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import Articles from "@/components/Articles"
import CTA from "@/components/CTA"
export default function Home() {
  return (
    <main className="bg-[#f6f6f4] text-neutral-900">
      <Navbar />
      <Hero />
      <Problem />
      <ValueProp />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      
      <Articles />
      <CTA />
    </main>
  )
}