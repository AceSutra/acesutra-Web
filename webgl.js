// AceSutra WebGL 3D Interactive Engine (Inspired by Lusion.co)
// Real-time particle physics, morphing geometries, and reactive mouse force fields

(function() {
  let scene, camera, renderer, particles, geometry, material;
  let particleCount = 7500;
  let positions, originalPositions, velocities;
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;
  let isDragging = false, previousMousePosition = { x: 0, y: 0 };
  let currentShapeMode = 'torus'; // 'torus', 'sphere', 'wave'
  let currentPalette = 'cyan';
  let clock;

  const palettes = {
    cyan: { primary: 0x00f2fe, secondary: 0x4facfe, glow: 0x00c6ff },
    violet: { primary: 0xc084fc, secondary: 0x8b5cf6, glow: 0xec4899 },
    emerald: { primary: 0x00ff87, secondary: 0x60efff, glow: 0x10b981 },
    monolith: { primary: 0xffffff, secondary: 0x94a3b8, glow: 0x475569 }
  };

  function init() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas || !window.THREE) return;

    clock = new THREE.Clock();

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.z = 700;

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    createParticleSystem();
    setupEvents();
    animate();
  }

  // Generate particle coordinate shapes
  function getShapeCoordinates(mode, i) {
    let x = 0, y = 0, z = 0;

    if (mode === 'torus') {
      // Torus Knot parametric formula
      const u = (i / particleCount) * Math.PI * 2 * 3;
      const p = 2, q = 3;
      const r = 180 + Math.sin(i * 0.1) * 25;
      x = r * (2 + Math.cos(q * u)) * 0.5 * Math.cos(p * u);
      y = r * (2 + Math.cos(q * u)) * 0.5 * Math.sin(p * u);
      z = r * Math.sin(q * u) * 1.4 + (Math.random() - 0.5) * 45;
    } else if (mode === 'sphere') {
      // Organic Fibonnaci Spiral Sphere / Neural Cloud
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 240 + Math.sin(i * 0.05) * 35;
      x = radius * Math.cos(theta) * Math.sin(phi);
      y = radius * Math.sin(theta) * Math.sin(phi);
      z = radius * Math.cos(phi);
    } else if (mode === 'wave') {
      // Undulating Grid Wavefield
      const side = Math.floor(Math.sqrt(particleCount));
      const row = Math.floor(i / side);
      const col = i % side;
      const spacing = 18;
      x = (col - side / 2) * spacing;
      y = (Math.sin(col * 0.2) + Math.cos(row * 0.2)) * 60;
      z = (row - side / 2) * spacing;
    }

    return { x, y, z };
  }

  function createParticleSystem() {
    geometry = new THREE.BufferGeometry();
    positions = new Float32Array(particleCount * 3);
    originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    velocities = new Float32Array(particleCount * 3);

    const activeColor = palettes[currentPalette];
    const colorA = new THREE.Color(activeColor.primary);
    const colorB = new THREE.Color(activeColor.secondary);

    for (let i = 0; i < particleCount; i++) {
      const coords = getShapeCoordinates(currentShapeMode, i);

      const i3 = i * 3;
      positions[i3] = coords.x;
      positions[i3 + 1] = coords.y;
      positions[i3 + 2] = coords.z;

      originalPositions[i3] = coords.x;
      originalPositions[i3 + 1] = coords.y;
      originalPositions[i3 + 2] = coords.z;

      velocities[i3] = (Math.random() - 0.5) * 0.3;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.3;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.3;

      // Subtle gradient across particles
      const ratio = i / particleCount;
      const mixedColor = colorA.clone().lerp(colorB, Math.sin(ratio * Math.PI));
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle sprite using canvas
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    const gradient = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(200, 240, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(0, 242, 254, 0.25)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = gradient;
    pCtx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(pCanvas);

    material = new THREE.PointsMaterial({
      size: 4.8,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);
  }

  // Morph to new geometry mode smoothly
  window.setShapeMode = function(mode) {
    if (currentShapeMode === mode) return;
    currentShapeMode = mode;
    
    for (let i = 0; i < particleCount; i++) {
      const coords = getShapeCoordinates(mode, i);
      const i3 = i * 3;
      originalPositions[i3] = coords.x;
      originalPositions[i3 + 1] = coords.y;
      originalPositions[i3 + 2] = coords.z;
    }
  };

  // Change active color palette
  window.setWebGLPalette = function(paletteKey) {
    if (!palettes[paletteKey]) return;
    currentPalette = paletteKey;
    const activeColor = palettes[paletteKey];
    const colorA = new THREE.Color(activeColor.primary);
    const colorB = new THREE.Color(activeColor.secondary);
    const colors = geometry.attributes.color.array;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const ratio = i / particleCount;
      const mixedColor = colorA.clone().lerp(colorB, Math.sin(ratio * Math.PI));
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    geometry.attributes.color.needsUpdate = true;
  };

  function setupEvents() {
    window.addEventListener('resize', onWindowResize, false);

    // Mouse movement influence
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX - window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2);

      mouseX = (x / window.innerWidth) * 2;
      mouseY = -(y / window.innerHeight) * 2;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
      }
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousedown', (e) => {
      isDragging = true;
      document.body.classList.add('cursor-drag-mode');
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      document.body.classList.remove('cursor-drag-mode');
    });

    // Touch support for mobile
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseX = ((touch.clientX - window.innerWidth / 2) / window.innerWidth) * 2;
        mouseY = -((touch.clientY - window.innerHeight / 2) / window.innerHeight) * 2;
      }
    }, { passive: true });
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();
    const pos = geometry.attributes.position.array;

    // Organic rotation
    particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.05 + 0.0018;
    particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.05;
    particles.rotation.z = Math.sin(elapsedTime * 0.2) * 0.15;

    // Interactive wave and mouse repulsion effect
    const mouseWorldX = mouseX * 350;
    const mouseWorldY = mouseY * 350;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      // Smooth wave movement
      const wave = Math.sin(elapsedTime * 1.5 + ox * 0.008 + oy * 0.008) * 4;

      // Mouse repulsive force
      const dx = pos[i3] - mouseWorldX;
      const dy = pos[i3 + 1] - mouseWorldY;
      const distSq = dx * dx + dy * dy;

      if (distSq < 15000) {
        const force = (1 - distSq / 15000) * 18;
        pos[i3] += (dx / Math.sqrt(distSq)) * force;
        pos[i3 + 1] += (dy / Math.sqrt(distSq)) * force;
      } else {
        // Elastic return to original position
        pos[i3] += (ox - pos[i3]) * 0.06;
        pos[i3 + 1] += (oy + wave - pos[i3 + 1]) * 0.06;
        pos[i3 + 2] += (oz - pos[i3 + 2]) * 0.06;
      }
    }

    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  }

  // Initialize once Three.js is loaded
  if (window.THREE) {
    init();
  } else {
    window.addEventListener('load', init);
  }
})();
