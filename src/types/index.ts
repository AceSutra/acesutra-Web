export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  solutionOverview: string;
  iconName: string;
  badge: string;
  capabilities: ServiceCapability[];
  benefits: string[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  industry: string;
  category: 'Marketing' | 'Web Development' | 'Branding' | 'Software' | 'AI & Automation';
  tagline: string;
  overview: string;
  servicesDelivered: string[];
  featuredImage: string;
  externalUrl?: string;
  stats?: { label: string; value: string }[];
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  industry: string;
  rating?: number;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedDate: string;
  excerpt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  featuredImage: string;
  tags: string[];
  contentParagraphs: string[];
}

export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  isExternal?: boolean;
  children?: NavLinkItem[];
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  companyName?: string;
  phone?: string;
  serviceOfInterest: string;
  budget?: string;
  timeline?: string;
  projectDescription: string;
  privacyConsent: boolean;
}
