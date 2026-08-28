import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "Performance Marketing Agency India | Full-Funnel Growth & ROAS",
  description:
    "ConvertX is an ROI-driven performance marketing agency in India. We combine Meta Ads, high-speed landing pages, WhatsApp automation, and precision attribution to scale revenue profitably.",
  pathname: "/performance-marketing",
  keywords: [
    "Performance Marketing Agency India",
    "Performance Marketing Services",
    "Full Funnel Digital Marketing",
    "ROAS Optimization Agency",
    "Growth Marketing Agency India",
  ],
});

export default function PerformanceMarketingPage() {
  return (
    <ServicePageTemplate
      id="performance-marketing"
      badge="Full-Funnel Growth"
      h1Title="Performance Marketing Agency in India"
      subtitle="Data-Driven Acquisition, Conversion Optimization, and Scalable Revenue."
      description="Stop treating marketing channels like isolated silos. ConvertX engineers connected performance marketing engines that align paid traffic generation (Meta Ads), sub-second Next.js conversion pages, WhatsApp automation, and backend CRM tracking into a unified growth machine."
      url="/performance-marketing"
      serviceType="Performance Marketing & Growth Strategy"
      metrics={[
        { label: "Blended ROAS", value: "4.2x – 7.5x", desc: "Across scaled multi-channel campaigns" },
        { label: "End-to-End Tracking", value: "100%", desc: "Server-side attribution and conversion sync" },
        { label: "Average Growth Rate", value: "3.2x", desc: "Within first 90 days of execution" },
        { label: "Execution Speed", value: "5–7 Days", desc: "From onboarding to live deployment" },
      ]}
      problemSolution={{
        problemTitle: "The Disconnected Agency Model",
        problems: [
          "Media buyers running ads without understanding the landing page or checkout experience.",
          "Web developers building slow websites without knowing how ad pixels function.",
          "Sales teams struggling to follow up with leads due to lack of automation.",
          "Vanity metrics like 'impressions' and 'clicks' masking poor bottom-line profit.",
        ],
        solutionTitle: "The ConvertX Integrated System",
        solutions: [
          "Unified strategy: Media buying + Landing pages + WhatsApp automation + CRM under one roof.",
          "Obsessive focus on commercial metrics: Customer Acquisition Cost (CAC), ROAS, and closed deals.",
          "Server-side attribution loops feeding Meta AI with high-value buyer data.",
          "Continuous rapid creative iteration keeping ad fatigue at zero.",
        ],
      }}
      features={[
        {
          title: "Full-Funnel Media Architecture",
          description: "Structured customer acquisition campaigns across Top of Funnel (Discovery), Middle of Funnel (Consideration), and Bottom of Funnel (Closing).",
          deliverables: ["Channel Budget Allocation", "Audience Stacking Strategy", "Bid Cap & Cost Control Playbook"],
          badge: "Holistic",
        },
        {
          title: "Creative-Led Performance Engine",
          description: "High-volume video hook testing, UGC direct-response frameworks, and conversion copywriting tailored to your target audience.",
          deliverables: ["Weekly Creative Sprints", "Video Ad Scripts", "Dynamic Ad Testing"],
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          description: "Sub-second Next.js landing pages and frictionless checkout flows that double your visitor-to-customer conversion rate.",
          deliverables: ["Dedicated Next.js Landers", "Heatmap & Funnel Drop-off Audits", "A/B Variant Testing"],
        },
        {
          title: "WhatsApp Automated Lead Nurturing",
          description: "Instant conversational engagement capturing verified phone numbers and qualifying prospects within 30 seconds.",
          deliverables: ["CTWA Ad Sync", "Interactive Qualification Bots", "Automated Drip Broadcasts"],
        },
        {
          title: "Server-Side Tracking (Meta CAPI + GA4)",
          description: "Bypass ad blockers and iOS tracking limitations with robust server-to-server data pipelines.",
          deliverables: ["Meta Conversions API", "Offline Deal Uploads", "Custom Event Attribution"],
        },
        {
          title: "Commercial Profit & ROAS Reporting",
          description: "Clear live dashboards displaying blended customer acquisition cost, pipeline revenue, and true return on ad spend.",
          deliverables: ["Live Analytics Dashboard", "Weekly Growth Reviews", "Direct WhatsApp Support Line"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Funnel & Unit Economics Audit",
          description: "We analyze your margins, historical customer acquisition cost, conversion bottlenecks, and competitor positioning.",
          outcome: "Growth Strategy Roadmap",
        },
        {
          step: "02",
          title: "Tech, Tracking & Landing Page Build",
          description: "We deploy Next.js landing pages, Meta CAPI server tracking, and WhatsApp qualification bots.",
          outcome: "Integrated Conversion Infrastructure",
        },
        {
          step: "03",
          title: "Creative Sprints & Validation",
          description: "We launch structured ad creative tests to isolate winning audience hooks and optimize CPA.",
          outcome: "Validated Profit Angles",
        },
        {
          step: "04",
          title: "Budget Scale & LTV Optimization",
          description: "We aggressively scale daily budgets into winning assets while maintaining strict profitability targets.",
          outcome: "Predictable, Scalable Revenue Engine",
        },
      ]}
      faqs={[
        {
          question: "How does performance marketing differ from standard digital marketing?",
          answer: "Traditional digital marketing focuses on vanity metrics like follower counts, likes, and impressions. Performance marketing is 100% focused on measurable commercial outcomes: Cost Per Lead (CPL), Customer Acquisition Cost (CAC), and Return on Ad Spend (ROAS).",
        },
        {
          question: "What channels do you manage under performance marketing?",
          answer: "We primarily specialize in Meta Ads (Facebook & Instagram), Click-to-WhatsApp conversational funnels, Next.js high-converting landing pages, and backend CRM automations.",
        },
        {
          question: "How quickly do we see results?",
          answer: "Because we launch with pre-tested creative frameworks and high-speed landing pages, initial campaign validation occurs within 48 to 72 hours of live deployment.",
        },
      ]}
      relatedServices={[
        {
          title: "Meta Ads Agency",
          href: "/meta-ads-agency",
          description: "Specialized Facebook & Instagram ad management.",
        },
        {
          title: "WhatsApp Business API",
          href: "/whatsapp-business-api",
          description: "Conversational commerce and lead automation.",
        },
        {
          title: "Landing Page Development",
          href: "/landing-pages",
          description: "Sub-second Next.js pages designed for ad traffic.",
        },
      ]}
      relatedIndustries={[
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "Startups & SaaS", href: "/industries/startups" },
      ]}
    />
  );
}
