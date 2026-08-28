import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "Meta Ads Agency in India | Facebook Advertising & Scaling",
  description:
    "ConvertX is a premier Meta Ads agency in India. We build data-backed Facebook & Instagram ad campaigns that lower CPL, scale ROAS, and generate high-intent customer inquiries.",
  pathname: "/meta-ads-agency",
  keywords: [
    "Meta Ads Agency India",
    "Facebook Ads Agency India",
    "Meta Advertising Agency",
    "Facebook Performance Marketing",
    "Meta Ads Management",
    "Lower Cost Per Lead Meta",
  ],
});

export default function MetaAdsAgencyPage() {
  return (
    <ServicePageTemplate
      id="meta-ads-agency"
      badge="Core Growth Service"
      h1Title="Meta Ads Agency in India"
      subtitle="Data-Backed Facebook & Instagram Advertising Built for Scalable Revenue."
      description="We engineer full-funnel Meta advertising systems tailored for Indian and global growth brands. From high-converting video creative testing to automated WhatsApp lead routing, we turn ad spend into profitable revenue."
      url="/meta-ads-agency"
      serviceType="Meta Advertising & Performance Marketing"
      metrics={[
        { label: "Target ROAS Range", value: "3.5x – 6.8x", desc: "For tested e-commerce & D2C funnels" },
        { label: "Average CPL Reduction", value: "32% – 48%", desc: "Through creative-led qualification" },
        { label: "Ad Creatives Tested", value: "20+/mo", desc: "Rapid hook and angle iterations" },
        { label: "Tracking Precision", value: "100%", desc: "Meta Conversions API + CAPI server sync" },
      ]}
      problemSolution={{
        problemTitle: "Typical Meta Agency Pitfalls",
        problems: [
          "Wasting 60%+ of budget on outdated micro-interest targeting that drives low-quality clicks.",
          "Reusing the same static creative for months, resulting in rapid audience ad fatigue.",
          "Sending cold ad traffic to slow, bloated websites with 10-field forms that drop leads.",
          "Zero integration between ad submission and sales team follow-up.",
        ],
        solutionTitle: "The ConvertX Meta Scaling Framework",
        solutions: [
          "Creative-led audience qualification using high-impact Reels, Carousels, and Video hooks.",
          "Server-side Meta Conversions API (CAPI) configuration for pixel-perfect attribution.",
          "Direct integration with Click-to-WhatsApp and Next.js sub-second landing pages.",
          "Rapid creative sprint cycles testing 5+ new angles weekly to prevent ad fatigue.",
        ],
      }}
      features={[
        {
          title: "Full-Funnel Campaign Architecture",
          description: "Structured TOFU (Cold Discovery), MOFU (Consideration), and BOFU (Retargeting) campaigns designed to prevent audience cannibalization.",
          deliverables: ["Custom Funnel Blueprint", "Audience Segmentation", "Budget Allocation Plan"],
          badge: "Foundation",
        },
        {
          title: "Creative Strategy & High-CTR Copy",
          description: "Scroll-stopping video ad scripts, UGC frameworks, and conversion copy that addresses customer pain points directly.",
          deliverables: ["Weekly Creative Briefs", "Headline Hook Testing", "Ad Copy Variations"],
        },
        {
          title: "Server-Side Tracking & Meta CAPI",
          description: "Bypass iOS privacy restrictions and ad-blockers by syncing server-side purchase and lead data directly to Meta's algorithm.",
          deliverables: ["Meta Pixel + CAPI Setup", "Custom Offline Conversion Events", "Event Match Quality >8.0"],
        },
        {
          title: "Click-to-WhatsApp Ad Flows",
          description: "Connect your ads directly to official WhatsApp Business API flows for instant qualification and zero-form drop-off.",
          deliverables: ["CTWA Ad Setup", "Instant Welcome Automation", "CRM Lead Logging"],
        },
        {
          title: "Continuous A/B Bid & Budget Optimization",
          description: "Algorithmic Advantage+ scaling, cost-cap controls, and manual bid testing to protect margins during high-spend periods.",
          deliverables: ["Daily Bid Adjustments", "Budget Rebalancing", "Ad Fatigue Management"],
        },
        {
          title: "Transparent Live Reporting Dashboard",
          description: "Real-time visibility into ad spend, cost per lead, cost per acquisition, and blended ROAS without confusing vanity metrics.",
          deliverables: ["Live Performance Dashboard", "Weekly Strategy Review", "Slack/WhatsApp Comms"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Account & Funnel Audit",
          description: "We analyze your past ad data, pixel health, audience overlap, and competitor advertising angles.",
          outcome: "Comprehensive Growth & Creative Audit",
        },
        {
          step: "02",
          title: "Tracking & Creative Production",
          description: "We deploy Meta CAPI, configure custom conversion events, and produce initial high-CTR ad creatives.",
          outcome: "Ready-to-Deploy Campaign Assets",
        },
        {
          step: "03",
          title: "Launch & Creative Validation",
          description: "We launch structured testing campaigns to isolate winning hooks, audiences, and landing page angles.",
          outcome: "Verified Winning Ad Concepts",
        },
        {
          step: "04",
          title: "Aggressive Scaling & Optimization",
          description: "We scale budgets into verified winners while maintaining strict CPA thresholds and refreshing ad creative.",
          outcome: "Predictable, Profitable Revenue Engine",
        },
      ]}
      faqs={[
        {
          question: "How much ad spend do I need to work with ConvertX for Meta Ads?",
          answer: "We typically work with businesses spending between ₹40,000 to ₹15,00,000+ per month on Meta advertising. This ensures there is sufficient auction data for the Meta algorithm to exit the learning phase and scale profitably.",
        },
        {
          question: "How quickly can we launch new Meta Ad campaigns?",
          answer: "Most custom campaign setups, creative briefs, tracking integrations, and landing page alignments are fully deployed within 5 to 7 business days from our initial onboarding discovery session.",
        },
        {
          question: "Do you create the ad creatives and video copy?",
          answer: "Yes. ConvertX handles complete creative strategy, copywriting, visual hooks, storyboard scripts, and carousel design. If you have existing video footage or product photos, we edit and optimize them specifically for Meta's high-CTR formats.",
        },
        {
          question: "What makes ConvertX different from traditional digital marketing agencies?",
          answer: "Unlike traditional agencies that only manage the ads dashboard, ConvertX connects the entire revenue system: Meta Ads + Sub-second Next.js Landing Pages + Official WhatsApp Business API automation. This eliminates drop-offs at every step of your funnel.",
        },
      ]}
      relatedServices={[
        {
          title: "Instagram Ads Agency",
          href: "/instagram-ads",
          description: "Reels & Story acquisition funnels for mobile audiences.",
        },
        {
          title: "WhatsApp Business API",
          href: "/whatsapp-business-api",
          description: "Direct-to-WhatsApp ad conversion and lead qualification.",
        },
        {
          title: "High-Converting Landing Pages",
          href: "/landing-pages",
          description: "Sub-second Next.js pages designed specifically for ad traffic.",
        },
      ]}
      relatedIndustries={[
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Education & EdTech", href: "/industries/education" },
        { title: "Local Businesses", href: "/industries/local-business" },
      ]}
    />
  );
}
