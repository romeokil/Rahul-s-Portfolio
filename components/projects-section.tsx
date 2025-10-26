"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title:"DSASutra",
    description:"DSA Expert RAG Agent powered by Gemini. It uses LangChain in a Node.js environment to manage document chunking, embedding, and query retrieval from a Pinecone vector database, ensuring precise, context-aware answer",
    image:"https://play-lh.googleusercontent.com/d0lrhfyQBn7hMremTxji9pEv3T08uNRANY1iB1rUfIRqONNbDlVlnB2x-jbqqqXsSS-CLU8hSyST2_o4F_M8Vbo=w600-h300-pc0xffffff-pd",
    technologies:["NodeJS","Langchain","Pinecone","Gemini AI"],
    github:"https://github.com/romeokil/ai-agent-6",
    demo:"https://github.com/romeokil/ai-agent-6",
    featured:true
  },
  {
    title: "MausamMitra- AI Weather and Travel Assistant",
    description:
      "An AI-powered weather and travel assistant web application that provides real-time weather updates, travel recommendations, and personalized itineraries based on user preferences. Integrated geolocation services to offer location-specific weather forecasts and travel tips.",
    image: "https://dq8l4o3au0fto.cloudfront.net/images/Article_Images/ImageForArticle_220_17095893410122635.jpg",
    technologies: ["ReactJS", "Tailwind CSS", "NodeJS", "Geolocation"],
    github: "https://github.com/romeokil/ai-agent-2",
    demo: "https://ai-agent-2-h19p.onrender.com/",
    featured: true,
  },
  {
    title: "Job-Portal Management System",
    description:
      "Developed a full-featured MERN stack job portal enabling role-based access for applicants and recruiters. Applicants can view, apply, and track job statuses, while recruiters can manage and update applications. Integrated Cloudinary to handle profile images and resumes efficiently.",
    image: "https://tse1.mm.bing.net/th/id/OIP.CJWM5apDQbJUB_hCq_9MpQHaGJ?pid=Api&P=0&h=180",
    technologies: ["ReactJS", "Tailwind CSS", "NodeJS", "Cloudinary", "MongoDB"],
    github: "https://github.com/romeokil/job-portal",
    demo: "https://job-portal-6x2z.onrender.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Designed a user-friendly task management app featuring light/dark modes and JWT-based authorization. Leveraged Context API for managing user sessions, and used Tailwind CSS to ensure responsiveness across devices",
    image: "https://tse2.mm.bing.net/th/id/OIP.JqRBTydEfD7r4tKAYCfOvQHaDz?pid=Api&P=0&h=180",
    technologies: ["ReactJS", "NodeJS", "Tailwind Css", "MongoDB", "Docker"],
    github: "https://github.com/romeokil/mern-todo",
    demo: "https://mern-todo-wmhj.onrender.com",
    featured: true,
  },
  {
    title: "Full Stack Blog Application",
    description: "Built a secure and responsive blogging platform using MERN stack. Integrated JWT for user authentication and Context API for smooth state management. Optimized performance with RESTful APIs and reduced component re-rendering to enhance user experience.",
    image: "https://tse4.mm.bing.net/th/id/OIP.H0GEkaOcnGd6TV3UKrKZPgHaE7?pid=Api&P=0&h=180",
    technologies: ["ReactJS", "TailwindCss", "JWT", "NodeJS", "ExpressJS"],
    github: "https://github.com/romeokil/mern-blog",
    demo: " https://mern-blog-1-luct.onrender.com/",
    featured: true,
  },
  {
    title: "Library Management System",
    description: "Developed a Centralised Library Where Any Book Can be Done By User, All the CRUD Operations are happening",
    image: "https://tse2.mm.bing.net/th/id/OIP.EjQDxjCf8OvHg75LnbVD8wHaEO?pid=Api&P=0&h=180",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/romeokil/mern-book",
    demo: "https://mern-book-blw9.onrender.com",
    featured: false,
  },
  {
    title: "Image Generator App",
    description: "Responsive portfolio website with modern design, animations, and contact form integration.",
    image: "https://tse3.mm.bing.net/th/id/OIP.2xdg4bbujFTy1_neQs-zVwHaHa?pid=Api&P=0&h=180",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/romeokil/image-generator-app",
    demo: " https://romeokil.github.io/image-generator-app/",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500/90 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank">
                        <Button size="sm" variant="secondary" className="flex-1">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                      <a href={project.demo} target="_blank">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-sm mt-2">{project.description}</CardDescription>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <a href={project.github} target="_blank">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Github className="h-4 w-4" />
                        </Button>
                        </a>
                        <a href={project.demo} target="_blank">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href={`https://github.com/romeokil`}>
            <Button
            variant="outline"
            size="lg"
            className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
          </a>
          
        </motion.div>
      </div>
    </section>
  )
}
