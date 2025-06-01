"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/*
      <motion.div
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
            {/* Form content here */}
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
            <CardTitle className="text-lg sm:text-xl">Connect With Me</CardTitle>
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
                href="https://www.linkedin.com/in/fadwa-choraichi-"
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
