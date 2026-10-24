import React from 'react';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { AlertCircle } from 'lucide-react';
import { useDocumentTitle } from '../lib/seo';

export const TermsPage: React.FC = () => {
  useDocumentTitle({
    title: 'Terms & Conditions | AceSutra',
    description: 'General terms and conditions of website use and engagement framework for AceSutra.',
  });

  return (
    <div className="pt-28 pb-20">
      <section className="py-12 sm:py-16 bg-charcoal-900 border-b border-subtleBorder">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} className="mb-6" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-mutedGray">
            Last Updated: January 2025 • Operational Draft
          </p>
        </Container>
      </section>

      <section className="py-14 bg-charcoal-950">
        <Container size="narrow">
          <div className="mb-10 p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">Standard Legal Advisory</p>
              <p className="opacity-90 leading-relaxed">
                This agreement constitutes general terms governing preliminary use of this website. Specific client service engagements are governed by bespoke Statements of Work (SOW) executed separately between AceSutra and client organizations.
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-mutedGray leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please discontinue use of the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
              <p>
                All brand marks, visual assets, software code, graphic elements, and textual materials published on this website are the intellectual property of AceSutra or licensed partners. Unlicensed reproduction, scraping, or redistribution without prior written consent is prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">3. Services & Engagement Scopes</h2>
              <p>
                Materials, demonstrations, and service descriptions presented on this website are provided for informational and positioning purposes. Formal commercial contracts, timelines, milestones, warranties, and service level agreements (SLAs) are defined exclusively through bilateral contracts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">4. Limitation of Liability</h2>
              <p>
                AceSutra makes every effort to provide accurate, reliable, and up-to-date information. However, this website and its contents are provided on an "as is" and "as available" basis without express or implied warranties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white">5. Governing Law & Amendments</h2>
              <p>
                We reserve the right to amend these terms periodically. Continued use of this website following notice of updates represents acceptance of modified terms. For legal inquiries, contact <a href="mailto:contact@acesutra.com" className="text-brand-orange underline">contact@acesutra.com</a>.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
};
