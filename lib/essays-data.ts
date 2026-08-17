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
    title: "The Invisible Board: Game Theory, Space, and Imperfect Information",
    subtitle: "Why we navigate built space with obscured somatic situational awareness, and how A²I restores epistemological completeness.",
    readTime: "12 MIN READ",
    date: "AUGUST 2026",
    tags: ["GAME THEORY", "NEUROBIOLOGY", "IMPERFECT INFORMATION", "SPATIAL AI"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "Architectural spatial synthesis is not a static layout optimization problem—it is a high-stakes game of imperfect information where human intentionality and biological spatial agents negotiate dynamic boundaries.",
    quoteCallout: "Grounding is not a wellness practice—it is a condition of epistemological completeness.",
    somaticNodes: ["Kopf", "Auge", "Gesicht", "Nacken"],
    content: [
      {
        sectionTitle: "I. Imperfect Information as a Default Spatial Condition",
        paragraphs: [
          "Game theory distinguishes between games of perfect and imperfect information. In a game of perfect information—such as chess—every player has complete access to the state of the board at all times. Decisions are made from full situational awareness. In games of imperfect information, players act on partial data, filling systemic gaps with assumption, habit, or biological instinct.",
          "Humans navigating built environments play a game of imperfect information as their default condition. The human body generates continuous somatic data—interoceptive signals, affective states, physiological responses—but most of it remains below conscious cognitive access. We feel that a room is wrong before we know why. We leave a building exhausted without understanding the underlying mechanism. The board exists; we simply cannot see it.",
          "Full embodied presence is the condition in which the board becomes visible to the self. When we are somatically present, we have access to our own complete state. We are playing with full information. When we are dissociated, overwhelmed, or mediated through a screen, the board is obscured. We operate as reactive characters: scripted, responding to external triggers rather than reading the full game."
        ]
      },
      {
        sectionTitle: "II. The Navigation Analogy: Near-Field Somatics vs. Full-Board Visibility",
        paragraphs: [
          "The spatial navigation analogy makes the complementary role of digital tools precise:",
          "• The Driver (Near-Field Instrument): Holds high-resolution somatic data—proprioception, peripheral vision, haptic feedback from the steering wheel.",
          "• The Navigation Map (Full-Board Visibility): Provides situational awareness beyond the visual field—real-time traffic conditions, global routing logic, spatial data the driver cannot compute alone.",
          "Neither replaces the other. The map without the driver is autonomous—no body in the loop. The driver without the map has presence without range. Together, they constitute a fully informed player.",
          "This is the foundational model for Architectural Artificial Intelligence (A²I). AI extends visibility to the full board. The body remains the irreplaceable near-field instrument. The design decision belongs to the architect who holds both."
        ]
      },
      {
        sectionTitle: "III. The Open Architectural Loop",
        paragraphs: [
          "In traditional architectural practice, the feedback loop remains open: buildings are designed, occupied, and demolished without ever returning live somatic or neurobiological telemetry to the architect.",
          "A²I closes this loop by inserting the human body as the root node. By using AI as a high-resolution optical instrument—aggregating head-direction vectors and mapping transition probabilities—we expand authorial resolution to finally see the human occupant as they truly exist."
        ]
      }
    ]
  },
  {
    id: "part-2",
    slug: "02-the-body-as-root-node",
    part: "PART 02",
    title: "The Body as Root Node: Head-Direction Cells, Intentionality, and the Technosomatic Imperative",
    subtitle: "Grounding machine intelligence in neurobiological spatial orientation and sensory homunculi.",
    readTime: "10 MIN READ",
    date: "AUGUST 2026",
    tags: ["NEUROBIOLOGY", "HEAD-DIRECTION CELLS", "MOSER CORRECTION", "ROOT NODE"],
    substackUrl: "https://substack.com/@natashabajc",
    summary: "Without a body, spatial intelligence is merely vector math devoid of orientation. Re-inserting the sensory homunculus and May-Britt Moser's neurobiological positioning system as the root node.",
    quoteCallout: "Without a body, spatial intelligence is merely vector math devoid of orientation.",
    somaticNodes: ["Nacken", "Zehen", "Hand", "Zunge"],
    content: [
      {
        sectionTitle: "I. The Root Node Deficiency in Modern LLMs & Generative AI",
        paragraphs: [
          "Current spatial AI models operate on disembodied latent coordinates. They possess statistical proximity without somatic orientation. The recent generative turn has exacerbated this crisis: modern diffusion models and image synthesis engines generate spatial forms out of statistical noise—sampling millions of flattened precedent images to yield an aesthetically persuasive, geometrically hallucinated 'grey goo.' They produce buildings from buildings, not buildings from bodies.",
          "In computer science, the root node is the origin from which all structural trees grow. In modern AI pipelines, prompt tokens or precedent images are placed at the root. We must perform a radical correction: re-inserting the fully embodied human nervous system as the non-negotiable root node of every spatial data pipeline.",
          "Architecture encodes a continuous hypothesis about the human body—every section cut, ceiling height, and threshold predicts how a body will feel and move. Yet this hypothesis is almost never tested; buildings are delivered, occupied, and demolished in an open loop without returning somatic data to the designer. To close this loop, we must ground machine intelligence in neurobiological spatial orientation and the realities of the sensory homunculus."
        ]
      },
      {
        sectionTitle: "II. Spatial Neurobiology & The Moser Correction",
        paragraphs: [
          "Human spatial intelligence is not an abstract algorithm; it is hardwired into our biology. Grounded in the Nobel Prize-winning research of May-Britt Moser and Edvard Moser (alongside John O’Keefe), we know the brain navigates space through a complex internal positioning system—specifically hippocampal place cells, entorhinal grid cells, and head-direction cells.",
          "A vital historical and theoretical clarity must be enforced across all technosomatic thought: May-Britt Moser and Edvard Moser were co-researchers who jointly received the 2014 Nobel Prize in Physiology or Medicine. Honoring May-Britt Moser's central leadership is a core tenet of a technosomatic, cyber-feminist stance: spatial intelligence is anchored in the somatic, lived reality of the body, resisting paternalistic over-simplification and disembodied abstractions.",
          "While eye-tracking studies capture rapid, involuntary biological noise (3 to 4 saccades per second), head-direction vectors operate at an intentional, motor-driven temporal scale. When a person turns their head toward a spatial threshold, they are demonstrating motor intentionality—an active reorientation of their entire attentional apparatus.",
          "By utilizing AI as a high-resolution phenomenological lens (rather than a generative renderer), we can extract and aggregate head-direction vectors from real-world space. Using Markov chain modeling to map transition probabilities between spatial anchors, we convert Henri Bergson’s continuous durée—the felt flow of lived experience—into precise, actionable design intelligence."
        ]
      },
      {
        sectionTitle: "III. The Parallax View & The Fully Visible Board",
        paragraphs: [
          "In The Parallax View, Slavoj Žižek describes irreducible gaps in perspective. In spatial design, a permanent parallax exists between two frames: Allocentric Frame (Architect) and Egocentric Frame (Inhabitant).",
          "True spatial intelligence—what we call seeing the full board—is the ability to bridge this parallax. It translates egocentric somatic signals back into the allocentric spatial model, allowing the designer to navigate both positions simultaneously.",
          "When you see the full board: (1) The 'Unthought Known' is made legible, (2) Embodiment guides systems, and (3) The design loop closes."
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
    quoteCallout: "AI must not be the creator of ungrounded form, but a high-resolution phenomenological lens.",
    somaticNodes: ["Auge", "Lippen", "Gesicht"],
    content: [
      {
        sectionTitle: "Introduction: The Epistemological Crisis",
        paragraphs: [
          "The modern design ecosystem faces an epistemological crisis: an unprecedented overproduction of frictionless \"solutions\" that are never evaluated. Generative AI tools and diffusion models churn out infinite spatial variations in seconds, sampling flattened 2D architectural precedents to generate buildings from buildings.",
          "The result is a self-referential, aesthetically persuasive hallucination: the \"grey goo\" of disembodied form.",
          "The tragedy of this moment is not merely computational—it is institutional. Architecture as a discipline currently lacks an empirical method to evaluate its own hypotheses. When an industry has no mechanism to measure how a physical space modulates the human nervous system, every generative output carries the same weight. Infinite unverified forms collapse into statistical noise.",
          "To escape this trap, we must redefine the purpose of machine intelligence: AI must not be the creator of ungrounded form, but a high-resolution phenomenological lens."
        ]
      },
      {
        sectionTitle: "I. The Overproduction of the Untested",
        paragraphs: [
          "Every architectural drawing is an implicit claim: if we construct this threshold, this ceiling height, this material finish, human bodies will experience regulation, connection, or focus.",
          "Yet spatial design remains one of the few high-stakes industries operating in an entirely open loop: aerospace and software subject prototypes to continuous telemetry and iterative feedback, whereas buildings are designed, constructed, occupied, and demolished without ever returning structured somatic data to the architect's desk.",
          "Generative AI entered this evaluation vacuum and weaponized it. By eliminating the friction of drawing, text-to-space and text-to-image models have supercharged production without introducing a single tool for assessment. We are mass-producing spatial proposals at machine scale while remaining entirely blind to their biological and cognitive impact."
        ]
      },
      {
        sectionTitle: "II. Academic Silos and the Resistance to Spatial Intelligence",
        paragraphs: [
          "Why does architecture lack an evaluative mechanism? Because the discipline has guarded its borders against the very fields that could provide it.",
          "Current institutional and academic politics have historically treated architecture as an insular discourse of formal composition, semiotics, or historicist theory. Cross-pollination from cognitive neuroscience, spatial biology, and phenomenological computing has been sidelined or viewed with skepticism.",
          "By isolating itself from the science of how living organisms navigate physical environments, architectural academia has stalled the development of true spatial intelligence—an understanding of space grounded in embodiment, sensory processing, and neurobiology.",
          "Without cross-disciplinary grounding, computational design is left with no standard of truth other than novelty. The academic engine continues to reward formal gymnastics while the real-world consequence—the human body moving through built space—remains untracked."
        ]
      },
      {
        sectionTitle: "III. The Inversion: AI as an Optical Instrument",
        paragraphs: [
          "To break the cycle of the grey goo, we must invert the computational pipeline. We do not need AI to replace human intentionality in formal design; we need AI to give us vision where we are currently blind.",
          "Grounded in N. Katherine Hayles's concept of the cognitive nonconscious, machine learning operates in the same sub-narrative, high-temporal register as our biological sensory systems. It can process patterns of human orientation that conscious reflection misses:",
          "1. Extracting Intentional Orientation: Instead of generating speculative forms, computer vision tracks real-world head-direction vectors—the biological markers of motor intentionality.",
          "2. Quantifying Durée: By applying Markov chain models to physical movement transitions, AI translates Henri Bergson's continuous durée (the lived flow of experience) into structured telemetry.",
          "3. Closing the Loop in BIM: Feeding this somatic data directly back into Building Information Modeling (BIM) tools converts architectural models from static geometry into dynamic, testable hypotheses."
        ]
      },
      {
        sectionTitle: "IV. Beyond the Hallucination",
        paragraphs: [
          "When AI is treated as a phenomenological lens rather than a generative vending machine, the role of the architect changes. The architect is no longer an editor sorting through algorithmic scrapbooks, but a systems orchestrator designing with full-board visibility.",
          "The antidote to the grey goo is accountability to the human nervous system. By opening architecture to spatial neurobiology and using computational tools to rigorously evaluate spatial reality, we can stop manufacturing ungrounded novelties—and begin building spaces that anchor human life."
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
