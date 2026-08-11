'use client';

import React from 'react';
import { ExternalLink, Sun, Moon, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentTheme: 'dark' | 'light';
  onToggleTheme: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTheme,
  onToggleTheme,
  onSelectSection,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-header transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand & Homunculus Icon */}
        <div 
          onClick={() => onSelectSection('hero')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 group-hover:border-cyan-400 transition-colors">
            <svg viewBox="0 0 100 100" className="w-5 h-5 fill-none stroke-current text-cyan-400 group-hover:rotate-45 transition-transform duration-500">
              <circle cx="50" cy="50" r="42" strokeWidth="6" strokeDasharray="180 30" />
              <circle cx="50" cy="50" r="28" strokeWidth="4" strokeDasharray="100 20" />
              <circle cx="50" cy="50" r="10" strokeWidth="3" className="fill-cyan-400" />
              <line x1="50" y1="8" x2="50" y2="92" strokeWidth="3" />
              <line x1="8" y1="50" x2="92" y2="50" strokeWidth="3" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel tracking-wider text-sm font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
              NATASHA BAJC
            </span>
            <span className="font-mono-code text-[10px] tracking-widest text-zinc-400">
              A²I // TECHNOSOMATIC ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono-code text-zinc-400">
          <button
            onClick={() => onSelectSection('manifesto')}
            className="hover:text-cyan-400 transition-colors tracking-widest"
          >
            [ MANIFESTO ]
          </button>
          <button
            onClick={() => onSelectSection('essays')}
            className="hover:text-cyan-400 transition-colors tracking-widest"
          >
            [ FRAMEWORK / ESSAYS ]
          </button>
          <button
            onClick={() => onSelectSection('about')}
            className="hover:text-cyan-400 transition-colors tracking-widest"
          >
            [ ABOUT ]
          </button>
          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-amber-400 transition-colors tracking-widest"
          >
            <span>[ SUBSTACK</span>
            <ExternalLink className="w-3 h-3" />
            <span>]</span>
          </a>
        </nav>

        {/* Action Controls & Subscribe CTA */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleTheme}
            title="Toggle High-Contrast Mode"
            className="p-2 rounded-md border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            {currentTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-500" />
            )}
          </button>

          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-code font-semibold tracking-wider text-zinc-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SUBSCRIBE</span>
          </a>
        </div>

      </div>
    </header>
  );
};
