import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export const metadata = {
  title: "About | Shakur Abdullah",
  description: "Learn about Shakur Abdullah's journey in deep science and technology",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main className="container mx-auto px-4 py-12 mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Back navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          {/* Profile header */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-32 h-32 md:w-48 md:h-48 relative overflow-hidden rounded-full border-4 border-purple-100 dark:border-purple-900 shadow-lg mx-auto md:mx-0">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center text-white text-4xl font-bold">
                S
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 dark:text-white">Shakur Abdullah</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Deep Science & Technology Enthusiast</p>
              <p className="text-gray-700 dark:text-gray-400 max-w-2xl mb-4">
                Bridging the gap between scientific discoveries and real-world applications with over 17 years of experience in deep science.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="mailto:contact@example.com"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="prose prose-purple max-w-none dark:prose-invert prose-headings:text-purple-700 dark:prose-headings:text-purple-400 prose-p:mb-6 prose-headings:mt-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About Shakur Abdullah: Bridging Science and Real-World Impact</h2>
            <p className="text-lg leading-relaxed mb-8">
              I'm Shakur Abdullah, with over 17 years in deep science. My passion lies in transforming complex scientific discoveries into practical solutions that benefit people's lives.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">My Path: From Discovery to Development</h3>
            <p className="text-lg leading-relaxed mb-8">
              My journey began in research labs at GeneDx and CosmosID, where I worked in next-generation sequencing and bioinformatics. I developed lab procedures, optimized protocols, and collaborated with software developers to create necessary tools. This hands-on experience provided me with essential "under the hood" knowledge that proved valuable throughout my career.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              At Imperial College London, I managed large-scale sequencing projects, mentored students, and programmed liquid handling robots. During this time, I recognized technology's potential to transform healthcare—a vision I became determined to help fulfill.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Following my entrepreneurial instincts, I co-founded New Motion Labs and Eatrics. These ventures taught me about fundraising, product development, and market research. More than just building businesses, these experiences cemented my passion for commercializing scientific breakthroughs.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Recently at EzBiome and Neolmmune Tech, I've focused on technology transfer—developing strategies to move innovations from labs to practical applications. This work involves evaluating discoveries, licensing technologies, communicating research findings, and negotiating strategic agreements.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">My Driving Force</h3>
            <p className="text-lg leading-relaxed mb-8">
              What consistently motivates me is connecting science and business. I believe combining scientific understanding with business acumen can unlock innovative solutions. I strive to create bridges that help scientific advancements reach people and improve their wellbeing. For me, the greatest reward is seeing scientific progress translate into tangible benefits for individuals and society.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Let's Connect</h3>
            <p className="text-lg leading-relaxed">
              I'm eager to connect with others passionate about deep science and innovation, especially those working at the science-business intersection. If you're involved in technology transfer, deep science entrepreneurship, or healthcare innovation, please reach out!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-purple-50 dark:bg-purple-900/20 p-8 rounded-lg border border-purple-100 dark:border-purple-800">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Ready to discuss your ideas?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm always open to exploring new opportunities and collaborations in the deep science field.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
            >
              Get in touch <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
