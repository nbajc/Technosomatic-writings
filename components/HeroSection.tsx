'use client';

import React, { useState } from 'react';
import { HomunculusCanvas } from './HomunculusCanvas';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-[90vh] pt-10 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center bg-[#0A0A0B]">
      
      {/* Top Academic Tag */}
      <div className="flex items-center space-x-2 text-xs font-mono-code text-[#38BDF8] mb-6">
        <span className="inline-block w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
        <span className="tracking-widest uppercase text-[11px] font-semibold">
          A²I Theoretical Framework // Natasha Bajc
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Exact Revised Hero Manifesto Copy */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-cinzel font-bold leading-tight tracking-tight text-[#FAFAFA]">
            Architectural AI Has a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-white to-[#F59E0B]">
              Missing Root Node.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl font-sans text-zinc-300 font-light leading-relaxed">
            Re-inserting the embodied human nervous system into computational spatial intelligence.
          </p>

          {/* Revised Hero Manifesto Statement */}
          <div className="p-6 rounded-xl bg-[#0A0A0B] border border-[#27272A] space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <p>
              Generative neural networks promise rhizomatic fluidity, but their execution remains strictly{' '}
              <span
                onMouseEnter={() => setActiveNode('Arborescent')}
                onMouseLeave={() => setActiveNode(null)}
                className="cursor-pointer border-b border-dashed border-[#38BDF8] text-[#38BDF8] font-mono-code text-xs px-1 py-0.5 rounded hover:bg-[#38BDF8]/10 transition-colors"
              >
                [arborescent—hierarchical trees]
              </span>{' '}
              growing sequentially from an initial root.
            </p>
            <p>
              When that origin is built on flattened images rather than human neurobiology, the entire computational tree produces spatial hallucination.
            </p>
            <p className="text-[#FAFAFA] font-medium border-l-2 border-[#38BDF8] pl-3 py-1">
              A²I acknowledges the antifragile power of network architectures, but enforces a fundamental correction: re-inserting the biological human nervous system as the non-negotiable{' '}
              <span
                onMouseEnter={() => setActiveNode('RootNode')}
                onMouseLeave={() => setActiveNode(null)}
                className="cursor-pointer border-b border-dashed border-[#F59E0B] text-[#F59E0B] font-mono-code text-xs px-1 py-0.5 rounded hover:bg-[#F59E0B]/10 transition-colors"
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
              className="p-3 rounded-lg border border-[#27272A] bg-[#0A0A0B] hover:border-[#38BDF8] transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#38BDF8]">
                <span className="text-[10px] font-mono-code">NODE 01</span>
              </div>
              <span className="text-xs font-mono-code font-semibold text-[#FAFAFA] group-hover:text-[#38BDF8]">
                Somatic Root
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('Arborescent')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 rounded-lg border border-[#27272A] bg-[#0A0A0B] hover:border-[#F59E0B] transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#F59E0B]">
                <span className="text-[10px] font-mono-code">NODE 02</span>
              </div>
              <span className="text-xs font-mono-code font-semibold text-[#FAFAFA] group-hover:text-[#F59E0B]">
                Arborescent Tree
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('GreyGoo')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 rounded-lg border border-[#27272A] bg-[#0A0A0B] hover:border-[#38BDF8] transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#38BDF8]">
                <span className="text-[10px] font-mono-code">NODE 03</span>
              </div>
              <span className="text-xs font-mono-code font-semibold text-[#FAFAFA] group-hover:text-[#38BDF8]">
                Grey Goo Cloud
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('Homunculus')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 rounded-lg border border-[#27272A] bg-[#0A0A0B] hover:border-[#F59E0B] transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-[#A1A1AA] group-hover:text-[#F59E0B]">
                <span className="text-[10px] font-mono-code">NODE 04</span>
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
              className="px-6 py-3 rounded-lg bg-[#FAFAFA] text-[#0A0A0B] font-mono-code font-semibold text-xs tracking-wider flex items-center space-x-2 hover:bg-[#38BDF8] transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
              <span>EXPLORE 7-PART ESSAY SERIES</span>
              <span>↓</span>
            </button>

            <a
              href="https://substack.com/@natashabajc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-[#27272A] hover:border-[#F59E0B] text-zinc-300 hover:text-[#F59E0B] font-mono-code text-xs tracking-wider transition-all"
            >
              READ ON SUBSTACK ↗
            </a>
          </div>

        </div>

        {/* Right Column: Arborescent Canvas Graphic with Technosomatic Logo Asset */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl bg-[#0A0A0B] p-2 border border-[#27272A] shadow-[0_0_50px_rgba(56,189,248,0.08)]">
            <HomunculusCanvas activeNode={activeNode} />
          </div>
        </div>

      </div>

    </section>
  );
};
