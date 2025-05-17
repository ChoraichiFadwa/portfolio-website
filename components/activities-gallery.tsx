"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Activity {
  id: number
  title: string
  description: string
  image: string
  funFact: string
}

const activities: Activity[] = [
  {
    id: 1,
    title: "AR Workshop Organizer",
    description: "Organized and led workshops on Augmented Reality development for beginners",
    image: "/placeholder.svg?height=300&width=600",
    funFact: "Our first workshop had only 5 attendees, but by the third one we had over 50 people!",
  },
  {
    id: 2,
    title: "Hackathon Participant",
    description: "Participated in 3 hackathons, winning 'Best Use of AI' in the University Tech Challenge",
    image: "/placeholder.svg?height=300&width=600",
    funFact: "Our winning project was built in just 18 hours with no sleep and lots of coffee!",
  },
  {
    id: 3,
    title: "Tech Blog Writer",
    description: "Write articles about emerging technologies and their applications in everyday life",
    image: "/placeholder.svg?height=300&width=600",
    funFact: "My article on 'AI in Healthcare' was featured in a national tech magazine",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    description: "Contribute to open-source projects related to data visualization and IoT connectivity",
    image: "/placeholder.svg?height=300&width=600",
    funFact: "My first pull request was accepted after 7 revisions and a lot of learning!",
  },
]

export default function ActivitiesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {activities.map((activity) => (
            <div key={activity.id} className="w-full flex-shrink-0 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${activity.image})` }} />
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm italic">
                        <span className="font-semibold">Fun Fact:</span> {activity.funFact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {activities.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
