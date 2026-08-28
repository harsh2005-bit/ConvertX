export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  badge?: string;
  href?: string;
}

export interface WhyItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface FunnelStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  metricsPreview: string;
  href?: string;
}

export interface CaseStudyPlaceholder {
  id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CONTACT_EMAIL = "convertxmediazone@gmail.com";
export const CONTACT_PHONE = "+91 92965 69240";
export const CONTACT_PHONE_RAW = "+919296569240";
export const CONTACT_CALL_URL = "tel:+919296569240";
export const CONTACT_WHATSAPP_URL = "https://wa.me/919296569240?text=Hi%20ConvertX%2C%20I'd%20like%20to%20discuss%20growing%20my%20business%20with%20your%20growth%20system.";
export const INSTAGRAM_URL = "https://www.instagram.com/_convertxmedia?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593237397041&ref=PROFILE_EDIT_xav_ig_profile_page_web#";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Why ConvertX", href: "/#why-convertx" },
  { label: "Growth System", href: "/#growth-system" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export const HERO_DEMO_METRICS = {
  spend: "₹1,25,000",
  leads: "1,842",
  conversionRate: "8.7%",
  roas: "4.8x",
};

export const TRUST_PILLARS = [
  { name: "Strategy", desc: "Data-backed acquisition angles tailored to your audience." },
  { name: "Creative", desc: "High-converting ad assets built to stop the scroll." },
  { name: "Performance", desc: "Continuous audience & bidding optimization for scale." },
  { name: "Automation", desc: "WhatsApp API & lead routing for instant response times." },
  { name: "Technology", desc: "Next.js landing pages built for lightning-fast loads." },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "meta-ads",
    number: "01",
    title: "Meta Ads",
    description: "Performance campaigns built around acquisition, conversion and scalable growth.",
    features: [
      "Campaign strategy",
      "Audience research",
      "Creative testing",
      "Retargeting",
      "Conversion optimization",
      "Performance tracking",
    ],
    icon: "Target",
    badge: "Core Service",
    href: "/meta-ads-agency",
  },
  {
    id: "instagram-ads",
    number: "02",
    title: "Instagram Ads",
    description: "Creative-first campaigns designed to turn attention into qualified leads and customers.",
    features: [
      "Reels campaigns",
      "Story ads",
      "Creative testing",
      "Audience targeting",
      "Retargeting",
    ],
    icon: "Instagram",
    badge: "High Growth",
    href: "/instagram-ads",
  },
  {
    id: "agency-accounts",
    number: "03",
    title: "Agency Accounts",
    description: "Reliable advertising infrastructure for businesses and agencies that need scalable campaign operations.",
    features: [
      "High spend limit accounts",
      "Account stability protection",
      "Dedicated tech support",
      "Global ad distribution",
      "Whitelisted features",
    ],
    icon: "ShieldCheck",
    badge: "Infrastructure",
    href: "/agency-accounts",
  },
  {
    id: "whatsapp-api",
    number: "04",
    title: "WhatsApp Business API",
    description: "Turn WhatsApp into a powerful sales and customer communication channel.",
    features: [
      "Business API setup",
      "Automated responses",
      "Lead routing",
      "Campaign messaging",
      "CRM integration",
      "Follow-up automation",
    ],
    icon: "MessageSquare",
    badge: "High Conversion",
    href: "/whatsapp-business-api",
  },
  {
    id: "websites-landing-pages",
    number: "05",
    title: "Websites & Landing Pages",
    description: "Fast, modern websites designed not just to look good, but to convert visitors.",
    features: [
      "Next.js websites",
      "Landing pages",
      "Conversion optimization",
      "Mobile-first design",
      "Analytics integration",
      "SEO",
    ],
    icon: "Layout",
    badge: "Performance Tech",
    href: "/website-development",
  },
  {
    id: "ai-automation",
    number: "06",
    title: "AI & Automation",
    description: "Automate repetitive processes and build smarter systems around your sales and marketing.",
    features: [
      "AI chatbots",
      "Lead automation",
      "Workflow automation",
      "AI integrations",
      "Customer support automation",
    ],
    icon: "Cpu",
    badge: "Next Gen",
    href: "/ai-automation",
  },
];

export const WHY_CONVERTX: WhyItem[] = [
  {
    number: "01",
    title: "Strategy First",
    description: "Every campaign starts with understanding the business, audience and offer.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Creative + Performance",
    description: "We combine compelling creative with data-driven optimization.",
    icon: "Zap",
  },
  {
    number: "03",
    title: "Technology Built In",
    description: "From websites to WhatsApp APIs and automation, technology supports the growth engine.",
    icon: "Code",
  },
  {
    number: "04",
    title: "Transparent Reporting",
    description: "Clear reporting focused on the metrics that matter.",
    icon: "BarChart3",
  },
  {
    number: "05",
    title: "Built To Scale",
    description: "Campaigns and systems designed to grow with your business.",
    icon: "TrendingUp",
  },
  {
    number: "06",
    title: "One Growth Partner",
    description: "Marketing, technology and automation under one roof.",
    icon: "Layers",
  },
];

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    step: "01",
    title: "ATTENTION",
    subtitle: "High-Hook Meta & Instagram Ads",
    description: "Stop the scroll with problem-focused creative angles targeted to qualified buyers.",
    icon: "Megaphone",
  },
  {
    step: "02",
    title: "INTEREST",
    subtitle: "High-Speed Landing Page",
    description: "Sub-second Next.js page load with focused messaging designed strictly to convert.",
    icon: "MousePointerClick",
  },
  {
    step: "03",
    title: "LEAD",
    subtitle: "Instant Capture & Qualification",
    description: "Capture user intent through friction-free dynamic forms and WhatsApp entry points.",
    icon: "UserCheck",
  },
  {
    step: "04",
    title: "CONVERSATION",
    subtitle: "WhatsApp Automation Engine",
    description: "Instant 0-second bot responses, automated qualification, and direct lead distribution.",
    icon: "MessageCircle",
  },
  {
    step: "05",
    title: "SALE",
    subtitle: "Closing & Deal Finalization",
    description: "Nurture qualified buyers with timely push notifications and seamless checkout flows.",
    icon: "DollarSign",
  },
  {
    step: "06",
    title: "RETENTION",
    subtitle: "Automated Re-engagement",
    description: "Maximized customer lifetime value with automated broadcast campaigns and upsells.",
    icon: "Repeat",
  },
];

export const DEMO_SANDBOX_DATA = {
  spend: "₹100M+",
  impressions: "10.8M",
  clicks: "100.4K",
  leads: "100,240",
  cpl: "₹7",
  conversionRate: "100%",
  roas: "100x",
  status: "Active - Scaling",
};

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "e-commerce",
    title: "E-commerce",
    description: "Scalable catalog ads, high-converting checkout flows, and automated WhatsApp cart recovery.",
    icon: "ShoppingBag",
    metricsPreview: "Target ROAS: 3.5x - 5.0x",
    href: "/industries/ecommerce",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "High-intent lead generation campaigns, instant project brochures via WhatsApp, and CRM routing.",
    icon: "Building2",
    metricsPreview: "Verified Buyer Leads",
    href: "/industries/real-estate",
  },
  {
    id: "education",
    title: "Education & EdTech",
    description: "Course enrollment funnels, webinar attendance boosts, and automated student qualification.",
    icon: "GraduationCap",
    metricsPreview: "Frictionless Enrollments",
    href: "/industries/education",
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    description: "Patient appointment bookings, localized Meta campaigns, and automated follow-ups.",
    icon: "Stethoscope",
    metricsPreview: "Qualified Appointments",
    href: "/industries/local-business",
  },
  {
    id: "finance",
    title: "Finance & Fintech",
    description: "Trust-centric acquisition funnels with stringent compliance targeting and high LTV retention.",
    icon: "Wallet",
    metricsPreview: "High-LTV Acquisition",
    href: "/industries/professional-services",
  },
  {
    id: "gaming-ads",
    title: "Gaming & Esports Ads",
    description: "High-impact user acquisition funnels, in-game event promotions, and CPI optimization for gaming studios.",
    icon: "Gamepad2",
    metricsPreview: "Low CPI & High LTV",
    href: "/industries/startups",
  },
  {
    id: "startups",
    title: "High-Growth Startups",
    description: "Rapid offer testing, agile landing page launches, and complete growth system architecture.",
    icon: "Rocket",
    metricsPreview: "Agile Scale Engine",
    href: "/industries/startups",
  },
  {
    id: "professional-services",
    title: "Professional Services",
    description: "B2B client acquisition, high-ticket strategy call bookings, and authority positioning.",
    icon: "Briefcase",
    metricsPreview: "High-Ticket Clients",
    href: "/industries/professional-services",
  },
];

export const CASE_STUDY_PLACEHOLDERS: CaseStudyPlaceholder[] = [
  {
    id: "cs-1",
    category: "Case Study 01",
    title: "E-commerce Growth Architecture",
    description: "Comprehensive Meta ad scaling paired with sub-second Next.js landing pages and WhatsApp abandoned cart automation.",
    status: "Case study coming soon",
    tags: ["Meta Ads", "Landing Page", "WhatsApp API"],
  },
  {
    id: "cs-2",
    category: "Case Study 02",
    title: "Real Estate Lead Generation System",
    description: "Zero-friction buyer lead capture system with instant automated project brochure delivery and CRM integration.",
    status: "Case study coming soon",
    tags: ["Lead Gen", "WhatsApp Bot", "Campaign Strategy"],
  },
  {
    id: "cs-3",
    category: "Case Study 03",
    title: "Gaming Ads & User Acquisition",
    description: "High-converting cross-platform ad campaigns driving low CPI and high-retention player registrations.",
    status: "Case study coming soon",
    tags: ["Gaming Ads", "Player Acquisition", "Scale Funnels"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, audience, offer and goals.",
    deliverables: ["Funnel Audit", "Audience Research", "Offer Optimization Strategy"],
  },
  {
    number: "02",
    title: "Build",
    description: "Create the strategy, campaigns, creative and technology.",
    deliverables: ["Ad Creatives & Copy", "High-Converting Page", "WhatsApp API Flow"],
  },
  {
    number: "03",
    title: "Launch",
    description: "Launch campaigns and systems with proper tracking.",
    deliverables: ["Conversion API Setup", "Campaign Deployment", "Real-Time Tracking"],
  },
  {
    number: "04",
    title: "Optimize",
    description: "Analyze performance and continuously improve.",
    deliverables: ["A/B Creative Testing", "Bid & Audience Tuning", "CPL Reduction"],
  },
  {
    number: "05",
    title: "Scale",
    description: "Scale what works and remove what doesn't.",
    deliverables: ["Budget Scaling", "LTV Retargeting", "Ongoing System Management"],
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "What services does ConvertX provide?",
    answer: "ConvertX provides an integrated performance marketing and tech growth system including Meta Ads, Instagram Ads, Agency Accounts, WhatsApp Business API setup & automation, custom Next.js Websites & Landing Pages, Lead Generation systems, and AI-driven Workflow Automation.",
  },
  {
    question: "Do you manage Meta and Instagram Ads?",
    answer: "Yes. We manage end-to-end Meta and Instagram ad operations — including campaign strategy, audience research, creative development, A/B testing, retargeting, conversion tracking, and ongoing ROAS optimization.",
  },
  {
    question: "Can you help set up WhatsApp Business API?",
    answer: "Absolutely. We set up official WhatsApp Business API infrastructure, build automated response bots, configure lead qualification routing, and connect WhatsApp directly to your ad campaigns and CRM.",
  },
  {
    question: "Do you build websites and landing pages?",
    answer: "Yes. We engineer custom, sub-second landing pages and websites using Next.js and Tailwind CSS. Every page is optimized specifically for mobile responsiveness, speed, and maximum conversion rate.",
  },
  {
    question: "How does the onboarding process work?",
    answer: "Onboarding takes less than 48 hours. After our strategy call, we conduct a quick discovery audit, configure assets, build the campaign and tech infrastructure, and present the launch blueprint for your approval before going live.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We love partnering with ambitious startups. We build lean, high-velocity growth systems designed to validate offers quickly and scale customer acquisition efficiently.",
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is custom-tailored based on your monthly ad spend, tech requirements, and growth goals. We offer transparent retainers and milestone-based growth packages with no hidden fees.",
  },
  {
    question: "How long does it take to launch a campaign?",
    answer: "Most custom campaigns, landing pages, and WhatsApp automation setups are ready for full deployment within 5 to 7 business days from initial discovery.",
  },
  {
    question: "Do you provide reporting?",
    answer: "Yes. You get access to transparent performance metrics focused strictly on business outcomes — cost per lead, conversion rate, customer acquisition cost (CAC), and return on ad spend (ROAS).",
  },
  {
    question: "Can you manage the complete marketing funnel?",
    answer: "Yes. ConvertX is built around complete funnel architecture. We connect traffic generation (Meta Ads) with high-converting pages, WhatsApp automation, and retargeting into one connected revenue engine.",
  },
];
