import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Insights = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const posts = t("insights.posts") as unknown as Array<{
    slug: string; category: string; title: string; excerpt: string; date: string;
  }>;

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-normal mb-4">{t("insights.title")}</h1>
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <Input
            placeholder={t("insights.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs bg-background"
          />
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearch(search === cat ? "" : cat)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  search === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "text-muted-foreground border-border hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              to={`/insights/${post.slug}`}
              className="group block bg-card border rounded-lg p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-muted-foreground">{post.category}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="text-lg font-medium group-hover:text-primary transition-colors mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <span className="text-sm text-primary mt-3 inline-block">
                {t("insights.readMore")} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
