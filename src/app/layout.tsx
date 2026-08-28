import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/seo";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/json-ld";
import { SchemaJsonLd } from "@/components/seo/SchemaJsonLd";
import { Analytics } from "@/components/analytics/Analytics";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: SITE_CONFIG.titleTemplate,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: "ConvertX Team", url: SITE_CONFIG.url }],
  creator: "ConvertX Media",
  publisher: "ConvertX Media",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
    type: "website",
    images: [
      {
        url: `${SITE_CONFIG.url}/icon.png`,
        width: 512,
        height: 512,
        alt: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/icon.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <head>
        <SchemaJsonLd schema={organizationSchema} />
        <SchemaJsonLd schema={websiteSchema} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('convertx-theme');var d=false;if(t==='dark')d=true;else if(t==='light')d=false;else d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] font-sans antialiased">
        <ThemeProvider>
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
