import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "Website Development Agency India | Custom Next.js Websites",
  description:
    "ConvertX builds lightning-fast, custom Next.js websites engineered for 95+ Google Lighthouse scores, high conversion rates, and seamless CRM integrations.",
  pathname: "/website-development",
  keywords: [
    "Website Development Agency India",
    "Next.js Web Development",
    "High Performance Websites",
    "Custom Web Design India",
    "Fast Loading Business Websites",
    "Core Web Vitals Optimized Websites",
  ],
});

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePageTemplate
      id="website-development"
      badge="Modern Web Engineering"
      h1Title="Website Development Agency in India"
      subtitle="Lightning-Fast, High-Converting Next.js Websites Engineered for Growth."
      description="Your website is the foundation of your digital revenue engine. ConvertX builds custom, sub-second loading Next.js web applications featuring dark glassmorphic design, perfect Core Web Vitals, and built-in conversion pathways."
      url="/website-development"
      serviceType="Web Development & Engineering"
      metrics={[
        { label: "Google PageSpeed Score", value: "95+ / 100", desc: "Across mobile and desktop devices" },
        { label: "Average Page Load Time", value: "<0.8s", desc: "Sub-second initial paint and hydration" },
        { label: "Conversion Lift", value: "2.4x", desc: "Compared to slow WordPress / generic themes" },
        { label: "SEO Readiness", value: "100%", desc: "Pre-rendered static HTML & clean metadata" },
      ]}
      problemSolution={{
        problemTitle: "The Problem with Typical WordPress/Wix Sites",
        problems: [
          "Bloated plugins causing 4–8 second load times and 40%+ mobile visitor drop-off.",
          "Generic templates that fail to convey authority or high-ticket premium branding.",
          "Frequent security vulnerabilities, database errors, and hosting crashes during ad traffic spikes.",
          "Poor mobile responsiveness and non-functional Core Web Vitals.",
        ],
        solutionTitle: "The ConvertX Next.js Engineering Standard",
        solutions: [
          "Custom React / Next.js architecture with static server generation and edge CDN delivery.",
          "Bespoke, premium dark-mode and glassmorphic UI tailored to your exact brand positioning.",
          "Sub-second load times that maximize ad conversion rates and Google SEO rankings.",
          "Zero plugin bloat, rock-solid serverless security, and seamless webhook/API integrations.",
        ],
      }}
      features={[
        {
          title: "Custom Next.js App Router Architecture",
          description: "Server-side rendered and statically generated pages that load instantly and provide search engines with clean HTML.",
          deliverables: ["Next.js App Router Setup", "Tailwind CSS Design System", "Clean Component Architecture"],
          badge: "Ultra Fast",
        },
        {
          title: "Premium Modern UI / UX Design",
          description: "Stunning aesthetic with subtle micro-animations, glassmorphism, responsive typography, and high-contrast conversion elements.",
          deliverables: ["Custom Figma UI Design", "Interactive Prototypes", "Framer Motion Micro-Interactions"],
        },
        {
          title: "Technical SEO & Schema Integration",
          description: "Built-in structured data (JSON-LD), automatic sitemap generation, OpenGraph social cards, and semantic HTML5 tags.",
          deliverables: ["Full Schema.org JSON-LD", "Dynamic XML Sitemap", "Robots.txt & Meta Tags"],
        },
        {
          title: "Integrated Lead Capture & Webhooks",
          description: "Frictionless contact forms and floating WhatsApp widgets that sync directly with your email, CRM, and sales phone.",
          deliverables: ["Serverless API Routes", "CRM Webhook Sync", "Instant Email & WhatsApp Alerts"],
        },
        {
          title: "Core Web Vitals & Speed Optimization",
          description: "Optimized fonts, next-gen WebP/AVIF images, zero unused JavaScript, and instant edge caching via Vercel / AWS.",
          deliverables: ["95+ Lighthouse Score", "LCP < 1.2s", "Zero Layout Shift (CLS < 0.05)"],
        },
        {
          title: "Mobile-First Responsive Testing",
          description: "Pixel-perfect rendering tested across iPhone, Android, tablet, laptop, and ultra-wide monitor screens.",
          deliverables: ["Cross-Browser Compatibility", "Touch Gesture Support", "Responsive Viewport Breakpoints"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Brand & Architecture Discovery",
          description: "We map your site sitemap, core conversion actions, content hierarchy, and technical integrations.",
          outcome: "Wireframe & Technical Blueprint",
        },
        {
          step: "02",
          title: "UI Design & Copywriting",
          description: "We craft persuasive, high-converting copy and design custom Figma layouts matching your brand aesthetic.",
          outcome: "Approved Visual Designs",
        },
        {
          step: "03",
          title: "Next.js Code Implementation",
          description: "We write clean, typed TypeScript and React components with animations and responsive layouts.",
          outcome: "Staging URL for Client Review",
        },
        {
          step: "04",
          title: "Speed Audit & Production Launch",
          description: "We test Core Web Vitals, connect custom domains, configure DNS, and submit sitemaps to Google Search Console.",
          outcome: "Live High-Performance Website",
        },
      ]}
      faqs={[
        {
          question: "Why should we choose Next.js over WordPress or Shopify?",
          answer: "Next.js offers unmatched loading speed (<1s), zero plugin bloat, custom design freedom, superior Core Web Vitals for SEO, and complete serverless reliability that never crashes during heavy ad spikes.",
        },
        {
          question: "How long does a custom website build take?",
          answer: "A standard 5 to 8 page high-performance Next.js marketing website is typically completed and launched within 10 to 14 business days.",
        },
        {
          question: "Can you connect the website to our existing CRM or email marketing tool?",
          answer: "Yes! We build direct serverless API routes connecting form submissions to HubSpot, Zoho, Google Sheets, Brevo, Mailchimp, or custom databases.",
        },
      ]}
      relatedServices={[
        {
          title: "Landing Page Development",
          href: "/landing-pages",
          description: "Dedicated high-converting landers for ad campaigns.",
        },
        {
          title: "Meta Ads Agency",
          href: "/meta-ads-agency",
          description: "Drive high-intent traffic to your fast new website.",
        },
        {
          title: "AI Workflow Automation",
          href: "/ai-automation",
          description: "Automate form inquiries and customer routing.",
        },
      ]}
      relatedIndustries={[
        { title: "Startups & SaaS", href: "/industries/startups" },
        { title: "Professional Services", href: "/industries/professional-services" },
        { title: "Real Estate", href: "/industries/real-estate" },
        { title: "E-Commerce", href: "/industries/ecommerce" },
      ]}
    />
  );
}
