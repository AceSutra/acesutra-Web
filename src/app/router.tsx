import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy-loaded page components for optimal route code-splitting
const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const WorkPage = lazy(() => import('../pages/WorkPage').then((m) => ({ default: m.WorkPage })));
const InsightsPage = lazy(() => import('../pages/InsightsPage').then((m) => ({ default: m.InsightsPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const ServiceDetailPage = lazy(() =>
  import('../pages/services/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import('../pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage }))
);
const TermsPage = lazy(() => import('../pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
      <span className="text-xs uppercase tracking-widest text-mutedGray font-mono">Loading AceSutra...</span>
    </div>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Individual Service Category Routes */}
        <Route
          path="/services/digital-marketing"
          element={<ServiceDetailPage forcedSlug="digital-marketing" />}
        />
        <Route
          path="/services/web-development"
          element={<ServiceDetailPage forcedSlug="web-development" />}
        />
        <Route
          path="/services/branding-design"
          element={<ServiceDetailPage forcedSlug="branding-design" />}
        />
        <Route
          path="/services/software-development"
          element={<ServiceDetailPage forcedSlug="software-development" />}
        />
        <Route
          path="/services/mobile-app-development"
          element={<ServiceDetailPage forcedSlug="mobile-app-development" />}
        />
        <Route
          path="/services/ai-automation"
          element={<ServiceDetailPage forcedSlug="ai-automation" />}
        />
        <Route
          path="/services/cloud-solutions"
          element={<ServiceDetailPage forcedSlug="cloud-solutions" />}
        />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />

        {/* Legal & Static Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />

        {/* 404 Catch-All */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
