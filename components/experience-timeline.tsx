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
    title: "Master's in Data Science",
    organization: "Tech University",
    period: "2022 - Present",
    description:
      "Specializing in Big Data Analytics and Machine Learning. Research focus on IoT data processing and real-time analytics.",
    skills: ["Machine Learning", "Big Data", "Statistical Analysis"],
    type: "education",
  },
  {
    id: 2,
    title: "Data Science Intern",
    organization: "AI Solutions Inc.",
    period: "Summer 2022",
    description:
      "Worked on developing predictive models for customer behavior analysis. Implemented data pipelines for processing large datasets.",
    skills: ["Python", "TensorFlow", "SQL", "Data Visualization"],
    type: "experience",
  },
  {
    id: 3,
    title: "Bachelor's in Computer Science",
    organization: "State University",
    period: "2018 - 2022",
    description:
      "Graduated with honors. Focused on artificial intelligence and data structures. Senior project on IoT-based smart agriculture system.",
    skills: ["Algorithms", "Software Development", "AI Fundamentals"],
    type: "education",
  },
  {
    id: 4,
    title: "Research Assistant",
    organization: "University AI Lab",
    period: "2020 - 2022",
    description:
      "Assisted in research on natural language processing and sentiment analysis. Contributed to two published papers.",
    skills: ["NLP", "Research Methodology", "Academic Writing"],
    type: "experience",
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2" />

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 z-10" />

            {/* Date for mobile */}
            <div className="md:hidden mb-2 pl-6 text-sm font-medium text-blue-600 dark:text-blue-400">
              {item.period}
            </div>

            {/* Content */}
            <div className="pl-6 md:pl-0 md:w-1/2 md:px-8">
              <Card
                className={`
                border-l-4 
                ${item.type === "education" ? "border-l-blue-500" : "border-l-cyan-500"}
              `}
              >
                <CardHeader>
                  <div className="hidden md:block text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                    {item.period}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  <div>
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="mr-2 mb-2">
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
