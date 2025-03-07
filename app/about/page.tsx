import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 mt-16">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-8">
            <p className="text-sm">About Me</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Bridging{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Science
              </span>{" "}
              and Real-World Impact
            </h1>
            <div className="flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-100 shadow-md">
                <Image 
                  src="/placeholder.svg?height=128&width=128" 
                  alt="Shakur Abdullah" 
                  width={128} 
                  height={128}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                View My Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto prose">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm Shakur Abdullah. My career has been an exciting 17+ year journey through the dynamic world of life sciences. 
              What drives me is turning complex scientific discoveries into practical solutions that make a difference in people's lives. 
              Recently, I've ventured into the world of vibe coding just for fun – embracing intuitive programming and letting creativity flow. 
              It's been a refreshing way to blend my technical knowledge with a more relaxed, intuitive approach to building digital experiences.
            </p>
          </div>
        </section>
        
        {/* Career Path Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">My Path: From Discovery to Development</h2>
            
            <div className="space-y-16">
              {/* Research Foundations - Left Side */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2 flex md:justify-end">
                  <div className="max-w-xs">
                    <h3 className="font-semibold text-xl mb-2">Research Foundations</h3>
                    <p className="text-gray-700 mb-4">
                      My story began in research labs at GeneDx and CosmosID, exploring next-generation sequencing and bioinformatics analysis. 
                      I developed new lab procedures, tweaked protocols, and collaborated with developers to create essential tools. This hands-on work 
                      gave me an "under the hood" understanding that became invaluable later.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:flex justify-center items-start">
                  <div className="w-1 bg-purple-200 h-full"></div>
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-purple-400 transform -translate-x-1/2"></div>
                </div>
                
                <div className="md:col-span-2"></div>
              </div>
              
              {/* Academic Exploration - Right Side */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2"></div>
                
                <div className="hidden md:flex justify-center items-start">
                  <div className="w-1 bg-purple-200 h-full"></div>
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-purple-400 transform -translate-x-1/2"></div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="max-w-xs">
                    <h3 className="font-semibold text-xl mb-2">Academic Exploration</h3>
                    <p className="text-gray-700 mb-4">
                      At Imperial College London, I focused on human disease genetics, managing sequencing projects and guiding student research. 
                      I even programmed liquid handling robots, diving into automation. During this time, I saw technology's potential to revolutionize 
                      healthcare and became eager to help realize it.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Entrepreneurial Ventures - Left Side */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2 flex md:justify-end">
                  <div className="max-w-xs">
                    <h3 className="font-semibold text-xl mb-2">Entrepreneurial Ventures</h3>
                    <p className="text-gray-700 mb-4">
                      My entrepreneurial spirit led me to co-found New Motion Labs and Eatrics. These ventures taught me about fundraising, 
                      product development, and market research. More than just business-building, these experiences cemented my passion for 
                      bringing scientific breakthroughs to the world through innovative ventures.
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:flex justify-center items-start">
                  <div className="w-1 bg-purple-200 h-full"></div>
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-purple-400 transform -translate-x-1/2"></div>
                </div>
                
                <div className="md:col-span-2"></div>
              </div>
              
              {/* Strategic Partnerships - Right Side */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2"></div>
                
                <div className="hidden md:flex justify-center items-start">
                  <div className="w-1 bg-purple-200 h-full"></div>
                  <div className="absolute top-0 w-4 h-4 rounded-full bg-purple-400 transform -translate-x-1/2"></div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="max-w-xs">
                    <h3 className="font-semibold text-xl mb-2">Strategic Partnerships</h3>
                    <p className="text-gray-700 mb-4">
                      Recently at EzBiome and Neolmmune Tech, I've focused on building strategic partnerships to bridge the gap between 
                      innovative research and real-world applications. This involves evaluating promising discoveries, fostering collaborations, 
                      and creating pathways for technologies to reach their full potential in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Driving Force Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-8 relative border border-purple-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">My Driving Force</h2>
              <p className="text-gray-700 mb-6">
                My passion lies in connecting science with business to create innovative solutions that improve lives. 
                By merging scientific understanding with business acumen, I build bridges that help technological advancements 
                reach those who need them most. The ultimate reward? Seeing scientific progress translate into real-world impact.
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </section>
        
        {/* Connect Section */}
        <section className="container mx-auto px-4 py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-700 mb-8">
              Whether you're interested in life science innovation, technology transfer, or simply share my enthusiasm 
              for where science and business intersect, I'd love to connect. Reach out and let's explore opportunities together!
            </p>
            
            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
                <Linkedin className="w-6 h-6 text-blue-600" />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub Profile</span>
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
                <Twitter className="w-6 h-6 text-blue-400" />
                <span className="sr-only">Twitter Profile</span>
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all">
                <Mail className="w-6 h-6 text-purple-500" />
                <span className="sr-only">Email Contact</span>
              </a>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
            >
              Send Me a Message <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 