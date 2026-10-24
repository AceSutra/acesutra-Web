import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'pulse-commerce',
    slug: 'pulse-commerce',
    name: 'PulseFlow Digital Retail',
    industry: 'Retail & E-Commerce',
    category: 'Web Development',
    tagline: 'High-speed headless commerce platform with dynamic inventory synchronization',
    overview: 'A concept implementation demonstrating a modern sub-second headless storefront with instant search, fluid mobile checkout, and automated fulfillment webhooks.',
    servicesDelivered: ['Headless React Frontend', 'Tailwind Design System', 'Stripe Integration', 'Performance Tuning'],
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
    tagline: 'Role-based operational dashboard and automated workflow orchestrator',
    overview: 'An architecture demo featuring an enterprise data control panel with interactive telemetry charts, fine-grained access control, and asynchronous task queues.',
    servicesDelivered: ['Custom React Application', 'Interactive Data Visualizations', 'REST & Webhook Integration', 'Security Hardening'],
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
    tagline: 'Comprehensive visual identity system, brand manual, and digital design tokens',
    overview: 'A brand identity system designed to embody architectural refinement. Features a geometric logo mark, curated earth-tone palettes, bespoke typography standards, and digital marketing kits.',
    servicesDelivered: ['Brand Strategy', 'Logo & Vector Assets', 'Design System Guidelines', 'Marketing Collateral'],
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
    tagline: 'Multi-channel acquisition framework with high-conversion landing page funnels',
    overview: 'A demonstration framework pairing search engine optimization architecture with targeted paid campaign funnels and continuous conversion testing.',
    servicesDelivered: ['Search Engine Optimization', 'Conversion Rate Optimization', 'Paid Search Architecture', 'Funnel Analytics'],
    featuredImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Search Coverage', value: 'Semantic Cluster Model' },
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
    tagline: 'Automated invoice and document parsing engine with zero-data-retention compliance',
    overview: 'A demonstration of practical business process automation combining structured document parsing, automated schema validation, and webhook event dispatching.',
    servicesDelivered: ['AI Workflow Orchestration', 'Document Parsing API', 'Error Detection Gates', 'Human-in-the-Loop UI'],
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
    tagline: 'Cross-platform mobile application with offline workout tracking and biometric sync',
    overview: 'A mobile interface prototype delivering smooth 60fps animations, intuitive session logging, offline state persistence, and native sensor synchronization.',
    servicesDelivered: ['Cross-Platform Mobile UI', 'State Synchronization', 'Offline Data Caching', 'Custom Micro-Animations'],
    featuredImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Frame Rate', value: 'Solid 60 FPS' },
      { label: 'Offline Support', value: 'Full Local Cache' },
      { label: 'Compatibility', value: 'iOS & Android' }
    ],
    isFeatured: false
  }
];
