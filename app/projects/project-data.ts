export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  background?: string;
  featured?: boolean;
};

export const projectsData: Project[] = [
  {
    id: "fakepersonalwebsite",
    title: "Personal Website Template",
    description: "A clean and modern personal website template built with HTML and CSS, featuring a responsive design and smooth scroll animations.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    demoLink: "https://cursorshakur.github.io/fakepersonalwebsite",
    codeLink: "https://github.com/CursorShakur/fakepersonalwebsite",
    background: "bg-teal-900",
    featured: true
  },
  {
    id: "codemyvibes-website",
    title: "CodeMyVibes Website",
    description: "A modern portfolio website built with Next.js and TailwindCSS, featuring dark mode, responsive design, and smooth animations.",
    image: "/codemyvibes-home.png",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "React"],
    demoLink: "https://codemyvibes.vercel.app",
    codeLink: "https://github.com/CursorShakur/CodeMyVibes-website",
    background: "bg-purple-900",
    featured: true
  },
  {
    id: "vibe-music-visualizer",
    title: "Vibe Music Visualizer",
    description: "An interactive music visualizer that responds to audio frequencies with vibrant animations and real-time effects.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Web Audio API", "Canvas", "JavaScript"],
    demoLink: "#",
    codeLink: "https://github.com/CursorShakur/vibe-music-visualizer",
    background: "bg-blue-900",
    featured: true
  },
  {
    id: "ai-powered-portfolio",
    title: "AI-Powered Portfolio",
    description: "A portfolio website generator that uses AI to create personalized content and styling based on user preferences.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript"],
    demoLink: "#",
    codeLink: "https://github.com/CursorShakur/ai-powered-portfolio",
    background: "bg-emerald-900",
    featured: true
  },
  {
    id: "vibe-code-editor",
    title: "Vibe Code Editor",
    description: "A web-based code editor with real-time collaboration features and AI-powered code suggestions.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Socket.io", "Monaco Editor", "Node.js"],
    demoLink: "#",
    codeLink: "https://github.com/CursorShakur/vibe-code-editor",
    background: "bg-indigo-900",
    featured: false
  },
  {
    id: "creative-coding-experiments",
    title: "Creative Coding Experiments",
    description: "A collection of creative coding experiments exploring generative art, animations, and interactive experiences.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["p5.js", "Three.js", "WebGL", "JavaScript"],
    demoLink: "#",
    codeLink: "https://github.com/CursorShakur/creative-coding-experiments",
    background: "bg-violet-900",
    featured: false
  },
  {
    id: "vibe-chat",
    title: "Vibe Chat",
    description: "A real-time chat application with emoji reactions, file sharing, and thread conversations.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Firebase", "TypeScript", "TailwindCSS"],
    demoLink: "#",
    codeLink: "https://github.com/CursorShakur/vibe-chat",
    background: "bg-fuchsia-900",
    featured: false
  }
];
