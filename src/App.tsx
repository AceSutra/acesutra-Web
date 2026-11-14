import React, { useState } from 'react';
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
  Video
} from 'lucide-react';

// Custom inline SVG for Instagram (lucide-react does not bundle brand icons)
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

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formName, setFormName] = useState<string>('');
  const [formBusiness, setFormBusiness] = useState<string>('');
  const [formPhone, setFormPhone] = useState<string>('');
  const [formNeed, setFormNeed] = useState<string>('Both Marketing & Website');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

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

  const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%20AceSutra,%20I'd%20like%20to%20talk%20about%20marketing%20and%20a%20website%20for%20my%20business.";

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0B1528] font-sans antialiased selection:bg-[#0B1528] selection:text-[#FAF7F2] relative">
      
      {/* Floating WhatsApp Button on Every Page */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 font-medium text-sm"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="font-semibold tracking-wide">Chat with us</span>
      </a>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#0B1528]/10 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#FAF7F2] font-black text-lg group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#0B1528]">
                AceSutra
              </span>
              <span className="text-[10px] font-medium tracking-wider text-[#0B1528]/60 -mt-1">
                Pune, India
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#0B1528]/80">
            <button 
              onClick={() => handleNav('home')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'home' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNav('marketing')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'marketing' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              Marketing
            </button>
            <button 
              onClick={() => handleNav('websites')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'websites' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              Websites
            </button>
            <button 
              onClick={() => handleNav('apps')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'apps' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              Apps
            </button>
            <button 
              onClick={() => handleNav('work')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'work' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              Our Work
            </button>
            <button 
              onClick={() => handleNav('about')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'about' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNav('faq')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'faq' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNav('contact')} 
              className={`hover:text-[#0B1528] transition-colors cursor-pointer ${activePage === 'contact' ? 'text-[#0B1528] font-bold underline underline-offset-8 decoration-2' : ''}`}
            >
              Contact
            </button>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#0B1528] text-[#FAF7F2] hover:bg-[#1a2d52] font-semibold text-xs tracking-wide transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Let's talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0B1528] hover:bg-[#0B1528]/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden px-6 pt-3 pb-6 bg-[#FAF7F2] border-b border-[#0B1528]/10 space-y-3 font-medium text-base">
            <button onClick={() => handleNav('home')} className="block w-full text-left py-2 text-[#0B1528]">Home</button>
            <button onClick={() => handleNav('marketing')} className="block w-full text-left py-2 text-[#0B1528]">Marketing</button>
            <button onClick={() => handleNav('websites')} className="block w-full text-left py-2 text-[#0B1528]">Websites</button>
            <button onClick={() => handleNav('apps')} className="block w-full text-left py-2 text-[#0B1528]">Apps</button>
            <button onClick={() => handleNav('work')} className="block w-full text-left py-2 text-[#0B1528]">Our Work</button>
            <button onClick={() => handleNav('about')} className="block w-full text-left py-2 text-[#0B1528]">About</button>
            <button onClick={() => handleNav('faq')} className="block w-full text-left py-2 text-[#0B1528]">FAQ</button>
            <button onClick={() => handleNav('contact')} className="block w-full text-left py-2 font-bold text-[#0B1528]">Contact Us</button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full py-3 text-center bg-[#25D366] text-white rounded-xl font-bold"
            >
              Say hi on WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* 1. HOME PAGE */}
      {activePage === 'home' && (
        <main>
          {/* Top Hero Section (Cream) */}
          <section className="py-24 sm:py-32 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              Marketing & Websites • Pune, India
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1528] tracking-tight leading-[1.08] mb-6">
              Make your business <br className="hidden sm:inline" />
              impossible to ignore.
            </h1>

            <p className="text-lg sm:text-2xl text-[#0B1528]/80 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
              Marketing and websites for Pune's local businesses. Simple, bold, and built to bring people in.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => handleNav('contact')} 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0B1528] text-[#FAF7F2] hover:bg-[#1a2d52] font-bold text-base transition-transform hover:scale-105 shadow-xl cursor-pointer"
              >
                Let's talk
              </button>
              <button 
                onClick={() => handleNav('work')} 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-[#0B1528]/15 hover:border-[#0B1528] text-[#0B1528] font-bold text-base transition-colors shadow-sm cursor-pointer"
              >
                See what we make
              </button>
            </div>

            {/* Visual Card */}
            <div className="max-w-md mx-auto p-6 rounded-3xl bg-white border border-[#0B1528]/10 shadow-2xl text-left">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1528] text-white flex items-center justify-center font-black text-xl">
                  A
                </div>
                <div>
                  <div className="font-bold text-base text-[#0B1528]">Your Local Business in Pune</div>
                  <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Showing on Page 1 • 4.9 ★★★★★
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span>Google Profile: Search rank nearby</span>
                  <span className="font-bold text-[#0B1528]">Top 3</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span>Instagram: Local Reels & Posts</span>
                  <span className="font-bold text-[#0B1528]">Active & Booking</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 flex items-center justify-between">
                  <span>Website: Loads fast on every phone</span>
                  <span className="font-bold text-[#0B1528]">1.2s Fast</span>
                </div>
              </div>
            </div>
          </section>

          {/* The Problem (Navy Background) */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-16">
                Right now, your customers are scrolling past you.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-white">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No website?</h3>
                  <p className="text-slate-300 font-light text-base leading-relaxed">
                    You're invisible. When people search on their phone, they can't even find your address or prices.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-white">
                    <Star className="w-7 h-7 fill-amber-400 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Few reviews?</h3>
                  <p className="text-slate-300 font-light text-base leading-relaxed">
                    They'll pick someone else. Customers trust places with fresh 5-star reviews on Google Maps.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-white">
                    <Instagram className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quiet Instagram?</h3>
                  <p className="text-slate-300 font-light text-base leading-relaxed">
                    Looks like you're closed. If you haven't posted in 3 months, people wonder if you're still open.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do (Cream Background) */}
          <section className="py-24 sm:py-32 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1528] tracking-tight text-center mb-16">
              What we do, in plain words
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div 
                onClick={() => handleNav('marketing')}
                className="p-10 rounded-3xl bg-white border border-[#0B1528]/10 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#0B1528] flex items-center justify-center mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mb-3">
                  Marketing
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed font-normal mb-6">
                  Get found on Google and Instagram. We handle your Google Maps profile, create reels people actually watch, and run ads that bring customers to your door.
                </p>
                <span className="text-sm font-bold text-[#0B1528] flex items-center gap-1">
                  Explore marketing <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              <div 
                onClick={() => handleNav('websites')}
                className="p-10 rounded-3xl bg-white border border-[#0B1528]/10 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#0B1528] flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mb-3">
                  Websites
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed font-normal mb-6">
                  Clean, fast, and works on every phone. We build sites that load instantly, showcase what you offer, and make it effortless for people to call or WhatsApp you.
                </p>
                <span className="text-sm font-bold text-[#0B1528] flex items-center gap-1">
                  Explore websites <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                onClick={() => handleNav('apps')}
                className="p-8 rounded-3xl bg-white/70 border border-[#0B1528]/10 hover:border-[#0B1528]/30 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B1528] flex items-center justify-center mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-[#0B1528] mb-2">Apps (When You Need One)</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Only if you genuinely need it. If your business has a specific flow that an app makes 10x easier, we build it. If a good website does the job, we'll tell you honestly.
                </p>
              </div>

              <div 
                onClick={() => handleNav('marketing')}
                className="p-8 rounded-3xl bg-white/70 border border-[#0B1528]/10 hover:border-[#0B1528]/30 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-[#0B1528] mb-2">WhatsApp Auto-Replies</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Never lose a customer who messages after hours. Automated, friendly replies that answer common questions, share your menu, or confirm an appointment.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works (Navy Background) */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center mb-16">
                How it works. Three steps.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 relative">
                  <div className="text-4xl font-extrabold text-white/30 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-3">We talk</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    You tell us what you do, who your customers are, and what isn't working. A quick call or a coffee in Pune.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 relative">
                  <div className="text-4xl font-extrabold text-white/30 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-3">We build</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    We set up your marketing, build your website, or both. You see progress along the way. Usually 2 to 3 weeks.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 relative">
                  <div className="text-4xl font-extrabold text-white/30 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-3">You grow</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    More calls, more walk-ins, more messages. We keep an eye on things and help you update whatever you need.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why AceSutra (Cream Background) */}
          <section className="py-24 sm:py-32 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1528] tracking-tight text-center mb-16">
              Why work with us?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-white border border-[#0B1528]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#0B1528] flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1528] mb-1">We do both marketing and websites</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No pointing fingers. The people driving traffic are the same people building the pages that turn traffic into sales.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-white border border-[#0B1528]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#0B1528] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1528] mb-1">We know Pune</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We understand local areas, Marathi and English audiences, and how people actually choose shops, clinics, and services here.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-white border border-[#0B1528]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#0B1528] flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1528] mb-1">Clear pricing, no surprises</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    You know what you're paying before we start. No hidden retainers, surprise invoices, or confusing fine print.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-white border border-[#0B1528]/10 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#0B1528] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0B1528] mb-1">You talk to the people doing the work</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    No account managers or middlemen. You talk directly with Vedant and Shreyash, who are actively crafting your project.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA (Navy Background) */}
          <section className="py-24 sm:py-32 px-6 bg-[#0B1528] text-[#FAF7F2] text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
                Ready to make your business visible?
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 font-light mb-10 max-w-xl mx-auto">
                Send us a message on WhatsApp. We'll reply within a few hours and tell you what makes sense for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base transition-transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-colors"
                >
                  Fill out our form
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 2. MARKETING PAGE */}
      {activePage === 'marketing' && (
        <main>
          <section className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              Marketing Services
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B1528] tracking-tight mb-6">
              Get customers to walk in, call, and buy.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Most marketing agencies sell you impressions. We focus on what matters: phone calls, WhatsApp messages, and people walking through your door in Pune.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B1528] text-[#FAF7F2] hover:bg-[#1a2d52] font-bold text-base transition-transform hover:scale-105 shadow-xl"
            >
              <span>Talk about marketing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>

          {/* Marketing Breakdown (Navy Background) */}
          <section className="py-24 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-16">
                What our marketing covers
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Google Business Profile</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    When someone near you searches for what you do, you should be at the top of Google Maps. We optimize your profile, photos, categories, and reviews so local customers see you first.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Instagram & Reels</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    No boring stock photos or generic quote templates. Real, engaging video content showing your business, your team, and your work. Built specifically for Pune audiences.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Local Google & Meta Ads</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    Target people within 5 km of your location who are actively searching for your service right now. Every rupee is tracked to phone calls and store visits.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Review Management</h3>
                  <p className="text-slate-300 font-light leading-relaxed">
                    A steady stream of genuine 5-star Google reviews. We build simple systems that make it effortless for your happy customers to leave feedback.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing note (Cream) */}
          <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mb-4">
              Monthly marketing with zero long-term lock-in
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              We work on simple month-to-month plans. If we aren't bringing you customers, you don't stay. That keeps us honest and focused on results.
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-4 rounded-full bg-[#0B1528] text-white font-bold text-sm hover:bg-[#1a2d52] transition-colors"
            >
              Ask about marketing pricing
            </button>
          </section>
        </main>
      )}

      {/* 3. WEBSITES PAGE */}
      {activePage === 'websites' && (
        <main>
          <section className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              Website Design & Development
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B1528] tracking-tight mb-6">
              A website that actually brings in business.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Not a 20-page slow template. A fast, modern site that shows what you do, why you're good at it, and gives people an instant button to call or WhatsApp you.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B1528] text-[#FAF7F2] hover:bg-[#1a2d52] font-bold text-base transition-transform hover:scale-105 shadow-xl"
            >
              <span>Get a website built</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>

          {/* Features Grid (Navy Background) */}
          <section className="py-24 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-16">
                What every AceSutra website includes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-2">SPEED FIRST</div>
                  <h3 className="text-xl font-bold mb-3">Loads in 1-2 Seconds</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Most Pune internet users are on 4G or 5G mobile phones. If your site takes 5 seconds to load, they leave before reading a single word.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-2">MOBILE OPTIMIZED</div>
                  <h3 className="text-xl font-bold mb-3">Built for Phones</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Over 85% of your customers visit from a phone. We design for the vertical mobile screen first, then expand it for laptops.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-2">WHATSAPP READY</div>
                  <h3 className="text-xl font-bold mb-3">Direct Chat Button</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Indian customers don't fill out 10-field forms. A prominent WhatsApp button connects them with one tap straight to your phone.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-2">LOCAL SEO</div>
                  <h3 className="text-xl font-bold mb-3">Google-Friendly Setup</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Clean code, proper headings, and structured data that Google searches understand easily, so you climb local rankings.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-2">NO HEADACHES</div>
                  <h3 className="text-xl font-bold mb-3">Hosting & Domain Setup</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Don't worry about servers, DNS records, or SSL certificates. We handle the technical setup from start to finish.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-2">YOU OWN IT</div>
                  <h3 className="text-xl font-bold mb-3">100% Ownership</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    The code, domain, and design are completely yours. We don't lock you in or hold your assets hostage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Section (Cream) */}
          <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mb-4">
              Delivered in 2 to 3 weeks
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              No endless delays. Once you share your basic info and photos, we get straight to work and have you live in under a month.
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-4 rounded-full bg-[#0B1528] text-white font-bold text-sm hover:bg-[#1a2d52] transition-colors"
            >
              Start your website project
            </button>
          </section>
        </main>
      )}

      {/* 4. APPS PAGE */}
      {activePage === 'apps' && (
        <main>
          <section className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              Custom Apps
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B1528] tracking-tight mb-6">
              Apps, only when you actually need one.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Most agencies try to sell you a ₹2,00,000 app you don't need. We're honest: 90% of businesses just need great marketing and a fast website. But when an app genuinely solves an internal problem, we build it clean.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B1528] text-[#FAF7F2] hover:bg-[#1a2d52] font-bold text-base transition-transform hover:scale-105 shadow-xl"
            >
              <span>Discuss an app idea</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>

          {/* App Scenarios (Navy) */}
          <section className="py-24 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-16">
                When does an app make sense?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Internal Operations</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Managing gym memberships, salon appointments, service tracking, or billing when Excel sheets get out of hand.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Customer Portals</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Where your recurring clients log in to check order status, view medical reports, or download invoices directly.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Custom Booking Systems</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    When standard booking platforms take too high of a commission or don't match how your Pune team operates.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 5. OUR WORK PAGE */}
      {activePage === 'work' && (
        <main>
          <section className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              Portfolio & Work Samples
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B1528] tracking-tight mb-6">
              Sample work. Real Pune focus.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Here is the kind of clean design, sharp copywriting, and local marketing we build for businesses in Pune.
            </p>
          </section>

          {/* Projects (Navy Background) */}
          <section className="py-24 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-5xl mx-auto space-y-12">
              
              {/* Project 1 */}
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">Fitness & Wellness • Pune</div>
                  <h3 className="text-3xl font-extrabold mb-4">Apex Gym Pune</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 font-light">
                    Complete Google Maps optimization and a lightning-fast mobile landing page. Membership inquiry button connects straight to the front desk WhatsApp.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300 mb-6 font-light">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Google Maps ranked in Top 3 for local fitness searches</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Fast 1-tap WhatsApp trial booking button</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> High-impact coach showcase section</li>
                  </ul>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-mono">Sample Work Concept</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 mb-3">
                    <div className="text-white font-bold text-sm mb-1">Apex Gym Koregaon Park</div>
                    <div className="text-amber-400 text-xs">★★★★★ 4.9 (184 reviews)</div>
                    <div className="text-slate-400 text-[11px] mt-1">Gym & Personal Training • Open until 10 PM</div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 text-center">
                    WhatsApp Free Trial Inquiries: +38% MoM
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">Healthcare • Kothrud</div>
                  <h3 className="text-3xl font-extrabold mb-4">Joshi Dental Clinic</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 font-light">
                    Clean, reassuring clinic website that builds patient trust before they even walk in. Includes doctor credentials, clinic photos, transparent pricing, and instant appointment booking.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300 mb-6 font-light">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Reassuring, friendly clinic photography and FAQs</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Automated Google review collection system</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Direct directions button via Google Maps</li>
                  </ul>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-mono">Sample Work Concept</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 mb-3">
                    <div className="text-white font-bold text-sm mb-1">Joshi Dental Clinic Kothrud</div>
                    <div className="text-amber-400 text-xs">★★★★★ 5.0 (210 reviews)</div>
                    <div className="text-slate-400 text-[11px] mt-1">Dental Clinic in Pune • Verified on Google</div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-950/60 text-blue-300 border border-blue-500/30 text-center">
                    Online Appointments: Instant 1-tap confirmation
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">Beauty & Lifestyle • Baner</div>
                  <h3 className="text-3xl font-extrabold mb-4">Glow Salon & Spa</h3>
                  <p className="text-slate-300 leading-relaxed mb-6 font-light">
                    Instagram visual revamp combined with localized Meta ads targeted specifically at women aged 22-45 in Baner, Balewadi, and Aundh.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300 mb-6 font-light">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Professional before-and-after client reels</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Weekend slot booking campaign</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> WhatsApp menu with automated pricing sheet</li>
                  </ul>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-mono">Sample Work Concept</span>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300">
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 mb-3">
                    <div className="text-white font-bold text-sm mb-1">@glowsalon.pune • Instagram</div>
                    <div className="text-slate-300 text-xs">12 Reels • 45.2K Local Views</div>
                    <div className="text-slate-400 text-[11px] mt-1">Average booking rate: 14 new clients/week</div>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-950/60 text-purple-300 border border-purple-500/30 text-center">
                    Weekend Appointment Slots: 100% Filled
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* CTA (Cream) */}
          <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1528] mb-4">
              Want your business featured here next?
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl mx-auto">
              Tell us what you do. We'll show you exactly how we'd market your business or build your website.
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-4 rounded-full bg-[#0B1528] text-white font-bold text-sm hover:bg-[#1a2d52] transition-colors"
            >
              Start a project
            </button>
          </section>
        </main>
      )}

      {/* 6. ABOUT PAGE */}
      {activePage === 'about' && (
        <main>
          <section className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              About AceSutra
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B1528] tracking-tight mb-6">
              We're two guys in Pune who care about local business.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              No big office, no fancy corporate buzzwords. Just honest work, delivered fast, by the people you actually talk to on the phone.
            </p>
          </section>

          {/* The Team (Navy Background) */}
          <section className="py-24 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-16">
                Meet the team
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold text-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-400/30">
                    VG
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Vedant Gund</h3>
                  <div className="text-emerald-400 font-medium text-sm mb-4">Marketing & Clients</div>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Handles marketing strategy, client acquisition, Google profiles, and ad campaigns. Focused on making sure your phone rings with real customers.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-400/30">
                    SG
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Shreyash Gund</h3>
                  <div className="text-emerald-400 font-medium text-sm mb-4">Websites & Apps</div>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    Builds fast, clean websites and web applications. Makes sure your site loads instantly, looks crisp on every phone, and never breaks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values (Cream) */}
          <section className="py-24 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight text-center mb-16">
              How we do business
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-[#0B1528]/10 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4 font-bold text-[#0B1528]">
                  01
                </div>
                <h4 className="text-xl font-bold text-[#0B1528] mb-2">Honest advice</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  If you don't need a website yet, or if an expensive ad campaign is a bad idea for your stage, we will tell you directly.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-[#0B1528]/10 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4 font-bold text-[#0B1528]">
                  02
                </div>
                <h4 className="text-xl font-bold text-[#0B1528] mb-2">Simple words</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  No acronyms or tech jargon. We explain what we're doing in plain language so you always understand what you're paying for.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-[#0B1528]/10 shadow-sm text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4 font-bold text-[#0B1528]">
                  03
                </div>
                <h4 className="text-xl font-bold text-[#0B1528] mb-2">On time</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  When we give you a launch date, we stick to it. We don't drag projects out for months or leave you hanging.
                </p>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* 7. FAQ PAGE */}
      {activePage === 'faq' && (
        <main>
          <section className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              Questions & Answers
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B1528] tracking-tight mb-6">
              Frequently asked questions.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              Straightforward answers about our pricing, timelines, process, and how we work.
            </p>
          </section>

          {/* Accordion List (Navy Background) */}
          <section className="py-24 px-6 bg-[#0B1528] text-[#FAF7F2]">
            <div className="max-w-3xl mx-auto space-y-4">
              
              {/* FAQ 1 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(1)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>How much does a website cost?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 1 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    Most of our standard websites for Pune local businesses range between ₹15,000 and ₹35,000, depending on how many pages, custom features, and content you need. We give you a clear, fixed quote upfront before starting any work.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(2)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>How long does it take to launch?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 2 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    Usually 2 to 3 weeks once we have your basic business information, photos, and services. If you need it faster, let us know and we can discuss expedited delivery.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(3)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>What do I need to provide?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 3 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    Just the basics: your logo (if you have one), photos of your shop or work, list of services, pricing, and contact details. We handle all the copywriting, layout, and technical setup.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(4)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>Do I own the website and domain?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 4 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    Yes, 100%. The domain, code, design, and all accounts belong to you. We never lock you into a proprietary system.
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(5)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>Can I make changes after launch?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 5 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 5 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    Absolutely. Minor updates like updating your phone number, adding a new service, or changing prices are quick and easy. We can handle updates for you on an as-needed basis.
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(6)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>Are you really based in Pune?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 6 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 6 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    Yes, 100% based in Pune, Maharashtra. We can meet you in person anywhere in Pune (Kothrud, Baner, Viman Nagar, Deccan, etc.) or hop on a quick call.
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(7)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>How does payment work?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 7 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 7 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    For websites: 50% advance to start, 50% upon final delivery after your approval. For monthly marketing: a simple month-to-month fee paid at the beginning of each cycle with no lock-in contract.
                  </div>
                )}
              </div>

              {/* FAQ 8 */}
              <div className="border border-white/10 rounded-2xl bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => toggleFaq(8)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-lg text-white hover:bg-white/[0.02] cursor-pointer"
                >
                  <span>Do you guarantee results?</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openFaq === 8 ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === 8 && (
                  <div className="px-6 pb-6 text-slate-300 font-light leading-relaxed text-sm">
                    We guarantee the quality of our work: fast loading speeds, clean design, and proper SEO setup. Anyone who promises you a guaranteed "10x revenue in 30 days" is lying to you. We focus on real, measurable metrics like calls, form fills, and Google ranking improvements.
                  </div>
                )}
              </div>

            </div>
          </section>
        </main>
      )}

      {/* 8. CONTACT PAGE */}
      {activePage === 'contact' && (
        <main>
          <section className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#0B1528]/5 text-[#0B1528] text-xs font-semibold mb-6">
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0B1528] tracking-tight mb-6">
              Say hi. Let's talk about your business.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-normal">
              Whether you want to get more customers through marketing, build a new website, or just ask a question, we're here.
            </p>
          </section>

          {/* Contact Details & Form (Cream & White) */}
          <section className="pb-24 px-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Contact Info */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#0B1528]/10 shadow-lg space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#0B1528] mb-2">Direct Contact</h3>
                  <p className="text-slate-600 text-sm">
                    Reach out however you prefer. WhatsApp is usually fastest.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">WhatsApp (Fastest)</div>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-[#0B1528] hover:underline">
                        Message us on WhatsApp
                      </a>
                      <div className="text-xs text-slate-500 mt-0.5">Usually replies within 2 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#0B1528] flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Email</div>
                      <a href="mailto:acesutra@gmail.com" className="text-base font-bold text-[#0B1528] hover:underline">
                        acesutra@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B1528] flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Location</div>
                      <div className="text-base font-bold text-[#0B1528]">Pune, Maharashtra, India</div>
                      <div className="text-xs text-slate-500 mt-0.5">Available for in-person meetings</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B1528] flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase">Hours</div>
                      <div className="text-base font-bold text-[#0B1528]">Monday - Saturday</div>
                      <div className="text-xs text-slate-500 mt-0.5">10:00 AM - 7:00 PM IST</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#0B1528]/10 shadow-lg">
                <h3 className="text-2xl font-bold text-[#0B1528] mb-2">Send us a message</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Fill in your details and we'll get back to you today.
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900">Message Received!</h4>
                    <p className="text-emerald-700 text-sm leading-relaxed">
                      Thank you, {formName || 'there'}! We have received your inquiry and will reach out to your WhatsApp/phone shortly.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Chat on WhatsApp now</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B1528] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Business Name</label>
                      <input 
                        type="text" 
                        value={formBusiness}
                        onChange={(e) => setFormBusiness(e.target.value)}
                        placeholder="e.g. Sharma Dental Clinic"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B1528] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">WhatsApp / Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B1528] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">What do you need?</label>
                      <select 
                        value={formNeed}
                        onChange={(e) => setFormNeed(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0B1528] text-sm bg-white"
                      >
                        <option>Both Marketing & Website</option>
                        <option>Marketing (Google Maps & Instagram)</option>
                        <option>New Website</option>
                        <option>Custom App</option>
                        <option>Other / Just Asking</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0B1528] hover:bg-[#1a2d52] text-[#FAF7F2] font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </section>
        </main>
      )}

      {/* 9. PRIVACY POLICY */}
      {activePage === 'privacy' && (
        <main className="py-20 px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1528] mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              At AceSutra, we value your privacy. We are based in Pune, India, and we only collect information that you deliberately share with us (such as your name, business name, and phone number when reaching out).
            </p>
            <h3 className="text-xl font-bold text-[#0B1528] pt-4">How we use your information</h3>
            <p>
              We only use your contact details to reply to your inquiry, discuss your project, and provide our services. We do not sell, rent, or share your contact info with third parties or spam callers.
            </p>
            <h3 className="text-xl font-bold text-[#0B1528] pt-4">Communication</h3>
            <p>
              If you reach out via WhatsApp or submit our contact form, we will use that channel to communicate regarding your project inquiry.
            </p>
            <div className="pt-6">
              <button 
                onClick={() => handleNav('home')}
                className="px-6 py-2.5 rounded-full bg-[#0B1528] text-white text-xs font-bold hover:bg-[#1a2d52]"
              >
                Back to Home
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Footer (Navy Background) */}
      <footer className="bg-[#0B1528] text-[#FAF7F2] pt-16 pb-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white text-[#0B1528] flex items-center justify-center font-black text-base">
                  A
                </div>
                <span className="text-xl font-extrabold tracking-tight">AceSutra</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-light">
                Marketing and websites for local Pune businesses. Simple, bold, and built to bring people in.
              </p>
              <div className="text-xs text-slate-400">
                Pune, Maharashtra, India
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Pages</h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><button onClick={() => handleNav('home')} className="hover:text-white cursor-pointer">Home</button></li>
                <li><button onClick={() => handleNav('marketing')} className="hover:text-white cursor-pointer">Marketing</button></li>
                <li><button onClick={() => handleNav('websites')} className="hover:text-white cursor-pointer">Websites</button></li>
                <li><button onClick={() => handleNav('apps')} className="hover:text-white cursor-pointer">Apps</button></li>
                <li><button onClick={() => handleNav('work')} className="hover:text-white cursor-pointer">Our Work</button></li>
                <li><button onClick={() => handleNav('about')} className="hover:text-white cursor-pointer">About Us</button></li>
                <li><button onClick={() => handleNav('faq')} className="hover:text-white cursor-pointer">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Connect</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div>
                  <a href="mailto:acesutra@gmail.com" className="hover:text-white">
                    acesutra@gmail.com
                  </a>
                </div>
                <div className="pt-2">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold">
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp us
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>© 2026 AceSutra. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <button onClick={() => handleNav('privacy')} className="hover:text-white cursor-pointer">Privacy</button>
              <button onClick={() => handleNav('contact')} className="hover:text-white cursor-pointer">Contact</button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
