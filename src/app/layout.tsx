import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ConvertX | Turn Attention Into Revenue",
  description:
    "ConvertX helps businesses grow with Meta Ads, Instagram Ads, WhatsApp Business API, high-converting websites and AI-powered automation.",
  keywords: [
    "Meta Ads Agency",
    "Instagram Ads",
    "WhatsApp Business API",
    "Next.js Landing Pages",
    "Performance Marketing",
    "Lead Generation",
    "AI Automation",
    "Agency Accounts",
  ],
  authors: [{ name: "ConvertX Team" }],
  metadataBase: new URL("https://convertx.agency"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ConvertX | Turn Attention Into Revenue",
    description:
      "Performance marketing, technology and automation built to turn attention into measurable business results.",
    url: "https://convertx.agency",
    siteName: "ConvertX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConvertX | Turn Attention Into Revenue",
    description:
      "Meta Ads, WhatsApp Business API, high-converting websites and AI automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth`}>
      <body className="bg-[#060608] text-slate-100 font-sans antialiased selection:bg-[#FF5500] selection:text-white">
        {children}
      </body>
    </html>
  );
}
