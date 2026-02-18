import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const posts = t("insights.posts") as unknown as Array<{
    slug: string; category: string; title: string; excerpt: string; date: string; content: string;
  }>;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-20 container text-center">
        <p className="text-muted-foreground">Article not found.</p>
        <Link to="/insights" className="text-sm text-primary mt-4 inline-block">
          ← {t("insights.title")}
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
          ← {t("insights.title")}
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-muted-foreground">{post.category}</span>
          <span className="text-xs text-muted-foreground">·</span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-normal mb-6 leading-tight">{post.title}</h1>
        <div className="prose prose-gray max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-base text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default InsightArticle;
