"use client"

import { useState, useEffect } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "projects", label: "Projects" },
    { href: "experience", label: "Experience" },
    { href: "skills", label: "Skills" },
    { href: "activities", label: "Activities" },
    { href: "contact", label: "Contact" },
  ]

  const activeSection = useActiveSection(navLinks.map((link) => link.href))

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const scrollToSection = (href: string) => {
    document.querySelector(`#${href}`)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false) // Close mobile menu after clicking
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (mobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          scrolled ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center md:justify-center">
            {/* Mobile Menu Button */}
            <div className="md:hidden mobile-menu-container">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3 md:gap-4 px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className={cn(
                    "px-3 py-2 rounded-full text-sm md:text-base transition-all duration-200 relative group whitespace-nowrap",
                    activeSection === link.href
                      ? "text-white font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-[#651C32] dark:hover:text-[#651C32]",
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full -z-10 transition-all duration-200",
                      activeSection === link.href
                        ? "bg-[#651C32] opacity-100"
                        : "opacity-0 bg-gray-100 dark:bg-gray-700 group-hover:opacity-100",
                    )}
                  />
                </a>
              ))}
              <div className="ml-3 md:ml-4">
                <ModeToggle />
              </div>
            </nav>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden">
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl mobile-menu-container">
            <div className="flex flex-col pt-20 px-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={`#${link.href}`}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base transition-all duration-200 relative",
                      activeSection === link.href
                        ? "bg-[#651C32] text-white font-medium"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
