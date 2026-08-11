import React from 'react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { InstitutionalFooter } from '../../../components/InstitutionalFooter';

export default function Entry01Page() {
  return (
    <div className="min-h-screen bg-white text-[#09090B] antialiased">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Centered Reading Container */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 bg-white min-h-screen">
        
        {/* Top Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs font-mono text-zinc-500 hover:text-black transition-colors font-semibold flex items-center space-x-1"
          >
            <span>← BACK TO FRAMEWORK</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="border-b border-zinc-200 pb-6 mb-8 space-y-4">
          <div className="text-xs font-mono tracking-widest text-sky-600 font-bold uppercase">
            PART 01 // GAME THEORY // NEUROBIOLOGY // 12 MIN READ
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 leading-tight mb-6">
            The Invisible Board: Game Theory, Space, and Imperfect Information
          </h1>

          <p className="text-lg text-zinc-600 font-sans font-light leading-relaxed">
            Why we navigate built space with obscured somatic situational awareness, and how A²I restores epistemological completeness.
          </p>
        </header>

        {/* Blockquote Callout */}
        <blockquote className="border-l-2 border-sky-500 pl-6 my-8 italic text-zinc-700 text-xl font-serif bg-zinc-50/50 py-4">
          "Grounding is not a wellness practice—it is a condition of epistemological completeness."
        </blockquote>

        {/* Prose Article Body */}
        <article className="prose prose-zinc max-w-none text-zinc-800 text-lg leading-relaxed space-y-6 font-sans">
          
          {/* Section I */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              I. Imperfect Information as a Default Spatial Condition
            </h2>

            <p>
              Game theory distinguishes between games of perfect and imperfect information. In a game of perfect information—such as chess—every player has complete access to the state of the board at all times. Decisions are made from full situational awareness. In games of imperfect information, players act on partial data, filling systemic gaps with assumption, habit, or biological instinct.
            </p>

            <p>
              Humans navigating built environments play a game of imperfect information as their default condition. The human body generates continuous somatic data—interoceptive signals, affective states, physiological responses—but most of it remains below conscious cognitive access. We feel that a room is wrong before we know why. We leave a building exhausted without understanding the underlying mechanism. The board exists; we simply cannot see it.
            </p>

            <p>
              Full embodied presence is the condition in which the board becomes visible to the self. When we are somatically present, we have access to our own complete state. We are playing with full information. When we are dissociated, overwhelmed, or mediated through a screen, the board is obscured. We operate as reactive characters: scripted, responding to external triggers rather than reading the full game.
            </p>
          </section>

          {/* Section II */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              II. The Navigation Analogy: Near-Field Somatics vs. Full-Board Visibility
            </h2>

            <p>
              The spatial navigation analogy makes the complementary role of digital tools precise:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>The Driver (Near-Field Instrument):</strong> Holds high-resolution somatic data—proprioception, peripheral vision, haptic feedback from the steering wheel.
              </li>
              <li>
                <strong>The Navigation Map (Full-Board Visibility):</strong> Provides situational awareness beyond the visual field—real-time traffic conditions, global routing logic, spatial data the driver cannot compute alone.
              </li>
            </ul>

            <p>
              Neither replaces the other. The map without the driver is autonomous—no body in the loop. The driver without the map has presence without range. Together, they constitute a fully informed player.
            </p>

            <p>
              This is the foundational model for Architectural Artificial Intelligence (A²I). AI extends visibility to the full board. The body remains the irreplaceable near-field instrument. The design decision belongs to the architect who holds both.
            </p>
          </section>

          {/* Section III */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              III. The Open Architectural Loop
            </h2>

            <p>
              In traditional architectural practice, the feedback loop remains open: buildings are designed, occupied, and demolished without ever returning live somatic or neurobiological telemetry to the architect.
            </p>

            <p>
              A²I closes this loop by inserting the human body as the root node. By using AI as a high-resolution optical instrument—aggregating head-direction vectors and mapping transition probabilities—we expand authorial resolution to finally see the human occupant as they truly exist.
            </p>
          </section>

        </article>

        {/* Canonical Syndication Note */}
        <div className="mt-12 p-4 rounded bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-600 space-y-1">
          <p className="font-semibold text-zinc-900">CANONICAL SYNDICATION NOTE:</p>
          <p>
            Originally published as part of the A²I Technosomatic Framework by Natasha Bajc. Syndicated on Substack.
          </p>
          <a
            href="https://substack.com/@natashabajc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline font-bold hover:text-sky-600 transition-colors inline-block pt-1"
          >
            Read original post on Substack ↗
          </a>
        </div>

        {/* Footer Navigation Bar */}
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 mt-10 border-t border-zinc-200 text-xs font-mono">
          <Link
            href="/"
            className="p-4 rounded border border-zinc-200 hover:border-black text-left transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">← RETURN TO HOME</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black">
              A²I Framework Overview
            </span>
          </Link>

          <Link
            href="/essays/02-the-body-as-root-node"
            className="p-4 rounded border border-zinc-200 hover:border-black text-right transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">NEXT ENTRY →</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 02: The Body as Root Node
            </span>
          </Link>
        </nav>

      </main>

      {/* Institutional Footer */}
      <InstitutionalFooter />

    </div>
  );
}
