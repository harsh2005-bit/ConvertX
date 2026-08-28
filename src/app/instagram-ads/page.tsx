import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = constructMetadata({
  title: "Instagram Ads Agency in India | Reels, Stories & DM Funnels",
  description:
    "Scale your brand on Instagram with high-converting Reels ad creatives, Instagram Story funnels, and automated Direct Message (DM) lead generation systems.",
  pathname: "/instagram-ads",
  keywords: [
    "Instagram Ads Agency India",
    "Instagram Marketing Agency",
    "Instagram Reels Advertising",
    "Instagram Story Ads",
    "Instagram DM Lead Funnel",
  ],
});

export default function InstagramAdsPage() {
  return (
    <ServicePageTemplate
      id="instagram-ads"
      badge="Visual Performance"
      h1Title="Instagram Ads Agency in India"
      subtitle="Turn High-Attention Reels & Stories into Measurable Customer Revenue."
      description="Instagram is India's most active visual discovery platform. ConvertX designs native 9:16 vertical video ad creatives, influencer-style UGC campaigns, and interactive Direct Message funnels that engage mobile users and convert them into buyers."
      url="/instagram-ads"
      serviceType="Instagram Marketing & Paid Social"
      metrics={[
        { label: "Vertical Video CTR", value: "2.8% – 4.5%", desc: "On native 9:16 Reels formats" },
        { label: "DM Lead Conversion", value: "4x Faster", desc: "Via automated Instagram conversation flows" },
        { label: "Creative Refresh Rate", value: "7 Days", desc: "Preventing audience visual saturation" },
        { label: "Mobile Optimization", value: "100%", desc: "Engineered specifically for mobile screen real-estate" },
      ]}
      problemSolution={{
        problemTitle: "Where Standard Instagram Campaigns Fail",
        problems: [
          "Running resized horizontal (16:9) video ads that look out of place on Reels feeds.",
          "Using overly polished corporate branding that users instinctively scroll past.",
          "No automated reply mechanism when users comment or DM about pricing.",
          "Failing to capture high-intent users who browse Instagram on high-speed mobile networks.",
        ],
        solutionTitle: "The ConvertX Instagram Strategy",
        solutions: [
          "Authentic, native 9:16 Reels and Story video hooks styled like organic content.",
          "Automated comment-to-DM flows that instantly send product links or WhatsApp invitations.",
          "Mobile-first checkout and sub-second landing pages tailored for in-app browser sessions.",
          "Audience retargeting built around Instagram account engagement and video view duration.",
        ],
      }}
      features={[
        {
          title: "Instagram Reels Ad Engineering",
          description: "High-paced, 3-second hook video ads built specifically for the Instagram Reels algorithm.",
          deliverables: ["Native 9:16 Video Creatives", "Audio/Trend Alignment", "Multi-Hook Variations"],
          badge: "Highest Engagement",
        },
        {
          title: "Interactive Story Ads & Polls",
          description: "Swipe-up and interactive sticker ads that qualify prospect interest before directing them to your landing page.",
          deliverables: ["Interactive Story Creatives", "Quiz & Poll Hooks", "Direct CTA Overlays"],
        },
        {
          title: "Comment-to-DM Lead Automation",
          description: "Automatically send instant direct messages with coupon codes, pricing sheets, or WhatsApp links when prospects comment on your ads.",
          deliverables: ["Keyword Trigger Bots", "Instant DM Delivery", "CRM Lead Sync"],
        },
        {
          title: "Influencer & UGC Creative Frameworks",
          description: "User-Generated Content (UGC) ad structures that look and feel like genuine peer recommendations.",
          deliverables: ["Creator Briefing Templates", "UGC Video Editing", "Social Proof Integration"],
        },
        {
          title: "Engaged Audience Retargeting",
          description: "Retarget users who saved your posts, visited your profile, or watched 75%+ of your video ads with special discount offers.",
          deliverables: ["Custom Audience Stacks", "Dynamic Product Retargeting", "LTV Booster Campaigns"],
        },
        {
          title: "In-App Browser Optimization",
          description: "Ensure your landing pages load instantly inside Instagram's internal browser without glitching or dropping pixels.",
          deliverables: ["In-App Speed Optimization", "Mobile Tap Targets", "Frictionless One-Page Checkouts"],
        },
      ]}
      processSteps={[
        {
          step: "01",
          title: "Visual Angle & Competitor Research",
          description: "We analyze top-performing creatives in your vertical and identify high-CTR visual hooks.",
          outcome: "Creative Angle Roadmap",
        },
        {
          step: "02",
          title: "Reels & Story Production",
          description: "We script, edit, and caption mobile-first video ads formatted for Instagram's feed and Reels.",
          outcome: "Native Ad Creative Pack",
        },
        {
          step: "03",
          title: "DM & Tracking Integration",
          description: "We set up automated comment/DM triggers and verify Meta Pixel tracking for mobile in-app browsers.",
          outcome: "Automated Interaction System",
        },
        {
          step: "04",
          title: "Scaling & Creative Iteration",
          description: "We double down on top-performing video hooks while cycling in fresh creative angles weekly.",
          outcome: "Continuous High-ROAS Scaling",
        },
      ]}
      faqs={[
        {
          question: "Why are Instagram Reels ads outperforming standard feed ads?",
          answer: "Reels represent the vast majority of user attention on Instagram. Full-screen 9:16 vertical video with strong audio and 3-second visual hooks captures undivided attention compared to static feed posts.",
        },
        {
          question: "Can Instagram ads connect directly to WhatsApp?",
          answer: "Yes! ConvertX builds direct Click-to-WhatsApp Instagram ads that open a WhatsApp conversation immediately upon tapping the ad button, capturing the lead's verified phone number.",
        },
        {
          question: "Do we need professional models or expensive studio video?",
          answer: "Not at all. In fact, authentic creator-style UGC (User Generated Content) filmed on high-end smartphones frequently outperforms expensive studio video ads because it feels genuine and non-salesy.",
        },
      ]}
      relatedServices={[
        {
          title: "Meta Ads Agency",
          href: "/meta-ads-agency",
          description: "Cross-platform Facebook & Instagram ad management.",
        },
        {
          title: "WhatsApp Business API",
          href: "/whatsapp-business-api",
          description: "Instant response automation for Instagram leads.",
        },
        {
          title: "Landing Page Development",
          href: "/landing-pages",
          description: "Mobile-first landing pages built for social traffic.",
        },
      ]}
      relatedIndustries={[
        { title: "E-Commerce & D2C", href: "/industries/ecommerce" },
        { title: "Education & EdTech", href: "/industries/education" },
        { title: "Startups", href: "/industries/startups" },
        { title: "Local Businesses", href: "/industries/local-business" },
      ]}
    />
  );
}
