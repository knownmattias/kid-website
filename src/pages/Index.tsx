import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/GeometricMotif";
import { DemoBand } from "@/components/DemoForm";
import { ChevronDown } from "lucide-react";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { useState, useEffect } from "react";

const RevealSection = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) => {
  const ref = useSectionReveal();
  return (
    <section ref={ref} className={`section-reveal ${className}`} {...props}>
      {children}
    </section>
  );
};

const RotatingWord = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={`text-primary inline-block transition-all duration-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {words[index]}
    </span>
  );
};

const cardLabels = {
  sv: ["KYC-flöde", "Formulär", "Screening", "Revisionsspår"],
  en: ["KYC Flow", "Forms", "Screening", "Audit Trail"],
};

const Index = () => {
  const { t, lang } = useLanguage();

  const valueCards = t("value.cards") as unknown as Array<{ title: string; desc: string }>;
  const steps = t("howItWorks.steps") as unknown as Array<{ title: string; desc: string }>;
  const posts = t("insights.posts") as unknown as Array<{ slug: string; category: string; title: string; excerpt: string; date: string }>;
  const rotatingWords = t("hero.rotatingWords") as unknown as string[];

  const industryKeys = ["legal", "fintech", "ma"] as const;
  const labels = cardLabels[lang as keyof typeof cardLabels] || cardLabels.en;

  // Fake company logos as text placeholders
  const logos = ["Nordia", "Setterwalls", "PwC", "Deloitte", "Vinge", "Mannheimer Swartling"];

  return (
    <>
      {/* Hero — 100svh */}
      <section className="min-h-[100svh] relative flex items-end overflow-hidden pb-24">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Left — content, bottom aligned */}
            <div className="space-y-8 max-w-2xl">
              <h1 className="opacity-0 animate-fade-in">
                <span className="text-foreground">{t("hero.headline")}</span>
                <br />
                <RotatingWord words={rotatingWords} />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in-delay">
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

      {/* Trust strip — company logos */}
      <RevealSection id="trust" className="py-10 bg-background">
        <div className="container">
          <div className="flex items-center gap-12 flex-wrap">
            <span className="text-sm text-muted-foreground/50 font-normal shrink-0">{t("trust.label")}</span>
            {logos.map((logo, i) => (
              <span key={i} className="text-base font-display text-muted-foreground/30 font-normal tracking-tight">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Product value — asymmetric card layout */}
      <RevealSection id="product" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2>{t("value.title")}</h2>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {/* First card — double width */}
            <div className="col-span-4 md:col-span-2 bg-background border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <span className="inline-block border border-border rounded-full px-4 py-1.5 text-sm text-foreground font-normal">
                {labels[0]}
              </span>
              <div className="w-full h-px bg-border" />
              <h3>{valueCards[0]?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{valueCards[0]?.desc}</p>
            </div>
            {/* Second card — 25% */}
            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-background border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <span className="inline-block border border-border rounded-full px-4 py-1.5 text-sm text-foreground font-normal">
                {labels[1]}
              </span>
              <div className="w-full h-px bg-border" />
              <h3>{valueCards[1]?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{valueCards[1]?.desc}</p>
            </div>
            {/* Third card — 25% */}
            <div className="col-span-4 sm:col-span-2 md:col-span-1 bg-background border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <span className="inline-block border border-border rounded-full px-4 py-1.5 text-sm text-foreground font-normal">
                {labels[2]}
              </span>
              <div className="w-full h-px bg-border" />
              <h3>{valueCards[2]?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{valueCards[2]?.desc}</p>
            </div>
            {/* Fourth card — full width below on mobile, or could be additional row */}
            <div className="col-span-4 md:col-span-2 bg-background border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
              <span className="inline-block border border-border rounded-full px-4 py-1.5 text-sm text-foreground font-normal">
                {labels[3]}
              </span>
              <div className="w-full h-px bg-border" />
              <h3>{valueCards[3]?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{valueCards[3]?.desc}</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* How it works */}
      <RevealSection className="py-24 md:py-32 bg-accent/50">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2>{t("howItWorks.title")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-display font-normal">
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
          <div className="flex items-end justify-between mb-12">
            <h2>{t("insights.title")}</h2>
            <Link to="/insights" className="text-sm text-primary hover:text-primary/80 transition-colors font-normal">
              {t("insights.viewAll")} →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group bg-background border rounded-2xl p-7 space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
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
          <div className="grid md:grid-cols-3 gap-6">
            {industryKeys.map((key) => (
              <Link
                key={key}
                to={`/industries/${key}`}
                className="group bg-background border rounded-2xl p-7 space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/8 group-hover:bg-primary/15 transition-colors" />
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
