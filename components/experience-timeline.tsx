"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  id: number
  title: string
  organization: string
  period: string
  description: string
  skills: string[]
  type: "education" | "experience"
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "End of studies internship",
    organization: "Axians ICT (Vinci Energies)",
    period: "Feb 2026 - Jul 2026",
    description:
      "Designed and built CareMonitor, a prototype AI-augmented CCTV monitoring system for hospital emergency waiting rooms: person detection and tracking, pose-based pain indicators, age estimation and role classification, a deterioration alert state machine, real-time alerts through FastAPI and WebSockets, and a PostgreSQL star-schema data warehouse for analytics.",
    skills: ["Computer Vision", "YOLOv8", "BoT-SORT", "MediaPipe", "CLIP", "FastAPI", "PostgreSQL", "MQTT"],
    type: "experience",
  },
  {
    id: 2,
    title: "Master's in Big Data and IOT",
    organization: "ENSAM Casablanca",
    period: "2024 - 2026",
    description:
      "Specialized in Big Data Analytics and Machine Learning.",
    skills: ["Machine Learning", "Big Data", "Statistical Analysis", "Agile", "IOT", "Cloud Computing", "Blockchain", "Java", "Design Patterns"],
    type: "education",
  },
  {
    id: 3,
    title: "Internship (PFA)",
    organization: "Centre d'Ingénierie Pédagogique et d'Innovation, UM5R Rabat",
    period: "Jul 2025 - Sep 2025",
    description:
      "Built the back-end of Ecolead, a serious game platform, with FastAPI, along with KPI dashboards. Researched and proposed the game's educational content: three finance career paths (investment banker, portfolio manager, financial analyst).",
    skills: ["Python", "FastAPI", "React", "KPI Dashboards"],
    type: "experience",
  },
  {
    id: 4,
    title: "End of studies internship",
    organization: "FSTM",
    period: "2024",
    description:
      "Developed a dynamic and user-friendly web application for geolocating and showcasing historical monuments in Marrakech. The platform integrates interactive maps to help users explore the city's cultural landmarks efficiently. ",
    skills: ["React", "Django"],
    type: "experience",
  },
  {
    id: 5,
    title: "Bachelor's in Computer Science Networks and Multimedia",
    organization: "FSTM",
    period: "2021 - 2024",
    description:
      "Studied concepts in computer networks and multimedia, with hands-on experience in image and audio processing. Worked with raw multimedia data and applied machine learning models. Also developed a simple compression extension inspired by JPEG and TIFF formats.",
    skills: ["Algorithms", "Multimedia Databases", "Networks", "Data Transmission"],
    type: "education",
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Timeline line - hidden on mobile, visible on md and up */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-[#651C32]/20 dark:bg-[#651C32]/30 transform -translate-x-1/2 hidden md:block" />

      <div className="space-y-8 md:space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot - hidden on mobile, visible on md and up */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#651C32] dark:bg-[#651C32] transform -translate-x-1/2 z-10 hidden md:block" />

            {/* Date for mobile */}
            <div className="md:hidden mb-2 text-sm font-medium text-[#651C32] dark:text-[#651C32]">{item.period}</div>

            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
              <Card
                className={`
                border-l-4 dark:bg-gray-800/70
                ${
                  item.type === "education"
                    ? "border-l-[#651C32] dark:border-l-[#651C32]"
                    : "border-l-[#8A2846] dark:border-l-[#8A2846]"
                }
              `}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="hidden md:block text-sm font-medium text-[#651C32] dark:text-[#651C32] mb-1">
                    {item.period}
                  </div>
                  <CardTitle className="text-lg sm:text-xl dark:text-white">{item.title}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{item.organization}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="mb-4 text-sm sm:text-base dark:text-gray-200">{item.description}</p>
                  <div className="flex flex-wrap">
                    {item.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="mr-2 mb-2 text-xs sm:text-sm dark:bg-[#651C32]/20 dark:text-white dark:hover:bg-[#651C32]/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
