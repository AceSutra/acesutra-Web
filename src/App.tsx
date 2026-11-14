import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import {
  Check,
  X,
  Volume2,
  VolumeX,
  ArrowRight,
  Send,
  ArrowUpRight
} from 'lucide-react';

// Core Lab Concept Blueprints (R&D Showcase)
interface ConceptBlueprint {
  id: string;
  num: string;
  title: string;
  tagline: string;
  summary: string;
  metrics: string;
  specs: string[];
  techStack: string[];
}

const BLUEPRINTS: ConceptBlueprint[] = [
  {
    id: 'vortex',
    num: '01',
    title: 'VORTEX // ALGORITHMIC MEDIA ENGINE',
    tagline: 'Multi-Touch Attribution & Automated ROAS Scaling',
    summary: 'A proprietary performance architecture designed to circumvent cookie degradation and delayed platform attribution. Ingests raw webhooks from Meta CAPI, Google Ads, and TikTok, calculating predictive Customer Lifetime Value (pLTV) within 48 hours of acquisition.',
    metrics: '<120ms Latency // 99.8% Event Match Quality',
    specs: ['Real-Time Bid Shading Algorithm', 'Server-Side GTM Container', 'Automated Creative Fatigue Alerting', 'Cross-Channel First-Party Data Layer'],
    techStack: ['Meta Marketing API', 'Google Ads Scripts', 'Serverless Node.js', 'Redis Cache', 'Next.js']
  },
  {
    id: 'kinetic',
    num: '02',
    title: 'KINETIC // SPATIAL 3D COMMERCE',
    tagline: '60 FPS WebGL Product Interaction & Single-Tap Checkout',
    summary: 'A luxury spatial storefront platform engineered to eliminate conversion friction. Features real-time 3D product manipulation, procedural shaders, and sub-second headless checkout powered by Shopify Plus storefront APIs.',
    metrics: '60 FPS Steady // 100/100 Core Web Vitals',
    specs: ['Procedural Metallic & Glass Shaders', 'Headless Cart State Machine', 'Touch-Optimized Orbital Rig', 'Instant Edge CDN Hydration'],
    techStack: ['Three.js WebGL', 'Shopify Storefront API', 'Tailwind CSS', 'Vercel Edge Network']
  },
  {
    id: 'synapse',
    num: '03',
    title: 'SYNAPSE OS // CROSS-PLATFORM MOBILE',
    tagline: 'Offline-First iOS & Android Reactive Framework',
    summary: 'An enterprise-grade Flutter architecture template built for speed, biometric security, and zero-latency state synchronization. Operates smoothly in low-connectivity environments with automatic background conflict resolution.',
    metrics: 'Native 120Hz ProMotion Support // End-to-End Cryptography',
    specs: ['Local SQLite Reactive Cache', 'Hardware Enclave Biometric Auth', 'Push Notification Queuing', 'Unified App Store & Play Store CI/CD'],
    techStack: ['Flutter 3.x', 'Dart', 'Supabase Realtime', 'AWS Lambda', 'WebSockets']
  },
  {
    id: 'neuro',
    num: '04',
    title: 'NEURO SEO // KNOWLEDGE GRAPH ENGINE',
    tagline: 'Semantic Topic Clusters for Google Generative AI Search',
    summary: 'A next-generation programmatic SEO framework reverse-engineered for Google’s Search Generative Experience (SGE). Dynamically generates crawl-optimized internal linking silos and verified JSON-LD schema networks.',
    metrics: '99.4% Crawl Efficiency // 100% Schema Validation',
    specs: ['Deep Nested Entity JSON-LD Schema', 'Automated Semantic Gap Analysis', 'Internal Link Authority Routing', 'Instant Static Regeneration (ISR)'],
    techStack: ['Schema.org JSON-LD', 'Next.js ISR', 'Vector Database', 'Deep Search API']
  }
];

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Studio State
  const [liveTime, setLiveTime] = useState<string>('00:00:00 UTC');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  // Active Lab Modal
  const [activeBlueprint, setActiveBlueprint] = useState<ConceptBlueprint | null>(null);

  // Custom Cursor Follower
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorLabel, setCursorLabel] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Scope Estimator State
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    marketing: true,
    web: true,
    mobile: false,
    seo: false,
    brand: false
  });
  const [sprintVelocity, setSprintVelocity] = useState<'standard' | 'rush'>('standard');

  // Terminal Form State
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantUrl, setApplicantUrl] = useState<string>('');
  const [applicantTier, setApplicantTier] = useState<string>('full');
  const [applicantBrief, setApplicantBrief] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // 1. Live Studio UTC Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveTime(now.toUTCString().split(' ')[4] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Web Audio Haptic Feedback
  const triggerAudio = useCallback((tone: 'soft' | 'click') => {
    if (!soundEnabled) return;
    try {
      const ctx = audioCtx || new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      if (!audioCtx) setAudioCtx(ctx);
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const t = ctx.currentTime;
      if (tone === 'soft') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(640, t + 0.04);
        gain.gain.setValueAtTime(0.012, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
        osc.start(t);
        osc.stop(t + 0.04);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(240, t);
        osc.frequency.exponentialRampToValueAtTime(120, t + 0.06);
        gain.gain.setValueAtTime(0.025, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
        osc.start(t);
        osc.stop(t + 0.06);
      }
    } catch {
      // Audio fallback safe
    }
  }, [soundEnabled, audioCtx]);

  // 3. Custom Cursor Mechanics
  useEffect(() => {
    let animId: number;
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMove);

    const lerp = () => {
      setFollowerPos(prev => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.16,
        y: prev.y + (cursorPos.y - prev.y) * 0.16
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, [cursorPos.x, cursorPos.y]);

  const onHover = (label: string) => {
    setIsHovered(true);
    setCursorLabel(label);
    triggerAudio('soft');
  };

  const onLeave = () => {
    setIsHovered(false);
    setCursorLabel('');
  };

  // 4. Three.js Real-Time 3D Kinetic Iridescent Silk Wave Ribbon
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 32);

    // High-performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Build Kinetic Silk Ribbon Plane
    const width = 85;
    const height = 48;
    const segW = 120;
    const segH = 64;
    const geometry = new THREE.PlaneGeometry(width, height, segW, segH);

    // Save base coordinates
    const count = geometry.attributes.position.count;
    const originalPos = new Float32Array(count * 3);
    const posAttr = geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      originalPos[i * 3] = posAttr.getX(i);
      originalPos[i * 3 + 1] = posAttr.getY(i);
      originalPos[i * 3 + 2] = posAttr.getZ(i);
    }

    // Volumetric Glossy Iridescent Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x090e1a,
      roughness: 0.18,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.95,
      side: THREE.DoubleSide,
      flatShading: false
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.35;
    mesh.rotation.z = 0.12;
    scene.add(mesh);

    // Multi-Point Cinematic Lighting Setup (Lusion Signature)
    const ambientLight = new THREE.AmbientLight(0x040711, 2.5);
    scene.add(ambientLight);

    // Dynamic Electric Cyan Light
    const cyanLight = new THREE.PointLight(0x00f2fe, 18, 90);
    cyanLight.position.set(-15, 12, 18);
    scene.add(cyanLight);

    // Hot Magenta / Purple Crest Light
    const magentaLight = new THREE.PointLight(0xd946ef, 16, 90);
    magentaLight.position.set(18, -10, 16);
    scene.add(magentaLight);

    // Electric Violet Fill Light
    const violetLight = new THREE.PointLight(0x6366f1, 14, 80);
    violetLight.position.set(0, 15, -10);
    scene.add(violetLight);

    // Warm Sunbeam Specular Highlight
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(20, 25, 25);
    scene.add(dirLight);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onWindowMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll Choreography
    let scrollProgress = 0;
    const onWindowScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onWindowMouseMove, { passive: true });
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    window.addEventListener('resize', onWindowResize);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Orbit dynamic colored lights
      cyanLight.position.x = Math.sin(t * 0.8) * 22 + mouseX * 8;
      cyanLight.position.y = Math.cos(t * 0.7) * 14 + mouseY * 6;

      magentaLight.position.x = Math.cos(t * 0.9) * 24 - mouseX * 8;
      magentaLight.position.y = Math.sin(t * 0.8) * 16 - mouseY * 6;

      // Scroll camera navigation (cinematic slide)
      camera.position.z = 32 - scrollProgress * 12;
      camera.position.y = -scrollProgress * 8;
      camera.position.x = Math.sin(scrollProgress * Math.PI) * 4;
      mesh.rotation.y = mouseX * 0.25 + scrollProgress * 0.4;
      mesh.rotation.x = -0.35 + mouseY * 0.2 - scrollProgress * 0.2;

      // Deform Silk Wave Vertices
      const pArray = posAttr.array as Float32Array;
      const mouseWorldX = mouseX * 30;
      const mouseWorldY = mouseY * 20;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const ox = originalPos[i3];
        const oy = originalPos[i3 + 1];

        // Multi-frequency harmonic silk waves
        const wave1 = Math.sin(ox * 0.14 + t * 1.4) * 3.6;
        const wave2 = Math.cos(oy * 0.18 + t * 1.1) * 3.2;
        const wave3 = Math.sin((ox + oy) * 0.12 + t * 1.6) * 2.4;

        // Interactive mouse swell
        const dx = ox - mouseWorldX;
        const dy = oy - mouseWorldY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseLift = dist < 22 ? (1 - dist / 22) * 5.2 : 0;

        pArray[i3 + 2] = wave1 + wave2 + wave3 + mouseLift;
      }

      posAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onWindowMouseMove);
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Scope Calculation Memo
  const scopeDetails = useMemo(() => {
    let setup = 0;
    let monthly = 0;
    const items: string[] = [];

    if (selectedServices.marketing) {
      monthly += 2200;
      items.push('Performance Marketing & Paid Ads');
    }
    if (selectedServices.web) {
      setup += 3800;
      items.push('Bespoke Web Platform');
    }
    if (selectedServices.mobile) {
      setup += 5800;
      items.push('Cross-Platform Mobile App');
    }
    if (selectedServices.seo) {
      monthly += 1500;
      items.push('Programmatic SEO Engine');
    }
    if (selectedServices.brand) {
      setup += 1900;
      items.push('Brand System & Motion');
    }

    if (sprintVelocity === 'rush') {
      setup = Math.round(setup * 1.25);
    }

    return { setup, monthly, items };
  }, [selectedServices, sprintVelocity]);

  const handleApplyScope = () => {
    triggerAudio('click');
    const desc = `[Configured Scope: $${scopeDetails.setup.toLocaleString()} setup + $${scopeDetails.monthly.toLocaleString()}/mo // Capabilities: ${scopeDetails.items.join(', ')}]. Applying for founding partner cohort.`;
    setApplicantBrief(desc);
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerAudio('click');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#020306] text-slate-100 font-sans selection:bg-[#00f2fe] selection:text-black overflow-x-hidden">
      
      {/* Real-time 3D Kinetic Iridescent Ribbon Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-[1]" />

      {/* Subtle Procedural Film Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-4 z-[99]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Custom Magnetic Cursor */}
      <div
        className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isHovered ? 0 : 7,
          height: isHovered ? 0 : 7,
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          opacity: isHovered ? 0 : 1
        }}
      />
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 hidden md:flex"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          width: isHovered ? 78 : 40,
          height: isHovered ? 78 : 40,
          borderRadius: '50%',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          border: isHovered ? 'none' : '1px solid rgba(255, 255, 255, 0.25)'
        }}
      >
        {isHovered && (
          <span className="text-[8px] font-mono font-bold tracking-widest text-black uppercase">
            {cursorLabel || 'EXPLORE'}
          </span>
        )}
      </div>

      {/* Top Studio HUD Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 sm:px-12 py-6 flex items-center justify-between border-b border-white/5 backdrop-blur-xl bg-black/30">
        <a 
          href="#"
          onMouseEnter={() => onHover('ACESUTRA')}
          onMouseLeave={onLeave}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00f2fe] via-[#6366f1] to-[#d946ef] p-[1px]">
            <div className="w-full h-full bg-[#020306] rounded-[7px] flex items-center justify-center">
              <span className="font-extrabold text-xs text-[#00f2fe] tracking-tighter">A</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#00f2fe] transition-colors">
              Ace<span className="text-[#00f2fe]">Sutra</span>
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 -mt-1">
              CREATIVE GROWTH STUDIO
            </span>
          </div>
        </a>

        {/* Center Live Signals */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-slate-300">FOUNDING COHORT ACTIVE</span>
          </div>
          <div className="text-slate-700">|</div>
          <div>LAT 37.77° N</div>
          <div className="text-slate-700">|</div>
          <div className="text-[#00f2fe]">{liveTime}</div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              triggerAudio('click');
            }}
            onMouseEnter={() => onHover('AUDIO')}
            onMouseLeave={onLeave}
            className={`px-3 py-1.5 rounded-full text-[10px] font-mono uppercase border transition-all flex items-center gap-1.5 cursor-pointer ${
              soundEnabled ? 'border-[#00f2fe] text-[#00f2fe] bg-[#00f2fe]/10' : 'border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>AUDIO: {soundEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <a
            href="#contact"
            onMouseEnter={() => onHover('START')}
            onMouseLeave={onLeave}
            className="px-5 py-2 rounded-full text-xs font-mono text-black bg-white hover:bg-[#00f2fe] transition-all font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg shadow-white/5"
          >
            START PROJECT <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Cinematic Scroll Story */}
      <main className="relative z-10">

        {/* ACT 1: The Monolith Hero */}
        <section className="min-h-screen flex flex-col justify-between pt-40 pb-16 px-6 sm:px-12 max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#00f2fe] mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse"></span>
              <span>INDEPENDENT DIGITAL PRODUCTION & PERFORMANCE STUDIO</span>
            </div>

            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-extrabold tracking-tighter text-white mb-8 leading-[0.88] select-none">
              WE SHAPE <br />
              <span 
                className="text-transparent" 
                style={{ 
                  WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.45)',
                  filter: 'drop-shadow(0 0 35px rgba(0, 242, 254, 0.15))'
                }}
              >
                DIGITAL GRAVITY.
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end max-w-5xl mt-6">
              <div className="md:col-span-8">
                <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed">
                  AceSutra unites mathematical paid media acquisition, high-performance web engineering, and mobile app architecture into unfair commercial advantages. We craft what ordinary agencies lack the technical depth to build.
                </p>
              </div>

              <div className="md:col-span-4 space-y-3">
                <a
                  href="#disciplines"
                  onMouseEnter={() => onHover('DISCIPLINES')}
                  onMouseLeave={onLeave}
                  className="w-full block py-4 text-center rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00f2fe] transition-all shadow-xl"
                >
                  Explore Capabilities ↓
                </a>
                <a
                  href="#lab"
                  onMouseEnter={() => onHover('R&D')}
                  onMouseLeave={onLeave}
                  className="w-full block py-4 text-center rounded-xl bg-white/[0.03] border border-white/15 text-white font-mono text-xs uppercase tracking-wider hover:border-[#00f2fe] transition-all"
                >
                  Inspect The Lab (R&D)
                </a>
              </div>
            </div>
          </div>

          {/* Ribbon Hint Indicator */}
          <div className="pt-20 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-slate-500 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>
              <span>SCROLL TO ADVANCE CINEMATIC STORY // REAL-TIME 3D SILK PHYSICS ACTIVE</span>
            </div>
            <div>[ 01 / 05 // INTRODUCTION ]</div>
          </div>
        </section>

        {/* ACT 2: The Philosophy Narrative */}
        <section className="py-36 px-6 sm:px-12 max-w-6xl mx-auto">
          <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ MANIFESTO // 02 ]</span>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mt-6 mb-12 leading-[1.05]">
            THE CHASM BETWEEN CODE AND COMMERCE IS DEADLY.
          </h2>

          <div className="space-y-12 text-slate-300 text-lg sm:text-2xl font-light leading-relaxed border-l-2 border-[#00f2fe]/40 pl-6 sm:pl-10">
            <p>
              Most marketing agencies run ad campaigns to sluggish, bloated landing pages that hemorrhage conversions. Most software consultancies write clean code but have zero intuition for customer acquisition, psychology, or ROAS.
            </p>
            <p className="text-white font-normal">
              <span className="text-[#00f2fe]">AceSutra destroys this silo.</span> When the engineers optimizing your Core Web Vitals sit next to the media buyers scaling your Google and Meta budgets, revenue accelerates predictably.
            </p>
          </div>

          {/* Side by side comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5">
              <div className="text-xs font-mono text-rose-400 mb-4">[ THE CONVENTIONAL AGENCY ]</div>
              <ul className="text-sm text-slate-400 space-y-3 font-light">
                <li>✕ Pitched by founders, offloaded to junior interns</li>
                <li>✕ Slow 8-week turnarounds for basic CMS landing pages</li>
                <li>✕ Disconnected ad creatives that burn budget without tracking</li>
                <li>✕ Zero accountability for real customer acquisition cost (CAC)</li>
              </ul>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#00f2fe]/[0.03] border border-[#00f2fe]/30 backdrop-blur-xl">
              <div className="text-xs font-mono text-[#00f2fe] mb-4">[ THE ACESUTRA STANDARD ]</div>
              <ul className="text-sm text-slate-200 space-y-3 font-light">
                <li>✓ Direct founder-to-founder execution on every project</li>
                <li>✓ High-velocity agile sprints measured in days, not months</li>
                <li>✓ Custom Next.js, Three.js WebGL & Flutter architectures</li>
                <li>✓ Full accountability for bottom-line revenue, LTV, and ROAS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACT 3: Core Disciplines (Hover-Reveal Rows) */}
        <section id="disciplines" className="py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ CAPABILITIES // 03 ]</span>
              <h2 className="text-5xl sm:text-7xl font-extrabold text-white mt-3">OUR DISCIPLINES</h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-xs mt-4 md:mt-0">
              HOVER TO INSPECT DETAILED CAPABILITY SCOPE AND DELIVERY MATRICES.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Discipline 1 */}
            <div 
              onMouseEnter={() => onHover('ADS')}
              onMouseLeave={onLeave}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#00f2fe]/40 transition-all cursor-pointer group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <span className="text-xs font-mono text-[#00f2fe] pt-1">01</span>
                  <div>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white group-hover:text-[#00f2fe] transition-colors">
                      Performance Marketing & Media
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 font-light mt-2 max-w-2xl">
                      Laser-targeted paid media acquisition across Meta, Google PMax, TikTok, and YouTube Ads. Built with server-side CAPI event matching and predictive customer LTV modeling.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Meta CAPI</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Google Ads</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">TikTok Growth</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 font-semibold">
                    ROAS Scaling →
                  </span>
                </div>
              </div>
            </div>

            {/* Discipline 2 */}
            <div 
              onMouseEnter={() => onHover('CODE')}
              onMouseLeave={onLeave}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-indigo-400/40 transition-all cursor-pointer group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <span className="text-xs font-mono text-indigo-400 pt-1">02</span>
                  <div>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                      Full-Stack Web Engineering
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 font-light mt-2 max-w-2xl">
                      Ultra-fast web platforms built with Next.js, React, Tailwind, and Three.js WebGL. Designed for 100/100 Core Web Vitals, headless CMS autonomy, and frictionless checkout funnels.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Next.js & React</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Three.js 3D</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Headless Shopify</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-400/30 font-semibold">
                    Sub-Second Build →
                  </span>
                </div>
              </div>
            </div>

            {/* Discipline 3 */}
            <div 
              onMouseEnter={() => onHover('MOBILE')}
              onMouseLeave={onLeave}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-purple-400/40 transition-all cursor-pointer group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <span className="text-xs font-mono text-purple-400 pt-1">03</span>
                  <div>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                      Cross-Platform Mobile Apps
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 font-light mt-2 max-w-2xl">
                      Unified iOS and Android applications written with Flutter and React Native. Smooth 120Hz ProMotion micro-interactions, offline state synchronization, and biometric authorization.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Flutter & Dart</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Supabase Sync</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">In-App Subscriptions</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-400/30 font-semibold">
                    App Store Approval →
                  </span>
                </div>
              </div>
            </div>

            {/* Discipline 4 */}
            <div 
              onMouseEnter={() => onHover('SEO')}
              onMouseLeave={onLeave}
              className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-emerald-400/40 transition-all cursor-pointer group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <span className="text-xs font-mono text-emerald-400 pt-1">04</span>
                  <div>
                    <h3 className="text-3xl sm:text-5xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                      Brand Systems & Programmatic SEO
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 font-light mt-2 max-w-2xl">
                      Distinctive visual design identities, motion graphics, and programmatic entity-graph SEO architectures engineered to dominate Google’s AI Search Generative Experience (SGE).
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Design Systems</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Entity JSON-LD</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">Topic Silos</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 font-semibold">
                    Organic Moat →
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ACT 4: The AceSutra Lab (Cinematic R&D Showcase) */}
        <section id="lab" className="py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ R&D & BLUEPRINTS // 04 ]</span>
              <h2 className="text-5xl sm:text-7xl font-extrabold text-white mt-3">THE ACESUTRA LAB</h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-md mt-4 md:mt-0">
              WE DON’T SHOW GENERIC MOCKUPS. WE SHOW PROPRIETARY ARCHITECTURES BUILT IN-HOUSE. CLICK TO INSPECT SYSTEM SCHEMAS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLUEPRINTS.map(bp => (
              <div
                key={bp.id}
                onClick={() => {
                  setActiveBlueprint(bp);
                  triggerAudio('click');
                }}
                onMouseEnter={() => onHover('INSPECT')}
                onMouseLeave={onLeave}
                className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 hover:border-[#00f2fe]/60 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#00f2fe] mb-4">
                    <span>[ SYSTEM // {bp.num} ]</span>
                    <span className="flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30">
                      INSPECT BLUEPRINT <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#00f2fe] transition-colors mb-2">
                    {bp.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-6">{bp.tagline}</p>
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {bp.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-emerald-400">{bp.metrics}</span>
                  <span className="text-slate-500">{bp.techStack.slice(0, 3).join(' • ')}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACT 5: The Founding Partner Advantage */}
        <section className="py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
          <div className="p-8 sm:p-16 rounded-3xl border border-[#00f2fe]/30 bg-gradient-to-br from-[#00f2fe]/[0.05] via-black to-slate-950 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/40 text-[#00f2fe] text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-ping"></span>
              <span>EXCLUSIVE COHORT: ACCEPTING 4 FOUNDING CLIENTS FOR 2026</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
              THE FOUNDING PARTNER ADVANTAGE
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mb-12">
              Because AceSutra is selective and establishing its marquee flagship roster, we don't have junior account managers learning on your dime. <strong className="text-white">Your brand becomes our flagship case study.</strong> That means an extreme level of attention, obsessive engineering speed, and direct founder leadership.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono text-[#00f2fe] mb-2">01 // ZERO MIDDLEMEN</div>
                <div className="text-xl font-bold text-white mb-2">Founder-Only Execution</div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  You collaborate directly with principal software architects and growth strategists in a shared private Slack. No juniors playing telephone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono text-[#00f2fe] mb-2">02 // MAXIMUM SKIN IN GAME</div>
                <div className="text-xl font-bold text-white mb-2">Flagship Case Study Drive</div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  We have everything to prove. We treat your ad campaigns and web architecture as if our studio reputation depends on it—because it literally does.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="text-xs font-mono text-[#00f2fe] mb-2">03 // PREFERENTIAL ECONOMICS</div>
                <div className="text-xl font-bold text-white mb-2">Grandfathered Founding Rates</div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Founding partners receive preferential pilot pricing and retainer rates that will never be offered again once the 4 cohort slots are filled.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                onMouseEnter={() => onHover('APPLY')}
                onMouseLeave={onLeave}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00f2fe] transition-all text-center cursor-pointer shadow-xl"
              >
                Apply for Founding Partner Slot →
              </a>
              <span className="text-xs font-mono text-slate-500">Applications reviewed within 24 hours under mutual NDA.</span>
            </div>
          </div>
        </section>

        {/* ACT 6: Interactive Scope Configurator */}
        <section id="estimator" className="py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ CONFIGURATOR // 05 ]</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 mb-4">SYSTEM SCOPE CALCULATOR</h2>
            <p className="text-slate-400 text-sm font-light">
              Assemble your bespoke digital stack. Real-time scope, turnaround estimate, and investment calculation.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              <div className="lg:col-span-7 space-y-3.5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Configure Disciplines:</div>

                <label className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/40 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.marketing}
                      onChange={e => setSelectedServices({ ...selectedServices, marketing: e.target.checked })}
                      className="rounded text-[#00f2fe] focus:ring-0 bg-slate-900 border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Performance Media Buying (Meta & Google Ads)</div>
                      <div className="text-xs text-slate-500 font-mono">Full-funnel ads, CAPI server-side event tracking, daily optimization</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$2,200/mo</span>
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
                  <span className="text-xs font-mono text-[#00f2fe]">+$3,800</span>
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
                  <span className="text-xs font-mono text-[#00f2fe]">+$5,800</span>
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
                      <div className="text-sm font-bold text-white">Programmatic SEO Knowledge Graph Pipeline</div>
                      <div className="text-xs text-slate-500 font-mono">High-intent search rankings, schema validation</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$1,500/mo</span>
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
                      <div className="text-sm font-bold text-white">Brand System & High-Converting Motion Creatives</div>
                      <div className="text-xs text-slate-500 font-mono">Figma design system, video ads, motion assets</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#00f2fe]">+$1,900</span>
                </label>

                <div className="pt-2">
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Delivery Cadence:</label>
                  <select
                    value={sprintVelocity}
                    onChange={e => setSprintVelocity(e.target.value as 'standard' | 'rush')}
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
                    {scopeDetails.setup === 0 && scopeDetails.monthly === 0
                      ? 'SELECT DISCIPLINES'
                      : `$${scopeDetails.setup.toLocaleString()} SETUP ${scopeDetails.monthly > 0 ? `+ $${scopeDetails.monthly.toLocaleString()}/MO` : ''}`}
                  </div>
                  <div className="text-xs font-mono text-[#00f2fe] bg-white/[0.03] p-3 rounded-lg border border-white/5 leading-relaxed mb-6">
                    {scopeDetails.items.length > 0 ? `${scopeDetails.items.length} Disciplines Configured: ${scopeDetails.items.join(', ')}` : 'Select at least 1 discipline'}
                  </div>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed mb-6">
                    Transparent, contract-free terms. Founding clients receive direct access to founders and dedicated squad velocity.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleApplyScope}
                  className="w-full py-4 rounded-xl bg-[#00f2fe] hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#00f2fe]/20"
                >
                  Transfer Specs to Application ↓
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ACT 7: Founding Application Terminal */}
        <section id="contact" className="py-36 px-6 sm:px-12 max-w-4xl mx-auto border-t border-white/10">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-widest">[ INITIALIZE // 06 ]</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mt-2 mb-3">START A CONVERSATION</h2>
            <p className="text-xs font-mono text-slate-400">
              WE REVIEW EACH BRIEF DIRECTLY. EXPECT A FOUNDER REPLY WITHIN 24 HOURS.
            </p>
          </div>

          <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              
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
                    value={applicantUrl}
                    onChange={e => setApplicantUrl(e.target.value)}
                    placeholder="acme.ai or domain.com"
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#00f2fe] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Budget Tier</label>
                  <select
                    value={applicantTier}
                    onChange={e => setApplicantTier(e.target.value)}
                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-[#00f2fe] transition-colors"
                  >
                    <option value="pilot">$3,000 - $6,000 (Targeted Pilot Sprint)</option>
                    <option value="full">$6,000 - $14,000 (Full-Stack Engine)</option>
                    <option value="omni">$14,000 - $25,000 (Omnichannel Scale)</option>
                    <option value="enterprise">$25,000+ (Dedicated Squad)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Project Vision & Desired Outcomes *</label>
                <textarea
                  rows={4}
                  required
                  value={applicantBrief}
                  onChange={e => setApplicantBrief(e.target.value)}
                  placeholder="Describe your current bottleneck, target launch date, and desired outcome..."
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
                    <span>Transmit Brief to Founders</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2 border-t border-white/5">
                <span>// STRICT NDA BY DEFAULT</span>
                <span>// ZERO JUNIORS</span>
                <span>// DIRECT FOUNDER SLACK INTEGRATION</span>
              </div>
            </form>
          </div>
        </section>

      </main>

      {/* Blueprint Inspection Modal */}
      {activeBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4">
          <div className="p-8 sm:p-10 rounded-3xl max-w-2xl w-full bg-slate-900 border border-[#00f2fe]/40 relative shadow-2xl">
            <button
              onClick={() => setActiveBlueprint(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white font-mono text-xs p-2 flex items-center gap-1 cursor-pointer"
            >
              <X className="w-4 h-4" /> [ ESC // CLOSE ]
            </button>
            
            <div className="text-[10px] font-mono text-[#00f2fe] uppercase tracking-widest mb-2">[ ARCHITECTURAL BLUEPRINT // {activeBlueprint.num} ]</div>
            <h3 className="text-3xl font-extrabold text-white mb-2">{activeBlueprint.title}</h3>
            <p className="text-xs font-mono text-slate-400 mb-6">{activeBlueprint.tagline}</p>
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">{activeBlueprint.summary}</p>
            
            <div className="mb-6">
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">Core Architectural Specifications:</div>
              <ul className="text-xs text-slate-300 font-mono space-y-1.5 list-disc list-inside">
                {activeBlueprint.specs.map((sp, idx) => (
                  <li key={idx}>{sp}</li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-3">Verified Technology Stack:</div>
              <div className="flex flex-wrap gap-2">
                {activeBlueprint.techStack.map((s, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-[#00f2fe] border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submission Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
          <div className="p-8 rounded-3xl max-w-md w-full bg-slate-900 border border-[#00f2fe] text-center shadow-2xl relative">
            <div className="w-12 h-12 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center mx-auto mb-4 border border-[#00f2fe]/50">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-mono text-[#00f2fe] uppercase tracking-widest mb-1">[ TRANSMISSION CONFIRMED ]</div>
            <h3 className="text-2xl font-bold text-white mb-3">Brief Logged</h3>
            <p className="text-xs font-mono text-slate-300 leading-relaxed mb-6">
              Thank you for applying to the <span className="text-[#00f2fe]">AceSutra Founding Cohort</span>. A founder will review your project brief and reply within 24 hours.
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

      {/* Avant-Garde Minimalist Footer */}
      <footer className="border-t border-white/10 py-16 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">Ace<span className="text-[#00f2fe]">Sutra</span></div>
            <div className="text-xs font-mono text-slate-500 mt-1">THE FORMULA FOR UNFAIR DIGITAL ADVANTAGE.</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
            <a href="#disciplines" className="hover:text-[#00f2fe] transition-colors">CAPABILITIES</a>
            <a href="#lab" className="hover:text-[#00f2fe] transition-colors">THE LAB</a>
            <a href="#estimator" className="hover:text-[#00f2fe] transition-colors">SCOPE CALCULATOR</a>
            <a href="mailto:founders@acesutra.com" className="text-[#00f2fe] hover:underline">FOUNDERS@ACESUTRA.COM</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-4">
          <div>© 2026 ACESUTRA STUDIO. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <span>VOLUMETRIC KINETIC SILK 3D</span>
            <span>•</span>
            <span>100% PRINCIPAL-LED</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
