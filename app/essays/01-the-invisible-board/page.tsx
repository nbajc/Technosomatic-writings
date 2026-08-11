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
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 bg-white">
        
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
            A²I TECHNOSOMATIC MANIFESTO // POSITION PAPER // 12 MIN READ
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 leading-tight mb-6">
            The Body as the First Screen: An Invitation to Technosomatic Architecture
          </h1>

          <p className="text-lg text-zinc-600 font-sans font-light leading-relaxed">
            Re-inserting the embodied human nervous system into computational spatial intelligence.
          </p>
        </header>

        {/* Blockquote Callout */}
        <blockquote className="border-l-2 border-sky-500 pl-6 my-8 italic text-zinc-700 text-xl font-serif bg-zinc-50/50 py-4">
          "We optimized for computational bandwidth while starving biological depth. We built networks that move at the speed of light, yet leave us feeling deeply ungrounded."
        </blockquote>

        {/* Prose Article Body */}
        <article className="prose prose-zinc max-w-none text-zinc-800 text-lg leading-relaxed font-sans space-y-6">
          
          <p>
            We have spent decades shrinking our cognitive landscape to fit inside glowing rectangles. In doing so, we treated human attention as a disembodied stream of text and visual tokens, forgetting that consciousness is anchored in a physical, spatial reality. We optimized for computational bandwidth while starving biological depth. We built networks that move at the speed of light, yet leave us feeling deeply ungrounded.
          </p>

          <p>
            The body was our first screen—the original high-resolution, multi-sensory interface through which all spatial reality is filtered.
          </p>

          <p>
            This platform exists to challenge that trajectory. It is an inquiry into <strong>Technosomatic Architecture</strong>—a theoretical and computational framework at the intersection of spatial neurobiology, phenomenological philosophy, and machine intelligence.
          </p>

          {/* Section I */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              Architecture as an Untested Hypothesis
            </h2>

            <p>
              Architecture encodes a continuous hypothesis about the human body. Every section cut, ceiling height, and threshold is an implicit prediction: if we build it this way, bodies will feel, move, and relate in this way. Yet this hypothesis is almost never tested. Buildings are designed, occupied, and eventually demolished without returning somatic evidence to the architect. While software engineering and industrial design rely on iterative user feedback, spatial design operates in an open loop.
            </p>

            <p>
              The recent generative AI turn has exacerbated this crisis. Current image synthesis tools and diffusion models generate spatial forms out of statistical noise—sampling millions of flattened precedent images to yield an aesthetically persuasive, geometrically hallucinated "grey goo". They produce buildings from buildings, not buildings from bodies.
            </p>

            <p>
              The fundamental flaw of modern computational design is a missing root node. In computer science, the root node is the origin from which all structural trees grow. Modern AI pipelines place prompt tokens or precedent images at the root. We must perform a radical correction: <strong>re-inserting the fully embodied human nervous system as the non-negotiable root node of every spatial data pipeline.</strong>
            </p>
          </section>

          {/* Section II */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              The Technosomatic Imperative & Spatial Neurobiology
            </h2>

            <p>
              Human spatial intelligence is not a disembodied software algorithm; it is hardwired into our biology. Grounded in the Nobel Prize-winning research of May-Britt Moser and Edvard Moser, we know the brain navigates space through a complex internal positioning system—specifically place cells, entorhinal grid cells, and head-direction cells.
            </p>

            <p>
              A vital historical and theoretical clarity must be maintained here: May-Britt Moser and Edvard Moser were co-researchers who jointly received the 2014 Nobel Prize in Physiology or Medicine. Honoring May-Britt Moser's central leadership is key to a technosomatic, cyber-feminist stance: spatial intelligence is anchored in the somatic, lived reality of the body, resisting paternalistic over-simplification and disembodied abstractions.
            </p>

            <p>
              While eye-tracking studies capture rapid, involuntary biological noise (3 to 4 saccades per second), head-direction vectors operate at an intentional, motor-driven temporal scale. When a person turns their head toward a spatial threshold, they are demonstrating motor intentionality—an active orientation of their entire attentional apparatus.
            </p>

            <p>
              By utilizing AI as a high-resolution phenomenological lens (rather than a generative form-maker), we can extract and aggregate head-direction vectors from real-world spaces. Using Markov chain modeling to map transition probabilities between spatial anchors, we convert Henri Bergson’s continuous <em>durée</em>—the felt flow of lived experience—into precise, actionable design intelligence.
            </p>
          </section>

          {/* Section III */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              The Parallax View & The Fully Visible Board
            </h2>

            <p>
              In <em>The Parallax View</em>, philosopher Slavoj Žižek describes irreducible gaps in perspective. In spatial design, a permanent parallax exists between two frames:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>The Allocentric Frame (Architect):</strong> The bird’s-eye coordinate system of blueprints, plans, sections, and BIM models, which achieves clarity by abstracting away the human body.
              </li>
              <li>
                <strong>The Egocentric Frame (Inhabitant):</strong> The self-centered field of somatic affordances radiating from the individual body's position, orientation, and heading.
              </li>
            </ul>

            <p>
              True spatial intelligence—what we call <strong>seeing the full board</strong>—is the ability to bridge this parallax. It translates egocentric somatic signals back into the allocentric spatial model, allowing the designer to navigate both positions simultaneously.
            </p>

            <p>
              When you see the full board:
            </p>

            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li>
                <strong>The "Unthought Known" is Made Legible:</strong> As psychoanalyst Christopher Bollas noted, the body possesses pre-linguistic knowledge of space—registering an architectural "glitch" or spatial discomfort long before conscious thought can name it.
              </li>
              <li>
                <strong>Embodiment Guides Systems:</strong> AI ceases to be a gimmick for rendering static geometry and becomes an instrument that measures how spatial configurations modulate human nervous systems.
              </li>
              <li>
                <strong>The Design Loop Closes:</strong> Architecture evolves from an untested, static artifact into an adaptive, somatically informed data ecosystem.
              </li>
            </ol>
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
            href="/essays/02-body-as-root-node"
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
