import React from "react";

export interface PartnerPlatform {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
  darkColor?: string;
  svgIcon: React.ReactNode;
}

export const PARTNERS_ROW_1: PartnerPlatform[] = [
  {
    id: "zaptick",
    name: "Zaptick",
    category: "WhatsApp API",
    description: "Official WhatsApp Cloud API & Automation",
    color: "#25D366",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.08-1.34C8.54 21.49 10.23 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
      }),
      React.createElement("path", {
        d: "M11.5 5L7 13h4l-1 6 6.5-9H12.5l1-5z",
        fill: "#FF6A00"
      })
    )
  },
  {
    id: "aisensy",
    name: "AiSensy",
    category: "WhatsApp Marketing",
    description: "WhatsApp Engagement & Retargeting Platform",
    color: "#0066FF",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
        stroke: "currentColor",
        strokeWidth: "2"
      }),
      React.createElement("circle", { cx: "9", cy: "12", r: "1", fill: "currentColor" }),
      React.createElement("circle", { cx: "15", cy: "12", r: "1", fill: "currentColor" }),
      React.createElement("path", { d: "M9.5 15c.8.6 1.6 1 2.5 1s1.7-.4 2.5-1", stroke: "#FF6A00", strokeWidth: "1.5" })
    )
  },
  {
    id: "wati",
    name: "WATI",
    category: "WhatsApp CRM",
    description: "WhatsApp Customer Communication Platform",
    color: "#00D26A",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("rect", { width: "20", height: "20", x: "2", y: "2", rx: "6", fill: "currentColor", fillOpacity: "0.15" }),
      React.createElement("path", {
        d: "M6 8l3 8 3-6 3 6 3-8",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    )
  },
  {
    id: "interakt",
    name: "Interakt",
    category: "Conversational Commerce",
    description: "Jio Haptik WhatsApp Business Platform",
    color: "#6C5CE7",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("path", {
        d: "M8 12h8M12 8l4 4-4 4",
        stroke: "#FF6A00",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    )
  },
  {
    id: "msg91",
    name: "MSG91",
    category: "Enterprise Messaging",
    description: "Cloud Communication APIs, SMS & OTP",
    color: "#FF4D4D",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("rect", { width: "18", height: "14", x: "3", y: "5", rx: "3", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("path", {
        d: "M7 9h10M7 12h6M7 15h3",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }),
      React.createElement("circle", { cx: "17", cy: "14", r: "1.5", fill: "#FF6A00" })
    )
  },
  {
    id: "twilio",
    name: "Twilio",
    category: "Communication APIs",
    description: "Global Programmable Messaging & Voice APIs",
    color: "#F22F46",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("circle", { cx: "12", cy: "12", r: "10", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("circle", { cx: "9", cy: "9", r: "2" }),
      React.createElement("circle", { cx: "15", cy: "9", r: "2" }),
      React.createElement("circle", { cx: "9", cy: "15", r: "2" }),
      React.createElement("circle", { cx: "15", cy: "15", r: "2" })
    )
  },
];

export const PARTNERS_ROW_2: PartnerPlatform[] = [
  {
    id: "sinch",
    name: "Sinch",
    category: "Cloud Communications",
    description: "Omnichannel Messaging & Customer Engagement",
    color: "#0055FF",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M4 17a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2H4v-2z",
        stroke: "currentColor",
        strokeWidth: "2"
      }),
      React.createElement("circle", { cx: "12", cy: "7", r: "4", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("path", { d: "M19 4l2 2-2 2", stroke: "#FF6A00", strokeWidth: "2", strokeLinecap: "round" })
    )
  },
  {
    id: "gupshup",
    name: "Gupshup",
    category: "Conversational AI",
    description: "Conversational Messaging & Bot Infrastructure",
    color: "#00C9A7",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M3 10c0-3.87 3.58-7 8-7s8 3.13 8 7c0 2.22-1.18 4.2-3.03 5.46L17 20l-4.14-1.38C12.3 18.84 11.66 19 11 19c-4.42 0-8-3.13-8-7z",
        stroke: "currentColor",
        strokeWidth: "2"
      }),
      React.createElement("path", {
        d: "M8 10h8M8 13h5",
        stroke: "#FF6A00",
        strokeWidth: "2",
        strokeLinecap: "round"
      })
    )
  },
  {
    id: "360dialog",
    name: "360dialog",
    category: "WhatsApp BSP",
    description: "Official Meta Business Solution Provider",
    color: "#1E3A8A",
    darkColor: "#60A5FA",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("circle", { cx: "12", cy: "12", r: "9", stroke: "currentColor", strokeWidth: "2", strokeDasharray: "4 2" }),
      React.createElement("circle", { cx: "12", cy: "12", r: "4", fill: "#FF6A00" })
    )
  },
  {
    id: "infobip",
    name: "Infobip",
    category: "Omnichannel Communications",
    description: "Global Communications Platform as a Service",
    color: "#FF6200",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("rect", { width: "18", height: "18", x: "3", y: "3", rx: "4", stroke: "currentColor", strokeWidth: "2" }),
      React.createElement("path", {
        d: "M8 12h8M12 8v8",
        stroke: "#FF6A00",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      })
    )
  },
  {
    id: "vonage",
    name: "Vonage",
    category: "Cloud Communications",
    description: "Programmable Video, Voice & WhatsApp APIs",
    color: "#7822FF",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "none", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M5 7l7 10 7-10",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("circle", { cx: "12", cy: "17", r: "2", fill: "#FF6A00" })
    )
  },
  {
    id: "meta-business",
    name: "Meta Business",
    category: "Ads & Graph API",
    description: "Marketing API, Conversion API & Graph Infrastructure",
    color: "#0668E1",
    svgIcon: React.createElement(
      "svg",
      { viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"
      })
    )
  },
];

export const PARTNER_MARQUEE_CONFIG = {
  speedRow1: 38, // seconds per loop (L -> R)
  speedRow2: 44, // seconds per loop (R -> L)
  eyebrow: "OUR TECHNOLOGY ECOSYSTEM",
  title: "Technology That Powers Your Growth.",
  description:
    "We work with leading messaging, API and marketing technology platforms to build reliable growth systems for businesses.",
  disclaimer:
    "Platform names and logos are trademarks of their respective owners. Their inclusion represents technology compatibility and integration capability, not endorsement or official partnership.",
  trustPoints: [
    {
      title: "Reliable Integrations",
      desc: "Robust API connections built for high-throughput messaging",
      icon: "Workflow",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Serverless pipelines engineered to handle high ad traffic",
      icon: "Server",
    },
    {
      title: "Business-Ready APIs",
      desc: "Instant webhooks, lead routing, and CRM sync",
      icon: "Cpu",
    },
    {
      title: "Conversion-Focused Systems",
      desc: "End-to-end architecture built strictly around business outcomes",
      icon: "ShieldCheck",
    },
  ],
};
