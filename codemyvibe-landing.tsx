import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Moon, Play, User, Mail, Users } from "lucide-react"

export default function CodeMyVibe() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-md">
            C
          </div>
          <span className="font-bold text-lg">CodeMyVibe</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/projects" className="text-sm font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
          <button className="rounded-full w-8 h-8 flex items-center justify-center">
            <Moon className="w-5 h-5" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-sm">Welcome to CodeMyVibe</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Bringing Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Visions
              </span>{" "}
              to Life with Code
            </h1>
            <p className="text-lg text-gray-700">Vibe coding. Your intuition, your language, your code</p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
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
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-200 rounded-lg opacity-30 blur-xl"></div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              width={500}
              height={400}
              alt="Code editor screenshot"
              className="rounded-lg relative z-10 w-full"
            />
            <div className="absolute bottom-0 left-0 h-2 w-16 bg-purple-500 rounded-full"></div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-gray-50 rounded-lg p-8 relative border-2 border-gradient-to-r from-purple-300 to-purple-500 shadow-md">
            <div className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 absolute top-4 left-6 font-serif">
              "
            </div>
            <div className="space-y-4 pt-6">
              <p className="text-gray-700 font-medium">
                "There's a new kind of coding I call 'vibe coding,' where you fully give in to the vibes, embrace
                exponentials, and forget that the code even exists. It's possible because the LLMs ... are getting too
                good."
              </p>
              <p className="text-gray-700 font-medium">
                "I just see stuff, say stuff, run stuff, and copy-paste stuff, and it mostly works."
              </p>
              <p className="text-sm text-gray-500 italic">- Andrej Karpathy</p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-sm flex items-center gap-1">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-gray-600 mb-8">Explore some of my recent work and creative coding experiments.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-48 bg-purple-900">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Vibe Music Visualizer"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold">Vibe Music Visualizer</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  An interactive music visualizer that responds to audio frequencies with vibrant animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">Web Audio API</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">Canvas</span>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <User className="w-3 h-3" /> Demo
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <Code className="w-3 h-3" /> Code
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <Play className="w-3 h-3" /> Video
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mood Board Generator"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold">Mood Board Generator</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  AI-powered tool that creates personalized mood boards based on text descriptions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">OpenAI</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">Tailwind CSS</span>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <User className="w-3 h-3" /> Demo
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <Code className="w-3 h-3" /> Code
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <Play className="w-3 h-3" /> Video
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-48 bg-blue-100">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Interactive Portfolio"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold">Interactive Portfolio</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  A dynamic portfolio website with playful animations and interactive elements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">Three.js</span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">GSAP</span>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <User className="w-3 h-3" /> Demo
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <Code className="w-3 h-3" /> Code
                  </Link>
                  <Link href="#" className="flex items-center gap-1 text-xs border rounded px-2 py-1">
                    <Play className="w-3 h-3" /> Video
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">Let's Connect</span>
              </div>
              <h2 className="text-3xl font-bold">
                Have a project in mind?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-extrabold">
                  Let's bring it to life
                </span>
              </h2>
              <p className="text-gray-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-gray-600">hello@codemyvibe.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Users className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Social</p>
                    <p className="text-sm text-gray-600">@codemyvibe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-medium mb-4">Project Request</h3>
              <p className="text-sm text-gray-600 mb-6">Fill out the form below to discuss your project needs.</p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Name
                  </label>
                  <input id="name" type="text" placeholder="Your name" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email
                  </label>
                  <input id="email" type="email" placeholder="Your email" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label htmlFor="project-type" className="block text-sm mb-1">
                    Project Type
                  </label>
                  <div className="relative">
                    <select id="project-type" className="w-full p-2 border rounded-md appearance-none" defaultValue="">
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="design">UI/UX Design</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project"
                    className="w-full p-2 border rounded-md"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-purple-400 to-purple-700 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shadow-md">
                  C
                </div>
                <span className="font-bold">CodeMyVibe</span>
              </Link>
              <p className="text-sm text-gray-600">Creating vibrant, innovative projects with a unique coding style.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Links</h3>
              <nav className="grid gap-2">
                <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">
                  Projects
                </Link>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Code className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <ExternalLink className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2025 CodeMyVibe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

