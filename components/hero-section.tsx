"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      particles.length = 0
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 150)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(101, 28, 50, ${Math.random() * 0.5})`,
        })
      }
    }

    const animate = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    window.addEventListener("resize", () => {
      handleResize()
      createParticles()
    })

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme, resolvedTheme])

  return (
    <section className="relative min-h-[100vh] flex items-center pt-16 md:pt-24">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ opacity: 0.7 }} />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#651C32] to-[#8A2846] bg-clip-text text-transparent">
                Fadwa Choraichi
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-6 text-muted-foreground dark:text-gray-300">
              Big Data & IoT Student | Future AI Explorer
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto dark:text-gray-200">
              Passionate about emerging technologies at the intersection of data science and artificial intelligence.
              Always open to collaboration and excited to learn from new challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
