"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  github?: string
  demo?: string
  details: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sentiment Analysis of Product Reviews",
    description: "Developed a full-stack NLP pipeline that cleans and analyzes Amazon software reviews, re-labels them with a BERT teacher model, and uses an ensemble of classic classifiers to accurately identify positive, neutral, and negative sentiment while highlighting the words that drive each opinion.",
    technologies: ["Python", "Transformers"],
    image: "/placeholder.svg?height=300&width=600",
    github: "https://github.com/ChoraichiFadwa/TextMiningSentimentAnalysis.git",
    demo: "https://demo.com",
    details:
      "Built an end-to-end NLP pipeline that cleans 100 k+ Amazon software reviews, re-labels them with a BERT model, and predicts positive / neutral / negative sentiment. A soft-voting ensemble (Linear SVM + LogReg + Naïve Bayes) cut neutral-class errors by 38 % and pushed macro-F1 to 82 %.",
  },
  {
    id: 2,
    title: "Fraud and Money Laundering Detection with Deep Learning",
    description: "Connected device ecosystem for home automation and energy monitoring",
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "Node.js"],
    image: "/placeholder.svg?height=300&width=600",
    github: "https://github.com",
    details:
      "Designed and implemented a smart home system that connects various sensors and actuators to monitor and control home environment. Features include temperature regulation, motion detection, and energy usage optimization.",
  },
  {
    id: 3,
    title: "Credit Card Approval Predictor",
    description: "Machine learning model to identify fraudulent transactions in financial data",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    image: "/placeholder.svg?height=300&width=600",
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      "Developed a fraud detection system using ensemble machine learning techniques. The model achieved 97% accuracy in identifying suspicious transactions and reduced false positives by 30% compared to previous systems.",
  },
  {
    id: 4,
    title: "Predictive Maintenance Platform",
    description: "AI-powered system to predict equipment failures before they occur",
    technologies: ["Python", "TensorFlow", "Time Series Analysis", "Docker"],
    image: "/placeholder.svg?height=300&width=600",
    github: "https://github.com",
    details:
      "Created a predictive maintenance platform that analyzes sensor data from industrial equipment to forecast potential failures. The system uses deep learning to identify patterns that precede breakdowns, allowing for preventative maintenance.",
  },
  {
    id: 5,
    title: "Financial Assistant",
    description: "AI-powered system to predict equipment failures before they occur",
    technologies: ["Python", "TensorFlow", "Time Series Analysis", "Docker"],
    image: "/placeholder.svg?height=300&width=600",
    github: "https://github.com",
    details:
      "Created a predictive maintenance platform that analyzes sensor data from industrial equipment to forecast potential failures. The system uses deep learning to identify patterns that precede breakdowns, allowing for preventative maintenance.",
  },
]

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card
            className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
            onTouchStart={() => setActiveProject(project.id === activeProject ? null : project.id)}
          >
            <div className="relative overflow-hidden h-40 sm:h-48">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{
                  backgroundImage: `url(${project.image})`,
                  transform: activeProject === project.id ? "scale(1.05)" : "scale(1)",
                }}
              />
            </div>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
              <div className="mb-4 flex flex-wrap">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="mr-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">
                {activeProject === project.id ? project.details : `${project.details.substring(0, 100)}...`}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between p-4 sm:p-6 pt-0 sm:pt-0">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.github} target="_blank">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
              )}
              {project.demo && (
                <Button size="sm" asChild>
                  <Link href={project.demo} target="_blank">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
