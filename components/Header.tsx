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
    <header className="sticky top-0 z-50 w-full glass-header transition-colors duration-300 border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Custom Technosomatic Penfield Homunculus Logo */}
        <div 
          onClick={() => onSelectSection('hero')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-[#27272A] bg-[#0A0A0B] group-hover:border-[#38BDF8] transition-colors overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-7 h-7 fill-none stroke-current text-[#FAFAFA] group-hover:text-[#38BDF8] transition-colors">
              {/* Outer Homunculus Radial Ring Arc */}
              <circle cx="50" cy="50" r="42" stroke="#27272A" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M 12,50 A 38,38 0 1,1 88,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              {/* Cortical Homunculus Brain Axis Line */}
              <path d="M 50,12 C 35,28 35,72 50,88" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M 50,12 C 65,28 65,72 50,88" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
              {/* Arborescent Vector Node Lines */}
              <line x1="50" y1="50" x2="22" y2="30" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="50" x2="78" y2="30" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="50" x2="20" y2="65" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="50" x2="80" y2="65" stroke="currentColor" strokeWidth="1" />
              {/* Somatic Central Root Node */}
              <circle cx="50" cy="50" r="5" className="fill-[#38BDF8] stroke-[#0A0A0B]" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel tracking-wider text-sm font-bold text-[#FAFAFA] group-hover:text-[#38BDF8] transition-colors">
              NATASHA BAJC
            </span>
            <span className="font-mono-code text-[10px] tracking-widest text-[#A1A1AA]">
              A²I // TECHNOSOMATIC ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono-code text-[#A1A1AA]">
          <button
            onClick={() => onSelectSection('manifesto')}
            className="hover:text-[#38BDF8] transition-colors tracking-widest"
          >
            [ MANIFESTO ]
          </button>
          <button
            onClick={() => onSelectSection('essays')}
            className="hover:text-[#38BDF8] transition-colors tracking-widest"
          >
            [ FRAMEWORK / ESSAYS ]
          </button>
          <button
            onClick={() => onSelectSection('about')}
            className="hover:text-[#38BDF8] transition-colors tracking-widest"
          >
            [ ABOUT ]
          </button>
          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-[#F59E0B] transition-colors tracking-widest"
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
            className="p-2 rounded-md border border-[#27272A] hover:border-[#38BDF8] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            {currentTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#F59E0B]" />
            ) : (
              <Moon className="w-4 h-4 text-[#38BDF8]" />
            )}
          </button>

          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-code font-semibold tracking-wider text-[#0A0A0B] bg-[#38BDF8] hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>SUBSCRIBE</span>
          </a>
        </div>

      </div>
    </header>
  );
};
