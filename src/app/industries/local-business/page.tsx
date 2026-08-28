import React from "react";
import { constructMetadata } from "@/lib/seo";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export const metadata = constructMetadata({
  title: "Local Business Marketing Agency India | Geo-Targeted Meta Ads & WhatsApp Bookings",
  description:
    "ConvertX generates high-paying local customer footfall and inquiries for clinics, fitness studios, home services, and retail brands using hyper-local Meta Ads and WhatsApp booking automations.",
  pathname: "/industries/local-business",
  keywords: [
    "Local Business Marketing Agency India",
    "Geo Targeted Meta Ads",
    "Local Lead Generation Services",
    "WhatsApp Booking for Local Businesses",
    "Clinic and Studio Marketing India",
  ],
});

export default function LocalBusinessIndustryPage() {
  return (
    <IndustryPageTemplate
      id="local-business"
      badge="Local Business & Services"
      h1Title="Local Business Marketing & Growth Agency"
      subtitle="Dominate Your Local Market with High-Intent Nearby Customers."
      description="Local businesses often waste ad budgets targeting audiences 30 km away who will never visit. ConvertX engineers tight geo-radius Meta campaigns (3–10 km), local video hooks, and instant WhatsApp appointment booking systems that drive immediate walk-ins."
      url="/industries/local-business"
      metrics={[
        { label: "Geo-Targeting Accuracy", value: "3–7 km Radius", desc: "Targeting high-intent nearby residents" },
        { label: "Cost Per Appointment", value: "₹120 – ₹380", desc: "For verified consultation bookings" },
        { label: "Show-Up Rate Lift", value: "+42%", desc: "Via automated WhatsApp appointment confirmations" },
        { label: "Campaign Launch Time", value: "3–5 Days", desc: "Rapid local deployment" },
      ]}
      challenges={[
        {
          title: "Wasted Broad Geographic Ad Spend",
          description: "Setting city-wide targeting that displays ads to people who live too far to travel to your clinic or studio.",
        },
        {
          title: "High Appointment No-Show Rates",
          description: "Customers book telephone appointments but forget to show up without automated reminder notifications.",
        },
        {
          title: "Slow Customer Inquiries Response",
          description: "Customers searching for local services choose whichever competitor answers on WhatsApp first.",
        },
      ]}
      strategies={[
        {
          title: "Hyper-Local Radius & Pincode Targeting",
          description: "Zero in on high-income neighborhoods within 15 minutes travel time of your physical location.",
          deliverables: ["Micro-Radius Meta Ad Sets", "Neighborhood-Specific Copy", "Local Landmark Visual Hooks"],
        },
        {
          title: "1-Tap WhatsApp Appointment Bot",
          description: "Allow local customers to check doctor/trainer availability, view introductory pricing, and book visits in 30 seconds on WhatsApp.",
          deliverables: ["Interactive Slot Booking Bot", "Doctor/Service Menu", "Instant Map Directions Integration"],
        },
        {
          title: "Automated Reminder & Directions Drip",
          description: "Send automated WhatsApp appointment confirmations with Google Maps directions 2 hours prior to the scheduled slot.",
          deliverables: ["WhatsApp Appointment Reminders", "Cancellation / Reschedule Buttons", "Receptionist Alert Sync"],
        },
      ]}
      funnelArchitecture={[
        {
          stage: "Stage 01: Geo-Reach",
          name: "Local Problem Video Ads",
          description: "Video ads addressing local residents (e.g. 'Struggling with Back Pain in Indiranagar?').",
          tools: ["Instagram Reels", "Meta Feed", "Pincode Targeting"],
        },
        {
          stage: "Stage 02: Chat",
          name: "Click-to-WhatsApp Entry",
          description: "Customer taps ad and opens immediate chat with local clinic or studio.",
          tools: ["WhatsApp API", "CTWA Ads"],
        },
        {
          stage: "Stage 03: Schedule",
          name: "Instant Slot Booking",
          description: "Interactive bot presents available time slots for consultation or trial session.",
          tools: ["Chatbot Scheduling", "Reception Calendar"],
        },
        {
          stage: "Stage 04: Visit",
          name: "Directions & Check-in",
          description: "Automated Google Maps pin + 2-hour appointment reminder sent to customer phone.",
          tools: ["WhatsApp Alerts", "Google Maps Sync", "CRM Logging"],
        },
      ]}
      whatsappPlaybook={{
        title: "The Local Business WhatsApp Booking Engine",
        description: "How ConvertX eliminates no-shows and fills daily appointment books:",
        flows: [
          "Instant automated Service Menu & Introductory Discount delivery upon ad click",
          "Interactive date and time slot selection for initial consultation or service trial",
          "Automated Google Maps directions pin and parking instruction delivery",
          "2-hour pre-visit WhatsApp reminder with instant 1-tap reschedule button",
        ],
      }}
      faqs={[
        {
          question: "What types of local businesses do you work with?",
          answer: "We work with dental & cosmetic clinics, fitness & yoga studios, high-end salons, diagnostic centers, interior designers, and specialized local service providers.",
        },
        {
          question: "How do we receive notifications when someone books an appointment?",
          answer: "Your front desk or receptionist receives an instant WhatsApp alert and email with the customer's name, phone number, and selected time slot.",
        },
        {
          question: "Can we run campaigns for multiple branch locations?",
          answer: "Yes! We build multi-location funnels that automatically route prospects to their nearest branch based on pincode or GPS location.",
        },
      ]}
      recommendedServices={[
        { title: "WhatsApp Business API", href: "/whatsapp-business-api" },
        { title: "Meta Ads Agency", href: "/meta-ads-agency" },
        { title: "Landing Page Development", href: "/landing-pages" },
        { title: "Lead Generation Engines", href: "/lead-generation" },
      ]}
      otherIndustries={[
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Professional Services", href: "/industries/professional-services" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
      ]}
    />
  );
}
