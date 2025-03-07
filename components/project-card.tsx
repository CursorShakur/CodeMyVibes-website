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
    <div className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className={`relative aspect-[16/9] overflow-hidden ${background}`}>
        <Image
          src={image}
          alt={title}
          width={1200}
          height={675}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          quality={100}
          priority={true}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={demoLink}
            className="bg-white/95 hover:bg-white dark:bg-gray-800/95 p-2 rounded-lg shadow-lg backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            title="Preview"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <Link
            href={demoLink}
            className="bg-white/95 hover:bg-white dark:bg-gray-800/95 p-2 rounded-lg shadow-lg backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            title="Watch Demo"
          >
            <Play className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Link
              href={codeLink}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <Code className="w-4 h-4" /> View Code
            </Link>
            <Link
              href={demoLink}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <Play className="w-4 h-4" /> Demo
            </Link>
          </div>

          {/* Share Button */}
          <div className="relative">
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2 w-40">
                <div className="flex flex-col gap-1">
                  <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Twitter className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Share on X</span>
                  </Link>
                  <Link href={codeLink} className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Star on GitHub</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Watch on YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
