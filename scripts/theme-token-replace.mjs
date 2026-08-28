import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src");
const skip = new Set([
  "src/components/ui/Button.tsx",
  "src/components/ui/ThemeToggle.tsx",
  "src/components/ui/Logo.tsx",
  "src/components/sections/Hero.tsx",
]);

const replacements = [
  ["bg-[#060608]", "bg-[var(--color-bg)]"],
  ["bg-[#0A0B0E]", "bg-[var(--color-bg-subtle)]"],
  ["bg-[#040405]", "bg-[var(--color-footer)]"],
  ["from-[#0D0E12]", "from-[var(--color-bg-card)]"],
  ["via-[#14161F]", "via-[var(--color-bg-card-elevated)]"],
  ["via-[#0D0E12]", "via-[var(--color-bg-card)]"],
  ["to-[#0D0E12]", "to-[var(--color-bg-card)]"],
  ["from-[#14161F]", "from-[var(--color-bg-card-elevated)]"],
  ["bg-[#0D0E12]/95", "bg-[var(--color-bg-card)]/95"],
  ["bg-[#0D0E12]/90", "bg-[var(--color-bg-card)]/90"],
  ["bg-[#0D0E12]/80", "bg-[var(--color-bg-card)]/80"],
  ["bg-[#0D0E12]/60", "bg-[var(--color-bg-card)]"],
  ["bg-[#14161F]/60", "bg-[var(--color-bg-card-elevated)]"],
  ["bg-[#0D0E12]", "bg-[var(--color-bg-card)]"],
  ["bg-[#14161F]", "bg-[var(--color-bg-card-elevated)]"],
  ["bg-[#1D202D]", "bg-[var(--color-bg-card-elevated)]"],
  ["hover:bg-[#1D202D]", "hover:bg-[var(--color-bg-card-elevated)]"],
  ["hover:bg-[#1A1C26]", "hover:bg-[var(--color-bg-card-elevated)]"],
  ["text-slate-100", "text-[var(--color-fg)]"],
  ["text-slate-200", "text-[var(--color-fg)]"],
  ["text-slate-300", "text-[var(--color-fg-muted)]"],
  ["text-slate-400", "text-[var(--color-fg-muted)]"],
  ["text-slate-500", "text-[var(--color-fg-subtle)]"],
  ["text-slate-600", "text-[var(--color-fg-subtle)]"],
  ["hover:text-slate-400", "hover:text-[var(--color-fg-muted)]"],
  ["hover:text-white", "hover:text-[var(--color-fg)]"],
  ["border-white/20", "border-[var(--color-border)]"],
  ["border-white/15", "border-[var(--color-border)]"],
  ["border-white/10", "border-[var(--color-border)]"],
  ["border-white/5", "border-[var(--color-border)]"],
  ["border-t border-white/10", "border-t border-[var(--color-border)]"],
  ["border-y border-white/10", "border-y border-[var(--color-border)]"],
  ["border-b border-white/10", "border-b border-[var(--color-border)]"],
  ["divide-white/5", "divide-[var(--color-border)]"],
  ["bg-white/5", "bg-[var(--color-bg-card-elevated)]"],
  ["hover:bg-white/10", "hover:bg-[var(--color-bg-subtle)]"],
  ["hover:bg-white/[0.02]", "hover:bg-[var(--color-bg-subtle)]"],
  ["bg-[#FF5500]/15", "bg-[var(--color-brand-subtle)]"],
  ["bg-[#FF5500]/10", "bg-[var(--color-brand-subtle)]"],
  ["bg-[#FF5500]/5", "bg-[var(--color-brand-subtle)]"],
  ["bg-[#FF5500]", "bg-[var(--color-brand)]"],
  ["hover:bg-[#FF6A1A]", "hover:bg-[var(--color-brand-hover)]"],
  ["hover:bg-[#FF6600]", "hover:bg-[var(--color-brand-hover)]"],
  ["text-[#FF5500]", "text-[var(--color-brand)]"],
  ["hover:text-[#FF5500]", "hover:text-[var(--color-brand)]"],
  ["group-hover:text-[#FF5500]", "group-hover:text-[var(--color-brand)]"],
  ["group-hover:bg-[#FF5500]", "group-hover:bg-[var(--color-brand)]"],
  ["border-[#FF5500]/60", "border-[var(--color-brand)]/60"],
  ["border-[#FF5500]/50", "border-[var(--color-brand)]/50"],
  ["border-[#FF5500]/40", "border-[var(--color-brand)]/40"],
  ["border-[#FF5500]/30", "border-[var(--color-brand)]/30"],
  ["hover:border-[#FF5500]/60", "hover:border-[var(--color-brand)]/60"],
  ["hover:border-[#FF5500]/50", "hover:border-[var(--color-brand)]/50"],
  ["hover:border-[#FF5500]/40", "hover:border-[var(--color-brand)]/40"],
  ["hover:border-[#FF5500]/30", "hover:border-[var(--color-brand)]/30"],
  ["hover:border-[#FF5500]", "hover:border-[var(--color-brand)]"],
  ["from-[#FF5500]/20", "from-[var(--color-brand)]/20"],
  ["via-[#FF5500]/70", "via-[var(--color-brand)]/70"],
  ["to-[#FF5500]", "to-[var(--color-brand)]"],
  ["via-[#FF5500]", "via-[var(--color-brand)]"],
  ["from-[#FF5500]/20", "from-[var(--color-brand)]/20"],
  ["shadow-[#FF5500]/30", "shadow-[var(--color-brand)]/30"],
  ["shadow-[#FF5500]/25", "shadow-[var(--color-brand)]/25"],
  ["shadow-[#FF5500]/15", "shadow-[var(--color-brand)]/15"],
  ["shadow-[#FF5500]/10", "shadow-[var(--color-brand)]/10"],
  ["shadow-[#FF5500]/5", "shadow-[var(--color-brand)]/5"],
];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(tsx|ts)$/.test(entry.name)) continue;
    const rel = path.relative(process.cwd(), full).replaceAll("\\", "/");
    if (skip.has(rel)) continue;
    let src = fs.readFileSync(full, "utf8");
    const original = src;
    for (const [from, to] of replacements) {
      src = src.split(from).join(to);
    }
    // Keep white text on brand / WhatsApp CTAs
    src = src.replaceAll(
      "bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-[var(--color-fg)]",
      "bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white"
    );
    src = src.replaceAll(
      "bg-[var(--color-brand)] text-[var(--color-fg)]",
      "bg-[var(--color-brand)] text-white"
    );
    src = src.replaceAll("bg-[#25D366] hover:bg-[#20ba59] text-[var(--color-fg)]", "bg-[#25D366] hover:bg-[#20ba59] text-white");
    src = src.replaceAll("bg-[#25D366] text-[var(--color-fg)]", "bg-[#25D366] text-white");
    src = src.replaceAll("from-[#25D366] to-[#128C7E] text-[var(--color-fg)]", "from-[#25D366] to-[#128C7E] text-white");
    src = src.replaceAll("hover:bg-[#20ba59] text-[var(--color-fg)]", "hover:bg-[#20ba59] text-white");
    if (src !== original) {
      fs.writeFileSync(full, src);
      console.log("updated", rel);
    }
  }
}

walk(root);
