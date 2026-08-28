import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src");

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(tsx|ts)$/.test(entry.name)) continue;
    const rel = path.relative(process.cwd(), full).replaceAll("\\", "/");
    if (
      rel.includes("ThemeToggle") ||
      rel.includes("Button.tsx") ||
      rel.includes("Logo.tsx")
    )
      continue;
    let src = fs.readFileSync(full, "utf8");
    const original = src;
    src = src.replaceAll("text-white", "text-[var(--color-fg)]");
    src = src.replaceAll("placeholder-slate-500", "placeholder-[#888888]");
    src = src.replaceAll("focus:border-[#FF5500]", "focus:border-[var(--color-brand)]");
    src = src.replaceAll("border-[#FF5500]", "border-[var(--color-brand)]");
    src = src.replaceAll("bg-[#FF5500]", "bg-[var(--color-brand)]");
    src = src.replaceAll("border-[#0D0E12]", "border-[var(--color-bg-card)]");
    src = src.replaceAll("text-white/10", "text-[var(--color-fg)]/10");
    // restore CTAs that must stay white
    src = src.replaceAll("bg-[#25D366] hover:bg-[#20ba59] text-[var(--color-fg)]", "bg-[#25D366] hover:bg-[#20ba59] text-white");
    src = src.replaceAll("bg-[#25D366] text-[var(--color-fg)]", "bg-[#25D366] text-white");
    src = src.replaceAll("from-[#25D366] to-[#128C7E] text-[var(--color-fg)]", "from-[#25D366] to-[#128C7E] text-white");
    src = src.replaceAll("bg-[var(--color-brand)] text-[var(--color-fg)]", "bg-[var(--color-brand)] text-white");
    src = src.replaceAll("bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-[var(--color-fg)]", "bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white");
    src = src.replaceAll('fill-[var(--color-fg)] text-[var(--color-fg)]"', 'fill-white text-white"');
    src = src.replaceAll("? \"bg-[var(--color-brand)] text-[var(--color-fg)]", '? "bg-[var(--color-brand)] text-white');
    if (src !== original) {
      fs.writeFileSync(full, src);
      console.log("updated", path.relative(process.cwd(), full));
    }
  }
}

walk(root);
