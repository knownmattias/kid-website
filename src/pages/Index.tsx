import { Link } from "react-router-dom";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import NewAnimation from "@/components/NewAnimation";

import { ChevronDown } from "lucide-react";
import { ArrowElbowDownRight } from "@phosphor-icons/react";
import Pill from "@/components/Pill";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import RowList from "@/components/RowList";
import { useState, useEffect } from "react";
import officeBuildingImg from "@/assets/office-building.png";
import { getInsightCoverSrc, getInsightPosts } from "@/lib/insights";

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

const Index = () => {
  const { t, lang } = useLanguage();

  const valueCards = t("value.cards") as unknown as Array<{ title: string; desc: string }>;
  const valueHero = t("value.hero") as unknown as { title: string; desc: string };
  const posts = getInsightPosts(lang as "sv" | "en");
  const rotatingWords = t("hero.rotatingWords") as unknown as string[];
  const cardLabels = t("index.cardLabels") as unknown as string[];
  const platformFeatures = t("index.platform.features") as unknown as Array<{ title: string; desc: string }>;
  const securityStats = t("index.security.stats") as unknown as Array<{ stat: string; desc: string }>;
  const productSuite = t("index.productSuite") as unknown as {
    title: string;
    columns: Array<{ columnTitle: string; items: Array<{ text: string; tooltip: string }> }>;
  };

  const industryKeys = ["legal", "fintech", "other"] as const;

  // Trust strip — company logos (add src: "/logos/name.svg" when you have logo files in public/logos/)
  const trustLogos = [
    { name: "BackingMinds", src: "/logos/backingminds.png" },
    { name: "Nyimusa Foundation", src: "/logos/nyimusa-foundation.png" },
    { name: "Juridium", src: "/logos/juridium.svg" },
    { name: "Auctionet", src: "/logos/auctionetLogo.svg" },
  ];

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
            {/* Left card — animation (50%) */}
            <div className="col-span-4 md:col-span-2 bg-accent/50 border rounded-xl overflow-hidden flex items-center justify-center relative min-h-[280px]">
              <NewAnimation className="w-full h-full min-h-[280px]" />
            </div>

            {/* Card 2 — Legal (25%) */}
            <Link
              to="/industries/legal"
              className="col-span-4 sm:col-span-2 md:col-span-1 bg-background border rounded-xl p-6 flex flex-col group"
            >
              <div className="space-y-3 flex-1">
                <Pill>{t("index.heroLegal.pill")}</Pill>
                <h3 className="text-xl font-display leading-tight">
                  {t("index.heroLegal.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("industries.legal.short")}
                </p>
              </div>
              <Button variant="hero" size="sm" className="self-start">
                {t("index.explore")}
              </Button>
            </Link>

            {/* Card 3 — Regulated companies (25%) */}
            <Link
              to="/industries/fintech"
              className="col-span-4 sm:col-span-2 md:col-span-1 bg-background border rounded-xl p-6 flex flex-col group"
            >
              <div className="space-y-3 flex-1">
                <Pill>{t("index.heroFintech.pill")}</Pill>
                <h3 className="text-xl font-display leading-tight">
                  {t("index.heroFintech.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("industries.fintech.short")}
                </p>
              </div>
              <Button variant="hero-secondary" size="sm" className="self-start">
                {t("index.explore")}
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
      <RevealSection id="trust" className="py-10 bg-background overflow-hidden">
        <div className="container">
          <div className="flex items-center gap-8 md:gap-12 min-h-[48px]">
            {/* Vertical line + label */}
            <div className="flex items-center gap-6 shrink-0 pl-1">
              <div className="w-px h-10 bg-border flex-shrink-0" aria-hidden />
              <span className="text-sm text-muted-foreground/80 font-normal whitespace-pre-line leading-snug">
                {t("trust.label")}
              </span>
            </div>
            {/* Rotating logo marquee */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex animate-trust-marquee w-max">
                {[...trustLogos, ...trustLogos].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex items-center justify-center shrink-0 mx-8 h-10 w-[130px]"
                  >
                    {"src" in logo && logo.src ? (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-full w-auto max-w-full object-contain object-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    ) : (
                      <span className="text-xs font-display text-muted-foreground/50 font-medium tracking-tight uppercase">
                        {logo.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
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
                <h2 className="text-2xl md:text-3xl font-display leading-tight">{valueHero?.title}</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">{valueHero?.desc}</p>
              </div>
              {/* Right — visual placeholder */}
              <div className="relative bg-accent/50 min-h-[280px] md:min-h-[360px] flex items-center justify-center overflow-hidden">
                {/* Background: solid + grid with gradient (fading) lines */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: [
                      "linear-gradient(to right, transparent 0px, transparent 11px, hsl(var(--border) / 0.28) 12px, transparent 13px, transparent 28px)",
                      "linear-gradient(to bottom, transparent 11px, hsl(var(--border) / 0.28) 12px, transparent 13px, transparent 28px)",
                    ].join(", "),
                    backgroundSize: "28px 28px, 28px 28px",
                    maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, black 35%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, black 35%, transparent 75%)",
                  }}
                />
                {/* Animated dots — fewer, only one visible at a time, fade in/out */}
                {[
                  { left: "22%", top: "35%", delay: "0s" },
                  { left: "72%", top: "28%", delay: "2s" },
                  { left: "68%", top: "68%", delay: "4s" },
                  { left: "28%", top: "72%", delay: "6s" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-foreground/25 animate-dot-appear pointer-events-none"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      width: 8,
                      height: 8,
                      marginLeft: -4,
                      marginTop: -4,
                      animationDelay: pos.delay,
                    }}
                  />
                ))}
                <div className="relative bg-background border rounded-xl p-6 shadow-sm max-w-xs space-y-3">
                  <div className="flex items-center gap-2 text-sm font-display">
                    <span>✦</span>
                    <span>{t("index.productPlaceholder.heading")}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("index.productPlaceholder.body")}
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
                  <Pill>{cardLabels[i]}</Pill>
                  <h3>{valueCards[i]?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{valueCards[i]?.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </RevealSection>

      {/* Why we started */}
      <RevealSection className="py-0">
        <div className="grid md:grid-cols-5 min-h-[480px]">
          {/* Left — image 40% */}
          <div className="md:col-span-2 bg-accent/60 min-h-[320px] md:min-h-full" />

          {/* Right — text 60% */}
          <div className="md:col-span-3 bg-accent/30 p-4 md:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-display leading-tight">{t("whyWeStarted.title")}</h2>
            </div>
            <div className="pt-8">
              <p className="text-sm font-display">{t("whyWeStarted.name")}</p>
              <p className="text-xs text-muted-foreground">{t("whyWeStarted.role")}</p>
            </div>
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
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/insights/${post.slug}`}
                className="group space-y-2"
              >
                <div className="relative isolate w-full aspect-square overflow-hidden rounded-xl bg-card">
                  <img
                    src={getInsightCoverSrc(post.slug, lang as "sv" | "en", i)}
                    alt={post.title}
                    className="pointer-events-none absolute inset-0 size-full origin-center scale-[1.06] object-cover object-center grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-display leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Full-width office image */}
      <div className="w-full">
        <img
          src={officeBuildingImg}
          alt="Office building facade"
          className="w-full h-[300px] md:h-[450px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Platform features — list style */}
      <RevealSection className="py-24 md:py-32">
        <div className="container">
          {/* Header area */}
          <div className="max-w-md mb-20 space-y-4">
            <Pill>{t("index.platform.pill")}</Pill>
            <h2 className="text-2xl md:text-3xl font-display leading-tight">
              {t("index.platform.title")}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("index.platform.desc")}
            </p>
          </div>

          <RowList items={platformFeatures} staggerReveal />
        </div>
      </RevealSection>

      {/* Industries teaser */}
      <RevealSection className="py-24 md:py-32">
        <div className="container">
          <div className="flex items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <h2>{t("industries.title")}</h2>
              <p className="text-sm text-muted-foreground leading-snug max-w-2xl">
                {t("industries.subtitle")}
              </p>
            </div>
            <Link to="/industries" className="text-sm text-primary hover:text-primary/80 transition-colors font-normal shrink-0">
              {t("index.explore")} →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {industryKeys.map((key) => (
              <Link
                key={key}
                to={`/industries/${key}`}
                className="group space-y-2"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center bg-background">
                  <img
                    src={`/images/industries/${key}.png`}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-display leading-snug group-hover:text-primary transition-colors">
                  {t(`industries.${key}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {t(`industries.${key}.short`)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Privacy & Security stats */}
      <RevealSection className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-4 md:gap-0 mb-14">
            {/* Left — pill */}
            <div>
              <Pill>{t("index.security.pill")}</Pill>
            </div>
            {/* Right — statement */}
            <p className="text-xl md:text-2xl font-display leading-snug">
              {t("index.security.statement")}
            </p>
          </div>

          {/* Stat cards — 2x2 grid, right-aligned */}
          <div className="grid md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="grid sm:grid-cols-2 gap-5">
            {securityStats.map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-8 md:p-10 space-y-3">
                <span className="text-lg md:text-xl font-display">{item.stat}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Produktsviten — 4 columns with bullet points and hover tooltips */}
      {productSuite?.title && productSuite?.columns?.length === 4 && (
        <RevealSection className="py-24 md:py-32">
          <div className="container">
            <h2 className="mb-8">{productSuite.title}</h2>
            <TooltipProvider delayDuration={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productSuite.columns.map((col, colIndex) => (
                  <div key={colIndex} className="space-y-3">
                    <p className="text-base font-medium text-foreground">{col.columnTitle}</p>
                    <ul className="space-y-2 list-none">
                      {col.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="product-suite-row"
                          style={{ transitionDelay: `${colIndex * 80 + itemIndex * 60}ms` }}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="text-sm text-foreground cursor-help hover:text-primary transition-colors inline-flex items-center gap-1.5">
                                <ArrowElbowDownRight size={16} className="shrink-0" />
                                {item.text}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs rounded-[6px] border bg-background shadow-sm px-3 py-2 text-foreground">
                              {item.tooltip}
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </RevealSection>
      )}

    </>
  );
};

export default Index;
