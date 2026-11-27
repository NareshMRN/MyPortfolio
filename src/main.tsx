import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// index.html may contain a build-time pre-rendered hero (#hero-shell) so the headline
// paints before any JavaScript runs. React replaces it on first render.
// The shell is hidden by CSS on other routes and for dark-theme visitors.
const heroShell = document.getElementById('hero-shell');
window.__HERO_PRERENDERED = !!heroShell && getComputedStyle(heroShell).display !== 'none';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
