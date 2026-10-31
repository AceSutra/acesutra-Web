import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AboutScene3DProps {
  className?: string;
  activePillarIndex?: number;
}

export const AboutScene3D: React.FC<AboutScene3DProps> = ({ className = '', activePillarIndex = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  // Keep ref to pillar index for animation modulation
  const pillarRef = useRef(activePillarIndex);
  useEffect(() => {
    pillarRef.current = activePillarIndex;
  }, [activePillarIndex]);

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

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.04);

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. MONOLITH: Faceted Dark Obsidian Crystal Obelisk
    const monolithGeo = new THREE.CylinderGeometry(0.75, 1.15, 2.9, 6, 1);
    const monolithMat = new THREE.MeshPhysicalMaterial({
      color: 0x09101d,
      emissive: 0x002d6b,
      emissiveIntensity: 0.6,
      roughness: 0.08,
      metalness: 0.92,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 1.0,
      flatShading: true,
    });
    const monolithMesh = new THREE.Mesh(monolithGeo, monolithMat);
    rootGroup.add(monolithMesh);

    // Outer Monolith Wireframe Cage for High-Tech Studio Aesthetic
    const monolithWireGeo = new THREE.WireframeGeometry(monolithGeo);
    const monolithWireMat = new THREE.LineBasicMaterial({
      color: 0x00c2ff,
      transparent: true,
      opacity: 0.25,
    });
    const monolithWire = new THREE.LineSegments(monolithWireGeo, monolithWireMat);
    rootGroup.add(monolithWire);

    // 2. INTERNAL CYAN ENERGY CORE (Pulsing inner crystal)
    const coreGeo = new THREE.OctahedronGeometry(0.75, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00c2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // 3. DUAL GYROSCOPIC ORBITAL RINGS
    const ring1Geo = new THREE.TorusGeometry(1.95, 0.02, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x00c2ff,
      emissive: 0x00c2ff,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.35, 0.015, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x0066ff,
      emissiveIntensity: 0.75,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3.8;
    ring2.rotation.z = Math.PI / 4;
    rootGroup.add(ring2);

    // 4. FLOATING PARTICLES SWARM (380 Luminous Points)
    const particleCount = 380;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color(0x00c2ff);
    const cBlue = new THREE.Color(0x0066ff);
    const cViolet = new THREE.Color(0x818cf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.3 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 1.35;
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const r = Math.random();
      const col = r > 0.6 ? cCyan : r > 0.25 ? cBlue : cViolet;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00c2ff, 5, 16);
    pointLight1.position.set(3.5, 4, 3.5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0066ff, 4, 14);
    pointLight2.position.set(-3.5, -3, 2.5);
    scene.add(pointLight2);

    // INTERACTION & INERTIA
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let spinVelocityX = 0;
    let spinVelocityY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const rect = container.getBoundingClientRect();
      const relX = (clientX - rect.left) / rect.width - 0.5;
      const relY = (clientY - rect.top) / rect.height - 0.5;

      if (isDragging) {
        const dx = clientX - prevX;
        const dy = clientY - prevY;
        spinVelocityY = dx * 0.007;
        spinVelocityX = dy * 0.007;
        targetRotationY += spinVelocityY;
        targetRotationX += spinVelocityX;
        prevX = clientX;
        prevY = clientY;
      } else {
        mouseX = relX * 1.2;
        mouseY = relY * 1.2;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
      spinVelocityX = 0;
      spinVelocityY = 0;
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

    // INTERSECTION OBSERVER
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    // ANIMATION RENDER LOOP
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Apply spin velocity decay
      if (!isDragging) {
        spinVelocityX *= 0.95;
        spinVelocityY *= 0.95;
        targetRotationX += spinVelocityX;
        targetRotationY += spinVelocityY;

        targetRotationY += (mouseX - targetRotationY) * 0.04;
        targetRotationX += (mouseY - targetRotationX) * 0.04;
      }

      // Continuous subtle ambient rotation
      monolithMesh.rotation.y += delta * 0.22;
      monolithWire.rotation.y += delta * 0.22;
      coreMesh.rotation.y -= delta * 0.45;
      coreMesh.rotation.x += delta * 0.25;

      ring1.rotation.z += delta * 0.4;
      ring2.rotation.z -= delta * 0.35;
      particles.rotation.y += delta * 0.08;

      // Pulse breathing
      const scale = 1 + Math.sin(elapsed * 2.2) * 0.06;
      coreMesh.scale.set(scale, scale, scale);

      // Lerp rootGroup to target rotation
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.08;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.08;

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

      monolithGeo.dispose();
      monolithMat.dispose();
      monolithWireGeo.dispose();
      monolithWireMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
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
      aria-label="Interactive 3D Studio Monolith"
    >
      {/* Background Volumetric Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-brand-cyan/20 blur-3xl animate-pulse-slow"></div>
        <div className="w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-brand-blue/25 blur-2xl"></div>
      </div>

      {!hasWebGL && (
        <div className="w-64 h-64 rounded-full border border-brand-cyan/40 bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 backdrop-blur-xl flex items-center justify-center animate-pulse">
          <div className="w-32 h-32 rounded-full border-2 border-brand-cyan animate-spin"></div>
        </div>
      )}

      {/* High-Tech Studio HUD Overlays */}
      <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-cyan-400">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
        <span>STUDIO CORE // V3.2</span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none px-2.5 py-1 rounded-full bg-charcoal-900/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-mutedGray">
        <span>60 FPS</span>
      </div>

      <div className="absolute bottom-4 left-4 pointer-events-none px-3 py-1 rounded-full bg-charcoal-900/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-mutedGray">
        <span>STATUS: ACTIVE RUNTIME</span>
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 backdrop-blur-md text-[10px] font-mono text-cyan-400">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>DRAG TO ROTATE 360°</span>
      </div>
    </div>
  );
};
