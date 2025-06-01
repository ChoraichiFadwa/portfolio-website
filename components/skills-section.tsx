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
      "Transformers",
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
    skills: ["React", "Angular", "Spring Boot", "Django", "MySQL", "PostgreSQL", "JavaScript", "HTML/CSS", "RESTful APIs"],
  },
  // {
  //   name: "Big Data",
  //   description: "Processing and analyzing large datasets",
  //   skills: ["SQL", "NoSQL", "Hadoop", "Spark", "Data Warehousing", "ETL Pipelines", "Data Modeling"],
  // },
  {
    name: "IoT",
    description: "Internet of Things technologies",
    skills: [
      "Arduino",
      "Sensor Integration",
      "Embedded Systems",
      "IoT Protocols",
    ],
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure and deployment",
    skills: ["Docker", "Kubernetes", "CI/CD", "Git", "Serverless Architecture"],
  },
]

const certifications: Certification[] = [
  {
    name: "Supervised Machine Learning",
    issuer: "Datacamp",
    date: "2025",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/1e9312ad72efd88fccbf474b40f9a3264873aed1",
  },
  {
    name: "Introduction to Data and Data Science",
    issuer: "365 Data Science",
    date: "2024",
    url: "https://learn.365datascience.com/certificates/CC-A2FCA0CB47/",
  },
  {
    name: "Network Security ",
    issuer: "Cisco",
    date: "2024",
    url: "https://www.credly.com/badges/c4a91b07-1e1e-4873-8ad0-29ec0303e0a3",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2024",
    url: "https://www.credly.com/badges/49d43ce2-3fb5-499f-aec9-47f1615aae31",
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
