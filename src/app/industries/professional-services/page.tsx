import React from "react";
import { constructMetadata } from "@/lib/seo";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export const metadata = constructMetadata({
  title: "Professional Services Marketing Agency India | B2B & High-Ticket Lead Funnels",
  description:
    "ConvertX generates high-ticket B2B client inquiries for legal, financial, consulting, and corporate advisory firms through targeted Meta Ads and automated WhatsApp qualification.",
  pathname: "/industries/professional-services",
  keywords: [
    "Professional Services Marketing Agency India",
    "B2B Lead Generation Agency",
    "Consulting Firm Marketing Meta Ads",
    "High Ticket Lead Funnels",
    "Legal and Financial Marketing India",
  ],
});

export default function ProfessionalServicesIndustryPage() {
  return (
    <IndustryPageTemplate
      id="professional-services"
      badge="B2B & High-Ticket Advisory"
      h1Title="Professional Services Marketing & B2B Lead Agency"
      subtitle="Attract Decision-Makers, Establish Authority, and Close High-Ticket Engagements."
      description="Selling high-ticket professional services requires establishing instant authority and overcoming deep trust barriers. ConvertX builds consultative lead generation funnels combining educational video ads, authority whitepapers, and automated WhatsApp pre-qualification."
      url="/industries/professional-services"
      metrics={[
        { label: "Consultation Show-Up Rate", value: "85%+", desc: "With automated WhatsApp briefing calendar sync" },
        { label: "Deal Size Range", value: "₹50k – ₹10L+", desc: "Targeted high-ticket service engagements" },
        { label: "Decision-Maker Reach", value: "Top 5%", desc: "Targeting founders, CFOs, and executives" },
        { label: "Pre-Framed Prospect Trust", value: "High", desc: "Educated on methodology before the call" },
      ]}
      challenges={[
        {
          title: "Long, Unpredictable Sales Cycles",
          description: "Prospects take months to evaluate consulting offers without consistent automated touchpoints.",
        },
        {
          title: "Low Trust on Generic Digital Ads",
          description: "High-net-worth corporate decision-makers ignore generic corporate fluff and single-line ad promises.",
        },
        {
          title: "Sales Time Wasted on Unfunded Prospects",
          description: "Partners and senior consultants spending valuable hours on discovery calls with companies that lack budget.",
        },
      ]}
      strategies={[
        {
          title: "Authority Breakdown & Case Video Ads",
          description: "Short video ads dissecting complex tax, legal, or financial frameworks, positioning your firm as the undisputed expert.",
          deliverables: ["Framework Breakdown Video Scripts", "Executive Thought Leadership Ads", "High-Value Whitepaper Angles"],
        },
        {
          title: "Sub-Second Authority Case Study Landers",
          description: "Clean, elegant Next.js case study pages detailing client transformations, regulatory compliance, and verified ROI.",
          deliverables: ["Next.js Case Study Lander", "Executive Bio & Credentials Section", "Consultation Intake Questionnaire"],
        },
        {
          title: "WhatsApp Executive Consultation Qualifier",
          description: "Interactive qualification bot capturing company turnover, timeline, and exact requirements before routing to partner calendars.",
          deliverables: ["B2B Intake Qualification Bot", "NDA & Portfolio Delivery Flow", "Partner Calendar Sync"],
        },
      ]}
      funnelArchitecture={[
        {
          stage: "Stage 01: Educate",
          name: "Framework & Insight Ads",
          description: "Video ads breaking down regulatory updates, cost-saving strategies, or risk mitigation models.",
          tools: ["Meta Feed", "LinkedIn Ads", "Custom Video Hooks"],
        },
        {
          stage: "Stage 02: Validate",
          name: "Authority Case Lander",
          description: "Fast Next.js landing page with client breakdown, case studies, and transparent deliverables.",
          tools: ["Next.js", "Tailwind CSS", "PDF Case Download"],
        },
        {
          stage: "Stage 03: Pre-Screen",
          name: "WhatsApp Intake Bot",
          description: "Interactive bot collects business size and revenue tier to ensure budget fit.",
          tools: ["WhatsApp API", "CRM Webhook", "HubSpot/Zoho"],
        },
        {
          stage: "Stage 04: Consult",
          name: "Partner Discovery Call",
          description: "Pre-framed prospect attends high-value strategy session with meeting brief sent in advance.",
          tools: ["Google Meet / Zoom", "WhatsApp Meeting Prep", "CRM Deal Stage"],
        },
      ]}
      whatsappPlaybook={{
        title: "The High-Ticket B2B Consultation Engine",
        description: "How ConvertX pre-qualifies high-ticket corporate clients on WhatsApp:",
        flows: [
          "Instant automated Whitepaper & Industry Case Study PDF delivery",
          "Executive 3-question intake qualification (Company Annual Turnover, Service Scope, Timeline)",
          "Direct discovery call scheduling with senior partner / consultant calendar",
          "Automated pre-meeting preparation checklist and NDA template delivery",
        ],
      }}
      faqs={[
        {
          question: "Can Meta Ads effectively reach corporate executives and B2B founders?",
          answer: "Yes! Decision-makers and founders browse Instagram and Facebook during their personal time. When an ad provides high-level educational value tailored to their exact business problem, it achieves lower acquisition costs than standard LinkedIn ads.",
        },
        {
          question: "How do you protect partner time from unqualified discovery calls?",
          answer: "We mandate conditional intake qualification on the landing page and WhatsApp bot where prospects must select their company size and budget tier before receiving access to booking calendars.",
        },
        {
          question: "Can we integrate this with our enterprise CRM like Salesforce or HubSpot?",
          answer: "Yes. ConvertX builds bi-directional API synchronizations with Salesforce, HubSpot, Zoho, and custom corporate databases.",
        },
      ]}
      recommendedServices={[
        { title: "Lead Generation Engines", href: "/lead-generation" },
        { title: "Landing Page Development", href: "/landing-pages" },
        { title: "WhatsApp Business API", href: "/whatsapp-business-api" },
        { title: "Performance Marketing", href: "/performance-marketing" },
      ]}
      otherIndustries={[
        { title: "Startups & SaaS", href: "/industries/startups" },
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
      ]}
    />
  );
}
