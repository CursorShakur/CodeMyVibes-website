import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Moon, Play, User, Mail, Users, Share2, Github, Twitter, Youtube, Eye } from "lucide-react"
import { AudioVisualizer, CodeTypingEffect } from "./components/hero-animations"

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
            {/* Project 1 */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 bg-purple-900">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Vibe Music Visualizer"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold">Vibe Music Visualizer</h3>
                </div>
                {/* Quick action buttons overlay */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="#" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" title="Preview">
                    <Eye className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" title="Watch Demo">
                    <Play className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  An interactive music visualizer that responds to audio frequencies with vibrant animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">React</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">Web Audio API</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">Canvas</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Link href="#" className="flex items-center gap-1 text-xs border dark:border-gray-700 rounded-full px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Code className="w-3 h-3" /> View Code
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-xs border dark:border-gray-700 rounded-full px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Play className="w-3 h-3" /> Watch Demo
                    </Link>
                  </div>
                  <div className="relative group/share">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 hidden group-hover/share:block z-10 w-36 border dark:border-gray-700">
                      <div className="flex flex-col gap-2 text-sm">
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Twitter className="w-4 h-4 text-blue-400" /> Share on X
                        </Link>
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Github className="w-4 h-4" /> Star on GitHub
                        </Link>
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Youtube className="w-4 h-4 text-red-500" /> Watch on YouTube
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mood Board Generator"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold">Mood Board Generator</h3>
                </div>
                {/* Quick action buttons overlay */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="#" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" title="Preview">
                    <Eye className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" title="Watch Demo">
                    <Play className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  AI-powered tool that creates personalized mood boards based on text descriptions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">Next.js</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">OpenAI</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Link href="#" className="flex items-center gap-1 text-xs border dark:border-gray-700 rounded-full px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Code className="w-3 h-3" /> View Code
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-xs border dark:border-gray-700 rounded-full px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Play className="w-3 h-3" /> Watch Demo
                    </Link>
                  </div>
                  <div className="relative group/share">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 hidden group-hover/share:block z-10 w-36 border dark:border-gray-700">
                      <div className="flex flex-col gap-2 text-sm">
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Twitter className="w-4 h-4 text-blue-400" /> Share on X
                        </Link>
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Github className="w-4 h-4" /> Star on GitHub
                        </Link>
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Youtube className="w-4 h-4 text-red-500" /> Watch on YouTube
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border dark:border-gray-700 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 bg-blue-100">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Interactive Portfolio"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold">Interactive Portfolio</h3>
                </div>
                {/* Quick action buttons overlay */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="#" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" title="Preview">
                    <Eye className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 p-1.5 rounded-full text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" title="Watch Demo">
                    <Play className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  A dynamic portfolio website with playful animations and interactive elements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">TypeScript</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">Three.js</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded dark:text-gray-300">GSAP</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Link href="#" className="flex items-center gap-1 text-xs border dark:border-gray-700 rounded-full px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Code className="w-3 h-3" /> View Code
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-xs border dark:border-gray-700 rounded-full px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Play className="w-3 h-3" /> Watch Demo
                    </Link>
                  </div>
                  <div className="relative group/share">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-gray-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <div className="absolute right-0 bottom-full mb-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 hidden group-hover/share:block z-10 w-36 border dark:border-gray-700">
                      <div className="flex flex-col gap-2 text-sm">
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Twitter className="w-4 h-4 text-blue-400" /> Share on X
                        </Link>
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Github className="w-4 h-4" /> Star on GitHub
                        </Link>
                        <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md dark:text-gray-300">
                          <Youtube className="w-4 h-4 text-red-500" /> Watch on YouTube
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
