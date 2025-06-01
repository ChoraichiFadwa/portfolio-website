"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SkillCategory {
  name: string
  description?: string
  skills: string[]
}

interface Certification {
  name: string
  issuer: string
  date: string
  url?: string
}

const skillCategories: SkillCategory[] = [
  {
    name: "Data Science",
    description: "Statistical analysis and machine learning",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Statistical Analysis",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    name: "Web Development",
    description: "Frontend and backend technologies",
    skills: ["React", "Node.js", "JavaScript", "TypeScript", "HTML/CSS", "Next.js", "RESTful APIs", "GraphQL"],
  },
  {
    name: "Big Data",
    description: "Processing and analyzing large datasets",
    skills: ["SQL", "NoSQL", "Hadoop", "Spark", "Data Warehousing", "ETL Pipelines", "Data Modeling"],
  },
  {
    name: "IoT",
    description: "Internet of Things technologies",
    skills: [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "Sensor Integration",
      "Embedded Systems",
      "IoT Protocols",
      "Edge Computing",
    ],
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure and deployment",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Serverless Architecture"],
  },
]

const certifications: Certification[] = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2022",
    url: "https://example.com",
  },
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://example.com",
  },
  {
    name: "Data Science Professional Certificate",
    issuer: "DataCamp",
    date: "2021",
    url: "https://example.com",
  },
  {
    name: "IoT Fundamentals",
    issuer: "Cisco",
    date: "2021",
    url: "https://example.com",
  },
]

export default function SkillsSection() {
  return (
    <Tabs defaultValue="skills" className="w-full">
      <TabsList className="grid w-full max-w-xs sm:max-w-md mx-auto grid-cols-2 mb-6 sm:mb-8 bg-white/80 dark:bg-gray-800/90">
        <TabsTrigger value="skills" className="data-[state=active]:bg-[#651C32] data-[state=active]:text-white">
          Skills
        </TabsTrigger>
        <TabsTrigger value="certifications" className="data-[state=active]:bg-[#651C32] data-[state=active]:text-white">
          Certifications
        </TabsTrigger>
      </TabsList>

      <TabsContent value="skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full dark:bg-gray-800/70">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl dark:text-white">{category.name}</CardTitle>
                  {category.description && (
                    <CardDescription className="text-sm dark:text-gray-300">{category.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs sm:text-sm bg-[#651C32]/10 text-[#651C32] dark:bg-[#651C32]/20 dark:text-white hover:bg-[#651C32]/20 dark:hover:bg-[#651C32]/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="certifications">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full dark:bg-gray-800/70">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl dark:text-white">{cert.name}</CardTitle>
                  <CardDescription className="text-sm dark:text-gray-300">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm cursor-pointer hover:bg-[#651C32] hover:text-white dark:bg-[#651C32]/20 dark:text-white dark:hover:bg-[#651C32] transition-colors"
                  >
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                        View Certificate
                      </a>
                    ) : (
                      "Certificate"
                    )}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
