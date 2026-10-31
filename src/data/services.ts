import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    eyebrow: 'GROWTH • PERFORMANCE • ENGAGEMENT',
    badge: 'Marketing',
    shortDescription: 'Data-driven customer acquisition, targeted search visibility, and multi-channel performance loops.',
    fullDescription: 'We help brands break through noise with a holistic acquisition engine. By combining data analytics, creative messaging, search visibility, and paid media precision, we build repeatable growth loops that turn prospects into loyal customers.',
    problemStatement: 'Many businesses pour marketing budgets into siloed campaigns that look busy on paper but fail to convert qualified buyers or yield measurable customer lifetime value.',
    solutionOverview: 'AceSutra synchronizes SEO, paid search, performance ads, and organic content into a single cohesive funnel with continuous attribution and conversion rate optimization.',
    iconName: 'TrendingUp',
    capabilities: [
      {
        title: 'Search Engine Optimization (SEO)',
        description: 'Technical site audits, semantic content architecture, and authority building to secure sustainable organic search rankings.'
      },
      {
        title: 'Paid Media & Performance Marketing',
        description: 'Precision targeting on Google Ads, Meta, and LinkedIn with continuous testing of ad creatives, bids, and landing pages.'
      },
      {
        title: 'Content & Social Media Strategy',
        description: 'Editorial brand storytelling and social campaigns designed to engage decision-makers and build brand affinity.'
      },
      {
        title: 'Analytics & Funnel Optimization',
        description: 'Multi-touch attribution models, conversion tracking, and data-driven insights to maximize marketing spend efficiency.'
      }
    ],
    benefits: [
      'Lower customer acquisition costs through continuous conversion optimization',
      'Long-term organic compounding through authoritative search rankings',
      'Transparent attribution reporting with clear business metrics, not vanity likes',
      'Unified brand messaging across all paid and organic digital channels'
    ],
    process: [
      { step: '01', title: 'Audience & Competitor Audit', description: 'Analyze customer search behavior, competitive positioning, and current marketing leakage.' },
      { step: '02', title: 'Growth Architecture', description: 'Define target CPA, audience segments, campaign structures, and messaging frameworks.' },
      { step: '03', title: 'Execution & Creative Launch', description: 'Deploy campaigns, search optimizations, and landing pages with tracking instrumentation.' },
      { step: '04', title: 'Attribution & Optimization', description: 'Review weekly cohort metrics, reallocate budget to top performers, and iterate creatives.' }
    ],
    faqs: [
      {
        question: 'How quickly can we expect to see results from digital marketing?',
        answer: 'Paid campaigns (Google Ads, Meta) generate qualified traffic within days of launch. Organic search engine optimization typically shows substantial traction and compounding returns within 3 to 6 months.'
      },
      {
        question: 'How do you measure campaign success and return on ad spend?',
        answer: 'We establish key performance indicators tied to revenue: cost per acquisition (CPA), qualified leads, conversion rates, and return on ad spend (ROAS), tracked through verified analytics dashboards.'
      },
      {
        question: 'Do you manage both creative assets and campaign technical setup?',
        answer: 'Yes. AceSutra provides full-funnel management including ad copywriting, visual creatives, landing page optimization, tracking pixel setup, and weekly bid management.'
      }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Website Design & Development',
    eyebrow: 'EXPERIENCE • SPEED • CONVERSION',
    badge: 'Web Design',
    shortDescription: 'High-performance digital flagships and web applications engineered for sub-second speed.',
    fullDescription: 'Your website is the digital front door to your business. We engineer modern, accessible, and responsive web platforms that balance visual elegance with technical performance, accessibility, and high conversion rates.',
    problemStatement: 'Generic templates and bloated legacy page-builders result in sluggish load times, weak mobile usability, poor search rankings, and lost sales opportunities.',
    solutionOverview: 'We design custom digital experiences using modern frameworks like React and Next.js, with semantic HTML, fluid typography, and sub-second load times that keep visitors engaged.',
    iconName: 'Globe',
    capabilities: [
      {
        title: 'Corporate & Brand Websites',
        description: 'Distinctive, custom-crafted digital flagships that communicate positioning and instill executive-level confidence.'
      },
      {
        title: 'High-Converting Landing Pages',
        description: 'Focused campaign landing pages optimized for maximum click-throughs, lead capture, and product signups.'
      },
      {
        title: 'E-Commerce Solutions',
        description: 'Frictionless checkout flows, scalable product catalogs, and secure payment integrations built for high volume.'
      },
      {
        title: 'UI/UX Design & Prototyping',
        description: 'Wireframing, interactive Figma prototypes, and user journey mapping grounded in usability principles.'
      }
    ],
    benefits: [
      'Sub-second load times and perfect Core Web Vitals scores',
      'Flawless responsiveness across smartphone, tablet, laptop, and ultra-wide screens',
      'Built-in search engine optimization and WCAG 2.2 accessibility compliance',
      'Easy content management workflows tailored to your marketing team'
    ],
    process: [
      { step: '01', title: 'Discovery & Information Architecture', description: 'Define user journeys, sitemaps, key messaging goals, and conversion paths.' },
      { step: '02', title: 'UI/UX Design Systems', description: 'Create high-fidelity interactive prototypes with custom typography and brand components.' },
      { step: '03', title: 'Frontend Engineering', description: 'Build responsive, accessible, and fast code using modern React and Tailwind CSS.' },
      { step: '04', title: 'Testing & Launch', description: 'Comprehensive cross-browser testing, SEO audits, speed optimizations, and deployment.' }
    ],
    faqs: [
      {
        question: 'Do you build on custom frameworks or content management systems?',
        answer: 'We build with modern frameworks (React, Next.js, Vite) paired with headless CMS options (Sanity, Strapi, Contentful) or lightweight static configurations based on your business needs.'
      },
      {
        question: 'Will our website be mobile-friendly and fast?',
        answer: 'Every website we deliver is built mobile-first and optimized for Core Web Vitals, ensuring quick load times across all network speeds and device viewports.'
      },
      {
        question: 'Can our internal team easily update text and images later?',
        answer: 'Yes. We structure content cleanly into manageable modules or integrate an intuitive visual editor so non-technical staff can update copy, blog articles, and images effortlessly.'
      }
    ]
  },
  {
    id: 'branding-design',
    slug: 'branding-design',
    title: 'Branding & Creative Identity',
    eyebrow: 'IDENTITY • STORYTELLING • IMPACT',
    badge: 'Branding',
    shortDescription: 'Bespoke visual identity systems, typography standards, and brand design guidelines.',
    fullDescription: 'Great branding is more than a logo; it is the emotional signature of your business. We craft cohesive visual and verbal identities that articulate your unique value, command trust, and differentiate you in crowded markets.',
    problemStatement: 'Inconsistent brand assets and generic visual languages make companies forgettable, diluting customer trust and eroding pricing power.',
    solutionOverview: 'AceSutra creates comprehensive brand systems—from brand strategy and logo marks to typography, color palettes, and tone of voice—that translate consistently across all touchpoints.',
    iconName: 'Palette',
    capabilities: [
      {
        title: 'Brand Strategy & Positioning',
        description: 'Clarifying brand personality, market differentiation, core messaging pillars, and audience emotional resonance.'
      },
      {
        title: 'Logo & Visual Identity Systems',
        description: 'Iconic logo design, bespoke icon sets, responsive lockups, and deliberate color harmonies.'
      },
      {
        title: 'Comprehensive Brand Guidelines',
        description: 'Detailed style guides specifying typography hierarchies, color codes, spacing rules, and usage standards.'
      },
      {
        title: 'Marketing & Sales Collateral',
        description: 'Pitch decks, social media templates, brochures, stationery, and digital advertising assets.'
      }
    ],
    benefits: [
      'Instant brand recognition that sets you apart from competitors',
      'Consistent customer experience across digital, physical, and print touchpoints',
      'Higher perceived value that supports premium pricing and customer confidence',
      'Turnkey asset libraries ready for internal teams and external agencies'
    ],
    process: [
      { step: '01', title: 'Brand Discovery', description: 'Uncover your core values, audience expectations, and competitive whitespace.' },
      { step: '02', title: 'Concept Exploration', description: 'Develop distinct visual territories exploring moodboards, marks, and typography.' },
      { step: '03', title: 'Refinement & Systemization', description: 'Refine chosen concept into a robust design system with exact color tokens.' },
      { step: '04', title: 'Guidelines & Asset Export', description: 'Produce complete vector asset kits, style guides, and practical templates.' }
    ],
    faqs: [
      {
        question: 'What deliverables do we receive at the end of a branding project?',
        answer: 'You receive vector logo assets (SVG, EPS, PDF, high-res PNG), a comprehensive brand guidelines manual, color palette specifications, font licensing recommendations, and core collateral templates.'
      },
      {
        question: 'Can you refresh an existing brand without losing our current brand equity?',
        answer: 'Yes. We often execute brand evolutions that modernize visual language, improve digital readability, and sharpen positioning while preserving existing name recognition.'
      }
    ]
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Web Applications & Custom Software',
    eyebrow: 'SCALABILITY • ARCHITECTURE • AUTOMATION',
    badge: 'Software',
    shortDescription: 'Scalable custom web platforms, client portals, and resilient API architectures.',
    fullDescription: 'When off-the-shelf software restricts your ambition, we build tailor-made digital platforms. From SaaS products to enterprise admin portals, we write clean, maintainable, and secure code built to handle business complexity.',
    problemStatement: 'Disjointed off-the-shelf tools and manual spreadsheets create communication bottlenecks, data fragmentation, and operational overhead that limit business scaling.',
    solutionOverview: 'We design bespoke web applications with modern frontend and backend architectures, robust database models, and secure role-based access controls.',
    iconName: 'Code',
    capabilities: [
      {
        title: 'Custom Web Applications & SaaS',
        description: 'End-to-end software development featuring modern tech stacks, automated testing, and CI/CD pipelines.'
      },
      {
        title: 'Admin Portals & Management Dashboards',
        description: 'Intuitive business operations dashboards with real-time reporting, filtering, and role-based permissions.'
      },
      {
        title: 'API Engineering & Integration',
        description: 'RESTful and GraphQL APIs connecting disparate third-party services, CRMs, ERPs, and billing engines.'
      },
      {
        title: 'Database Design & Optimization',
        description: 'Relational and document database architectures optimized for data integrity, query speed, and security.'
      }
    ],
    benefits: [
      'Eliminate manual data entry and human operational errors',
      'Own your intellectual property with no restrictive per-seat licensing fees',
      'Engineered to scale gracefully as user traffic and database records multiply',
      'Enterprise security standards with encryption and strict authentication controls'
    ],
    process: [
      { step: '01', title: 'Technical Scoping', description: 'Specify user personas, database schemas, API contracts, and security requirements.' },
      { step: '02', title: 'Architecture & UX Wireframes', description: 'Design workflow wireframes, data flows, and infrastructure blueprints.' },
      { step: '03', title: 'Agile Sprint Development', description: 'Two-week development sprints with continuous code reviews and test validation.' },
      { step: '04', title: 'Deployment & Support', description: 'Automated CI/CD staging, production launch, monitoring, and maintenance documentation.' }
    ],
    faqs: [
      {
        question: 'What tech stack do you recommend for custom software?',
        answer: 'We specialize in TypeScript, React, Next.js, Node.js, Python, PostgreSQL, and modern cloud primitives (AWS, GCP, Supabase) selected to match your specific latency and scaling requirements.'
      },
      {
        question: 'Who owns the intellectual property and code repository?',
        answer: 'You maintain 100% ownership of all source code, design assets, and database schemas created for your project.'
      }
    ]
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    eyebrow: 'NATIVE • HYBRID • ENGAGING',
    badge: 'Mobile Apps',
    shortDescription: 'Fluid 60fps iOS and Android applications with offline caching and native sensor sync.',
    fullDescription: 'Connect with your customers directly in their pocket. We design and develop cross-platform and native mobile applications that deliver native fluidity, push notification engagement, and secure authentication.',
    problemStatement: 'Poorly constructed mobile apps suffer from clunky navigation, battery drain, slow startup times, and negative app store ratings.',
    solutionOverview: 'Using React Native and Flutter, we engineer cross-platform apps that share a unified codebase without sacrificing native feel, 60fps animations, or platform conventions.',
    iconName: 'Smartphone',
    capabilities: [
      {
        title: 'Cross-Platform App Development',
        description: 'Cost-efficient iOS and Android applications with high code reuse, rapid feature rollout, and unified maintenance.'
      },
      {
        title: 'Customer-Facing Consumer Apps',
        description: 'E-commerce, loyalty programs, booking systems, and subscription platforms with frictionless user onboarding.'
      },
      {
        title: 'Internal Field & Enterprise Apps',
        description: 'Mobile workflow tools for logistics, inspection, field service, and inventory tracking with offline sync.'
      },
      {
        title: 'App Store Submission & Maintenance',
        description: 'Guidance through Apple App Store and Google Play review policies, signing, release management, and updates.'
      }
    ],
    benefits: [
      'Single codebase deployment saves up to 40% on initial engineering and ongoing maintenance',
      'Smooth 60fps user experience with native haptic feedback and gestures',
      'Offline-first data caching ensures uninterrupted functionality in low-signal environments',
      'Targeted push notifications to drive user re-engagement and retention'
    ],
    process: [
      { step: '01', title: 'Mobile UX & Device Mapping', description: 'Design mobile gestures, screen navigation paths, and offline state behaviors.' },
      { step: '02', title: 'Interactive Prototype', description: 'Validate clickable prototypes on physical test devices before writing production code.' },
      { step: '03', title: 'Core App Engineering', description: 'Implement state management, API synchronization, background tasks, and notifications.' },
      { step: '04', title: 'Store Deployment', description: 'Manage sandbox testing with TestFlight / Google Play internal tracks and publish.' }
    ],
    faqs: [
      {
        question: 'Do you build native or cross-platform apps?',
        answer: 'We primarily recommend React Native or Flutter because they deliver native performance while allowing a single codebase to support both iOS and Android, saving substantial time and cost.'
      },
      {
        question: 'Will you handle submitting the app to Apple and Google?',
        answer: 'Yes. We manage the entire store submission process, compliance checklists, app review requirements, and privacy disclosures.'
      }
    ]
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Business Process Automation',
    eyebrow: 'EFFICIENCY • INTELLIGENCE • SCALE',
    badge: 'AI & Automation',
    shortDescription: 'Practical AI workflows, intelligent document parsing, and automated webhook pipelines.',
    fullDescription: 'Harness practical artificial intelligence to streamline business operations. We implement intelligent automations that free your team from mundane data entry, accelerate decision-making, and deliver customized customer interactions.',
    problemStatement: 'Valuable team hours are wasted on repetitive copy-pasting between systems, manual data sorting, and delayed customer triage.',
    solutionOverview: 'AceSutra identifies high-friction business bottlenecks and deploys robust automation pipelines integrating LLMs, webhook orchestrations, and internal databases.',
    iconName: 'Cpu',
    capabilities: [
      {
        title: 'Intelligent Workflow Automation',
        description: 'Automating multi-step business logic across CRMs, email, payment systems, and internal operational tools.'
      },
      {
        title: 'Custom AI Assistants & Knowledge Bases',
        description: 'Internal question-answering bots and customer support co-pilots trained securely on your company documentation.'
      },
      {
        title: 'Document & Data Extraction',
        description: 'Extracting structured data from invoices, contracts, receipts, and customer forms with automated verification.'
      },
      {
        title: 'System Integration & Webhook Pipelines',
        description: 'Resilient event-driven pipelines that sync data instantly across platforms with error alerting.'
      }
    ],
    benefits: [
      'Eliminate 60-80% of repetitive operational tasks for customer support and admin teams',
      'Near-instant turnaround on document processing and lead qualification',
      'Maintain enterprise privacy: your proprietary business data is never used to train public models',
      'Audit logs and human-in-the-loop approvals for sensitive transactions'
    ],
    process: [
      { step: '01', title: 'Process Bottleneck Audit', description: 'Identify repetitive time sinks with high volume and measurable automation ROI.' },
      { step: '02', title: 'Pipeline Blueprint', description: 'Map data inputs, validation gates, fallback paths, and AI model parameters.' },
      { step: '03', title: 'Prototype & Integration', description: 'Build automated workflows, connect APIs, and establish human review triggers.' },
      { step: '04', title: 'Validation & Monitoring', description: 'Run parallel shadow tests, refine edge cases, and launch with uptime monitoring.' }
    ],
    faqs: [
      {
        question: 'Is our company data secure when using AI integrations?',
        answer: 'Yes. We prioritize data sovereignty and zero-data-retention APIs. Your proprietary customer records and intellectual property are never shared or used to train public models.'
      },
      {
        question: 'Do we need a dedicated machine learning engineer to maintain this?',
        answer: 'No. We build accessible, reliable pipelines using modular architectures and automated error-handling that can be managed by standard IT staff or supported through our maintenance plans.'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    slug: 'cloud-solutions',
    title: 'Cloud Infrastructure & Managed DevOps',
    eyebrow: 'RELIABILITY • SECURITY • UPTIME',
    badge: 'Cloud & Support',
    shortDescription: 'Hardened cloud architecture, automated CI/CD pipelines, and 99.99% uptime monitoring.',
    fullDescription: 'Modern digital platforms require resilient infrastructure. We architect, configure, and maintain secure cloud environments that guarantee rapid response times, automated backups, and protection against downtime.',
    problemStatement: 'Unmonitored servers, outdated packages, manual deployments, and lack of automated failovers lead to unexpected outages and vulnerabilities.',
    solutionOverview: 'We configure modern serverless and containerized cloud solutions on AWS, Google Cloud, and Cloudflare with automated CI/CD and 24/7 telemetry.',
    iconName: 'Server',
    capabilities: [
      {
        title: 'Cloud Architecture & Setup',
        description: 'High-availability infrastructure design on AWS, GCP, Vercel, and Cloudflare configured for elastic scaling.'
      },
      {
        title: 'CI/CD & Automated Deployments',
        description: 'Automated build, test, and release pipelines ensuring zero-downtime updates with instant rollback capabilities.'
      },
      {
        title: 'Website & App Maintenance',
        description: 'Proactive dependency updates, security patching, uptime monitoring, and database backup verification.'
      },
      {
        title: 'Security, SSL & CDN Optimization',
        description: 'DDoS protection, Web Application Firewall (WAF) rules, SSL lifecycle management, and global edge caching.'
      }
    ],
    benefits: [
      'Guaranteed high availability and global sub-100ms response times via edge CDN caching',
      'Automated disaster recovery and daily encrypted off-site backups',
      'Proactive monitoring catches potential bottlenecks before they impact end users',
      'Cost optimization to eliminate over-provisioned cloud server expenses'
    ],
    process: [
      { step: '01', title: 'Infrastructure Assessment', description: 'Review security posture, performance bottlenecks, and recurring cloud hosting costs.' },
      { step: '02', title: 'Architecture Blueprint', description: 'Design automated, scalable infrastructure with redundancy and least-privilege security.' },
      { step: '03', title: 'Migration & CI/CD Setup', description: 'Zero-downtime transfer, automated build pipeline configuration, and DNS cutover.' },
      { step: '04', title: 'Continuous Telemetry', description: 'Enable 24/7 latency alerting, error tracking, and scheduled maintenance.' }
    ],
    faqs: [
      {
        question: 'Which cloud platforms do you support?',
        answer: 'We work across AWS, Google Cloud Platform, Microsoft Azure, Cloudflare, Vercel, and modern container platforms tailored to your budget and compliance needs.'
      },
      {
        question: 'Do you offer ongoing monthly maintenance and technical support?',
        answer: 'Yes. We provide flexible managed service agreements covering continuous security patching, uptime monitoring, backup testing, and priority developer hours.'
      }
    ]
  }
];
