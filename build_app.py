import re

# Read assets_b64.js
with open(r'C:\Users\vedan\.gemini\antigravity\scratch\acesutra-website\assets_b64.js', 'r', encoding='utf8') as f:
    assets_code = f.read()

# Replace 'export const' with 'const'
assets_code = assets_code.replace('export const', 'const')

code = '''import React, { useState } from 'react';
import {
  MessageCircle,
  Globe,
  Search,
  Check,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Menu,
  X,
  Smartphone,
  Star,
  Video,
  Zap,
  Shield,
  BarChart3,
  Layers,
  ExternalLink,
  Copy,
  Sparkles,
  Sliders,
  Activity
} from 'lucide-react';

// Embedded Official Visual Assets (Self-Contained for 1-Click Vercel Deployment)
''' + assets_code + '''

// Custom inline SVG for Instagram (lucide-react does not include brand icons)
const Instagram: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Official AceSutra Brand Logo Component
const AceSutraLogo: React.FC<{ showSubtext?: boolean }> = ({ showSubtext = true }) => (
  <div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden shrink-0 border border-white/20">
      <img src={LOGO_IMG} alt="AceSutra Official Logo" className="w-full h-full object-contain" />
    </div>
    {showSubtext && (
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            AceSutra
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase bg-white/[0.06] border border-white/10 px-2 py-0.5 rounded-md text-cyan-400">
            OS 2.4
          </span>
        </div>
        <span className="text-[11px] font-medium tracking-wide text-slate-400 -mt-0.5">
          Kharadi, Pune • Growth Studio
        </span>
      </div>
    )}
  </div>
);

// Stylized Founder Avatars (High-Aesthetic 3D Vector Tech Avatars)
const VedantAvatar: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <div className={`${className} rounded-2xl bg-gradient-to-br from-cyan-500/20 via-[#0E1422] to-blue-600/30 border border-cyan-400/40 p-1 relative flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.25)] shrink-0 overflow-hidden`}>
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="40" cy="40" r="38" fill="#080E1A" />
      <path d="M20 72C20 58 28 50 40 50C52 50 60 58 60 72" fill="#1E293B" />
      <circle cx="40" cy="34" r="16" fill="#38BDF8" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="2" />
      <circle cx="35" cy="33" r="3" fill="#FFFFFF" />
      <circle cx="45" cy="33" r="3" fill="#FFFFFF" />
      <path d="M36 41C38 43 42 43 44 41" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <rect x="30" y="29" width="10" height="8" rx="2" stroke="#38BDF8" strokeWidth="1.5" />
      <rect x="40" y="29" width="10" height="8" rx="2" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M32 20C34 16 46 16 48 20" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
    </svg>
    <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-cyan-400 border-2 border-[#080B11]"></span>
  </div>
);

const ShreyashAvatar: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
  <div className={`${className} rounded-2xl bg-gradient-to-br from-emerald-500/20 via-[#0E1422] to-teal-600/30 border border-emerald-400/40 p-1 relative flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.25)] shrink-0 overflow-hidden`}>
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="40" cy="40" r="38" fill="#071311" />
      <path d="M20 72C20 58 28 50 40 50C52 50 60 58 60 72" fill="#132E27" />
      <circle cx="40" cy="34" r="16" fill="#10B981" fillOpacity="0.25" stroke="#10B981" strokeWidth="2" />
      <circle cx="35" cy="33" r="3" fill="#FFFFFF" />
      <circle cx="45" cy="33" r="3" fill="#FFFFFF" />
      <path d="M36 41C38 43 42 43 44 41" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 34C26 25 32 18 40 18C48 18 54 25 54 34" stroke="#34D399" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="24" y="30" width="4" height="8" rx="2" fill="#10B981" />
      <rect x="52" y="30" width="4" height="8" rx="2" fill="#10B981" />
    </svg>
    <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#080B11]"></span>
  </div>
);

export const App: React.FC = () => {
  // Navigation & UI State
  const [activePage, setActivePage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('websites');

  // Contact Form State
  const [formName, setFormName] = useState<string>('');
  const [formBusiness, setFormBusiness] = useState<string>('');
  const [formPhone, setFormPhone] = useState<string>('');
  const [formNeed, setFormNeed] = useState<string>('Growth Engine (Marketing + Website)');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Interactive Micro-Tools State (Wiro.ae Signature Feature)
  const [auditCategory, setAuditCategory] = useState<string>('gym');
  const [auditScore, setAuditScore] = useState<number>(78);
  const [waPhone, setWaPhone] = useState<string>('918080187384');
  const [waText, setWaText] = useState<string>('Hi AceSutra, I want to book a free consultation for my business.');
  const [waCopied, setWaCopied] = useState<boolean>(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNav = (page: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCopyWaLink = () => {
    const link = 'https://wa.me/' + waPhone.replace(/\\D/g, '') + '?text=' + encodeURIComponent(waText);
    navigator.clipboard?.writeText(link);
    setWaCopied(true);
    setTimeout(() => setWaCopied(false), 2500);
  };

  const handleCategoryChange = (cat: string) => {
    setAuditCategory(cat);
    if (cat === 'gym') setAuditScore(84);
    else if (cat === 'dental') setAuditScore(91);
    else if (cat === 'salon') setAuditScore(76);
    else if (cat === 'restaurant') setAuditScore(82);
    else setAuditScore(88);
  };

  // Official Verified WhatsApp Link with Automated Greeting Message
  const WHATSAPP_URL = "https://wa.me/918080187384?text=" + encodeURIComponent("Hi AceSutra, I'm reaching out from your website. I'd like to talk about marketing and a website for my business in Pune.");

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 font-sans antialiased selection:bg-cyan-400 selection:text-black relative">
      
      {/* Floating WhatsApp Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 font-medium text-sm group"
      >
        <MessageCircle className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
        <span className="font-semibold tracking-wide">Direct WhatsApp</span>
      </a>

      {/* Glassmorphism Header (Wiro.ae Style) */}
      <header className="sticky top-0 z-40 bg-[#080B11]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo with Official 3D Graphic */}
          <button 
            onClick={() => handleNav('home')}
            className="text-left cursor-pointer group"
          >
            <AceSutraLogo />
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300">
            {[
              { id: 'home', label: 'Overview' },
              { id: 'marketing', label: 'Marketing' },
              { id: 'websites', label: 'Websites' },
              { id: 'apps', label: 'Apps' },
              { id: 'work', label: 'Case Studies' },
              { id: 'about', label: 'Founders' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => handleNav(tab.id)} 
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activePage === tab.id 
                    ? 'bg-white text-black font-bold shadow-md' 
                    : 'hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="px-4 py-2 rounded-full border border-white/15 hover:border-white/30 text-slate-200 hover:text-white font-medium text-xs tracking-wide transition-all cursor-pointer"
            >
              Get Free Audit
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-black hover:bg-slate-200 font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-1.5 hover:scale-105"
            >
              <span>Let's talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-6 pt-3 pb-8 bg-[#0D131F] border-b border-white/10 space-y-3 font-medium text-sm">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              <button onClick={() => handleNav('home')} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">Overview</button>
              <button onClick={() => handleNav('marketing')} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">Marketing</button>
              <button onClick={() => handleNav('websites')} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">Websites</button>
              <button onClick={() => handleNav('apps')} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">Custom Apps</button>
              <button onClick={() => handleNav('work')} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">Case Studies</button>
              <button onClick={() => handleNav('about')} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">Founders</button>
              <button onClick={() => handleNav('faq')} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">FAQ</button>
              <button onClick={() => handleNav('contact')} className="text-left py-2 px-3 rounded-lg bg-white/10 font-bold text-white">Contact</button>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full py-3.5 text-center bg-[#25D366] text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Say hi on WhatsApp (+91 80801 87384)</span>
            </a>
          </div>
        )}
      </header>

      {/* =========================================================================
          1. HOME PAGE (Wiro.ae Signature Operating System Aesthetic)
         ========================================================================= */}
      {activePage === 'home' && (
        <main>
          {/* Top Hero Section */}
          <section className="relative pt-20 pb-28 sm:pt-28 sm:pb-36 px-6 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />
            
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Floating Pill Badge (Wiro.ae Style) */}
              <div 
                onClick={() => handleNav('marketing')}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] hover:border-cyan-400/40 text-xs font-medium text-slate-200 mb-8 cursor-pointer transition-all hover:bg-white/[0.08] shadow-[0_0_20px_rgba(56,189,248,0.1)]"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-300 font-mono tracking-wide">OPERATING SYSTEM FOR LOCAL GROWTH</span>
                <span className="text-cyan-400 flex items-center gap-0.5 font-semibold">
                  Kharadi, Pune <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              
              {/* Massive Hero Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-8">
                The growth operating system <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                  for modern businesses.
                </span>
              </h1>

              {/* Subheadline with Honest Tone */}
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-12">
                Built in Kharadi, Pune for Indian businesses, and for anyone tired of juggling 10 different agencies, freelancers, and tabs. Websites, local marketing, WhatsApp engines, and live client reporting—unified under one roof.
              </p>

              {/* Primary Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <button 
                  onClick={() => handleNav('contact')} 
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-slate-200 font-extrabold text-sm tracking-wide transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start With a Free Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleNav('work')} 
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] border border-white/15 hover:border-white/30 hover:bg-white/[0.08] text-white font-bold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Explore Case Studies</span>
                </button>
              </div>

              {/* Micro Trust Markers */}
              <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400 mb-16">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Kharadi & Pune First</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>2 to 3 week turnaround</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% code ownership</span>
                </div>
              </div>

              {/* Interactive Hero Agency OS Dashboard Preview Mockup (Wiro.ae Signature UI) */}
              <div className="max-w-4xl mx-auto rounded-3xl bg-[#0E1422] border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden text-left">
                {/* Window Chrome Header */}
                <div className="px-5 py-3.5 bg-[#131B2E] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">acesutra-os // kharadi-pune-v2.4</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400">
                      <Activity className="w-3.5 h-3.5" /> Systems Active
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200">Kharadi, Pune</span>
                  </div>
                </div>

                {/* KPI Metrics Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/[0.08] divide-x divide-white/[0.08] text-center bg-[#0B0F19]">
                  <div className="p-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Google Maps Rank</div>
                    <div className="text-lg font-bold text-white mt-0.5 flex items-center justify-center gap-1">
                      <span>Top 3 Local</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Page Load Speed</div>
                    <div className="text-lg font-bold text-cyan-400 mt-0.5">
                      0.9s Ultra-Fast
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Client Ratings</div>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
                      <span>4.9 ★★★★★</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Monthly Analytics</div>
                    <div className="text-lg font-bold text-white mt-0.5 flex items-center justify-center gap-1">
                      <BarChart3 className="w-4 h-4 text-cyan-400" />
                      <span>100% Transparent</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Inner Workspace */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0E1422]">
                  {/* Left Column: Live Active Deliverables with Real Photos */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Live Client Deployments</span>
                      <span className="text-xs text-cyan-400 font-medium">Pune Portfolio</span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Gym Preview */}
                      <div className="p-3 rounded-2xl bg-[#141C2E] border border-white/[0.06] flex items-center justify-between hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-white/10">
                            <img src={GYM_IMG} alt="Club 360 Gym Pune" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">Club 360 Gym Pune</div>
                            <div className="text-xs text-slate-400">Gym Website + Trial Pass WhatsApp Flow</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Active • 1.1s Speed
                        </span>
                      </div>

                      {/* Dental Preview */}
                      <div className="p-3 rounded-2xl bg-[#141C2E] border border-white/[0.06] flex items-center justify-between hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-white/10">
                            <img src={DENTAL_IMG} alt="Dr. Joshi Dental Clinic" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">Dr. Joshi Dental Clinic</div>
                            <div className="text-xs text-slate-400">Google Maps Top 3 + Patient Trust Site</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          Rank #1 Local
                        </span>
                      </div>

                      {/* Salon Preview */}
                      <div className="p-3 rounded-2xl bg-[#141C2E] border border-white/[0.06] flex items-center justify-between hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-white/10">
                            <img src={SALON_IMG} alt="Geetanjali Salon Pune" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">Geetanjali Salon Pune</div>
                            <div className="text-xs text-slate-400">Aesthetic Curation + Booking Engine</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          Luxury Feed
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Instant WhatsApp Lead Preview */}
                  <div className="md:col-span-5 p-5 rounded-2xl bg-[#131A2A] border border-white/[0.08] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono uppercase text-slate-400">Client Review & Approval</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                          Passwordless Link
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white mb-1">
                        Clean 1-Tap Client Deliverables
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Just like Wiro Transfer, your clients view designs, test staging sites, and approve deliverables via a simple link—no complicated logins needed.
                      </p>
                      
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 break-all mb-3 flex items-center justify-between">
                        <span>acesutra.vercel.app/preview/club360</span>
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                      </div>
                    </div>

                    <button 
                      onClick={() => handleNav('contact')} 
                      className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Deploy for your business</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
              2. "REPLACE YOUR FRAGMENTED STACK" SECTION (Wiro.ae Signature Feature)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B0F19] border-t border-white/[0.08] relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  The Problem Solved
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-5">
                  Replace 5 disconnected vendors <br className="hidden sm:inline" />
                  with 1 growth operating system.
                </h2>
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                  Most local businesses in Pune lose customers every single day because their digital stack is broken across different people who don't talk to each other.
                </p>
              </div>

              {/* Side-by-Side Comparison Matrix */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* The Fragmented Old Way */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-rose-500/20 relative">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-rose-400">The Fragmented Chaos</span>
                      <h3 className="text-2xl font-bold text-white mt-1">5 Different Vendors</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
                      ✕
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-slate-400">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✕</div>
                      <div>
                        <strong className="text-slate-200">Freelance Web Developer:</strong> Disappears after launching a slow WordPress template. Doesn't understand marketing or SEO.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✕</div>
                      <div>
                        <strong className="text-slate-200">Social Media Agency:</strong> Posts generic graphic templates on Instagram that get zero customer calls.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✕</div>
                      <div>
                        <strong className="text-slate-200">No Google Maps Strategy:</strong> Zero fresh 5-star reviews. When someone searches nearby in Pune, your competitors get the call.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✕</div>
                      <div>
                        <strong className="text-slate-200">Manual WhatsApp Chaos:</strong> Inquiries come in while you are busy running your shop or clinic, leaving customers waiting.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✕</div>
                      <div>
                        <strong className="text-slate-200">Confusing Jargon & Surprise Bills:</strong> Big promises, zero monthly transparency on real revenue.
                      </div>
                    </div>
                  </div>
                </div>

                {/* The AceSutra Operating System Way */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#121A2E] border border-cyan-500/30 relative shadow-[0_15px_40px_rgba(56,189,248,0.08)]">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">The Unified Studio</span>
                      <h3 className="text-2xl font-bold text-white mt-1">AceSutra Growth OS</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                      ✓
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <strong className="text-white">Sub-Second Modern Website:</strong> Custom coded, mobile-first, and 100% owned by you. Ready in 2-3 weeks.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <strong className="text-white">Google Maps #1 Strategy:</strong> Structured review collection engine and keyword dominance for Kharadi and your Pune locality.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <strong className="text-white">Instagram Reels That Book:</strong> High-aesthetic video scripts and posts that turn casual scrollers into walking customers.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <strong className="text-white">Instant WhatsApp Automation:</strong> Pre-programmed instant replies with catalog, pricing, location, and timing.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                      <div>
                        <strong className="text-white">Direct Founder Partnership:</strong> Talk directly with Vedant & Shreyash. Clear flat quotes, zero hidden charges.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              3. BENTO GRID CORE SOLUTIONS SUITE (Wiro.ae Style)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
                Everything your business needs to grow.
              </h2>
              <p className="text-base sm:text-lg text-slate-400">
                Engineered with precision for Pune gym owners, doctors, clinic directors, salons, restaurants, and retail founders.
              </p>
            </div>

            {/* Asymmetrical Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Card 1: Websites (Span 7) */}
              <div 
                onClick={() => handleNav('websites')}
                className="md:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] hover:border-cyan-400/30 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase">Engineered for Phones</span>
                    <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-slate-300">2-3 Weeks</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Sub-Second Mobile Websites
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-xl mb-6">
                    A website that feels as fast as a native app. Sub-second page loads, 1-tap WhatsApp and call buttons, interactive review proof, and 100% ownership of your code and domain.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Lighthouse Score: 98-100 Performance</span>
                  </div>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card 2: Google Maps Dominance (Span 5) */}
              <div 
                onClick={() => handleNav('marketing')}
                className="md:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] hover:border-emerald-400/30 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Search className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 uppercase mb-2 block">Local SEO Strategy</span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Google Maps #1 Rank
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">
                    When someone in Kharadi or nearby Pune searches "dentist near me" or "gym nearby", your business needs to be in the Top 3. We audit, optimize, and rank your profile.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#141C2E] border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-mono">Ranking Boost Radar</span>
                  <span className="text-emerald-400 font-bold font-mono">+140% Calls</span>
                </div>
              </div>

              {/* Card 3: Instagram & Reels (Span 5) */}
              <div 
                onClick={() => handleNav('marketing')}
                className="md:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] hover:border-pink-400/30 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-pink-400 uppercase mb-2 block">Visual Storytelling</span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Reels That Actually Book
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">
                    No boring stock photos. We script and produce high-aesthetic short reels that capture real before-and-after results and client testimonials.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Video className="w-4 h-4 text-purple-400" />
                  <span>Scripted • Edited • Hyper-local Reach</span>
                </div>
              </div>

              {/* Card 4: WhatsApp Automation & Apps (Span 7) */}
              <div 
                onClick={() => handleNav('apps')}
                className="md:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] hover:border-purple-400/30 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-purple-400 uppercase">Automation Engine</span>
                    <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Zero Code Required</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    WhatsApp Auto-Replies & Custom Apps
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base max-w-xl mb-6">
                    Never leave an inquiry waiting. Automated greeting flows with your menu, pricing, timing, and address. Need custom appointment booking or customer portals? We build full-stack apps.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Instant Response Time: &lt; 5 seconds</span>
                  </div>
                  <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore Apps <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
              4. INTERACTIVE FEATURE SUITES TABS (Deep Dive into Services)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B0F19] border-t border-b border-white/[0.08]">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  Interactive Deep Dive
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-3">
                  Explore by Service Pillar
                </h2>
                <p className="text-slate-400 text-sm">
                  Click through to see the exact deliverables included in each package.
                </p>
              </div>

              {/* Tabs Bar */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                {[
                  { id: 'websites', label: 'Websites & Portals' },
                  { id: 'marketing', label: 'Local Marketing & SEO' },
                  { id: 'apps', label: 'Custom App Architecture' },
                  { id: 'automations', label: 'WhatsApp Automations' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                        : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1422] border border-white/[0.08]">
                {activeTab === 'websites' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <span className="text-xs font-mono text-cyan-400 uppercase">Website Engineering</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Your 24/7 Digital Shop Window
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        In Pune, over 85% of local searches happen on mobile phones. If your site takes more than 3 seconds to load or has tiny unclickable buttons, prospective clients bounce immediately.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Sub-second mobile speed</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>1-Tap WhatsApp chat button</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Google Maps & reviews integrated</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>2 to 3 week turnaround</span>
                        </div>
                      </div>
                      <div className="pt-4">
                        <button 
                          onClick={() => handleNav('websites')}
                          className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-slate-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Explore Website Packages</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-[#141C2E] border border-white/[0.08] space-y-3 font-mono text-xs text-slate-300">
                      <div className="text-slate-400 border-b border-white/10 pb-2">Technical Benchmark</div>
                      <div className="flex justify-between py-1"><span>Framework</span><span className="text-white">React 19 / Vite</span></div>
                      <div className="flex justify-between py-1"><span>Hosting</span><span className="text-white">Global Edge CDN</span></div>
                      <div className="flex justify-between py-1"><span>Mobile Score</span><span className="text-emerald-400">99 / 100</span></div>
                      <div className="flex justify-between py-1"><span>Domain & Code</span><span className="text-cyan-400">100% Client Owned</span></div>
                    </div>
                  </div>
                )}

                {activeTab === 'marketing' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <span className="text-xs font-mono text-emerald-400 uppercase">Growth & SEO</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Get Found. Get Picked. Get Busy.
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        We don't post useless inspirational quotes. We manage your Google Business Profile so you show up #1 when nearby customers search, produce reels that highlight your real services, and run targeted local ads.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Google Maps profile optimization</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>5-Star review collection system</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Scripted local Instagram reels</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>5-10 km radius hyper-local ads</span>
                        </div>
                      </div>
                      <div className="pt-4">
                        <button 
                          onClick={() => handleNav('marketing')}
                          className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-slate-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Explore Marketing Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-[#141C2E] border border-white/[0.08] space-y-3 font-mono text-xs text-slate-300">
                      <div className="text-slate-400 border-b border-white/10 pb-2">Target Metric Projections</div>
                      <div className="flex justify-between py-1"><span>Map Visibility</span><span className="text-emerald-400">+120% to +180%</span></div>
                      <div className="flex justify-between py-1"><span>Direct Phone Calls</span><span className="text-white">+45% Month 1</span></div>
                      <div className="flex justify-between py-1"><span>Target Radius</span><span className="text-white">Pune 5-10 km</span></div>
                      <div className="flex justify-between py-1"><span>Monthly Report</span><span className="text-cyan-400">Plain Words & Calls</span></div>
                    </div>
                  </div>
                )}

                {activeTab === 'apps' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <span className="text-xs font-mono text-purple-400 uppercase">Custom Applications</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Got a Big Idea? Let's Engineer It.
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        For businesses that need more than a marketing site. Appointment booking systems, customer membership portals, inventory ordering apps, and internal workflow software.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Custom booking & appointment flows</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Cross-platform Android & iOS support</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Secure database & client authentication</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>No unnecessary monthly subscription bloat</span>
                        </div>
                      </div>
                      <div className="pt-4">
                        <button 
                          onClick={() => handleNav('apps')}
                          className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-slate-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Tell Us Your App Idea</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-[#141C2E] border border-white/[0.08] space-y-3 font-mono text-xs text-slate-300">
                      <div className="text-slate-400 border-b border-white/10 pb-2">Custom Software Specs</div>
                      <div className="flex justify-between py-1"><span>Architecture</span><span className="text-white">Full-Stack Cloud</span></div>
                      <div className="flex justify-between py-1"><span>Security</span><span className="text-emerald-400">Encrypted Endpoints</span></div>
                      <div className="flex justify-between py-1"><span>Admin Dashboard</span><span className="text-cyan-400">Included</span></div>
                      <div className="flex justify-between py-1"><span>Consultation</span><span className="text-white">Free Initial Scope</span></div>
                    </div>
                  </div>
                )}

                {activeTab === 'automations' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <span className="text-xs font-mono text-emerald-400 uppercase">WhatsApp Engine</span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        24/7 Instant WhatsApp Lead Capture
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Never lose a customer who texts at 11 PM. Our automated flows instantly welcome them, provide your service pricing list, location directions, and allow them to schedule a visit in 2 taps.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Instant auto-greetings under 5 seconds</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Service catalogue & price list delivery</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Google Maps clinic/gym location drop</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03]">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Post-service review collection reminders</span>
                        </div>
                      </div>
                      <div className="pt-4">
                        <a 
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-colors inline-flex items-center gap-2 shadow-lg"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Test WhatsApp Flow</span>
                        </a>
                      </div>
                    </div>
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-[#141C2E] border border-white/[0.08] space-y-3 font-mono text-xs text-slate-300">
                      <div className="text-slate-400 border-b border-white/10 pb-2">Response Speed Comparison</div>
                      <div className="flex justify-between py-1"><span>Manual Replying</span><span className="text-rose-400">45 - 180 min</span></div>
                      <div className="flex justify-between py-1"><span>AceSutra Engine</span><span className="text-emerald-400">&lt; 5 seconds</span></div>
                      <div className="flex justify-between py-1"><span>Lead Conversion</span><span className="text-cyan-400">+65% Increase</span></div>
                      <div className="flex justify-between py-1"><span>Setup Time</span><span className="text-white">Included in Build</span></div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </section>

          {/* =========================================================================
              5. SIGNATURE BUILT-IN FREE TOOLS (Wiro.ae Signature Feature)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                Interactive Utilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
                Built-in Free Growth Tools
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Just like Wiro provides free tools for agencies, AceSutra provides instant interactive utilities for local business owners. No signup required.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tool 1: Local SEO & Online Health Audit Simulator */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-cyan-400 uppercase">Tool 01 // Free Audit</span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Live Calculator
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Local SEO Health Scorecard
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Select your business category to preview target score benchmarks for Kharadi & Pune competitors.
                  </p>

                  {/* Category Buttons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      { id: 'gym', label: 'Gym & Fitness' },
                      { id: 'dental', label: 'Dental Clinic' },
                      { id: 'salon', label: 'Salon & Spa' },
                      { id: 'restaurant', label: 'Cafe / Dining' }
                    ].map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          auditCategory === cat.id
                            ? 'bg-cyan-500 text-black font-bold'
                            : 'bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Score Meter */}
                  <div className="p-5 rounded-2xl bg-[#141C2E] border border-white/5 space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-300">Estimated Target Score</span>
                      <span className="text-2xl font-extrabold text-emerald-400 font-mono">{auditScore} / 100</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${auditScore}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>✓ Google Profile Claimed</span>
                      <span>✓ Fast Mobile Site</span>
                      <span>✓ 40+ 5-Star Reviews</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Full In-Depth Audit Report</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Tool 2: WhatsApp 1-Tap Link Generator */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-emerald-400 uppercase">Tool 02 // Link Builder</span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      1-Tap Generator
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Instant WhatsApp Link Generator
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Create clean `wa.me` links with pre-filled messages for your Instagram bio, Google Maps listing, or SMS campaigns.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Mobile Number (with country code 91)</label>
                      <input 
                        type="text" 
                        value={waPhone} 
                        onChange={(e) => setWaPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-emerald-400"
                        placeholder="918080187384"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Pre-filled Greeting Message</label>
                      <input 
                        type="text" 
                        value={waText} 
                        onChange={(e) => setWaText(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-400"
                        placeholder="Hi AceSutra, I want to book a free consultation for my business."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleCopyWaLink}
                    className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {waCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{waCopied ? 'Link Copied to Clipboard!' : 'Copy wa.me Link'}</span>
                  </button>
                  <a
                    href={`https://wa.me/${waPhone.replace(/\\D/g, '')}?text=${encodeURIComponent(waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    title="Test Link in WhatsApp"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
              6. CASE STUDIES & SAMPLE WORK (Real Attached Images from User)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B0F19] border-t border-b border-white/[0.08]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  Recent Work
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
                  Pune Case Studies
                </h2>
                <p className="text-slate-400 text-sm sm:text-base">
                  Real client concepts engineered for high-intent conversion and local dominance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Case 1: Club 360 Gym */}
                <div 
                  onClick={() => setSelectedCaseStudy('apex')}
                  className="rounded-3xl bg-[#0E1422] border border-white/[0.08] overflow-hidden hover:border-amber-400/40 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="h-56 relative overflow-hidden">
                      <img 
                        src={GYM_IMG} 
                        alt="Club 360 Gym Pune" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-[#0E1422]/40 to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase bg-black/75 px-3 py-1 rounded-full text-amber-300 border border-amber-400/30 backdrop-blur-md">
                          Kharadi & Pune
                        </span>
                        <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white/90 backdrop-blur-md">Fitness</span>
                      </div>
                      <div className="absolute bottom-3 left-6 right-6">
                        <h4 className="text-2xl font-black text-white">Club 360 Gym</h4>
                        <p className="text-xs text-amber-200 mt-0.5">High-Speed Mobile Site + Pass Booking</p>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Speed</span>
                          <strong className="text-white text-sm">1.1s Load</strong>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-slate-400 block text-[10px]">WhatsApp Leads</span>
                          <strong className="text-emerald-400 text-sm">+140% Inquiries</strong>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Bold dark fitness aesthetic with trainer batch schedules, equipment showcases, and 1-tap WhatsApp free trial passes.
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View Case Study Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Case 2: Dr. Joshi Dental Clinic */}
                <div 
                  onClick={() => setSelectedCaseStudy('joshi')}
                  className="rounded-3xl bg-[#0E1422] border border-white/[0.08] overflow-hidden hover:border-sky-400/40 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="h-56 relative overflow-hidden">
                      <img 
                        src={DENTAL_IMG} 
                        alt="Dr. Joshi Dental Clinic" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-[#0E1422]/40 to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase bg-black/75 px-3 py-1 rounded-full text-sky-300 border border-sky-400/30 backdrop-blur-md">
                          Kharadi & Pune
                        </span>
                        <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white/90 backdrop-blur-md">Healthcare</span>
                      </div>
                      <div className="absolute bottom-3 left-6 right-6">
                        <h4 className="text-2xl font-black text-white">Dr. Joshi Dental</h4>
                        <p className="text-xs text-sky-200 mt-0.5">Google Maps #1 + Patient Trust Portal</p>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Google Rank</span>
                          <strong className="text-white text-sm">#1 in Locality</strong>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Patient Rating</span>
                          <strong className="text-emerald-400 text-sm">4.9 ★ (120+)</strong>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Trust-first clinic digital presence with verified patient reviews, equipment photography, doctor credentials, and direct calling.
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View Case Study Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Case 3: Geetanjali Salon & Spa */}
                <div 
                  onClick={() => setSelectedCaseStudy('glow')}
                  className="rounded-3xl bg-[#0E1422] border border-white/[0.08] overflow-hidden hover:border-rose-400/40 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="h-56 relative overflow-hidden">
                      <img 
                        src={SALON_IMG} 
                        alt="Geetanjali Salon Pune" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-[#0E1422]/40 to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase bg-black/75 px-3 py-1 rounded-full text-rose-300 border border-rose-400/30 backdrop-blur-md">
                          Kharadi & Pune
                        </span>
                        <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white/90 backdrop-blur-md">Salon & Spa</span>
                      </div>
                      <div className="absolute bottom-3 left-6 right-6">
                        <h4 className="text-2xl font-black text-white">Geetanjali Salon</h4>
                        <p className="text-xs text-rose-200 mt-0.5">Aesthetic Feed + Weekend Booking Engine</p>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Reel Views</span>
                          <strong className="text-white text-sm">45k+ Organic</strong>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                          <span className="text-slate-400 block text-[10px]">Weekend Bookings</span>
                          <strong className="text-emerald-400 text-sm">Full Capacity</strong>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Clean aesthetic social curation, storefront visual highlights, transparent price menus, and instant WhatsApp appointment slots.
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View Case Study Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Case Study Modal with High-Res Image Display */}
              {selectedCaseStudy && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                  <div className="max-w-xl w-full p-6 sm:p-8 rounded-3xl bg-[#0E1422] border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                    <button 
                      onClick={() => setSelectedCaseStudy(null)}
                      className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="h-44 rounded-2xl overflow-hidden mb-4 border border-white/10 relative">
                      <img 
                        src={selectedCaseStudy === 'apex' ? GYM_IMG : selectedCaseStudy === 'joshi' ? DENTAL_IMG : SALON_IMG} 
                        alt="Case Study Detail" 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] to-transparent" />
                    </div>
                    
                    <span className="text-xs font-mono uppercase text-cyan-400">Detailed Case Study</span>
                    <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                      {selectedCaseStudy === 'apex' && 'Club 360 Gym Pune — Complete Digital Growth Engine'}
                      {selectedCaseStudy === 'joshi' && 'Dr. Joshi Dental Clinic — Top 3 Local Maps Pack'}
                      {selectedCaseStudy === 'glow' && 'Geetanjali Salon — Luxury Aesthetic Feed & Booking'}
                    </h3>

                    <div className="space-y-3 text-xs text-slate-300 leading-relaxed mb-6">
                      <p>
                        <strong>The Challenge:</strong> Local competitors were running aggressive discount promotions while the business lacked an ultra-fast mobile landing page and structured review system.
                      </p>
                      <p>
                        <strong>The AceSutra Solution:</strong> Built a custom mobile-first website with sub-1.2s loading speed, optimized their Google Business Profile for primary local keywords, created scripted reels highlighting services, and deployed a 24/7 WhatsApp auto-reply engine.
                      </p>
                      <p>
                        <strong>The Measurable Result:</strong> Consistent first-page visibility in Pune, +140% inquiry increase in the first 30 days, and direct client bookings via WhatsApp.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => { setSelectedCaseStudy(null); handleNav('contact'); }}
                        className="flex-1 py-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        Build This For My Business
                      </button>
                      <button 
                        onClick={() => setSelectedCaseStudy(null)}
                        className="px-5 py-3 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* View Full Work CTA */}
              <div className="text-center">
                <button 
                  onClick={() => handleNav('work')} 
                  className="px-8 py-3.5 rounded-full border border-white/20 hover:border-white text-white font-bold text-xs tracking-wider uppercase transition-all cursor-pointer inline-flex items-center gap-2 hover:bg-white/5"
                >
                  <span>Explore All Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================================
              7. TRANSPARENT 3-TIER PRICING (Wiro.ae Style Flat Packages)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                Simple Pricing
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
                Clear flat packages. No surprises.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                You know the exact investment before we write a single line of code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Tier 1: Local Presence */}
              <div className="p-8 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">Starter Tier</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Local Presence</h3>
                  <p className="text-xs text-slate-400 mb-6">Essential setup for local Pune shops and service providers to get on the map.</p>
                  
                  <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Google Business Profile Setup & SEO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>5-Star Google Review Collection QR</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>1-Page Fast Mobile Landing Page</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>1-Tap WhatsApp Direct Link</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleNav('contact')} 
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Get Quote for Starter
                </button>
              </div>

              {/* Tier 2: Growth Engine (Most Popular) */}
              <div className="p-8 rounded-3xl bg-[#131C30] border-2 border-cyan-400/50 shadow-[0_0_35px_rgba(56,189,248,0.15)] flex flex-col justify-between relative">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-cyan-400">Complete Engine</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Growth Studio Retainer</h3>
                  <p className="text-xs text-slate-300 mb-6">Everything combined: custom website + local SEO + Instagram curation + monthly updates.</p>
                  
                  <div className="space-y-3 text-xs text-slate-200 border-t border-white/10 pt-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Full Multi-Section Custom Website</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Sub-second mobile speed optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Google Maps #1 ranking strategy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Instagram aesthetic feed & reel scripts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>24/7 WhatsApp auto-replies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Transparent monthly progress report</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleNav('contact')} 
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-extrabold text-xs transition-colors cursor-pointer shadow-lg"
                >
                  Start With Growth Engine
                </button>
              </div>

              {/* Tier 3: Custom Architecture & Scale */}
              <div className="p-8 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">Advanced Scale</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Custom App & Scale</h3>
                  <p className="text-xs text-slate-400 mb-6">For multi-location brands, healthcare clinics, and custom booking apps.</p>
                  
                  <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Custom web application / portal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Patient / client booking flow</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Multi-location Google SEO management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>High-volume WhatsApp workflow sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Dedicated technical growth partner</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleNav('contact')} 
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Scope Custom Project
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================================
              8. FOUNDERS & "BUILT IN PUNE" (With Stylized 3D Avatars)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B0F19] border-t border-b border-white/[0.08]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  Meet the Studio
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
                  Built in Kharadi, Pune.
                </h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  No account managers, no junior interns, no passing the buck. You work directly with the two people who actually do the work.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                {/* Vedant Gund */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-5">
                  <VedantAvatar className="w-18 h-18" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Vedant Gund</h3>
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Marketing & Client Acquisition</p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Leads client strategy, local Google Maps ranking algorithms, Meta ad campaign budgeting, and direct communication. Focused on making sure every rupee spent brings real footfall and calls.
                    </p>
                  </div>
                </div>

                {/* Shreyash Gund */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-5">
                  <ShreyashAvatar className="w-18 h-18" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Shreyash Gund</h3>
                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Websites, Engineering & Apps</p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Leads code architecture, sub-second web performance, modern React UI engineering, custom mobile apps, and WhatsApp automations. Focused on building websites that never crash or lag.
                    </p>
                  </div>
                </div>
              </div>

              {/* Three Core Principles */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08]">
                <h3 className="text-lg font-bold text-white mb-6 font-mono text-center sm:text-left uppercase tracking-wider">
                  Our Uncompromising Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <div className="text-amber-400 font-bold text-base mb-1 flex items-center gap-2">
                      <Shield className="w-4 h-4" /> 100% Honest
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      No fabricated numbers or false guarantees. If an idea won't bring you customers, we tell you straight away.
                    </p>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-base mb-1 flex items-center gap-2">
                      <Sliders className="w-4 h-4" /> Radical Simplicity
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Zero technical jargon. Plain words, easy milestones, and simple monthly reports showing real customer calls.
                    </p>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-bold text-base mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Delivered On Time
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      When we agree on a 2 to 3 week delivery timeline, we launch on time without excuses.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
              9. FAQ ACCORDION (Plain Words)
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Knowledge Base
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-400 text-sm">
                Straightforward answers to the questions Pune business owners ask us most.
              </p>
            </div>

            <div className="space-y-4 mb-16">
              {[
                {
                  q: "How much does a website or marketing project cost?",
                  a: "We give you a transparent, fixed quote in writing after a quick free chat. No surprise hourly charges, no hidden technical maintenance fees. You know the exact cost before we start."
                },
                {
                  q: "How long does it take from start to launch?",
                  a: "Most websites are live within 2 to 3 weeks. Marketing campaigns and Google Maps optimizations begin within the first 5 business days. Custom full-stack apps take slightly longer depending on the exact scope."
                },
                {
                  q: "Do I need to understand technical coding or marketing jargon?",
                  a: "Not at all. You just tell us what your business does and where you want more customers. We handle the code, domains, hosting, SEO, and ads, explaining everything in plain everyday words."
                },
                {
                  q: "Who actually owns my website and domain name?",
                  a: "You do, 100%. You own the domain name, the source code, and all accounts. We never lock you into proprietary closed systems."
                },
                {
                  q: "What happens when I need to change prices, timings, or photos later?",
                  a: "We assist with regular updates. Simply message us on WhatsApp with the new details and we apply them promptly."
                },
                {
                  q: "Do you work exclusively with businesses in Pune?",
                  a: "Kharadi, Pune is our home base! We love meeting local Pune clients in person across Kharadi, Kothrud, Baner, Viman Nagar, Kalyani Nagar, and PCMC. We also work seamlessly online with clients across India."
                },
                {
                  q: "What are your payment terms?",
                  a: "Simple milestones: 50% upfront to kick off architecture and design, and the remaining 50% only when the website is live, fully verified, and you are 100% satisfied."
                },
                {
                  q: "Can you guarantee a specific number of new clients?",
                  a: "Any agency promising a guaranteed number of clients is misleading you. What we do guarantee is sub-second website performance, proven local SEO best practices, high-retention reel scripts, and transparent monthly reports so you see real numbers."
                }
              ].map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-[#0E1422] border border-white/[0.08] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-base sm:text-lg text-white hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-slate-400 mb-4">Have a specific question not covered here?</p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs tracking-wide shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask directly on WhatsApp (+91 80801 87384)</span>
              </a>
            </div>
          </section>

          {/* =========================================================================
              10. HIGH-IMPACT FINAL CTA BANNER & QUICK CONTACT FORM
             ========================================================================= */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B0F19] border-t border-white/[0.08] relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                Ready to make your business <br className="hidden sm:inline" />
                impossible to ignore?
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Send us a message or chat on WhatsApp. The first consultation and audit is completely free.
              </p>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] shadow-2xl text-left max-w-xl mx-auto">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                    <p className="text-slate-400 text-xs mb-6">
                      Vedant or Shreyash will review your business and reply within one business day.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Speed it up via WhatsApp</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={e => setFormName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Business Name & Locality *</label>
                      <input
                        type="text"
                        required
                        value={formBusiness}
                        onChange={e => setFormBusiness(e.target.value)}
                        placeholder="e.g. Sharma Dental Clinic, Kharadi"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">WhatsApp Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={e => setFormPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Primary Growth Focus *</label>
                      <select
                        value={formNeed}
                        onChange={e => setFormNeed(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Growth Engine (Marketing + Website)" className="bg-slate-900">Growth Engine (Marketing + Website)</option>
                        <option value="Website Only" className="bg-slate-900">Website Only (Sub-second mobile)</option>
                        <option value="Marketing Only" className="bg-slate-900">Marketing & Google SEO Only</option>
                        <option value="Custom Mobile App" className="bg-slate-900">Custom Mobile / Web App</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-white hover:bg-slate-200 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Send Project Details</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] font-mono text-slate-400 text-center">We reply within 24 hours. Zero spam, ever.</p>
                  </form>
                )}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* =========================================================================
          2. MARKETING PAGE (Dedicated Deep-Dive)
         ========================================================================= */}
      {activePage === 'marketing' && (
        <main className="py-20 sm:py-28 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Performance & Local Growth
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-4 mb-4">
              Get found. Get picked. Get busy.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Google Maps top rankings, scripted high-retention reels, and hyper-local ads that bring real customers to your door.
            </p>
          </div>

          <div className="space-y-4 mb-16">
            <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Google Maps Profile Domination</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  When potential clients search for your services in Kharadi or Pune, appear in the top 3 map pack. We handle primary categories, photos, citations, and search ranking signals.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Aesthetic Instagram Curation</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  A cohesive visual grid with clean typography that presents your treatments, classes, or products with undeniable prestige.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">High-Retention Short Video Reels</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Reels people actually watch. We script, format, and edit short-form videos engineered for local engagement and direct message booking.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">5 to 10 km Radius Local Ads</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Hyper-targeted ad campaigns on Meta and Google focused purely on residents in your Pune neighborhood ready to book right now.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">5-Star Review Engine</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Automated post-appointment WhatsApp review prompts and custom QR codes to consistently outrank older competitors.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#131C30] border border-cyan-400/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to fill your appointment book?</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
              Every month, you receive a concise summary of real calls and inquiries generated.
            </p>
            <button 
              onClick={() => handleNav('contact')} 
              className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs tracking-wide hover:bg-slate-200 transition-colors cursor-pointer shadow-lg"
            >
              Get Free Marketing Consultation
            </button>
          </div>
        </main>
      )}

      {/* =========================================================================
          3. WEBSITES PAGE (Dedicated Deep-Dive)
         ========================================================================= */}
      {activePage === 'websites' && (
        <main className="py-20 sm:py-28 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              Web Engineering
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-4 mb-4">
              Your digital shop window.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Sub-second speed, flawless mobile-first typography, and 1-tap WhatsApp lead triggers.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1422] border border-white/[0.08] mb-12">
            <h3 className="text-xl font-bold text-white mb-6 font-mono uppercase">What Every AceSutra Build Includes:</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Sub-2 Second Mobile Loading:</strong>
                  Coded from scratch with modern frameworks, ensuring zero customer drop-off due to slow load times.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">1-Tap WhatsApp & Call Triggers:</strong>
                  Floating action buttons and direct call links so mobile users can reach you effortlessly.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Google Maps & Review Integration:</strong>
                  Live Google reviews and map directions embedded directly on the page to build immediate trust.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">100% Code & Domain Ownership:</strong>
                  You own all code, domains, and hosting. No monthly software rental traps.
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div>Turnaround Timeline: <strong>2 to 3 weeks</strong></div>
              <div>Optional Add-on: <strong>WhatsApp Auto-Replies Engine</strong></div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => handleNav('contact')} 
              className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs tracking-wide hover:bg-slate-200 transition-colors shadow-lg cursor-pointer"
            >
              Request Free Website Quote
            </button>
          </div>
        </main>
      )}

      {/* =========================================================================
          4. APPS PAGE (Dedicated Deep-Dive)
         ========================================================================= */}
      {activePage === 'apps' && (
        <main className="py-20 sm:py-28 px-6 max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
            Custom Software
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Got a big idea? Let's engineer it.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-12">
            Custom booking platforms, membership portals, and ordering workflows built for your specific business.
          </p>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] text-left max-w-xl mx-auto mb-10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Tailored Digital Applications</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Whether you require a patient scheduling portal for your dental clinic, a member workout app for your gym, or a digital catalog for your store, we architect fast web and mobile applications.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs font-mono text-cyan-400">
              ● Cross-platform iOS + Android + Web
            </div>
          </div>

          <button 
            onClick={() => handleNav('contact')} 
            className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs tracking-wide hover:bg-slate-200 transition-colors shadow-lg cursor-pointer"
          >
            Schedule App Scope Call
          </button>
        </main>
      )}

      {/* =========================================================================
          5. OUR WORK PAGE (Dedicated Full Case Studies)
         ========================================================================= */}
      {activePage === 'work' && (
        <main className="py-20 sm:py-28 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              Work Portfolio
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-4 mb-4">
              Featured Case Studies
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
              Real client concepts engineered for maximum digital authority and customer conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Gym */}
            <div 
              onClick={() => setSelectedCaseStudy('apex')}
              className="rounded-3xl bg-[#0E1422] border border-white/[0.08] overflow-hidden hover:border-amber-400/40 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img src={GYM_IMG} alt="Club 360 Gym Pune" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-[#0E1422]/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase bg-black/75 px-3 py-1 rounded-full text-amber-300 border border-amber-400/30 backdrop-blur-md">
                      Kharadi & Pune
                    </span>
                    <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white/90 backdrop-blur-md">Fitness</span>
                  </div>
                  <div className="absolute bottom-3 left-6 right-6">
                    <h4 className="text-2xl font-black text-white">Club 360 Gym</h4>
                    <p className="text-xs text-amber-200 mt-0.5">High-Speed Mobile Site + Pass Booking</p>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-base text-white">Gym Digital Platform</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Batches, trainer profiles, trial bookings, and instant WhatsApp chat integration.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Project Architecture <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Dental */}
            <div 
              onClick={() => setSelectedCaseStudy('joshi')}
              className="rounded-3xl bg-[#0E1422] border border-white/[0.08] overflow-hidden hover:border-sky-400/40 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img src={DENTAL_IMG} alt="Dr. Joshi Dental Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-[#0E1422]/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase bg-black/75 px-3 py-1 rounded-full text-sky-300 border border-sky-400/30 backdrop-blur-md">
                      Kharadi & Pune
                    </span>
                    <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white/90 backdrop-blur-md">Healthcare</span>
                  </div>
                  <div className="absolute bottom-3 left-6 right-6">
                    <h4 className="text-2xl font-black text-white">Dr. Joshi Dental</h4>
                    <p className="text-xs text-sky-200 mt-0.5">Google Maps #1 + Patient Trust Portal</p>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-base text-white">Clinic Google SEO & Site</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Rank #1 in locality, patient trust profile, and instant WhatsApp booking.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Project Architecture <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Salon */}
            <div 
              onClick={() => setSelectedCaseStudy('glow')}
              className="rounded-3xl bg-[#0E1422] border border-white/[0.08] overflow-hidden hover:border-rose-400/40 transition-all cursor-pointer group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img src={SALON_IMG} alt="Geetanjali Salon Pune" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-[#0E1422]/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase bg-black/75 px-3 py-1 rounded-full text-rose-300 border border-rose-400/30 backdrop-blur-md">
                      Kharadi & Pune
                    </span>
                    <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white/90 backdrop-blur-md">Salon & Spa</span>
                  </div>
                  <div className="absolute bottom-3 left-6 right-6">
                    <h4 className="text-2xl font-black text-white">Geetanjali Salon</h4>
                    <p className="text-xs text-rose-200 mt-0.5">Aesthetic Feed + Weekend Booking Engine</p>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-base text-white">Salon Visual Curation</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Aesthetic service reels, price menus, and weekend appointment bookings.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <span className="text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Project Architecture <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1422] border border-white/[0.08] text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Want your business featured here?</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">Let's craft your website and get your local marketing engine running in Kharadi & Pune.</p>
            <button onClick={() => handleNav('contact')} className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs tracking-wide cursor-pointer hover:bg-slate-200 transition-colors">
              Schedule Free Strategy Session
            </button>
          </div>
        </main>
      )}

      {/* =========================================================================
          6. ABOUT PAGE (Founders with Stylized 3D Avatars)
         ========================================================================= */}
      {activePage === 'about' && (
        <main className="py-20 sm:py-28 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              The Founders
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-4 mb-4">
              Two People. One Big Plan.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Lots of extraordinary local businesses in Pune are hard to find online. We are here in Kharadi, Pune to fix that.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-5">
              <VedantAvatar className="w-18 h-18" />
              <div>
                <h3 className="text-2xl font-bold text-white">Vedant Gund</h3>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Marketing & Client Acquisition</p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Focused on local search engine visibility, hyper-targeted ad campaigns, and direct client partnerships so your business gains consistent real customers.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] flex items-start gap-5">
              <ShreyashAvatar className="w-18 h-18" />
              <div>
                <h3 className="text-2xl font-bold text-white">Shreyash Gund</h3>
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Websites, Engineering & Apps</p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Focused on sub-second loading speeds, modern React components, responsive mobile design, and robust custom applications that never break.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1422] border border-white/[0.08]">
            <h3 className="text-xl font-bold text-white mb-6 font-mono uppercase">Our Guiding Values:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="font-bold text-amber-400 mb-1 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> 100% Honest
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">No fabricated numbers or false guarantees. We tell you the exact truth of what will work.</p>
              </div>
              <div>
                <div className="font-bold text-cyan-400 mb-1 flex items-center gap-2">
                  <Sliders className="w-4 h-4" /> Radical Simplicity
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">No confusing technical jargon. Plain everyday words, clear deliverables, and measurable outcomes.</p>
              </div>
              <div>
                <div className="font-bold text-emerald-400 mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Delivered On Time
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">When we agree on a 2 to 3 week delivery timeline, we launch on time without excuses.</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* =========================================================================
          7. FAQ PAGE (Dedicated Page)
         ========================================================================= */}
      {activePage === 'faq' && (
        <main className="py-20 sm:py-28 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-4 mb-4">
              Answers, in plain words.
            </h1>
            <p className="text-slate-400 text-sm">Everything you need to know before we begin.</p>
          </div>

          <div className="space-y-4 mb-16">
            {[
              {
                q: "How much does a project cost?",
                a: "We give you a transparent, fixed quote in writing after a quick free chat. No hidden fees or surprise technical charges."
              },
              {
                q: "How long does a website take to build?",
                a: "Websites are typically live in 2 to 3 weeks. Custom apps take slightly longer depending on specifications."
              },
              {
                q: "Do I need to know anything about coding or tech?",
                a: "None at all. You focus on running your business, and we handle all code, hosting, domains, and SEO."
              },
              {
                q: "Who owns the website and domain?",
                a: "You own 100% of everything, forever. We build on open standards with zero vendor lock-in."
              },
              {
                q: "Can I update content later?",
                a: "Yes. Simply drop us a WhatsApp message and we assist with updates whenever you add services or change timings."
              },
              {
                q: "Do you only work in Kharadi & Pune?",
                a: "Kharadi, Pune is our primary home base for in-person meetings, and we also collaborate with clients across India remotely."
              },
              {
                q: "What is your payment structure?",
                a: "50% deposit to commence work, and the remaining 50% only when the website is live and approved."
              },
              {
                q: "Will I get measurable results?",
                a: "We guarantee proven high-speed mobile builds, local SEO best practices, and honest monthly reporting."
              }
            ].map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-[#0E1422] border border-white/[0.08] overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-base sm:text-lg text-white hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask us directly on WhatsApp (+91 80801 87384)</span>
            </a>
          </div>
        </main>
      )}

      {/* =========================================================================
          8. CONTACT PAGE (With Kharadi, Pune Address & Direct WhatsApp)
         ========================================================================= */}
      {activePage === 'contact' && (
        <main className="py-20 sm:py-28 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              Let's Connect
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mt-4 mb-4">
              Say hi to AceSutra.
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto">
              Tell us about your business. The initial consultation and audit are completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-[#0E1422] border border-white/[0.08] space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" /> Direct WhatsApp
                  </div>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-cyan-400 font-mono">
                    +91 80801 87384
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" /> Direct Email
                  </div>
                  <a href="mailto:acesutra@gmail.com" className="text-sm font-bold text-white hover:text-cyan-400">
                    acesutra@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-400" /> Studio Location
                  </div>
                  <div className="text-sm font-bold text-white">Kharadi, Pune, Maharashtra, India</div>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" /> Working Hours
                  </div>
                  <div className="text-xs text-slate-300">Monday to Saturday • 10:00 AM – 7:00 PM IST</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08]">
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                    <p className="text-slate-400 text-xs mb-6">
                      Vedant or Shreyash will review your business and reply within one business day.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Message us on WhatsApp (+91 80801 87384)</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={e => setFormName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">Business Name & Locality *</label>
                      <input
                        type="text"
                        required
                        value={formBusiness}
                        onChange={e => setFormBusiness(e.target.value)}
                        placeholder="e.g. Sharma Dental Clinic, Kharadi"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">WhatsApp Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={e => setFormPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">What you need *</label>
                      <select
                        value={formNeed}
                        onChange={e => setFormNeed(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Growth Engine (Marketing + Website)" className="bg-slate-900">Growth Engine (Marketing + Website)</option>
                        <option value="Website Only" className="bg-slate-900">Website Only</option>
                        <option value="Marketing Only" className="bg-slate-900">Marketing & Google SEO Only</option>
                        <option value="Custom Mobile App" className="bg-slate-900">Custom Mobile App</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-white hover:bg-slate-200 text-black font-extrabold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <span>Send Project Details</span>
                      <Send className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] font-mono text-slate-400 text-center">We reply within 24 hours. Zero spam, ever.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* =========================================================================
          9. PRIVACY POLICY PAGE
         ========================================================================= */}
      {activePage === 'privacy' && (
        <main className="py-20 sm:py-28 px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">Privacy Policy</h1>
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1422] border border-white/[0.08] space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>At AceSutra (Kharadi, Pune), we believe in keeping business transparent, simple, and honest.</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>We collect your name, business name, phone number, and project notes when you submit a form or message us.</li>
              <li>We use these details solely to respond to your inquiry and scope your digital project.</li>
              <li>We never sell, rent, or trade your personal or business information to third-party advertisers.</li>
              <li>All project data, credentials, and code repositories are securely maintained.</li>
            </ul>
            <p className="pt-4 border-t border-white/10 text-slate-400">
              To request deletion or update of your information, email us at <a href="mailto:acesutra@gmail.com" className="font-bold underline text-white">acesutra@gmail.com</a>.
            </p>
          </div>
        </main>
      )}

      {/* =========================================================================
          SLEEK MODERN FOOTER (With Official Logo, Address & WhatsApp)
         ========================================================================= */}
      <footer className="bg-[#06090E] text-slate-300 py-16 px-6 border-t border-white/[0.08] mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <AceSutraLogo />
              <p className="text-xs text-slate-400 leading-relaxed">
                The growth operating system for modern businesses. Simple, bold, and built to bring people in.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>All systems operational • Kharadi, Pune</span>
              </div>
            </div>

            {/* Navigation Pages */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Platform</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => handleNav('home')} className="hover:text-white cursor-pointer">Overview</button></li>
                <li><button onClick={() => handleNav('marketing')} className="hover:text-white cursor-pointer">Marketing & Ads</button></li>
                <li><button onClick={() => handleNav('websites')} className="hover:text-white cursor-pointer">Mobile Websites</button></li>
                <li><button onClick={() => handleNav('apps')} className="hover:text-white cursor-pointer">Custom Apps</button></li>
                <li><button onClick={() => handleNav('work')} className="hover:text-white cursor-pointer">Case Studies</button></li>
              </ul>
            </div>

            {/* Studio Info */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Studio</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => handleNav('about')} className="hover:text-white cursor-pointer">Founders & Values</button></li>
                <li><button onClick={() => handleNav('faq')} className="hover:text-white cursor-pointer">FAQ</button></li>
                <li><button onClick={() => handleNav('contact')} className="hover:text-white cursor-pointer">Direct Contact</button></li>
                <li><button onClick={() => handleNav('privacy')} className="hover:text-white cursor-pointer">Privacy Policy</button></li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Direct Contact</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <div>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-mono text-white underline">+91 80801 87384</a></div>
                <div>Email: <a href="mailto:acesutra@gmail.com" className="hover:text-white underline">acesutra@gmail.com</a></div>
                <div>Location: Kharadi, Pune, Maharashtra, India</div>
                <div className="pt-2">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold font-mono text-xs">
                    <MessageCircle className="w-3.5 h-3.5" /> Instant WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>© 2026 AceSutra. Crafted in Kharadi, Pune for Indian Businesses.</div>
            <div className="flex items-center gap-6">
              <button onClick={() => handleNav('privacy')} className="hover:text-slate-300 cursor-pointer">Privacy Terms</button>
              <button onClick={() => handleNav('contact')} className="hover:text-slate-300 cursor-pointer">Get In Touch</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
'''

with open(r'C:\Users\vedan\.gemini\antigravity\scratch\acesutra-website\App.tsx', 'w', encoding='utf8') as f:
    f.write(code)

print("SUCCESS: Generated App.tsx with integrated official assets!")
