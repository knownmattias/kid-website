import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getInsightBySlug } from "@/lib/insights";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const post = slug ? getInsightBySlug(slug, lang as "sv" | "en") : null;

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
        <h1 className="text-[36px] font-normal mb-6 leading-tight">{post.title}</h1>
        <div className="prose prose-gray max-w-none
          prose-headings:font-display prose-headings:text-foreground prose-headings:tracking-tight
          prose-h1:text-[36px] prose-h1:font-normal prose-h1:mb-8 prose-h1:mt-0
          prose-h2:text-[26px] prose-h2:mt-10 prose-h2:mb-5 prose-h2:font-normal
          prose-h3:text-[16px] prose-h3:mt-6 prose-h3:mb-4 prose-h3:font-normal
          prose-ul:my-4 prose-ul:list-disc prose-ul:list-outside prose-ul:pl-6
          prose-ol:my-4 prose-ol:list-decimal prose-ol:list-outside prose-ol:pl-6
          prose-li:my-1 prose-li:leading-[1.4] prose-li:pl-1 prose-li:text-foreground
          prose-img:max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-[36px] font-normal leading-tight mt-0 !mb-3 text-foreground tracking-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-[26px] font-normal !mt-6 !mb-2 text-foreground tracking-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-[16px] font-normal !mt-4 !mb-2 text-foreground tracking-tight">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-base text-foreground leading-[1.4] mb-6 last:mb-0">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="my-4 list-disc list-outside pl-6 text-foreground [&>li]:pl-1 [&>li]:my-1 [&>li]:leading-[1.4]">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="my-4 list-decimal list-outside pl-6 text-foreground [&>li]:pl-1 [&>li]:my-1 [&>li]:leading-[1.4]">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <div className="my-6 rounded-xl bg-muted/50 border border-border/50 p-4 text-foreground text-base leading-[1.4] [&>p]:mb-0 [&>p:last-child]:mb-0">
                  {children}
                </div>
              ),
              pre: ({ children }) => {
                const child = Array.isArray(children) ? children[0] : children;
                if (child && typeof child === "object" && "type" in child && child.type === "code") {
                  const props = "props" in child ? (child.props as { className?: string; children?: React.ReactNode }) : {};
                  const lang = props.className?.replace(/^language-/, "") ?? "";
                  if (lang === "box" || lang === "callout") {
                    const raw = typeof props.children === "string" ? props.children : String(props.children);
                    return (
                      <div className="my-6 rounded-xl bg-muted/50 border border-border/50 p-4 text-foreground text-base leading-[1.4]">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => <p className="mb-0 last:mb-0">{children}</p>,
                            a: ({ href, children }) => (
                              <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                                {children}
                              </a>
                            ),
                          }}
                        >
                          {raw}
                        </ReactMarkdown>
                      </div>
                    );
                  }
                }
                return <pre>{children}</pre>;
              },
              img: ({ src, alt }) => {
                const url = src?.startsWith("/") && typeof window !== "undefined" ? `${window.location.origin}${src}` : src ?? "";
                return (
                  <span className="block my-6">
                    <span className="relative isolate flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-background">
                      <img
                        src={url}
                        alt={alt ?? ""}
                        className="max-h-full max-w-full object-contain object-center"
                      />
                    </span>
                    {alt ? <span className="block text-sm text-muted-foreground mt-2">{alt}</span> : null}
                  </span>
                );
              },
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default InsightArticle;
