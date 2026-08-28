import React from "react";
import { constructMetadata } from "@/lib/seo";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export const metadata = constructMetadata({
  title: "Education & EdTech Marketing Agency India | Student Enrollment Funnels",
  description:
    "ConvertX scales student enrollments and webinar registrations for EdTech, coaching institutes, and higher education brands using Meta Ads and automated WhatsApp counseling funnels.",
  pathname: "/industries/education",
  keywords: [
    "Education Marketing Agency India",
    "EdTech Lead Generation Meta Ads",
    "Student Enrollment Funnels",
    "Coaching Institute Marketing",
    "WhatsApp Education Automation",
  ],
});

export default function EducationIndustryPage() {
  return (
    <IndustryPageTemplate
      id="education"
      badge="Education & EdTech Vertical"
      h1Title="Education & EdTech Growth Agency in India"
      subtitle="Fill Webinars, Demo Classes, and Degree Programs with Qualified Students."
      description="Student acquisition costs are soaring due to high ad competition. ConvertX designs high-converting workshop funnels, syllabus download lead magnets, and automated WhatsApp counseling sequences that dramatically lower cost-per-enrollment."
      url="/industries/education"
      metrics={[
        { label: "Webinar Attendance Rate", value: "58% – 72%", desc: "Via automated WhatsApp reminder loops" },
        { label: "Cost Per Registration", value: "₹45 – ₹140", desc: "For live workshops & masterclasses" },
        { label: "Counseling Call Connect", value: "3.2x Boost", desc: "Compared to cold telephone dialling" },
        { label: "Paid Enrollment ROAS", value: "4.8x", desc: "Across scaled course launch funnels" },
      ]}
      challenges={[
        {
          title: "Low Webinar Show-Up Rates (15–25%)",
          description: "Students register for live workshops but forget or miss standard email reminders.",
        },
        {
          title: "Unresponsive Lead Lists",
          description: "Academic counselors waste hours calling cold leads who no longer remember submitting a form.",
        },
        {
          title: "Rising Cost Per Enrollment",
          description: "Running broad ads without creative hook differentiation drives up CPMs and acquisition costs.",
        },
      ]}
      strategies={[
        {
          title: "Value-Packed Masterclass & Syllabus Lead Magnets",
          description: "Engaging video ads offering free demo masterclasses, sample test papers, or curriculum breakdowns that attract serious learners.",
          deliverables: ["Curriculum-Focused Ad Copy", "High-Energy Instructor Video Clips", "Student Testimonial Compilations"],
        },
        {
          title: "Sub-Second Next.js Workshop Landing Pages",
          description: "High-speed registration pages with countdown timers, curriculum previews, and 1-tap WhatsApp auto-fill enrollment.",
          deliverables: ["Next.js Event Landing Page", "Dynamic Countdown Timer", "Instant Calendar Add Integration"],
        },
        {
          title: "Automated WhatsApp Counseling & Show-Up Engine",
          description: "Deliver instant zoom links, workbook PDFs, and timed reminder nudges (24h, 1h, 10m before live class) directly on WhatsApp.",
          deliverables: ["WhatsApp Webinar Broadcast Bot", "Pre-Workshop Study Material Drip", "Post-Session Offer Broadcast"],
        },
      ]}
      funnelArchitecture={[
        {
          stage: "Stage 01: Attract",
          name: "Instructor Hooks & Proof Ads",
          description: "Video ads highlighting career transformation, exam tips, and student success case studies.",
          tools: ["Instagram Reels", "Meta Video Ads", "YouTube Shorts"],
        },
        {
          stage: "Stage 02: Register",
          name: "1-Tap Workshop Lander",
          description: "Sub-second Next.js page capturing student name, phone, and target career goal.",
          tools: ["Next.js", "WhatsApp API", "Tailwind CSS"],
        },
        {
          stage: "Stage 03: Nurture",
          name: "WhatsApp Show-Up Sequence",
          description: "Automated PDF syllabus delivery + Zoom links and countdown reminders sent via WhatsApp.",
          tools: ["WhatsApp Broadcast", "Zoom Webhook", "CRM Sync"],
        },
        {
          stage: "Stage 04: Enroll",
          name: "Counseling & Offer Closing",
          description: "Post-webinar scholarship offers, recorded replay access, and 1-on-1 counseling scheduling.",
          tools: ["WhatsApp CRM", "Payment Gateway Links", "Counselor Dashboard"],
        },
      ]}
      whatsappPlaybook={{
        title: "The EdTech WhatsApp Enrollment Machine",
        description: "How ConvertX achieves 60%+ workshop show-up rates and higher paid admissions:",
        flows: [
          "Instant automated PDF Syllabus & Prep Material delivery upon registration",
          "Automated Zoom / Meeting link reminders at 24 hours, 1 hour, and 10 minutes before class",
          "Interactive post-webinar feedback poll & scholarship eligibility assessment",
          "Direct 1-on-1 academic counselor chat routing with pre-filled student details",
        ],
      }}
      faqs={[
        {
          question: "Can this funnel work for offline coaching centers as well as online EdTech?",
          answer: "Yes! For offline institutes, the WhatsApp bot invites students and parents for an in-person diagnostic test or campus counseling visit, providing automated Google Maps directions and reminders.",
        },
        {
          question: "How do you improve webinar attendance rates?",
          answer: "We replace easily ignored email reminders with official WhatsApp broadcast reminders containing calendar invites, workbook PDFs, and direct 1-tap Zoom access links.",
        },
        {
          question: "Can we integrate this with our academic LMS or CRM?",
          answer: "Yes. ConvertX connects registrations to LeadSquared, Zoho, HubSpot, Teachable, Graphy, Thinkific, or custom Next.js database backends.",
        },
      ]}
      recommendedServices={[
        { title: "Meta Ads Agency", href: "/meta-ads-agency" },
        { title: "WhatsApp Business API", href: "/whatsapp-business-api" },
        { title: "Landing Page Development", href: "/landing-pages" },
        { title: "AI Workflow Automation", href: "/ai-automation" },
      ]}
      otherIndustries={[
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Startups & SaaS", href: "/industries/startups" },
        { title: "Professional Services", href: "/industries/professional-services" },
      ]}
    />
  );
}
