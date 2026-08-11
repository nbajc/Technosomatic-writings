'use client';

import React, { useState } from 'react';
import { HomunculusCanvas } from './HomunculusCanvas';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-[92vh] pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center bg-[#060608]">
      
      {/* Architectural Grid Corner Crosshairs */}
      <div className="absolute top-4 left-4 text-[#27272A] font-mono-code text-[10px] select-none pointer-events-none">
        + SYS.COORD [48.21° N, -122.33° W]
      </div>
      <div className="absolute top-4 right-4 text-[#27272A] font-mono-code text-[10px] select-none pointer-events-none">
        A²I.ROOT.FRAME // V1.0 +
      </div>

      {/* Top Academic Tag */}
      <div className="flex items-center space-x-3 text-xs font-mono-code text-[#38BDF8] mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]"></span>
        </span>
        <span className="tracking-widest uppercase text-[11px] font-semibold">
          A²I Theoretical Framework // Natasha Bajc
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & Exact Revised Hero Manifesto Copy */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Headline with clamp() Fluid Typography */}
          <h1 className="clamp-hero-title font-cinzel font-bold text-[#FAFAFA] tracking-tight">
            Architectural AI Has a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-white to-[#F59E0B]">
              Missing Root Node.
            </span>
          </h1>

          {/* Sub-headline with clamp() Fluid Typography */}
          <p className="clamp-hero-subtitle font-sans text-zinc-300 font-light leading-relaxed">
            Re-inserting the embodied human nervous system into computational spatial intelligence.
          </p>

          {/* Revised Hero Manifesto Statement */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-[#27272A] space-y-5 text-zinc-300 relative overflow-hidden group">
            
            {/* Subtle Gradient Glow Accent */}
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#38BDF8]/20 transition-all duration-500" />

            <p className="clamp-body-text font-sans leading-relaxed font-light">
              Generative neural networks promise rhizomatic fluidity, but their execution remains strictly{' '}
              <span
                onMouseEnter={() => setActiveNode('Arborescent')}
                onMouseLeave={() => setActiveNode(null)}
                className="callout-highlight text-[#38BDF8] font-mono-code text-xs px-2 py-0.5 rounded border border-[#27272A] bg-[#0A0A0B]"
              >
                [arborescent—hierarchical trees]
              </span>{' '}
              growing sequentially from an initial root.
            </p>
            
            <p className="clamp-body-text font-sans leading-relaxed font-light text-zinc-300/90">
              When that origin is built on flattened images rather than human neurobiology, the entire computational tree produces spatial hallucination.
            </p>
            
            <p className="clamp-body-text font-sans text-[#FAFAFA] font-medium border-l-2 border-[#38BDF8] pl-4 py-1.5 bg-[#38BDF8]/5 rounded-r">
              A²I acknowledges the antifragile power of network architectures, but enforces a fundamental correction: re-inserting the biological human nervous system as the non-negotiable{' '}
              <span
                onMouseEnter={() => setActiveNode('RootNode')}
                onMouseLeave={() => setActiveNode(null)}
                className="callout-highlight text-[#F59E0B] font-mono-code text-xs px-2 py-0.5 rounded border border-[#27272A] bg-[#0A0A0B]"
              >
                [root node of spatial intelligence]
              </span>.
            </p>
          </div>

          {/* Interactive Node Callout Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <button
              onMouseEnter={() => setActiveNode('RootNode')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3.5 rounded-xl border border-[#27272A] bg-[#0A0A0B]/80 hover:border-[#38BDF8] transition-all flex flex-col space-y-1 text-left group hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#38BDF8]">
                <span className="text-[10px] font-mono-code">NODE 01</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] opacity-60 group-hover:opacity-100" />
              </div>
              <span className="text-xs font-mono-code font-semibold text-[#FAFAFA] group-hover:text-[#38BDF8]">
                Somatic Root
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('Arborescent')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3.5 rounded-xl border border-[#27272A] bg-[#0A0A0B]/80 hover:border-[#F59E0B] transition-all flex flex-col space-y-1 text-left group hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#F59E0B]">
                <span className="text-[10px] font-mono-code">NODE 02</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] opacity-60 group-hover:opacity-100" />
              </div>
              <span className="text-xs font-mono-code font-semibold text-[#FAFAFA] group-hover:text-[#F59E0B]">
                Arborescent Tree
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('GreyGoo')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3.5 rounded-xl border border-[#27272A] bg-[#0A0A0B]/80 hover:border-[#38BDF8] transition-all flex flex-col space-y-1 text-left group hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#38BDF8]">
                <span className="text-[10px] font-mono-code">NODE 03</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] opacity-60 group-hover:opacity-100" />
              </div>
              <span className="text-xs font-mono-code font-semibold text-[#FAFAFA] group-hover:text-[#38BDF8]">
                Grey Goo Cloud
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('Homunculus')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3.5 rounded-xl border border-[#27272A] bg-[#0A0A0B]/80 hover:border-[#F59E0B] transition-all flex flex-col space-y-1 text-left group hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#F59E0B]">
                <span className="text-[10px] font-mono-code">NODE 04</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] opacity-60 group-hover:opacity-100" />
              </div>
              <span className="text-xs font-mono-code font-semibold text-[#FAFAFA] group-hover:text-[#F59E0B]">
                Penfield Axis
              </span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-xl bg-[#FAFAFA] text-[#060608] font-mono-code font-semibold text-xs tracking-wider flex items-center space-x-2.5 hover:bg-[#38BDF8] transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5"
            >
              <span>EXPLORE 7-PART ESSAY SERIES</span>
              <span className="animate-bounce">↓</span>
            </button>

            <a
              href="https://substack.com/@natashabajc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl border border-[#27272A] bg-[#0A0A0B]/50 hover:border-[#F59E0B] text-zinc-300 hover:text-[#F59E0B] font-mono-code text-xs tracking-wider transition-all transform hover:-translate-y-0.5"
            >
              READ ON SUBSTACK ↗
            </a>
          </div>

        </div>

        {/* Right Column: Arborescent Canvas Graphic with Technosomatic Logo Asset */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl glass-panel p-2 border border-[#27272A] shadow-[0_0_60px_rgba(56,189,248,0.12)]">
            <HomunculusCanvas activeNode={activeNode} />
          </div>
        </div>

      </div>

    </section>
  );
};
