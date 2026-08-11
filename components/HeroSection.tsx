'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HomunculusCanvas } from './HomunculusCanvas';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="hero" className="w-full py-8 md:py-16 border-b border-zinc-200 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN (Cols 1-7): Tight Editorial Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          
          {/* Small Mono Tagline */}
          <div className="text-xs font-mono-tag tracking-widest text-[#18181B] font-bold uppercase">
            NATASHA BAJC // A²I TECHNOSOMATIC ARCHITECTURE
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif-header font-bold text-[#09090B] leading-tight tracking-tight">
            Architectural AI Has a <br />
            Missing Root Node.
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-[#52525B] font-sans font-light leading-normal">
            Re-inserting the embodied human nervous system into computational spatial intelligence.
          </p>

          {/* Manifesto Body Paragraphs */}
          <div className="p-5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs sm:text-sm leading-relaxed text-zinc-800 space-y-2.5 shadow-xs">
            <p>
              Generative neural networks promise rhizomatic fluidity, but their execution remains strictly{' '}
              <button
                onMouseEnter={() => setActiveNode('Arborescent')}
                onMouseLeave={() => setActiveNode(null)}
                className="text-black font-semibold border-b border-dashed border-black font-mono-tag text-xs px-1 hover:bg-zinc-200 transition-colors"
              >
                [arborescent—hierarchical trees]
              </button>{' '}
              growing sequentially from an initial root.
            </p>
            <p>
              When that origin is built on flattened images rather than human neurobiology, the entire computational tree produces spatial hallucination.
            </p>
            <p className="text-[#09090B] font-medium border-l-2 border-black pl-3 py-1 bg-zinc-100 rounded-r">
              A²I acknowledges the antifragile power of network architectures, but enforces a fundamental correction: re-inserting the biological human nervous system as the non-negotiable{' '}
              <button
                onMouseEnter={() => setActiveNode('RootNode')}
                onMouseLeave={() => setActiveNode(null)}
                className="text-black font-bold border-b border-dashed border-black font-mono-tag text-xs px-1 hover:bg-zinc-200 transition-colors"
              >
                [root node of spatial intelligence]
              </button>.
            </p>
          </div>

          {/* Interactive Node Bar: White background with 1px border */}
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onMouseEnter={() => setActiveNode('RootNode')}
              onMouseLeave={() => setActiveNode(null)}
              className="border border-zinc-300 hover:border-black text-xs font-mono-tag py-2 px-3 rounded-md bg-white text-zinc-900 shadow-xs transition-colors"
            >
              ⊙ Somatic Root
            </button>
            <button
              onMouseEnter={() => setActiveNode('Arborescent')}
              onMouseLeave={() => setActiveNode(null)}
              className="border border-zinc-300 hover:border-black text-xs font-mono-tag py-2 px-3 rounded-md bg-white text-zinc-900 shadow-xs transition-colors"
            >
              ⊙ Arborescent Network
            </button>
            <button
              onMouseEnter={() => setActiveNode('GreyGoo')}
              onMouseLeave={() => setActiveNode(null)}
              className="border border-zinc-300 hover:border-black text-xs font-mono-tag py-2 px-3 rounded-md bg-white text-zinc-900 shadow-xs transition-colors"
            >
              ⊙ Grey Goo Cloud
            </button>
            <button
              onMouseEnter={() => setActiveNode('Homunculus')}
              onMouseLeave={() => setActiveNode(null)}
              className="border border-zinc-300 hover:border-black text-xs font-mono-tag py-2 px-3 rounded-md bg-white text-zinc-900 shadow-xs transition-colors"
            >
              ⊙ Penfield Axis
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/manifesto"
              className="px-6 py-3 rounded-md bg-[#000000] text-[#FFFFFF] font-mono-tag font-semibold text-xs tracking-wider hover:bg-zinc-800 transition-colors shadow-sm inline-block"
            >
              Read the A²I Manifesto →
            </Link>

            <a
              href="https://substack.com/@natashabajc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md border border-zinc-300 hover:border-black text-zinc-900 font-mono-tag text-xs tracking-wider transition-colors bg-white shadow-xs inline-block"
            >
              Read on Substack ↗
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN (Cols 8-12): Perfect 1:1 Aspect-Square Unsquished Technosomatic Ring Frame */}
        <div className="lg:col-span-5 flex items-center justify-center p-2 bg-white">
          <div className="w-full max-w-[480px] mx-auto bg-white flex items-center justify-center">
            <HomunculusCanvas activeNode={activeNode} />
          </div>
        </div>

      </div>
    </section>
  );
};
