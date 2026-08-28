import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "Landing Page Development India | High-Converting Next.js Landers",
  description:
    "ConvertX designs high-converting, sub-second Next.js landing pages engineered specifically for paid ad traffic (Meta, Google, LinkedIn) with proven 8%+ conversion rates.",
  pathname: "/landing-pages",
  keywords: [
    "Landing Page Development India",
    "High Converting Landing Pages",
    "Landing Page Design for Meta Ads",
    "Conversion Rate Optimization India",
    "Next.js Landing Page Agency",
  ],
});

export default function LandingPagesPage() {
  return (
    <ServicePageTemplate
      id="landing-pages"
      badge="Conversion Rate Optimization"
      h1Title="High-Converting Landing Page Development"
      subtitle="Turn Cold Ad Clicks into Qualified Inquiries and High-Intent Customers."
      description="Sending paid ad traffic to a generic homepage burns your marketing budget. ConvertX engineers high-converting, single-purpose Next.js landing pages with razor-sharp message matching, irresistible value hooks, and frictionless WhatsApp entry points."
      url="/landing-pages"
      serviceType="Landing Page Development & CRO"
      metrics={[
        { label: "Average Conversion Rate", value: "8.5% – 14.2%", desc: "On cold Meta and Google ad traffic" },
        { label: "Initial Load Speed", value: "<0.6s", desc: "Sub-second edge rendered Next.js pages" },
        { label: "Bounce Rate Reduction", value: "40% – 55%", desc: "Through exact ad message matching" },
        { label: "A/B Testing Variants", value: "2–4 Stacks", desc: "Headline and offer split testing" },
      ]}
      problemSolution={{
        problemTitle: "Why Most Ad Landing Pages Burn Cash",
        problems: [
          "Generic messaging that does not match the exact headline or offer from the ad.",
          "Cluttered header navigation links allowing visitors to wander off and bounce.",
          "Slow page loading on mobile networks (3s+), losing half of paid visitors before they read a word.",
          "Long, intimidating contact forms with 8+ required fields.",
        ],
        solutionTitle: "The ConvertX High-Conversion Formula",
        solutions: [
          "100% ad-to-page message match ensuring immediate relevance and trust.",
          "Distraction-free layout with dedicated, clear primary CTA above and below the fold.",
          "Sub-second Next.js edge loading ensuring 0% speed bounce.",
          "Frictionless smart forms combined with 1-click WhatsApp and direct calling options.",
        ],
      }}
      features={[
        {
          title: "Ad-to-Page Message Matching",
          description: "Align the exact hooks, pain points, and terminology from your Meta or Google ads with the landing page headline for zero cognitive friction.",
          deliverables: ["Offer Synchronization", "Above-the-Fold Hook", "Targeted Value Proposition"],
          badge: "Core CRO",
        },
        {
          title: "Interactive Proof & Visual Demos",
          description: "Replace boring static text with interactive UI demos, interactive calculators, product previews, and verified client deliverables.",
          deliverables: ["Product Simulation Cards", "Interactive ROI Sliders", "Real-Time Metric Previews"],
        },
        {
          title: "Sticky Mobile Conversion Navigation",
          description: "A persistent, unobtrusive mobile bottom bar that keeps the 'Book Strategy Call' and 'Chat on WhatsApp' buttons accessible at all scroll depths.",
          deliverables: ["Sticky Mobile CTAs", "One-Tap WhatsApp Button", "Direct Phone Trigger"],
        },
        {
          title: "Objection-Crushing FAQ & Trust Modules",
          description: "Proactively answer client hesitations regarding pricing, onboarding time, and service guarantees before they exit.",
          deliverables: ["Structured Accordion FAQ", "Security & Trust Badges", "Transparent Pricing/Process Tables"],
        },
        {
          title: "Serverless Lead Webhooks & Notifications",
          description: "Forms submit instantaneously without page reloads, triggering immediate WhatsApp, email, and CRM notifications to your sales team.",
          deliverables: ["Instant Form Processing", "Spam & Bot Protection", "CRM API Synchronization"],
        },
        {
          title: "Continuous A/B Variant Testing",
          description: "Test headline hooks, pricing displays, and CTA colors to continuously drive down cost per acquisition.",
          deliverables: ["Split-Testing Setup", "Heatmap & Scroll Tracking", "Weekly Conversion Audits"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Offer & Audience Deconstruction",
          description: "We analyze your ideal customer persona, their primary pain points, and your core commercial offer.",
          outcome: "Landing Page Strategic Blueprint",
        },
        {
          step: "02",
          title: "Direct-Response Copywriting",
          description: "We write persuasive, hook-driven copy covering the hero section, social proof, process, and FAQs.",
          outcome: "Approved Conversion Copy",
        },
        {
          step: "03",
          title: "Next.js UI & Webhook Coding",
          description: "We develop the page using Next.js and Tailwind CSS with animations, responsive layouts, and tracking pixels.",
          outcome: "Staging Page for Verification",
        },
        {
          step: "04",
          title: "Ad Integration & Live Traffic",
          description: "We connect the landing page to your Meta/Google ads and monitor initial conversion rates.",
          outcome: "Active High-Converting Landers",
        },
      ]}
      faqs={[
        {
          question: "Why should we use a dedicated landing page instead of our website?",
          answer: "A standard website is built for general exploration with menus, blogs, and about pages. A landing page has a single focused goal: converting an ad visitor into a lead or customer. Dedicated landing pages consistently convert 2x to 4x higher than standard website pages.",
        },
        {
          question: "How fast can you build and launch a custom landing page?",
          answer: "Our standard turnaround time for a complete custom Next.js landing page (copywriting, design, development, and pixel tracking) is 3 to 5 business days.",
        },
        {
          question: "Can the landing page include WhatsApp integration?",
          answer: "Yes! Every ConvertX landing page includes 1-click WhatsApp buttons, prefilled message links, and optional floating chat widgets.",
        },
      ]}
      relatedServices={[
        {
          title: "Meta Ads Agency",
          href: "/meta-ads-agency",
          description: "Drive high-intent traffic to your new landing page.",
        },
        {
          title: "Website Development",
          href: "/website-development",
          description: "Full multi-page websites built on Next.js.",
        },
        {
          title: "Lead Generation Engines",
          href: "/lead-generation",
          description: "Complete acquisition funnels combining ads and pages.",
        },
      ]}
      relatedIndustries={[
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Startups & SaaS", href: "/industries/startups" },
      ]}
    />
  );
}
