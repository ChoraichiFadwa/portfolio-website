import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsSection from "@/components/skills-section"
import ActivitiesGallery from "@/components/activities-gallery"
import ContactSection from "@/components/contact-section"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">John.Dev</span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <Link href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-blue-600 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#activities" className="hover:text-blue-600 transition-colors">
              Activities
            </Link>
            <Link href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-blue-600 transition-colors" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <ProjectsSection />
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Certifications</h2>
          <SkillsSection />
        </div>
      </section>

      {/* Side Activities */}
      <section id="activities" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Side Activities & Involvements</h2>
          <ActivitiesGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground">
                Experience
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground">
                Skills
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
              <Link href="/resume.pdf" className="text-sm text-muted-foreground hover:text-foreground">
                Resume
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
