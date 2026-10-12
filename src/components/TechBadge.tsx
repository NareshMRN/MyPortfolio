import React from 'react';

export interface TechMeta {
  color: string;
  bgLight?: string;
  icon?: React.ReactNode;
}

// Brand color and custom SVG icons for technologies
export const TECH_CONFIG: Record<string, TechMeta> = {
  // Flutter
  flutter: {
    color: '#02569B',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M14.314 0L2.3 12 6.07 15.772 21.857 0h-7.543z" fill="#40D0FB" />
        <path d="M14.314 10.886L8.043 17.157 11.814 20.93 21.857 10.886h-7.543z" fill="#40D0FB" />
        <path d="M14.314 24h7.543l-6.286-6.286-3.771 3.772L14.314 24z" fill="#02569B" />
        <path d="M11.814 20.93l2.5 3.07H6.771l5.043-3.07z" fill="#01579B" />
      </svg>
    ),
  },

  // Next.js
  'next.js': {
    color: '#0070F3',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.067L10.38 7.2H8.4v9.6h1.8v-6.96l6.42 9.06a9.92 9.92 0 0 1-4.62 1.1c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10c0 2.76-1.12 5.26-2.98 7.067z" />
      </svg>
    ),
  },

  // Node.js
  'node.js': {
    color: '#539E43',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#539E43">
        <path d="M12 2l9.5 5.5v11L12 24 2.5 18.5v-11L12 2zm0 2.31L4.5 8.65v8.7L12 21.69l7.5-4.34v-8.7L12 4.31z" />
        <path d="M12 7.5a4.5 4.5 0 1 0 4.5 4.5A4.5 4.5 0 0 0 12 7.5z" />
      </svg>
    ),
  },

  // MongoDB / MongoDB Atlas
  'mongodb': {
    color: '#13AA52',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#13AA52">
        <path d="M17.193 9.555c-1.264-4.499-4.523-7.66-4.708-7.832a.747.747 0 00-.97 0c-.185.171-3.444 3.333-4.708 7.832-1.42 5.048-.066 9.408 3.524 12.015.52.378 1.134.622 1.666.804a.75.75 0 00.584 0c.532-.182 1.146-.426 1.666-.804 3.59-2.607 4.944-6.967 3.524-12.015h-.578zM12 20.354c-.287-.13-.578-.291-.864-.477-2.648-1.722-3.83-5.228-2.698-9.458.913-3.409 3.125-6.071 3.562-6.577.437.506 2.649 3.168 3.562 6.577 1.132 4.23-.05 7.736-2.698 9.458-.286.186-.577.347-.864.477z" />
      </svg>
    ),
  },
  'mongodb atlas': {
    color: '#13AA52',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#13AA52">
        <path d="M17.193 9.555c-1.264-4.499-4.523-7.66-4.708-7.832a.747.747 0 00-.97 0c-.185.171-3.444 3.333-4.708 7.832-1.42 5.048-.066 9.408 3.524 12.015.52.378 1.134.622 1.666.804a.75.75 0 00.584 0c.532-.182 1.146-.426 1.666-.804 3.59-2.607 4.944-6.967 3.524-12.015h-.578zM12 20.354c-.287-.13-.578-.291-.864-.477-2.648-1.722-3.83-5.228-2.698-9.458.913-3.409 3.125-6.071 3.562-6.577.437.506 2.649 3.168 3.562 6.577 1.132 4.23-.05 7.736-2.698 9.458-.286.186-.577.347-.864.477z" />
      </svg>
    ),
  },

  // Docker - Official SimpleIcons logo
  docker: {
    color: '#2496ED',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.184.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.184.186v1.888c0 .102.083.185.185.185m-2.929 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.76 9.89c-.365-1.564-1.61-2.404-3.14-2.618a5.213 5.213 0 00-1.802.261 8.847 8.847 0 00-3.953-2.317l-.271-.061-.17.224c-.672.887-1.077 1.956-1.18 3.067H.76a.76.76 0 00-.76.76c.038 4.254 2.457 7.763 6.643 9.479 2.505 1.026 5.309 1.155 8.01.371a12.825 12.825 0 005.74-3.791c1.874-2.222 2.684-4.52 2.367-5.375z" />
      </svg>
    ),
  },

  // Python
  python: {
    color: '#3776AB',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.1 0-5 1.5-5 3.5v2.5h5v.8H4.5c-2.3 0-3.5 1.7-3.5 4.2 0 2.3 1.2 4.2 3.5 4.2h1.4v-2c0-1.7 1.4-3.2 3.1-3.2h5c1.4 0 2.5-1.1 2.5-2.5V5.5c0-2-1.9-3.5-5-3.5zm-1.8 1.8c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z" fill="#3776AB" />
        <path d="M12.1 22c3.1 0 5-1.5 5-3.5V16h-5v-.8h7.4c2.3 0 3.5-1.7 3.5-4.2 0-2.3-1.2-4.2-3.5-4.2h-1.4v2c0 1.7-1.4 3.2-3.1 3.2h-5c-1.4 0-2.5 1.1-2.5 2.5v3.5c0 2 1.9 3.5 5 3.5zm1.8-1.8c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z" fill="#FFD43B" />
      </svg>
    ),
  },

  // Kotlin
  kotlin: {
    color: '#7F52FF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M24 24H0V0h24L12 12l12 12z" fill="#7F52FF" />
        <path d="M0 24l12-12L0 0v24z" fill="#C711E1" />
        <path d="M0 24h12l12-12H12L0 24z" fill="#E44857" />
      </svg>
    ),
  },

  // JavaScript
  javascript: {
    color: '#F7DF1E',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#F7DF1E">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M6.5 18.5l2-1.2c.5.8.9 1.4 1.8 1.4.9 0 1.5-.4 1.5-1.4v-6.3h2.5V17c0 2.4-1.4 3.5-3.8 3.5-2.1 0-3.3-1.1-4-2zm9.5-.2l2-1.2c.6 1 1.4 1.6 2.5 1.6 1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.3-2.1-1.9-2-.9-3.3-1.9-3.3-3.8 0-1.9 1.5-3.3 3.8-3.3 1.7 0 2.9.6 3.8 2.2l-2 1.2c-.4-.8-.9-1.2-1.8-1.2-.8 0-1.4.5-1.4 1.2 0 .8.6 1.2 1.9 1.7 2.2.9 3.5 1.9 3.5 4 0 2.3-1.8 3.5-4.2 3.5-2.4 0-3.9-1.2-4.5-2.6z" fill="#000000" />
      </svg>
    ),
  },

  // TypeScript
  typescript: {
    color: '#3178C6',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#3178C6">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M4 8h8v2H9v8H7v-8H4V8zm9 3.5h5.5v1.8H15v1.5h3v1.8h-3v1.9h4V20h-6.5V11.5z" fill="#FFFFFF" />
      </svg>
    ),
  },

  // React
  react: {
    color: '#61DAFB',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" stroke="none" />
      </svg>
    ),
  },

  // PyTorch
  pytorch: {
    color: '#EE4C2C',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#EE4C2C">
        <path d="M13.5 2.5a1.5 1.5 0 0 0-1.5 1.5v3.1a6.5 6.5 0 1 0 6.5 6.5c0-.8-.2-1.6-.5-2.4l-1.8 1.8a4 4 0 1 1-4.2-4.2V7.1a6.5 6.5 0 0 0-2-1.5V4a1.5 1.5 0 0 0 1.5-1.5h2z" />
        <circle cx="17.5" cy="5.5" r="1.5" />
      </svg>
    ),
  },

  // FAISS
  faiss: {
    color: '#FF6F00',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#FF6F00" strokeWidth="2.5">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
  },

  // Gradio
  gradio: {
    color: '#FF7C00',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FF7C00">
        <rect x="2" y="2" width="9" height="9" rx="2" />
        <rect x="13" y="2" width="9" height="9" rx="2" fillOpacity="0.7" />
        <rect x="2" y="13" width="9" height="9" rx="2" fillOpacity="0.7" />
        <circle cx="17.5" cy="17.5" r="4.5" />
      </svg>
    ),
  },

  // Jetpack Compose
  'jetpack compose': {
    color: '#4285F4',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#4285F4">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L5.5 8 12 4.8 18.5 8 12 10.5zM2 17l10 5 10-5-2.5-1.25L12 19.5 4.5 15.75 2 17zm0-5l10 5 10-5-2.5-1.25L12 14.5 4.5 10.75 2 12z" />
      </svg>
    ),
  },

  // Zod
  zod: {
    color: '#3E67B1',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#3E67B1">
        <path d="M4.5 5h15a1 1 0 0 1 .8 1.6L7.8 19h11.7a1 1 0 1 1 0 2h-15a1 1 0 0 1-.8-1.6L16.2 7H4.5a1 1 0 1 1 0-2z" />
      </svg>
    ),
  },

  // JWT
  jwt: {
    color: '#D63AFF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#D63AFF" strokeWidth="2" />
        <path d="M7 12h10M12 7v10" stroke="#D63AFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },

  // Riverpod
  riverpod: {
    color: '#02569B',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#02569B" strokeWidth="2" />
        <path d="M8 10l4 4 4-4" stroke="#02569B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // Web Audio API
  'web audio api': {
    color: '#00B4D8',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#00B4D8">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
  },

  // Express
  express: {
    color: '#9CA3AF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.588l-5.69-5.717 5.666-5.69h-3.064l-4.133 4.152-4.158-4.152H9.557l5.69 5.69-5.69 5.717h3.064l4.158-4.177 4.157 4.177H24zm-14.73 0l-1.38-2.12c-.752 1.458-2.023 2.193-3.812 2.193-2.61 0-4.078-1.578-4.078-4.103 0-2.597 1.626-4.225 4.226-4.225 2.502 0 3.91 1.433 3.91 3.984v.777H2.88c.073 1.577.923 2.502 2.378 2.502 1.142 0 1.942-.51 2.453-1.528l1.559.52zm-3.958-6.608c-1.263 0-1.99.777-2.112 2.04h4.15c-.048-1.263-.777-2.04-2.038-2.04z" />
      </svg>
    ),
  },

  // GitHub Pages
  'github pages': {
    color: '#6E40C9',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#6E40C9">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },

  // GitHub Actions
  'github actions': {
    color: '#2088FF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2088FF">
        <path d="M12 2l1.5 5.5h5.5l-4.5 3.5 1.5 5.5-4-3-4 3 1.5-5.5L3 7.5h5.5z" />
      </svg>
    ),
  },

  // AI / LLM APIs
  'openai/groq/gemini apis': {
    color: '#10A37F',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" fill="#10A37F" />
      </svg>
    ),
  },

  // Coroutines
  coroutines: {
    color: '#7F52FF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#7F52FF" strokeWidth="2">
        <path d="M4 12a8 8 0 0 1 14-5.3L21 4v6h-6l2.5-2.5A6 6 0 0 0 6 12z" />
        <path d="M20 12a8 8 0 0 1-14 5.3L3 20v-6h6l-2.5 2.5A6 6 0 0 0 18 12z" />
      </svg>
    ),
  },

  // Transformers
  transformers: {
    color: '#FFB000',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FFB000">
        <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6l-8-4zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      </svg>
    ),
  },

  // NumPy
  numpy: {
    color: '#4DABCF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#4DABCF">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },

  // Pandas
  pandas: {
    color: '#E70488',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#E70488">
        <rect x="4" y="4" width="4" height="16" rx="1" />
        <rect x="10" y="8" width="4" height="12" rx="1" />
        <rect x="16" y="12" width="4" height="8" rx="1" />
      </svg>
    ),
  },

  // Diffusion Models
  'diffusion models': {
    color: '#D946EF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#D946EF" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5l7 7M18 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM12 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
  },

  // Kaggle GPU
  'kaggle gpu': {
    color: '#20BEFF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#20BEFF">
        <path d="M18.8 21h-3.6l-5.6-7.8-2.1 2V21H4V3h3.5v10.3l7.3-8.3h3.8L12.5 11l6.3 10z" />
      </svg>
    ),
  },

  // PIL
  pil: {
    color: '#3776AB',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#3776AB" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
  },

  // C++ - Official ISO C++ Logo
  'c++': {
    color: '#00599C',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#00599C">
        <path d="M22.394 6.003L13.606.928a3.212 3.212 0 0 0-3.212 0L1.606 6.003A3.212 3.212 0 0 0 0 8.785v10.152a3.212 3.212 0 0 0 1.606 2.782l8.788 5.075a3.212 3.212 0 0 0 3.212 0l8.788-5.075A3.212 3.212 0 0 0 24 18.937V8.785a3.212 3.212 0 0 0-1.606-2.782zM11.5 15.65h-1.85a4.2 4.2 0 0 1-2.95-1.15 4.22 4.22 0 0 1 0-5.95 4.2 4.2 0 0 1 2.95-1.15h1.85v1.85h-1.85a2.35 2.35 0 0 0-1.65.65 2.37 2.37 0 0 0 0 3.3 2.35 2.35 0 0 0 1.65.65h1.85v1.8h.05zm4.8-2.65h-1.15v1.15h-.8v-1.15h-1.15v-.8h1.15v-1.15h.8v1.15h1.15v.8zm4.5 0h-1.15v1.15h-.8v-1.15h-1.15v-.8h1.15v-1.15h.8v1.15h1.15v.8z" />
      </svg>
    ),
  },

  // Java - Official Oracle Java Coffee Cup
  java: {
    color: '#007396',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#007396">
        <path d="M8.85 16.84c0 .08.06.15.15.19 1.13.57 2.79.88 4.67.88 1.83 0 3.44-.3 4.54-.85.09-.04.14-.11.14-.19 0-.25-.41-.44-.92-.5-1.07-.12-2.38-.18-3.76-.18-1.4 0-2.72.06-3.8.18-.55.06-.98.24-.98.47zm7.57-2.02c.07.03.11.08.11.13 0 .17-.55.3-1.32.35-1.03.07-2.28.11-3.6.11-1.34 0-2.6-.04-3.65-.11-.74-.05-1.28-.18-1.28-.35 0-.05.04-.1.11-.13 1.05-.44 2.87-.71 4.82-.71 1.93 0 3.73.27 4.81.71zm-7.6-5.83c.33.68.75 1.34 1.25 1.96-1.52.28-2.58.74-2.58 1.28 0 .52 1.01.97 2.45 1.25-.39-.42-.71-.88-.94-1.37-.41-.88-.39-1.84-.18-3.12zm9.14 7.62c-.77.38-2.13.62-3.81.62-1.7 0-3.08-.24-3.84-.62-.15-.07-.22-.16-.22-.27 0-.32.61-.58 1.54-.69 1.39-.16 3.03-.24 4.7-.24 1.65 0 3.28.08 4.65.24.95.11 1.57.37 1.57.69 0 .11-.08.2-.21.27zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 5.76c.45-.63.95-1.2 1.5-1.7-.82 1.28-1.3 2.76-1.5 4.31-.2 1.55.07 3.08.78 4.45-.58-.33-1.08-.75-1.48-1.24-.78-.96-1.12-2.18-1.02-3.41.09-1.23.63-2.39 1.72-2.41z" />
      </svg>
    ),
  },

  // Tailwind CSS
  'tailwind css': {
    color: '#06B6D4',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  tailwind: {
    color: '#06B6D4',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },

  // HTML / CSS
  'html': {
    color: '#E34F26',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#E34F26">
        <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3zm14.7 6.2H8.3l.3 3.6h8.7l-.6 6.3-4.7 1.3-4.7-1.3-.3-3.6h2.4l.2 1.7 2.4.6 2.4-.6.3-3.2H6.1L5.5 5.8h12.5l-.3 2.4z" />
      </svg>
    ),
  },
  'html/css': {
    color: '#E34F26',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#E34F26">
        <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3zm14.7 6.2H8.3l.3 3.6h8.7l-.6 6.3-4.7 1.3-4.7-1.3-.3-3.6h2.4l.2 1.7 2.4.6 2.4-.6.3-3.2H6.1L5.5 5.8h12.5l-.3 2.4z" />
      </svg>
    ),
  },

  // Android
  android: {
    color: '#3DDC84',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#3DDC84">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-5.74-5.63l1.24-1.24c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.42 1.42C13.14 1.56 12.33 1.5 12 1.5s-1.14.06-1.87.34L8.71.42c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.24 1.24C7.52 3.32 6.5 5.02 6.5 7h11c0-1.98-1.02-3.68-2.74-4.63z" />
      </svg>
    ),
  },

  // React Native
  'react native': {
    color: '#61DAFB',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" stroke="none" />
      </svg>
    ),
  },

  // HuggingFace
  huggingface: {
    color: '#FFD21E',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FFD21E">
        <circle cx="12" cy="12" r="10" />
        <circle cx="9" cy="10" r="1.5" fill="#000000" />
        <circle cx="15" cy="10" r="1.5" fill="#000000" />
        <path d="M8 14.5s1.5 2 4 2 4-2 4-2" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },

  // OpenAI / OpenAI API - Official SimpleIcons Rosette Swirl
  openai: {
    color: '#10A37F',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.913a4.485 4.485 0 0 1 2.37-2.026v5.6a.761.761 0 0 0 .386.671l5.836 3.371-2.02 1.166a.076.076 0 0 1-.067 0l-4.839-2.793a4.504 4.504 0 0 1-1.666-5.989zm16.799 4.607l-5.843-3.37 2.02-1.166a.076.076 0 0 1 .067 0l4.839 2.793a4.505 4.505 0 0 1-1.083 8.015v-5.6a.79.79 0 0 0-.39-.672zm2.52-5.048a4.47 4.47 0 0 1-.535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.676 12.01V9.678a.08.08 0 0 1 .033-.062L14.55 6.83a4.5 4.5 0 0 1 6.11 2.643zm-10.364.553l-2.02-1.168a.071.071 0 0 1-.038-.052V2.274a4.504 4.504 0 0 1 7.37 2.054l-.141.082-4.779 2.758a.795.795 0 0 0-.392.681zm1.097 2.365l2.602-1.5 2.607 1.5v2.999l-2.607 1.5-2.602-1.5z" />
      </svg>
    ),
  },
  'openai api': {
    color: '#10A37F',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.913a4.485 4.485 0 0 1 2.37-2.026v5.6a.761.761 0 0 0 .386.671l5.836 3.371-2.02 1.166a.076.076 0 0 1-.067 0l-4.839-2.793a4.504 4.504 0 0 1-1.666-5.989zm16.799 4.607l-5.843-3.37 2.02-1.166a.076.076 0 0 1 .067 0l4.839 2.793a4.505 4.505 0 0 1-1.083 8.015v-5.6a.79.79 0 0 0-.39-.672zm2.52-5.048a4.47 4.47 0 0 1-.535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.676 12.01V9.678a.08.08 0 0 1 .033-.062L14.55 6.83a4.5 4.5 0 0 1 6.11 2.643zm-10.364.553l-2.02-1.168a.071.071 0 0 1-.038-.052V2.274a4.504 4.504 0 0 1 7.37 2.054l-.141.082-4.779 2.758a.795.795 0 0 0-.392.681zm1.097 2.365l2.602-1.5 2.607 1.5v2.999l-2.607 1.5-2.602-1.5z" />
      </svg>
    ),
  },

  // Google Gemini - Official Curved Gradient Diamond Spark
  gemini: {
    color: '#1BA0F2',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24Z"
          fill="url(#gemini-spark-grad)"
        />
        <defs>
          <linearGradient id="gemini-spark-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1BA0F2" />
            <stop offset="0.5" stopColor="#9B72CF" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // Firebase
  firebase: {
    color: '#FFCA28',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FFCA28">
        <path d="M4.5 18.5L9 3l3.5 6.5L4.5 18.5zm15 0L16 6.5 12.5 13l7 5.5zM12 21.5L4.5 18.5 12 13l7.5 5.5-7.5 3z" />
      </svg>
    ),
  },

  // Vercel
  vercel: {
    color: '#FFFFFF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 20h20L12 2z" />
      </svg>
    ),
  },

  // Git
  git: {
    color: '#F05032',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.6L13.4 2.4a2.2 2.2 0 0 0-3.1 0L8.4 4.3l3.4 3.4a2.6 2.6 0 0 1 3.3 3.3l3.3 3.3a2.5 2.5 0 1 1-1.6 1.6l-3.2-3.2v4.8a2.5 2.5 0 1 1-2.2 0V9.4a2.6 2.6 0 0 1-1.4-3.4L6.9 2.7 2.4 7.2a2.2 2.2 0 0 0 0 3.1l8.2 8.2a2.2 2.2 0 0 0 3.1 0l7.9-7.9a2.2 2.2 0 0 0 0-3.1z" />
      </svg>
    ),
  },

  // GitHub
  github: {
    color: '#A855F7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },

  // Linux
  linux: {
    color: '#FCC624',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FCC624">
        <circle cx="12" cy="12" r="8" fill="#333333" />
        <circle cx="9.5" cy="10" r="1.5" fill="#FFFFFF" />
        <circle cx="14.5" cy="10" r="1.5" fill="#FFFFFF" />
        <ellipse cx="12" cy="13.5" rx="2.5" ry="1.5" fill="#FCC624" />
      </svg>
    ),
  },

  // MySQL
  mysql: {
    color: '#4479A1',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#4479A1">
        <path d="M12 3C6.5 3 2 7 2 12c0 3.5 2.2 6.5 5.5 8 1-.8 1.5-2.2 1.5-3.8 0-2.8-1.5-4.8-1.5-6.2 0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5c0 1.4-1.5 3.4-1.5 6.2 0 1.6.5 3 1.5 3.8 3.3-1.5 5.5-4.5 5.5-8 0-5-4.5-9-10-9z" />
      </svg>
    ),
  },

  // Redis
  redis: {
    color: '#DC382D',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#DC382D">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9L4 7.5v5l8 4.5 8-4.5v-5L12 11zm0 6l-6-3.4v4.4l6 3.5 6-3.5v-4.4L12 17z" />
      </svg>
    ),
  },

  // Figma
  figma: {
    color: '#F24E1E',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <circle cx="17.5" cy="9.5" r="3.5" fill="#1ABCFE" />
        <path d="M3.5 9.5a3.5 3.5 0 0 1 3.5-3.5h3.5v7H7a3.5 3.5 0 0 1-3.5-3.5z" fill="#F24E1E" />
        <path d="M3.5 16.5a3.5 3.5 0 0 1 3.5-3.5h3.5v7H7a3.5 3.5 0 0 1-3.5-3.5z" fill="#0ACF83" />
        <path d="M10.5 2.5H7A3.5 3.5 0 0 0 3.5 6h7V2.5z" fill="#FF7262" />
        <path d="M10.5 2.5h3.5A3.5 3.5 0 0 1 17.5 6h-7V2.5z" fill="#A259FF" />
      </svg>
    ),
  },

  // Postman - Official Spaceman Icon
  postman: {
    color: '#FF6C37',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FF6C37">
        <path d="M13.684 0a10.316 10.316 0 0 0-8.814 15.658L0 24l8.342-4.87A10.316 10.316 0 1 0 13.684 0zm5.176 13.918l-5.69-2.31a.81.81 0 0 1-.458-.518l-1.39-4.865a.81.81 0 0 1 1.488-.56l1.792 3.823 4.43 1.802a.81.81 0 0 1-.172 1.628z" />
      </svg>
    ),
  },

  // VS Code - Official Microsoft Ribbon Icon
  'vs code': {
    color: '#007ACC',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#007ACC">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.999.999 0 0 0-.005 1.414l3.774 3.474-3.774 3.474a.999.999 0 0 0 .005 1.414l1.322 1.212a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.46V3.947a1.5 1.5 0 0 0-.85-1.36zM18.5 16.5l-6.5-4.5 6.5-4.5v9z" />
      </svg>
    ),
  },

  // FastAPI
  fastapi: {
    color: '#059669',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#059669" />
        <path d="M13 3L6 14h5l-1 7 7-11h-5l1-7z" fill="#FFFFFF" />
      </svg>
    ),
  },

  // Flow (Kotlin Reactive Flow)
  flow: {
    color: '#7F52FF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#7F52FF" strokeWidth="2">
        <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // Kaggle
  kaggle: {
    color: '#20BEFF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#20BEFF">
        <path d="M18.8 21h-3.6l-5.6-7.8-2.1 2V21H4V3h3.5v10.3l7.3-8.3h3.8L12.5 11l6.3 10z" />
      </svg>
    ),
  },

  // AI / ML & Specializations
  'ai / ml': {
    color: '#A855F7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
        <circle cx="12" cy="12" r="3" fill="#A855F7" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" strokeLinecap="round" />
      </svg>
    ),
  },
  'ai/ml': {
    color: '#A855F7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
        <circle cx="12" cy="12" r="3" fill="#A855F7" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5" strokeLinecap="round" />
      </svg>
    ),
  },
  'vector search': {
    color: '#06B6D4',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35M8 11h6M11 8v6" strokeLinecap="round" />
      </svg>
    ),
  },
  'nlp': {
    color: '#EC4899',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
      </svg>
    ),
  },
  'computer vision': {
    color: '#3B82F6',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      </svg>
    ),
  },
  'deep learning': {
    color: '#8B5CF6',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
        <circle cx="6" cy="6" r="2.5" fill="#8B5CF6" />
        <circle cx="6" cy="18" r="2.5" fill="#8B5CF6" />
        <circle cx="18" cy="12" r="2.5" fill="#8B5CF6" />
        <path d="M8.5 7.5L15.5 11M8.5 16.5L15.5 13" />
      </svg>
    ),
  },
  'generative ai': {
    color: '#F59E0B',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" fill="#F59E0B" fillOpacity="0.2" />
      </svg>
    ),
  },

  // Murf AI
  'murf ai': {
    color: '#6366F1',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="#6366F1" />
      </svg>
    ),
  },

  // Voice AI
  'voice ai': {
    color: '#8B5CF6',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
        <rect x="9" y="2" width="6" height="12" rx="3" fill="#8B5CF6" fillOpacity="0.3" />
        <path d="M5 10v1a7 7 0 0014 0v-1M12 19v4M8 23h8" strokeLinecap="round" />
      </svg>
    ),
  },

  // AIoT
  'aiot': {
    color: '#14B8A6',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2">
        <circle cx="12" cy="12" r="3" fill="#14B8A6" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" />
        <rect x="6" y="6" width="12" height="12" rx="2" />
      </svg>
    ),
  },

  // IoT
  'iot': {
    color: '#0EA5E9',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2">
        <circle cx="12" cy="12" r="2" fill="#0EA5E9" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },

  // Healthcare AI
  'healthcare ai': {
    color: '#EF4444',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#EF4444">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },

  // Embedded Systems
  'embedded systems': {
    color: '#64748B',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" fill="#64748B" fillOpacity="0.3" />
        <path d="M2 9h2M2 15h2M20 9h2M20 15h2M9 2v2M15 2v2M9 20v2M15 20v2" strokeLinecap="round" />
      </svg>
    ),
  },

  // Edge AI
  'edge ai': {
    color: '#22D3EE',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2">
        <path d="M13 3L6 14h5l-1 7 7-11h-5l1-7z" fill="#22D3EE" fillOpacity="0.3" />
      </svg>
    ),
  },

  // Robotics
  'robotics': {
    color: '#F97316',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
        <rect x="5" y="9" width="14" height="10" rx="2" fill="#F97316" fillOpacity="0.2" />
        <circle cx="9" cy="14" r="1.5" fill="#F97316" />
        <circle cx="15" cy="14" r="1.5" fill="#F97316" />
        <path d="M12 4v5M9 2h6" strokeLinecap="round" />
      </svg>
    ),
  },

  // Kinematics
  'kinematics': {
    color: '#D946EF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#D946EF" strokeWidth="2">
        <circle cx="5" cy="19" r="2" fill="#D946EF" />
        <circle cx="12" cy="10" r="2" fill="#D946EF" />
        <circle cx="19" cy="5" r="2" fill="#D946EF" />
        <path d="M6.5 17.5L10.5 11.5M13.5 8.5L17.5 6.5" />
      </svg>
    ),
  },

  // Hardware
  'hardware': {
    color: '#78716C',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#78716C" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="7" y="7" width="10" height="10" rx="1" fill="#78716C" fillOpacity="0.3" />
        <path d="M2 9h1M2 15h1M21 9h1M21 15h1M9 2v1M15 2v1M9 21v1M15 21v1" strokeLinecap="round" />
      </svg>
    ),
  },

  // Autonomous Vehicles
  'autonomous vehicles': {
    color: '#10B981',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
        <rect x="3" y="8" width="18" height="10" rx="2" fill="#10B981" fillOpacity="0.2" />
        <circle cx="7" cy="18" r="2" fill="#10B981" />
        <circle cx="17" cy="18" r="2" fill="#10B981" />
        <path d="M5 8l2-4h10l2 4" />
        <circle cx="12" cy="12" r="1.5" fill="#10B981" />
      </svg>
    ),
  },

  // AI Agents
  'ai agents': {
    color: '#A855F7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
        <circle cx="12" cy="8" r="4" fill="#A855F7" fillOpacity="0.2" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
        <path d="M12 2v2M8 4l1 1.5M16 4l-1 1.5" strokeLinecap="round" />
      </svg>
    ),
  },

  // Web Development
  'web development': {
    color: '#3B82F6',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 13l-2 2 2 2M16 13l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  // Full Stack
  'full stack': {
    color: '#6366F1',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
        <rect x="4" y="4" width="16" height="5" rx="1" fill="#6366F1" fillOpacity="0.2" />
        <rect x="4" y="10" width="16" height="5" rx="1" fill="#6366F1" fillOpacity="0.15" />
        <rect x="4" y="16" width="16" height="5" rx="1" fill="#6366F1" fillOpacity="0.1" />
      </svg>
    ),
  },

  // App Building
  'app building': {
    color: '#EC4899',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <rect x="8" y="6" width="8" height="5" rx="1" fill="#EC4899" fillOpacity="0.2" />
        <circle cx="12" cy="18" r="1" fill="#EC4899" />
      </svg>
    ),
  },

  // LLM
  'llm': {
    color: '#10A37F',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 8h10M7 12h7M7 16h10" strokeLinecap="round" />
      </svg>
    ),
  },

  // Streamlit
  'streamlit': {
    color: '#FF4B4B',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FF4B4B">
        <path d="M12.001 2.222l8.889 15.556H3.112L12.001 2.222zm0 4.444L6.223 15.556h11.556L12.001 6.666z" />
      </svg>
    ),
  },

  // LangChain
  'langchain': {
    color: '#22C55E',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },

  // LangSmith
  'langsmith': {
    color: '#0284C7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
};

export const getTechMeta = (name: string): TechMeta => {
  const normalized = name.toLowerCase().trim();
  if (TECH_CONFIG[normalized]) {
    return TECH_CONFIG[normalized];
  }
  // Search partial matches
  for (const [key, value] of Object.entries(TECH_CONFIG)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return value;
    }
  }
  // Default fallback
  return {
    color: '#8b5cf6',
    icon: (
      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
    ),
  };
};

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = '', size = 'md' }) => {
  const meta = getTechMeta(name);
  const color = meta.color;

  const sizeClasses = size === 'sm' 
    ? 'px-1.5 py-0.5 text-[9px] min-[360px]:px-2 min-[360px]:text-[9.5px] sm:px-2.5 sm:text-[10px] gap-1 min-[360px]:gap-1.5' 
    : 'px-2 py-1 text-[10px] min-[360px]:px-2.5 min-[360px]:py-1.5 min-[360px]:text-[10.5px] sm:px-3 sm:text-[11px] gap-1.5 sm:gap-2';

  return (
    <span
      className={`inline-flex items-center font-mono-code uppercase tracking-tight min-[360px]:tracking-wider rounded-lg border transition-all duration-200 hover:scale-105 select-none shrink-0 ${sizeClasses} ${className}`}
      style={{
        backgroundColor: `${color}14`, // ~8% opacity
        borderColor: `${color}40`,     // ~25% opacity
        color: 'var(--text-primary)',
        boxShadow: `0 2px 8px ${color}15`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}90`;
        e.currentTarget.style.backgroundColor = `${color}25`;
        e.currentTarget.style.boxShadow = `0 4px 14px ${color}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}40`;
        e.currentTarget.style.backgroundColor = `${color}14`;
        e.currentTarget.style.boxShadow = `0 2px 8px ${color}15`;
      }}
    >
      {meta.icon && (
        <span className="inline-flex items-center justify-center flex-shrink-0 [&>svg]:w-3 [&>svg]:h-3 sm:[&>svg]:w-3.5 sm:[&>svg]:h-3.5">
          {meta.icon}
        </span>
      )}
      <span className="font-semibold">{name}</span>
    </span>
  );
};
