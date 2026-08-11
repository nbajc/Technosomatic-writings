'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HomunculusCanvas } from './HomunculusCanvas';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white min-h-[75vh] border-b border-zinc-200">
      
      {/* LEFT COLUMN (Cols 1-7): Text Content */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        
        {/* Small Tagline */}
        <div className="text-xs font-mono text-sky-600 tracking-widest uppercase mb-2 font-bold">
          NATASHA BAJC // A²I TECHNOSOMATIC ARCHITECTURE
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl md:text-5xl font-serif text-zinc-900 font-light leading-tight mb-4">
          Architectural AI Has a Missing Root Node.
        </h1>

        {/* Subhead */}
        <p className="text-lg text-zinc-600 mb-6 font-sans font-light">
          Re-inserting the embodied human nervous system into computational spatial intelligence.
        </p>

        {/* Manifesto Body Box */}
        <div className="p-5 mb-6 rounded-lg bg-zinc-50 border border-zinc-200 text-xs sm:text-sm leading-relaxed text-zinc-800 space-y-2.5 shadow-xs">
          <p>
            Generative neural networks promise rhizomatic fluidity, but their execution remains strictly{' '}
            <button
              onMouseEnter={() => setActiveNode('Arborescent')}
              onMouseLeave={() => setActiveNode(null)}
              className="text-black font-semibold border-b border-dashed border-black font-mono text-xs px-1 hover:bg-zinc-200 transition-colors"
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
              className="text-black font-bold border-b border-dashed border-black font-mono text-xs px-1 hover:bg-zinc-200 transition-colors"
            >
              [root node of spatial intelligence]
            </button>.
          </p>
        </div>

        {/* Interactive Node Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onMouseEnter={() => setActiveNode('RootNode')}
            onMouseLeave={() => setActiveNode(null)}
            className="bg-white border border-zinc-300 text-xs font-mono text-zinc-900 shadow-sm hover:border-black py-1.5 px-3 rounded transition-colors"
          >
            ⊙ Somatic Root
          </button>
          <button
            onMouseEnter={() => setActiveNode('Arborescent')}
            onMouseLeave={() => setActiveNode(null)}
            className="bg-white border border-zinc-300 text-xs font-mono text-zinc-900 shadow-sm hover:border-black py-1.5 px-3 rounded transition-colors"
          >
            ⊙ Arborescent Network
          </button>
          <button
            onMouseEnter={() => setActiveNode('GreyGoo')}
            onMouseLeave={() => setActiveNode(null)}
            className="bg-white border border-zinc-300 text-xs font-mono text-zinc-900 shadow-sm hover:border-black py-1.5 px-3 rounded transition-colors"
          >
            ⊙ Grey Goo Cloud
          </button>
          <button
            onMouseEnter={() => setActiveNode('Homunculus')}
            onMouseLeave={() => setActiveNode(null)}
            className="bg-white border border-zinc-300 text-xs font-mono text-zinc-900 shadow-sm hover:border-black py-1.5 px-3 rounded transition-colors"
          >
            ⊙ Penfield Axis
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/manifesto"
            className="bg-black text-white hover:bg-zinc-800 text-sm font-semibold py-3 px-6 rounded-md shadow-sm transition-colors inline-block"
          >
            Read the A²I Manifesto →
          </Link>

          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-300 hover:border-black text-zinc-900 bg-white text-sm py-3 px-6 rounded-md transition-colors inline-block shadow-xs"
          >
            Read on Substack ↗
          </a>
        </div>

      </div>

      {/* RIGHT COLUMN (Cols 8-12): Logo Aspect-Ratio Fix */}
      <div className="lg:col-span-5 flex justify-center items-center">
        <div className="w-full max-w-[420px] mx-auto bg-white flex justify-center items-center">
          <HomunculusCanvas activeNode={activeNode} />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
