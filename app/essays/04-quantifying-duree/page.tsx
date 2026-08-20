import React from 'react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { InstitutionalFooter } from '../../../components/InstitutionalFooter';

export default function Entry04Page() {
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
            PART 04 // VECTOR HEAT MAPPING // MARKOV CHAINS // 9 MIN READ
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-light text-zinc-900 leading-tight mb-6">
            Quantifying <em>Durée</em>: Vector Heat Mapping, Markov Chains, and Phenomenological Data
          </h1>

          <p className="text-lg text-zinc-600 font-sans font-light leading-relaxed">
            Bridging the gap between static architecture and lived duration (<em>Kairos</em>) using head-direction vectors and Markov chain spatial navigation models.
          </p>
        </header>

        {/* Blockquote Callout */}
        <blockquote className="border-l-2 border-sky-500 pl-6 my-8 italic text-zinc-700 text-xl font-serif bg-zinc-50/50 py-4">
          "To bridge the gap between static architecture and lived experience, we must quantify <em>durée</em> without flattening it into <em>Chronos</em>."
        </blockquote>

        {/* Prose Article Body */}
        <article className="prose prose-zinc max-w-none text-zinc-800 text-lg leading-relaxed font-sans space-y-6">
          <p>
            Different concepts of time have existed since the beginning of time—pun intended.
          </p>

          <p>
            The ancient Greeks recognized this by dividing temporal reality into two distinct dimensions: <strong><em>Chronos</em></strong>, the sequential, quantitative tick of the clock, and <strong><em>Kairos</em></strong>, the opportune, qualitative, and deeply felt moment of transformation. In our modern rush toward efficiency, we flattened time almost exclusively into <em>Chronos</em>. We treated time as a series of uniform, interchangeable seconds, forgetting that human consciousness inhabits <em>Kairos</em> and what philosopher Henri Bergson called <strong><em>durée</em></strong> (duration)—the unbroken, qualitative flow where past sensations continuously interpenetrate the present.
          </p>

          <p>
            Architecture has long suffered under this flattened temporal paradigm: built space is static, but the experience of space is continuous, temporal, and fluid.
          </p>

          <p>
            For centuries, architects attempted to capture <em>durée</em> through poetic intuition, subjective narratives, or post-occupancy surveys. But surveys are post-rationalizations; they record what an occupant <em>thinks</em> they experienced after the fact, filtering somatic reality through language.
          </p>

          <p>
            To bridge the gap between static architecture and lived experience, we must do what previously seemed impossible: <strong>quantify <em>durée</em> without flattening it into <em>Chronos</em>.</strong> Through computer vision, head-direction vector extraction, and stochastic modeling, Architectural Artificial Intelligence (<em>A²I</em>) turns continuous phenomenological flow into actionable spatial telemetry.
          </p>

          {/* Section I */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              I. The Saccade vs. The Heading: Extracting Intentionality
            </h2>

            <p>
              Most spatial analytics start and end with eye-tracking or simple foot-traffic heat maps. Both approaches fail to capture true somatic engagement:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Eye-Tracking (Biological Noise):</strong> The human eye produces 3 to 4 saccadic movements per second. Most of this is rapid, involuntary sampling—subconscious visual scanning that reflects physiological reflexes rather than deliberate spatial orientation.
              </li>
              <li>
                <strong>Foot-Traffic Heat Maps (Kinematic Footprints):</strong> Tracking footsteps records where a body <em>walks</em>, but reveals nothing about where its attention, orientation, or emotional interest is anchored.
              </li>
            </ul>

            {/* DIAGRAM 1: SACCADE VS HEADING */}
            <div className="my-8 p-6 rounded-lg border border-neutral-800 bg-neutral-900/90 font-mono text-xs sm:text-sm text-neutral-100 shadow-md not-prose">
              <div className="text-neutral-400 uppercase tracking-wider mb-4 font-semibold text-center">
                Attentional Telemetry: Noise vs. Intentionality
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded border border-neutral-700/70 bg-neutral-800/80">
                  <div className="text-neutral-200 font-semibold mb-1">Gaze: Saccadic Noise</div>
                  <div className="text-neutral-400 text-xs mb-2">3–4 rapid involuntary jumps/sec</div>
                  <div className="text-rose-400 font-mono text-xs uppercase tracking-wide font-bold">High Noise • Reflexive Sampling</div>
                </div>
                <div className="p-4 rounded border border-cyan-800/60 bg-cyan-950/40">
                  <div className="text-cyan-200 font-semibold mb-1">Heading: Motor Intentionality</div>
                  <div className="text-cyan-300/80 text-xs mb-2">Sustained head/torso spatial vector</div>
                  <div className="text-cyan-400 font-mono text-xs uppercase tracking-wide font-bold">High Signal • Deliberate Commitment</div>
                </div>
              </div>
            </div>

            <p>
              In contrast, <strong>head-direction vectors</strong> operate at a motor-driven, intentional scale. Turning one’s head toward a threshold, an alcove, a skylight, or an artwork requires the recruitment of musculoskeletal effort. It is an act of <strong>motor intentionality</strong>—the physical alignment of the organism’s primary sensory apparatus with an architectural event.
            </p>

            <p>
              By capturing egocentric head-direction vectors via non-invasive spatial vision models, we record genuine attention without burdening occupants with wearable apparatuses.
            </p>
          </section>

          {/* Section II */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              II. Markov Chains &amp; Cognitive Landmarks: Uncovering Spatial Decision-Making
            </h2>

            <p>
              Once directional vectors are extracted, how do we model the qualitative flow through space?
            </p>

            <p>
              We structure the environment as a network of <strong>phenomenological anchors</strong> (spatial attractors, thresholds, compression zones, and vistas) and treat occupant navigation as a stochastic process using <strong>Markov chains</strong>.
            </p>

            <p>
              A first-order Markov model calculates the transition probability <span className="font-mono text-base font-semibold text-zinc-900">P(S&#123;t+1&#125; | S&#123;t&#125;)</span>—the likelihood that an occupant oriented toward Anchor <em>A</em> will next transition their attention or posture toward Anchor <em>B</em>.
            </p>

            {/* DIAGRAM 2: MARKOV SPATIAL ENGINE PIPELINE */}
            <div className="my-8 p-6 rounded-lg border border-neutral-800 bg-neutral-900/90 font-mono text-xs sm:text-sm text-neutral-100 shadow-md not-prose">
              <div className="text-neutral-400 uppercase tracking-wider mb-4 font-semibold text-center">
                Markov Phenomenological Engine Pipeline
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
                <div className="p-3 rounded border border-neutral-700 bg-neutral-800/80 w-full md:w-1/3">
                  <span className="block text-neutral-200 font-medium">Egocentric Vectors</span>
                  <span className="text-neutral-400 text-xs">Head-Direction &amp; Dwell Times</span>
                </div>
                <div className="text-neutral-500 text-lg md:rotate-0 rotate-90">→</div>
                <div className="p-3 rounded border border-cyan-800/60 bg-cyan-950/40 w-full md:w-1/3">
                  <span className="block text-cyan-200 font-medium">Markov State Machine</span>
                  <span className="text-cyan-400/80 text-xs">Transition Probabilities &amp; Landmarks</span>
                </div>
                <div className="text-neutral-500 text-lg md:rotate-0 rotate-90">→</div>
                <div className="p-3 rounded border border-emerald-800/60 bg-emerald-950/40 w-full md:w-1/3">
                  <span className="block text-emerald-200 font-medium">Allocentric BIM Overlay</span>
                  <span className="text-emerald-400/80 text-xs">Dynamic Durée Heat Mapping</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-center text-neutral-400 text-xs">
                Decodes latent spatial decision trees &amp; maps universal internal cognitive anchors
              </div>
            </div>

            {/* DIAGRAM: MARKOV SPATIAL TRANSITION NETWORK */}
            <div className="my-8 p-6 rounded-lg border border-neutral-800 bg-neutral-900/90 font-mono text-xs sm:text-sm text-neutral-100 shadow-md not-prose">
              <div className="text-neutral-400 uppercase tracking-wider mb-4 font-semibold text-center">
                Markov Spatial Transition Network
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="p-3.5 rounded border border-neutral-700 bg-neutral-800/80">
                  <div className="text-neutral-200 font-semibold mb-1">Zone A: Entry</div>
                  <div className="text-cyan-400 text-xs font-mono">P(Threshold | Entry) →</div>
                </div>
                <div className="p-3.5 rounded border border-cyan-800/60 bg-cyan-950/30">
                  <div className="text-cyan-200 font-semibold mb-1">Zone B: Threshold</div>
                  <div className="text-cyan-300/80 text-xs font-mono">P(Gallery | Threshold) ↓</div>
                </div>
                <div className="p-3.5 rounded border border-emerald-800/60 bg-emerald-950/30">
                  <div className="text-emerald-200 font-semibold mb-1">Zone D: Exit</div>
                  <div className="text-emerald-400 text-xs font-mono">← Recirculation / Drain</div>
                </div>
                <div className="p-3.5 rounded border border-neutral-700 bg-neutral-800/80">
                  <div className="text-neutral-200 font-semibold mb-1">Zone C: Deep Gallery</div>
                  <div className="text-neutral-400 text-xs font-mono">P(Exit | Gallery) ←</div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800 text-center text-neutral-400 text-xs">
                State transition distribution: <span className="text-cyan-300 font-bold">P(S&#123;t+1&#125; = j | S&#123;t&#125; = i) = T&#123;ij&#125;</span>
              </div>
            </div>

            <p>
              Crucially, this modeling does more than record movement: <strong>it uncovers how humans conceptualize spatial navigation.</strong>
            </p>

            <ol className="list-decimal pl-6 space-y-3 my-4">
              <li>
                <strong>Identifying Universal Internal Landmarks:</strong> Regions with intense vector convergence (high-density vector heat maps) reveal the features that the biological nervous system naturally prioritizes. These are not always what the architect intended as a centerpiece; they are the space's emergent, universal <strong>cognitive landmarks</strong>—the anchors around which inhabitants mentally map the environment.
              </li>
              <li>
                <strong>Decoding Navigation Decision Trees:</strong> The transition probabilities between these landmarks expose the latent decision-making process of the human mind in space. When probabilities disperse evenly across multiple paths, the space induces cognitive friction and ambiguity; when they concentrate into clear transitional vectors, the architecture provides effortless intuitive orientation.
              </li>
              <li>
                <strong>Mapping Dwell States &amp; Friction:</strong> By computing the steady-state distribution of the Markov matrix, we discover where spatial attention naturally pools, recirculates, or prematurely drains.
              </li>
            </ol>
          </section>

          {/* Section III */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              III. Translating Egocentric Flow to Allocentric Models
            </h2>

            <p>
              The ultimate destination for this phenomenological telemetry is the architect's <strong>allocentric frame</strong>—the Building Information Model (BIM).
            </p>

            {/* DIAGRAM: CONVERSION PIPELINE */}
            <div className="my-8 p-6 rounded-lg border border-neutral-800 bg-neutral-900/90 font-mono text-xs sm:text-sm text-neutral-100 shadow-md not-prose">
              <div className="text-neutral-400 uppercase tracking-wider mb-4 font-semibold text-center">
                Spatial Telemetry Conversion Pipeline
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-4 rounded border border-neutral-700 bg-neutral-800/80 space-y-2">
                  <div className="text-neutral-200 font-semibold text-xs uppercase tracking-wide border-b border-neutral-700 pb-1">
                    [ Egocentric Data ]
                  </div>
                  <ul className="text-neutral-300 text-xs space-y-1.5">
                    <li>• Head-Direction Vectors</li>
                    <li>• Sustained Dwell Times</li>
                    <li>• Movement Trajectories</li>
                  </ul>
                </div>
                <div className="p-4 rounded border border-cyan-800/60 bg-cyan-950/30 space-y-2">
                  <div className="text-cyan-200 font-semibold text-xs uppercase tracking-wide border-b border-cyan-800/60 pb-1">
                    [ Markov Engine ]
                  </div>
                  <ul className="text-cyan-300/90 text-xs space-y-1.5">
                    <li>• Transition Probabilities</li>
                    <li>• Cognitive Landmark Maps</li>
                    <li>• Durée Density Fields</li>
                  </ul>
                </div>
                <div className="p-4 rounded border border-emerald-800/60 bg-emerald-950/30 space-y-2">
                  <div className="text-emerald-200 font-semibold text-xs uppercase tracking-wide border-b border-emerald-800/60 pb-1">
                    [ Allocentric BIM ]
                  </div>
                  <ul className="text-emerald-300/90 text-xs space-y-1.5">
                    <li>• Parametric Geometry Tuning</li>
                    <li>• Spatial Telemetry Overlay</li>
                    <li>• Dynamic Circulation Paths</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              By streaming vector heat maps and transition matrices directly into BIM environments:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>The Blueprint Becomes Dynamic:</strong> Static floor plans are overlaid with live or simulated vector density gradients, illustrating not just where bodies walk, but how they perceive boundaries and openings.
              </li>
              <li>
                <strong>Threshold Verification:</strong> Architects can evaluate whether a compression zone (like a low-ceiling entryway) successfully heightens the psychological impact of a subsequent decompression zone (like a double-height atrium).
              </li>
              <li>
                <strong>The Unthought Known Becomes Legible:</strong> Sub-perceptual friction—such as hesitation at an ambiguous split corridor or disorientation in an over-illuminated atrium—is pinpointed before costly post-occupancy retrofits.
              </li>
            </ul>
          </section>

          {/* Section IV */}
          <section>
            <h2 className="font-serif text-2xl font-normal text-zinc-900 mt-12 mb-4 border-b border-zinc-200 pb-2">
              IV. The Closed Loop of Experiential Design
            </h2>

            <p>
              Quantifying <em>durée</em> is not about surveillance or Taylorist optimization; it is about <strong>epistemological accountability</strong>.
            </p>

            <p>
              When we equip the architect with the tools to observe how lived duration and <em>Kairos</em> unfold within built form, design ceases to be an ungrounded guess. We replace the static snapshots of the past with a dynamic understanding of human embodiment and cognitive mapping.
            </p>

            <p>
              By measuring the flow of bodily orientation and the stochastic paths of spatial navigation, we finally give architecture the empirical language it needs to design for the full spectrum of conscious life.
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
            href="/essays/03-escaping-grey-goo"
            className="p-4 rounded border border-zinc-200 hover:border-black text-left transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">← PREVIOUS ENTRY</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 03: Escaping the "Grey Goo"
            </span>
          </Link>

          <Link
            href="/essays/05-from-bim-to-a2i"
            className="p-4 rounded border border-zinc-200 hover:border-black text-right transition-colors group bg-white"
          >
            <span className="text-zinc-500 uppercase font-semibold block mb-1">NEXT ENTRY →</span>
            <span className="font-serif text-base text-zinc-900 group-hover:text-black line-clamp-1">
              Part 05: From BIM to A²I
            </span>
          </Link>
        </nav>
      </main>

      {/* Institutional Footer */}
      <InstitutionalFooter />
    </div>
  );
}
