import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "AI Automation Agency in India | Workflow & CRM Automation",
  description:
    "ConvertX builds custom AI and webhook-driven workflow automations that instantly route leads, automate WhatsApp follow-ups, and eliminate repetitive operational tasks.",
  pathname: "/ai-automation",
  keywords: [
    "AI Automation Agency India",
    "Workflow Automation Agency",
    "CRM Lead Routing Automation",
    "WhatsApp AI Automation",
    "Business Process Automation",
  ],
});

export default function AiAutomationPage() {
  return (
    <ServicePageTemplate
      id="ai-automation"
      badge="Workflow & AI Tech"
      h1Title="AI & Workflow Automation Agency in India"
      subtitle="Automate Your Sales Pipeline, Lead Routing, and Customer Follow-Ups."
      description="Manual lead management loses deals. ConvertX builds smart AI workflows and webhook automations connecting your Meta Ads, WhatsApp Business API, CRM, and sales team into a cohesive, zero-latency revenue engine."
      url="/ai-automation"
      serviceType="AI Automation & Systems Engineering"
      metrics={[
        { label: "Lead Response Time", value: "<30s", desc: "Instant automated bot & sales alerts" },
        { label: "Manual Hours Saved", value: "25+ hrs/wk", desc: "Per sales representative" },
        { label: "Lead Leakage Reduction", value: "95%", desc: "Every lead instantly logged and tracked" },
        { label: "Platform Integrations", value: "500+ Apps", desc: "Connecting CRMs, APIs, and ad platforms" },
      ]}
      problemSolution={{
        problemTitle: "Where Manual Operations Fail",
        problems: [
          "Leads sitting unattended in ad accounts for 4–12 hours before a salesperson calls.",
          "Manual copy-pasting of customer data between Google Sheets, WhatsApp, and CRM.",
          "Inconsistent follow-up schedules causing high-intent prospects to go cold.",
          "Zero visibility into which ad creatives actually generate closed revenue.",
        ],
        solutionTitle: "The ConvertX Automation Blueprint",
        solutions: [
          "Instant automated WhatsApp greeting and pre-qualification within 15 seconds.",
          "Real-time webhook routing pushing lead data directly to CRM, Slack, and sales phones.",
          "Automated multi-day drip sequences via WhatsApp and email that nurture cold leads.",
          "End-to-end attribution loops connecting closed CRM deals back to Meta CAPI.",
        ],
      }}
      features={[
        {
          title: "Instant Lead Routing & Alerts",
          description: "Connect incoming leads from Meta Ads, web forms, and WhatsApp directly to your sales team's mobile phones and Slack channels within seconds.",
          deliverables: ["Webhook Infrastructure", "Round-Robin Lead Assignment", "Instant SMS/WhatsApp Alerts"],
          badge: "Zero Latency",
        },
        {
          title: "AI-Powered Qualification Chatbots",
          description: "Deploy intelligent conversational agents that understand customer inquiries, check availability, and schedule meetings automatically.",
          deliverables: ["Custom LLM / Bot Prompts", "Calendar Booking Automation", "FAQ Knowledge Retrieval"],
        },
        {
          title: "Automated WhatsApp Nurture Drips",
          description: "Keep prospects engaged with timed value broadcasts, case study drops, and payment reminders that maintain 90%+ open rates.",
          deliverables: ["7-Day Drip Sequences", "Personalized Template Messages", "Opt-Out Compliance Logic"],
        },
        {
          title: "CRM Sync & Pipeline Automation",
          description: "Keep HubSpot, Zoho, LeadSquared, Salesforce, and Google Sheets synchronized with zero manual data entry.",
          deliverables: ["Bi-Directional CRM Sync", "Custom Pipeline Stages", "Activity & Call Logging"],
        },
        {
          title: "Offline Conversion Loop to Meta (CAPI)",
          description: "Automatically send closed deal data from your CRM back to Meta's algorithm to train the AI on high-paying buyers, not just form fills.",
          deliverables: ["Offline Conversion Webhook", "Meta CAPI Deal Upload", "Value-Based Ad Bidding"],
        },
        {
          title: "Custom Dashboard & Reporting Bot",
          description: "Receive automated daily performance summaries directly in your WhatsApp or Telegram channel every morning.",
          deliverables: ["Daily KPI Digest", "Automated Spend Alerts", "Sales Rep Leaderboards"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Workflow & Tech Stack Audit",
          description: "We analyze your current lead handling process, software tools, and identify operational bottlenecks.",
          outcome: "Automation Architecture Map",
        },
        {
          step: "02",
          title: "Webhook & Bot Development",
          description: "We configure API endpoints, write custom logic, and test conversational flows in staging.",
          outcome: "Functional Automation Pipeline",
        },
        {
          step: "03",
          title: "CRM & Ad Account Sync",
          description: "We connect the automation to your Meta Ad account, WhatsApp API, and sales database.",
          outcome: "Integrated Operational Ecosystem",
        },
        {
          step: "04",
          title: "Stress Testing & Live Handoff",
          description: "We test high-volume edge cases, verify error notifications, and train your team on pipeline management.",
          outcome: "Fully Automated Growth System",
        },
      ]}
      faqs={[
        {
          question: "Which platforms and CRMs can you automate?",
          answer: "We integrate with virtually any modern platform including HubSpot, Zoho, LeadSquared, Salesforce, Google Sheets, Make, n8n, Zapier, WhatsApp API, Slack, Telegram, and custom Next.js backends.",
        },
        {
          question: "How does automation improve our Meta Ad performance?",
          answer: "By sending closed deal and high-intent qualification data back to Meta via the Conversions API, Meta's algorithm learns to find more high-value prospects rather than low-quality tire-kickers.",
        },
        {
          question: "What happens if an API or webhook fails?",
          answer: "We build automated retry queues and instant admin alert webhooks so that if any external service experiences downtime, no lead data is ever lost.",
        },
      ]}
      relatedServices={[
        {
          title: "WhatsApp Business API",
          href: "/whatsapp-business-api",
          description: "Official WhatsApp messaging infrastructure and bots.",
        },
        {
          title: "Lead Generation Engines",
          href: "/lead-generation",
          description: "High-volume inquiry systems powered by automation.",
        },
        {
          title: "Performance Marketing",
          href: "/performance-marketing",
          description: "Full-funnel growth architecture backed by AI.",
        },
      ]}
      relatedIndustries={[
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Professional Services", href: "/industries/professional-services" },
        { title: "Startups & SaaS", href: "/industries/startups" },
        { title: "Education & Coaching", href: "/industries/education" },
      ]}
    />
  );
}
