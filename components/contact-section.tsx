"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)

  const formDataToSend = new FormData()
  formDataToSend.append("name", formData.name)
  formDataToSend.append("email", formData.email)
  formDataToSend.append("message", formData.message)

  try {
    const response = await fetch("https://formspree.io/f/xvojwnvl", {
      method: "POST",
      body: formDataToSend,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Optional delay
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } else {
      toast({
        title: "Oops! Something went wrong.",
        description: "Please try again or use alternate contact options.",
      })
    }
  } catch (error) {
    toast({
      title: "Network Error",
      description: "Please check your connection and try again.",
    })
    console.error("Form submission error:", error)
  } finally {
    setIsLoading(false)
  }
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              {/* Lottie Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-12 h-12 text-blue-500 animate-bounce" />
                </div>
              </motion.div>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border"
              >
                <div className="bg-blue-500/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">rahulkumarjha58978@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border"
              >
                <div className="bg-green-500/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+919334417768</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border"
              >
                <div className="bg-purple-500/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone or
                LinkedIn.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
