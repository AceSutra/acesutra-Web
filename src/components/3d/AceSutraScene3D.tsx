import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AceSutraScene3DProps {
  className?: string;
}

export const AceSutraScene3D: React.FC<AceSutraScene3DProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let isVisible = true;
    let animationFrameId: number;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.04);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // MASTER ROOT GROUP
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. CORE GEOMETRY: Faceted Futuristic Icosahedron Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.3, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0047ba,
      emissive: 0x001d4a,
      emissiveIntensity: 0.8,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    masterGroup.add(coreMesh);

    // 2. WIREFRAME SHIELD: Outer kinetic cage
    const cageGeometry = new THREE.IcosahedronGeometry(1.65, 2);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    masterGroup.add(cageMesh);

    // 3. ORBITAL RINGS: Two inclined gyroscope rings
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00c2ff,
      emissive: 0x00c2ff,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    masterGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0066ff,
      emissive: 0x0066ff,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.8,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    masterGroup.add(ring2);

    // 4. FLOATING DATA PARTICLE NEBULA
    const particleCount = 650;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x0066ff);
    const colorCyan = new THREE.Color(0x00c2ff);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? (Math.random() > 0.5 ? colorCyan : colorBlue) : colorWhite;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    masterGroup.add(particles);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00c2ff, 4, 12);
    pointLightCyan.position.set(3, 3, 3);
    scene.add(pointLightCyan);

    const pointLightBlue = new THREE.PointLight(0x0066ff, 3, 12);
    pointLightBlue.position.set(-3, -3, 2);
    scene.add(pointLightBlue);

    // POINTER TRACKING & INTERACTIVE DRAG
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      const relX = (clientX - rect.left) / rect.width - 0.5;
      const relY = (clientY - rect.top) / rect.height - 0.5;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        mouseX = relX * 1.5;
        mouseY = relY * 1.5;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('mousedown', handlePointerDown);
    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // RESIZE OBSERVER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // INTERSECTION OBSERVER (Throttle when off-screen)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    // ANIMATION RENDER LOOP
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Continuous kinetic rotation
      coreMesh.rotation.y += delta * 0.25;
      coreMesh.rotation.x += delta * 0.15;

      cageMesh.rotation.y -= delta * 0.2;
      cageMesh.rotation.x -= delta * 0.1;

      ring1.rotation.z += delta * 0.4;
      ring2.rotation.z -= delta * 0.35;

      particles.rotation.y += delta * 0.08;
      particles.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      // Breathing scale effect
      const breathingScale = 1 + Math.sin(elapsedTime * 1.5) * 0.035;
      coreMesh.scale.set(breathingScale, breathingScale, breathingScale);

      // Smooth inertia / lerping towards target mouse coordinates
      if (!isDragging) {
        targetRotationY += (mouseX - targetRotationY) * 0.05;
        targetRotationX += (mouseY - targetRotationX) * 0.05;
      }

      masterGroup.rotation.y += (targetRotationY - masterGroup.rotation.y) * 0.08;
      masterGroup.rotation.x += (targetRotationX - masterGroup.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('mousedown', handlePointerDown);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      // Clean Three.js resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
      data-cursor="DRAG 3D"
      aria-label="Interactive 3D AceSutra Technology Core"
    >
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-blue/20 blur-3xl animate-pulse-slow"></div>
        <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-brand-cyan/25 blur-2xl -top-8 -right-8"></div>
      </div>

      {/* Fallback if WebGL unavailable */}
      {!hasWebGL && (
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-brand-cyan/40 bg-gradient-to-tr from-brand-blue/20 via-charcoal-800 to-brand-cyan/20 backdrop-blur-xl flex items-center justify-center animate-pulse shadow-glow-cyan-lg">
          <div className="w-40 h-40 rounded-full border-2 border-dashed border-brand-blue animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
      )}

      {/* Interactive Micro-badge overlay */}
      <div className="absolute bottom-4 right-4 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-mutedGray">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping"></span>
        <span>INTERACTIVE WEBGL</span>
      </div>
    </div>
  );
};
