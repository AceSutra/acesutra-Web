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
      <section className="py-14 sm:py-20 bg-charcoal-900 border-b border-subtleBorder relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-orange/10 blur-[140px] rounded-full pointer-events-none" />

        <Container>
          <Breadcrumbs items={[{ label: 'Contact & Inquiries' }]} className="mb-8" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT INQUIRIES & DISCOVERY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Let's Talk About Your Next Project.
            </h1>

            <p className="text-lg sm:text-xl text-mutedGray leading-relaxed">
              Tell us what you're building, what you're trying to improve, and where you want to go next. We'll review your goals and provide honest feasibility feedback within 24 business hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form Section */}
      <section className="py-16 sm:py-20 bg-charcoal-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-orange">
                  STAGE 01 — SCOPING INTAKE
                </span>
                <h2 className="text-2xl font-bold text-white mt-1">
                  Project Scoping Form
                </h2>
                <p className="text-sm text-mutedGray mt-1">
                  All fields marked with an asterisk (<span className="text-brand-orange">*</span>) are required.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Communication Card */}
              <div className="p-8 rounded-3xl bg-charcoal-900 border border-subtleBorder shadow-xl space-y-5">
                <h3 className="text-xl font-bold text-white">
                  Direct Inquiries
                </h3>
                <p className="text-sm text-mutedGray leading-relaxed">
                  Prefer reaching out over email directly? Send briefs, RFP documents, or introductory inquiries to our principal inbox:
                </p>

                <div className="pt-2">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 p-4 rounded-xl bg-charcoal-800 border border-subtleBorder hover:border-brand-orange text-white hover:text-brand-orange transition-all w-full group"
                  >
                    <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs text-mutedGray block">Primary Email</span>
                      <span className="text-sm font-semibold truncate block">{siteConfig.email}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto text-mutedGray group-hover:text-brand-orange group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Discovery Expectations Card */}
              <div className="p-8 rounded-3xl bg-charcoal-900/60 border border-subtleBorder space-y-4">
                <h4 className="text-xs uppercase font-bold tracking-widest text-brand-orange">
                  WHAT HAPPENS NEXT?
                </h4>

                <div className="space-y-4 text-sm text-mutedGray">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white block text-xs">24-Hour Review</strong>
                      <span>A senior strategist analyzes your requirements, technical feasibility, and timeline.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white block text-xs">Confidentiality Assured</strong>
                      <span>Your project ideas, documents, and business details remain strictly private.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-white block text-xs">Actionable Consultation</strong>
                      <span>We schedule an initial 30-minute discovery session with clear next steps.</span>
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
