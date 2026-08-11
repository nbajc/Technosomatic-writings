'use client';

import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  onSelectSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectSection }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-200 py-4 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Technosomatic Logo Asset + Title */}
        <Link 
          href="/"
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center p-0.5">
            <img
              src="/technosomatic-logo.png"
              alt="Technosomatic Logo"
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-header text-base md:text-lg font-bold tracking-wide text-[#09090B] group-hover:text-black transition-colors">
              NATASHA BAJC / A²I
            </span>
          </div>
        </Link>

        {/* Right: Nav Links & High-Contrast Black Subscribe Button */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono-tag text-zinc-600">
            <Link
              href="/manifesto"
              className="hover:text-black transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ MANIFESTO ]
            </Link>
            <Link
              href="/#essays"
              className="hover:text-black transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ FRAMEWORK / ESSAYS ]
            </Link>
            <Link
              href="/#about"
              className="hover:text-black transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ ABOUT ]
            </Link>
            <a
              href="https://substack.com/@natashabajc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors tracking-widest hover:underline underline-offset-4"
            >
              [ SUBSTACK ↗ ]
            </a>
          </nav>

          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-md bg-[#000000] text-[#FFFFFF] text-xs font-mono-tag font-semibold tracking-wider hover:bg-zinc-800 transition-colors shadow-sm"
          >
            [ Subscribe ]
          </a>
        </div>

      </div>
    </header>
  );
};
