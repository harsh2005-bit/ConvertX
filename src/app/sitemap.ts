import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo";
import { getPublishedBlogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date().toISOString();

  // Core Service Pages
  const serviceRoutes = [
    "/meta-ads-agency",
    "/instagram-ads",
    "/whatsapp-business-api",
    "/agency-accounts",
    "/website-development",
    "/landing-pages",
    "/ai-automation",
    "/performance-marketing",
    "/lead-generation",
  ];

  // Industry Solution Pages
  const industryRoutes = [
    "/industries/ecommerce",
    "/industries/real-estate",
    "/industries/education",
    "/industries/local-business",
    "/industries/startups",
    "/industries/professional-services",
  ];

  // Published Blog Posts
  const publishedPosts = getPublishedBlogPosts();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...serviceRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...industryRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...publishedPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  return staticEntries;
}
