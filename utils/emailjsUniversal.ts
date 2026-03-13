"use client"

import { useRef } from "react"
import emailjs from "@emailjs/browser"

export function useUniversalEmailJS(formType: string) {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs.sendForm(
      "service_62r81ip",       // <-- replace with your EmailJS Service ID
      "template_04jrbwu",  // <-- your single universal template ID
      formRef.current,
      "Ef_F9_jKemDDLtA7z"         // <-- replace with your EmailJS Public Key
    )
    .then(() => {
      alert(`✅ Your ${formType} application has been sent!`)
      e.currentTarget.reset()
    })
    .catch(() => {
      alert(`❌ Something went wrong with ${formType}. Please try again.`)
    })
  }

  return { formRef, handleSubmit }
}