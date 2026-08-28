import React from "react";
import { constructMetadata } from "@/lib/seo";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export const metadata = constructMetadata({
  title: "Startup & SaaS Growth Agency India | Go-to-Market & Paid User Acquisition",
  description:
    "ConvertX accelerates early-stage and funded startups with rapid creative validation, high-converting Next.js landing pages, Meta acquisition funnels, and automated product onboarding.",
  pathname: "/industries/startups",
  keywords: [
    "Startup Marketing Agency India",
    "SaaS User Acquisition Agency",
    "Go To Market Growth Funnels",
    "Startup Lead Generation",
    "Next.js SaaS Landing Pages",
  ],
});

export default function StartupsIndustryPage() {
  return (
    <IndustryPageTemplate
      id="startups"
      badge="Startups & SaaS Vertical"
      h1Title="Startup & SaaS Growth Agency in India"
      subtitle="Validate Positioning, Lower CAC, and Scale Traction Rapidly."
      description="Startups cannot afford months of slow, wasteful marketing experiments. ConvertX builds full-stack growth engines: rapid Meta ad angle testing, sub-second Next.js web applications, and automated WhatsApp onboarding that deliver initial traction and scalable revenue."
      url="/industries/startups"
      metrics={[
        { label: "CAC Reduction", value: "35% – 50%", desc: "Through high-converting direct landers" },
        { label: "GTM Launch Velocity", value: "7 Days", desc: "From kickoff to live acquisition campaigns" },
        { label: "Trial/Demo Signup Lift", value: "2.8x", desc: "Replacing generic forms with smart onboarding" },
        { label: "Product Attribution", value: "100%", desc: "Server-side CAPI & event analytics" },
      ]}
      challenges={[
        {
          title: "Unclear Value Proposition & Positioning",
          description: "Founders build incredible tech but struggle to communicate the core benefit in a 3-second ad hook.",
        },
        {
          title: "Slow, Expensive Development Cycles",
          description: "Spending 3 months and lakhs building bloated websites that convert at less than 1.5%.",
        },
        {
          title: "High Churn at Onboarding",
          description: "Users sign up for a trial or demo but drop off without ever activating their account or attending the call.",
        },
      ]}
      strategies={[
        {
          title: "Rapid 5-Angle Creative Sprints",
          description: "Test 5 distinct messaging hooks (Pain-Relief, Speed, Cost-Savings, Status, Social Proof) within 72 hours to isolate true product-market fit.",
          deliverables: ["Creative Sprint Matrix", "Positioning Hook Testing", "Ad Creative Fast Production"],
        },
        {
          title: "Sub-Second Next.js Growth Landing Pages",
          description: "Bespoke, high-velocity Next.js web apps featuring dark cyber-aesthetic UI, interactive product demos, and frictionless signups.",
          deliverables: ["Next.js App Router Web App", "Interactive UI Simulators", "Serverless API Routes"],
        },
        {
          title: "Automated WhatsApp Onboarding & Demo Nurture",
          description: "Instant WhatsApp delivery of product access credentials, onboarding walkthroughs, and calendar demo confirmations.",
          deliverables: ["Automated User Activation Bot", "Calendar Sync Automation", "Founder Welcome Video Drips"],
        },
      ]}
      funnelArchitecture={[
        {
          stage: "Stage 01: Validate",
          name: "Problem Hook Video Ads",
          description: "Short video ads calling out the exact operational pain point your software or service solves.",
          tools: ["Meta Ads", "Instagram Reels", "LinkedIn Ads"],
        },
        {
          stage: "Stage 02: Demonstrate",
          name: "Next.js Interactive Lander",
          description: "Interactive product demo simulator showing the workflow in action with instant trial CTA.",
          tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
        {
          stage: "Stage 03: Activate",
          name: "WhatsApp Onboarding Bot",
          description: "Instant login link and quick-start checklist delivered directly to the user's phone.",
          tools: ["WhatsApp API", "Webhooks", "Auth Webhook"],
        },
        {
          stage: "Stage 04: Retain",
          name: "Usage Alerts & Upsells",
          description: "Automated trigger alerts encouraging the user to upgrade to paid tier based on milestone usage.",
          tools: ["CRM Automation", "Stripe/Razorpay API", "Meta CAPI Loop"],
        },
      ]}
      whatsappPlaybook={{
        title: "The Startup Activation & Demo Engine",
        description: "How ConvertX boosts free-to-paid conversion for startups and SaaS products:",
        flows: [
          "Instant trial activation link and founder welcome video delivery via WhatsApp",
          "Automated demo call booking with instant Google Meet / Zoom calendar synchronization",
          "Milestone celebration alerts when user completes their first key product action",
          "Trial expiration countdown and early-bird discount offer delivery",
        ],
      }}
      faqs={[
        {
          question: "Can you help early-stage bootstrapped startups with limited budgets?",
          answer: "Yes! We structure lean, high-velocity testing sprints starting at ₹30,000–₹50,000 monthly ad spend to validate your offer before scaling budgets.",
        },
        {
          question: "Do you build the website/landing page in-house?",
          answer: "Yes. We build custom Next.js web applications, landing pages, and interactive product demo showcases tailored specifically for your target audience.",
        },
        {
          question: "How do you track product signups and paid subscriptions?",
          answer: "We configure server-side tracking (Meta CAPI + GA4) syncing subscription and checkout events from Razorpay, Stripe, or your internal database.",
        },
      ]}
      recommendedServices={[
        { title: "Landing Page Development", href: "/landing-pages" },
        { title: "Meta Ads Agency", href: "/meta-ads-agency" },
        { title: "Website Development", href: "/website-development" },
        { title: "AI Workflow Automation", href: "/ai-automation" },
      ]}
      otherIndustries={[
        { title: "Professional Services", href: "/industries/professional-services" },
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Education & EdTech", href: "/industries/education" },
        { title: "Real Estate & Property", href: "/industries/real-estate" },
      ]}
    />
  );
}
