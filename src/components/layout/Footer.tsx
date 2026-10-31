import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Globe } from 'lucide-react';
import { Container } from './Container';
import { AceSutraLogo } from './AceSutraLogo';
import { siteConfig } from '../../data/navigation';
import { servicesData } from '../../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [timeUtc, setTimeUtc] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(now.toUTCString().slice(17, 22) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-charcoal-950/60 backdrop-blur-md border-t border-white/10 text-warmWhite pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-brand-blue/15 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AceSutraLogo size="lg" />
            <p className="text-mutedGray text-sm max-w-md leading-relaxed">
              Bespoke digital flagships, brand identities, and high-velocity web platforms for market-defining leaders.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-charcoal-900 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {siteConfig.availabilityStatus}
              </span>

              {timeUtc && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-charcoal-900 text-mutedGray border border-white/10">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{timeUtc}</span>
                </span>
              )}
            </div>
          </div>

          {/* Capabilities Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white font-bold">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-mutedGray">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white font-bold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-mutedGray">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-cyan-400 transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-cyan-400 transition-colors">
                  Insights & Strategy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white font-bold">
              Direct Inquiries
            </h4>
            <p className="text-xs text-mutedGray leading-relaxed">
              Have an upcoming product, redesign, or growth campaign? Reach out directly.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-400 transition-colors group"
                data-cursor="EMAIL"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="truncate">{siteConfig.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
              </a>
            </div>

            <div className="pt-3">
              <span className="text-[11px] font-mono uppercase text-mutedGray block mb-2 font-medium">Digital Channels</span>
              <div className="flex flex-wrap items-center gap-2">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-charcoal-900 border border-white/10 text-mutedGray hover:text-white hover:border-brand-cyan hover:bg-charcoal-800 transition-all text-xs font-mono"
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-mutedGray gap-4 font-mono">
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
