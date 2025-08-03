"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ShaderHeroSection } from "@/components/shader-hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"
import { TechStackSection } from "@/components/tech-stack-section"
import { GitHubHeatmap } from "@/components/github-heatmap"
import { ShaderBackground } from "@/components/shader-background"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
      <div className="relative min-h-screen bg-background">
        {/* Shader Background */}
        <ShaderBackground />

        {/* Enhanced Progress Bar with Shader Effect */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 z-50 origin-left" style={{ scaleX }}>
          <div className="w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 relative overflow-hidden">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </div>
        </motion.div>

        <Navigation />

        <main>
          <ShaderHeroSection />
          <ExperienceSection />
          <TechStackSection />
          <GitHubHeatmap />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
