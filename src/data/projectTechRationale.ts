export interface TechRationale {
  role: string;
  reason: string;
}

export const PROJECT_TECH_RATIONALE: Record<string, Record<string, TechRationale>> = {
  // Sangeetha
  sangeetha: {
    'Flutter': {
      role: 'Cross-Platform Mobile Client',
      reason: 'Delivers a native 60fps mobile experience across Android and iOS with hardware-accelerated audio recording pipelines, waveform rendering, and synchronized lyric playback.',
    },
    'Next.js': {
      role: 'Web Interface & SSR Frontend',
      reason: 'Powers the public web client, artist profiles, and SEO-optimized track discovery catalogue with fast server-side rendering and static asset optimization.',
    },
    'Node.js': {
      role: 'Asynchronous Event Gateway',
      reason: 'Handles high-throughput media streaming sessions, audio metadata processing, and event loops for real-time user activity coordination.',
    },
    'Express.js': {
      role: 'Modular REST Routing',
      reason: 'Supplies lightweight HTTP routing and robust middleware architecture for audio upload streams, user profile management, and authentication hooks.',
    },
    'MongoDB Atlas': {
      role: 'Cloud Database Cluster',
      reason: 'Scalable cloud NoSQL database storing user profiles, playlist hierarchies, recording session metadata, and real-time community leaderboard scores.',
    },
    'Docker': {
      role: 'Containerized Deployment',
      reason: 'Encapsulates backend services into lightweight, reproducible containers ensuring zero environment drift between local dev and cloud production.',
    },
    'Riverpod': {
      role: 'Compile-Safe State Management',
      reason: 'Reactive, decoupled state management in Flutter eliminating race conditions during real-time microphone capture and synchronous music track playback.',
    },
    'Zod': {
      role: 'Runtime Schema Validation',
      reason: 'Enforces strict end-to-end runtime type safety on all incoming API request payloads, audio stream parameters, and metadata contracts.',
    },
    'JWT': {
      role: 'Stateless Token Security',
      reason: 'Generates cryptographically signed bearer tokens for session persistence, API route guards, and granular administrative privileges.',
    },
  },

  // TradeVault
  tradevault: {
    'Python': {
      role: 'Quantitative Modeling & Engine',
      reason: 'Executes mathematical financial models, algorithmic backtesting simulations, and automated order execution strategies.',
    },
    'FastAPI': {
      role: 'High-Speed Async API',
      reason: 'Delivers ultra-low latency REST endpoints with automated OpenAPI contract generation for rapid market data ingestion.',
    },
    'Node.js': {
      role: 'Real-Time Event Gateway',
      reason: 'Distributes high-frequency market order book events and coordinates client WebSocket sessions with minimal overhead.',
    },
    'Express': {
      role: 'Account & Service Router',
      reason: 'Handles authenticated portfolio queries, historical backtest request routing, and broker webhook verification.',
    },
    'React': {
      role: 'Interactive Trading Dashboard',
      reason: 'Renders dynamic candlestick financial charts, live depth order books, and responsive portfolio risk management tools.',
    },
    'Redis': {
      role: 'In-Memory Cache & Pub/Sub',
      reason: 'Provides microsecond price ticker caching, rate limiting guards, and message queues for asynchronous order dispatch.',
    },
    'MongoDB': {
      role: 'Trade Log & Audit Store',
      reason: 'Persists multi-asset historical trade executions, user account balances, strategy configurations, and performance run records.',
    },
    'Groq / DeepSeek-R1': {
      role: 'Quantitative LLM Reasoning',
      reason: 'Generates automated real-time market sentiment analysis and natural-language strategy execution explanations.',
    },
    'Alpaca API': {
      role: 'Brokerage Execution Gateway',
      reason: 'Enables direct paper and live algorithmic stock trade placement, position tracking, and real-time order fill polling.',
    },
    'Docker': {
      role: 'Sandboxed Bot Runtime',
      reason: 'Isolates algorithmic execution bots in reproducible containers with dedicated network policies and dependency isolation.',
    },
  },

  // TryScan
  tryscan: {
    'React': {
      role: 'Mobile Scanner Interface',
      reason: 'Builds a touch-optimized scanner interface with rapid camera viewfinder controls and real-time scan verification.',
    },
    'Node.js': {
      role: 'High-Concurrency Ingestion',
      reason: 'Processes incoming scan payloads and coordinates simultaneous inventory balance updates across warehouse handhelds.',
    },
    'Express': {
      role: 'Warehouse REST Backend',
      reason: 'Exposes clean endpoints for SKU lookups, inventory transfers, user sessions, and hardware device registration.',
    },
    'MongoDB': {
      role: 'SKU & Inventory Store',
      reason: 'Stores product master data, barcode serial mappings, stock audit trails, and multi-location warehouse hierarchies.',
    },
    'Socket.io': {
      role: 'Bi-Directional Device Sync',
      reason: 'Broadcasts instant WebSocket updates so all warehouse terminals display refreshed stock numbers the millisecond a barcode is scanned.',
    },
    'Tailwind CSS': {
      role: 'Utility-First UI Styling',
      reason: 'Provides hardware-accelerated, lightweight responsive styling optimized for mobile warehouse terminals and desktop screens.',
    },
    'JavaScript': {
      role: 'Full-Stack Logic Layer',
      reason: 'Unifies client-side camera decoding APIs with asynchronous backend data persistence and inventory reconciliation.',
    },
  },

  // Vector Search Engine
  'vector-search': {
    'Python': {
      role: 'Deep Learning Pipeline',
      reason: 'Orchestrates the vector embedding workflow, tensor matrix operations, and multi-threaded indexing pipelines.',
    },
    'Sentence-Transformers': {
      role: 'Dense Semantic Embeddings',
      reason: 'Converts unstructured text passages and search queries into rich 768-dimensional semantic vector representations.',
    },
    'FAISS': {
      role: 'Nearest-Neighbor Vector Index',
      reason: 'Meta AI library executing sub-millisecond nearest-neighbor distance computations across large-scale vector embeddings.',
    },
    'RAG': {
      role: 'Retrieval-Augmented Architecture',
      reason: 'Couples vector similarity search with language models to retrieve exact contextual passages and ground query answers.',
    },
    'PyTorch': {
      role: 'Tensor & Compute Engine',
      reason: 'Executes GPU-accelerated deep learning inference, attention layers, and model weight calculations.',
    },
    'Pandas': {
      role: 'Dataset Preprocessing',
      reason: 'Cleans, transforms, and batches raw textual corpora into normalized datasets ready for vector embedding extraction.',
    },
    'Matplotlib': {
      role: 'Performance Visualizations',
      reason: 'Plots cosine similarity distributions, recall-vs-latency curves, and vector cluster dimensional projections.',
    },
    'Kaggle': {
      role: 'Cloud Experiment Environment',
      reason: 'Provided scalable cloud GPU compute for large-scale embedding extraction and vector recall profiling experiments.',
    },
  },

  // Gradio Image Gen
  'gradio-image-gen': {
    'Python': {
      role: 'Diffusion Workflow Orchestrator',
      reason: 'Controls diffusion scheduling, checkpoint loading, prompt conditioning, and latent space transformations.',
    },
    'Gradio': {
      role: 'Interactive Web Studio GUI',
      reason: 'Provides real-time slider controls, image preview galleries, and side-by-side prompt tuning comparisons.',
    },
    'Stable Diffusion v1.5': {
      role: 'Core Generative Diffusion Model',
      reason: 'Synthesizes high-resolution visual artwork through iterative latent space denoising conditioned on descriptive text prompts.',
    },
    'Qwen 2.5': {
      role: 'Multimodal Vision-Language Model',
      reason: 'Performs intelligent prompt expansion, image caption verification, and visual semantic reasoning.',
    },
    'Kaggle GPU': {
      role: 'Cloud Acceleration Hardware',
      reason: 'Provided high-VRAM cloud GPU hardware for low-latency diffusion denoising iterations and batch generation.',
    },
    'PyTorch': {
      role: 'Deep Learning Tensor Backend',
      reason: 'Powers GPU tensor operations, cross-attention mechanism computation, and diffusion model weight caching.',
    },
    'CLIP': {
      role: 'Cross-Modal Prompt Alignment',
      reason: 'Scores semantic alignment between user text prompts and synthesized images to guarantee faithful visual generation.',
    },
  },

  // Zyro RAG Challenge
  'zyro-rag-challenge': {
    'Python': {
      role: 'Document Pipeline Engine',
      reason: 'Coordinates document ingestion, recursive text splitting, embedding generation, and contextual synthesis.',
    },
    'Streamlit': {
      role: 'Interactive Q&A Interface',
      reason: 'Provides a clean conversational web interface for drag-and-drop PDF ingestion, live Q&A streaming, and source citation inspection.',
    },
    'LangChain': {
      role: 'Retrieval Chain Orchestration',
      reason: 'Chains document loaders, text splitters, vector stores, and prompt templates into a unified contextual Q&A workflow.',
    },
    'FAISS': {
      role: 'Vector Similarity Index',
      reason: 'Indexes document vector chunks for instantaneous similarity lookups during conversational question retrieval.',
    },
    'Groq': {
      role: 'Ultra-Fast LPU Inference',
      reason: 'Ultra-low latency LPU inference hardware delivering near-instantaneous token generation for streamed Q&A answers.',
    },
    'Sentence-Transformers': {
      role: 'Domain-Adapted Embeddings',
      reason: 'Generates high-density embeddings optimized for technical and legal document similarity and query matching.',
    },
    'LangSmith': {
      role: 'LLM Observability & Tracing',
      reason: 'Provides full-trace observability, debugging inspection, and latency metrics across each step of the retrieval chain.',
    },
    'PyPDF': {
      role: 'PDF Document Extraction',
      reason: 'Extracts raw text, table structures, and page metadata from dense multi-page PDF documents.',
    },
  },

  // AIRA Voice Assistant
  'aira': {
    'JavaScript': {
      role: 'Client Execution Runtime',
      reason: 'Drives client-side audio capture loops, speech synthesis event handlers, and fluid frequency visualizer canvas animations.',
    },
    'Web Audio API': {
      role: 'Low-Latency Audio Processing',
      reason: 'Accesses native microphone audio inputs, performs real-time FFT frequency spectrum analysis, and handles spatial audio playback.',
    },
    'OpenAI/Groq/Gemini APIs': {
      role: 'Multimodal AI Reasoning Engine',
      reason: 'Multi-provider AI inference backends generating instant conversational responses from transcribed voice inputs.',
    },
    'GitHub Pages': {
      role: 'Serverless Edge CDN',
      reason: 'Delivers serverless edge CDN hosting for instant client asset delivery with zero operational maintenance.',
    },
    'GitHub Actions': {
      role: 'Automated CI/CD Workflow',
      reason: 'Automates CI/CD quality checks, automated tests, and atomic production releases on every main branch commit.',
    },
  },

  // English Learning App
  'english-learning-app': {
    'Kotlin': {
      role: 'Android Native Language',
      reason: 'Modern, expressive Android programming language delivering strict null safety and type-safe UI concurrency.',
    },
    'Jetpack Compose': {
      role: 'Declarative Android UI',
      reason: 'Declarative UI framework rendering fluid, animated lesson screens, audio playback cards, and interactive vocabulary quizzes.',
    },
    'Node.js': {
      role: 'Lightweight Content API',
      reason: 'Backs the curriculum delivery API serving vocabulary exercises, pronunciation audio files, and user sync.',
    },
    'Express': {
      role: 'Curriculum REST Routing',
      reason: 'Provides RESTful endpoints for lesson catalog delivery, user streak tracking, and quiz score submissions.',
    },
    'MongoDB': {
      role: 'Progress & Spaced Repetition Store',
      reason: 'Stores structured user lesson histories, spaced repetition flashcard intervals, and mastery statistics.',
    },
    'Coroutines': {
      role: 'Asynchronous Android Threads',
      reason: 'Manages non-blocking background Android threads for offline audio caching, room database synchronization, and network queries.',
    },
  },
};

/**
 * Returns a clear architectural role and rationale for why a technology was chosen in a specific project.
 */
export function getTechRationale(techName: string, projectSlug: string): TechRationale {
  const normalizedSlug = projectSlug?.toLowerCase().trim() || '';
  const projectMap = PROJECT_TECH_RATIONALE[normalizedSlug];

  if (projectMap) {
    if (projectMap[techName]) {
      return projectMap[techName];
    }
    // Partial match
    const lowerTech = techName.toLowerCase();
    for (const [key, val] of Object.entries(projectMap)) {
      if (key.toLowerCase() === lowerTech || lowerTech.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerTech)) {
        return val;
      }
    }
  }

  // Generic fallback if not explicitly found in map
  return {
    role: 'Core Architecture Tooling',
    reason: `Integrated into the ${projectSlug || 'project'} production stack to guarantee high performance, modular architecture, and reliable system scalability.`,
  };
}

