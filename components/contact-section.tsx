"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    stars: 0,
    submitted: false,
    loading: false,
  })

  const handleStarClick = (starCount: number) => {
    setFormState((prev) => ({ ...prev, stars: starCount }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormState({
      name: "",
      email: "",
      message: "",
      stars: 0,
      submitted: true,
      loading: false,
    })

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen gap-6 md:gap-8">
{/*       <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
            <CardDescription>Fill out the form below to get in touch with me.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm">Rate your interest:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => handleStarClick(star)} className="focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={star <= formState.stars ? "currentColor" : "none"}
                      stroke="currentColor"
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </button>
                ))}
              </div>
              <Button type="submit" className="w-full" disabled={formState.loading}>
                {formState.loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="h-full">
          <CardHeader className="p-4 sm:p-6">
{/*             <CardTitle className="text-lg sm:text-xl">Connect With Me</CardTitle> */}
            <CardDescription>Find me on these platforms or send me an email directly.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
            <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              <a
                href="mailto:choraichifadwa@gmail.com"
                className="p-3 sm:p-4 rounded-full bg-[#651C32]/10 dark:bg-[#651C32]/20 hover:bg-[#651C32]/20 dark:hover:bg-[#651C32]/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-[#651C32] dark:text-[#651C32]" />
              </a>
              <a
                href="https://github.com/ChoraichiFadwa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full bg-[#651C32]/10 dark:bg-[#651C32]/20 hover:bg-[#651C32]/20 dark:hover:bg-[#651C32]/30 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 sm:h-8 sm:w-8 text-[#651C32] dark:text-[#651C32]" />
              </a>
              <a
                href="https://www.linkedin.com/in/fadwa-choraichi-/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-full bg-[#651C32]/10 dark:bg-[#651C32]/20 hover:bg-[#651C32]/20 dark:hover:bg-[#651C32]/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-[#651C32] dark:text-[#651C32]" />
              </a>
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-muted rounded-lg">
              <p className="text-xs sm:text-sm text-center">
                Looking for internships, research projects, or entry-level roles in Big Data, IoT, and AI. Open to
                remote or on-site opportunities.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
