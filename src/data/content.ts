// ==============================================================================
// ALL PORTFOLIO CONTENT LIVES HERE
// Edit this file to update text, projects, achievements, skills, and links.
// ==============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TeamMember {
  name: string;
  role?: string;
  github?: string;
  avatar?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  status: 'Live' | 'In progress' | 'Past';
  category: string;
  tagline: string;
  description: string;
  fullOverview: string;
  architectureDetails: string[];
  features: string[];
  tech: string[];
  metrics: { label: string; value: string }[];
  links: {
    live?: string;
    github?: string;
    video?: string;
  };
  teamMembers?: TeamMember[];
  featured: boolean;
}

export interface AchievementItem {
  id: string;
  slug: string;
  title: string;
  organization: string;
  year: string;
  result?: string;
  description: string;
  image?: string;
  tags: string[];
  details: string;
  link?: string;
}

export interface HackathonItem {
  id: string;
  slug: string;
  eventName: string;
  date: string;
  role: string;
  teamSize: string;
  projectBuilt: string;
  result: 'Winner' | 'Finalist' | 'Participant' | string;
  description: string;
  tech: string[];
  links: {
    project?: string;
    repo?: string;
    certificate?: string;
  };
  teamMembers?: TeamMember[];
}

export interface CertificateItem {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string; // path in public/certificates/
  tags: string[];
  credentialId?: string;
  credentialLink?: string;
  // Detailed overview specifications:
  problemStatement?: string;
  objective?: string;
  datasetDetails?: string;
  concepts?: string[];
  deliverables?: string[];
  evaluationCriteria?: string[];
  workshopHighlights?: string[];
  keyHighlights?: string[];
  projectLink?: string;
  kaggleLink?: string;
}

export interface Skill {
  name: string;
  info: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface SkillItem {
  key: string;
  name: string;
  category: 'web-mobile' | 'ai-ml' | 'security-tooling';
  detail: string;
}

export interface TimelineMilestone {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'how-i-work' | 'what-drives-me' | 'exploring';
}

// ---------------------------------------------------------------------------
// Personal Info
// ---------------------------------------------------------------------------

export const PERSONAL_INFO = {
  name: 'Naresh',
  fullName: 'Naresh N',
  title: 'Full Stack · AI/ML · Product Builder',
  headline: 'BUILDING DIGITAL EXPERIENCES AT THE EDGE OF CODE',
  subheadline:
    'Second-year B.Tech CSE-IT student at NIAT (NxtWave of Innovation in Advanced Technologies) affiliated with Yenepoya University (NIAT x YU), Mangaluru. Founder and sole developer of Sangeetha.',
  whoamiTerminal: '$ whoami -> Naresh · 2nd Year B.Tech CSE-IT · NIAT Mangaluru',
  terminalPhrases: [
    '$ whoami -> Naresh · 2nd Year B.Tech CSE-IT · NIAT Mangaluru',
    '$ role -> Full Stack Developer and AI/ML Engineer · Product Builder',
    '$ project -> Founder & Sole Developer of Sangeetha',
    '$ stack -> React · TypeScript · Python · PyTorch · Tailwind',
    '$ passion -> Architecting high-performance digital experiences',
    '$ status -> Available for internships & collaborations',
  ],
  statusBadge: 'Available for internships & collaborations',
  quote:
    'Architecture is not just how software runs under load—it is how effortlessly it feels to the human on the other side.',
  signatureText: 'Naresh N',
  photo: '/assets/photo.jpg',
  resumeUrl: '/resume.pdf',
  videoUrl: '/videos/hero.mp4',
  videoPoster: '/videos/hero-poster.jpg',
  email: 'nareshn141819@gmail.com',
  phone: '9535808478',
  location: 'Mangaluru, Karnataka, India',
  githubUrl: 'https://github.com/NareshMRN',
  kaggleUrl: 'https://kaggle.com/nn2007',
  instagramUrl: 'https://instagram.com/mr_naresh_1819_',
  xUrl: 'https://x.com/NareshN929',
};

// ---------------------------------------------------------------------------
// Navigation Links
// ---------------------------------------------------------------------------

export const NAVIGATION_LINKS = [
  { name: 'ABOUT', href: '/#about' },
  { name: 'SKILLS', href: '/#skills' },
  { name: 'PROJECTS', href: '/#projects' },
  { name: 'ACHIEVEMENTS', href: '/#achievements' },
  { name: 'BEYOND', href: '/#beyond' },
  { name: 'CONTACT', href: '/#contact' },
];

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const ABOUT_CONTENT = {
  sectionNumber: '01',
  sectionTitle: 'ABOUT',
  heading: 'ABOUT ME',
  bioParagraph1:
    'Naresh, second-year B.Tech CSE-IT at NIAT (NxtWave of Innovation in Advanced Technologies), Mangaluru, affiliated with Yenepoya University; focus on full-stack development and AI/ML; founder and sole developer of Sangeetha.',
  bioParagraph2:
    'Rather than waiting for graduation, I build production-grade systems now — from architecting audio streaming pipelines with synchronized lyrics to deploying low-latency LLM voice conversation agents. Every line of code is written with obsessive attention to latency, modularity, and human feel.',
  stats: [
    { value: 3, suffix: '+', label: 'Products Shipped Solo' },
    { value: 10, suffix: '+', label: 'Core Technologies Mastered' },
    { value: 2, suffix: 'nd', label: 'Year B.Tech CSE-IT @ NIAT' },
    { value: 100, suffix: '%', label: 'End-to-End Ownership' },
  ],
};

// ---------------------------------------------------------------------------
// Skills Categories & Inventory
// ---------------------------------------------------------------------------

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    skills: [
      { name: 'Python', info: 'Interpreted language utilized for scripting, data analysis, automation, and AI workflows.' },
      { name: 'C++', info: 'High-performance compiled language used for systems programming and algorithm optimization.' },
      { name: 'Java', info: 'Object-oriented language widely used for Android app architectures and backend systems.' },
      { name: 'Kotlin', info: 'Modern statically typed language used for concise and safe native Android development.' },
      { name: 'JavaScript', info: 'High-level dynamic language for web logic, scripting, and full-stack development.' },
      { name: 'TypeScript', info: 'Typed superset of JavaScript providing static types and compile-time reliability.' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    skills: [
      { name: 'React', info: 'Declarative component-based library for building interactive user interfaces.' },
      { name: 'Next.js', info: 'React framework offering server-side rendering, routing, and production optimizations.' },
      { name: 'Node.js', info: 'Asynchronous event-driven runtime environment for building server-side applications.' },
      { name: 'Express', info: 'Minimalist web framework for building Node.js HTTP servers and RESTful APIs.' },
      { name: 'Tailwind CSS', info: 'Utility-first CSS framework for rapid and maintainable responsive UI styling.' },
      { name: 'HTML/CSS', info: 'Foundational web standards for semantic document structure and responsive visual presentation.' },
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', info: 'Cross-platform UI framework using Dart for compiling multi-platform native mobile apps.' },
      { name: 'Android', info: 'Mobile operating system platform for building native smartphone and tablet applications.' },
      { name: 'Jetpack Compose', info: 'Android modern declarative UI toolkit for building reactive native user interfaces.' },
      { name: 'React Native', info: 'Cross-platform mobile framework utilizing React paradigms for iOS and Android.' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    skills: [
      { name: 'OpenAI API', info: 'Developer API ecosystem for integrating frontier language and reasoning models.' },
      { name: 'Gemini', info: 'Google multimodal AI models for processing text, code, audio, and visual inputs.' },
      { name: 'PyTorch', info: 'Deep learning framework used for building neural networks and semantic representations.' },
      { name: 'HuggingFace', info: 'Open platform and transformers library for pre-trained language models and tokenizers.' },
      { name: 'FAISS', info: 'High-performance vector similarity search library for dense vector clustering and retrieval.' },
      { name: 'Gradio', info: 'Fast Python framework for prototyping and deploying interactive machine learning web interfaces.' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', info: 'Containerization technology for packaging applications and dependencies consistently.' },
      { name: 'Firebase', info: 'Managed platform providing backend services, authentication, and realtime database.' },
      { name: 'Vercel', info: 'Cloud platform for automated deployment and hosting of front-end applications.' },
      { name: 'Git', info: 'Distributed version control system for tracking source code revisions and branching.' },
      { name: 'GitHub', info: 'Cloud platform for code repository hosting, collaboration, and CI/CD pipelines.' },
      { name: 'Linux', info: 'Open-source Unix-like operating system kernel used for development and server management.' },
    ],
  },
  {
    id: 'databases-tools',
    title: 'Databases & Tools',
    skills: [
      { name: 'MongoDB', info: 'Document-oriented NoSQL database storing data in flexible JSON-like BSON schemas.' },
      { name: 'MySQL', info: 'Open-source relational database management system using structured query language.' },
      { name: 'Redis', info: 'In-memory key-value data structure store used for caching and low-latency queuing.' },
      { name: 'Figma', info: 'Collaborative interface design tool used for prototyping and UI wireframes.' },
      { name: 'Postman', info: 'API testing platform for building, sending, and validating HTTP network requests.' },
      { name: 'VS Code', info: 'Extensible code editor for software development, debugging, and linting.' },
    ],
  },
];

// Legacy export alias for compatibility
export const SKILLS: SkillItem[] = skillCategories.flatMap((cat) =>
  cat.skills.map((s) => ({
    key: s.name.substring(0, 2),
    name: s.name,
    category: (cat.id === 'ai-ml' ? 'ai-ml' : cat.id === 'databases-tools' ? 'security-tooling' : 'web-mobile') as any,
    detail: `${s.name}: ${s.info}`,
  }))
);


// ---------------------------------------------------------------------------
// Projects (Horizontal Slider)
// ---------------------------------------------------------------------------

export const PROJECTS: ProjectItem[] = [
  {
    id: 'sangeetha',
    slug: 'sangeetha',
    number: '01',
    title: 'Sangeetha',
    status: 'Live',
    category: 'MUSIC & KARAOKE PLATFORM',
    tagline: 'Music and karaoke platform with recording, performance sharing, and leaderboards.',
    description:
      'A comprehensive music and karaoke platform built solo. Features a Flutter Android app, Next.js web frontend, and an admin dashboard. Includes karaoke studio with recording, performance sharing and leaderboards, playlists, profile and settings, audio editing (trim, effects). Backend on MongoDB Atlas with auth middleware, Zod validation, structured logging, Docker, and custom observability. Launched via website.',
    fullOverview:
      'Sangeetha is a production audio streaming and karaoke ecosystem engineered from scratch. The Flutter mobile app offers an in-app karaoke recording studio where singers record over backing tracks, apply audio trim and sound effects, and publish performances to real-time community leaderboards. The web interface and admin panel are built with Next.js, backed by a Node.js API with MongoDB Atlas, Docker containerization, Zod schema validation, and structured observability.',
    architectureDetails: [
      'Flutter Android app with Riverpod state management and custom audio recording pipeline',
      'Next.js web frontend for music discovery, playback, and artist profiles',
      'Dedicated Admin Dashboard for catalogue curation and user telemetry',
      'Node.js REST API with auth middleware and strict Zod runtime request validation',
      'MongoDB Atlas cluster with optimized indexes and aggregation pipelines',
      'Docker containerized deployment with custom observability and structured logging'
    ],
    features: [
      'Karaoke studio with live microphone recording and audio effects',
      'Performance sharing feed with community upvoting and leaderboards',
      'Audio editing suite with waveform trimming and balance adjustments',
      'Curated playlists, search, and user profile management',
      'Admin dashboard with metrics on streams and user activity'
    ],
    tech: ['Flutter', 'Next.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Docker', 'Riverpod', 'Zod', 'JWT'],
    metrics: [
      { label: 'ROLE', value: 'Founder & Sole Dev' },
      { label: 'PLATFORMS', value: 'Android, Web, Admin' },
      { label: 'STATUS', value: 'Live in Production' },
    ],
    links: {
      live: 'https://thesangeetha.vercel.app/index.html',
      github: 'https://github.com/NareshMRN',
    },
    featured: true,
  },
  {
    id: 'tradevault',
    slug: 'tradevault',
    number: '02',
    title: 'TradeVault',
    status: 'Live',
    category: 'HYBRID MULTI-AGENT QUANTITATIVE TRADING',
    tagline: 'Production-grade multi-agent quant trading platform with statistical forecasting and automated execution.',
    description:
      'Awarded 3rd Place in the Build to Ship Hackathon. Production-grade, end-to-end multi-agent quantitative trading platform. Features an iterative Bull vs Bear debate engine (Groq DeepSeek-R1), Deflated Sharpe Ratio (DSR) & PBO overfitting gates, RL fractional Kelly position sizing, and automated Alpaca broker order routing with zero-trust AES-256-GCM encryption and emergency kill switch.',
    fullOverview:
      'TradeVault is a production-grade quantitative trading advisory and automated execution engine engineered for high reliability under live market regimes. It features a microservice architecture spanning a React/Vite/Tailwind frontend, a Node.js/Express API gateway with Redis queuing and MongoDB audit trails, and a Python FastAPI Agent Runtime. Multi-model LLMs participate in iterative Bull vs Bear debates, guarded by a quantitative Risk Manager that vetoes overfitted signals using the Deflated Sharpe Ratio and CSCV backtest metrics, executing safe order flow to Alpaca Paper and Live markets.',
    architectureDetails: [
      'Multi-agent LLM debate engine with Groq DeepSeek-R1 for adversarial Bull vs Bear thesis generation',
      'Python FastAPI Agent Runtime with Quant Factor calculations (Momentum, Volatility, Mean-Reversion, Value)',
      'Probabilistic Quantile Forecasting generating P10, P25, Median (P50), P75, and P90 distribution bands',
      'Overfitting Gate enforcing Deflated Sharpe Ratio (DSR) and Probability of Backtest Overfitting (PBO)',
      'Node.js & Express API Gateway with Redis caching, WebSocket live events, and shared Zod schemas',
      'Zero-trust credential vault with AES-256-GCM encryption and emergency one-click kill switch'
    ],
    features: [
      '3rd Place Winner in the Build to Ship Hackathon',
      'Automated broker execution via Alpaca Paper and Live trading APIs',
      'Adversarial multi-agent debate with autonomous Trader and Risk Manager veto gates',
      'Interactive real-time charting with order proposal confirmation and lot sizing',
      'Tamper-evident immutable audit logging with pre-hook protected MongoDB storage'
    ],
    tech: ['Python', 'FastAPI', 'Node.js', 'Express', 'React', 'Redis', 'MongoDB', 'Groq / DeepSeek-R1', 'Alpaca API', 'Docker'],
    metrics: [
      { label: 'HACKATHON', value: '3rd Place Winner' },
      { label: 'FORECASTING', value: 'P10–P90 Quantiles' },
      { label: 'SECURITY', value: 'AES-256-GCM Vault' },
    ],
    links: {
      live: 'https://tradevaultone.vercel.app/',
      github: 'https://github.com/shivannagorkal/Tradint-agent',
      video: 'https://drive.google.com/file/d/1xMjiYcjk2AKlkUHB2whCd4UQ7_v4MdNp/view',
    },
    teamMembers: [
      { name: 'Naresh N', role: 'Lead AI & Full Stack Architect', github: 'https://github.com/NareshMRN' },
      { name: 'Nikhil H M', role: 'Full Stack & Quant Engineer', github: 'https://github.com/nikhilshaiva-dev' },
      { name: 'Nishanth S G', role: 'Frontend & UI Engineer', github: 'https://github.com/nishanthsg' },
      { name: 'Shivanna', role: 'Full Stack & Broker Integrations', github: 'https://github.com/shivannagorkal' },
      { name: 'G R Harsha', role: 'Data & Systems Engineer', github: 'https://github.com/grharsha777' },
    ],
    featured: true,
  },
  {
    id: 'tryscan',
    slug: 'tryscan',
    number: '03',
    title: 'TryScan',
    status: 'Live',
    category: 'SMART QR RESTAURANT PLATFORM',
    tagline: 'Cloud-based smart QR ordering system digitising table-to-kitchen dining workflows in real time.',
    description:
      'Cloud-based Smart QR Restaurant Ordering System replacing physical menus and paper order slips. Customers scan dynamic table QR codes to browse menus, customize items, and place instant self-orders routed directly to a live kitchen display via WebSockets (Socket.io), complete with automated billing and unified owner analytics.',
    fullOverview:
      'TryScan (TableTap) eliminates ordering bottlenecks, paper waste, and manual communication errors in restaurants. Each dining table is equipped with a unique QR code. Guests access an interactive digital menu with category filtering and instant checkout, while kitchen staff monitor orders on a live Kanban-style kitchen display system powered by low-latency Socket.io WebSockets. Includes a comprehensive owner dashboard for menu curation, table management, sales analytics, and automated bill generation.',
    architectureDetails: [
      'React frontend with responsive menu catalog, real-time cart state, and order tracking',
      'Node.js & Express RESTful backend with modular route architecture and authentication',
      'Bidirectional WebSocket real-time event pipeline using Socket.io for instantaneous kitchen alerts',
      'MongoDB document database for menu items, active table sessions, and order history',
      'Automated digital receipt and bill calculation engine with tax and subtotal computation',
      'Owner administration portal with operational analytics and menu availability toggles'
    ],
    features: [
      'Contactless QR code self-ordering with table number verification',
      'Real-time kitchen order display (KDS) updating order stages without page refreshes',
      'Interactive digital menu with item descriptions, price tags, and custom notes',
      'Instant billing calculation with automated order history tracking',
      'Unified restaurant management dashboard for owners and kitchen staff'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'JavaScript'],
    metrics: [
      { label: 'ORDER FLOW', value: 'Real-time WebSockets' },
      { label: 'WORKFLOW', value: '100% Paperless' },
      { label: 'SYSTEM', value: 'Full Stack QR' },
    ],
    links: {
      github: 'https://github.com/NareshMRN/TryScan',
      live: 'https://tryscan.vercel.app',
    },
    featured: true,
  },
  {
    id: 'vector-search',
    slug: 'vector-search',
    number: '04',
    title: 'Semantic Search & RAG System',
    status: 'Past',
    category: 'AI / VECTOR SEARCH & RAG',
    tagline: 'Semantic vector search and RAG pipeline for 100,000+ Flipkart Product Reviews on Kaggle.',
    description:
      'Engineered a complete Semantic Search and RAG pipeline on Kaggle using Sentence-Transformers and FAISS (IndexFlatIP) over 100,000+ Flipkart product reviews. Solved the limitation of traditional keyword search (e.g., retrieving "low-power air conditioner" when users search "energy-efficient AC") with sub-millisecond vector similarity and natural language answer generation.',
    fullOverview:
      'Traditional keyword-based search systems fail when users express intent using different terminology than stored in product databases (e.g., searching for "energy-efficient AC" missing "low-power air conditioner"). To solve this user-experience and revenue friction, this system builds a full semantic search and Retrieval-Augmented Generation (RAG) architecture on the Flipkart Product Customer Reviews Dataset (~100,000+ reviews). Text is preprocessed and projected into dense vector embeddings with Sentence-Transformers (SBERT), indexed using high-speed FAISS IndexFlatIP (Inner Product / Cosine Similarity), evaluated using Precision@K and Recall@K, and connected to a RAG pipeline that synthesizes accurate natural language answers directly from retrieved customer review context.',
    architectureDetails: [
      'Data cleaning, text normalization, and preprocessing on 100,000+ Flipkart customer reviews',
      'Dense sentence embeddings generated using Sentence-Transformers (SBERT)',
      'Sub-millisecond similarity search using FAISS IndexFlatIP vector index with Cosine/Inner Product scoring',
      'RAG pipeline retrieving high-relevance semantic review context to generate grounded natural language answers',
      'Rigorous quantitative evaluation benchmarking Precision@K and Recall@K across diverse user search intents',
      'Comprehensive EDA: rating distribution plots, word clouds, text length analysis, and PCA embedding projections'
    ],
    features: [
      'Intent-based semantic retrieval across 100k+ reviews beyond literal keyword matching',
      'FAISS vector index optimized for high-throughput sub-millisecond retrieval',
      'Grounding RAG answers on customer reviews with source attribution',
      'Quantitative Precision@K and Recall@K evaluation metrics suite',
      'Executed end-to-end Jupyter Notebook on Kaggle with visualizations and business insights report'
    ],
    tech: ['Python', 'Sentence-Transformers', 'FAISS', 'RAG', 'PyTorch', 'Pandas', 'Matplotlib', 'Kaggle'],
    metrics: [
      { label: 'DATASET', value: '100k+ Reviews' },
      { label: 'INDEX', value: 'FAISS IndexFlatIP' },
      { label: 'PLATFORM', value: 'Kaggle Notebook' },
    ],
    links: {
      github: 'https://github.com/NareshMRN',
      live: 'https://kaggle.com/nn2007',
    },
    featured: true,
  },
  {
    id: 'gradio-image-gen',
    slug: 'gradio-image-gen',
    number: '05',
    title: 'Product Image Generation with Gradio',
    status: 'Past',
    category: 'GENERATIVE AI / COMPETITION',
    tagline: 'AI-powered product visual synthesizer ranking 63rd on Kaggle using Stable Diffusion and Gradio.',
    description:
      'Built an end-to-end AI product image generation pipeline for an e-commerce platform on Kaggle. Uses an LLM (Qwen 2.5-0.5B-Instruct) to engineer high-detail visual prompts (<70 words) and Stable Diffusion v1.5 to generate studio-grade visuals across 15 Flipkart products in an automated loop, wrapped in an interactive Gradio web interface. Ranked 63rd on the global leaderboard.',
    fullOverview:
      'Engineered an enterprise generative AI pipeline solving the challenge of transforming simple e-commerce product descriptions into photorealistic marketing visuals. The solution leverages an LLM (Qwen 2.5-0.5B-Instruct) with engineered system prompts optimizing lighting, composition, texture, and style while staying under 70 words to prevent CLIP token truncation. Prompts are fed into Stable Diffusion v1.5 with GPU acceleration. Scored on Prompt Quality (40 pts via cosine similarity with expert prompts), Image Quality (40 pts via CLIP Score), and Gradio UI (20 pts), achieving a competitive 63rd rank on Kaggle.',
    architectureDetails: [
      'LLM prompt engineering engine using Qwen 2.5-0.5B-Instruct to expand simple descriptions into cinematic visual briefs',
      'Prompt constraints optimization (<70 words) preserving visual details without CLIP token truncation',
      'Stable Diffusion v1.5 latent diffusion model fine-tuned for high-fidelity e-commerce product synthesis',
      'Interactive Gradio web interface for real-time prompt previewing, parameter tuning, and image inspection',
      'Automated batch inference loop processing all 15 Flipkart test products sequentially on Kaggle GPU T4',
      'Full evaluation pipeline computing composite score: prompt_score*0.4 + image_score*0.4 + gradio_score*0.2'
    ],
    features: [
      '63rd Rank achieved on the global Kaggle leaderboard with RMSE scoring',
      'Automated batch generation loop across 15 Flipkart products in HD quality',
      'Dual-stage pipeline: LLM Prompt Engineer -> Stable Diffusion v1.5 Generator',
      'Interactive Gradio web application for live testing and review',
      'Certified by NIAT Masterclasses in collaboration with EXL Senior GenAI Engineers'
    ],
    tech: ['Python', 'Gradio', 'Stable Diffusion v1.5', 'Qwen 2.5', 'Kaggle GPU', 'PyTorch', 'CLIP'],
    metrics: [
      { label: 'LEADERBOARD', value: '63rd Rank' },
      { label: 'EVAL CRITERIA', value: 'Prompt + CLIP + UI' },
      { label: 'PRODUCTS', value: '15 Flipkart Items' },
    ],
    links: {
      github: 'https://github.com/NareshMRN',
      live: 'https://kaggle.com/nn2007',
    },
    featured: false,
  },
  {
    id: 'zyro-rag-challenge',
    slug: 'zyro-rag-challenge',
    number: '06',
    title: 'Zyro Dynamics HR Help Desk',
    status: 'Live',
    category: 'ENTERPRISE RAG / LLM BOT',
    tagline: 'Enterprise HR policy RAG chatbot with scope guardrails, MMR vector search, and sub-second Groq LLaMA-3.3 inference.',
    description:
      'Enterprise HR Policy Help Desk RAG Chatbot built for the NxtWave / NIAT RAG Challenge. Ingests and indexes 11 official Zyro Dynamics HR policy PDFs into FAISS with MMR retrieval, enforces a strict Out-of-Scope (OOS) classification guardrail, runs sub-second inference using Groq LLaMA-3.3-70B, and tracks production traces with LangSmith.',
    fullOverview:
      'Zyro Dynamics HR Help Desk is an enterprise-grade Retrieval-Augmented Generation (RAG) assistant engineered to answer employee HR queries with strict grounded accuracy. Built on Streamlit, LangChain, and Groq LLaMA-3.3-70B-Versatile, the system ingests 11 official Zyro Dynamics corporate policy manuals (covering leave, WFH, code of conduct, APR/PIP performance reviews, compensation, IT security, POSH, onboarding/separation, and travel & expenses). To ensure zero hallucination, queries first pass through a strict scope classifier (OOS_PROMPT) that detects and refuses out-of-scope non-HR questions. Valid queries retrieve context via FAISS Maximal Marginal Relevance (MMR) search with Sentence-Transformers embeddings (all-MiniLM-L6-v2), providing page-level source citations and end-to-end tracing via LangSmith.',
    architectureDetails: [
      'Strict two-stage LLM scope classifier (OOS_PROMPT) filtering non-HR queries before vector search',
      'RecursiveCharacterTextSplitter (1000 chunk size, 150 overlap) across 11 official Zyro HR PDF manuals',
      'FAISS vector index with Maximal Marginal Relevance (MMR, k=4, fetch_k=20, lambda=0.5) for diverse retrieval',
      'Sentence-Transformers (all-MiniLM-L6-v2) normalized dense semantic embeddings',
      'Groq LPU hardware acceleration powering LLaMA-3.3-70B-Versatile with 0.1 temperature for precise policy synthesis',
      'Page-level source attribution format ([Source: document.pdf, page X]) and real-time LangSmith observability'
    ],
    features: [
      'Automated scope gate preventing prompt injection and non-HR hallucinations',
      'Instant answers grounded exclusively in 11 official company policy manuals',
      'Transparent source citation expanders showing exact policy document and page numbers',
      'Sub-second query response times powered by Groq LLaMA-3.3-70B inference',
      'Cached vector index loading with Streamlit session state and conversational memory'
    ],
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Groq', 'Sentence-Transformers', 'LangSmith', 'PyPDF'],
    metrics: [
      { label: 'DOCUMENTS', value: '11 Policy PDFs' },
      { label: 'RETRIEVAL', value: 'FAISS + MMR (k=4)' },
      { label: 'LLM ENGINE', value: 'LLaMA 3.3 70B (Groq)' },
    ],
    links: {
      github: 'https://github.com/NareshMRN/zyro-rag-challenge',
      live: 'https://github.com/NareshMRN/zyro-rag-challenge',
    },
    featured: true,
  },
  {
    id: 'aira',
    slug: 'aira',
    number: '07',
    title: 'Aira',
    status: 'Live',
    category: 'AI ENGLISH VOICE AGENT',
    tagline: 'Personal AI English voice-practice agent supporting multiple LLM providers.',
    description:
      'Personal AI English voice-practice agent. Single-page web app on GitHub Pages, supports multiple LLM providers (Anthropic, Gemini, Groq, OpenRouter), API keys kept in the browser for privacy, secure deployment via GitHub Actions.',
    fullOverview:
      'Aira eliminates the friction and fear of conversational English practice by offering a private, real-time voice sparring partner. Deployed on GitHub Pages as a zero-backend single-page app, users configure their preferred LLM (Anthropic Claude, Google Gemini, Groq ultra-low-latency, or OpenRouter) with client-side encrypted key persistence.',
    architectureDetails: [
      'Single-page web client running entirely in the browser with Web Audio API',
      'Multi-provider LLM abstraction layer supporting Anthropic, Gemini, Groq, and OpenRouter',
      'Zero-storage privacy architecture keeping user API keys exclusively inside local storage',
      'Automated CI/CD pipeline via GitHub Actions deploying to GitHub Pages',
      'Real-time voice activity detection (VAD) and speech synthesis integration'
    ],
    features: [
      'Real-time conversational English voice practice with intelligent AI partner',
      'Instant grammar corrections and sentence structure suggestions',
      'One-click switching between Groq, Gemini, Anthropic, and OpenRouter',
      'Client-side security with zero server tracking or key logging',
      'Accessible responsive interface with audio waveform visualizers'
    ],
    tech: ['JavaScript', 'Web Audio API', 'OpenAI/Groq/Gemini APIs', 'GitHub Pages', 'GitHub Actions'],
    metrics: [
      { label: 'LATENCY', value: 'Sub-second via Groq' },
      { label: 'PROVIDERS', value: '4 LLM Engines' },
      { label: 'PRIVACY', value: 'Client-Side Keys' },
    ],
    links: {
      live: 'https://github.com/NareshMRN',
      github: 'https://github.com/NareshMRN',
    },
    featured: true,
  },
  {
    id: 'english-learning-app',
    slug: 'english-learning-app',
    number: '08',
    title: 'English Learning App',
    status: 'In progress',
    category: 'NATIVE ANDROID / EDTECH',
    tagline: 'Native Kotlin app for voice conversation practice with AI-generated lessons and quizzes.',
    description:
      'Native Kotlin app for voice conversation practice and AI-generated lessons and quizzes, multilingual, Node.js/Express backend, free and paid tiers.',
    fullOverview:
      'A native Android educational app engineered in modern Kotlin with Jetpack Compose. Combines dynamic AI-generated curriculum planning with live speech conversation drills. Built on top of a Node.js and Express backend that manages user progression, multilingual localization, and tiered subscriptions.',
    architectureDetails: [
      'Native Kotlin client using Jetpack Compose, Kotlin Coroutines, and Flow',
      'Node.js & Express REST microservices handling curriculum generation and user progress',
      'Multilingual language localization engine with support for regional Indian languages',
      'Tiered subscription management for free drill access and premium AI tutor sessions',
      'Offline-first caching for downloaded vocabulary and lesson quizzes'
    ],
    features: [
      'AI-driven conversational fluency coaching with interactive voice input',
      'Dynamically generated grammar quizzes tailored to user skill levels',
      'Multilingual translation support for seamless onboarding',
      'Progress analytics, daily streaks, and mastery certificates',
      'Secure backend authentication with free and premium tiers'
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Node.js', 'Express', 'MongoDB', 'Coroutines'],
    metrics: [
      { label: 'PLATFORM', value: 'Native Android' },
      { label: 'UI SYSTEM', value: 'Jetpack Compose' },
      { label: 'TIERS', value: 'Free & Paid' },
    ],
    links: {
      github: 'https://github.com/NareshMRN',
    },
    featured: true,
  }
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-build-to-ship',
    slug: 'build-to-ship-3rd-place',
    title: '3rd Place Winner — Build to Ship Hackathon',
    organization: 'Build to Ship Hackathon',
    year: '2026',
    result: '3rd Place Winner',
    description:
      'Secured 3rd place in the Build to Ship Hackathon with TradeVault, an autonomous multi-agent quantitative trading and risk governance platform.',
    image: '',
    tags: ['Hackathon', 'Multi-Agent AI', 'Quant Trading', 'FastAPI', 'FinTech'],
    details:
      'Awarded 3rd place in the competitive Build to Ship Hackathon for engineering TradeVault. Built an end-to-end multi-agent trading platform featuring Groq DeepSeek-R1 adversarial Bull/Bear debates, Deflated Sharpe Ratio (DSR) and PBO overfitting gates, probabilistic quantile forecasting, fractional Kelly lot sizing, and live Alpaca paper trading with AES-256-GCM zero-trust security.',
    link: 'https://tradevaultone.vercel.app/',
  },
  {
    id: 'ach-1',
    slug: 'solo-founder-sangeetha',
    title: 'Solo Product Founder & Architect — Sangeetha',
    organization: 'Independent Production Project',
    year: '2026',
    result: 'Launched Solo',
    description:
      'Designed, architected, and engineered an entire music streaming and karaoke ecosystem solo from backend to Flutter Android client.',
    image: '',
    tags: ['Full Stack', 'Mobile', 'System Architecture'],
    details:
      'Conceived and engineered Sangeetha completely solo. Built a Flutter mobile app with custom karaoke studio and audio recording effects, Next.js web portal and admin dashboard, MongoDB Atlas backend with Zod schema validation, and structured Docker observability.',
    link: 'https://thesangeetha.vercel.app/',
  },
  {
    id: 'ach-2',
    slug: 'kaggle-gradio-rank-67',
    title: '67th Rank — Gradio Product Image Generation Competition',
    organization: 'Kaggle & NIAT Masterclasses',
    year: '2026',
    result: '67/366 th Rank',
    description:
      'Secured 67th rank on Kaggle by building an automated image generation pipeline for 15 Flipkart products in loop in HD quality using Gradio and Stable Diffusion.',
    image: '',
    tags: ['Kaggle', 'Gradio', 'Stable Diffusion', 'Generative AI'],
    details:
      'Competed in the NIAT Masterclasses Kaggle competition to synthesize e-commerce product imagery using diffusion models and Qwen 2.5 LLM prompt engineering. Programmed an automated batch loop for 15 Flipkart products evaluated on Prompt Quality (40 pts), Image Quality with CLIP score (40 pts), and Gradio UI (20 pts), ranking 63rd on the final leaderboard.',
    link: 'https://kaggle.com/nn2007',
  },
  {
    id: 'ach-3',
    slug: 'semantic-search-rag-kaggle',
    title: 'Semantic Search & RAG Pipeline on Kaggle',
    organization: 'Kaggle & NIAT Masterclasses',
    year: '2026',
    result: 'Kaggle Solved',
    description:
      'Built a complete Semantic Search and RAG pipeline with Sentence-Transformers and FAISS IndexFlatIP over 100,000+ Flipkart reviews to retrieve by intent.',
    image: '',
    tags: ['Kaggle', 'FAISS', 'RAG', 'Sentence-Transformers'],
    details:
      'Overcame the limitations of traditional keyword search on 100,000+ Flipkart customer reviews by engineering dense vector embeddings (SBERT) and FAISS IndexFlatIP vector search. Built a full RAG question-answering pipeline with Precision@K and Recall@K evaluation metrics, EDA visualizations, and an executed Kaggle notebook.',
    link: 'https://kaggle.com/nn2007',
  },
  {
    id: 'ach-4',
    slug: 'zyro-rag-agent',
    title: 'Zyro Dynamics HR Bot',
    organization: 'Kaggle & NIAT Masterclasses',
    year: '2026',
    result: '76/84 th Rank',
    description:
      'Zyro Dynamics HR bot is a AI-powered HR assistant that can answer employee questions about HR policies and procedures.',
    image: '',
    tags: ['Kaggle', 'RAG', 'Langchain', 'Langsmith', 'AI', 'Streamlit', 'Groq_API_Key', 'Langgraph'],
    details:
      'Zyro Dynamics HR bot is a AI-powered HR assistant that can answer employee questions about HR policies and procedures.',
    link: 'https://kaggle.com/nn2007',
  },
];

// ---------------------------------------------------------------------------
// Hackathons
// ---------------------------------------------------------------------------

export const HACKATHONS: HackathonItem[] = [
  {
    id: 'hack-build-to-ship',
    slug: 'build-to-ship-hackathon',
    eventName: 'Build to Ship Hackathon',
    date: '2026',
    role: 'Full Stack & AI Systems Engineer',
    teamSize: '5 Members',
    projectBuilt: 'TradeVault — Multi-Agent Quant Trading Platform',
    result: '3rd Place Winner',
    description:
      'Won 3rd Place among competing engineering teams in the Build to Ship Hackathon by architecting TradeVault, an enterprise-grade hybrid multi-agent quantitative trading and statistical forecasting platform with automated Alpaca broker execution and an emergency kill switch.',
    tech: ['Python', 'FastAPI', 'Node.js', 'Express', 'React', 'Groq DeepSeek-R1', 'Redis', 'MongoDB', 'Alpaca API'],
    links: {
      project: 'https://tradevaultone.vercel.app',
      repo: 'https://github.com/shivannagorkal/Tradint-agent',
      certificate: 'https://drive.google.com/file/d/1XDofeFY-JfByVqlpGlSz8KG79K9pRH4C/view?usp=sharing',
    },
    teamMembers: [
      { name: 'Naresh N', role: 'Lead AI & Full Stack Architect', github: 'https://github.com/NareshMRN' },
      { name: 'Nikhil H M', role: 'Full Stack & Quant Engineer', github: 'https://github.com/nikhilhm' },
      { name: 'Nishanth S G', role: 'Frontend & UI Engineer', github: 'https://github.com/nishanthsg' },
      { name: 'Shivanna', role: 'Full Stack & Broker Integrations', github: 'https://github.com/shivannagorkal' },
      { name: 'G r Harsha', role: 'Data & Systems Engineer', github: 'https://github.com/grharsha' },
    ],
  },
  {
    id: 'hack-murf-ai',
    slug: 'murf-ai-hackathon',
    eventName: 'Murf.AI Hands-On App Building Hackathon',
    date: 'March 2026',
    role: 'AI App Developer',
    teamSize: 'Solo Developer',
    projectBuilt: 'Murf Voice Synthesis Pipeline',
    result: 'Finalist',
    description:
      'Engineered an interactive voice generation app leveraging Murf.AI speech synthesis APIs and real-time audio playback during the national hackathon organized by Murf AI and NIAT.',
    tech: ['Python', 'FastAPI', 'Web Audio API', 'Murf AI'],
    links: {
      project: 'https://thesangeetha.vercel.app/',
      repo: 'https://github.com/NareshMRN',
      certificate: '/certificates/NIAT_Certificate_Naresh N (1).pdf',
    },
  },
  {
    id: 'hack-kaggle-gradio',
    slug: 'kaggle-gradio-competition',
    eventName: 'NIAT Masterclasses x Kaggle Diffusion Hackathon',
    date: '2025',
    role: 'Generative AI Developer',
    teamSize: 'Solo',
    projectBuilt: 'Batch Product Image Generator',
    result: 'Rank 63',
    description:
      'Automated batch image synthesis pipeline for 15 Flipkart products in loop in HD quality using Gradio and diffusion models, securing 63rd rank on the global competition leaderboard.',
    tech: ['Kaggle', 'Gradio', 'Generative AI', 'Python'],
    links: {
      project: 'https://kaggle.com/nn2007',
      repo: 'https://github.com/NareshMRN',
      certificate: '/certificates/YU_NIAT_Building_LLM_Masterclass.jpg',
    },
  },
];

// ---------------------------------------------------------------------------
// Certificates
// ---------------------------------------------------------------------------

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-build-to-ship',
    slug: 'build-to-ship-hackathon',
    title: 'Build to Ship Hackathon & AI Workshop 2026',
    issuer: 'NxtWave & NIAT',
    date: 'September 2026',
    description:
      'Certified by NxtWave CEO Rahul Attuluri for successfully participating in the Build to Ship AI Workshop 2026 and Hackathon, demonstrating modern AI engineering by building, integrating, and deploying intelligent applications using cutting-edge AI technologies, and securing 3rd Place for TradeVault.',
    image: '/certificates/Build2Ship_Participants_Sem3.jpg',
    tags: [
      'Build to Ship',
      'Multi-Agent AI',
      'Quant Trading',
      'FastAPI',
      'Groq DeepSeek-R1',
      'Alpaca API',
      '3rd Place Winner',
    ],
    credentialId: 'NXT-B2S-2026',
    credentialLink:
      'https://drive.google.com/file/d/1XDofeFY-JfByVqlpGlSz8KG79K9pRH4C/view?usp=sharing',
    problemStatement:
      'Hackathons often incentivize brittle prototypes that collapse when exposed to live market feeds, asynchronous socket streams, or rigorous risk audits. The Build to Ship AI challenge mandated engineering teams to bridge the gap between ideation and production deployment by delivering a robust, end-to-end intelligent platform capable of handling real-world market uncertainties and automated execution without human intervention.',
    objective:
      'Architect, develop, and ship TradeVault—an autonomous multi-agent quantitative trading and risk governance platform. The system leverages adversarial Groq DeepSeek-R1 Bull vs. Bear debate engines, Deflated Sharpe Ratio (DSR) & PBO overfitting gates, and automated order routing to Alpaca broker markets with zero-trust AES-256-GCM credential encryption and an emergency kill switch, winning 3rd Place overall.',
    datasetDetails:
      'High-frequency tick data, OHLCV market feeds, and historical financial metrics streamed via Alpaca Market Data and Yahoo Finance APIs, complemented by real-time macroeconomic news feeds and sentiment vectors across differing market volatility regimes.',
    concepts: [
      'Adversarial Multi-Agent Debates: Groq DeepSeek-R1 LLM agents engaging in iterative Bull vs. Bear analytical debates to evaluate trade theses',
      'Statistical Overfitting Governance: Enforcing Deflated Sharpe Ratio (DSR) and Probability of Backtest Overfitting (PBO) via Combinatorially Symmetric Cross-Validation (CSCV)',
      'Probabilistic Quantile Forecasting: Regression modeling across P10, P25, Median (P50), P75, and P90 confidence intervals for risk-aware price bounds',
      'Automated Broker Routing: Direct Alpaca Paper & Live market trade execution governed by fractional Kelly position sizing algorithms',
      'Zero-Trust Cryptographic Vault: AES-256-GCM encrypted API key storage with memory-isolated ephemeral keys and an emergency one-click kill switch',
      'Full-Stack Distributed System: React/Vite/Tailwind frontend, Node.js/Express API gateway with Redis pub/sub queue, and Python FastAPI agent runtime',
    ],
    workshopHighlights: [
      'Intensive hands-on engineering in modern AI agent orchestration, reasoning chains, and autonomous tool invocation',
      'Design of fault-tolerant agent feedback loops with automated risk vetoes and human-in-the-loop safeguards',
      'Production deployment workflows utilizing FastAPI, WebSockets, Redis queuing, and Vercel edge infrastructure',
      'Sprint delivery under tight deadlines, achieving high test coverage, clean system boundaries, and live broker integration',
    ],
    keyHighlights: [
      'Hackathon Award: Secured 3rd Place among university-wide engineering teams for architecting TradeVault',
      'Sub-Second LLM Debates: Low-latency adversarial Bull/Bear evaluations powered by Groq-accelerated DeepSeek-R1',
      'Autonomous Risk Manager: Independent agent with authority to veto proposals failing Deflated Sharpe Ratio thresholds',
      'Live Execution Pipeline: End-to-end order flow from signals to Alpaca broker fills with real-time portfolio telemetry',
      'Zero-Trust Security: AES-256-GCM encrypted secrets vault protecting broker credentials against exfiltration',
      'Production Cloud Architecture: Frontend live on Vercel with resilient backend microservices',
    ],
    deliverables: [
      'Official Certificate of Participation accredited by NxtWave CEO Rahul Attuluri (Issue Date: 22/09/2026)',
      'Production-grade source code repository on GitHub with complete multi-agent runtime and broker integrations',
      'Live deployed web application accessible on Vercel (https://tradevaultone.vercel.app)',
      'End-to-end architecture walkthrough and system demo video',
      'Comprehensive backtesting validation suite with DSR, CSCV, and Kelly criterion documentation',
    ],
    evaluationCriteria: [
      'Engineering Rigor & Architecture (30%): Production readiness, modular microservice separation, error resilience, and deployment stability',
      'AI & Multi-Agent Innovation (25%): Quality of adversarial reasoning, agent debate dynamics, and prompt engineering orchestration',
      'Risk & Quantitative Validity (20%): Mathematical rigor of DSR overfitting gates, PBO calculations, and Kelly criterion position sizing',
      'Execution & Usability (15%): Tactile UI responsiveness, intuitive telemetry dashboard, and live broker execution feedback',
      'Final Hackathon Outcome: Awarded 3rd Place Winner in the Build to Ship Hackathon',
    ],
    projectLink: 'https://tradevaultone.vercel.app',
  },
  {
    id: 'cert-vector-search',
    slug: 'vector-search-masterclass',
    title: 'Vector Search in Practice: Semantic Search with LLMs',
    issuer: 'NIAT Masterclasses & Amazon',
    date: '2026',
    description:
      'Certified by Applied Scientist Arpan Paul (Amazon) for building high-performance semantic search engines and RAG pipelines for 100,000+ Flipkart customer reviews using Sentence-Transformers and FAISS.',
    image: '/certificates/YU_NIAT_Vector_Masterclass.jpg',
    tags: ['Vector Search', 'FAISS', 'RAG', 'Sentence-Transformers', 'Kaggle'],
    credentialId: 'NIAT-VS-2026',
    credentialLink: 'https://drive.google.com/file/d/1nEbTYC1KHf70gc5Hxr7Vge2Li1afKN-q/view?usp=drive_link',
    problemStatement:
      'Traditional keyword-based search systems fail when users express their intent using different words than those stored in the database. For example, a user searching for "energy-efficient AC" might not find products labeled as "low-power air conditioner", even though both refer to the same type of device. This results in poor user experience and missed business opportunities.',
    objective:
      'Build a complete Semantic Search and RAG (Retrieval-Augmented Generation) pipeline that understands user intent and retrieves relevant results based on meaning—not just keyword matching—using industry-standard vector search techniques.',
    datasetDetails:
      'Flipkart Product Customer Reviews Dataset (~100,000+ product reviews). Key columns: Product Name, Review, Rating, Summary. Domain: E-commerce customer sentiment and product reviews.',
    concepts: [
      'Text Preprocessing and Cleaning',
      'Sentence Embeddings (Sentence-Transformers / SBERT)',
      'Vector Similarity (Cosine Similarity, Inner Product)',
      'FAISS Indexing (IndexFlatIP)',
      'Retrieval-Augmented Generation (RAG)',
      'Evaluation Metrics (Precision@K, Recall@K)',
      'Exploratory Data Analysis (EDA) & PCA Dimensionality Reduction'
    ],
    deliverables: [
      'Jupyter Notebook executed on Kaggle with all code, outputs, and cell explanations',
      'EDA Visualizations (rating distribution, word clouds, text length plots, PCA embeddings)',
      'Working Semantic Search Function with live example intent queries',
      'RAG Pipeline that generates grounded, context-aware natural language answers',
      'Evaluation Metrics Suite (Precision@K, Recall@K benchmarked across diverse queries)',
      'Business Insights & Technical Recommendation Report (200–300 words)'
    ],
    projectLink: 'https://github.com/NareshMRN',
    kaggleLink: 'https://kaggle.com/nn2007',
  },
  {
    id: 'cert-gradio-llm',
    slug: 'building-llm-app-gradio',
    title: 'Building LLM Apps with Gradio Masterclass',
    issuer: 'NIAT Masterclasses & EXL',
    date: '2026',
    description:
      'Certified by Senior GenAI Engineer Suvojit Hore (EXL) for building an automated AI-powered product image generation pipeline using Qwen LLMs, Stable Diffusion v1.5, and Gradio, ranking 63rd on Kaggle.',
    image: '/certificates/YU_NIAT_Building_LLM_Masterclass.jpg',
    tags: ['Gradio', 'Generative AI', 'Stable Diffusion', 'LLM', 'Kaggle Rank 63'],
    credentialId: 'NIAT-GR-2026',
    credentialLink: 'https://drive.google.com/file/d/1nEbTYC1KHf70gc5Hxr7Vge2Li1afKN-q/view?usp=drive_link',
    problemStatement:
      'You are an AI engineer at an e-commerce company. Your task is to build an AI powered product image generation system that takes simple product descriptions as input, uses an LLM to engineer detailed creative prompts optimized for image generation, generates professional product images using Stable Diffusion, and wraps everything in an interactive Gradio web interface.',
    objective:
      'Synthesize photorealistic product visuals for 15 test Flipkart product descriptions in an automated loop, achieving maximum prompt engineering similarity, high visual CLIP score, and seamless Gradio UI interaction.',
    datasetDetails:
      '15 Flipkart product descriptions provided in the competition dataset. Includes constraints: prompt length under 70 words to prevent CLIP token truncation while detailing lighting, composition, texture, and style.',
    concepts: [
      'Step 1: Load LLM (Qwen 2.5-0.5B-Instruct) & write prompt re-engineering function',
      'Step 2: Load Stable Diffusion v1.5 & write image synthesis function from engineered prompts',
      'Step 3: Build Gradio interface for live description input, prompt display, and image preview',
      'Step 4: Execute batch pipeline on all 15 product descriptions with GPU T4 acceleration',
      'Step 5: Run competition evaluation cells to compute final composite score and generate final_scores.csv'
    ],
    evaluationCriteria: [
      'Prompt Quality (40 points): Cosine similarity comparison with expert reference prompts',
      'Image Quality (40 points): CLIP Score measuring alignment between generated image and original description',
      'Gradio UI (20 points): Fully functional web application accepting descriptions and rendering outputs',
      'Combined Scoring Formula: score = prompt_score × 0.4 + image_score × 0.4 + gradio_score × 0.2 (Leaderboard ranked by RMSE: lower is better)',
      'Competition Result: Secured 63rd Rank on the global Kaggle leaderboard'
    ],
    deliverables: [
      'Full Kaggle Jupyter Notebook with executed cells and outputs',
      'Automated batch generation pipeline for all 15 products',
      'Interactive Gradio web interface for live interactive demonstration',
      'final_scores.csv verified against submission criteria'
    ],
    projectLink: 'https://github.com/NareshMRN',
    kaggleLink: 'https://kaggle.com/nn2007',
  },
  {
    id: 'cert-ai-agents-201',
    slug: 'ai-agents-201-workshop',
    title: 'AI Agents 201 Hands-On Workshop',
    issuer: 'NxtWave / NIAT',
    date: 'April 2026',
    description:
      'Certified by CEO Rahul Attuluri for mastering and engineering autonomous AI agents, tool-calling frameworks, reasoning architectures, and practical agentic workflows.',
    image: '/certificates/201AI-AGENTS_workshop.jpg',
    tags: ['AI Agents', 'LLM', 'Python'],
    credentialId: 'NXT-AGENTS-201',
    credentialLink: '/certificates/201AI-AGENTS workshop.pdf',
  },
  {
    id: 'cert-murf-ai',
    slug: 'murf-ai-hackathon-cert',
    title: 'Murf.AI Workshop & Hands-On App Building at NIAT',
    issuer: 'Murf AI & NIAT',
    date: 'March 2026',
    description:
      'Certified by Murf AI CEO Ankur Edkie for active hands-on engineering in the Murf AI campus workshop at NIAT, mastering studio-quality voice generation workflows.',
    image: '/certificates/NIAT_Certificate_Naresh_N__1_.jpg',
    tags: ['Murf AI', 'Voice AI', 'Audio Engineering', 'Python'],
    credentialId: 'MURF-NIAT-2026',
    credentialLink: '/certificates/NIAT_Certificate_Naresh N (1).pdf',
    problemStatement:
      'Traditional voiceover production requires expensive recording studios, high-end microphones, and professional voice actors, creating a high barrier to entry for rapid multimedia and application development.',
    objective:
      'Master and implement Murf AI—a leading industry-grade AI voice platform—to convert text into natural, studio-quality voiceovers within minutes directly inside custom applications and media pipelines.',
    workshopHighlights: [
      'Hands-on experience with a real-world, industry-standard AI voice platform',
      'Exposure to practical end-to-end AI voice workflows used across tech and media enterprises',
      'Creation of AI-powered audio pipelines and voice synthesis integrations',
      'Practical implementation across core industry use-cases'
    ],
    keyHighlights: [
      'Product Demos: Instant clear explanatory narration for product releases',
      'Explainer Videos: High-retention narrative audio synchronized to visual flows',
      'Marketing Content: Compelling, expressive brand voiceovers',
      'Training Modules: Consistent, professional instructional voices for e-learning',
      'Podcasts: Studio-level broadcast vocal tracks generated programmatically',
      'Application Audio: In-app real-time speech and interactive voice assistants'
    ],
    projectLink: 'https://thesangeetha.vercel.app/',
  },
  {
    id: 'cert-aiot-yu',
    slug: 'connected-care-aiot-yu',
    title: 'Connected Care with AIOT (Advanced)',
    issuer: 'Yenepoya University & NIAT',
    date: 'April 2026',
    description:
      'Advanced technical certification on building resilient AIoT solutions bridging embedded edge sensors and intelligent predictive analytics.',
    image: '/certificates/YU_NIAT_AIOT.jpg',
    tags: ['AIoT', 'Embedded Systems', 'Edge AI'],
    credentialId: 'YU-NIAT-AIOT-2026',
    credentialLink: '/certificates/YU_NIAT_AIOT.pdf',
  },
  {
    id: 'cert-robotic-arms',
    slug: 'robotic-arms-101',
    title: 'Robotic Arms 101 Hands-On Workshop',
    issuer: 'NIAT Robotics & Advanced Tech',
    date: '2026',
    description:
      'Hands-on engineering workshop exploring robotic kinematics, servo motor control, forward and inverse kinematics, and automated trajectory planning.',
    image: '/certificates/NIAT_Certificate_Robotic_Arms_2026_Naresh_N.jpg',
    tags: ['Robotics', 'Kinematics', 'Hardware'],
    credentialId: 'NIAT-ROBOTICS-ARM',
    credentialLink: '/certificates/NIAT_Certificate_Robotic_Arms_2026_Naresh N.pdf',
  },
  {
    id: 'cert-autonomous-vehicles',
    slug: 'autonomous-vehicles-workshop',
    title: 'Autonomous Vehicles Hands-On Workshop',
    issuer: 'NIAT Robotics (Sai Teja, VP)',
    date: '2026',
    description:
      'Practical engineering workshop on computer vision, sensor fusion, LiDAR/camera perception, and control loops for autonomous navigation.',
    image: '/certificates/NIAT_Certificate_Naresh_N.jpg',
    tags: ['Autonomous Vehicles', 'Computer Vision', 'Robotics'],
    credentialId: 'NIAT-AUTO-VEHICLES',
    credentialLink: '/certificates/NIAT_Certificate_Naresh N.pdf',
  },
  {
    id: 'cert-base44',
    slug: 'base44-app-building',
    title: 'Base44 Hands-On App Building Workshop',
    issuer: 'Base44 & NIAT',
    date: 'November 2025',
    description:
      'Completed hands-on software development workshop building full-stack reactive web applications led by Elsa Welshofer.',
    image: '/certificates/base44_wrokshop.jpg',
    tags: ['Web Development', 'Full Stack', 'App Building'],
    credentialId: 'BASE44-WS-2025',
    credentialLink: '/certificates/base44 wrokshop.pdf',
  },
];

// ---------------------------------------------------------------------------
// Timeline (Beyond the Code)
// ---------------------------------------------------------------------------

export const TIMELINE: TimelineMilestone[] = [
  {
    id: 'time-1',
    period: 'HOW I WORK',
    title: 'Ship Fast, Refine Relentlessly',
    subtitle: 'Execution over speculation',
    description:
      'I believe in shipping a functional, testable version quickly to feel how it behaves under real fingers. Then I iterate relentlessly on performance, tactile feedback, and edge-case resiliency until the software feels inevitable.',
    category: 'how-i-work',
  },
  {
    id: 'time-2',
    period: 'WHAT DRIVES ME',
    title: 'Zero-to-One Product Creation',
    subtitle: 'Solving concrete human friction',
    description:
      'Writing code is satisfying, but building a complete, functional product from absolute zero that solves an actual human friction—like fear of speaking or wanting an uncluttered music player—is what keeps me coding until 3 AM.',
    category: 'what-drives-me',
  },
  {
    id: 'time-3',
    period: 'EXPLORING NOW',
    title: 'Voice AI · LLM Apps · Native Android · Flutter',
    subtitle: 'The next frontier of human-software interaction',
    description:
      'Currently deep-diving into low-latency conversational audio streaming, LLM tool-calling architectures, and high-performance Kotlin/Android graphics alongside Flutter cross-platform development. The goal: interfaces that feel invisible yet deeply powerful.',
    category: 'exploring',
  },
  {
    id: 'time-4',
    period: '2025 — 2029',
    title: 'B.Tech CSE-IT @ NIAT Mangaluru',
    subtitle: 'NxtWave Institute of Advanced Technologies (Yenepoya University)',
    description:
      'Second-year undergraduate building production systems while mastering computer science fundamentals, data structures, operating systems, and distributed networks.',
    category: 'how-i-work',
  },
];

// ---------------------------------------------------------------------------
// Social Links (Strictly No LinkedIn)
// ---------------------------------------------------------------------------

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: PERSONAL_INFO.githubUrl, handle: 'github.com/NareshMRN' },
  { name: 'Kaggle', href: PERSONAL_INFO.kaggleUrl, handle: 'kaggle.com/nn2007' },
  { name: 'Instagram', href: PERSONAL_INFO.instagramUrl, handle: 'instagram.com/mr_naresh_1819_' },
  { name: 'X', href: PERSONAL_INFO.xUrl, handle: 'x.com/NareshN929' },
  { name: 'Email', href: `mailto:${PERSONAL_INFO.email}`, handle: PERSONAL_INFO.email },
];

// ---------------------------------------------------------------------------
// Contact Form Configuration
// ---------------------------------------------------------------------------

export const CONTACT_CONFIG = {
  // EmailJS Configuration - set these in your .env file:
  // VITE_EMAILJS_SERVICE_ID=your_service_id
  // VITE_EMAILJS_TEMPLATE_ID=your_template_id
  // VITE_EMAILJS_PUBLIC_KEY=your_public_key
  //
  // OR Formspree:
  // VITE_FORMSPREE_ID=your_form_id
  //
  // Falls back to mailto: if neither is configured.
  mailtoFallback: `mailto:${PERSONAL_INFO.email}?subject=Hello%20Naresh`,
};
