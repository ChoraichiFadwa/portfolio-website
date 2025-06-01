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
    image: "/p1.png?height=300&width=600",
    github: "https://github.com/ChoraichiFadwa/TextMiningSentimentAnalysis.git",
    demo: "https://demo.com",
    details:
      "Built an end-to-end NLP pipeline that cleans 100 k+ Amazon software reviews, re-labels them with a BERT model, and predicts positive / neutral / negative sentiment. A soft-voting ensemble (Linear SVM + LogReg + Naïve Bayes) cut neutral-class errors by 38 % and pushed macro-F1 to 82 %.",
  },
  {
    id: 2,
    title: "Fraud and Money Laundering Detection with Deep Learning",
    description: "Financial fraud and money-laundering outpace traditional rule-based controls, prompting a shift to deep-learning models that flag illicit activity in real time. This review distills insights from three key studies—on explainable AI for AML, a high-accuracy DNN for fraud detection, and a survey of 112 AI-driven systems—to outline current best practices, challenges, and research directions for building fast, transparent, and reliable detection tools in banking.",
    technologies: ["Deep Learning", "Blockchain", "X-AI"],
    image: "/p2.png?height=300&width=600",
    github: "https://github.com",
    details:
      " ",
  },
  {
    id: 3,
    title: "Credit Card Approval Predictor",
    description: "Build a machine-learning model that automates credit-card approval, replacing slow, error-prone manual reviews with quick, data-driven decisions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    image: "/placeholder.svg?height=300&width=600",
    github: "https://github.com",
    demo: "https://demo.com",
    details:
      " ",
  },
  {
    id: 4,
    title: "Financial Assistant",
    description: "This Financial Assistant is a full-stack web application that merges everyday budgeting with live cryptocurrency insights. Users enter their income once, log expenses under intuitive categories, and the app instantly visualizes how each category stacks up against monthly totals and year-to-date spending, revealing trends and overspending at a glance. A dedicated crypto dashboard streams real-time prices; when a user selects the “Recommend” action on any coin, the system computes a rolling correlation matrix and highlights the five cryptocurrencies that move most closely with the chosen asset—useful for quick diversification checks or thematic investing ideas. Together, these features create a single, elegant workspace where personal cash-flow management and market-savvy decision-making coexist seamlessly.",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
    image: "/trace.svg?height=300&width=600",
    github: "https://github.com",
    details:
      " ",
  },
  {
    id: 5,
    title: "AI Platform for Parents",
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
