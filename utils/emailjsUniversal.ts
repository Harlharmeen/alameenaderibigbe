"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export function useUniversalEmailJS(formType: string) {
  const formRef = useRef<HTMLFormElement>(null)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    try {
      setLoading(true)

      await emailjs.sendForm(
        "service_62r81ip",
        "template_04jrbwu",
        formRef.current,
        "Ef_F9_jKemDDLtA7z"
      )

      setSuccess(true)
      formRef.current.reset()

    } catch (error) {
      console.error("EmailJS Error:", error)
      alert(`❌ Something went wrong with ${formType}. Please try again.`)
    } finally {
      setLoading(false)
    }
  }

  return { formRef, handleSubmit, loading, success }
}