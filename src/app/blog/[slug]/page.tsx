import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/seo";
import { generateArticleSchema } from "@/lib/json-ld";
import { SchemaJsonLd } from "@/components/seo/SchemaJsonLd";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/lib/blog-data";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { Clock, Calendar, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { CONTACT_WHATSAPP_URL } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getPublishedBlogPosts();
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return constructMetadata({
    title: `${post.title} | ConvertX Blog`,
    description: post.excerpt,
    pathname: `/blog/${post.slug}`,
    keywords: post.tags,
    ogType: "article",
    publishedTime: new Date(post.publishedAt).toISOString(),
    modifiedTime: new Date(post.updatedAt).toISOString(),
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    authorName: post.author.name,
    keywords: post.tags,
  });

  const otherPosts = getPublishedBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)] relative overflow-hidden">
      <SchemaJsonLd schema={articleSchema} />
      <Navbar />

      <article className="pt-32 pb-20 md:pt-40 md:pb-28 bg-grid-pattern relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { name: "Blog", url: "/blog" },
                { name: post.title, url: `/blog/${post.slug}` },
              ]}
            />
          </div>

          {/* Post Header */}
          <header className="mb-10 sm:mb-12">
            <Badge variant="orange">{post.category}</Badge>
            
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-fg)] leading-[1.2] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--color-fg-muted)] py-3.5 border-y border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[var(--color-brand)]/20 text-[var(--color-brand)] flex items-center justify-center font-bold text-xs">
                  CX
                </div>
                <div>
                  <span className="text-[var(--color-fg)] font-semibold block">{post.author.name}</span>
                  <span className="text-[11px] text-[var(--color-fg-muted)]">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                <Calendar className="w-3.5 h-3.5 text-[var(--color-fg-subtle)]" />
                <span>Updated: {post.updatedAt}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--color-fg-subtle)]" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Key Takeaways Summary Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-brand)]/40 shadow-xl shadow-[var(--color-brand)]/5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-brand)] font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Key Strategy Takeaways</span>
              </div>
              <ul className="space-y-3">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-fg)] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Main Body Content */}
          <div className="space-y-10 text-[var(--color-fg-muted)] leading-relaxed text-base sm:text-lg">
            {post.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-fg)] tracking-tight pt-4">
                    {section.heading}
                  </h2>
                )}
                {section.subheading && (
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-fg)] tracking-tight pt-2">
                    {section.subheading}
                  </h3>
                )}
                <p className="text-[var(--color-fg-muted)] leading-relaxed text-sm sm:text-base">
                  {section.text}
                </p>

                {/* Table if present */}
                {section.table && (
                  <div className="my-6 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[var(--color-bg-card-elevated)] text-[var(--color-fg)] font-mono uppercase text-[11px] border-b border-[var(--color-border)]">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3.5 sm:p-4 font-semibold text-[var(--color-fg)]">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--color-border)]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[var(--color-bg-subtle)] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 sm:p-4 text-[var(--color-fg-muted)] font-medium">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Bullet Points if present */}
                {section.bulletPoints && (
                  <ul className="space-y-2.5 my-4">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[var(--color-fg-muted)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shrink-0 mt-2.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Related Services Links Section */}
          {post.relatedServices && post.relatedServices.length > 0 && (
            <div className="mt-14 pt-8 border-t border-[var(--color-border)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-fg-muted)] font-bold block mb-4">
                Recommended Solutions For This Strategy:
              </span>
              <div className="flex flex-wrap gap-3">
                {post.relatedServices.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] text-xs font-bold text-[var(--color-fg)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-all"
                  >
                    <span>{service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* In-Article Conversion Card */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--color-bg-card-elevated)] via-[var(--color-bg-card)] to-[var(--color-bg-card)] border border-[var(--color-brand)]/40 shadow-2xl relative overflow-hidden text-center">
            <div className="max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-[var(--color-brand-subtle)] text-[var(--color-brand)] text-xs font-bold border border-[var(--color-brand)]/30 inline-block mb-4">
                🚀 Need Expert Execution?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-fg)] mb-3">
                Scale Your Revenue With ConvertX
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-fg-muted)] mb-6 leading-relaxed">
                Skip the trial-and-error. Let our performance marketing and automation engineers build and scale your growth engine.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Button href="/#contact" variant="primary" size="md" showArrow>
                  Book a Call
                </Button>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Next / Other Articles */}
          {otherPosts.length > 0 && (
            <div className="mt-20 pt-10 border-t border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-fg)] mb-6">Explore More Growth Blueprints</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherPosts.map((op) => (
                  <Link
                    key={op.slug}
                    href={`/blog/${op.slug}`}
                    className="p-5 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 transition-all group block"
                  >
                    <span className="text-[11px] font-mono text-[var(--color-brand)] uppercase block mb-1">
                      {op.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[var(--color-fg)] group-hover:text-[var(--color-brand)] transition-colors line-clamp-2 mb-2">
                      {op.title}
                    </h4>
                    <span className="text-xs text-[var(--color-fg-muted)] flex items-center gap-1">
                      Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>

      <Footer />
      <FloatingContact />
    </main>
  );
}
