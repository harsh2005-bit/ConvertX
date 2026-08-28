import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SchemaJsonLd } from "@/components/seo/SchemaJsonLd";
import { generateBreadcrumbSchema } from "@/lib/json-ld";

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbCrumb[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  const fullBreadcrumbs = [{ name: "Home", url: "/" }, ...items];
  const schema = generateBreadcrumbSchema(fullBreadcrumbs);

  return (
    <>
      <SchemaJsonLd schema={schema} />
      <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-[var(--color-fg-muted)] ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {fullBreadcrumbs.map((crumb, idx) => {
            const isLast = idx === fullBreadcrumbs.length - 1;
            return (
              <li key={crumb.url} className="flex items-center gap-1.5 sm:gap-2">
                {idx === 0 ? (
                  <Link
                    href={crumb.url}
                    className="flex items-center gap-1 hover:text-[var(--color-fg)] transition-colors"
                  >
                    <Home className="w-3.5 h-3.5 text-[var(--color-fg-muted)] hover:text-[var(--color-brand)]" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-[var(--color-brand)] font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.url}
                    className="hover:text-[var(--color-fg)] transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3 h-3 text-[var(--color-fg-subtle)] shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
