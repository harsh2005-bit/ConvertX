import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "Meta Agency Ad Accounts | Verified & High-Spend Ad Accounts India",
  description:
    "Scale high-budget Meta advertising without spending limits, random account bans, or payment gateway rejections using verified Meta Agency Ad Accounts.",
  pathname: "/agency-accounts",
  keywords: [
    "Meta Agency Accounts",
    "Facebook Agency Ad Account India",
    "High Spend Meta Accounts",
    "Verified Agency Ad Accounts",
    "Agency Ad Account Provider",
  ],
});

export default function AgencyAccountsPage() {
  return (
    <ServicePageTemplate
      id="agency-accounts"
      badge="Enterprise Infrastructure"
      h1Title="Verified Meta Agency Ad Accounts"
      subtitle="Eliminate Daily Spend Caps and Ad Account Disruptions Forever."
      description="Aggressive advertisers and scaling brands face sudden spending limits, payment processor failures, and unexpected ad account bans. ConvertX provides verified Meta Agency Ad Accounts with unlimited daily spend limits, direct agency support, and enterprise billing stability."
      url="/agency-accounts"
      serviceType="Meta Agency Infrastructure"
      metrics={[
        { label: "Daily Spend Limit", value: "Unlimited / $5k+", desc: "From day 1 without warming restrictions" },
        { label: "Account Uptime", value: "99.9%", desc: "Protected by enterprise agency tier" },
        { label: "Direct Support SLA", value: "<1 Hour", desc: "Direct agency rep escalation" },
        { label: "Multiple Pixel Support", value: "Yes", desc: "Connect multiple pixels & domains safely" },
      ]}
      problemSolution={{
        problemTitle: "The Regular Ad Account Bottleneck",
        problems: [
          "Standard personal or new Business Manager accounts capped at ₹4,000 to ₹10,000 daily spend.",
          "Random automated AI bans halting profitable campaigns during peak sales seasons.",
          "Indian credit card / debit card payment failure cycles causing ad delivery halts.",
          "Zero human support from Meta when an account is restricted.",
        ],
        solutionTitle: "The ConvertX Agency Account Advantage",
        solutions: [
          "Pre-warmed, fully verified Meta Agency Ad Accounts with no daily spend limits.",
          "Enterprise credit line / agency wallet top-up avoiding individual card transaction limits.",
          "Direct agency representative account rep line for instant review and compliance support.",
          "Seamless pixel and domain sharing with your existing Business Manager.",
        ],
      }}
      features={[
        {
          title: "Pre-Verified Agency Infrastructure",
          description: "Accounts provisioned through Tier-1 official Meta Agency Business Managers with verified business status.",
          deliverables: ["Verified Agency BM Access", "Unlimited Daily Spend Tier", "Clean Compliance History"],
          badge: "High Stability",
        },
        {
          title: "Enterprise Multi-Currency Wallet Top-Up",
          description: "Fund your ad spend through bank wire, USDT/crypto, or corporate credit line without daily bank transaction limits.",
          deliverables: ["Flexible Top-Up Options", "Automated Balance Notifications", "Consolidated Tax Invoicing"],
        },
        {
          title: "Direct Meta Partner Rep Escalation",
          description: "When an ad creative is flagged by automated review, our direct agency reps manually review and unflag compliant ads within hours.",
          deliverables: ["Manual Ad Review Escalation", "Policy Compliance Guidance", "Priority Ticket Handling"],
        },
        {
          title: "Safe Multi-Pixel & Domain Connection",
          description: "Share your existing Meta Pixel and verified domain directly to the agency account without losing historical pixel data.",
          deliverables: ["Pixel Partner Sharing", "Domain Verification Sync", "CAPI Server Sync"],
        },
        {
          title: "Backup Account Redundancy",
          description: "For high-volume spending brands, we maintain live backup agency accounts so your revenue stream never pauses for a single minute.",
          deliverables: ["Hot-Standby Backup Accounts", "Fast Pixel Mirroring", "Zero Revenue Downtime"],
        },
        {
          title: "Strict Privacy & Asset Ownership",
          description: "You maintain 100% ownership of your audiences, pixels, customer lists, and creative assets at all times.",
          deliverables: ["Full Admin Rights", "Asset Security Guarantee", "Non-Disclosure Agreement"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Business & Compliance Verification",
          description: "We review your brand, offer, and website to ensure strict adherence to Meta advertising policies.",
          outcome: "Approved Compliance Status",
        },
        {
          step: "02",
          title: "Account Allocation & Wallet Funding",
          description: "We provision your agency account and allocate your initial spend balance into the agency wallet.",
          outcome: "Active Funded Agency Account",
        },
        {
          step: "03",
          title: "Pixel & Domain Partner Sharing",
          description: "You grant asset partner permissions to connect your existing Pixel, CAPI, and custom audiences.",
          outcome: "Connected Ad Architecture",
        },
        {
          step: "04",
          title: "Uncapped Campaign Scaling",
          description: "Launch and scale ad campaigns without daily spend restrictions or payment interruptions.",
          outcome: "Unconstrained Revenue Growth",
        },
      ]}
      faqs={[
        {
          question: "Can I use my existing Meta Pixel with an agency account?",
          answer: "Yes! We share the agency ad account directly with your Business Manager, allowing you to attach your existing pixel, custom conversion events, and custom audiences.",
        },
        {
          question: "What types of businesses can use agency ad accounts?",
          answer: "We support compliant e-commerce brands, real estate companies, EdTech startups, SaaS companies, and lead generation agencies that follow Meta's advertising policies and spend consistently.",
        },
        {
          question: "How fast can an agency account be delivered?",
          answer: "Once your compliance verification is completed and initial funding is received, your agency account is typically delivered and ready to run within 2 to 4 hours.",
        },
      ]}
      relatedServices={[
        {
          title: "Meta Ads Agency",
          href: "/meta-ads-agency",
          description: "Complete campaign management on high-limit accounts.",
        },
        {
          title: "Performance Marketing",
          href: "/performance-marketing",
          description: "Full-funnel growth architecture for scaling brands.",
        },
        {
          title: "Landing Page Development",
          href: "/landing-pages",
          description: "High-converting web pages built for high ad volume.",
        },
      ]}
      relatedIndustries={[
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Startups", href: "/industries/startups" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "Professional Services", href: "/industries/professional-services" },
      ]}
    />
  );
}
