import React from "react";
import { constructMetadata } from "@/lib/seo";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export const metadata = constructMetadata({
  title: "Real Estate Digital Marketing Agency India | Meta Ads & WhatsApp Lead Funnels",
  description:
    "ConvertX generates high-intent property buyer inquiries for real estate developers and brokers through targeted Meta Ads, instant WhatsApp brochure automation, and site visit booking funnels.",
  pathname: "/industries/real-estate",
  keywords: [
    "Real Estate Marketing Agency India",
    "Real Estate Lead Generation Meta Ads",
    "WhatsApp Real Estate Automation",
    "Property Buyer Lead Funnels",
    "Real Estate Digital Marketing",
  ],
});

export default function RealEstateIndustryPage() {
  return (
    <IndustryPageTemplate
      id="real-estate"
      badge="Real Estate Vertical"
      h1Title="Real Estate Marketing & Lead Generation Agency"
      subtitle="Fill Your Site Visit Pipeline with Verified, High-Budget Property Buyers."
      description="Real estate developers and brokers waste lakhs on junk leads with fake phone numbers. ConvertX builds high-intent Meta ad funnels and instant WhatsApp brochure delivery systems that pre-qualify buyers by budget and schedule confirmed on-site visits."
      url="/industries/real-estate"
      metrics={[
        { label: "Site Visit Booking Rate", value: "3.4x Higher", desc: "Through instant WhatsApp brochure qualification" },
        { label: "Verified Phone Numbers", value: "100%", desc: "Captured via Click-to-WhatsApp entry points" },
        { label: "Average CPL Range", value: "₹250 – ₹850", desc: "For mid-to-luxury residential projects" },
        { label: "Lead Response Time", value: "<15s", desc: "Instant automated PDF brochure delivery" },
      ]}
      challenges={[
        {
          title: "80%+ Junk Leads on Instant Forms",
          description: "Standard Facebook auto-fill forms generate incorrect phone numbers, uncontactable prospects, and students with zero budget.",
        },
        {
          title: "Slow Sales Team Follow-Up (Hours/Days)",
          description: "By the time a telecaller calls the buyer 6 hours later, they have already booked a site visit with a competitor project.",
        },
        {
          title: "Lack of Buyer Qualification",
          description: "Sales teams spend 8 hours a day dialling unqualified inquiries instead of focusing on high-net-worth serious investors.",
        },
      ]}
      strategies={[
        {
          title: "Location & Budget-Filtered Meta Creatives",
          description: "Video walk-throughs and drone footage with clear upfront pricing (e.g. '2 & 3 BHK Starting at ₹85 Lakhs') that instantly filters out low-budget scrollers.",
          deliverables: ["Drone/Walkthrough Video Editing", "Price-Transparent Ad Copy", "Micro-Location Targeting"],
        },
        {
          title: "Instant WhatsApp Brochure Delivery Bot",
          description: "Prospect taps ad and instantly receives the floor plans, master layout, and pricing breakdown directly in their WhatsApp within 5 seconds.",
          deliverables: ["Automated Brochure PDF Bot", "Unit Type Selector (2/3/4 BHK)", "Interactive Video Tour Link"],
        },
        {
          title: "Automated Site Visit Scheduling Engine",
          description: "Bot prompts the qualified buyer to select their preferred weekend date and time for a guided site visit, syncing with sales calendars.",
          deliverables: ["Calendar Booking Integration", "Automated SMS/WhatsApp Directions", "Sales Rep Alert"],
        },
      ]}
      funnelArchitecture={[
        {
          stage: "Stage 01: Discover",
          name: "Drone & Walkthrough Ads",
          description: "High-production video ads showcasing project amenities, location advantage, and floor plans.",
          tools: ["Instagram Reels", "Meta Feed", "Geo-Radius Targeting"],
        },
        {
          stage: "Stage 02: Inquire",
          name: "Click-to-WhatsApp Entry",
          description: "User taps 'Get Instant Brochure on WhatsApp', capturing their verified WhatsApp contact.",
          tools: ["WhatsApp Business API", "CTWA Ads"],
        },
        {
          stage: "Stage 03: Qualify",
          name: "Conversational Qualification",
          description: "Bot asks: 'Looking for Self-Use or Investment?' and 'Budget range?' within 30 seconds.",
          tools: ["Chatbot Logic", "CRM Webhooks"],
        },
        {
          stage: "Stage 04: Book",
          name: "Site Visit Confirmation",
          description: "Buyer selects visit time slot, receives Google Maps location pin, and sales closer is alerted.",
          tools: ["Calendar Sync", "CRM Routing", "Sales Push Alerts"],
        },
      ]}
      whatsappPlaybook={{
        title: "The Real Estate WhatsApp Conversion Funnel",
        description: "How ConvertX eliminates telecalling fatigue and delivers hot site visits:",
        flows: [
          "Instant automated PDF Project Brochure & Cost Sheet delivery upon ad click",
          "Interactive 3-question buyer qualification (Configuration, Budget, Investment vs Self-Use)",
          "Automated site visit scheduling with calendar invites and Google Maps live directions",
          "Weekend site visit reminder broadcasts and price-appreciation milestone updates",
        ],
      }}
      faqs={[
        {
          question: "Can we target NRI property buyers with this system?",
          answer: "Yes! We run targeted campaigns in GCC (UAE, Saudi Arabia, Qatar), the US, UK, and Singapore directing high-net-worth NRIs to international WhatsApp virtual tour booking funnels.",
        },
        {
          question: "How do leads get assigned to our channel partners or sales closers?",
          answer: "We configure automated round-robin lead assignment webhooks that push lead details into your CRM (Zoho, LeadSquared, Salesforce) and notify assigned sales reps within 30 seconds.",
        },
        {
          question: "Do you create the landing pages for individual property projects?",
          answer: "Yes. We build sub-second Next.js project landing pages featuring 3D master plans, interactive unit selectors, location connectivity maps, and direct WhatsApp booking buttons.",
        },
      ]}
      recommendedServices={[
        { title: "Meta Ads Agency", href: "/meta-ads-agency" },
        { title: "WhatsApp Business API", href: "/whatsapp-business-api" },
        { title: "Lead Generation Engines", href: "/lead-generation" },
        { title: "High-Converting Landing Pages", href: "/landing-pages" },
      ]}
      otherIndustries={[
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Professional Services", href: "/industries/professional-services" },
        { title: "Startups & SaaS", href: "/industries/startups" },
        { title: "Education & Coaching", href: "/industries/education" },
      ]}
    />
  );
}
