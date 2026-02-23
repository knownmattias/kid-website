import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/GeometricMotif";

import { ChevronDown } from "lucide-react";
import Pill from "@/components/Pill";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import RowList from "@/components/RowList";
import { useState, useEffect } from "react";
import officeBuildingImg from "@/assets/office-building.png";

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
                <Pill>{lang === "sv" ? "För juridik" : "For legal"}</Pill>
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
                <Pill>{lang === "sv" ? "För fintech" : "For fintech"}</Pill>
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
                  <Pill>{labels[i]}</Pill>
                  <h3>{valueCards[i]?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{valueCards[i]?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* How it works */}
      <RevealSection className="py-0">
        <div className="grid md:grid-cols-5 min-h-[480px]">
          {/* Left — image 40% */}
          <div className="md:col-span-2 bg-accent/60 min-h-[320px] md:min-h-full" />

          {/* Right — text 60% */}
          <div className="md:col-span-3 bg-accent/30 p-10 md:p-16 lg:p-20 flex flex-col justify-center space-y-6">
            <Pill className="self-start">{lang === "sv" ? "Så funkar det" : "How it works"}</Pill>
            <h2 className="text-2xl md:text-3xl font-display leading-tight">{t("howItWorks.title")}</h2>
            <div className="space-y-5 pt-2">
              {steps.map((step, i) => (
                <div key={i}>
                  <h3 className="text-base font-display">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step.desc}</p>
                </div>
              ))}
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
            <Pill>{lang === "sv" ? "Plattformen" : "The platform"}</Pill>
            <h2 className="text-2xl md:text-3xl font-display leading-tight">
              {lang === "sv" ? "Byggd för precision och transparens" : "Built for precision and transparency"}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === "sv"
                ? "En robust arkitektur som säkerställer att varje steg i KYC-processen är spårbart, konsekvent och redo för granskning."
                : "A robust architecture ensuring every step of the KYC process is traceable, consistent, and audit-ready."}
            </p>
          </div>

          <RowList
            items={(lang === "sv"
              ? [
                  { title: "Smart dataarkitektur", desc: "Sammankopplar och organiserar komplex kundinformation i en tydlig, enhetlig struktur." },
                  { title: "Automatiserade arbetsflöden", desc: "Regelstyrda processer som säkerställer konsekvens från insamling till färdig riskbedömning." },
                  { title: "Standardiserade definitioner", desc: "Enhetliga termer för risk, ägarstruktur och verklig huvudman — oavsett datakälla." },
                  { title: "Automatisk datamatchning", desc: "Matchning och rensning av data så att olika register och källor fungerar sömlöst ihop." },
                  { title: "Fullständig spårbarhet", desc: "Komplett historik över varje ändring och beslut, transparent och redo för granskning." },
                ]
              : [
                  { title: "Smart data architecture", desc: "Connects and organizes complex client information into one clear, unified structure." },
                  { title: "Automated workflows", desc: "Rule-driven processes ensuring consistency from data collection to final risk assessment." },
                  { title: "Standard definitions", desc: "Unified terms for risk, ownership structures, and beneficial owners — regardless of data source." },
                  { title: "Automatic data matching", desc: "Matching and cleaning data so different registries and sources work together seamlessly." },
                  { title: "Full tracking & audit trail", desc: "Complete history of every change and decision, transparent and audit-ready." },
                ]
            )}
          />
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

      {/* Privacy & Security stats */}
      <RevealSection className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-14">
            {/* Left — pill */}
            <div>
              <Pill>{lang === "sv" ? "Säkerhet & integritet" : "Security & privacy"}</Pill>
            </div>
            {/* Right — statement */}
            <p className="text-xl md:text-2xl font-display leading-snug">
              {lang === "sv"
                ? "Din data hanteras med högsta säkerhet. Krypterad lagring, strikt åtkomstkontroll och fullständig GDPR-efterlevnad — så att du kan fokusera på affären."
                : "Your data is handled with the highest security. Encrypted storage, strict access control, and full GDPR compliance — so you can focus on business."}
            </p>
          </div>

          {/* Stat cards — 2x2 grid, right-aligned */}
          <div className="grid md:grid-cols-2">
            <div className="hidden md:block" />
            <div className="grid sm:grid-cols-2 gap-5">
            {(lang === "sv"
              ? [
                  { stat: "100%", desc: "GDPR-efterlevnad i varje steg av processen." },
                  { stat: "AES-256", desc: "Kryptering av all känslig data, i vila och under överföring." },
                  { stat: "SOC 2", desc: "Säkerhetsstandarder som uppfyller de strängaste kraven." },
                  { stat: "0", desc: "Tredjeparter med tillgång till dina kunders personuppgifter." },
                ]
              : [
                  { stat: "100%", desc: "GDPR compliance at every step of the process." },
                  { stat: "AES-256", desc: "Encryption of all sensitive data, at rest and in transit." },
                  { stat: "SOC 2", desc: "Security standards meeting the strictest requirements." },
                  { stat: "0", desc: "Third parties with access to your clients' personal data." },
                ]
            ).map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-8 md:p-10 space-y-3">
                <span className="text-3xl md:text-4xl font-display">{item.stat}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
};

export default Index;
