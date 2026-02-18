import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import GeometricMotif from "@/components/GeometricMotif";
import { DemoBand } from "@/components/DemoForm";

const Index = () => {
  const { t } = useLanguage();

  const valueCards = t("value.cards") as unknown as Array<{ title: string; desc: string }>;
  const steps = t("howItWorks.steps") as unknown as Array<{ title: string; desc: string }>;
  const trustItems = t("trust.items") as unknown as string[];
  const posts = t("insights.posts") as unknown as Array<{ slug: string; category: string; title: string; excerpt: string; date: string }>;

  const industryKeys = ["legal", "fintech", "ma"] as const;

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-normal leading-tight">
                {t("hero.headline")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                {t("hero.subhead")}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/#demo">
                  <Button variant="hero" size="lg">{t("hero.cta")}</Button>
                </Link>
                <a href="#product">
                  <Button variant="hero-secondary" size="lg">{t("hero.secondary")}</Button>
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <GeometricMotif className="w-72 h-72 lg:w-96 lg:h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y bg-muted/50 py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {trustItems.map((item, i) => (
              <span key={i} className="text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product value */}
      <section id="product" className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-12">
            {t("value.title")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {valueCards.map((card, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 space-y-2">
                <h3 className="text-base font-medium">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-12">
            {t("howItWorks.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mx-auto">
                  {i + 1}
                </div>
                <h3 className="text-base font-medium">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights teaser */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-normal">{t("insights.title")}</h2>
            <Link to="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("insights.viewAll")} →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group bg-card border rounded-lg p-6 space-y-3 hover:shadow-sm transition-shadow"
              >
                <span className="text-xs text-muted-foreground">{post.category}</span>
                <h3 className="text-base font-medium group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries teaser */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-normal text-center mb-12">
            {t("industries.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industryKeys.map((key) => (
              <Link
                key={key}
                to={`/industries/${key}`}
                className="group bg-card border rounded-lg p-6 space-y-2 hover:shadow-sm transition-shadow"
              >
                <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                  {t(`industries.${key}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`industries.${key}.short`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA band */}
      <DemoBand />
    </>
  );
};

export default Index;
