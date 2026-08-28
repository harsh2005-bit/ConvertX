import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "Lead Generation Agency India | High-Intent B2B & B2C Leads",
  description:
    "ConvertX builds qualified lead generation systems in India. We combine Meta Ads, WhatsApp automation, and high-converting landing pages to deliver sales-ready inquiries.",
  pathname: "/lead-generation",
  keywords: [
    "Lead Generation Agency India",
    "B2B Lead Generation India",
    "Qualified Leads Meta Ads",
    "High Intent Lead Generation",
    "Lead Generation Services",
  ],
});

export default function LeadGenerationPage() {
  return (
    <ServicePageTemplate
      id="lead-generation"
      badge="Predictable Inquiries"
      h1Title="Lead Generation Agency in India"
      subtitle="Fill Your Sales Pipeline with Qualified, High-Intent Customer Inquiries."
      description="Stop chasing low-quality leads who never answer the phone. ConvertX builds full-stack lead generation engines that filter out tire-kickers using smart qualification funnels and route sales-ready prospects directly to your WhatsApp and CRM."
      url="/lead-generation"
      serviceType="Lead Generation & Pipeline Building"
      metrics={[
        { label: "Lead Qualification Rate", value: "78%+", desc: "Verified phone numbers & budget fit" },
        { label: "Average Cost Per Lead", value: "30% Lower", desc: "Through creative angle testing" },
        { label: "Instant Connect Speed", value: "<60s", desc: "Automated WhatsApp & call alerts" },
        { label: "Sales Closing Boost", value: "2.8x", desc: "Pre-framed, educated prospect inquiries" },
      ]}
      problemSolution={{
        problemTitle: "The Low-Quality Lead Epidemic",
        problems: [
          "Generic Facebook instant forms generating bogus phone numbers and unreachable prospects.",
          "Sales reps wasting 70% of their day calling unqualified leads with zero buying intent.",
          "Leads waiting hours for a response, during which they contact competitors.",
          "Zero feedback loop between sales rep call notes and ad optimization.",
        ],
        solutionTitle: "The ConvertX Lead Engine Standard",
        solutions: [
          "High-intent Next.js landing pages and Click-to-WhatsApp ads capturing verified phone numbers.",
          "Automated conversational qualification bots filtering by budget, timeline, and need.",
          "Instant lead dispatch to your sales team's mobile phones within 30 seconds of submission.",
          "Offline conversion tracking feeding closed deal data back to Meta to attract more buyers.",
        ],
      }}
      features={[
        {
          title: "High-Intent Acquisition Funnels",
          description: "Targeted Meta & Instagram ad campaigns designed to attract serious buyers and decision-makers rather than casual scrollers.",
          deliverables: ["Targeting & Audience Stacking", "Problem-Focused Video Creatives", "High-Converting Ad Copy"],
          badge: "Qualified Flow",
        },
        {
          title: "Smart Qualification Landing Pages",
          description: "Sub-second Next.js pages featuring conditional micro-quizzes and intake forms that filter out prospects who do not meet your criteria.",
          deliverables: ["Custom Next.js Landers", "Multi-Step Qualification Forms", "Spam & Bot Filtering"],
        },
        {
          title: "Instant WhatsApp Chat Capture",
          description: "Allow prospects to submit inquiries directly through official WhatsApp Business API flows with 1-click convenience.",
          deliverables: ["CTWA Ad Sync", "Instant Welcome Automation", "Automated Intake Flow"],
        },
        {
          title: "Round-Robin Sales Team Routing",
          description: "Distribute incoming hot leads evenly among your sales closers with instant WhatsApp, SMS, and Slack push notifications.",
          deliverables: ["Automated Lead Assignment", "Call Alert Notifications", "CRM Pipeline Sync"],
        },
        {
          title: "Automated Re-Engagement Sequences",
          description: "Automatically follow up with unreached leads via WhatsApp and email over 7 days to resurrect cold inquiries.",
          deliverables: ["7-Day Drip Sequence", "Case Study Broadcasts", "Calendar Booking Links"],
        },
        {
          title: "End-to-End Sales Attribution",
          description: "Track which specific ad headline, visual hook, and audience generated closed revenue, not just raw lead count.",
          deliverables: ["CPL & CPQL Dashboards", "Offline Conversion Sync", "Weekly Sales Alignment Calls"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Target Persona & Offer Definition",
          description: "We define your ideal customer profile, minimum qualification criteria, and primary value hook.",
          outcome: "Ideal Lead Blueprint",
        },
        {
          step: "02",
          title: "Funnel & Qualification Build",
          description: "We construct the landing page, WhatsApp qualification bot, and CRM routing webhooks.",
          outcome: "Live Lead Engine Architecture",
        },
        {
          step: "03",
          title: "Ad Campaign Launch & Testing",
          description: "We deploy targeted Meta ad sets to validate lead quality and initial cost per qualified lead.",
          outcome: "Verified High-Intent Leads",
        },
        {
          step: "04",
          title: "Scaling & Pipeline Optimization",
          description: "We scale ad spend into top-performing angles while refining qualification thresholds with your sales team.",
          outcome: "Consistent, High-Volume Lead Pipeline",
        },
      ]}
      faqs={[
        {
          question: "How do you ensure leads are qualified and not fake numbers?",
          answer: "We use Click-to-WhatsApp funnels (which automatically capture the user's verified WhatsApp phone number) and conditional multi-step landing page forms that require users to select their budget and timeline before submitting.",
        },
        {
          question: "Can leads be delivered directly to our sales reps' phones?",
          answer: "Yes! As soon as a lead completes the qualification steps, an instant alert containing their name, phone number, and project details is sent directly to your assigned sales representative via WhatsApp, SMS, or CRM app.",
        },
        {
          question: "What industries do you generate leads for?",
          answer: "We specialize in high-ticket verticals including Real Estate, B2B Services, EdTech & Higher Education, Financial Consulting, Healthcare & Clinics, and High-Ticket Startups.",
        },
      ]}
      relatedServices={[
        {
          title: "Meta Ads Agency",
          href: "/meta-ads-agency",
          description: "Drive high-intent traffic into your lead generation funnels.",
        },
        {
          title: "WhatsApp Business API",
          href: "/whatsapp-business-api",
          description: "Automate lead capture and instant conversational qualification.",
        },
        {
          title: "Landing Page Development",
          href: "/landing-pages",
          description: "Custom pages built specifically for lead conversion.",
        },
      ]}
      relatedIndustries={[
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Professional Services", href: "/industries/professional-services" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "Local Businesses", href: "/industries/local-business" },
      ]}
    />
  );
}
