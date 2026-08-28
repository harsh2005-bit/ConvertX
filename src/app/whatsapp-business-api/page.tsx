import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "WhatsApp Business API Agency in India | Automation & Chatbots",
  description:
    "Official WhatsApp Business API onboarding, automated chatbot flows, Click-to-WhatsApp ad integration, and multi-agent CRM routing built for high-growth businesses.",
  pathname: "/whatsapp-business-api",
  keywords: [
    "WhatsApp Business API Agency India",
    "WhatsApp Automation Agency",
    "Click to WhatsApp Ads",
    "WhatsApp CRM Integration",
    "WhatsApp Chatbot Setup",
    "WhatsApp Green Tick Verification",
  ],
});

export default function WhatsAppBusinessApiPage() {
  return (
    <ServicePageTemplate
      id="whatsapp-business-api"
      badge="Conversational Commerce"
      h1Title="WhatsApp Business API Agency in India"
      subtitle="Turn WhatsApp into an Automated, High-Converting Revenue & Sales Channel."
      description="In India, your customers live on WhatsApp. ConvertX deploys official WhatsApp Business API infrastructure, custom qualification chatbots, automated drip campaigns, and seamless CRM integrations that turn conversations into closed deals."
      url="/whatsapp-business-api"
      serviceType="WhatsApp API Setup & Automation"
      metrics={[
        { label: "Average Message Open Rate", value: "98%", desc: "Compared to <20% on traditional email" },
        { label: "Instant Response Time", value: "<15 Seconds", desc: "Automated qualification bot responses" },
        { label: "Lead Drop-Off Reduction", value: "45%", desc: "Replacing static web forms with CTWA" },
        { label: "Multi-Agent Scale", value: "Unlimited", desc: "Team seats connected to single API number" },
      ]}
      problemSolution={{
        problemTitle: "Limitations of Standard WhatsApp Business App",
        problems: [
          "Restricted to 4 mobile devices, causing agent conflicts and missed sales chats.",
          "Strict broadcast limits (max 256 contacts) and high risk of number ban.",
          "Zero integration with Meta Ads, webhooks, or centralized CRM systems.",
          "Inability to deploy interactive quick-reply buttons and automated logic.",
        ],
        solutionTitle: "The Official WhatsApp Business API Solution",
        solutions: [
          "Enterprise API architecture with unlimited multi-agent inbox support.",
          "Automated chatbot trees with interactive buttons, product catalogs, and payment links.",
          "Direct Meta Ad synchronization for 1-tap Click-to-WhatsApp lead capturing.",
          "Official Green Tick verified business badge application and compliance management.",
        ],
      }}
      features={[
        {
          title: "Official API Onboarding & Verification",
          description: "End-to-end setup of Meta Business Manager, phone number registration, and official Green Tick verification assistance.",
          deliverables: ["Meta Business Verification", "API Number Setup", "Green Tick Application"],
          badge: "Enterprise Ready",
        },
        {
          title: "Automated Lead Qualification Bot",
          description: "Interactive chatbot flows that collect budget, timeline, and customer requirements before assigning the lead to a human sales closer.",
          deliverables: ["Custom Bot Logic Tree", "Quick Reply Buttons", "Interactive List Menus"],
        },
        {
          title: "Click-to-WhatsApp (CTWA) Ad Integration",
          description: "Sync your Meta & Instagram ad campaigns directly with WhatsApp, capturing verified phone numbers with prefilled conversation starters.",
          deliverables: ["CTWA Campaign Sync", "UTM Tracking on Chat", "Conversion Event Logging"],
        },
        {
          title: "CRM & Sales Team Routing",
          description: "Route incoming leads automatically to HubSpot, Zoho, LeadSquared, Google Sheets, or custom webhooks in real-time.",
          deliverables: ["Webhook Architecture", "Round-Robin Agent Routing", "Instant Slack/Email Alerts"],
        },
        {
          title: "Automated Broadcasts & Drip Sequences",
          description: "Send personalized abandoned cart recovery messages, payment reminders, and promotional updates with 98% open rates.",
          deliverables: ["Pre-Approved Message Templates", "Scheduled Broadcast Campaigns", "Opt-In Management"],
        },
        {
          title: "Multi-Agent Team Inbox Dashboard",
          description: "A centralized dashboard where your entire sales and support team can manage customer conversations from a single official number.",
          deliverables: ["Agent Inbox Configuration", "Chat Tagging & Filtering", "Team Performance Analytics"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "API Account & Number Setup",
          description: "We configure your official Meta Business API account, register your dedicated phone number, and verify business compliance.",
          outcome: "Verified API Infrastructure",
        },
        {
          step: "02",
          title: "Bot Flow & Template Design",
          description: "We design conversational qualification trees and submit official HSM message templates to Meta for approval.",
          outcome: "Approved Templates & Bot Logic",
        },
        {
          step: "03",
          title: "Ad & CRM Integration",
          description: "We connect the API to your Meta Ad accounts and your sales CRM for automated lead flow.",
          outcome: "End-to-End Synced Pipeline",
        },
        {
          step: "04",
          title: "Testing & Live Deployment",
          description: "We run end-to-end test conversations across edge cases and train your sales team on the multi-agent inbox.",
          outcome: "Fully Operational WhatsApp Engine",
        },
      ]}
      faqs={[
        {
          question: "Can I keep my existing phone number for WhatsApp Business API?",
          answer: "Yes, you can migrate an existing phone number to the API, provided it is not currently registered on a standard WhatsApp app. We guide you through the seamless migration process.",
        },
        {
          question: "How much does Meta charge for WhatsApp Business API messages?",
          answer: "Meta charges per 24-hour conversation window based on conversation category (Marketing, Utility, Authentication, or Service). User-initiated service conversations within a 24-hour window are extremely cost-effective. We help you optimize templates to minimize Meta API costs.",
        },
        {
          question: "Can we integrate WhatsApp with our existing CRM?",
          answer: "Yes. ConvertX builds custom webhook integrations for Zoho, HubSpot, LeadSquared, Salesforce, Google Sheets, and custom Next.js backends.",
        },
      ]}
      relatedServices={[
        {
          title: "Meta Ads Agency",
          href: "/meta-ads-agency",
          description: "Drive high-intent traffic directly into your WhatsApp bot.",
        },
        {
          title: "AI Workflow Automation",
          href: "/ai-automation",
          description: "Connect WhatsApp leads to your entire tech stack automatically.",
        },
        {
          title: "Lead Generation Engines",
          href: "/lead-generation",
          description: "High-volume inquiry systems powered by conversational ads.",
        },
      ]}
      relatedIndustries={[
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "Professional Services", href: "/industries/professional-services" },
      ]}
    />
  );
}
