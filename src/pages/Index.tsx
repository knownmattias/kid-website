import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/GeometricMotif";
import { DemoBand } from "@/components/DemoForm";
import { ChevronDown, Shield, FileCheck, Search, Archive } from "lucide-react";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const RevealSection = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) => {
  const ref = useSectionReveal();
  return (
    <section ref={ref} className={`section-reveal ${className}`} {...props}>
      {children}
    </section>
  );
};

const cardIcons = [
  <Shield className="w-8 h-8 text-primary" />,
  <FileCheck className="w-8 h-8 text-primary" />,
  <Search className="w-8 h-8 text-primary" />,
  <Archive className="w-8 h-8 text-primary" />,
];

const Index = () => {
  const { t } = useLanguage();

  const valueCards = t("value.cards") as unknown as Array<{ title: string; desc: string }>;
  const steps = t("howItWorks.steps") as unknown as Array<{ title: string; desc: string }>;
  const trustItems = t("trust.items") as unknown as string[];
  const posts = t("insights.posts") as unknown as Array<{ slug: string; category: string; title: string; excerpt: string; date: string }>;

  const industryKeys = ["legal", "fintech", "ma"] as const;

  return (
    <>
      {/* Hero — 100svh */}
      <section className="min-h-[100svh] relative flex items-center overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — content */}
            <div className="space-y-8 max-w-xl">
              <h1 className="opacity-0 animate-fade-in">
                {t("hero.headline")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-delay">
                {t("hero.subhead")}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 opacity-0 animate-fade-in-delay" style={{ animationDelay: "0.4s" }}>
                <Link to="/#demo">
                  <Button variant="hero" size="lg">{t("hero.cta")}</Button>
                </Link>
                <a href="#product">
                  <Button variant="hero-secondary" size="lg">{t("hero.secondary")}</Button>
                </a>
              </div>
            </div>

            {/* Right — bold geometric composition */}
            <div className="hidden lg:block relative">
              <HeroGeometric className="w-full h-[500px] xl:h-[560px]" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a href="#trust" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown className="w-5 h-5 animate-scroll-cue" />
          </a>
        </div>
      </section>

      {/* Trust strip */}
      <RevealSection id="trust" className="border-y bg-accent/50 py-8">
        <div className="container">
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {trustItems.map((item, i) => (
              <span key={i} className="text-sm text-muted-foreground font-normal">
                {item}
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Product value */}
      <RevealSection id="product" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2>{t("value.title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl">
            {valueCards.map((card, i) => (
              <div
                key={i}
                className="group bg-card border rounded-xl p-8 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Geometric icon block */}
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-2">
                  {cardIcons[i]}
                </div>
                <div className="w-full h-px bg-border" />
                <h3>{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* How it works */}
      <RevealSection className="py-24 md:py-32 bg-accent/50">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2>{t("howItWorks.title")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl">
            {steps.map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-lg font-medium">
                  {i + 1}
                </div>
                <h3>{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Insights teaser */}
      <RevealSection className="py-24 md:py-32">
        <div className="container">
          <div className="flex items-end justify-between mb-12 max-w-5xl">
            <h2>{t("insights.title")}</h2>
            <Link to="/insights" className="text-sm text-primary hover:text-primary/80 transition-colors font-normal">
              {t("insights.viewAll")} →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group bg-card border rounded-xl p-7 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Abstract accent block */}
                <div className="w-full h-2 rounded-full bg-primary/8 group-hover:bg-primary/15 transition-colors" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-normal">{post.category}</span>
                <h3 className="group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Industries teaser */}
      <RevealSection className="py-24 md:py-32 bg-accent/50">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2>{t("industries.title")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {industryKeys.map((key) => (
              <Link
                key={key}
                to={`/industries/${key}`}
                className="group bg-card border rounded-xl p-7 space-y-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/8 group-hover:bg-primary/15 transition-colors" />
                <h3 className="group-hover:text-primary transition-colors">
                  {t(`industries.${key}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`industries.${key}.short`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Demo CTA band */}
      <DemoBand />
    </>
  );
};

export default Index;
