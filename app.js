// AceSutra Studio Interactive Layer (Lusion-Inspired)
// Custom Cursor, Web Audio Feedback, Interactive Lab, and Founding Cohort Terminal

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. Custom Smooth Magnetic Cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorFollower = document.querySelector('.cursor-follower');
  const cursorText = document.querySelector('.cursor-follower .cursor-text');
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let follower = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${mouse.x}px`;
      cursorDot.style.top = `${mouse.y}px`;
    }
  });

  // Linear interpolation for silky cursor lag
  function updateCursor() {
    follower.x += (mouse.x - follower.x) * 0.15;
    follower.y += (mouse.y - follower.y) * 0.15;

    if (cursorFollower) {
      cursorFollower.style.left = `${follower.x}px`;
      cursorFollower.style.top = `${follower.y}px`;
    }
    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  // Hover triggers for custom cursor
  const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .interactive-target');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover-active');
      const actionText = el.getAttribute('data-cursor') || 'EXPLORE';
      if (cursorText) cursorText.innerText = actionText;
      playSubtleSound('hover');
    });

    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover-active');
      if (cursorText) cursorText.innerText = '';
    });
  });

  // 2. Web Audio Subtle Sound Synthesizer (Lusion Signature)
  let audioContext = null;
  let soundEnabled = false;
  const soundToggleBtn = document.getElementById('soundToggleBtn');

  function initAudio() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
  }

  function playSubtleSound(type) {
    if (!soundEnabled || !audioContext) return;
    try {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      osc.connect(gain);
      gain.connect(audioContext.destination);

      const now = audioContext.currentTime;
      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.08);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (e) {
      // Audio fallback silent
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      const soundStatus = soundToggleBtn.querySelector('.sound-status');
      if (soundStatus) {
        soundStatus.innerText = soundEnabled ? 'AUDIO: ON' : 'AUDIO: OFF';
      }
      soundToggleBtn.classList.toggle('border-cyan-400', soundEnabled);
      soundToggleBtn.classList.toggle('text-cyan-400', soundEnabled);
      if (soundEnabled) playSubtleSound('click');
    });
  }

  // 3. Live UTC Studio Clock & System Coordinates
  const liveClockEl = document.getElementById('liveClock');
  function updateClock() {
    if (!liveClockEl) return;
    const now = new Date();
    const utcString = now.toUTCString().split(' ')[4] + ' UTC';
    liveClockEl.innerText = utcString;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // 4. WebGL Controls (Shape and Palette Switchers)
  const shapeBtns = document.querySelectorAll('.webgl-shape-btn');
  shapeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shapeBtns.forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
        b.classList.add('bg-white/5', 'border-white/10', 'text-slate-400');
      });
      btn.classList.add('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
      btn.classList.remove('bg-white/5', 'border-white/10', 'text-slate-400');

      const mode = btn.getAttribute('data-shape');
      if (window.setShapeMode) {
        window.setShapeMode(mode);
      }
      playSubtleSound('click');
    });
  });

  const paletteBtns = document.querySelectorAll('.webgl-palette-btn');
  paletteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      paletteBtns.forEach(b => b.classList.remove('ring-2', 'ring-white'));
      btn.classList.add('ring-2', 'ring-white');

      const palette = btn.getAttribute('data-palette');
      if (window.setWebGLPalette) {
        window.setWebGLPalette(palette);
      }
      playSubtleSound('click');
    });
  });

  // 5. The Lab: Interactive Concept Modal
  const conceptCards = document.querySelectorAll('.concept-card');
  const labModal = document.getElementById('labModal');
  const labModalClose = document.getElementById('labModalClose');
  const labModalTitle = document.getElementById('labModalTitle');
  const labModalSubtitle = document.getElementById('labModalSubtitle');
  const labModalDesc = document.getElementById('labModalDesc');
  const labModalStack = document.getElementById('labModalStack');

  const conceptData = {
    'vortex': {
      title: 'VORTEX // Algorithmic Ad Engine',
      subtitle: 'Multi-Touch Machine Learning Attribution & Real-Time ROAS Optimization',
      desc: 'Our proprietary marketing engine that bypasses traditional platform attribution delays. Tracks cross-channel touchpoints across Meta, Google PMax, and TikTok Ads, predicting Customer Lifetime Value (LTV) within 48 hours of acquisition.',
      stack: ['Meta Marketing API', 'Google Ads Scripts', 'Server-Side GTM', 'Next.js', 'Python ML']
    },
    'kinetic': {
      title: 'KINETIC // 3D Spatial E-Commerce',
      subtitle: 'Real-Time WebGL Product Visualization with Sub-Second Checkout',
      desc: 'A next-generation e-commerce platform built to replace slow, bloated storefronts. Combines interactive 60FPS 3D geometry manipulation with headless Shopify Plus and single-tap checkout.',
      stack: ['Three.js / WebGL', 'Shopify Storefront API', 'Tailwind CSS', 'Vercel Edge']
    },
    'synapse': {
      title: 'SYNAPSE OS // Cross-Platform Architecture',
      subtitle: 'Offline-First Mobile Framework with End-to-End Cryptographic Sync',
      desc: 'An enterprise-grade Flutter architecture template built for speed and reliability. Features biometrics, background sync, real-time push engines, and zero-latency state machines.',
      stack: ['Flutter 3.x', 'Dart', 'Supabase Realtime', 'AWS Lambda', 'WebSockets']
    },
    'neuro': {
      title: 'NEURO SEO // Semantic Knowledge Pipeline',
      subtitle: 'Programmatic Topic Modeling & High-Authority Content Generation',
      desc: 'A technical SEO architecture that reverse-engineers Google’s Search Generative Experience (SGE). Maps internal topical authority graphs and produces crawl-optimized, schema-verified landing architectures.',
      stack: ['Schema.org JSON-LD', 'Next.js ISR', 'Vector Database', 'Deep Search API']
    }
  };

  conceptCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-concept');
      const data = conceptData[id];
      if (data && labModal) {
        if (labModalTitle) labModalTitle.innerText = data.title;
        if (labModalSubtitle) labModalSubtitle.innerText = data.subtitle;
        if (labModalDesc) labModalDesc.innerText = data.desc;
        if (labModalStack) {
          labModalStack.innerHTML = data.stack.map(s => 
            `<span class="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-cyan-300 border border-white/10">${s}</span>`
          ).join('');
        }
        labModal.classList.remove('hidden');
        labModal.classList.add('flex');
        playSubtleSound('click');
      }
    });
  });

  if (labModalClose && labModal) {
    labModalClose.addEventListener('click', () => {
      labModal.classList.add('hidden');
      labModal.classList.remove('flex');
    });
  }

  // 6. Interactive Scope & Investment Estimator
  const estimatorServices = document.querySelectorAll('.scope-checkbox');
  const scopeTimeline = document.getElementById('scopeTimeline');
  const scopeTotal = document.getElementById('scopeTotal');
  const scopeDeliverables = document.getElementById('scopeDeliverables');
  const scopeApplyBtn = document.getElementById('scopeApplyBtn');

  function calculateScope() {
    let base = 0;
    let recurring = 0;
    let selectedNames = [];

    estimatorServices.forEach(cb => {
      if (cb.checked) {
        const price = parseInt(cb.getAttribute('data-price') || '0', 10);
        const type = cb.getAttribute('data-type');
        const label = cb.getAttribute('data-label');
        if (type === 'monthly') {
          recurring += price;
        } else {
          base += price;
        }
        selectedNames.push(label);
      }
    });

    const speed = scopeTimeline ? scopeTimeline.value : 'standard';
    let multiplier = 1.0;
    if (speed === 'rush') multiplier = 1.25;

    const totalBase = Math.round(base * multiplier);

    if (scopeTotal) {
      if (totalBase === 0 && recurring === 0) {
        scopeTotal.innerText = 'SELECT SPECIFICATIONS';
      } else if (totalBase > 0 && recurring > 0) {
        scopeTotal.innerText = `$${totalBase.toLocaleString()} SETUP + $${recurring.toLocaleString()}/MO`;
      } else if (totalBase > 0) {
        scopeTotal.innerText = `$${totalBase.toLocaleString()} FLAT INVESTMENT`;
      } else {
        scopeTotal.innerText = `$${recurring.toLocaleString()} / MONTH`;
      }
    }

    if (scopeDeliverables) {
      scopeDeliverables.innerText = selectedNames.length > 0 
        ? `${selectedNames.length} Systems Configured: ${selectedNames.join(', ')}`
        : 'Configure at least one system';
    }
  }

  estimatorServices.forEach(cb => cb.addEventListener('change', calculateScope));
  if (scopeTimeline) scopeTimeline.addEventListener('change', calculateScope);
  calculateScope();

  if (scopeApplyBtn) {
    scopeApplyBtn.addEventListener('click', () => {
      const notes = scopeDeliverables ? scopeDeliverables.innerText : '';
      const total = scopeTotal ? scopeTotal.innerText : '';
      const messageField = document.getElementById('applicantVision');
      if (messageField) {
        messageField.value = `[System Scope Configured: ${total} // ${notes}]. Looking to partner as a founding client.`;
      }
      const contactSection = document.getElementById('apply');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      playSubtleSound('click');
    });
  }

  // 7. Founding Cohort Terminal Application Form
  const appForm = document.getElementById('foundingClientForm');
  const appSuccess = document.getElementById('appSuccessModal');
  const appSuccessClose = document.getElementById('appSuccessClose');

  if (appForm) {
    appForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playSubtleSound('click');

      const submitBtn = appForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-flex items-center gap-2 font-mono text-xs">
          <svg class="animate-spin h-4 w-4 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          TRANSMITTING SPECIFICATIONS...
        </span>
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (appSuccess) {
          appSuccess.classList.remove('hidden');
          appSuccess.classList.add('flex');
        }
        appForm.reset();
        calculateScope();
      }, 1100);
    });
  }

  if (appSuccessClose && appSuccess) {
    appSuccessClose.addEventListener('click', () => {
      appSuccess.classList.add('hidden');
      appSuccess.classList.remove('flex');
    });
  }
});
