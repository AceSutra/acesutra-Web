import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Globe, Palette, Code, Smartphone, Cpu, Server } from 'lucide-react';
import type { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

const serviceIcons: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-6 h-6 text-brand-orange" />,
  Globe: <Globe className="w-6 h-6 text-brand-orange" />,
  Palette: <Palette className="w-6 h-6 text-brand-orange" />,
  Code: <Code className="w-6 h-6 text-brand-orange" />,
  Smartphone: <Smartphone className="w-6 h-6 text-brand-orange" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-orange" />,
  Server: <Server className="w-6 h-6 text-brand-orange" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
        featured
          ? 'bg-charcoal-800/90 border-brand-orange/40 hover:border-brand-orange shadow-card-dark hover:shadow-glow-orange'
          : 'bg-charcoal-800/40 border-subtleBorder hover:border-subtleBorderHover hover:bg-charcoal-800/70 shadow-sm'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="p-3 rounded-xl bg-charcoal-900 border border-subtleBorder group-hover:border-brand-orange/50 transition-colors shadow-inner">
            {serviceIcons[service.iconName] || <Globe className="w-6 h-6 text-brand-orange" />}
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-charcoal-900/80 border border-subtleBorder text-mutedGray">
            {service.badge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-mutedGray leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Capabilities List */}
        <div className="mt-6 pt-5 border-t border-subtleBorder/60">
          <span className="text-xs font-semibold text-warmWhite/70 uppercase tracking-wider block mb-2.5">
            Key Capabilities
          </span>
          <ul className="space-y-1.5 text-xs text-mutedGray">
            {service.capabilities.slice(0, 3).map((cap, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/70 flex-shrink-0"></span>
                <span className="truncate">{cap.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Link */}
      <div className="mt-8 pt-4">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-hover transition-colors group/link"
        >
          <span>Explore Service Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
