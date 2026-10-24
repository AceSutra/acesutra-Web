import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Container } from './Container';
import { AceSutraLogo } from './AceSutraLogo';
import { siteConfig } from '../../data/navigation';
import { servicesData } from '../../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-subtleBorder text-warmWhite pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-orange/5 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-subtleBorder">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <AceSutraLogo size="lg" />
            <p className="text-mutedGray text-sm max-w-sm leading-relaxed">
              AceSutra combines strategic clarity, distinctive creative design, and scalable modern engineering to help businesses build enduring digital advantage.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {siteConfig.availabilityStatus}
              </span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-mutedGray">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services/ai-automation"
                  className="hover:text-brand-orange transition-colors"
                >
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-solutions"
                  className="hover:text-brand-orange transition-colors"
                >
                  Cloud & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-mutedGray">
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-brand-orange transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-brand-orange transition-colors">
                  Insights & Strategy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-brand-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-brand-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Direct Contact
            </h4>
            <p className="text-xs text-mutedGray leading-relaxed">
              Have an upcoming product, redesign, or growth campaign? Reach out directly to initiate discovery.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-orange transition-colors group"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>{siteConfig.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs text-mutedGray block mb-2 font-medium">Digital Channels</span>
              <div className="flex items-center gap-3">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-charcoal-800 border border-subtleBorder text-mutedGray hover:text-white hover:border-brand-orange hover:bg-charcoal-700 transition-all text-xs"
                    aria-label={`AceSutra on ${social.label}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mutedGray gap-4">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Where Strategy Meets Creativity and Technology.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
