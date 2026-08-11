'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

export const InstitutionalFooter: React.FC = () => {
  return (
    <footer id="about" className="w-full border-t border-zinc-200 bg-white py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Author Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-black text-xs font-mono-tag font-bold">
                A²I
              </div>
              <span className="font-serif-header text-xl font-bold text-[#09090B] tracking-wide">
                NATASHA BAJC
              </span>
            </div>

            <p className="text-xs font-sans text-zinc-600 font-light leading-relaxed max-w-md">
              Founder, Architect, and Academic pioneering Architectural Artificial Intelligence (A²I) and Technosomatic Phenomenology. Re-anchoring computational spatial intelligence to the biological sensory homunculus.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono-tag">
              <a
                href="https://substack.com/@natashabajc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-black hover:border-black transition-colors flex items-center space-x-1 font-semibold"
              >
                <span>SUBSTACK</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-white border border-zinc-300 text-zinc-700 hover:text-black hover:border-black transition-colors flex items-center space-x-1"
              >
                <span>MEDIUM</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-white border border-zinc-300 text-zinc-700 hover:text-black hover:border-black transition-colors flex items-center space-x-1"
              >
                <span>X / TWITTER</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Institutional Framing Note */}
          <div className="lg:col-span-7 p-6 rounded-lg bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="text-xs font-mono-tag text-black font-bold tracking-wider uppercase">
              INSTITUTIONAL FRAMING & DISTINCTION NOTE
            </div>

            <p className="text-xs font-sans text-zinc-800 leading-relaxed">
              The <strong>A²I Theoretical Framework</strong> and <strong>Technosomatic Architecture Manifesto</strong> published on this sovereign web hub represent an open academic, artistic, and theoretical inquiry led by Natasha Bajc.
            </p>
            <p className="text-xs font-sans text-zinc-600 leading-relaxed font-light">
              This academic framework operates independently from <strong>Nexus Hestia Technologies (NHT)</strong>, Natasha Bajc's corporate technology entity focused on proprietary BIM search algorithms and commercial spatial data infrastructure.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tag text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} NATASHA BAJC. ALL RIGHTS RESERVED. ACADEMIC OPEN ACCESS LICENSED UNDER CC BY-NC 4.0.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-black font-bold">TECHNOSOMATIC // A²I V1.0</span>
            <span>VERCEL EDGE HOSTED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
