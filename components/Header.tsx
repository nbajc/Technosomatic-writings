'use client';

import React from 'react';

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
    <header className="sticky top-0 z-50 w-full bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#27272A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Custom Technosomatic Homunculus Logo Asset */}
        <div 
          onClick={() => onSelectSection('hero')}
          className="flex items-center space-x-3.5 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-full border border-[#27272A] bg-[#0A0A0B] group-hover:border-[#38BDF8] transition-all p-1 flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(56,189,248,0.1)]">
            {/* Literal Technosomatic Logo Image Asset */}
            <img
              src="/technosomatic-logo.png"
              alt="The Technosomatic Architecture Logo"
              className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
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
            <span>[ SUBSTACK ↗ ]</span>
          </a>
        </nav>

        {/* Action Controls & Subscribe CTA */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleTheme}
            title="Toggle High-Contrast Mode"
            className="p-2 rounded border border-[#27272A] hover:border-[#38BDF8] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors font-mono-code text-xs"
          >
            {currentTheme === 'dark' ? '☀ LIGHT' : '🌙 DARK'}
          </button>

          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full text-xs font-mono-code font-bold tracking-wider text-[#0A0A0B] bg-[#38BDF8] hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          >
            SUBSCRIBE
          </a>
        </div>

      </div>
    </header>
  );
};
