'use client';

import React from 'react';

interface HeaderProps {
  onSelectSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectSection }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/60 border-b border-zinc-800/60 py-4 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Minimal Technosomatic Vector Logo + Title */}
        <div 
          onClick={() => onSelectSection('hero')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full border border-zinc-700 bg-zinc-950 p-1 flex items-center justify-center group-hover:border-sky-400 transition-colors">
            <img
              src="/technosomatic-logo.png"
              alt="Technosomatic Logo"
              className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-header text-base md:text-lg font-light tracking-wide text-[#FAFAFA] group-hover:text-sky-400 transition-colors">
              NATASHA BAJC / A²I
            </span>
          </div>
        </div>

        {/* Right: Minimalist Nav Links & Subscribe Button */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono-tag text-zinc-400">
            <button
              onClick={() => onSelectSection('manifesto')}
              className="hover:text-sky-400 transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ MANIFESTO ]
            </button>
            <button
              onClick={() => onSelectSection('essays')}
              className="hover:text-sky-400 transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ FRAMEWORK / ESSAYS ]
            </button>
            <button
              onClick={() => onSelectSection('about')}
              className="hover:text-sky-400 transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ ABOUT ]
            </button>
            <a
              href="https://substack.com/@natashabajc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ SUBSTACK ↗ ]
            </a>
          </nav>

          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded bg-[#FAFAFA] text-[#0A0A0B] text-xs font-mono-tag font-semibold tracking-wider hover:bg-sky-400 transition-colors shadow-sm"
          >
            [ Subscribe ]
          </a>
        </div>

      </div>
    </header>
  );
};
