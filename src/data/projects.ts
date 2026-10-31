import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'pulse-commerce',
    slug: 'pulse-commerce',
    name: 'PulseFlow Digital Retail',
    industry: 'Retail & E-Commerce',
    category: 'Web Development',
    tagline: 'Sub-second headless storefront with instant inventory sync',
    overview: 'Modern headless commerce engine with fluid mobile checkout and sub-second catalog search.',
    servicesDelivered: ['Headless React', 'Design System', 'Stripe Integration', 'Performance'],
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Time to Interactive', value: '0.8s' },
      { label: 'Target Viewports', value: '100% Mobile Ready' }
    ],
    isFeatured: true
  },
  {
    id: 'nexus-analytics-saas',
    slug: 'nexus-analytics-saas',
    name: 'NexusOps Enterprise Portal',
    industry: 'Professional Services & SaaS',
    category: 'Software',
    tagline: 'Enterprise operational dashboard & workflow telemetry',
    overview: 'High-throughput enterprise control panel with fine-grained access control and async task queues.',
    servicesDelivered: ['Custom React', 'Data Visualizations', 'REST & Webhooks', 'Security'],
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'API Response', value: '< 60ms' },
      { label: 'Security Standard', value: 'Role-Based RBAC' },
      { label: 'Architecture', value: 'Modular TypeScript' }
    ],
    isFeatured: true
  },
  {
    id: 'aurora-brand-system',
    slug: 'aurora-brand-system',
    name: 'Aura Living Brand Identity',
    industry: 'Real Estate & Interior Design',
    category: 'Branding',
    tagline: 'Architectural visual identity & digital design tokens',
    overview: 'Bespoke geometric brand system, tactile design tokens, and digital marketing collateral.',
    servicesDelivered: ['Brand Strategy', 'Logo & Vector Assets', 'Design Guidelines', 'Marketing Kit'],
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Design Tokens', value: '120+ Variables' },
      { label: 'Brand Artifacts', value: 'Turnkey Vector Kit' },
      { label: 'Scalability', value: 'Print & Digital Ready' }
    ],
    isFeatured: true
  },
  {
    id: 'vortex-acquisition-campaign',
    slug: 'vortex-acquisition-campaign',
    name: 'Apex Growth Engine',
    industry: 'Emerging Startups & B2B',
    category: 'Marketing',
    tagline: 'High-conversion acquisition & search engine',
    overview: 'Multi-channel acquisition framework pairing search architecture with continuous conversion testing.',
    servicesDelivered: ['SEO Strategy', 'Conversion Optimization', 'Paid Search', 'Analytics'],
    featuredImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Search Coverage', value: 'Semantic Cluster' },
      { label: 'Funnel Tracking', value: 'Full-Attribution' },
      { label: 'Testing Method', value: 'Multivariate UX' }
    ],
    isFeatured: false
  },
  {
    id: 'synapse-ai-pipeline',
    slug: 'synapse-ai-pipeline',
    name: 'Synapse DocuFlow AI',
    industry: 'Healthcare & Legal Operations',
    category: 'AI & Automation',
    tagline: 'Intelligent document parsing & automation engine',
    overview: 'Practical business process automation combining document parsing and schema validation.',
    servicesDelivered: ['AI Orchestration', 'Document Parsing API', 'Error Detection', 'Human-in-the-Loop'],
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Processing Speed', value: 'Seconds per Doc' },
      { label: 'Data Retention', value: 'Zero Cloud Storage' },
      { label: 'Human Verification', value: 'Built-in QA Screen' }
    ],
    isFeatured: false
  },
  {
    id: 'stride-fitness-app',
    slug: 'stride-fitness-app',
    name: 'Stride Active Mobile Experience',
    industry: 'Health & Wellness',
    category: 'Web Development',
    tagline: 'Cross-platform mobile app with biometric sync',
    overview: '60fps mobile interface delivering session logging, offline caching, and native sensor sync.',
    servicesDelivered: ['Cross-Platform UI', 'State Sync', 'Offline Caching', 'Micro-Animations'],
    featuredImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Frame Rate', value: 'Solid 60 FPS' },
      { label: 'Offline Support', value: 'Full Local Cache' },
      { label: 'Compatibility', value: 'iOS & Android' }
    ],
    isFeatured: false
  }
];
