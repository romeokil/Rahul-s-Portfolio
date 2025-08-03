"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rahul Kumar
            </h3>
            <p className="text-muted-foreground mt-2">Building digital experiences with passion and precision</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href={`https://github.com/romeokil`} target="_blank">
              <Button variant="ghost" size="icon" className="hover:text-blue-400 transition-colors">
              <Github className="h-5 w-5" />
            </Button>
            </a>
            <a href={`https://www.linkedin.com/in/rahul-kumar-801167241/`} target="_blank">
              <Button variant="ghost" size="icon" className="hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Button>
            </a>
            <a href={`mailto:rahulkumarjha58978@gmail.com`} target="_blank">
              <Button variant="ghost" size="icon" className="hover:text-blue-400 transition-colors">
              <Mail className="h-5 w-5" />
            </Button>
            </a>
            
          </div>

          <Separator />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Rahul Kumar. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
