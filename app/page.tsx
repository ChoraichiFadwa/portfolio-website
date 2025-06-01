import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceTimeline from "@/components/experience-timeline"
import SkillsSection from "@/components/skills-section"
import ActivitiesGallery from "@/components/activities-gallery"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projects</h2>
          <ProjectsSection />
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Experience & Education</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Skills & Certifications</h2>
          <SkillsSection />
        </div>
      </section>

      {/* Side Activities */}
      <section id="activities" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Side Activities & Involvements</h2>
          <ActivitiesGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Get in Touch</h2>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
