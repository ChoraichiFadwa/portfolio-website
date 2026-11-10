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
  image?: string
  github?: string
  demo?: string
  details?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "CareMonitor: AI Monitoring for Emergency Waiting Rooms",
    description: "End-of-studies project at Axians. A prototype CCTV analytics system that tracks patients in hospital emergency waiting rooms and flags possible deterioration: YOLOv8 + BoT-SORT tracking, MediaPipe pose features for pain indicators (LogReg / GRU), ViT age estimation, CLIP zero-shot role classification and an EWMA-based alert state machine. Designed for on-premise use, with real-time alerts over FastAPI/WebSockets and a PostgreSQL star schema for analytics.",
    technologies: ["Python", "YOLOv8", "MediaPipe", "CLIP", "FastAPI", "PostgreSQL"],
  },
  {
    id: 2,
    title: "ReviewSense: Company Reputation from Customer Reviews",
    description: "Predicts the polarity of customer reviews (123k Trustpilot reviews, 1,680 companies) and turns it into a reputation score per company and sector. Traced data cleaning with quarantined rows, a leakage-free grouped split, 8 models compared, 0.934 macro-F1 on companies never seen in training, and a star-schema datamart for BI. Interactive Streamlit demo.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "SQLite"],
    github: "https://github.com/ChoraichiFadwa/ReviewSense",
    demo: "https://reviewsense-fadwa.streamlit.app/",
  },
  {
    id: 3,
    title: "Real-Time CDC Platform",
    description: "A change data capture pipeline that streams database changes in real time with Debezium and Kafka.",
    technologies: ["Debezium", "Kafka", "Docker"],
  },
  {
    id: 4,
    title: "Bank-to-GL Reconciliation Engine",
    description: "A Python engine that reconciles bank transactions against general ledger entries using a three-pass matching strategy, and produces an exception report for unmatched items. Built and tested on a synthetic dataset.",
    technologies: ["Python", "Pandas"],
  },
  {
    id: 5,
    title: "Banking Consumer Assistant (RAG + Agent)",
    description: "A chatbot that answers bank customers' credit questions from Moroccan consumer-protection law and Bank Al-Maghrib circulars, cites its sources, and runs loan simulations on a customer's own (mock) data. Includes an evaluation framework covering retrieval, tool calls, answer faithfulness and safety.",
    technologies: ["Python", "RAG", "pgvector", "FastAPI", "LLM Agents"],
  },
  {
    id: 6,
    title: "Sentiment Analysis of Product Reviews",
    description: "Developed a full-stack NLP pipeline that cleans and analyzes Amazon software reviews, re-labels them with a BERT teacher model, and uses an ensemble of classic classifiers to accurately identify positive, neutral, and negative sentiment while highlighting the words that drive each opinion. A soft-voting ensemble (Linear SVM + LogReg + Naïve Bayes) cut neutral-class errors by 38 % and pushed macro-F1 to 82 %.",
    technologies: ["Python", "Transformers"],
    image: "/p1.png?height=300&width=600",
    github: "https://github.com/ChoraichiFadwa/TextMiningSentimentAnalysis.git",
    demo: "https://demo.com",
    // details:
    //   "A soft-voting ensemble (Linear SVM + LogReg + Naïve Bayes) cut neutral-class errors by 38 % and pushed macro-F1 to 82 %.",
  },
  {
    id: 7,
    title: "Fraud and Money Laundering Detection with Deep Learning",
    description: "Financial fraud and money-laundering outpace traditional rule-based controls, prompting a shift to deep-learning models that flag illicit activity in real time. This review distills insights from three key studies—on explainable AI for AML, a high-accuracy DNN for fraud detection, and a survey of 112 research articles",
    technologies: ["Deep Learning", "Blockchain", "X-AI"],
    image: "/p2.png?height=300&width=600",
    // details:
    //   " This review distills insights from three key studies—on explainable AI for AML, a high-accuracy DNN for fraud detection, and a survey of 112 research articles.",
  },
  {
    id: 8,
    title: "Credit Card Approval Predictor",
    description: "Build a machine-learning model that automates credit-card approval, replacing slow, error-prone manual reviews with quick, data-driven decisions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    image: "/p3.png?height=300&width=600",
    github: "https://github.com",
    demo: "https://demo.com",
    // details:
    //   " ",
  },
  {
    id: 9,
    title: "Financial Assistant",
    description: "This Financial Assistant is a full-stack web application that merges everyday budgeting with live cryptocurrency insights. Users enter their income once, log expenses under intuitive categories, and the app instantly visualizes how each category stacks up against monthly totals and year-to-date spending, revealing trends and overspending at a glance.",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
    image: "/pFinance.png?height=300&width=600",
    github: "https://github.com",
    // details:
    //   " A dedicated crypto dashboard streams real-time prices; when a user selects the “Recommend” action on any coin, the system computes a rolling correlation matrix and highlights the five cryptocurrencies that move most closely with the chosen asset—useful for quick diversification checks or thematic investing ideas.",
  },
  {
    id: 10,
    title: "AI Platform for Parents",
    description: "A smart hub that turns family preferences into memorable moments. Parents create a single profile describing their kids ages and interests, our recommendation engine instantly suggests age-appropriate activities; from STEM workshops to outdoor sports days and creative crafts—sourced from local partners and online events.",
    technologies: ["React", "Django", "Transformers"],
    image: "/pAI.png?height=300&width=600",
    github: "https://github.com",
    // details:
    //   "Under the hood, a model combines collaborative filtering with content-based embeddings to surface fresh ideas, while a lightweight sentiment-analysis module monitors feedback on completed activities. ",
  },
    {
    id: 11,
    title: "Flood Alert System",
    description: "A real-time flood alert system using IoT sensors and wireless networks to monitor water levels and trigger alerts in critical conditions. Integrated with the Blynk app for remote monitoring and early warnings.",
    technologies: ["ESP32 WROOM", "DHT11 Sensor", "Blynk IoT App"],
    image: "/pflood.png?height=300&width=600",
    github: "https://github.com",
    demo: "https://vimeo.com/1089553612/9a499fe3da?share=copy",
    // details:
    //   "Under the hood, a model combines collaborative filtering with content-based embeddings to surface fresh ideas, while a lightweight sentiment-analysis module monitors feedback on completed activities. ",
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
              {project.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    transform: activeProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#651C32] to-[#8A2846] px-6 text-center transition-transform duration-500"
                  style={{ transform: activeProject === project.id ? "scale(1.05)" : "scale(1)" }}
                >
                  <span className="text-lg sm:text-xl font-semibold text-white">{project.title.split(":")[0]}</span>
                </div>
              )}
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
{/*               <p className="text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">
                {activeProject === project.id ? project.details : `${project.details.substring(0, 100)}...`}
              </p> */}
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
