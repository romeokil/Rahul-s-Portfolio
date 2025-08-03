"use client"
import {useState,useEffect} from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, GitCommit, Star, GitFork } from "lucide-react"

// Mock data for GitHub contributions (in a real app, you'd fetch this from GitHub API)

export function GitHubHeatmap() {
  const GITHUB_USERNAME="romeokil"
const [repoStats, setRepoStats] = useState({
    publicRepos: 0,
    totalStars: 0,
    totalForks: 0,
  })

  useEffect(() => {
    const fetchGithubData = async () => {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      const data = await res.json()

      let stars = 0
      let forks = 0

      data.forEach((repo: any) => {
        stars += repo.stargazers_count
        forks += repo.forks_count
      })

      setRepoStats({
        publicRepos: data.length,
        totalStars: stars,
        totalForks: forks,
      })
      console.log("Repositories",data.length);
      console.log("Stars",stars);
      console.log("Forks",forks);
    }

    fetchGithubData()
  }, [])


  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My coding journey and contribution patterns over the past year
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mb-8"
          >

            <Card className="text-center">
              <CardContent className="p-4">
                <Github className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold">{repoStats.publicRepos}</div>
                <div className="text-xs text-muted-foreground">Repositories</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-4">
                <Star className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                <div className="text-2xl font-bold">{repoStats.totalStars}</div>
                <div className="text-xs text-muted-foreground">Stars</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-4">
                <GitFork className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                <div className="text-2xl font-bold">{repoStats.totalForks}</div>
                <div className="text-xs text-muted-foreground">Forks</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Heatmap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Github className="h-5 w-5" />
                  Contribution Graph
                </CardTitle>
                <CardDescription>Contributions in the Year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto flex justify-center items-center">
                  <img src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">More Information...</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex justify-center items-center" >
                    <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}`} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
