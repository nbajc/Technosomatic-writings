'use client';

import React from 'react';
import { ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export const InstitutionalFooter: React.FC = () => {
  return (
    <footer id="about" className="w-full border-t border-zinc-800/80 bg-zinc-950/90 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Author Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-xs font-mono-code font-bold">
                A²I
              </div>
              <span className="font-cinzel text-lg font-bold text-zinc-100 tracking-wider">
                NATASHA BAJC
              </span>
            </div>

            <p className="text-xs font-sans text-zinc-400 font-light leading-relaxed max-w-md">
              Founder, Architect, and Academic pioneering Architectural Artificial Intelligence (A²I) and Technosomatic Phenomenology. Re-anchoring computational spatial intelligence to the biological sensory homunculus.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono-code">
              <a
                href="https://substack.com/@natashabajc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-amber-400 hover:border-amber-400 transition-colors flex items-center space-x-1"
              >
                <span>SUBSTACK</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors flex items-center space-x-1"
              >
                <span>MEDIUM</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors flex items-center space-x-1"
              >
                <span>X / TWITTER</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Institutional Framing Note (Nexus Hestia Technologies Distinction) */}
          <div className="lg:col-span-7 p-6 rounded-xl glass-panel border border-zinc-800 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono-code text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold tracking-wider uppercase">INSTITUTIONAL FRAMING & DISTINCTION NOTE</span>
            </div>

            <p className="text-xs font-sans text-zinc-300 leading-relaxed">
              The <strong>A²I Theoretical Framework</strong> and <strong>Technosomatic Architecture Manifesto</strong> published on this sovereign web hub represent an open academic, artistic, and theoretical inquiry led by Natasha Bajc.
            </p>
            <p className="text-xs font-sans text-zinc-400 leading-relaxed font-light">
              This academic framework operates independently from <strong>Nexus Hestia Technologies (NHT)</strong>, Natasha Bajc's corporate technology entity focused on proprietary BIM search algorithms and commercial spatial data infrastructure.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-code text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} NATASHA BAJC. ALL RIGHTS RESERVED. ACADEMIC OPEN ACCESS LICENSED UNDER CC BY-NC 4.0.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-cyan-400">TECHNOSOMATIC // A²I V1.0</span>
            <span>VERCEL EDGE HOSTED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
