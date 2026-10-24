import { NavLinkItem } from '../types';

export const navigationLinks: NavLinkItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/#services',
    children: [
      {
        label: 'Digital Marketing & Growth',
        href: '/services/digital-marketing',
        description: 'SEO, paid advertising, social campaigns, and ROI optimization',
        badge: 'Acquisition'
      },
      {
        label: 'Website Design & Development',
        href: '/services/web-development',
        description: 'Custom corporate websites, e-commerce, and high-converting landing pages',
        badge: 'Design & Code'
      },
      {
        label: 'Branding & Creative Identity',
        href: '/services/branding-design',
        description: 'Brand strategy, logo marks, visual systems, and marketing collateral',
        badge: 'Creative'
      },
      {
        label: 'Custom Software & Web Apps',
        href: '/services/software-development',
        description: 'Custom SaaS platforms, admin dashboards, and secure API architectures',
        badge: 'Engineering'
      },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-app-development',
        description: 'iOS & Android cross-platform mobile apps with fluid native UX',
        badge: 'Mobile'
      },
      {
        label: 'AI & Business Automation',
        href: '/services/ai-automation',
        description: 'Intelligent workflow pipelines, document extraction, and custom assistants',
        badge: 'Automation'
      },
      {
        label: 'Cloud Infrastructure & DevOps',
        href: '/services/cloud-solutions',
        description: 'Cloud setups, automated CI/CD, 24/7 telemetry, and maintenance',
        badge: 'Infrastructure'
      }
    ]
  },
  {
    label: 'Work',
    href: '/work',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Insights',
    href: '/insights',
  },
  {
    label: 'Contact',
    href: '/contact',
  }
];

export const siteConfig = {
  name: 'AceSutra',
  legalName: 'AceSutra Solutions',
  tagline: 'Where Strategy Meets Creativity and Technology',
  description: 'AceSutra helps ambitious businesses build stronger brands, create powerful digital experiences, and accelerate growth through smart marketing and modern technology.',
  primaryCTA: "Let's Talk",
  email: 'contact@acesutra.com', // Configurable contact email
  availabilityStatus: 'Accepting select new projects for 2025-2026',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/acesutra', isExternal: true },
    { label: 'GitHub', href: 'https://github.com/AceSutra', isExternal: true },
    { label: 'Twitter / X', href: 'https://twitter.com/acesutra', isExternal: true }
  ]
};
