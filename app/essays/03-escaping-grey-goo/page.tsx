import React from 'react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { InstitutionalFooter } from '../../../components/InstitutionalFooter';

export default function Entry03Page() {
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
            PART 03 // PHENOMENOLOGY // GENERATIVE AI // 11 MIN READ
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 leading-tight mb-6">
            Escaping the "Grey Goo": AI as Lens, Not Creator
          </h1>

          <p className="text-lg text-zinc-600 font-sans font-light leading-relaxed">
            Resisting generative homogenization through technosomatic phenomenology.
          </p>
        </header>

        {/* Blockquote Callout */}
        <blockquote className="border-l-2 border-sky-500 pl-6 my-8 italic text-zinc-700 text-xl font-serif bg-zinc-50/50 py-4">
          "AI must not be the creator of ungrounded form, but a high-resolution phenomenological lens."
        </blockquote>

        {/* Prose Article Body */}
        <article className="prose prose-zinc max-w-none text-zinc-800 text-lg leading-relaxed font-sans space-y-6">
          
          <p>
            The modern design ecosystem faces an epistemological crisis: an unprecedented overproduction of frictionless "solutions" that are never evaluated. Generative AI tools and diffusion models churn out infinite spatial variations in seconds, sampling flattened 2D architectural precedents to generate buildings from buildings.
          </p>

          <p>
            The result is a self-referential, aesthetically persuasive hallucination: <strong>the "grey goo" of disembodied form.</strong>
          </p>

          {/* DIAGRAM 1: OPEN LOOP GENERATIVE PARADIGM (Manifesto Style) */}
          <div className="my-10 p-6 md:p-8 rounded-lg bg-zinc-50 border border-zinc-200 space-y-6 shadow-sm not-prose">
            {/* Diagram Header */}
            <div className="text-center space-y-1">
              <span className="text-[10px] font-mono text-rose-600 tracking-widest uppercase font-bold">
                ARCHITECTURAL SCHEMATIC // OPEN-LOOP FAILURE
              </span>
              <h4 className="text-sm font-serif font-bold text-zinc-900 uppercase tracking-wide">
                Generative Paradigm: Open-Loop Disembodied Production
              </h4>
            </div>

            {/* 3 Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Card 1: Precedent Images */}
              <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-1 text-left shadow-xs">
                <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider">
                  [ PRECEDENT IMAGES ]
                </div>
                <div className="text-[11px] font-mono text-zinc-600 font-semibold uppercase">
                  2D Flattened Archives
                </div>
                <p className="text-xs font-sans text-zinc-500 leading-relaxed">
                  Disembodied photographic records and historical planar repositories devoid of live somatic context.
                </p>
              </div>

              {/* Card 2: Latent Diffusion */}
              <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-1 text-left shadow-xs">
                <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider">
                  [ LATENT DIFFUSION ]
                </div>
                <div className="text-[11px] font-mono text-zinc-600 font-semibold uppercase">
                  Statistical Noise Sampling
                </div>
                <p className="text-xs font-sans text-zinc-500 leading-relaxed">
                  Algorithmic interpolation across ungrounded latent coordinates, generating buildings from buildings.
                </p>
              </div>

              {/* Card 3: Frictionless Solutions */}
              <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-1 text-left shadow-xs">
                <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider">
                  [ "SOLUTIONS" ]
                </div>
                <div className="text-[11px] font-mono text-zinc-600 font-semibold uppercase">
                  Frictionless Variations
                </div>
                <p className="text-xs font-sans text-zinc-500 leading-relaxed">
                  Infinite rapid spatial proposals generated with zero telemetry for biological or cognitive impact.
                </p>
              </div>
            </div>

            {/* Downward Vector to Grey Goo */}
            <div className="flex flex-col items-center justify-center space-y-2 pt-2">
              <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>

              {/* Solid High-Contrast Box */}
              <div className="w-full max-w-lg bg-zinc-900 text-white p-4 rounded-md font-mono text-center tracking-widest text-xs uppercase shadow-md space-y-1 border border-rose-900/60">
                <div className="font-bold text-rose-300 text-sm tracking-wider">
                  THE "GREY GOO"
                </div>
                <div className="text-[11px] text-zinc-300 font-serif italic normal-case tracking-normal">
                  (Untested, Disembodied Hallucination Collapsing into Statistical Noise)
                </div>
              </div>

              {/* Status Note */}
              <div className="px-4 py-1.5 bg-white border border-zinc-300 rounded-md font-mono text-[11px] text-zinc-700 tracking-wider font-bold shadow-xs">
                [ OPEN LOOP: ZERO SOMATIC DATA RETURNED TO THE ARCHITECT ]
              </div>
            </div>
          </div>

          <p>
            The tragedy of this moment is not merely computational—it is institutional. Architecture as a discipline currently lacks an empirical method to evaluate its own hypotheses. When an industry has no mechanism to measure how a physical space modulates the human nervous system, every generative output carries the same weight. Infinite unverified forms collapse into statistical noise.
          </p>

          <p>
            To escape this trap, we must redefine the purpose of machine intelligence: <strong>AI must not be the creator of ungrounded form, but a high-resolution phenomenological lens.</strong>
          </p>

          {/* Section I */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              I. The Overproduction of the Untested
            </h2>

            <p>
              Every architectural drawing is an implicit claim: <em>if we construct this threshold, this ceiling height, this material finish, human bodies will experience regulation, connection, or focus.</em>
            </p>

            <p>
              Yet spatial design remains one of the few high-stakes industries operating in an entirely open loop:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Aerospace and Software:</strong> Prototypes are subjected to continuous telemetry, automated testing, and iterative user feedback.
              </li>
              <li>
                <strong>Architecture:</strong> Buildings are designed, constructed, occupied, and demolished without ever returning structured somatic data to the architect's desk.
              </li>
            </ul>

            <p>
              Generative AI entered this evaluation vacuum and weaponized it. By eliminating the friction of drawing, text-to-space and text-to-image models have supercharged production without introducing a single tool for assessment. We are mass-producing spatial proposals at machine scale while remaining entirely blind to their biological and cognitive impact.
            </p>
          </section>

          {/* Section II */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              II. Academic Silos and the Resistance to Spatial Intelligence
            </h2>

            <p>
              Why does architecture lack an evaluative mechanism? Because the discipline has guarded its borders against the very fields that could provide it.
            </p>

            <p>
              Current institutional and academic politics have historically treated architecture as an insular discourse of formal composition, semiotics, or historicist theory. Cross-pollination from cognitive neuroscience, spatial biology, and phenomenological computing has been sidelined or viewed with skepticism.
            </p>

            <p>
              By isolating itself from the science of how living organisms navigate physical environments, architectural academia has stalled the development of true <strong>spatial intelligence</strong>—an understanding of space grounded in embodiment, sensory processing, and neurobiology.
            </p>

            <p>
              Without cross-disciplinary grounding, computational design is left with no standard of truth other than novelty. The academic engine continues to reward formal gymnastics while the real-world consequence—the human body moving through built space—remains untracked.
            </p>
          </section>

          {/* Section III */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              III. The Inversion: AI as an Optical Instrument
            </h2>

            <p>
              To break the cycle of the grey goo, we must invert the computational pipeline. We do not need AI to replace human intentionality in formal design; we need AI to give us vision where we are currently blind.
            </p>

            {/* DIAGRAM 2: CLOSED LOOP TECHNOSOMATIC PARADIGM (Manifesto Style) */}
            <div className="my-10 p-6 md:p-8 rounded-lg bg-zinc-50 border border-zinc-200 space-y-6 shadow-sm not-prose">
              {/* Diagram Header */}
              <div className="text-center space-y-1">
                <span className="text-[10px] font-mono text-sky-600 tracking-widest uppercase font-bold">
                  ARCHITECTURAL SCHEMATIC // CLOSED-LOOP FEEDBACK
                </span>
                <h4 className="text-sm font-serif font-bold text-zinc-900 uppercase tracking-wide">
                  Technosomatic Paradigm: Closed-Loop Telemetric Feedback
                </h4>
              </div>

              {/* 4-Node Closed Circuit Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Node 1: Physical Body */}
                <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-1 text-left shadow-xs">
                  <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider flex items-center justify-between">
                    <span>[ PHYSICAL BODY ]</span>
                    <span className="text-[10px] text-sky-600 font-semibold uppercase">ROOT NODE</span>
                  </div>
                  <div className="text-[11px] font-mono text-sky-700 font-semibold uppercase">
                    Embodied Biological Nervous System
                  </div>
                  <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                    Interoceptive states, head-direction orientation, vestibular balance, and pre-linguistic somatic responses.
                  </p>
                </div>

                {/* Node 2: AI Phenomenological Lens */}
                <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-1 text-left shadow-xs">
                  <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider flex items-center justify-between">
                    <span>[ AI PHENOMENOLOGICAL LENS ]</span>
                    <span className="text-[10px] text-zinc-500 font-semibold uppercase">INSTRUMENT</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-700 font-semibold uppercase">
                    Head-Direction & Motor Intentionality
                  </div>
                  <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                    Computer vision tracking intentional orientation vectors and Markovian transition flow (durée).
                  </p>
                </div>

                {/* Node 4: Adaptive Architecture */}
                <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-1 text-left shadow-xs">
                  <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider flex items-center justify-between">
                    <span>[ ADAPTIVE ARCHITECTURE ]</span>
                    <span className="text-[10px] text-emerald-600 font-semibold uppercase">SYNTHESIS</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-700 font-semibold uppercase">
                    Evaluated Spatial Hypotheses
                  </div>
                  <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                    Responsive built environment, dynamic thresholds, and tuned geometry actively regulating nervous systems.
                  </p>
                </div>

                {/* Node 3: Allocentric Model (BIM) */}
                <div className="p-4 bg-white border border-zinc-300 rounded-md space-y-1 text-left shadow-xs">
                  <div className="text-xs font-mono font-bold text-zinc-900 tracking-wider flex items-center justify-between">
                    <span>[ ALLOCENTRIC MODEL (BIM) ]</span>
                    <span className="text-[10px] text-zinc-500 font-semibold uppercase">TELEMETRY</span>
                  </div>
                  <div className="text-[11px] font-mono text-zinc-700 font-semibold uppercase">
                    Somatic Telemetry Integration
                  </div>
                  <p className="text-xs font-sans text-zinc-600 leading-relaxed">
                    Live neural spatial graph streaming somatic data back into building models, closing the architectural loop.
                  </p>
                </div>
              </div>

              {/* Center Converging Vector & Solid High-Contrast Box */}
              <div className="flex flex-col items-center justify-center space-y-2 pt-2">
                <div className="w-full max-w-lg bg-black text-white p-4 rounded-md font-mono text-center tracking-widest text-xs uppercase shadow-md space-y-1">
                  <div className="font-bold text-white text-sm">
                    A²I CLOSED-LOOP SPATIAL TELEMETRY
                  </div>
                  <div className="text-[11px] text-sky-400 font-serif italic normal-case tracking-normal">
                    Physical Body ──► AI Lens ──► Somatic Telemetry / BIM ──► Adaptive Architecture ──► Physical Body
                  </div>
                </div>

                {/* Status Node */}
                <div className="px-4 py-1.5 bg-white border border-zinc-300 rounded-md font-mono text-[11px] text-zinc-900 tracking-wider font-bold shadow-xs">
                  [ CLOSED-LOOP DESIGN SYSTEM: HYPOTHESES TESTED & VERIFIED ]
                </div>
              </div>
            </div>

            <p>
              Grounded in N. Katherine Hayles’s concept of the <strong>cognitive nonconscious</strong>, machine learning operates in the same sub-narrative, high-temporal register as our biological sensory systems. It can process patterns of human orientation that conscious reflection misses:
            </p>

            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li>
                <strong>Extracting Intentional Orientation:</strong> Instead of generating speculative forms, computer vision tracks real-world <strong>head-direction vectors</strong>—the biological markers of motor intentionality.
              </li>
              <li>
                <strong>Quantifying <em>Durée</em>:</strong> By applying Markov chain models to physical movement transitions, AI translates Henri Bergson’s continuous <em>durée</em> (the lived flow of experience) into structured telemetry.
              </li>
              <li>
                <strong>Closing the Loop in BIM:</strong> Feeding this somatic data directly back into Building Information Modeling (BIM) tools converts architectural models from static geometry into dynamic, testable hypotheses.
              </li>
            </ol>
          </section>

          {/* Section IV */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              IV. Beyond the Hallucination
            </h2>

            <p>
              When AI is treated as a phenomenological lens rather than a generative vending machine, the role of the architect changes. The architect is no longer an editor sorting through algorithmic scrapbooks, but a systems orchestrator designing with full-board visibility.
            </p>

            <p>
              The antidote to the grey goo is accountability to the human nervous system. By opening architecture to spatial neurobiology and using computational tools to rigorously evaluate spatial reality, we can stop manufacturing ungrounded novelties—and begin building spaces that anchor human life.
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
            href="/essays/02-the-body-as-root-node"
            className="p-4 rounded border border-zinc-200 hover:border-black text-left transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">← PREVIOUS ENTRY</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 02: The Body as Root Node
            </span>
          </Link>

          <Link
            href="/essays/04-quantifying-duree"
            className="p-4 rounded border border-zinc-200 hover:border-black text-right transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">NEXT ENTRY →</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 04: Quantifying Durée
            </span>
          </Link>
        </nav>

      </main>

      {/* Institutional Footer */}
      <InstitutionalFooter />

    </div>
  );
}
