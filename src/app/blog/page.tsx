import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { getPublishedBlogPosts } from "@/lib/blog-data";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";

export const metadata = constructMetadata({
  title: "Growth & Performance Marketing Blog | Insights by ConvertX",
  description:
    "Actionable performance marketing blueprints, Meta Ads strategies, WhatsApp Business API guides, and landing page conversion optimization tactics.",
  pathname: "/blog",
  keywords: [
    "Performance Marketing Blog",
    "Meta Ads Guide India",
    "WhatsApp API Strategy",
    "Landing Page Optimization",
    "Digital Marketing Insights",
  ],
});

export default function BlogPage() {
  const posts = getPublishedBlogPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] relative overflow-hidden">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ name: "Blog", url: "/blog" }]} />
          </div>

          {/* Hero Heading */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <Badge variant="orange" icon={<BookOpen className="w-3.5 h-3.5" />}>
              ConvertX Knowledge Base
            </Badge>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-fg)] leading-tight">
              Performance Marketing & <br />
              <span className="text-gradient-orange">Growth Engineering.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[var(--color-fg-muted)] leading-relaxed">
              Transparent, battle-tested guides on Meta Ads scaling, WhatsApp Business API automation, and high-converting funnel architectures.
            </p>
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <div className="mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold block mb-3">
                ⭐ Featured Guide
              </span>
              <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-bg-card-elevated)] via-[var(--color-bg-card)] to-[var(--color-bg-card)] border border-[var(--color-brand)]/30 shadow-2xl relative overflow-hidden group hover:border-[var(--color-brand)]/60 transition-all">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--color-fg-muted)] mb-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand)] font-bold border border-[var(--color-brand)]/30">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readingTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.publishedAt}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-fg)] group-hover:text-[var(--color-brand)] transition-colors leading-snug mb-4">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[var(--color-fg-muted)] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)] group-hover:text-[var(--color-fg)] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Remaining Posts */}
          <div className="mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-fg)] mb-8 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--color-brand)]" />
              <span>Latest Articles & Case Strategies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {remainingPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-6 flex flex-col justify-between hover:border-[var(--color-brand)]/40 transition-all group shadow-lg shadow-black/50"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[var(--color-fg-muted)] mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-bg-card-elevated)] border border-[var(--color-border)] text-[var(--color-fg-muted)] font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[var(--color-fg-subtle)]" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--color-fg)] group-hover:text-[var(--color-brand)] transition-colors line-clamp-2 mb-2.5">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] line-clamp-3 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-[11px] text-[var(--color-fg-subtle)]">{post.publishedAt}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-brand)] hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Newsletter / Strategy Consultation CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[var(--color-bg-card-elevated)] to-[var(--color-bg-card)] border border-[var(--color-border)] text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-fg)] mb-3">
              Ready To Put These Strategies Into Practice?
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-fg-muted)] max-w-xl mx-auto mb-6 leading-relaxed">
              Book a 30-minute growth strategy session with the ConvertX team. We&apos;ll audit your current campaigns and map out your revenue system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button href="/#contact" variant="primary" size="md" showArrow>
                Book Strategy Call
              </Button>
              <Button href="/meta-ads-agency" variant="secondary" size="md">
                Explore Meta Ads Services
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
