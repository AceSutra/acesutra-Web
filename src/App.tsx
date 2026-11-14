import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  TrendingUp,
  Terminal,
  Smartphone,
  Compass,
  MousePointer,
  Check,
  X,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  Send,
  Layers
} from 'lucide-react';

// Color themes for WebGL particles
type PaletteKey = 'cyan' | 'violet' | 'emerald' | 'monolith';
type ShapeMode = 'torus' | 'sphere' | 'wave';

interface ConceptData {
  title: string;
  subtitle: string;
  desc: string;
  stack: string[];
}

const CONCEPTS: Record<string, ConceptData> = {
  vortex: {
    title: 'VORTEX // Algorithmic Ad Engine',
    subtitle: 'Multi-Touch Machine Learning Attribution & Real-Time ROAS Optimization',
    desc: 'Our proprietary marketing engine that bypasses traditional platform attribution delays. Tracks cross-channel touchpoints across Meta, Google PMax, and TikTok Ads, predicting Customer Lifetime Value (LTV) within 48 hours of acquisition.',
    stack: ['Meta Marketing API', 'Google Ads Scripts', 'Server-Side GTM', 'Next.js', 'Python ML']
  },
  kinetic: {
    title: 'KINETIC // 3D Spatial E-Commerce',
    subtitle: 'Real-Time WebGL Product Visualization with Sub-Second Checkout',
    desc: 'A next-generation e-commerce platform built to replace slow, bloated storefronts. Combines interactive 60FPS 3D geometry manipulation with headless Shopify Plus and single-tap checkout.',
    stack: ['Three.js / WebGL', 'Shopify Storefront API', 'Tailwind CSS', 'Vercel Edge']
  },
  synapse: {
    title: 'SYNAPSE OS // Cross-Platform Architecture',
    subtitle: 'Offline-First Mobile Framework with End-to-End Cryptographic Sync',
    desc: 'An enterprise-grade Flutter architecture template built for speed and reliability. Features biometrics, background sync, real-time push engines, and zero-latency state machines.',
    stack: ['Flutter 3.x', 'Dart', 'Supabase Realtime', 'AWS Lambda', 'WebSockets']
  },
  neuro: {
    title: 'NEURO SEO // Semantic Knowledge Pipeline',
    subtitle: 'Programmatic Topic Modeling & High-Authority Content Generation',
    desc: 'A technical SEO architecture that reverse-engineers Google’s Search Generative Experience (SGE). Maps internal topical authority graphs and produces crawl-optimized, schema-verified landing architectures.',
    stack: ['Schema.org JSON-LD', 'Next.js ISR', 'Vector Database', 'Deep Search API']
  }
};

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Studio HUD states
  const [liveTime, setLiveTime] = useState<string>('00:00:00 UTC');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  // WebGL controls
  const [shapeMode, setShapeMode] = useState<ShapeMode>('torus');
  const [paletteKey, setPaletteKey] = useState<PaletteKey>('cyan');

  // Custom magnetic cursor states
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Concept Modal State
  const [activeConcept, setActiveConcept] = useState<string | null>(null);

  // Estimator States
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    marketing: true,
    web: true,
    mobile: false,
    seo: false,
    brand: false
  });
  const [speedMultiplier, setSpeedMultiplier] = useState<'standard' | 'rush'>('standard');

  // Application Form States
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantCompany, setApplicantCompany] = useState<string>('');
  const [applicantBudget, setApplicantBudget] = useState<string>('6k-12k');
  const [applicantVision, setApplicantVision] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // 1. Live UTC Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toUTCString().split(' ')[4] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Sound Synthesizer (Web Audio API)
  const playSound = (type: 'hover' | 'click') => {
    if (!soundEnabled) return;
    try {
      const ctx = audioCtx || new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      if (!audioCtx) setAudioCtx(ctx);
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.035);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
        osc.start(now);
        osc.stop(now + 0.035);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.07);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      }
    } catch {
      // Audio fallback silent
    }
  };

  // 3. Custom Cursor Follower Physics
  useEffect(() => {
    let animId: number;
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const lerpCursor = () => {
      setFollowerPos(prev => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.18,
        y: prev.y + (cursorPos.y - prev.y) * 0.18
      }));
      animId = requestAnimationFrame(lerpCursor);
    };
    animId = requestAnimationFrame(lerpCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [cursorPos.x, cursorPos.y]);

  const handleInteractiveHover = (label: string) => {
    setIsHovering(true);
    setCursorText(label);
    playSound('hover');
  };

  const handleInteractiveLeave = () => {
    setIsHovering(false);
    setCursorText('');
  };

  // 4. Three.js WebGL Real-Time Particle Scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particleCount = 6500;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = 700;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const palettes = {
      cyan: { primary: 0x00f2fe, secondary: 0x4facfe },
      violet: { primary: 0xc084fc, secondary: 0x8b5cf6 },
      emerald: { primary: 0x00ff87, secondary: 0x60efff },
      monolith: { primary: 0xffffff, secondary: 0x94a3b8 }
    };

    const getCoords = (mode: ShapeMode, i: number) => {
      if (mode === 'torus') {
        const u = (i / particleCount) * Math.PI * 2 * 3;
        const p = 2, q = 3;
        const r = 180 + Math.sin(i * 0.1) * 25;
        return {
          x: r * (2 + Math.cos(q * u)) * 0.5 * Math.cos(p * u),
          y: r * (2 + Math.cos(q * u)) * 0.5 * Math.sin(p * u),
          z: r * Math.sin(q * u) * 1.4 + (Math.random() - 0.5) * 45
        };
      } else if (mode === 'sphere') {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;
        const radius = 240 + Math.sin(i * 0.05) * 35;
        return {
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi)
        };
      } else {
        const side = Math.floor(Math.sqrt(particleCount));
        const row = Math.floor(i / side);
        const col = i % side;
        const spacing = 18;
        return {
          x: (col - side / 2) * spacing,
          y: (Math.sin(col * 0.2) + Math.cos(row * 0.2)) * 60,
          z: (row - side / 2) * spacing
        };
      }
    };

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const activeColor = palettes[paletteKey];
    const colorA = new THREE.Color(activeColor.primary);
    const colorB = new THREE.Color(activeColor.secondary);

    for (let i = 0; i < particleCount; i++) {
      const coords = getCoords(shapeMode, i);
      const i3 = i * 3;
      positions[i3] = coords.x;
      positions[i3 + 1] = coords.y;
      positions[i3 + 2] = coords.z;

      originalPositions[i3] = coords.x;
      originalPositions[i3 + 1] = coords.y;
      originalPositions[i3 + 2] = coords.z;

      const ratio = i / particleCount;
      const mixed = colorA.clone().lerp(colorB, Math.sin(ratio * Math.PI));
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle sprite
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      const gradient = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(200, 240, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(0, 242, 254, 0.25)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pCtx.fillStyle = gradient;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(pCanvas);

    const material = new THREE.PointsMaterial({
      size: 4.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouseX = 0, mouseY = 0;
    let targetRotX = 0, targetRotY = 0;
    let prevMouse = { x: 0, y: 0 };
    let dragging = false;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX = (x / window.innerWidth) * 2;
      mouseY = -(y / window.innerHeight) * 2;

      if (dragging) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        targetRotY += dx * 0.005;
        targetRotX += dy * 0.005;
      }
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      setIsDragging(true);
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      dragging = false;
      setIsDragging(false);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const pos = geometry.attributes.position.array as Float32Array;

      points.rotation.y += (targetRotY - points.rotation.y) * 0.05 + 0.0018;
      points.rotation.x += (targetRotX - points.rotation.x) * 0.05;
      points.rotation.z = Math.sin(elapsed * 0.2) * 0.15;

      const mouseWorldX = mouseX * 350;
      const mouseWorldY = mouseY * 350;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        const wave = Math.sin(elapsed * 1.5 + ox * 0.008 + oy * 0.008) * 4;
        const dx = pos[i3] - mouseWorldX;
        const dy = pos[i3 + 1] - mouseWorldY;
        const distSq = dx * dx + dy * dy;

        if (distSq < 15000) {
          const force = (1 - distSq / 15000) * 18;
          pos[i3] += (dx / Math.sqrt(distSq)) * force;
          pos[i3 + 1] += (dy / Math.sqrt(distSq)) * force;
        } else {
          pos[i3] += (ox - pos[i3]) * 0.06;
          pos[i3 + 1] += (oy + wave - pos[i3 + 1]) * 0.06;
          pos[i3 + 2] += (oz - pos[i3 + 2]) * 0.06;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [shapeMode, paletteKey]);

  // Estimator calculation
  const calculateTotal = () => {
    let base = 0;
    let monthly = 0;
    const names: string[] = [];

    if (selectedServices.marketing) {
      monthly += 2000;
      names.push('Paid Media Buying');
    }
    if (selectedServices.web) {
      base += 3500;
      names.push('Next.js Web Platform');
    }
    if (selectedServices.mobile) {
      base += 5500;
      names.push('Cross-Platform Mobile App');
    }
    if (selectedServices.seo) {
      monthly += 1400;
      names.push('Topical SEO Pipeline');
    }
    if (selectedServices.brand) {
      base += 1800;
      names.push('Brand System & Creatives');
    }

    if (speedMultiplier === 'rush') {
      base = Math.round(base * 1.25);
    }

    return { base, monthly, names };
  };

  const { base: calcBase, monthly: calcMonthly, names: calcNames } = calculateTotal();

  const handleTransferToApplication = () => {
    playSound('click');
    const scopeSummary = `[Scope Configured: $${calcBase.toLocaleString()} setup + $${calcMonthly.toLocaleString()}/mo // Systems: ${calcNames.join(', ')}]. Looking forward to discussing founding partnership details.`;
    setApplicantVision(scopeSummary);
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('click');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  return (
    <div className="relative min-h-screen bg-[#030407] text-slate-100 font-sans overflow-x-hidden selection:bg-[#00f2fe] selection:text-black">
      
      {/* Background Interactive 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-auto z-[1]" />

      {/* Subtle Procedural Grain Noise Filter */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5 z-[99]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Custom Trailing Magnetic Cursor */}
      <div
        className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isHovering ? 0 : 8,
          height: isHovering ? 0 : 8,
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          opacity: isHovering ? 0 : 1
        }}
      />
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          width: isHovering ? 76 : isDragging ? 90 : 42,
          height: isHovering ? 76 : isDragging ? 90 : 42,
          borderRadius: '50%',
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.95)' : isDragging ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
          border: isHovering ? 'none' : isDragging ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        {isHovering && (
          <span className="text-[8px] font-mono font-bold tracking-widest text-[#030407] uppercase">
            {cursorText || 'EXPLORE'}
          </span>
        )}
        {isDragging && !isHovering && (
          <span className="text-[8px] font-mono font-bold tracking-widest text-[#00f2fe] uppercase">
            DRAG 3D
          </span>
        )}
      </div>

      {/* Top Studio HUD Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-5 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-black/40">
        
        <a 
          href="#"
          onMouseEnter={() => handleInteractiveHover('ACESUTRA')}
          onMouseLeave={handleInteractiveLeave}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f2fe] to-[#4facfe] p-[1px]">
            <div className="w-full h-full bg-[#030407] rounded-[7px] flex items-center justify-center">
              <span className="font-extrabold text-xs text-[#00f2fe]">A</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg tracking-tight text-white font-serif">Ace<span className="text-[#00f2fe]">Sutra</span></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 hidden sm:inline">[ STUDIO // R&D ]</span>
          </div>
        </a>

        {/* HUD Center Data */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-300">STATUS: ACCEPTING FOUNDING CLIENTS</span>
          </div>
          <div className="text-slate-700">|</div>
          <div>COORDS: 37.77° N, 122.41° W</div>
          <div className="text-slate-700">|</div>
          <div className="text-[#00f2fe]">{liveTime}</div>
        </div>

        {/* Right HUD Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playSound('click');
            }}
            onMouseEnter={() => handleInteractiveHover('AUDIO')}
            onMouseLeave={handleInteractiveLeave}
            className={`px-3 py-1.5 rounded-full text-[10px] font-mono uppercase border transition-colors flex items-center gap-1.5 ${
              soundEnabled ? 'border-[#00f2fe] text-[#00f2fe] bg-[#00f2fe]/10' : 'border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>AUDIO: {soundEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <a
            href="#lab"
            onMouseEnter={() => handleInteractiveHover('THE LAB')}
            onMouseLeave={handleInteractiveLeave}
            className="hidden sm:inline-block text-xs font-mono text-slate-300 hover:text-[#00f2fe] transition-colors"
          >
            [ 01 THE LAB ]
          </a>

          <a
            href="#founding"
            onMouseEnter={() => handleInteractiveHover('COHORT')}
            onMouseLeave={handleInteractiveLeave}
            className="hidden sm:inline-block text-xs font-mono text-slate-300 hover:text-[#00f2fe] transition-colors"
          >
            [ 02 FOUNDING COHORT ]
          </a>

          <a
            href="#apply"
            onMouseEnter={() => handleInteractiveHover('INITIALIZE')}
            onMouseLeave={handleInteractiveLeave}
            className="px-4 py-2 rounded-full text-xs font-mono text-white border border-[#00f2fe]/50 hover:border-[#00f2fe] hover:bg-[#00f2fe]/10 transition-all flex items-center gap-1.5"
          >
            INITIALIZE PROJECT <ArrowRight className="w-3.5 h-3.5 text-[#00f2fe]" />
          </a>
        </div>
      </header>

      {/* Scrollable Main Content */}
      <main className="relative z-10">

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-between pt-36 pb-12 px-6 sm:px-12 max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-[#00f2fe] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse"></span>
              <span>DISRUPTING CONVENTIONAL MARKETING & SOFTWARE STUDIOS</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight text-white mb-8 leading-[0.92]">
              WHERE CODE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)' }}>
                MEETS CONVERSION.
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end max-w-5xl">
              <div className="md:col-span-8">
                <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
                  AceSutra is an avant-garde digital growth studio fusing performance marketing, bespoke web engineering, and mobile app architecture into unfair commercial advantages. We build what ordinary agencies are technically incapable of delivering.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                <a
                  href="#founding"
                  onMouseEnter={() => handleInteractiveHover('JOIN')}
                  onMouseLeave={handleInteractiveLeave}
                  className="w-full text-center py-3.5 px-6 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00f2fe] transition-all shadow-xl"
                >
                  Become a Founding Client
                </a>
                <a
                  href="#lab"
                  onMouseEnter={() => handleInteractiveHover('EXPLORE')}
                  onMouseLeave={handleInteractiveLeave}
                  className="w-full text-center py-3.5 px-6 rounded-xl bg-white/[0.03] border border-white/20 text-white font-mono text-xs uppercase tracking-wider hover:border-[#00f2fe] transition-all"
                >
                  Inspect R&D Concepts ↓
                </a>
              </div>
            </div>
          </div>

          {/* Real-time 3D Control Dock */}
          <div className="pt-16 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MousePointer className="w-4 h-4 text-[#00f2fe]" />
              <span>CLICK & DRAG ANYWHERE TO INTERACT WITH REAL-TIME 3D PARTICLES</span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-mono uppercase text-slate-500 mr-1">3D Topology:</span>
              <button
                onClick={() => { setShapeMode('torus'); playSound('click'); }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  shapeMode === 'torus' ? 'bg-[#00f2fe]/20 border border-[#00f2fe] text-[#00f2fe]' : 'bg-white/5 border border-white/10 text-slate-400'
                }`}
              >
                CYBER TORUS
              </button>
              <button
                onClick={() => { setShapeMode('sphere'); playSound('click'); }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  shapeMode === 'sphere' ? 'bg-[#00f2fe]/20 border border-[#00f2fe] text-[#00f2fe]' : 'bg-white/5 border border-white/10 text-slate-400'
                }`}
              >
                NEURAL CLOUD
              </button>
              <button
                onClick={() => { setShapeMode('wave'); playSound('click'); }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  shapeMode === 'wave' ? 'bg-[#00f2fe]/20 border border-[#00f2fe] text-[#00f2fe]' : 'bg-white/5 border border-white/10 text-slate-400'
                }`}
              >
                QUANTUM WAVE
              </button>

              <span className="text-[10px] font-mono uppercase text-slate-500 ml-4 mr-1">Shader:</span>
              <button
                onClick={() => { setPaletteKey('cyan'); playSound('click'); }}
                className={`w-5 h-5 rounded-full bg-[#00f2fe] transition-transform ${paletteKey === 'cyan' ? 'ring-2 ring-white scale-110' : ''}`}
                title="Cyan Light"
              />
              <button
                onClick={() => { setPaletteKey('violet'); playSound('click'); }}
                className={`w-5 h-5 rounded-full bg-purple-500 transition-transform ${paletteKey === 'violet' ? 'ring-2 ring-white scale-110' : ''}`}
                title="Amethyst Violet"
              />
              <button
                onClick={() => { setPaletteKey('emerald'); playSound('click'); }}
                className={`w-5 h-5 rounded-full bg-emerald-400 transition-transform ${paletteKey === 'emerald' ? 'ring-2 ring-white scale-110' : ''}`}
                title="Matrix Emerald"
              />
              <button
                onClick={() => { setPaletteKey('monolith'); playSound('click'); }}
                className={`w-5 h-5 rounded-full bg-slate-200 transition-transform ${paletteKey === 'monolith' ? 'ring-2 ring-white scale-110' : ''}`}
                title="Monolith White"
              />
            </div>
          </div>
        </section>

        {/* Marquee Ticker */}
        <div className="py-5 border-y border-white/10 bg-black/60 overflow-hidden backdrop-blur-md">
          <div className="flex items-center gap-8 text-xl font-bold tracking-tight text-slate-400 whitespace-nowrap animate-[pulse_6s_infinite]">
            <span>DIGITAL MARKETING // META & GOOGLE ADS</span>
            <span className="text-[#00f2fe]">•</span>
            <span>FULL-STACK WEB PLATFORMS // NEXT.JS & THREE.JS</span>
            <span className="text-[#00f2fe]">•</span>
            <span>CROSS-PLATFORM MOBILE APPS // FLUTTER & REACT NATIVE</span>
            <span className="text-[#00f2fe]">•</span>
            <span>PROGRAMMATIC SEO & TOPICAL GRAPHS</span>
            <span className="text-[#00f2fe]">•</span>
            <span>SPATIAL 3D COMMERCE & CONVERSION ENGINES</span>
          </div>
        </div>

        {/* Manifesto Section */}
        <section className="py-32 px-6 sm:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-28">
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ MANIFESTO // 01 ]</span>
              <h2 className="text-4xl font-extrabold text-white mt-3 mb-6">
                THE AGENCY MODEL IS OBSOLETE.
              </h2>
              <div className="text-xs font-mono text-slate-500 space-y-2">
                <div>// ZERO JUNIOR DELEGATION</div>
                <div>// ZERO COMMITTEE BLOAT</div>
                <div>// 100% PRINCIPAL-LED EXECUTION</div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                  "Most marketing agencies cannot write a single line of production code. Most software consultancies have zero intuition for customer acquisition."
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  This disconnect costs companies millions. Marketing runs ad campaigns to landing pages that load in 4 seconds; developers build beautiful apps that nobody downloads because the acquisition funnel was an afterthought.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  <strong className="text-[#00f2fe] font-semibold">AceSutra eliminates the friction.</strong> We unify mathematical paid acquisition, modern full-stack web architectures, and mobile applications into one cohesive, revenue-generating engine.
                </p>
              </div>

              {/* Contrast Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono text-rose-400 mb-2">[ THE CONVENTIONAL AGENCY ]</div>
                  <ul className="text-xs text-slate-400 space-y-2.5">
                    <li>✕ Pitched by executives, dumped onto junior interns</li>
                    <li>✕ Slow 8-week turnaround for basic landing pages</li>
                    <li>✕ Generic boilerplate WordPress or Webflow templates</li>
                    <li>✕ Blames the client when ads fail to convert</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[#00f2fe]/[0.04] border border-[#00f2fe]/30">
                  <div className="text-xs font-mono text-[#00f2fe] mb-2">[ THE ACESUTRA STANDARD ]</div>
                  <ul className="text-xs text-slate-200 space-y-2.5">
                    <li>✓ Direct founder-to-founder technical execution</li>
                    <li>✓ Agile sprint shipments measured in days, not months</li>
                    <li>✓ Custom Next.js, Three.js, and Flutter architectures</li>
                    <li>✓ Full accountability for bottom-line ROAS and revenue</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disciplines Section */}
        <section id="disciplines" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ CAPABILITIES // 02 ]</span>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-white mt-2">CORE DISCIPLINES</h2>
            </div>
            <p className="text-xs font-mono text-slate-500 max-w-sm mt-4 md:mt-0">
              WHAT WE ARCHITECT, ENGINEER, AND SCALE DAILY ACROSS PLATFORMS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-[#00f2fe]/40 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-500">[ DISCIPLINE 01 ]</span>
                <TrendingUp className="w-6 h-6 text-[#00f2fe] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Performance Marketing & Media</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                Multi-platform paid customer acquisition. We construct hyper-targeted creative testing engines, server-side Conversion APIs (CAPI), and predictive lifetime-value funnels.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Meta Ads</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Google PMax</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">TikTok Media</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Server-Side Tracking</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-indigo-400/40 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-500">[ DISCIPLINE 02 ]</span>
                <Terminal className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">High-Performance Web Platforms</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                Next.js web architectures engineered for sub-second speeds, flawless Core Web Vitals, headless CMS control, and conversion-focused customer journeys.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Next.js & React</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Three.js WebGL</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Headless CMS</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Edge Deployment</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-purple-400/40 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-500">[ DISCIPLINE 03 ]</span>
                <Smartphone className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Cross-Platform Mobile Apps</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                Bespoke iOS and Android applications written with Flutter and React Native. Smooth 60FPS micro-interactions, offline state synchronization, and secure backend microservices.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Flutter & Dart</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">React Native</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Supabase & Firebase</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Store Subscriptions</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 transition-all group">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-500">[ DISCIPLINE 04 ]</span>
                <Compass className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Programmatic SEO & Brand Systems</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                Topical authority clusters, semantic schema architectures, and distinctive visual identities that capture organic buyer intent and build lasting brand moat.
              </p>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Semantic Keyword Graphs</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Schema.org JSON-LD</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Design Systems (Figma)</span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">Conversion Auditing</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Lab (R&D Concepts) */}
        <section id="lab" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ R&D & CONCEPTS // 03 ]</span>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-white mt-2">THE ACESUTRA LAB</h2>
            </div>
            <div className="text-xs font-mono text-slate-400 max-w-md mt-4 md:mt-0">
              WE DON’T SHOW GENERIC MOCKUPS. WE SHOW LIVE ARCHITECTURAL PROTOTYPES DEVELOPED IN-HOUSE. CLICK TO INSPECT BLUEPRINTS.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(CONCEPTS).map(([key, concept]) => (
              <div
                key={key}
                onClick={() => { setActiveConcept(key); playSound('click'); }}
                onMouseEnter={() => handleInteractiveHover('INSPECT')}
                onMouseLeave={handleInteractiveLeave}
                className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-[#00f2fe]/50 cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#00f2fe] mb-4">
                  <span>[ SYSTEM // R&D ]</span>
                  <span className="px-2 py-0.5 rounded bg-[#00f2fe]/10 border border-[#00f2fe]/30">CLICK TO INSPECT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors">
                  {concept.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-6">{concept.subtitle}</p>
                <div className="p-5 rounded-2xl bg-black/60 border border-white/5 flex flex-col justify-between">
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">{concept.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {concept.stack.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#00f2fe] border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Founding Cohort Advantage */}
        <section id="founding" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5">
          <div className="p-8 sm:p-14 rounded-3xl border border-[#00f2fe]/30 bg-gradient-to-br from-cyan-950/20 via-black to-slate-950">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/40 text-[#00f2fe] text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-ping"></span>
              <span>LIMITED COHORT: ACCEPTING 4 FOUNDING CLIENTS FOR 2026</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              THE FOUNDING PARTNER ADVANTAGE
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-3xl">
              Because AceSutra is intentionally selective and launching our flagship roster, we don't have bureaucratic layers, junior handoffs, or 20 other client distractions. <strong className="text-white">Your brand becomes our marquee case study.</strong> That means an unreasonable level of care, obsessive speed, and founder dedication.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-[#00f2fe] text-xs mb-2">01 // DIRECT FOUNDER ACCESS</div>
                <div className="font-bold text-white text-lg mb-2">Zero Agency Middlemen</div>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  You collaborate directly with principal engineers and performance marketers in a shared Slack channel. Zero account managers playing telephone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-[#00f2fe] text-xs mb-2">02 // 100% SKIN IN THE GAME</div>
                <div className="font-bold text-white text-lg mb-2">Flagship Case Study Drive</div>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  We have everything to prove. We treat your campaign and software as if our reputation depends on it—because it literally does.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-[#00f2fe] text-xs mb-2">03 // PREFERENTIAL LAUNCH RATES</div>
                <div className="font-bold text-white text-lg mb-2">Founding Cohort Economics</div>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  Founding partners receive preferential pilot terms and grandfathered retainer rates that will never be offered again once the cohort closes.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#apply"
                onMouseEnter={() => handleInteractiveHover('CLAIM SPOT')}
                onMouseLeave={handleInteractiveLeave}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00f2fe] transition-all text-center"
              >
                Apply for Founding Partner Spot →
              </a>
              <span className="text-xs font-mono text-slate-500">Only 4 slots available for the current sprint cycle.</span>
            </div>
          </div>
        </section>

        {/* Scope Configurator */}
        <section id="estimator" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ ESTIMATOR // 04 ]</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 mb-4">SYSTEM SCOPE CALCULATOR</h2>
            <p className="text-slate-400 text-sm font-light">
              Configure your bespoke digital stack. Real-time scope, turnaround estimate, and investment calculation.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Select Systems Required:</div>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.marketing}
                      onChange={e => setSelectedServices({ ...selectedServices, marketing: e.target.checked })}
                      className="rounded text-[#00f2fe] focus:ring-0 bg-slate-900 border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Performance Media Buying (Meta + Google)</div>
                      <div className="text-xs text-slate-500 font-mono">Full-funnel ads, creative testing, CAPI tracking</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$2,000/mo</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.web}
                      onChange={e => setSelectedServices({ ...selectedServices, web: e.target.checked })}
                      className="rounded text-[#00f2fe] focus:ring-0 bg-slate-900 border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Next.js & Three.js Web Platform</div>
                      <div className="text-xs text-slate-500 font-mono">Sub-second load times, headless CMS, modern animations</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$3,500</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.mobile}
                      onChange={e => setSelectedServices({ ...selectedServices, mobile: e.target.checked })}
                      className="rounded text-[#00f2fe] focus:ring-0 bg-slate-900 border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Cross-Platform Mobile App (iOS & Android)</div>
                      <div className="text-xs text-slate-500 font-mono">Flutter architecture, Supabase sync, App Store submission</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$5,500</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.seo}
                      onChange={e => setSelectedServices({ ...selectedServices, seo: e.target.checked })}
                      className="rounded text-[#00f2fe] focus:ring-0 bg-slate-900 border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Topical SEO & Knowledge Graph Pipeline</div>
                      <div className="text-xs text-slate-500 font-mono">High-intent search rankings, schema validation</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$1,400/mo</span>
                </label>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.brand}
                      onChange={e => setSelectedServices({ ...selectedServices, brand: e.target.checked })}
                      className="rounded text-[#00f2fe] focus:ring-0 bg-slate-900 border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Brand System & High-Converting Creatives</div>
                      <div className="text-xs text-slate-500 font-mono">Figma design system, video ads, motion assets</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$1,800</span>
                </label>

                <div className="pt-2">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Execution Velocity:</label>
                  <select
                    value={speedMultiplier}
                    onChange={e => setSpeedMultiplier(e.target.value as 'standard' | 'rush')}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-[#00f2fe]"
                  >
                    <option value="standard">Standard Engineering Cadence (4-6 Weeks)</option>
                    <option value="rush">Priority Rapid Sprint Mode (2-3 Weeks) [+25% Surge]</option>
                  </select>
                </div>
              </div>

              {/* Scope Output */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-black/80 border border-white/10">
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">[ ESTIMATED INVESTMENT ]</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                    {calcBase === 0 && calcMonthly === 0
                      ? 'SELECT SPECIFICATIONS'
                      : `$${calcBase.toLocaleString()} SETUP ${calcMonthly > 0 ? `+ $${calcMonthly.toLocaleString()}/MO` : ''}`}
                  </div>
                  <div className="text-xs font-mono text-[#00f2fe] bg-white/[0.03] p-3 rounded-lg border border-white/5 leading-relaxed mb-6">
                    {calcNames.length > 0 ? `${calcNames.length} Systems Configured: ${calcNames.join(', ')}` : 'Select at least 1 system'}
                  </div>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed mb-6">
                    Transparent scope without hidden agency overhead. Founding clients receive priority execution and direct access to founders.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleTransferToApplication}
                  className="w-full py-4 rounded-xl bg-[#00f2fe] hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Transfer Specs to Application ↓
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Application Terminal */}
        <section id="apply" className="py-24 px-6 sm:px-12 max-w-4xl mx-auto border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ INITIALIZE // 05 ]</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-3">APPLY FOR FOUNDING PARTNER COHORT</h2>
            <p className="text-xs font-mono text-slate-400">
              WE REVIEW EACH INQUIRY PERSONALLY. RESPONSE WITHIN 24 HOURS GUARANTEED.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl relative">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Founder / Name *</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#00f2fe] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={e => setApplicantEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#00f2fe] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Company / Project URL</label>
                  <input
                    type="text"
                    value={applicantCompany}
                    onChange={e => setApplicantCompany(e.target.value)}
                    placeholder="acme.ai or domain.com"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#00f2fe] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Budget Allocation Tier</label>
                  <select
                    value={applicantBudget}
                    onChange={e => setApplicantBudget(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-[#00f2fe] transition-colors"
                  >
                    <option value="3k-6k">$3,000 - $6,000 (Pilot Sprint)</option>
                    <option value="6k-12k">$6,000 - $12,000 (Full-Stack Engine)</option>
                    <option value="12k-25k">$12,000 - $25,000 (Omnichannel Scale)</option>
                    <option value="25k+">$25,000+ (Enterprise Squad)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Project Vision & Primary Objectives *</label>
                <textarea
                  rows={4}
                  required
                  value={applicantVision}
                  onChange={e => setApplicantVision(e.target.value)}
                  placeholder="Describe your product, current acquisition bottleneck, target launch date, and desired outcome..."
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#00f2fe] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-white hover:bg-[#00f2fe] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING SPECIFICATIONS...</span>
                ) : (
                  <>
                    <span>Transmit Application to Founders</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
                <span>// STRICT NDA BY DEFAULT</span>
                <span>// ZERO JUNIORS</span>
                <span>// DIRECT TELEGRAM / SLACK INTEGRATION</span>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* Concept Inspection Modal */}
      {activeConcept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="p-8 rounded-3xl max-w-2xl w-full bg-slate-900 border border-[#00f2fe]/40 relative shadow-2xl">
            <button
              onClick={() => setActiveConcept(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white font-mono text-xs p-2 flex items-center gap-1 cursor-pointer"
            >
              <X className="w-4 h-4" /> [ ESC // CLOSE ]
            </button>
            <div className="text-[10px] font-mono text-[#00f2fe] uppercase tracking-widest mb-2">[ ARCHITECTURAL BLUEPRINT ]</div>
            <h3 className="text-3xl font-bold text-white mb-2">{CONCEPTS[activeConcept]?.title}</h3>
            <p className="text-xs font-mono text-slate-400 mb-6">{CONCEPTS[activeConcept]?.subtitle}</p>
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">{CONCEPTS[activeConcept]?.desc}</p>
            <div className="border-t border-white/10 pt-6">
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-3">Core Technology Stack:</div>
              <div className="flex flex-wrap gap-2">
                {CONCEPTS[activeConcept]?.stack.map((s, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-[#00f2fe] border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="p-8 rounded-3xl max-w-md w-full bg-slate-900 border border-[#00f2fe] text-center shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center mx-auto mb-4 border border-[#00f2fe]/50">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-mono text-[#00f2fe] uppercase tracking-widest mb-1">[ TRANSMISSION CONFIRMED ]</div>
            <h3 className="text-2xl font-bold text-white mb-3">Application Logged</h3>
            <p className="text-xs font-mono text-slate-300 leading-relaxed mb-6">
              Thank you for applying to the <span className="text-[#00f2fe]">AceSutra Founding Cohort</span>. A founder will review your architecture requirements and reach out within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3 rounded-xl bg-white hover:bg-[#00f2fe] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Return to Studio
            </button>
          </div>
        </div>
      )}

      {/* Avant-Garde Studio Footer */}
      <footer className="border-t border-white/10 py-16 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-white tracking-tight">Ace<span className="text-[#00f2fe]">Sutra</span></div>
            <div className="text-xs font-mono text-slate-500 mt-1">THE FORMULA FOR UNFAIR DIGITAL GROWTH.</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <a href="#disciplines" className="hover:text-[#00f2fe] transition-colors">CAPABILITIES</a>
            <a href="#lab" className="hover:text-[#00f2fe] transition-colors">THE LAB</a>
            <a href="#founding" className="hover:text-[#00f2fe] transition-colors">FOUNDING COHORT</a>
            <a href="#estimator" className="hover:text-[#00f2fe] transition-colors">SCOPE CALCULATOR</a>
            <a href="mailto:founders@acesutra.com" className="text-[#00f2fe] hover:underline">FOUNDERS@ACESUTRA.COM</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-4">
          <div>© 2026 ACESUTRA STUDIO. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span>BUILT WITH THREE.JS & TAILWIND</span>
            <span>•</span>
            <span>ZERO JUNIORS</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
