import React from 'react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { InstitutionalFooter } from '../../../components/InstitutionalFooter';

export default function Entry02Page() {
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
            PART 02 // NEUROBIOLOGY // HEAD-DIRECTION CELLS // 10 MIN READ
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 leading-tight mb-6">
            The Body as Root Node: Head-Direction Cells & Intentionality
          </h1>

          <p className="text-lg text-zinc-600 font-sans font-light leading-relaxed">
            Grounding machine intelligence in neurobiological spatial orientation and sensory homunculi.
          </p>
        </header>

        {/* Blockquote Callout */}
        <blockquote className="border-l-2 border-sky-500 pl-6 my-8 italic text-zinc-700 text-xl font-serif bg-zinc-50/50 py-4">
          "Without a body, spatial intelligence is merely vector math devoid of orientation."
        </blockquote>

        {/* Prose Article Body */}
        <article className="prose prose-zinc max-w-none text-zinc-800 text-lg leading-relaxed font-sans space-y-6">
          
          {/* Section I */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              I. The Root Node Deficiency in Modern LLMs
            </h2>

            <p>
              Current spatial AI models operate on disembodied latent coordinates. They possess statistical proximity without somatic orientation. In computer science, the root node is the origin from which all structural trees grow. Modern AI pipelines place prompt tokens or precedent images at the root. We must perform a radical correction: <strong>re-inserting the fully embodied human nervous system as the non-negotiable root node of every spatial data pipeline.</strong>
            </p>

            <p>
              Human spatial intelligence is not a disembodied software algorithm; it is hardwired into our biology. Grounded in the Nobel Prize-winning research of May-Britt Moser and Edvard Moser, we know the brain navigates space through a complex internal positioning system—specifically place cells, entorhinal grid cells, and head-direction cells.
            </p>

            <p>
              A vital historical and theoretical clarity must be maintained here: May-Britt Moser and Edvard Moser were co-researchers who jointly received the 2014 Nobel Prize in Physiology or Medicine. Honoring May-Britt Moser's central leadership is key to a technosomatic, cyber-feminist stance: spatial intelligence is anchored in the somatic, lived reality of the body, resisting paternalistic over-simplification and disembodied abstractions.
            </p>

            <p>
              While eye-tracking studies capture rapid, involuntary biological noise (3 to 4 saccades per second), head-direction vectors operate at an intentional, motor-driven temporal scale. When a person turns their head toward a spatial threshold, they are demonstrating motor intentionality—an active orientation of their entire attentional apparatus.
            </p>
          </section>

          {/* Section II */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              II. Re-anchoring Computational Space to Physical Neuroanatomy
            </h2>

            <p>
              By utilizing AI as a high-resolution phenomenological lens (rather than a generative form-maker), we can extract and aggregate head-direction vectors from real-world spaces. Using Markov chain modeling to map transition probabilities between spatial anchors, we convert Henri Bergson’s continuous <em>durée</em>—the felt flow of lived experience—into precise, actionable design intelligence.
            </p>

            <p>
              The sensory-motor homunculus, mapped along the cortical gyrus, demonstrates that physical sensory density is non-linear. The hands, lips, head, and feet consume disproportionate neural real estate compared to the torso. Spatial AI that ignores this biological asymmetry produces spaces optimized for abstract volumes rather than human neural reception.
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
            href="/essays/01-the-invisible-board"
            className="p-4 rounded border border-zinc-200 hover:border-black text-left transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">← PREVIOUS ENTRY</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 01: The Invisible Board
            </span>
          </Link>

          <Link
            href="/essays/03-escaping-grey-goo"
            className="p-4 rounded border border-zinc-200 hover:border-black text-right transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">NEXT ENTRY →</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 03: Escaping the 'Grey Goo'
            </span>
          </Link>
        </nav>

      </main>

      {/* Institutional Footer */}
      <InstitutionalFooter />

    </div>
  );
}
