'use client';

import React from 'react';

export const ParallaxDiagram: React.FC = () => {
  return (
    <div className="my-10 p-6 md:p-8 rounded-lg bg-zinc-50 border border-zinc-200 space-y-6 shadow-sm">
      
      {/* Diagram Section Header */}
      <div className="text-center space-y-1">
        <span className="text-[10px] font-mono text-sky-600 tracking-widest uppercase font-bold">
          ARCHITECTURAL SCHEMATIC // TENET V
        </span>
        <h4 className="text-sm font-serif font-bold text-zinc-900 uppercase tracking-wide">
          Žižekian Parallax Translation Matrix
        </h4>
      </div>

      {/* Top Row: 2 Parallel 1px Bordered Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left: Egocentric Frame */}
        <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-2 text-left shadow-xs">
          <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider">
            [ EGOCENTRIC FRAME ]
          </div>
          <div className="text-[11px] font-mono text-sky-700 font-semibold uppercase">
            Inhabitant Perspective
          </div>
          <p className="text-xs font-sans text-zinc-600 leading-relaxed">
            Somatic signals, head-direction intentionality, motor vectors, interoception, and pre-linguistic spatial affordances.
          </p>
        </div>

        {/* Right: Allocentric Frame */}
        <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-2 text-left shadow-xs">
          <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider">
            [ ALLOCENTRIC FRAME ]
          </div>
          <div className="text-[11px] font-mono text-zinc-700 font-semibold uppercase">
            Architect Perspective
          </div>
          <p className="text-xs font-sans text-zinc-600 leading-relaxed">
            Bird’s-eye BIM models, blueprints, sections, parametric grids, top-down spatial matrices, and structural coordinates.
          </p>
        </div>

      </div>

      {/* Center Converging Vector (SVG Arrows + High-Contrast Box) */}
      <div className="flex flex-col items-center justify-center space-y-2">
        
        {/* Downward Vector Arrows SVG */}
        <svg className="w-12 h-8 text-zinc-400" fill="none" viewBox="0 0 48 32" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m0 0l-4-4m4 4l4-4M36 4v16m0 0l-4-4m4 4l4-4" />
        </svg>

        {/* Solid High-Contrast Box */}
        <div className="w-full max-w-md bg-black text-white p-4 rounded-md font-mono text-center tracking-widest text-xs uppercase shadow-md space-y-1">
          <div className="font-bold text-white text-sm">
            A²I TECHNOSOMATIC PHENOMENOLOGICAL LENS
          </div>
          <div className="text-[11px] text-sky-400 font-serif italic normal-case tracking-normal">
            "Seeing the Full Board"
          </div>
        </div>

        {/* Fine dashed downward line */}
        <div className="w-px h-6 border-r border-dashed border-zinc-400"></div>

        {/* Bottom Status Node */}
        <div className="px-4 py-2 bg-white border border-zinc-300 rounded-md font-mono text-xs text-zinc-900 tracking-wider font-bold shadow-xs">
          [ CLOSED-LOOP DESIGN SYSTEM ]
        </div>

      </div>

    </div>
  );
};

export default ParallaxDiagram;
