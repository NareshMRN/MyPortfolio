import React, { useState } from 'react';

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

  // Node.js - Official hexagon with correctly ordered "JS"
  'node.js': {
    color: '#539E43',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.8 5.1v10.2L12 22.4 3.2 17.3V7.1L12 2z" stroke="#539E43" strokeWidth="2.2" strokeLinejoin="round" fill="none" />
        {/* Letter J on the left */}
        <path d="M9.8 8.8v5.2c0 1.2-.6 1.8-1.6 1.8-.7 0-1.2-.3-1.5-.7l.6-.8c.2.3.5.5.9.5.5 0 .8-.3.8-.8V8.8h.8z" fill="#539E43" />
        {/* Letter S on the right */}
        <path d="M12.2 14.5c.4.5.9.8 1.6.8.8 0 1.3-.4 1.3-1 0-.6-.4-.8-1.3-1.1-1.2-.3-2-.7-2-1.8 0-1 .9-1.8 2.1-1.8 1 0 1.7.3 2.1.9l-.7.7c-.3-.4-.7-.6-1.4-.6-.6 0-1 .3-1 .8 0 .5.3.7 1.2 1 1.3.3 2.1.8 2.1 1.9 0 1.1-.9 1.9-2.3 1.9-1.1 0-1.9-.4-2.4-1.1l.7-.6z" fill="#539E43" />
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

  // Zod - Official SimpleIcons Vector
  zod: {
    color: '#3068B7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#3068B7">
        <path d="M2.584 3.582a2.25 2.25 0 0 1 2.112-1.479h14.617c.948 0 1.794.595 2.115 1.487l2.44 6.777a2.25 2.25 0 0 1-.624 2.443l-9.61 8.52a2.25 2.25 0 0 1-2.963.018L.776 12.773a2.25 2.25 0 0 1-.64-2.467Zm12.038 4.887-9.11 5.537 5.74 5.007a1.206 1.206 0 0 0 1.593-.006l5.643-5.001H14.4l6.239-3.957c.488-.328.69-.947.491-1.5l-1.24-3.446a1.535 1.535 0 0 0-1.456-1.015H5.545a1.535 1.535 0 0 0-1.431 1.01l-1.228 3.37z" />
      </svg>
    ),
  },

  // JWT - Official multi-color JWT.io vector logo
  jwt: {
    color: '#D63AFF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 256 257" fill="none">
        <path fill="#374151" d="M147.386 69.071 147.129 0h-38.515l.257 69.071 19.257 26.448zM108.871 187.442v69.328h38.515v-69.328l-19.258-26.447z"/>
        <path fill="#00F2E6" d="m147.386 187.442 40.57 55.976 31.069-22.596-40.57-55.975-31.069-10.015zM108.871 69.071 68.044 13.095 36.975 35.691l40.57 55.976 31.326 10.014z"/>
        <path fill="#00B9F1" d="M77.545 91.667 11.811 70.355 0 106.816l65.733 21.569 31.069-10.271zM159.198 138.399l19.257 26.448 65.734 21.311L256 149.697l-65.733-21.312z"/>
        <path fill="#D63AFF" d="M190.267 128.385 256 106.816l-11.811-36.461-65.734 21.312-19.257 26.447zM65.733 128.385 0 149.697l11.811 36.461 65.734-21.311 19.257-26.448z"/>
        <path fill="#FB015B" d="m77.545 164.847-40.57 55.975 31.069 22.596 40.827-55.976v-32.61zM178.455 91.667l40.57-55.976-31.069-22.596-40.57 55.976v32.61z"/>
      </svg>
    ),
  },

  // Riverpod - Exact riverpod.dev logo (cyan top wave, deep-blue bottom river)
  riverpod: {
    color: '#02569B',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 36 36" fill="none">
        <rect width="36" height="36" rx="8" fill="none" />
        {/* Top-left cyan wave */}
        <path d="M5 15C5 9.5 9.5 5 15 5H21C26.5 5 29.5 7.5 30.5 11C26.5 11.5 23.5 13.5 19.5 15C15 16.5 10 17 5 15Z" fill="#54C5F8" />
        {/* Bottom-right dark-blue river */}
        <path d="M5 15C10 17 15 16.5 19.5 15C23.5 13.5 26.5 11.5 30.5 11C30.8 12.2 31 13.5 31 15V21C31 26.5 26.5 31 21 31H15C9.5 31 5 26.5 5 21V15Z" fill="#0B4F8C" />
      </svg>
    ),
  },

  // Web Audio API - Official W3C Waveform Spectrum Vector
  'web audio api': {
    color: '#00B4D8',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#00B4D8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10v4M7 6v12M11 3v18M15 7v10M19 5v14M22 11v2" />
      </svg>
    ),
  },

  // Express - Clean centered official "ex" Vector
  express: {
    color: '#64748B',
    icon: (
      <svg className="w-3.5 h-3.5 text-zinc-900 dark:text-white" viewBox="0 0 24 24" fill="none">
        <g transform="translate(1.5, 4.5)">
          {/* Lowercase e */}
          <path d="M5.8 11.5C2.8 11.5 0.5 9.4 0.5 5.8C0.5 2.2 2.8 0 5.8 0C8.8 0 11 2.2 11 5.8H2.4C2.6 8.2 4 9.8 6 9.8C7.4 9.8 8.4 9.1 9.1 8L10.5 9C9.5 10.6 7.8 11.5 5.8 11.5ZM5.8 1.7C3.9 1.7 2.6 3 2.4 4.3H9.2C9 3 7.6 1.7 5.8 1.7Z" fill="currentColor" />
          {/* Lowercase x */}
          <path d="M12.5 0.4H14.8L16.8 4.8L18.8 0.4H21L18 6.2L21 12H18.8L16.8 7.5L14.8 12H12.5L15.6 6.2L12.5 0.4Z" fill="currentColor" />
        </g>
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

  // HuggingFace - Official SimpleIcons Vector
  huggingface: {
    color: '#FFD21E',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FFD21E">
        <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.105.183.25.344.43.465.176.118.384.186.6.196.223.012.443-.045.626-.164s.319-.296.393-.497c.465-1.258 1.402-2.32 2.643-2.909 1.241-.588 2.704-.627 3.985-.108 1.28.519 2.296 1.488 2.778 2.719s.344 2.613-.197 3.793a5.526 5.526 0 0 1-1.077 1.483 8.69 8.69 0 0 0 1.202-1.36h-1.771a7.174 7.174 0 0 1-5.227 2.252 7.174 7.174 0 0 1-5.226-2.252Z" />
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
    color: '#FFA000',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M4.6 18.3L8.8 3.5c.2-.7 1.2-.8 1.6-.2l3.4 5.8-9.2 9.2z" fill="#FFA000" />
        <path d="M14.2 9.7L9.9 2.4c-.4-.7-1.4-.6-1.6.2L3.5 18.2l10.7-8.5z" fill="#F57C00" />
        <path d="M12.4 21.6l8.1-4.5c.7-.4.9-1.2.4-1.8L16.2 7.3c-.4-.6-1.4-.6-1.7 0L3.5 18.3l8.9 3.3z" fill="#FFCA28" />
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

  // Express.js
  'express.js': {
    color: '#64748B',
    icon: (
      <svg className="w-3.5 h-3.5 text-zinc-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-6.376 10.182-2.999 2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
      </svg>
    ),
  },

  // Socket.io
  'socket.io': {
    color: '#010101',
    icon: (
      <svg className="w-3.5 h-3.5 text-zinc-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.4 4.8h4.8v4.8H9.6V4.8zm0 9.6h4.8v4.8H9.6v-4.8zM4.8 9.6h4.8v4.8H4.8V9.6zm9.6 0h4.8v4.8h-4.8V9.6z" />
      </svg>
    ),
  },

  // Alpaca API
  'alpaca api': {
    color: '#E5B842',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#E5B842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" fill="#E5B842" fillOpacity="0.25" />
      </svg>
    ),
  },
  'alpaca': {
    color: '#E5B842',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#E5B842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" fill="#E5B842" fillOpacity="0.25" />
      </svg>
    ),
  },

  // Matplotlib
  'matplotlib': {
    color: '#11557C',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M3 20h18M5 16l4-6 4 4 6-8" stroke="#11557C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="2.2" fill="#E24A33" />
        <circle cx="13" cy="14" r="2.2" fill="#348ABD" />
        <circle cx="19" cy="6" r="2.2" fill="#988ED5" />
      </svg>
    ),
  },

  // RAG (Retrieval-Augmented Generation)
  'rag': {
    color: '#10B981',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="m9 9 3 3 5-5" />
      </svg>
    ),
  },

  // Stable Diffusion
  'stable diffusion': {
    color: '#A855F7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#A855F7" />
      </svg>
    ),
  },
  'stable diffusion v1.5': {
    color: '#A855F7',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#A855F7" />
      </svg>
    ),
  },

  // Qwen / Qwen 2.5
  'qwen': {
    color: '#6366F1',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  'qwen 2.5': {
    color: '#6366F1',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },

  // CLIP
  'clip': {
    color: '#10A37F',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },

  // Groq / DeepSeek-R1
  'groq': {
    color: '#F55036',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#F55036">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#F55036" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#F55036" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  'deepseek': {
    color: '#0066FF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 4.418-2.87 8.166-6.85 9.475-.436.143-.88.086-1.15-.184l-2-2a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 0 0-1.414L12 9.5a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 0 0 0 1.414l2 2a1 1 0 0 1 0 1.414l-1.5 1.5c-.32.32-.82.37-1.2.13C3.52 18.06 2 15.22 2 12A10 10 0 0 1 12 2z" fill="#0066FF" fillOpacity="0.2" />
      </svg>
    ),
  },
  'groq / deepseek-r1': {
    color: '#0066FF',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 4.418-2.87 8.166-6.85 9.475-.436.143-.88.086-1.15-.184l-2-2a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 0 0-1.414L12 9.5a1 1 0 0 0-1.414 0l-3.5 3.5a1 1 0 0 0 0 1.414l2 2a1 1 0 0 1 0 1.414l-1.5 1.5c-.32.32-.82.37-1.2.13C3.52 18.06 2 15.22 2 12A10 10 0 0 1 12 2z" fill="#0066FF" fillOpacity="0.2" />
      </svg>
    ),
  },

  // PyPDF
  'pypdf': {
    color: '#EF4444',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },

  // Sentence-Transformers
  'sentence-transformers': {
    color: '#FF9900',
    icon: (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.5 8.5l7 7M6 18h.01M18 6h.01" />
      </svg>
    ),
  },
};

// Curated official documentation and brand website URLs
export const TECH_URLS: Record<string, string> = {
  // Mobile & Cross-platform
  flutter: 'https://flutter.dev',
  dart: 'https://dart.dev',
  'react native': 'https://reactnative.dev',
  android: 'https://developer.android.com',
  kotlin: 'https://kotlinlang.org',
  'jetpack compose': 'https://developer.android.com/compose',
  coroutines: 'https://kotlinlang.org/docs/coroutines-overview.html',
  flow: 'https://kotlinlang.org/docs/flow.html',
  riverpod: 'https://riverpod.dev',

  // Frontend & Web
  react: 'https://react.dev',
  'next.js': 'https://nextjs.org',
  nextjs: 'https://nextjs.org',
  vue: 'https://vuejs.org',
  'vue.js': 'https://vuejs.org',
  svelte: 'https://svelte.dev',
  angular: 'https://angular.dev',
  vite: 'https://vite.dev',
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  html5: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  css3: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  typescript: 'https://www.typescriptlang.org',
  'tailwind css': 'https://tailwindcss.com',
  tailwind: 'https://tailwindcss.com',

  // Backend & Runtime
  'node.js': 'https://nodejs.org',
  nodejs: 'https://nodejs.org',
  node: 'https://nodejs.org',
  express: 'https://expressjs.com',
  'express.js': 'https://expressjs.com',
  fastapi: 'https://fastapi.tiangolo.com',
  python: 'https://www.python.org',
  flask: 'https://flask.palletsprojects.com',
  django: 'https://www.djangoproject.com',
  'socket.io': 'https://socket.io',
  graphql: 'https://graphql.org',
  'rest api': 'https://restfulapi.net',
  zod: 'https://zod.dev',
  jwt: 'https://jwt.io',
  'json web token': 'https://jwt.io',
  jsonwebtoken: 'https://jwt.io',

  // Databases & Caching
  mongodb: 'https://www.mongodb.com',
  'mongodb atlas': 'https://www.mongodb.com/atlas',
  redis: 'https://redis.io',
  postgresql: 'https://www.postgresql.org',
  postgres: 'https://www.postgresql.org',
  mysql: 'https://www.mysql.com',
  sqlite: 'https://www.sqlite.org',
  supabase: 'https://supabase.com',
  firebase: 'https://firebase.google.com',

  // DevOps & Cloud
  docker: 'https://www.docker.com',
  kubernetes: 'https://kubernetes.io',
  aws: 'https://aws.amazon.com',
  gcp: 'https://cloud.google.com',
  azure: 'https://azure.microsoft.com',
  vercel: 'https://vercel.com',
  git: 'https://git-scm.com',
  github: 'https://github.com',
  'github pages': 'https://pages.github.com',
  'github actions': 'https://github.com/features/actions',
  linux: 'https://www.kernel.org',

  // AI / ML & Data Science
  pytorch: 'https://pytorch.org',
  tensorflow: 'https://www.tensorflow.org',
  huggingface: 'https://huggingface.co',
  'hugging face': 'https://huggingface.co',
  openai: 'https://openai.com',
  'openai api': 'https://platform.openai.com',
  'openai/groq/gemini apis': 'https://groq.com',
  gemini: 'https://ai.google.dev',
  'google gemini': 'https://ai.google.dev',
  groq: 'https://groq.com',
  'groq / deepseek-r1': 'https://groq.com',
  'groq deepseek-r1': 'https://groq.com',
  'deepseek-r1': 'https://www.deepseek.com',
  deepseek: 'https://www.deepseek.com',
  langchain: 'https://www.langchain.com',
  langsmith: 'https://www.langchain.com/langsmith',
  streamlit: 'https://streamlit.io',
  gradio: 'https://www.gradio.app',
  kaggle: 'https://www.kaggle.com',
  'kaggle gpu': 'https://www.kaggle.com',
  faiss: 'https://github.com/facebookresearch/faiss',
  'sentence-transformers': 'https://sbert.net',
  'stable diffusion': 'https://stability.ai',
  'stable diffusion v1.5': 'https://stability.ai',
  'qwen 2.5': 'https://huggingface.co/Qwen',
  qwen: 'https://huggingface.co/Qwen',
  clip: 'https://github.com/openai/CLIP',
  pandas: 'https://pandas.pydata.org',
  numpy: 'https://numpy.org',
  matplotlib: 'https://matplotlib.org',
  scipy: 'https://scipy.org',
  'scikit-learn': 'https://scikit-learn.org',
  pypdf: 'https://pypdf.readthedocs.io',

  // APIs & Specialized Tooling
  'web audio api': 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
  'alpaca api': 'https://alpaca.markets',
  'murf ai': 'https://murf.ai',
  figma: 'https://www.figma.com',
};

export const getTechUrl = (name: string): string => {
  const normalized = name.toLowerCase().trim();
  if (TECH_URLS[normalized]) {
    return TECH_URLS[normalized];
  }
  // Check partial key matches
  for (const [key, url] of Object.entries(TECH_URLS)) {
    if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
      return url;
    }
  }
  // Fallback to high-relevance official documentation search
  return `https://www.google.com/search?q=${encodeURIComponent(name + ' official documentation')}`;
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

export interface TechBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'pill' | 'circle';
  showTooltip?: boolean;
  clickable?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  className = '',
  size = 'md',
  variant = 'pill',
  showTooltip = true,
  clickable = true,
  href,
  onClick,
}) => {
  const meta = getTechMeta(name);
  const color = meta.color;
  const targetUrl = href || getTechUrl(name);
  const [isHovered, setIsHovered] = useState(false);

  if (variant === 'circle') {
    const circleSizeClass =
      size === 'sm'
        ? 'w-8 h-8 sm:w-9 sm:h-9'
        : size === 'lg'
        ? 'w-12 h-12 sm:w-14 sm:h-14'
        : 'w-10 h-10';

    const iconSizeClass =
      size === 'sm'
        ? '[&_svg]:!w-4 [&_svg]:!h-4'
        : size === 'lg'
        ? '[&_svg]:!w-6.5 [&_svg]:!h-6.5 sm:[&_svg]:!w-7.5 sm:[&_svg]:!h-7.5'
        : '[&_svg]:!w-5 [&_svg]:!h-5';

    const badgeContent = (
      <>
        {meta.icon ? (
          meta.icon
        ) : (
          <span
            className={`font-bold font-mono-code leading-none ${size === 'lg' ? 'text-xs sm:text-sm' : 'text-[11px]'}`}
            style={{ color }}
          >
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </>
    );

    const badgeStyle: React.CSSProperties = {
      backgroundColor: isHovered
        ? 'var(--circle-tech-bg, rgba(255, 255, 255, 0.95))'
        : 'var(--circle-tech-bg, rgba(255, 255, 255, 0.75))',
      border: isHovered
        ? `1.5px solid ${color}`
        : '1px solid var(--circle-tech-border, rgba(0, 0, 0, 0.12))',
      boxShadow: isHovered
        ? `0 6px 18px ${color}35, 0 2px 6px rgba(0, 0, 0, 0.08)`
        : '0 2px 6px rgba(0, 0, 0, 0.04)',
      transform: isHovered ? 'scale(1.12)' : 'scale(1)',
    };

    const commonClasses = `${circleSizeClass} rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer select-none backdrop-blur-md ${iconSizeClass}`;

    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {clickable ? (
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens official website or documentation)`}
            title={`Visit ${name} official website or documentation`}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.(e);
            }}
            className={commonClasses}
            style={badgeStyle}
          >
            {badgeContent}
          </a>
        ) : (
          <span
            tabIndex={0}
            role="img"
            aria-label={name}
            className={commonClasses}
            style={badgeStyle}
            onClick={onClick}
          >
            {badgeContent}
          </span>
        )}

        {/* Floating Details Tooltip - Displays ONLY when hovered on this specific stack badge */}
        {showTooltip && isHovered && (
          <div
            role="tooltip"
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-50 px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono-code uppercase tracking-wider font-semibold whitespace-nowrap shadow-2xl transition-all duration-150 animate-in fade-in zoom-in-95 flex items-center gap-1.5"
            style={{
              backgroundColor: '#0a0a0c',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
            }}
          >
            <span>{name}</span>
            {clickable && (
              <span className="text-[9px] opacity-60 font-mono-code font-normal">↗</span>
            )}
            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#0a0a0c]" />
          </div>
        )}
      </div>
    );
  }

  const sizeClasses =
    size === 'sm'
      ? 'px-1.5 py-0.5 text-[9px] min-[360px]:px-2 min-[360px]:text-[9.5px] sm:px-2.5 sm:text-[10px] gap-1 min-[360px]:gap-1.5'
      : 'px-2 py-1 text-[10px] min-[360px]:px-2.5 min-[360px]:py-1.5 min-[360px]:text-[10.5px] sm:px-3 sm:text-[11px] gap-1.5 sm:gap-2';

  const pillContent = (
    <>
      {meta.icon && (
        <span className="inline-flex items-center justify-center flex-shrink-0 [&>svg]:w-3 [&>svg]:h-3 sm:[&>svg]:w-3.5 sm:[&>svg]:h-3.5">
          {meta.icon}
        </span>
      )}
      <span className="font-semibold">{name}</span>
    </>
  );

  const pillStyle: React.CSSProperties = {
    backgroundColor: `${color}14`, // ~8% opacity
    borderColor: `${color}40`,     // ~25% opacity
    color: 'var(--text-primary)',
    boxShadow: `0 2px 8px ${color}15`,
  };

  const pillClasses = `inline-flex items-center font-mono-code uppercase tracking-tight min-[360px]:tracking-wider rounded-lg border transition-all duration-200 hover:scale-105 select-none shrink-0 ${clickable ? 'cursor-pointer' : ''} ${sizeClasses} ${className}`;

  if (clickable) {
    return (
      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} (opens official website or documentation)`}
        title={`Visit ${name} official website or documentation`}
        className={pillClasses}
        style={pillStyle}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.(e);
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
        {pillContent}
      </a>
    );
  }

  return (
    <span
      className={pillClasses}
      style={pillStyle}
      onClick={onClick}
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
      {pillContent}
    </span>
  );
};
