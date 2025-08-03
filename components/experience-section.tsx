"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    id: "work",
    title: "Work Experience",
    items: [
      {
        title: "Full-Stack Developer Intern",
        company: "Unified Mentor Private Limited",
        location: "Bengaluru, Remote",
        period: "2024-2025",
        description:
          "Led development of scalable web applications using React, Next.js, and Node.js. Mentored junior developers and implemented Robust Backend API's Infrastructure",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB","Docker"],
      },
      {
        title: "Frontend Developer",
        company: "Codesoft Technologies",
        location: "Bengaluru, Remote",
        period: "2022-2023",
        description:
          "Developed client websites and learned modern web development practices. Gained experience in Frontend development.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
      },
    ],
  },
  {
    id: "education",
    title: "Education",
    items: [
      {
        title: "Bachelor of Engineering in Computer Science",
        company: "JSS Academy of Technical Education,Bengaluru",
        location: "Bengaluru, Karnataka",
        period: "2021-2025",
        description: "Graduated , Focused on software engineering, algorithms, and data structures.",
        technologies: ["Java", "Python", "C++", "Data Structures", "Algorithms"],
      },
      {
        title: "XII th Board",
        company: "DAV MODEL SCHOOL,CFRI",
        location: "Dhanbad, Jharkhand",
        period: "2018-2019",
        description: "Completed My 12th Board Having an Aggregate of 71.2%.",
        technologies: ["PCM", "English","Computer Science"]
      },
      {
        title: "Xth Board",
        company: "DAV MODEL SCHOOL,CFRI",
        location: "Dhanbad, Jharkhand",
        period: "2016-2017",
        description: "Completed My 10th Board Having an Aggregate of 91.2%.",
        technologies: ["Science", "English","Computer"]
      },
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and continuous learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="work">Work Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            {experiences.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 text-base">
                              <Building className="h-4 w-4" />
                              {item.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col md:items-end gap-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {item.period}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
