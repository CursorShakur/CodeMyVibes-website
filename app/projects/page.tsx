import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projectsData } from "./project-data";
import { ProjectCard } from "../../components/project-card";

export const metadata = {
  title: "Projects | CodeMyVibes",
  description: "Explore my coding projects and creative experiments",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8 mt-16">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Link 
              href="/" 
              className="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Explore my collection of web applications, creative coding experiments, and development tools. Each project represents my passion for coding and design.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm">
            All Projects
          </button>
          <button className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-1.5 rounded-full text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors dark:text-white">
            Web Apps
          </button>
          <button className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-1.5 rounded-full text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors dark:text-white">
            Creative Coding
          </button>
          <button className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-1.5 rounded-full text-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors dark:text-white">
            Tools
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectsData.map((project) => (
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

        {/* Contact CTA */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Looking for a custom project?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Let's discuss your ideas and bring them to life!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
          >
            Get in Touch
          </Link>
        </div>
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
  );
}
