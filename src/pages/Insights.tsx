import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { getInsightCoverSrc, getInsightPosts } from "@/lib/insights";

const Insights = () => {
  const { t, lang } = useLanguage();
  const posts = getInsightPosts(lang as "sv" | "en");

  return (
    <div className="bg-muted min-h-screen">
      <div className="py-16 md:py-24">
        <div className="px-6 md:px-12 lg:px-20">
          <h1 className="text-3xl md:text-4xl font-normal mb-12">{t("insights.title")}</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group bg-card flex flex-col"
              >
                <div className="relative isolate w-full aspect-square overflow-hidden bg-card">
                  <img
                    src={getInsightCoverSrc(post.slug, lang as "sv" | "en", i)}
                    alt={post.title}
                    className="pointer-events-none absolute inset-0 size-full origin-center scale-[1.06] object-cover object-center grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    {post.category}
                  </span>
                  <p className="text-base md:text-lg font-display font-normal mb-3" style={{ lineHeight: '0.85', letterSpacing: '-0.025em' }}>
                    {post.title}
                  </p>
                  <div className="flex items-end gap-3">
                    <p className="text-sm text-muted-foreground flex-1">
                      {post.excerpt}
                    </p>
                    <ArrowRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:translate-x-1 transition-transform" />
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
