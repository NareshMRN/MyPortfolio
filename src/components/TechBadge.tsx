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
        <path d="M12 0C11.5 1.5 7 8 7 14c0 3.5 2 6.5 5 7.5 3-1 5-4 5-7.5 0-6-4.5-12.5-5-14zm0 2.3c.5 1.2 3.8 6.6 3.8 11.7 0 2.8-1.5 5.3-3.8 6.1V2.3z" />
      </svg>
    ),
  },
  'mongodb atlas': {
    color: '#13AA52',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#13AA52">
        <path d="M12 0C11.5 1.5 7 8 7 14c0 3.5 2 6.5 5 7.5 3-1 5-4 5-7.5 0-6-4.5-12.5-5-14zm0 2.3c.5 1.2 3.8 6.6 3.8 11.7 0 2.8-1.5 5.3-3.8 6.1V2.3z" />
      </svg>
    ),
  },

  // Docker
  docker: {
    color: '#2496ED',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2496ED">
        <path d="M13 3h3v3h-3V3zm4 0h3v3h-3V3zM9 7h3v3H9V7zm4 0h3v3h-3V7zm4 0h3v3h-3V7zM5 11h3v3H5v-3zm4 0h3v3H9v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zM1 15c.5 4 4 7 11 7 8 0 11-4 11-5.5 0-.5-.5-.5-1-.5-1.5 0-2.5-1-3-2H1z" />
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
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#3E67B1" strokeWidth="3">
        <path d="M4 6h16L4 18h16" />
      </svg>
    ),
  },

  // JWT
  jwt: {
    color: '#D63AFF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#D63AFF">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#D63AFF" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },

  // Riverpod
  riverpod: {
    color: '#0075FF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#0075FF">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07A6.002 6.002 0 0 1 6 11h2a4 4 0 0 0 4 4 4 4 0 0 0 4-4h2a6.002 6.002 0 0 1-5 5.93z" />
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
    color: '#828282',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <text x="3" y="17" fontSize="14" fontWeight="bold" fontFamily="monospace">ex</text>
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

  // C++
  'c++': {
    color: '#00599C',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#00599C">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-3H8v-2h3V8h2v3h3v2h-3z" />
      </svg>
    ),
  },

  // Java
  java: {
    color: '#EA2D2E',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#EA2D2E">
        <path d="M8.8 17.5c-2.3.2-3.8-.4-4.8-.8.8.6 2.3 1.2 4.4 1.2 3.1 0 5-1.3 5-3.3 0-1.7-1.3-2.6-3.4-3.3-1.6-.6-2.2-1-2.2-1.8 0-.8.7-1.4 1.9-1.4 1.5 0 2.8.6 3.4 1-.5-.6-1.7-1.2-3.4-1.2-2.3 0-4 1.2-4 3 0 1.6 1.3 2.5 3.3 3.1 1.7.5 2.4 1.1 2.4 2 0 1-1 1.5-2.6 1.5z" />
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

  // OpenAI / OpenAI API
  openai: {
    color: '#10A37F',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" fill="#10A37F" />
      </svg>
    ),
  },
  'openai api': {
    color: '#10A37F',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" fill="#10A37F" />
      </svg>
    ),
  },

  // Gemini
  gemini: {
    color: '#1BA0F2',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#1BA0F2">
        <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
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

  // Postman
  postman: {
    color: '#FF6C37',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FF6C37">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l3 3 5-6" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },

  // VS Code
  'vs code': {
    color: '#007ACC',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#007ACC">
        <path d="M17.5 2L7 11.5 2.5 8 1 9.5l4 4.5L1 18.5 2.5 20 7 16.5 17.5 26 23 23V5l-5.5-3zm0 5v14l-7.5-6 7.5-6z" />
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
    ? 'px-2.5 py-0.5 text-[10px] gap-1.5' 
    : 'px-3 py-1.5 text-[11px] gap-2';

  return (
    <span
      className={`inline-flex items-center font-mono-code uppercase tracking-wider rounded-lg border transition-all duration-200 hover:scale-105 select-none ${sizeClasses} ${className}`}
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
        <span className="inline-flex items-center justify-center flex-shrink-0">
          {meta.icon}
        </span>
      )}
      <span className="font-semibold">{name}</span>
    </span>
  );
};
