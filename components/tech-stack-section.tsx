"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Cloud, Smartphone, Wrench, Server } from "lucide-react"

const techStacks = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Code className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Next.js", level: 90, color: "bg-gray-800" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
      { name: "Vue.js", level: 75, color: "bg-green-500" },
      { name: "Framer Motion", level: 80, color: "bg-purple-500" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", level: 90, color: "bg-green-600" },
      { name: "Express.js", level: 85, color: "bg-gray-700" },
      { name: "Python", level: 82, color: "bg-yellow-500" },
      { name: "GraphQL", level: 78, color: "bg-pink-500" },
      { name: "REST APIs", level: 88, color: "bg-orange-500" },
      { name: "Socket.io", level: 75, color: "bg-indigo-500" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: <Database className="h-6 w-6" />,
    color: "from-purple-500 to-violet-500",
    technologies: [
      { name: "PostgreSQL", level: 85, color: "bg-blue-700" },
      { name: "MongoDB", level: 80, color: "bg-green-700" },
      { name: "Redis", level: 70, color: "bg-red-500" },
      { name: "Supabase", level: 88, color: "bg-green-600" },
      { name: "Firebase", level: 82, color: "bg-yellow-600" },
      { name: "Prisma", level: 75, color: "bg-indigo-600" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "AWS", level: 80, color: "bg-orange-600" },
      { name: "Vercel", level: 92, color: "bg-black" },
      { name: "Docker", level: 75, color: "bg-blue-600" },
      { name: "GitHub Actions", level: 78, color: "bg-gray-800" },
      { name: "Netlify", level: 85, color: "bg-teal-600" },
      { name: "Kubernetes", level: 65, color: "bg-blue-700" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: <Smartphone className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    technologies: [
      { name: "React Native", level: 80, color: "bg-blue-500" },
      { name: "Expo", level: 85, color: "bg-black" },
      { name: "Flutter", level: 70, color: "bg-blue-400" },
      { name: "PWA", level: 88, color: "bg-purple-500" },
      { name: "Ionic", level: 65, color: "bg-blue-600" },
      { name: "Capacitor", level: 72, color: "bg-indigo-500" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    icon: <Wrench className="h-6 w-6" />,
    color: "from-indigo-500 to-blue-500",
    technologies: [
      { name: "Git", level: 95, color: "bg-orange-600" },
      { name: "VS Code", level: 98, color: "bg-blue-600" },
      { name: "Figma", level: 85, color: "bg-purple-500" },
      { name: "Postman", level: 90, color: "bg-orange-500" },
      { name: "Jest", level: 80, color: "bg-red-600" },
      { name: "Webpack", level: 75, color: "bg-blue-700" },
    ],
  },
]

export function TechStackSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 h-auto p-1">
              {techStacks.map((stack) => (
                <TabsTrigger
                  key={stack.id}
                  value={stack.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${stack.color} text-white`}>{stack.icon}</div>
                  <span className="text-xs font-medium">{stack.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {techStacks.map((stack, stackIndex) => (
              <TabsContent key={stack.id} value={stack.id} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stack.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-lg">{tech.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {tech.level}%
                            </Badge>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-muted rounded-full h-2 mb-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className={`h-2 rounded-full ${tech.color} relative overflow-hidden`}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </motion.div>
                          </div>

                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Proficiency</span>
                            <span>{tech.level}%</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
