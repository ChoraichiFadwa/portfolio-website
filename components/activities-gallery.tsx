"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

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
    title: "Workshops Organizer",
    description: "Organized workshops on Augmented Reality, Virtual Reality, C# and development for beginners",
    image: "/placeholder.svg?height=300&width=600",
    funFact: "Our first workshop had only 2 attendees, but by the last one we had over 50 people!",
  },
  {
    id: 2,
    title: "Events Moderator",
    description: "As the ITECH Club Events, Workshop, and Organization Manager, I just love to speak, so I took on this role in ECPC and ITECH Talk.",
    image: "/placeholder.svg?height=300&width=600",
    funFact: "I once accidentally gave the first prize to the person who came second!",
  },
]

export default function ActivitiesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === activities.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - 1 : prevIndex - 1))
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {activities.map((activity) => (
            <div key={activity.id} className="w-full flex-shrink-0 px-0 sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div
                    className="h-48 sm:h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  />
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">{activity.title}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="bg-muted p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm italic">
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
        className="absolute top-1/2 left-0 sm:-left-4 transform -translate-y-1/2 rounded-full z-10 bg-white/80 dark:bg-gray-800/80"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 sm:-right-4 transform -translate-y-1/2 rounded-full z-10 bg-white/80 dark:bg-gray-800/80"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {activities.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
