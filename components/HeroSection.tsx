'use client';

import React, { useState } from 'react';
import { HomunculusCanvas } from './HomunculusCanvas';
import { ArrowDown, Brain, Activity, Compass, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-[90vh] pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* Top Academic Tag */}
      <div className="flex items-center space-x-2 text-xs font-mono-code text-cyan-400 mb-6">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="tracking-widest uppercase text-[11px] font-semibold">
          A²I Theoretical Framework // Natasha Bajc
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Interactive Callouts */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-cinzel font-bold leading-tight tracking-tight text-zinc-100">
            Architectural AI Has a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-amber-500">
              Missing Root Node.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl font-sans text-zinc-300 font-light leading-relaxed">
            Re-inserting the embodied human nervous system into computational spatial intelligence.
          </p>

          {/* 3-Sentence Manifesto Statement with Interactive Callout Highlights */}
          <div className="p-6 rounded-xl glass-panel border border-zinc-800 space-y-4 text-sm sm:text-base leading-relaxed text-zinc-300">
            <p>
              Generative spatial models threaten to flood our physical world with homogenized, disembodied renders—a synthetic grey goo devoid of biological resonance. By anchoring spatial algorithms directly to the{' '}
              <span
                onMouseEnter={() => setActiveNode('Kopf')}
                onMouseLeave={() => setActiveNode(null)}
                className="callout-highlight text-cyan-400 font-mono-code text-xs px-1 py-0.5 rounded"
              >
                [Head-Direction Cells]
              </span>{' '}
              and somatosensory motor gyri of the human nervous system, we re-establish space as an active biological extension.
            </p>
            <p>
              Technosomatic Architecture replaces passive CAD geometric primitives with live neural tensors calibrated to subjective duration{' '}
              <span
                onMouseEnter={() => setActiveNode('Hand')}
                onMouseLeave={() => setActiveNode(null)}
                className="callout-highlight text-amber-400 font-mono-code text-xs px-1 py-0.5 rounded"
              >
                [Vector Maps & Durée]
              </span>.
            </p>
            <p className="text-xs font-mono-code text-zinc-400 italic">
              * Hover over highlighted concepts to trigger active somatic node circuits on the interactive homunculus ring.
            </p>
          </div>

          {/* Interactive Node Callout Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <button
              onMouseEnter={() => setActiveNode('Kopf')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/60 hover:border-cyan-400/60 transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-cyan-400">
                <Brain className="w-4 h-4" />
                <span className="text-[10px] font-mono-code">NODE 01</span>
              </div>
              <span className="text-xs font-mono-code font-semibold text-zinc-200 group-hover:text-cyan-400">
                Head-Direction
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('Auge')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/60 hover:border-amber-400/60 transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-amber-400">
                <Activity className="w-4 h-4" />
                <span className="text-[10px] font-mono-code">NODE 02</span>
              </div>
              <span className="text-xs font-mono-code font-semibold text-zinc-200 group-hover:text-amber-400">
                Sensory Cortex
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('Hand')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/60 hover:border-cyan-400/60 transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-cyan-400">
                <Compass className="w-4 h-4" />
                <span className="text-[10px] font-mono-code">NODE 03</span>
              </div>
              <span className="text-xs font-mono-code font-semibold text-zinc-200 group-hover:text-cyan-400">
                Kinematic Trace
              </span>
            </button>

            <button
              onMouseEnter={() => setActiveNode('Rumpf')}
              onMouseLeave={() => setActiveNode(null)}
              className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/60 hover:border-amber-400/60 transition-all flex flex-col space-y-1 text-left group"
            >
              <div className="flex items-center justify-between text-zinc-400 group-hover:text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-mono-code">NODE 04</span>
              </div>
              <span className="text-xs font-mono-code font-semibold text-zinc-200 group-hover:text-amber-400">
                Somatic Root
              </span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-mono-code font-semibold text-xs tracking-wider flex items-center space-x-2 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            >
              <span>EXPLORE 7-PART ESSAY SERIES</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <a
              href="https://substack.com/@natashabajc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-amber-400 font-mono-code text-xs tracking-wider transition-all"
            >
              READ ON SUBSTACK ↗
            </a>
          </div>

        </div>

        {/* Right Column: Homunculus Canvas */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl glass-panel p-2 border border-zinc-800 shadow-[0_0_50px_rgba(56,189,248,0.08)]">
            <HomunculusCanvas activeNode={activeNode} />
          </div>
        </div>

      </div>

    </section>
  );
};
