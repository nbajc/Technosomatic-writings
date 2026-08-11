import React from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { InstitutionalFooter } from '../../components/InstitutionalFooter';
import ParallaxDiagram from '../../components/ParallaxDiagram';

export default function ManifestoPage() {
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
            <span>← BACK TO FRAMEWORK OVERVIEW</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="border-b border-zinc-200 pb-6 mb-8 space-y-4">
          <div className="text-xs font-mono tracking-widest text-sky-600 font-bold uppercase">
            A²I TECHNOSOMATIC MANIFESTO // OFFICIAL POSITION PAPER // 15 MIN READ
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 leading-tight mb-4">
            A²I TECHNOSOMATIC MANIFESTO
          </h1>

          <h2 className="text-xl md:text-2xl font-serif text-zinc-700 font-normal leading-snug">
            Re-Inserting the Embodied Human Nervous System into Computational Spatial Intelligence
          </h2>
        </header>

        {/* Prose Article Body */}
        <article className="prose prose-zinc max-w-none text-zinc-800 text-lg leading-relaxed font-sans space-y-8">
          
          {/* Preamble */}
          <section className="space-y-4 border-b border-zinc-200 pb-8">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-bold">
              PREAMBLE: THE CRISIS OF DISEMBODIED COMPUTATION
            </h3>

            <p>
              We have spent decades shrinking our cognitive landscape to fit inside glowing rectangles. In doing so, we treated human attention as a disembodied stream of text and visual tokens, forgetting that consciousness is anchored in a physical, spatial reality. We optimized for computational bandwidth while starving biological depth. We built networks that move at the speed of light, yet leave us feeling deeply ungrounded.
            </p>

            <p className="font-medium text-zinc-900">
              The human body was our first screen—the original high-resolution, multi-sensory interface through which all spatial reality is filtered.
            </p>

            <p>
              This Manifesto establishes <strong>Architectural Artificial Intelligence (A²I)</strong> and <strong>Technosomatic Architecture</strong>: a theoretical, computational, and ethical framework operating at the intersection of spatial neurobiology, existential phenomenology, psychoanalysis, and machine intelligence.
            </p>

            {/* Quote Callout */}
            <blockquote className="border-l-2 border-sky-500 pl-6 my-6 italic text-zinc-700 text-xl font-serif bg-zinc-50/50 py-4">
              "Without a body, spatial intelligence is merely vector math devoid of orientation."
            </blockquote>
          </section>

          {/* Tenet I */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-zinc-900 border-b border-zinc-200 pb-2">
              Tenet I: The Root Node Correction
            </h3>

            <p>
              In computer science, the root node is the origin from which all structural trees grow. Modern computational design and generative AI suffer from a systemic structural error: a missing root node.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>The Fallacy of Precedent:</strong> Contemporary image-synthesis engines and diffusion models generate spatial form from statistical noise—sampling millions of flattened 2D images to yield an aesthetically persuasive, geometrically hallucinated "grey goo." Current pipelines place prompt tokens, parametric rules, or historical precedent images at the root. They produce buildings from buildings, not buildings from bodies.
              </li>
              <li>
                <strong>The Imperative:</strong> We demand a radical epistemological correction. The fully embodied human nervous system—with its interoceptive signals, head-direction vectors, and spatial orientation mechanisms—must be restored as the non-negotiable root node of every spatial data pipeline.
              </li>
            </ul>
          </section>

          {/* Tenet II */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-zinc-900 border-b border-zinc-200 pb-2">
              Tenet II: Architecture as a Tested Hypothesis
            </h3>

            <p>
              Architecture encodes a continuous hypothesis about the human body. Every section cut, ceiling height, material selection, and threshold is an implicit prediction: if we construct space in this manner, human bodies will feel, move, regulate, and relate in predictable ways.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>The Open Loop:</strong> Buildings are currently designed, delivered, occupied, and eventually demolished in an open feedback loop. Unlike software engineering or aerospace design, spatial design rarely collects objective somatic data to verify its hypotheses.
              </li>
              <li>
                <strong>Closing the Loop:</strong> A²I converts architecture into a closed, adaptive feedback loop. By integrating real-time somatic data back into allocentric design models, we transform built space from an untested, static artifact into a somatically informed data ecosystem.
              </li>
            </ul>
          </section>

          {/* Tenet III */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-zinc-900 border-b border-zinc-200 pb-2">
              Tenet III: Spatial Neurobiology & Motor Intentionality
            </h3>

            <p>
              Human spatial intelligence is not an abstract software algorithm; it is hardwired into our neurobiology.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>The Brain’s Internal Positioning System:</strong> The brain navigates space through a complex biological coordinate system—specifically hippocampal place cells, entorhinal grid cells, and head-direction cells (discovered through the Nobel Prize-winning research of May-Britt Moser, Edvard Moser, and John O’Keefe).
              </li>
              <li>
                <strong>The Cyber-Feminist Stance:</strong> Honoring May-Britt Moser's central scientific leadership is a core tenet of our technosomatic position. Spatial intelligence is anchored in the somatic, lived reality of the body, resisting paternalistic over-simplifications that reduce spatial experience to abstract mathematical grids.
              </li>
              <li>
                <strong>Intentionality over Saccadic Noise:</strong> Eye-tracking studies capture rapid, involuntary biological noise (3 to 4 saccades per second). Conversely, head-direction vectors operate at an intentional, motor-driven temporal scale. When a body turns its head toward a spatial threshold, it demonstrates motor intentionality—an active, physical orientation of its entire attentional apparatus.
              </li>
            </ul>
          </section>

          {/* Tenet IV */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-zinc-900 border-b border-zinc-200 pb-2">
              Tenet IV: AI as Phenomenological Lens, Not Generative Form-Maker
            </h3>

            <p>
              We reject the reduction of Artificial Intelligence to a cheap rendering engine or an automated generator of ungrounded form.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>The Phenomenological Instrument:</strong> Machine intelligence must serve as a high-resolution optical instrument—a microscope for pre-linguistic cognitive data.
              </li>
              <li>
                <strong>Quantifying Durée:</strong> By extracting and aggregating head-direction vectors across space and applying Markov chain modeling to measure transition probabilities between spatial anchors, AI allows us to map Henri Bergson’s continuous <em>durée</em> (lived flow of experience). It converts subjective spatial "vibe" into precise, actionable design intelligence.
              </li>
              <li>
                <strong>Reading the Nonconscious:</strong> Grounded in N. Katherine Hayles’s cognitive nonconscious, AI operates in the same sub-narrative register as the human nervous system, recognizing spatial patterns that exceed the capacity of unaided human perception.
              </li>
            </ul>
          </section>

          {/* Tenet V */}
          <section className="space-y-4">
            <h3 className="font-serif text-2xl font-normal text-zinc-900 border-b border-zinc-200 pb-2">
              Tenet V: Bridging the Parallax ("Seeing the Full Board")
            </h3>

            <p>
              In <em>The Parallax View</em>, Slavoj Žižek describes irreducible gaps in perspective that cannot be resolved by adopting a neutral third position. In spatial design, a permanent parallax exists between two reference frames:
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>The Allocentric Frame (Architect):</strong> The bird’s-eye coordinate system of blueprints, sections, top-down grids, and BIM models—achieving structural clarity by abstracting away the human body.
              </li>
              <li>
                <strong>The Egocentric Frame (Inhabitant):</strong> The self-centered field of somatic affordances, emotional construction, and sensory orientation radiating from the individual body's position and heading.
              </li>
            </ol>

            <p>
              <em>"Seeing the Full Board"</em> is the defining capability of A²I. It translates egocentric somatic signals directly into the architect’s allocentric model, allowing designers to navigate both perspectives simultaneously.
            </p>

            {/* Custom Interactive Architectural Schematic Component */}
            <ParallaxDiagram />

            <p>
              When we bridge the parallax:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>The "Unthought Known" Made Legible:</strong> As psychoanalyst Christopher Bollas established, the body possesses pre-linguistic knowledge of space. It registers an architectural "glitch" or spatial anxiety long before conscious thought can articulate it. A²I makes this unthought known visible.
              </li>
              <li>
                <strong>Embodied Alignment:</strong> Technology ceases to be a screen that demands disembodied attention and becomes a substrate that clarifies human presence, movement, and spatial orientation.
              </li>
            </ul>
          </section>

          {/* Declaration of Action */}
          <section className="pt-8 border-t border-zinc-200 space-y-4">
            <h3 className="font-serif text-2xl font-normal text-zinc-900">
              Declaration of Action
            </h3>

            <p>
              We commit to building software, spatial protocols, and architectural environments that respect the body as the primary matrix of knowledge. We refuse to surrender built space to ungrounded algorithmics, statistical noise, and disembodied flatland interfaces.
            </p>

            <div className="p-6 rounded-lg bg-zinc-900 text-white space-y-2 text-center font-serif text-lg">
              <p className="font-light italic">
                Let us stop building systems that demand we leave our bodies behind.
              </p>
              <p className="font-bold tracking-wide">
                Let us build the tools that allow us to see the full board.
              </p>
            </div>
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
            <span className="text-zinc-500 uppercase font-semibold block mb-1">← FRAMEWORK OVERVIEW</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black">
              Return to 7-Part Series Grid
            </span>
          </Link>

          <Link
            href="/essays/01-the-invisible-board"
            className="p-4 rounded border border-zinc-200 hover:border-black text-right transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">START ESSAY SERIES →</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 01: The Invisible Board
            </span>
          </Link>
        </nav>

      </main>

      {/* Institutional Footer */}
      <InstitutionalFooter />

    </div>
  );
}
