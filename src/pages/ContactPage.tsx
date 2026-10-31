import React from 'react';
import { Mail, Clock, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ContactForm } from '../components/forms/ContactForm';
import { siteConfig } from '../data/navigation';
import { useDocumentTitle } from '../lib/seo';

export const ContactPage: React.FC = () => {
  useDocumentTitle({
    title: "Let's Talk About Your Next Project | Contact AceSutra",
    description:
      'Initiate discovery for your website, custom software, branding, or digital marketing campaign. Speak directly with AceSutra strategists.',
  });

  return (
    <div className="pt-28 pb-16 sm:pb-24">
      {/* Hero */}
      <section className="py-14 sm:py-20 bg-transparent border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-cyan/10 blur-[140px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} className="mb-8" />

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-charcoal-900/90 text-cyan-400 border border-white/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT INQUIRIES & DISCOVERY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-[-0.04em] leading-[0.98] font-display uppercase">
              Let's Talk About <br />
              <span className="gradient-text-blue">Your Next Project.</span>
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray max-w-2xl leading-relaxed">
              Direct engagement with senior studio principals. We evaluate technical feasibility, architecture, and timelines within 24 business hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form Section */}
      <section className="py-16 sm:py-20 bg-transparent">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
                  STAGE 01 — SCOPING INTAKE
                </span>
                <h2 className="text-2xl font-bold text-white mt-1 font-display uppercase">
                  Project Scoping Form
                </h2>
                <p className="text-sm text-mutedGray mt-1">
                  All fields marked with an asterisk (<span className="text-cyan-400">*</span>) are required.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Communication Card */}
              <div className="p-8 rounded-3xl glass-panel hover:glass-panel-elevated border border-white/10 shadow-xl space-y-5">
                <h3 className="text-xl font-bold text-white font-display uppercase">
                  Direct Inquiries
                </h3>
                <p className="text-sm text-mutedGray leading-relaxed">
                  Prefer reaching out over email directly? Send briefs, RFP documents, or introductory inquiries to our principal inbox:
                </p>

                <div className="pt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 p-4 rounded-2xl bg-charcoal-900 border border-white/10 hover:border-brand-cyan text-white hover:text-cyan-400 transition-all w-full group"
                  >
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs text-mutedGray block font-mono">Principal Inbox</span>
                      <span className="text-sm font-semibold truncate block">{siteConfig.email}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto text-mutedGray group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Discovery Expectations Card */}
              <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-widest text-cyan-400">
                  WHAT HAPPENS NEXT?
                </h4>

                <div className="space-y-4 text-sm text-mutedGray">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white block text-xs">24-Hour Review</strong>
                      <span>A senior architect reviews technical feasibility and timeline.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white block text-xs">Confidentiality Assured</strong>
                      <span>Your project ideas, documents, and business details remain strictly private.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white block text-xs">Actionable Consultation</strong>
                      <span>A 30-minute discovery session with clear architecture recommendations.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
