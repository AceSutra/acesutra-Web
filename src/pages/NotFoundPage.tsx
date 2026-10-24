import React from 'react';
import { Home, Search } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { useDocumentTitle } from '../lib/seo';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle({
    title: '404 — Page Not Found | AceSutra',
    description: 'The requested page could not be located on AceSutra.',
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 bg-charcoal-900 bg-subtle-grid relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 blur-[130px] rounded-full pointer-events-none" />

      <Container size="narrow">
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-charcoal-800/80 border border-subtleBorder shadow-2xl relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-cyan/10 text-cyan-400 border border-brand-cyan/25 mb-6">
            <span>ERROR 404</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-white tracking-tight">
            404
          </h1>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h2>

          <p className="mt-3 text-base text-mutedGray max-w-md mx-auto leading-relaxed">
            The page or resource you are looking for has been relocated, renamed, or is unavailable in this deployment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Return to Homepage
            </Button>

            <Button
              to="/#services"
              variant="secondary"
              size="md"
              leftIcon={<Search className="w-4 h-4" />}
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-subtleBorder/60 text-xs text-mutedGray">
            <span>Looking for something specific? </span>
            <a href="mailto:contact@acesutra.com" className="text-cyan-400 underline hover:text-sky-300">
              Contact our engineering team
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
