import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { WorkPage } from '../pages/WorkPage';
import { InsightsPage } from '../pages/InsightsPage';
import { ContactPage } from '../pages/ContactPage';
import { ServiceDetailPage } from '../pages/services/ServiceDetailPage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { TermsPage } from '../pages/TermsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
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
  );
};
