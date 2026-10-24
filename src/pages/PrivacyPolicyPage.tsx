import React from 'react';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { AlertCircle } from 'lucide-react';
import { useDocumentTitle } from '../lib/seo';

export const PrivacyPolicyPage: React.FC = () => {
  useDocumentTitle({
    title: 'Privacy Policy | AceSutra',
    description: 'Privacy policy and data handling principles for the AceSutra website and services.',
  });

  return (
    <div className="pt-28 pb-20">
      <section className="py-12 sm:py-16 bg-charcoal-900 border-b border-subtleBorder">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} className="mb-6" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-mutedGray">
            Last Updated: January 2025 • Draft Template
          </p>
        </Container>
      </section>

      <section className="py-14 bg-charcoal-950">
        <Container size="narrow">
          {/* Legal Review Advisory Notice */}
          <div className="mb-10 p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">Draft Document Notice</p>
              <p className="opacity-90 leading-relaxed">
                This document serves as an operational draft privacy disclosure for the AceSutra website. Prior to production regulatory filings in specific jurisdictions (e.g. GDPR, CCPA), review with certified legal counsel is recommended.
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-mutedGray leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
              <p>
                When you interact with AceSutra through our contact forms, project scoping questionnaires, or direct email communications, we collect details you voluntarily provide. This typically includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Your name, business email address, company name, and phone number</li>
                <li>Project requirements, budget ranges, and desired delivery timelines</li>
                <li>Technical communication logs necessary to respond to your inquiries</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">2. How We Use Collected Data</h2>
              <p>
                The information collected is strictly utilized to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Evaluate project feasibility and prepare tailored proposals or responses</li>
                <li>Communicate directly regarding active client services and milestone updates</li>
                <li>Ensure the stability, security, and performance of our digital infrastructure</li>
              </ul>
              <p>
                We do not sell, rent, or trade your contact or project information to third-party data brokers or marketing list aggregators.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Third-Party Infrastructure & Cookies</h2>
              <p>
                We may utilize standard hosting infrastructure (such as Cloudflare, Vercel, or AWS) and privacy-focused telemetry to monitor application performance and protect against abusive traffic or DDoS attacks. These services adhere to rigorous security standards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Data Retention and Security</h2>
              <p>
                We implement modern encryption protocols in transit and at rest. Project inquiries are retained only as long as necessary to facilitate business discovery or satisfy legitimate business records.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Contact Regarding Privacy</h2>
              <p>
                If you have questions regarding this privacy draft or wish to request data deletion, contact us at: <a href="mailto:contact@acesutra.com" className="text-brand-orange underline">contact@acesutra.com</a>.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
};
