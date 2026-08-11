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
  content: {
    sectionTitle: string;
    text: string;
    quote?: string;
    latexFormula?: string;
  }[];
  somaticNodes: string[]; // Connected Homunculus Ring Nodes
}

export const ESSAY_SERIES: Essay[] = [
  {
    id: "part-1",
    slug: "game-theory-imperfect-information",
    part: "PART I",
    title: "The Invisible Board: Game Theory & Imperfect Information",
    subtitle: "Navigating spatial decision fields under non-deterministic multi-agent coordination.",
    readTime: "8 min read",
    date: "August 2026",
    tags: ["Game Theory", "Spatial AI", "Imperfect Information", "Cybernetics"],
    substackUrl: "https://substack.com/@natashabajc",
    somaticNodes: ["Kopf", "Auge", "Gesicht"],
    summary: "Architectural spatial synthesis is not a static layout optimization problem—it is a high-stakes, imperfect-information game where human intentionality and biological spatial agents negotiate dynamic boundaries.",
    content: [
      {
        sectionTitle: "I. The Illusion of Static Geometry",
        text: "Traditional Building Information Modeling (BIM) treats spatial objects as deterministic, inert primitives. A wall is modeled as a passive extrusion; a corridor is defined by fixed volumetric extents. Yet in real-world human habitation, spatial geometry operates as an imperfect-information board game.",
        quote: "Space is not a stage for action; space is an agent operating within a continuous game matrix.",
        latexFormula: "U_i(s_i, s_{-i}) = \\sum_{\\theta \\in \\Theta} P(\\theta) \\cdot u_i(s_i, s_{-i}, \\theta)"
      },
      {
        sectionTitle: "II. Imperfect Information & Intentional Signals",
        text: "When an embodied actor navigates an architectural complex, they do not possess full global state knowledge. Instead, they act upon sensory cues, head-direction orientation, and micro-probabilistic inferences. Generative AI models that output static 3D meshes omit this non-deterministic loop completely."
      },
      {
        sectionTitle: "III. Re-framing Spatial Computing as Game Theory",
        text: "By modeling space as a dynamic Bayesian game, A²I introduces non-cooperative spatial agents that adapt layout topologies in real-time to match somatic strain, thermal equilibrium, and cognitive load."
      }
    ]
  },
  {
    id: "part-2",
    slug: "body-as-root-node",
    part: "PART II",
    title: "The Body as Root Node: Head-Direction Cells & Intentionality",
    subtitle: "Grounding machine intelligence in neurobiological spatial orientation and sensory homunculi.",
    readTime: "12 min read",
    date: "August 2026",
    tags: ["Neurobiology", "Head-Direction Cells", "Embodied Cognition", "Homunculus"],
    substackUrl: "https://substack.com/@natashabajc",
    somaticNodes: ["Nacken", "Zehen", "Hand", "Zunge"],
    summary: "Machine learning models hallucinate spatial coordinates because they lack an origin point. Re-inserting the sensory-motor homunculus as the root node re-anchors computational space to physical neuroanatomy.",
    content: [
      {
        sectionTitle: "I. The Root Node Deficiency in Modern LLMs",
        text: "Current spatial AI models operate on disembodied latent coordinates. They possess statistical proximity without somatic orientation. In mammals, grid cells in the medial entorhinal cortex and head-direction cells in the presubiculum anchor spatial awareness directly to physical body geometry.",
        quote: "Without a body, spatial intelligence is merely vector math devoid of orientation.",
        latexFormula: "\\theta_{HD}(t) = \\int_0^t \\omega_{head}(\\tau) d\\tau + \\theta_0"
      },
      {
        sectionTitle: "II. The Sensory Homunculus Ring as Coordinate Primitive",
        text: "The cortical homunculus maps motor control and tactile sensitivity proportionally across the precentral and postcentral gyri. In Technosomatic Architecture, this sensory ring becomes the fundamental coordinate system upon which spatial algorithms calibrate environmental stimuli."
      },
      {
        sectionTitle: "III. Intentionality & Somatosensory Feedback Loops",
        text: "Architectural space must react to head-direction vectors and somatic feedback rather than passive occupant tracking. Space becomes an active prosthetic layer extending human neural capacity."
      }
    ]
  },
  {
    id: "part-3",
    slug: "escaping-the-grey-goo",
    part: "PART III",
    title: "Escaping the 'Grey Goo': AI as Lens, Not Creator",
    subtitle: "Resisting generative homogenization through technosomatic phenomenology.",
    readTime: "10 min read",
    date: "August 2026",
    tags: ["Phenomenology", "Generative AI", "Technosomatic Manifesto", "Architecture"],
    substackUrl: "https://substack.com/@natashabajc",
    somaticNodes: ["Auge", "Lippen", "Gesicht"],
    summary: "Generative AI threatens to flood built environments with homogenized 'grey goo' renders. A²I uses artificial intelligence not to generate mindless form, but as a hyper-precise lens to illuminate human somatic experience.",
    content: [
      {
        sectionTitle: "I. The Generative Grey Goo Paradigm",
        text: "Diffusion models and automated spatial generators produce thousands of visually plausible yet phenomenologically hollow spaces. This 'grey goo' of architecture replaces material tactile specificity with averaged stylistic tokens.",
        quote: "AI must not be allowed to act as an ungrounded form-generator; it must function as a diagnostic lens for human spatial experience.",
        latexFormula: "\\mathcal{L}_{phenom} = \\mathbb{E}_{x \\sim p_{data}} \\| S(x) - H(x) \\|_2^2"
      },
      {
        sectionTitle: "II. Phenomenology as the Hard Constraint",
        text: "Technosomatic phenomenology posits that a space is valid only when it satisfies biological acoustic resonance, tactile materiality, and sensory grounding. Generative models must be constrained by somatosensory loss functions."
      }
    ]
  },
  {
    id: "part-4",
    slug: "quantifying-duree",
    part: "PART IV",
    title: "Quantifying Durée: Vector Maps & Markov Chains",
    subtitle: "Translating Bergsonian duration and subjective temporal flow into computational spatial Markov models.",
    readTime: "11 min read",
    date: "August 2026",
    tags: ["Bergson", "Durée", "Markov Chains", "Temporal Architecture"],
    substackUrl: "https://substack.com/@natashabajc",
    somaticNodes: ["Handgelenk", "Schulter", "Knie"],
    summary: "Clock time measures static duration, but human spatial memory experiences Henri Bergson's 'durée'—continuous qualitative flow. We mathematically translate temporal experience into stochastic vector Markov chains.",
    content: [
      {
        sectionTitle: "I. Beyond Clock Time in Architectural CAD",
        text: "Architectural tools measure distance in meters and movement in meters per second. However, human experience is governed by Bergson's duration (durée)—where time is heterogeneous, subjective, and qualitatively dense.",
        quote: "Duration is the continuous progress of the past which gnaws into the future and swells as it advances.",
        latexFormula: "P(X_{t+1} = j \\mid X_t = i, X_{t-1}, \\dots) = P_{ij}(\\Delta t_{durée})"
      },
      {
        sectionTitle: "II. Stochastic Markov State Spaces",
        text: "By modeling spatial transitions as continuous-time Markov chains weighted by somatic micro-state changes, A²I enables environments to anticipate movement along subjective temporal vectors."
      }
    ]
  },
  {
    id: "part-5",
    slug: "from-bim-to-a2i",
    part: "PART V",
    title: "From BIM to A²I: The Next Data Infrastructure",
    subtitle: "Replacing legacy object hierarchies with live neural spatial graphs.",
    readTime: "14 min read",
    date: "August 2026",
    tags: ["BIM", "A²I Data", "Spatial Graph", "Building Tech"],
    substackUrl: "https://substack.com/@natashabajc",
    somaticNodes: ["Ellerbogen", "Rumpf", "Hüfte"],
    summary: "Building Information Modeling is trapped in 1990s relational database structures. A²I proposes a dynamic, decentralized spatial graph streaming real-time neuro-somatic telemetry.",
    content: [
      {
        sectionTitle: "I. The Structural Limitations of Legacy BIM",
        text: "IFC schemas and parametric Revit models store static physical attributes. They contain no memory of environmental flux, acoustic reverberation decay, or occupant physiological response.",
        quote: "The next architectural data primitive is not an IFC wall object—it is a continuous neural field tensor.",
        latexFormula: "G_{A2I} = (V_{somatic}, E_{kinematic}, W_{neural})"
      },
      {
        sectionTitle: "II. Live Neural Spatial Graphs",
        text: "A²I replaces hierarchical tree models with graph neural networks (GNNs) that stream spatial telemetry continuously, enabling live building optimization across century-long lifecycles."
      }
    ]
  },
  {
    id: "part-6",
    slug: "architect-as-systems-orchestrator",
    part: "PART VI",
    title: "The Architect as Systems Orchestrator",
    subtitle: "Transitioning from form-giver to orchestrator of complex bio-computational feedback loops.",
    readTime: "9 min read",
    date: "August 2026",
    tags: ["Systems Architecture", "Cybernetics", "Design Practice"],
    substackUrl: "https://substack.com/@natashabajc",
    somaticNodes: ["Daumen", "Kiefer", "Zähne"],
    summary: "The 21st-century architect is no longer a solitary form-maker. The architect becomes a master cybernetic orchestrator designing dynamic feedback systems between human biology and computational space.",
    content: [
      {
        sectionTitle: "I. The Death of the Heroic Sculptor",
        text: "The 20th-century myth of the architect sculpting static monuments has broken down in the face of ecological and technological complexity. Today's built environment demands cybernetic orchestration.",
        quote: "We do not design static forms; we tune continuous somatic feedback loops."
      },
      {
        sectionTitle: "II. Systems Orchestration Principles",
        text: "Architects must write spatial algorithms that balance occupant homeostasis, energy dissipation, and computational spatial intelligence."
      }
    ]
  },
  {
    id: "part-7",
    slug: "technosomatic-manifesto",
    part: "PART VII",
    title: "The Technosomatic Manifesto: An Oath for Built Space",
    subtitle: "A solemn oath grounding synthetic intelligence in embodied biological reality.",
    readTime: "15 min read",
    date: "August 2026",
    tags: ["Manifesto", "A²I Oath", "Technosomatic", "Future Architecture"],
    substackUrl: "https://substack.com/@natashabajc",
    somaticNodes: ["Kopf", "Hand", "Zunge", "Rumpf", "Auge", "Zehen"],
    summary: "The definitive manifesto for Technosomatic Architecture: A declaration that all computational spatial intelligence must honor, elevate, and serve the embodied human nervous system.",
    content: [
      {
        sectionTitle: "ARTICLE I. THE PRIMACY OF THE SOMATIC ROOT",
        text: "We declare that no computational model, spatial algorithm, or artificial intelligence shall design or govern physical space without explicit orientation to the embodied human nervous system. The body is the root node of all spatial truth.",
        quote: "Space that does not honor the nervous system is non-architecture.",
        latexFormula: "\\oint_{\\text{Space}} \\Psi_{\\text{somatic}} \\cdot d\\mathbf{r} \\neq 0"
      },
      {
        sectionTitle: "ARTICLE II. THE REJECTION OF UNGROUNDED FORM",
        text: "We reject all generative form-making that operates detached from tactile, sensory, and physiological constraints. Machine intelligence must serve as a high-precision diagnostic lens, not a reckless form-generator."
      },
      {
        sectionTitle: "ARTICLE III. THE COVENANT OF BUILT SPACE",
        text: "Built space must act as a responsive prosthetic to human consciousness—fostering cognitive clarity, emotional depth, and biological harmony."
      }
    ]
  }
];
