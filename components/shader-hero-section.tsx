"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { ShaderScene } from "@/components/3d-shader-scene"
import { Simple3DScene } from "@/components/simple-3d-scene"
import { useState, useEffect } from "react"

export function ShaderHeroSection() {
  const [useSimpleScene, setUseSimpleScene] = useState(false)

  useEffect(() => {
    // Fallback to simple scene if shaders fail to load
    const timer = setTimeout(() => {
      setUseSimpleScene(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background with Shaders */}
      <div className="absolute inset-0 z-0">{useSimpleScene ? <Simple3DScene /> : <ShaderScene />}</div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10 z-10 animate-pulse" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm border-blue-500/50 text-blue-400 backdrop-blur-sm bg-background/10"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"
              />
              Available for new opportunities
            </Badge>
          </motion.div>

          {/* Enhanced Name with Shader-like Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold relative"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Rahul Kumar
            </motion.span>
          </motion.h1>

          {/* Glitch Effect Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-semibold text-muted-foreground relative"
          >
            <motion.span
              animate={{
                textShadow: ["0 0 0 transparent", "2px 0 0 #3b82f6, -2px 0 0 #8b5cf6", "0 0 0 transparent"],
              }}
              transition={{
                duration: 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
            >
              Full-Stack Software Developer
            </motion.span>
          </motion.h2>

          {/* Description with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-background/5 p-4 rounded-lg border border-white/10"
          >
            Passionate about creating exceptional digital experiences with modern technologies. Specializing in React,
            Next.js, and Docker.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">View Projects</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg bg-transparent backdrop-blur-sm relative overflow-hidden group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Contact Me</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, color: "hover:text-blue-400" , link:"https://github.com/romeokil"},
              { icon: Linkedin, color: "hover:text-purple-400" ,link:"https://www.linkedin.com/in/rahul-kumar-801167241/"},
              { icon: Mail, color: "hover:text-cyan-400" ,link:"mailto:rahulkumarjha58978@gmail.com"},
            ].map(({ icon: Icon, color,link }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <a href={link} target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${color} transition-all duration-300 backdrop-blur-sm bg-background/10 border border-white/10`}
                >
                  <Icon className="h-6 w-6" />
                </Button>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Holographic Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center pt-4"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(139, 92, 246, 0.7)",
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
            className="text-muted-foreground backdrop-blur-sm bg-background/10 p-2 rounded-full border border-white/10"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
