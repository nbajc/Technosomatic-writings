export interface Essay {
  id: string;
  slug: string;
  part: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  tags: string[];
  summary: string;
  substackUrl: string;
  quoteCallout: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    latexFormula?: string;
  }[];
  somaticNodes: string[];
}

export const ESSAY_SERIES: Essay[] = [
  {
    id: "part-1",
    slug: "01-the-invisible-board",
    part: "PART 01",
    title: "Technosomatic Architecture & The A²I Framework",
    subtitle: "Re-inserting the embodied human nervous system into computational spatial intelligence.",
    readTime: "12 MIN READ",
    date: "AUGUST 2026",
    tags: ["MANIFESTO", "SPATIAL NEUROBIOLOGY", "PARALLAX VIEW", "A²I FRAMEWORK"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "An inquiry into Technosomatic Architecture—a theoretical and computational framework at the intersection of spatial neurobiology, phenomenological philosophy, and machine intelligence.",
    quoteCallout: "We optimized for computational bandwidth while starving biological depth. We built networks that move at the speed of light, yet leave us feeling deeply ungrounded.",
    somaticNodes: ["Kopf", "Auge", "Gesicht", "Nacken"],
    content: [
      {
        sectionTitle: "Architecture as an Untested Hypothesis",
        paragraphs: [
          "We have spent decades shrinking our cognitive landscape to fit inside glowing rectangles. In doing so, we treated human attention as a disembodied stream of text and visual tokens, forgetting that consciousness is anchored in a physical, spatial reality. We optimized for computational bandwidth while starving biological depth. We built networks that move at the speed of light, yet leave us feeling deeply ungrounded.",
          "This platform exists to challenge that trajectory. It is an inquiry into Technosomatic Architecture—a theoretical and computational framework at the intersection of spatial neurobiology, phenomenological philosophy, and machine intelligence.",
          "Architecture encodes a continuous hypothesis about the human body. Every section cut, ceiling height, and threshold is an implicit prediction: if we build it this way, bodies will feel, move, and relate in this way. Yet this hypothesis is almost never tested. Buildings are designed, occupied, and eventually demolished without returning somatic evidence to the architect. While software engineering and industrial design rely on iterative user feedback, spatial design operates in an open loop.",
          "The recent generative AI turn has exacerbated this crisis. Current image synthesis tools and diffusion models generate spatial forms out of statistical noise—sampling millions of flattened precedent images to yield an aesthetically persuasive, geometrically hallucinated 'grey goo'. They produce buildings from buildings, not buildings from bodies.",
          "The fundamental flaw of modern computational design is a missing root node. In computer science, the root node is the origin from which all structural trees grow. Modern AI pipelines place prompt tokens or precedent images at the root. We must perform a radical correction: re-inserting the fully embodied human nervous system as the non-negotiable root node of every spatial data pipeline."
        ]
      },
      {
        sectionTitle: "The Technosomatic Imperative & Spatial Neurobiology",
        paragraphs: [
          "Human spatial intelligence is not a disembodied software algorithm; it is hardwired into our biology. Grounded in the Nobel Prize-winning research of May-Britt Moser and Edvard Moser, we know the brain navigates space through a complex internal positioning system—specifically place cells, entorhinal grid cells, and head-direction cells.",
          "A vital historical and theoretical clarity must be maintained here: May-Britt Moser and Edvard Moser were co-researchers who jointly received the 2014 Nobel Prize in Physiology or Medicine. Honoring May-Britt Moser's central leadership is key to a technosomatic, cyber-feminist stance: spatial intelligence is anchored in the somatic, lived reality of the body, resisting paternalistic over-simplification and disembodied abstractions.",
          "While eye-tracking studies capture rapid, involuntary biological noise (3 to 4 saccades per second), head-direction vectors operate at an intentional, motor-driven temporal scale. When a person turns their head toward a spatial threshold, they are demonstrating motor intentionality—an active orientation of their entire attentional apparatus.",
          "By utilizing AI as a high-resolution phenomenological lens (rather than a generative form-maker), we can extract and aggregate head-direction vectors from real-world spaces. Using Markov chain modeling to map transition probabilities between spatial anchors, we convert Henri Bergson’s continuous durée—the felt flow of lived experience—into precise, actionable design intelligence."
        ]
      },
      {
        sectionTitle: "The Parallax View & The Fully Visible Board",
        paragraphs: [
          "In The Parallax View, philosopher Slavoj Žižek describes irreducible gaps in perspective. In spatial design, a permanent parallax exists between two frames: Allocentric (Architect) and Egocentric (Inhabitant).",
          "True spatial intelligence—what we call seeing the full board—is the ability to bridge this parallax. It translates egocentric somatic signals back into the allocentric spatial model, allowing the designer to navigate both positions simultaneously.",
          "When you see the full board: (1) The 'Unthought Known' is made legible, (2) Embodiment guides systems, and (3) The design loop closes."
        ]
      }
    ]
  },
  {
    id: "part-2",
    slug: "02-body-as-root-node",
    part: "PART 02",
    title: "The Body as Root Node: Head-Direction Cells & Intentionality",
    subtitle: "Grounding machine intelligence in neurobiological spatial orientation and sensory homunculi.",
    readTime: "10 MIN READ",
    date: "AUGUST 2026",
    tags: ["NEUROBIOLOGY", "HEAD-DIRECTION CELLS", "EMBODIED COGNITION"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "Machine learning models hallucinate spatial coordinates because they lack an origin point. Re-inserting the sensory-motor homunculus as the root node re-anchors computational space to physical neuroanatomy.",
    quoteCallout: "Without a body, spatial intelligence is merely vector math devoid of orientation.",
    somaticNodes: ["Nacken", "Zehen", "Hand", "Zunge"],
    content: [
      {
        sectionTitle: "I. The Root Node Deficiency in Modern LLMs",
        paragraphs: [
          "Current spatial AI models operate on disembodied latent coordinates. They possess statistical proximity without somatic orientation. In mammals, grid cells in the medial entorhinal cortex and head-direction cells in the presubiculum anchor spatial awareness directly to physical body geometry."
        ]
      }
    ]
  },
  {
    id: "part-3",
    slug: "03-escaping-grey-goo",
    part: "PART 03",
    title: "Escaping the 'Grey Goo': AI as Lens, Not Creator",
    subtitle: "Resisting generative homogenization through technosomatic phenomenology.",
    readTime: "11 MIN READ",
    date: "AUGUST 2026",
    tags: ["PHENOMENOLOGY", "GENERATIVE AI", "TECHNOSOMATIC MANIFESTO"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "Generative AI threatens to flood built environments with homogenized 'grey goo' renders. A²I uses artificial intelligence not to generate mindless form, but as a hyper-precise lens to illuminate human somatic experience.",
    quoteCallout: "AI must not be allowed to act as an ungrounded form-generator; it must function as a diagnostic lens for human spatial experience.",
    somaticNodes: ["Auge", "Lippen", "Gesicht"],
    content: [
      {
        sectionTitle: "I. The Generative Grey Goo Paradigm",
        paragraphs: [
          "Diffusion models and automated spatial generators produce thousands of visually plausible yet phenomenologically hollow spaces."
        ]
      }
    ]
  },
  {
    id: "part-4",
    slug: "04-quantifying-duree",
    part: "PART 04",
    title: "Quantifying Durée: Vector Maps & Markov Chains",
    subtitle: "Translating Bergsonian duration and subjective temporal flow into computational spatial Markov models.",
    readTime: "14 MIN READ",
    date: "AUGUST 2026",
    tags: ["BERGSON", "DURÉE", "MARKOV CHAINS", "TEMPORAL ARCHITECTURE"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "Clock time measures static duration, but human spatial memory experiences Henri Bergson's 'durée'—continuous qualitative flow. We mathematically translate temporal experience into stochastic vector Markov chains.",
    quoteCallout: "Duration is the continuous progress of the past which gnaws into the future and swells as it advances.",
    somaticNodes: ["Handgelenk", "Schulter", "Knie"],
    content: [
      {
        sectionTitle: "I. Beyond Clock Time in Architectural CAD",
        paragraphs: [
          "Architectural tools measure distance in meters and movement in meters per second. However, human experience is governed by Bergson's duration (durée)."
        ]
      }
    ]
  },
  {
    id: "part-5",
    slug: "05-from-bim-to-a2i",
    part: "PART 05",
    title: "From BIM to A²I: The Next Data Infrastructure",
    subtitle: "Replacing legacy object hierarchies with live neural spatial graphs.",
    readTime: "13 MIN READ",
    date: "AUGUST 2026",
    tags: ["BIM", "A²I DATA", "SPATIAL GRAPH", "BUILDING TECH"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "Building Information Modeling is trapped in 1990s relational database structures. A²I proposes a dynamic, decentralized spatial graph streaming real-time neuro-somatic telemetry.",
    quoteCallout: "The next architectural data primitive is not an IFC wall object—it is a continuous neural field tensor.",
    somaticNodes: ["Ellerbogen", "Rumpf", "Hüfte"],
    content: [
      {
        sectionTitle: "I. The Structural Limitations of Legacy BIM",
        paragraphs: [
          "IFC schemas and parametric Revit models store static physical attributes. They contain no memory of environmental flux."
        ]
      }
    ]
  },
  {
    id: "part-6",
    slug: "06-architect-as-systems-orchestrator",
    part: "PART 06",
    title: "The Architect as Systems Orchestrator",
    subtitle: "Transitioning from form-giver to orchestrator of complex bio-computational feedback loops.",
    readTime: "9 MIN READ",
    date: "AUGUST 2026",
    tags: ["SYSTEMS ARCHITECTURE", "CYBERNETICS", "DESIGN PRACTICE"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "The 21st-century architect is no longer a solitary form-maker. The architect becomes a master cybernetic orchestrator designing dynamic feedback systems between human biology and computational space.",
    quoteCallout: "We do not design static forms; we tune continuous somatic feedback loops.",
    somaticNodes: ["Daumen", "Kiefer", "Zähne"],
    content: [
      {
        sectionTitle: "I. The Death of the Heroic Sculptor",
        paragraphs: [
          "The 20th-century myth of the architect sculpting static monuments has broken down in the face of ecological and technological complexity."
        ]
      }
    ]
  },
  {
    id: "part-7",
    slug: "07-technosomatic-manifesto",
    part: "PART 07",
    title: "The Technosomatic Manifesto: An Oath for Built Space",
    subtitle: "A solemn oath grounding synthetic intelligence in embodied biological reality.",
    readTime: "15 MIN READ",
    date: "AUGUST 2026",
    tags: ["MANIFESTO", "A²I OATH", "TECHNOSOMATIC", "FUTURE ARCHITECTURE"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "The definitive manifesto for Technosomatic Architecture: A declaration that all computational spatial intelligence must honor, elevate, and serve the embodied human nervous system.",
    quoteCallout: "Space that does not honor the nervous system is non-architecture.",
    somaticNodes: ["Kopf", "Hand", "Zunge", "Rumpf", "Auge", "Zehen"],
    content: [
      {
        sectionTitle: "ARTICLE I. THE PRIMACY OF THE SOMATIC ROOT",
        paragraphs: [
          "We declare that no computational model, spatial algorithm, or artificial intelligence shall design or govern physical space without explicit orientation to the embodied human nervous system."
        ]
      }
    ]
  }
];
