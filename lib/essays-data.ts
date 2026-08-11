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
    quoteCallout: "Game theory distinguishes between games of perfect and imperfect information. In chess, every player has full access to the board state. Humans navigating built space play with imperfect information by default. Grounding is not a wellness practice—it is a condition of epistemological completeness.",
    somaticNodes: ["Kopf", "Auge", "Gesicht", "Nacken"],
    content: [
      {
        sectionTitle: "I. Game Theory and the Obscured Board State",
        paragraphs: [
          "Game theory distinguishes cleanly between games of perfect information and games of imperfect information. In chess or Go, every player has instantaneous, full access to the entire board state at every turn. No information is hidden; the complete state matrix is visible.",
          "Humans navigating built space play with imperfect information by default. When an occupant enters an architectural volume, their sensory apparatus intercepts only localized, incomplete signals—thermal gradients, acoustic reverberation decay, peripheral visual vectors, and micro-proprioceptive feedback.",
          "Because traditional CAD and Building Information Modeling (BIM) treat spatial geometry as deterministic, disembodied primitives, they completely fail to model the non-deterministic game of spatial navigation. They assume a 'perfect information' observer that does not exist in human biology."
        ],
        latexFormula: "U_i(s_i, s_{-i}) = \\sum_{\\theta \\in \\Theta} P(\\theta) \\cdot u_i(s_i, s_{-i}, \\theta)"
      },
      {
        sectionTitle: "II. The Fallacy of Static BIM Models",
        paragraphs: [
          "Building Information Modeling treats a wall as a passive physical extrusion and a corridor as a static volumetric boundary. But in human neurobiology, spatial geometry is an active, dynamic agent operating within a continuous feedback matrix.",
          "Generative AI models that generate static 3D meshes omit this non-deterministic loop entirely. They produce spatial 'grey goo'—visually plausible geometries that possess no awareness of human head-direction cell orientation, entorhinal grid cell mapping, or somatic stress responses.",
          "Without anchoring computational geometry into live biological feedback, generative design algorithms remain disembodied vector games played on an invisible board."
        ]
      },
      {
        sectionTitle: "III. Epistemological Completeness via A²I",
        paragraphs: [
          "Grounding is not a passive wellness trope—it is a mandatory condition of epistemological completeness. Architectural Artificial Intelligence (A²I) re-anchors computational spatial intelligence back into the physical sensory homunculus.",
          "By modeling spatial interaction as a continuous Bayesian game of imperfect information, A²I enables environments to adapt layout topologies in real-time to match occupant physiological homeostasis, thermal balance, and cognitive bandwidth.",
          "Space ceases to be a static container for human bodies; it becomes an active, responsive prosthetic layer extending human neural capacity into the physical world."
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
