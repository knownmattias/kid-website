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
      }, 600);
    }, 3200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={`text-muted-foreground inline-block transition-all duration-700 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {words[index]}
    </span>
  );
};

const cardLabels = {
  sv: ["KYC-flöde", "Formulär", "Screening"],
  en: ["KYC Flow", "Forms", "Screening"],
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
      <section className="relative flex flex-col overflow-hidden py-10" style={{ minHeight: "calc(100svh - 4rem)" }}>
        <div className="container relative z-10 flex flex-col flex-1">
          {/* Top left — headline */}
          <div className="space-y-5 max-w-2xl opacity-0 animate-fade-in">
            <h1>
              <span className="text-foreground">{t("hero.headline")}</span>
              <br />
              <RotatingWord words={rotatingWords} />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-snug max-w-lg opacity-0 animate-fade-in-delay">
              {t("hero.subhead")}
            </p>
          </div>

          {/* Cards row — pushed down with flex spacing */}
          <div className="grid grid-cols-4 gap-4 flex-1 opacity-0 animate-fade-in-delay" style={{ animationDelay: "0.4s", marginTop: "40px" }}>
            {/* Left card — geometric visual (50%) */}
            <div className="col-span-4 md:col-span-2 bg-accent/50 border rounded-xl overflow-hidden flex items-center justify-center">
              <HeroGeometric className="w-full h-full max-h-[320px]" />
            </div>

            {/* Card 2 — Legal (25%) */}
            <Link
              to="/industries/legal"
              className="col-span-4 sm:col-span-2 md:col-span-1 bg-background border rounded-xl p-6 flex flex-col group"
            >
              <div className="space-y-3 flex-1">
                <span className="inline-block border border-border rounded-full px-3 py-1 text-[10px] text-muted-foreground font-normal uppercase tracking-widest">
                  {lang === "sv" ? "För juridik" : "For legal"}
                </span>
                <h3 className="text-xl font-display leading-tight">
                  {lang === "sv" ? "För advokat- och juristbyråer" : "For law firms and legal advisors"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("industries.legal.short")}
                </p>
              </div>
              <Button variant="hero" size="sm" className="self-start">
                {lang === "sv" ? "Utforska" : "Explore"}
              </Button>
            </Link>

            {/* Card 3 — Regulated companies (25%) */}
            <Link
              to="/industries/fintech"
              className="col-span-4 sm:col-span-2 md:col-span-1 bg-background border rounded-xl p-6 flex flex-col group"
            >
              <div className="space-y-3 flex-1">
                <span className="inline-block border border-border rounded-full px-3 py-1 text-[10px] text-muted-foreground font-normal uppercase tracking-widest">
                  {lang === "sv" ? "För fintech" : "For fintech"}
                </span>
                <h3 className="text-xl font-display leading-tight">
                  {lang === "sv" ? "För reglerade bolag" : "For regulated companies"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("industries.fintech.short")}
                </p>
              </div>
              <Button variant="hero-secondary" size="sm" className="self-start">
                {lang === "sv" ? "Utforska" : "Explore"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
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
          <div className="border rounded-xl overflow-hidden">
            {/* Hero feature card */}
            <div className="grid md:grid-cols-2 gap-0 bg-accent/30">
              {/* Left — text */}
              <div className="p-10 md:p-14 flex flex-col justify-start space-y-5">
                <h2 className="text-2xl md:text-3xl font-display leading-tight">{valueCards[0]?.title}</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">{valueCards[0]?.desc}</p>
              </div>
              {/* Right — visual placeholder */}
              <div className="relative bg-accent/50 min-h-[280px] md:min-h-[360px] flex items-center justify-center">
                <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="relative bg-background border rounded-xl p-6 shadow-sm max-w-xs space-y-3">
                  <div className="flex items-center gap-2 text-sm font-display">
                    <span>✦</span>
                    <span>{lang === "sv" ? "Observationer & Anmärkningar" : "Observations & Remarks"}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {lang === "sv"
                      ? "AI visar tillväxt med hög konfidens: jobbannonser, sökrankningar och varumärkessökningar ökar alla markant."
                      : "AI shows high-confidence growth: job postings, search rankings, and brand searches are all increasing significantly."}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border" />

            {/* Three equal cards below */}
            <div className="grid md:grid-cols-3 divide-x divide-border">
              {[0, 1, 2].map((i) => (
                <div key={i} className="p-8 space-y-4">
                  <span className="inline-block border border-border rounded-full px-4 py-1.5 text-sm text-foreground font-normal">
                    {labels[i]}
                  </span>
                  <h3>{valueCards[i]?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{valueCards[i]?.desc}</p>
                </div>
              ))}
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
          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group space-y-5"
              >
                <div className="w-full aspect-[4/5] rounded-xl bg-accent/60 overflow-hidden" />
                <h3 className="text-lg font-display leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
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
                className="group bg-background border rounded-xl p-7 space-y-4"
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
