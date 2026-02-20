import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Pill from "@/components/Pill";

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

  const placeholderImages = [
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=750&fit=crop",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=750&fit=crop",
  ];

  return (
    <div className="bg-muted min-h-screen">
      <div className="py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-3xl md:text-4xl font-normal mb-4">{t("insights.title")}</h1>
          <div className="flex flex-wrap gap-3 mb-12 items-center">
            <Input
              placeholder={t("insights.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs bg-background rounded-none"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group bg-card flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={placeholderImages[i % placeholderImages.length]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-muted-foreground">{post.category}</span>
                    <Pill>{post.date}</Pill>
                  </div>
                  <h2 className="text-xl md:text-2xl font-normal leading-tight mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {t("insights.readMore")}
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
