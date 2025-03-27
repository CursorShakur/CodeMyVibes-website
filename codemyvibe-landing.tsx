import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Moon, Play, User, Mail, Users, Share2, Github, Twitter, Youtube, Eye } from "lucide-react"
import { AudioVisualizer, CodeTypingEffect } from "./components/hero-animations"
import { ProjectCard } from "@/components/project-card"
import { projectsData } from "@/app/projects/project-data"

export default function CodeMyVibe() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 mt-16">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-8">
            <p className="text-sm dark:text-gray-300">Welcome to CodeMyVibe</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight dark:text-white">
              Bringing Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Visions
              </span>{" "}
              to Life with Code
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">Vibe coding. Your intuition, your language, your code</p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors dark:text-white"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Audio Visualizer */}
          <AudioVisualizer />
          
          {/* Code Typing Animation */}
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -inset-4 bg-purple-200 dark:bg-purple-700/40 rounded-lg opacity-30 blur-xl"></div>
            <CodeTypingEffect />
            <div className="absolute bottom-0 left-0 h-2 w-16 bg-purple-500 rounded-full"></div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 relative border-2 border-gradient-to-r from-purple-300 to-purple-500 shadow-md dark:border-purple-700/50">
            <div className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 absolute top-4 left-6 font-serif">
              "
            </div>
            <div className="space-y-4 pt-6">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                "There's a new kind of coding I call 'vibe coding,' where you fully give in to the vibes, embrace
                exponentials, and forget that the code even exists. It's possible because the LLMs ... are getting too
                good."
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                "I just see stuff, say stuff, run stuff, and copy-paste stuff, and it mostly works."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">- Andrej Karpathy</p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold dark:text-white">Featured Projects</h2>
            <Link href="/projects" className="text-sm flex items-center gap-1 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Explore some of my recent work and creative coding experiments.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {projectsData
              .filter(project => project.featured)
              .slice(0, 3)
              .map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                  background={project.background}
                />
              ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg my-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">How I Create Vibes</h2>
            <p className="text-gray-700 dark:text-gray-300">
              From concept to code, I bring creative projects to life using intuitive design principles and innovative
              technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4">
                <User className="text-purple-600 dark:text-purple-400 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Personal Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No cookie-cutter solutions here. I take the time to understand your vision and create a custom experience
                that matches your unique style.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4">
                <Code className="text-purple-600 dark:text-purple-400 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Creative Coding</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Combining technical precision with artistic creativity, I write code that not only functions flawlessly
                but also delivers an engaging experience.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-purple-600 dark:text-purple-400 w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-white">Collaborative Process</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in open communication and collaboration throughout the development process, ensuring the final
                product aligns perfectly with your expectations.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Ready to Turn Your Vision Into Code?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Let's collaborate and create something unique together. Whether you have a specific project in mind or need help
              exploring possibilities, I'm here to bring your ideas to life.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors dark:text-white"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-md">
                C
              </div>
              <span className="font-bold text-lg dark:text-white">CodeMyVibes</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} CodeMyVibes. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
