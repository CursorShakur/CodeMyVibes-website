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
    id: "vibe-music-visualizer",
    title: "Vibe Music Visualizer",
    description: "An interactive music visualizer that responds to audio frequencies with vibrant animations.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Web Audio API", "Canvas"],
    demoLink: "#",
    codeLink: "https://github.com/example/vibe-music-visualizer",
    background: "bg-purple-900",
    featured: true
  },
  {
    id: "mood-board-generator",
    title: "Mood Board Generator",
    description: "AI-powered mood board generator that creates beautiful visual compositions based on text prompts.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "TailwindCSS", "OpenAI API"],
    demoLink: "#",
    codeLink: "https://github.com/example/mood-board-generator",
    background: "bg-blue-900",
    featured: true
  },
  {
    id: "code-playground",
    title: "Interactive Code Playground",
    description: "Browser-based coding environment with real-time collaboration and execution capabilities.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["JavaScript", "WebSockets", "Monaco Editor"],
    demoLink: "#",
    codeLink: "https://github.com/example/code-playground",
    background: "bg-emerald-900",
    featured: true
  },
  {
    id: "beat-maker",
    title: "Beat Maker Studio",
    description: "Create and share beats with this intuitive online drum machine and sequencer.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Tone.js", "Firebase"],
    demoLink: "#",
    codeLink: "https://github.com/example/beat-maker",
    background: "bg-red-900",
    featured: false
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    description: "Create a professional developer portfolio in minutes with customizable templates.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "TailwindCSS", "MDX"],
    demoLink: "#",
    codeLink: "https://github.com/example/portfolio-generator",
    background: "bg-indigo-900",
    featured: false
  },
  {
    id: "code-snippets",
    title: "Code Snippets Library",
    description: "Collection of reusable code snippets with syntax highlighting and categories.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["TypeScript", "React", "Prisma"],
    demoLink: "#",
    codeLink: "https://github.com/example/code-snippets",
    background: "bg-cyan-900",
    featured: false
  },
  {
    id: "algorithmic-art",
    title: "Algorithmic Art Generator",
    description: "Create beautiful generative art using mathematical algorithms and user-defined parameters.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["p5.js", "JavaScript", "Canvas"],
    demoLink: "#",
    codeLink: "https://github.com/example/algorithmic-art",
    background: "bg-amber-900",
    featured: false
  },
  {
    id: "voice-coder",
    title: "Voice Coder Assistant",
    description: "Code using your voice with this speech-to-code conversion tool with syntax support.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Web Speech API", "CodeMirror"],
    demoLink: "#",
    codeLink: "https://github.com/example/voice-coder",
    background: "bg-violet-900",
    featured: false
  },
  {
    id: "augmented-coding",
    title: "Augmented Coding",
    description: "An AR experience that overlays code visualization and analytics on your physical workspace.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Three.js", "WebXR", "TypeScript"],
    demoLink: "#",
    codeLink: "https://github.com/example/augmented-coding",
    background: "bg-fuchsia-900",
    featured: false
  }
];
