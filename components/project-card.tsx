"use client";

import Image from "next/image";
import Link from "next/link";
import { Code, Eye, Github, Play, Share2, Twitter, Youtube } from "lucide-react";

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  background?: string;
};

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink = "#",
  codeLink = "#",
  background = "bg-purple-900",
}: ProjectCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className={`relative h-48 ${background}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4">
          <h3 className="text-white font-bold">{title}</h3>
        </div>
        {/* Quick action buttons overlay */}
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={demoLink}
            className="bg-white/90 hover:bg-white p-1.5 rounded-full text-gray-700 hover:text-purple-600 transition-colors"
            title="Preview"
          >
            <Eye className="w-4 h-4" />
          </Link>
          <Link
            href={demoLink}
            className="bg-white/90 hover:bg-white p-1.5 rounded-full text-gray-700 hover:text-purple-600 transition-colors"
            title="Watch Demo"
          >
            <Play className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Link
              href={codeLink}
              className="flex items-center gap-1 text-xs border rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors"
            >
              <Code className="w-3 h-3" /> View Code
            </Link>
            <Link
              href={demoLink}
              className="flex items-center gap-1 text-xs border rounded-full px-3 py-1.5 hover:bg-gray-50 transition-colors"
            >
              <Play className="w-3 h-3" /> Watch Demo
            </Link>
          </div>
          <div className="relative group/share">
            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <div className="absolute right-0 bottom-full mb-2 bg-white shadow-lg rounded-lg p-2 hidden group-hover/share:block z-10 w-36">
              <div className="flex flex-col gap-2 text-sm">
                <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-md">
                  <Twitter className="w-4 h-4 text-blue-400" /> Share on X
                </Link>
                <Link href={codeLink} className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-md">
                  <Github className="w-4 h-4" /> Star on GitHub
                </Link>
                <Link href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-md">
                  <Youtube className="w-4 h-4 text-red-500" /> Watch on YouTube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
