"use client";

import React, { useEffect, useRef } from 'react';

export const AudioVisualizer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create 30 bars for the audio visualizer
  const bars = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div className="w-full h-20 flex items-end justify-center gap-1 mb-6">
      {bars.map((_, i) => (
        <div
          key={i}
          className="w-2 bg-gradient-to-t from-purple-500 to-purple-400 rounded-full animate-pulse"
          style={{
            height: `${Math.max(15, Math.random() * 60)}px`,
            animationDuration: `${0.8 + Math.random() * 0.8}s`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

export const CodeTypingEffect = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  
  // Sample code snippets
  const codeSnippets = [
    'function createVibe(mood, tempo) {',
    '  return new AudioVisualizer({',
    '    intensity: mood * 10,',
    '    frequency: tempo,',
    '    colors: getGradient("purple")',
    '  });',
    '}',
    '',
    'const myVibe = createVibe("chill", 80);',
    'myVibe.start();',
    '',
    'class CodeGenerator {',
    '  constructor(options) {',
    '    this.language = options.language;',
    '    this.theme = options.theme;',
    '  }',
    '',
    '  generateFromPrompt(prompt) {',
    '    return AI.transform(prompt, {',
    '      to: this.language,',
    '      style: this.theme',
    '    });',
    '  }',
    '}'
  ];

  useEffect(() => {
    const container = codeRef.current;
    if (!container) return;

    let currentLine = 0;
    let currentChar = 0;
    let currentText = '';
    let typingInterval: NodeJS.Timeout;

    const typeCode = () => {
      if (currentLine >= codeSnippets.length) {
        // Reset to beginning when all lines are typed
        setTimeout(() => {
          currentLine = 0;
          currentChar = 0;
          currentText = '';
          container.innerHTML = '';
          typingInterval = setInterval(typeCode, 50);
        }, 2000);
        clearInterval(typingInterval);
        return;
      }

      const line = codeSnippets[currentLine];
      
      if (currentChar < line.length) {
        currentText += line[currentChar];
        currentChar++;
      } else {
        currentText += '<br>';
        currentLine++;
        currentChar = 0;
      }

      container.innerHTML = formatCode(currentText);
    };

    const formatCode = (text: string) => {
      // Simple syntax highlighting
      return text
        .replace(/function|class|constructor|return|const|new|this/g, '<span class="text-purple-500">$&</span>')
        .replace(/\(.*?\)/g, (match) => `<span class="text-gray-400">${match}</span>`)
        .replace(/".*?"/g, '<span class="text-green-500">$&</span>')
        .replace(/\{|\}/g, '<span class="text-yellow-500">$&</span>');
    };

    typingInterval = setInterval(typeCode, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="w-full bg-gray-900 rounded-lg p-4 shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">code_my_vibes.js</div>
      </div>
      <div 
        ref={codeRef} 
        className="font-mono text-sm text-white whitespace-pre-wrap overflow-hidden"
        style={{ height: '280px' }}
      ></div>
    </div>
  );
};
