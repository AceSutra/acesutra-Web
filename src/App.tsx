import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './app/router';
import { ScrollToTopOnRoute, FloatingScrollToTopButton } from './components/ui/ScrollToTop';

import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { GlobalCanvasBackground } from './components/ui/GlobalCanvasBackground';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <BrowserRouter>
      {/* Global Interactive Canvas Background (Constellation & Plasma Orbs) */}
      <GlobalCanvasBackground />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Scroll restoration upon route navigation */}
      <ScrollToTopOnRoute />

      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="flex flex-col min-h-screen bg-transparent text-warmWhite selection:bg-brand-blue selection:text-white">
        <Header />

        <main id="main-content" role="main" className="flex-grow">
          <AppRoutes />
        </main>

        <Footer />

        {/* Floating Back to Top Button */}
        <FloatingScrollToTopButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
