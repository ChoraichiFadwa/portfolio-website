"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: number
  category: string
}

interface Certification {
  name: string
  issuer: string
  date: string
  url?: string
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "TensorFlow", level: 85, category: "AI/ML" },
  { name: "PyTorch", level: 75, category: "AI/ML" },
  { name: "SQL", level: 80, category: "Data" },
  { name: "NoSQL", level: 70, category: "Data" },
  { name: "React", level: 65, category: "Web Dev" },
  { name: "Node.js", level: 60, category: "Web Dev" },
  { name: "Docker", level: 75, category: "DevOps" },
  { name: "AWS", level: 65, category: "Cloud" },
  { name: "Arduino/Raspberry Pi", level: 80, category: "IoT" },
  { name: "MQTT", level: 70, category: "IoT" },
  { name: "Data Visualization", level: 85, category: "Data" },
  { name: "Statistical Analysis", level: 80, category: "Data" },
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

const categories = Array.from(new Set(skills.map((skill) => skill.category)))

export default function SkillsSection() {
  return (
    <Tabs defaultValue="skills" className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="certifications">Certifications</TabsTrigger>
      </TabsList>

      <TabsContent value="skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                  <CardDescription>
                    {category === "AI/ML" && "Artificial Intelligence & Machine Learning"}
                    {category === "IoT" && "Internet of Things"}
                    {category === "DevOps" && "Development Operations"}
                    {category === "Web Dev" && "Web Development"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
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
