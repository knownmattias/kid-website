type Lang = "sv" | "en";

export interface InsightPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

/** Browser-safe frontmatter parse (avoids gray-matter/Buffer). */
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, fm, content] = match;
  const data: Record<string, string> = {};
  const lineRe = /^(\w+):\s*(?:"([^"]*)"|'([^']*)'|(.+?))?\s*$/gm;
  let m;
  while ((m = lineRe.exec(fm)) !== null) {
    const value = m[2] ?? m[3] ?? m[4] ?? "";
    data[m[1]] = value.trim();
  }
  const normalized = content.replace(/\r\n/g, "\n").trim();
  return { data, content: normalized };
}

const modules = import.meta.glob<string>("../content/insights/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parsePath(key: string): { slug: string; lang: Lang } | null {
  const match = key.match(/content\/insights\/([^/]+)\/(sv|en)\.md$/);
  if (!match) return null;
  return { slug: match[1], lang: match[2] as Lang };
}

const cache: Record<Lang, InsightPost[]> = { sv: [], en: [] };

function loadPosts(): void {
  if (cache.sv.length > 0) return;
  const bySlugLang: Record<string, Partial<Record<Lang, { category: string; title: string; excerpt: string; date: string; content: string }>>> = {};
  for (const [path, raw] of Object.entries(modules)) {
    const parsed = parsePath(path);
    if (!parsed || typeof raw !== "string") continue;
    const { data, content } = parseFrontmatter(raw);
    if (!bySlugLang[parsed.slug]) bySlugLang[parsed.slug] = {};
    bySlugLang[parsed.slug][parsed.lang] = {
      category: data.category ?? "",
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      content,
    };
  }
  const slugs = Object.keys(bySlugLang).sort();
  cache.sv = slugs
    .filter((s) => bySlugLang[s].sv?.title)
    .map((slug) => ({
      slug,
      category: bySlugLang[slug].sv!.category,
      title: bySlugLang[slug].sv!.title,
      excerpt: bySlugLang[slug].sv!.excerpt,
      date: bySlugLang[slug].sv!.date,
      content: bySlugLang[slug].sv!.content,
    }));
  cache.en = slugs
    .filter((s) => bySlugLang[s].en?.title)
    .map((slug) => ({
      slug,
      category: bySlugLang[slug].en!.category,
      title: bySlugLang[slug].en!.title,
      excerpt: bySlugLang[slug].en!.excerpt,
      date: bySlugLang[slug].en!.date,
      content: bySlugLang[slug].en!.content,
    }));
}

export function getInsightPosts(lang: Lang): InsightPost[] {
  loadPosts();
  return lang === "sv" ? cache.sv : cache.en;
}

export function getInsightBySlug(slug: string, lang: Lang): Omit<InsightPost, "content"> & { content: string } | null {
  loadPosts();
  const list = lang === "sv" ? cache.sv : cache.en;
  const post = list.find((p) => p.slug === slug);
  return post ? { ...post, content: post.content } : null;
}

/** Public paths under `public/` for insight card thumbnails (homepage, listings). */
export const INSIGHT_COVER_IMAGES: Record<string, string> = {
  "avtalsforbindelse-eller-affarsforbindelse":
    "/assets/insights/avtalsforbindelse-eller-affarsforbindelse/business-relationship.png",
  "KYC-eller-inte": "/assets/insights/KYC-eller-inte/customer-or-not.png",
  "praktisk-screening": "/assets/insights/praktisk-screening/12-12-till-3-12-regeln.png",
};

const INSIGHT_COVER_PLACEHOLDERS = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=750&fit=crop",
];

export function getInsightCoverSrc(slug: string, lang: Lang, index: number): string {
  if (slug === "praktisk-screening" && lang === "en") {
    return INSIGHT_COVER_PLACEHOLDERS[index % INSIGHT_COVER_PLACEHOLDERS.length];
  }
  return INSIGHT_COVER_IMAGES[slug] ?? INSIGHT_COVER_PLACEHOLDERS[index % INSIGHT_COVER_PLACEHOLDERS.length];
}
