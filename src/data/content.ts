// ==============================================================================
// ALL PORTFOLIO CONTENT LIVES HERE
// Edit this file to update text, projects, achievements, skills, and links.
// ==============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

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
  result: 'Winner' | 'Finalist' | 'Participant';
  description: string;
  tech: string[];
  links: {
    project?: string;
    repo?: string;
    certificate?: string;
  };
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
  statusBadge: 'Available for internships & collaborations',
  quote:
    'Architecture is not just how software runs under load—it is how effortlessly it feels to the human on the other side.',
  signatureText: 'Naresh',
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
    tech: ['Flutter', 'Next.js', 'Node.js', 'MongoDB Atlas', 'Docker', 'Riverpod', 'Zod', 'JWT'],
    metrics: [
      { label: 'ROLE', value: 'Founder & Sole Dev' },
      { label: 'PLATFORMS', value: 'Android, Web, Admin' },
      { label: 'STATUS', value: 'Live in Production' },
    ],
    links: {
      live: 'https://thesangeetha.vercel.app/',
      github: 'https://github.com/NareshMRN',
      video: 'https://drive.google.com/file/d/1rlLNJWq6KeV34KiUQXDmqOojhJwBmPTM/view?usp=drive_link',
    },
    featured: true,
  },
  {
    id: 'aira',
    slug: 'aira',
    number: '02',
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
    number: '03',
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
  },
  {
    id: 'vector-search',
    slug: 'vector-search',
    number: '04',
    title: 'Vector Search Engine',
    status: 'Past',
    category: 'AI / VECTOR SEARCH',
    tagline: 'Semantic vector search engine for 100,000 Amazon Product Reviews.',
    description:
      'Built a vector searching project for 100,000 Amazon Products Reviews dataset to check the meaning and sentiment of each review. Utilizes high-dimensional embeddings and FAISS index for sub-millisecond similarity search. Certified by Official NIAT Masterclasses.',
    fullOverview:
      'A large-scale semantic information retrieval engine built on an Amazon Product Reviews dataset containing over 100,000 entries. Instead of traditional keyword indexing, queries and reviews are projected into a dense semantic vector space to analyze customer intent, semantic nuances, and sentiment polarity.',
    architectureDetails: [
      'Data preprocessing pipeline cleaning and normalizing 100,000 product reviews',
      'Sentence embeddings generated with PyTorch transformers',
      'FAISS (Facebook AI Similarity Search) index for high-speed nearest-neighbor retrieval',
      'Sentiment polarity analysis correlated with review rating scores',
      'Demonstrated sub-10ms retrieval latency across high-dimensional vectors'
    ],
    features: [
      'Semantic conceptual search over 100k reviews beyond keyword matching',
      'Instant sentiment classification and polarity scoring',
      'Benchmarked index search using cosine similarity and L2 distance',
      'Comprehensive performance evaluation and query analytics'
    ],
    tech: ['Python', 'FAISS', 'PyTorch', 'Transformers', 'NumPy', 'Pandas'],
    metrics: [
      { label: 'DATASET', value: '100k Reviews' },
      { label: 'SPEED', value: '<10ms Search' },
      { label: 'CERTIFICATE', value: 'NIAT Masterclass' },
    ],
    links: {
      github: 'https://github.com/NareshMRN',
    },
    featured: true,
  },
  {
    id: 'gradio-image-gen',
    slug: 'gradio-image-gen',
    number: '05',
    title: 'Image Generation with Gradio',
    status: 'Past',
    category: 'GENERATIVE AI / COMPETITION',
    tagline: 'Automated HD product image generation pipeline ranking 63rd on Kaggle.',
    description:
      'Built an Image Generation app with Gradio on the Kaggle platform to generate HD quality images for 15 Flipkart products in an automated loop. Achieved 63rd rank in the competition and awarded Official NIAT Masterclasses Certification.',
    fullOverview:
      'Engineered an automated generative AI pipeline using Gradio and diffusion models to programmatically synthesize photorealistic product visuals for e-commerce listings. Competed against hundreds of developers on Kaggle, securing 63rd rank for prompt consistency, image fidelity, and pipeline speed.',
    architectureDetails: [
      'Gradio interactive web UI for custom parameter tuning and prompt experimentation',
      'Automated batch pipeline synthesizing product visuals across 15 Flipkart items',
      'Prompt engineering methodology optimizing lighting, background, and texture',
      'Kaggle GPU-accelerated inference loop with memory optimization'
    ],
    features: [
      'Automated looping generation for 15 e-commerce products',
      'Interactive Gradio control interface with live prompt tweaking',
      'High-resolution output upscaling and quality filtering',
      '63rd competitive ranking on Kaggle leaderboard'
    ],
    tech: ['Python', 'Gradio', 'Diffusion Models', 'Kaggle GPU', 'PIL'],
    metrics: [
      { label: 'COMPETITION', value: '63rd Rank' },
      { label: 'PRODUCTS', value: '15 Flipkart Items' },
      { label: 'CERTIFICATION', value: 'NIAT Official' },
    ],
    links: {
      github: 'https://github.com/NareshMRN',
      live: 'https://kaggle.com/nn2007',
    },
    featured: false,
  },
  {
    id: 'kaggle-project',
    slug: 'kaggle-project',
    number: '06',
    title: 'TODO: replace with my real Kaggle project',
    status: 'Past',
    category: 'TODO: CATEGORY',
    tagline: 'TODO: replace with real tagline',
    description:
      'TODO: replace with my real Kaggle project. Problem: TODO. Dataset: TODO. Model/Approach: TODO. Result/Score: TODO. Notebook link: TODO.',
    fullOverview:
      'TODO: replace with detailed overview of the Kaggle project. Problem statement, dataset architecture, preprocessing, model architecture, training loop, and submission score.',
    architectureDetails: [
      'TODO: Dataset — describe the dataset used',
      'TODO: Model/Approach — describe the ML approach',
      'TODO: Training pipeline and hyperparameter tuning',
      'TODO: Evaluation metrics and validation strategy'
    ],
    features: [
      'TODO: Key finding or feature 1',
      'TODO: Key finding or feature 2',
      'TODO: Key finding or feature 3'
    ],
    tech: ['Python', 'TODO: add frameworks used'],
    metrics: [
      { label: 'PROBLEM', value: 'TODO: replace' },
      { label: 'MODEL', value: 'TODO: replace' },
      { label: 'SCORE', value: 'TODO: replace' },
    ],
    links: {
      live: 'https://kaggle.com/nn2007',
      github: 'https://github.com/NareshMRN',
    },
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// Achievements
// ---------------------------------------------------------------------------

export const ACHIEVEMENTS: AchievementItem[] = [
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
    slug: 'kaggle-gradio-rank-63',
    title: '63rd Rank — Gradio Product Image Generation Competition',
    organization: 'Kaggle & NIAT Masterclasses',
    year: '2025',
    result: 'Rank 63',
    description:
      'Secured 63rd rank on Kaggle by building an automated image generation pipeline for 15 Flipkart products in loop in HD quality using Gradio.',
    image: '',
    tags: ['Kaggle', 'Gradio', 'Generative AI'],
    details:
      'Competed in the NIAT Masterclasses Kaggle competition to synthesize e-commerce product imagery using diffusion models. Programmed an automated batch loop for 15 products with high prompt consistency and fast execution, ranking 63rd on the final leaderboard.',
    link: 'https://kaggle.com/nn2007',
  },
  {
    id: 'ach-placeholder-1',
    slug: 'placeholder-achievement-1',
    title: 'TODO: replace with real achievement title',
    organization: 'TODO: replace with organization',
    year: 'TODO',
    result: 'TODO: replace',
    description: 'TODO: replace with a 2-line description of this achievement.',
    image: '',
    tags: ['TODO: Tag 1', 'TODO: Tag 2'],
    details: 'TODO: replace with full details of this achievement.',
    link: '',
  },
  {
    id: 'ach-placeholder-2',
    slug: 'placeholder-achievement-2',
    title: 'TODO: replace with real achievement title',
    organization: 'TODO: replace with organization',
    year: 'TODO',
    result: 'TODO: replace',
    description: 'TODO: replace with a 2-line description of this achievement.',
    image: '',
    tags: ['TODO: Tag 1', 'TODO: Tag 2'],
    details: 'TODO: replace with full details of this achievement.',
    link: '',
  },
];

// ---------------------------------------------------------------------------
// Hackathons
// ---------------------------------------------------------------------------

export const HACKATHONS: HackathonItem[] = [
  {
    id: 'hack-placeholder-1',
    slug: 'placeholder-hackathon-1',
    eventName: 'TODO: replace with hackathon event name',
    date: 'TODO: replace with date',
    role: 'TODO: replace with your role (e.g. Lead Developer)',
    teamSize: 'TODO: replace (e.g. Team of 4)',
    projectBuilt: 'TODO: replace with project name',
    result: 'Participant',
    description: 'TODO: replace with what you built and achieved at this hackathon.',
    tech: ['TODO: Tech 1', 'TODO: Tech 2', 'TODO: Tech 3'],
    links: {
      project: '',
      repo: 'https://github.com/NareshMRN',
      certificate: '',
    },
  },
  {
    id: 'hack-placeholder-2',
    slug: 'placeholder-hackathon-2',
    eventName: 'TODO: replace with hackathon event name',
    date: 'TODO: replace with date',
    role: 'TODO: replace with your role (e.g. Full Stack Developer)',
    teamSize: 'TODO: replace (e.g. Solo / Team of 3)',
    projectBuilt: 'TODO: replace with project name',
    result: 'Finalist',
    description: 'TODO: replace with what you built and achieved at this hackathon.',
    tech: ['TODO: Tech 1', 'TODO: Tech 2'],
    links: {
      project: '',
      repo: 'https://github.com/NareshMRN',
      certificate: '',
    },
  },
];

// ---------------------------------------------------------------------------
// Certificates
// ---------------------------------------------------------------------------

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-vector-search',
    slug: 'vector-search-masterclass',
    title: 'Vector Search Masterclass Project',
    issuer: 'Official NIAT Masterclasses',
    date: '2025',
    description:
      'Certified for building semantic vector search engine for 100,000 Amazon product reviews evaluating sentiment and semantic intent.',
    image: '/certificates/vector-search.jpg', // Place your certificate image in public/certificates/
    tags: ['Vector Search', 'FAISS', 'PyTorch'],
    credentialId: 'NIAT-VS-2025',
    credentialLink: 'https://drive.google.com/file/d/1nEbTYC1KHf70gc5Hxr7Vge2Li1afKN-q/view?usp=drive_link',
  },
  {
    id: 'cert-gradio-llm',
    slug: 'building-llm-app-gradio',
    title: 'Building LLM App with Gradio',
    issuer: 'Official NIAT Masterclasses',
    date: '2025',
    description:
      'Certified for engineering interactive LLM applications and automated generative diffusion pipelines with Gradio.',
    image: '/certificates/gradio-llm.jpg', // Place your certificate image in public/certificates/
    tags: ['Gradio', 'Generative AI', 'Kaggle'],
    credentialId: 'NIAT-GR-2025',
    credentialLink: 'https://drive.google.com/file/d/1nEbTYC1KHf70gc5Hxr7Vge2Li1afKN-q/view?usp=drive_link',
  },
  {
    id: 'cert-placeholder-1',
    slug: 'placeholder-certificate-1',
    title: 'TODO: replace with certificate title',
    issuer: 'TODO: replace with issuer',
    date: 'TODO: replace with date',
    description: 'TODO: replace with certificate description.',
    image: '/certificates/placeholder-1.jpg',
    tags: ['TODO: Tag 1', 'TODO: Tag 2'],
    credentialId: 'TODO: replace',
    credentialLink: '',
  },
  {
    id: 'cert-placeholder-2',
    slug: 'placeholder-certificate-2',
    title: 'TODO: replace with certificate title',
    issuer: 'TODO: replace with issuer',
    date: 'TODO: replace with date',
    description: 'TODO: replace with certificate description.',
    image: '/certificates/placeholder-2.jpg',
    tags: ['TODO: Tag 1'],
    credentialId: 'TODO: replace',
    credentialLink: '',
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
