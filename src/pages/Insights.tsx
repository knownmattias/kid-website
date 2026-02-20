import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import Pill from "@/components/Pill";

const Insights = () => {
  const { t } = useLanguage();

  const posts = t("insights.posts") as unknown as Array<{
    slug: string; category: string; title: string; excerpt: string; date: string;
  }>;

  const placeholderImages = [
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=750&fit=crop",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=750&fit=crop",
  ];

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
                <div className="aspect-square overflow-hidden">
                  <img
                    src={placeholderImages[i % placeholderImages.length]}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Pill>{post.category}</Pill>
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
