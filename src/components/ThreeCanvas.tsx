import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const ThreeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 4.8;

    // Monochrome Particle Cloud
    const particleCount = 1800;
    const coords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(1 - u * u);
      const spread = 2.1 + (Math.random() - 0.5) * 0.45;
      coords[i * 3] = radius * Math.cos(theta) * spread;
      coords[i * 3 + 1] = u * spread;
      coords[i * 3 + 2] = radius * Math.sin(theta) * spread;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(coords, 3));

    const particleColor = theme === 'dark' ? 0xffffff : 0x111111;
    const material = new THREE.PointsMaterial({
      size: 0.016,
      color: particleColor,
      transparent: true,
      opacity: theme === 'dark' ? 0.75 : 0.55,
      blending: THREE.NormalBlending,
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle Outer Wireframe Ring / Cage
    const wireGeo = new THREE.IcosahedronGeometry(2.1, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: particleColor,
      wireframe: true,
      transparent: true,
      opacity: theme === 'dark' ? 0.08 : 0.05,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // Inner orbiting geometric ring
    const ringGeo = new THREE.TorusGeometry(1.6, 0.006, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: particleColor,
      transparent: true,
      opacity: theme === 'dark' ? 0.22 : 0.15,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // Mouse coordinates tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 0.7;
      targetY = (e.clientY / window.innerHeight - 0.5) * 0.7;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        particles.rotation.y = elapsedTime * 0.06 + currentX * 0.9;
        particles.rotation.x = currentY * 0.6;

        wireMesh.rotation.y = -elapsedTime * 0.04;
        wireMesh.rotation.x = elapsedTime * 0.03;

        ringMesh.rotation.z = elapsedTime * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden opacity-80 mix-blend-screen dark:mix-blend-screen light:mix-blend-multiply">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
