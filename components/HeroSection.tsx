'use client';

import React, { useState } from 'react';
import { HomunculusCanvas } from './HomunculusCanvas';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="hero" className="w-full min-h-[85vh] py-12 flex flex-col justify-center border-b border-zinc-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN (Cols 1-7): Editorial Text Hierarchy */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Small Mono Tagline */}
          <div className="text-xs font-mono-tag tracking-widest text-sky-400 font-semibold uppercase">
            NATASHA BAJC // A²I TECHNOSOMATIC ARCHITECTURE
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl md:text-6xl font-serif-header font-light leading-tight text-[#FAFAFA] tracking-tight">
            Architectural AI Has a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-zinc-100 to-amber-400">
              Missing Root Node.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg text-zinc-400 font-sans font-light leading-normal">
            Re-inserting the embodied human nervous system into computational spatial intelligence.
          </p>

          {/* Manifesto Body Paragraph */}
          <div className="p-6 rounded-lg bg-zinc-900/60 border border-zinc-800 text-sm leading-relaxed text-zinc-300 space-y-3">
            <p>
              Generative neural networks promise rhizomatic fluidity, but their execution remains strictly{' '}
              <button
                onMouseEnter={() => setActiveNode('Arborescent')}
                onMouseLeave={() => setActiveNode(null)}
                className="text-sky-400 border-b border-dashed border-sky-400 font-mono-tag text-xs px-1 hover:bg-sky-400/10 transition-colors"
              >
                [arborescent—hierarchical trees]
              </button>{' '}
              growing sequentially from an initial root.
            </p>
            <p>
              When that origin is built on flattened images rather than human neurobiology, the entire computational tree produces spatial hallucination.
            </p>
            <p className="text-[#FAFAFA] border-l-2 border-sky-400 pl-3 py-1 bg-sky-400/5 rounded-r">
              A²I acknowledges the antifragile power of network architectures, but enforces a fundamental correction: re-inserting the biological human nervous system as the non-negotiable{' '}
              <button
                onMouseEnter={() => setActiveNode('RootNode')}
                onMouseLeave={() => setActiveNode(null)}
                className="text-amber-400 border-b border-dashed border-amber-400 font-mono-tag text-xs px-1 hover:bg-amber-400/10 transition-colors"
              >
                [root node of spatial intelligence]
              </button>.
            </p>
          </div>

          {/* Interactive Node Bar: Styled flex wrap of crisp buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onMouseEnter={() => setActiveNode('RootNode')}
              onMouseLeave={() => setActiveNode(null)}
              className="bg-zinc-900 border border-zinc-800 hover:border-sky-400 text-xs font-mono-tag text-zinc-300 hover:text-sky-400 py-2 px-3 rounded transition-colors"
            >
              ⊙ Somatic Root
            </button>
            <button
              onMouseEnter={() => setActiveNode('Arborescent')}
              onMouseLeave={() => setActiveNode(null)}
              className="bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-xs font-mono-tag text-zinc-300 hover:text-amber-400 py-2 px-3 rounded transition-colors"
            >
              ⊙ Arborescent Network
            </button>
            <button
              onMouseEnter={() => setActiveNode('GreyGoo')}
              onMouseLeave={() => setActiveNode(null)}
              className="bg-zinc-900 border border-zinc-800 hover:border-sky-400 text-xs font-mono-tag text-zinc-300 hover:text-sky-400 py-2 px-3 rounded transition-colors"
            >
              ⊙ Grey Goo Cloud
            </button>
            <button
              onMouseEnter={() => setActiveNode('Homunculus')}
              onMouseLeave={() => setActiveNode(null)}
              className="bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-xs font-mono-tag text-zinc-300 hover:text-amber-400 py-2 px-3 rounded transition-colors"
            >
              ⊙ Penfield Axis
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="px-6 py-3 rounded bg-[#FAFAFA] text-[#0A0A0B] font-mono-tag font-semibold text-xs tracking-wider hover:bg-sky-400 transition-colors shadow-sm"
            >
              Explore 7-Part Series ↓
            </button>

            <a
              href="https://substack.com/@natashabajc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border border-zinc-800 hover:border-amber-400 text-zinc-300 hover:text-amber-400 font-mono-tag text-xs tracking-wider transition-colors bg-zinc-900/40"
            >
              Read on Substack ↗
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN (Cols 8-12): Dedicated Viewport Frame with Technosomatic Homunculus Ring */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/40 p-2 shadow-2xl overflow-hidden">
            <HomunculusCanvas activeNode={activeNode} />
          </div>
        </div>

      </div>
    </section>
  );
};
