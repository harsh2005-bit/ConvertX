import React from "react";
import { constructMetadata } from "@/lib/seo";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";

export const metadata = constructMetadata({
  title: "E-Commerce & D2C Growth Agency India | Meta Ads & WhatsApp Scaling",
  description:
    "ConvertX scales E-Commerce & D2C brands with high-converting Meta catalog ads, sub-second Next.js checkout pages, and automated WhatsApp abandoned cart recovery.",
  pathname: "/industries/ecommerce",
  keywords: [
    "E-commerce Marketing Agency India",
    "D2C Brand Growth Meta Ads",
    "WhatsApp Cart Recovery",
    "E-commerce ROAS Scaling",
    "Next.js E-commerce Store",
  ],
});

export default function EcommerceIndustryPage() {
  return (
    <IndustryPageTemplate
      id="ecommerce"
      badge="E-Commerce & D2C Vertical"
      h1Title="E-Commerce & D2C Growth Agency in India"
      subtitle="Scale Customer Acquisition, Lower CAC, and Maximize Lifetime Value."
      description="E-commerce margins are under pressure from rising ad costs. ConvertX builds full-funnel D2C growth engines combining high-CTR Reels creative testing, sub-second product pages, and automated WhatsApp cart recovery flows that scale revenue profitably."
      url="/industries/ecommerce"
      metrics={[
        { label: "Target ROAS", value: "4.5x – 8.2x", desc: "Across scaled catalog & video campaigns" },
        { label: "Cart Recovery Lift", value: "+28%", desc: "Via automated 15-min WhatsApp triggers" },
        { label: "Page Load Time", value: "<0.7s", desc: "Sub-second Next.js product page loading" },
        { label: "AOV Expansion", value: "+34%", desc: "Through 1-click bundle upsells" },
      ]}
      challenges={[
        {
          title: "High Cart Abandonment (75%+)",
          description: "Shoppers add items to cart on mobile networks but abandon during slow checkout flows or unexpected shipping charges.",
        },
        {
          title: "Ad Creative Fatigue in 10 Days",
          description: "Scaling ad spend rapidly burns through static product photos, causing CPMs and acquisition costs to spike.",
        },
        {
          title: "Zero Post-Purchase WhatsApp Retention",
          description: "Relying solely on ignored email receipts and losing the high-LTV opportunity to cross-sell repeat products.",
        },
      ]}
      strategies={[
        {
          title: "Advantage+ & Catalog Dynamic Scaling",
          description: "Deploy structured dynamic product ads (DPA) and Advantage+ shopping campaigns that show the exact right product to in-market buyers.",
          deliverables: ["Product Feed Optimization", "Dynamic Retargeting Stacks", "Collection Ad Creative Formats"],
        },
        {
          title: "Sub-Second Next.js Product Landers",
          description: "Custom product landing pages that load instantly inside Instagram's in-app browser with 1-tap COD/UPI payment buttons.",
          deliverables: ["Next.js Fast Checkout", "Sticky Add-to-Cart Bar", "Instant UPI Payment Links"],
        },
        {
          title: "Automated WhatsApp Abandoned Cart Funnel",
          description: "Trigger automated, personalized WhatsApp messages with product images and 1-click checkout discounts within 15 minutes of abandonment.",
          deliverables: ["WhatsApp Cart Recovery Bot", "Time-Delayed Discount Drips", "Direct Cash-on-Delivery Confirmation"],
        },
      ]}
      funnelArchitecture={[
        {
          stage: "Stage 01: Hook",
          name: "UGC Video & Reels Ads",
          description: "High-energy problem/solution video hooks showcasing the product in use.",
          tools: ["Instagram Reels", "Meta Feed Ads", "TikTok/YT Shorts"],
        },
        {
          stage: "Stage 02: Explore",
          name: "Sub-Second Lander",
          description: "Frictionless product page with customer video reviews and instant bundles.",
          tools: ["Next.js", "Tailwind CSS", "Edge CDN"],
        },
        {
          stage: "Stage 03: Recover",
          name: "WhatsApp Cart Bot",
          description: "Automated WhatsApp nudge with instant coupon code for abandoned carts.",
          tools: ["WhatsApp API", "Webhooks", "Shopify/Custom API"],
        },
        {
          stage: "Stage 04: Retain",
          name: "Post-Purchase VIP Drip",
          description: "Shipping updates, review requests, and personalized repeat product cross-sells.",
          tools: ["WhatsApp Broadcast", "CRM Automation", "CAPI Offline Loop"],
        },
      ]}
      whatsappPlaybook={{
        title: "The D2C WhatsApp Revenue Engine",
        description: "How ConvertX turns WhatsApp into the highest-ROI channel for e-commerce brands:",
        flows: [
          "15-Minute Abandoned Cart Recovery with 1-click checkout URL",
          "Automated Cash-on-Delivery (COD) Order Confirmation & Address Verification",
          "Real-time dispatch tracking and delivery notifications via official WhatsApp templates",
          "Post-delivery product usage tips, review collection, and VIP repeat discount broadcasts",
        ],
      }}
      faqs={[
        {
          question: "Can you integrate with Shopify or WooCommerce stores?",
          answer: "Yes! We integrate Meta CAPI, custom Next.js landing pages, and WhatsApp Business API automations directly with Shopify, WooCommerce, Magento, and custom headless e-commerce backends.",
        },
        {
          question: "How do WhatsApp cart recovery messages compare to standard SMS/Email?",
          answer: "WhatsApp recovery messages achieve 98% open rates and 45%+ click-through rates compared to <15% for email and <5% for SMS, recovering up to 3x more abandoned revenue.",
        },
        {
          question: "Do you provide creative video editing for our products?",
          answer: "Yes. We take your raw product videos and photos and edit them into high-CTR Reels, carousels, and UGC video ad formats optimized for mobile feeds.",
        },
      ]}
      recommendedServices={[
        { title: "Meta Ads Agency", href: "/meta-ads-agency" },
        { title: "WhatsApp Business API", href: "/whatsapp-business-api" },
        { title: "Landing Page Development", href: "/landing-pages" },
        { title: "Verified Agency Accounts", href: "/agency-accounts" },
      ]}
      otherIndustries={[
        { title: "Real Estate & Property", href: "/industries/real-estate" },
        { title: "Education & Coaching", href: "/industries/education" },
        { title: "Startups & SaaS", href: "/industries/startups" },
        { title: "Local Businesses", href: "/industries/local-business" },
      ]}
    />
  );
}
