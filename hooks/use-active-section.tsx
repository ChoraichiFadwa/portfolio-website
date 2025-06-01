"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    // Only run this code on the client side
    if (typeof window === "undefined") return

    const calculateRootMargin = () => {
      return `-${offset}px 0px -${window.innerHeight - offset - 100}px 0px`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: calculateRootMargin() },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Handle window resize to recalculate rootMargin
    const handleResize = () => {
      observer.disconnect()

      const newObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { rootMargin: calculateRootMargin() },
      )

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          newObserver.observe(element)
        }
      })

      return newObserver
    }

    window.addEventListener("resize", handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", handleResize)
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sectionIds, offset])

  return activeSection
}
