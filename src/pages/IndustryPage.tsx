import { useParams, Link } from "react-router-dom";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import Pill from "@/components/Pill";
import GeometricMotif from "@/components/GeometricMotif";
import WireframeMesh from "@/components/WireframeMesh";
import FloatingPills from "@/components/FloatingPills";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { Scale, MessageSquareQuote, ShieldCheck, Zap, BarChart3, Globe, Briefcase, Search, TrendingUp } from "lucide-react";
import { HourglassLow, Chat, TrendUp, ArrowElbowDownRight } from "@phosphor-icons/react";
import legalMeetingImg from "@/assets/legal-meeting.png";
import onboardingKycAnimation from "@/assets/onboarding-kyc.json";
import monitoringKycAnimation from "@/assets/monitoring-kyc.json";
import periodicKycAnimation from "@/assets/periodic-kyc.json";
import type { ComponentType } from "react";

const RevealSection = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) => {
  const ref = useSectionReveal();
  return (
    <section ref={ref} className={`section-reveal ${className}`} {...props}>
      {children}
    </section>
  );
};

type LangKey = "sv" | "en";

interface ValueCard {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface Stat {
  value: string;
  desc: string;
}

interface IndustryContent {
  pill: Record<LangKey, string>;
  heading: Record<LangKey, string>;
  subheading: Record<LangKey, string>;
  valueCards: Record<LangKey, ValueCard[]>;
  testimonial: Record<LangKey, Testimonial>;
  stats: Record<LangKey, Stat[]>;
  statsLabel: Record<LangKey, string>;
}

const industryContent: Record<string, IndustryContent> = {
  legal: {
    pill: { sv: "Domänkunskap", en: "Precision" },
    heading: { sv: "En partner som förstår ert arbete", en: "A partner that understands the law" },
    subheading: {
      sv: "Prata med någon som förstår vad ni arbetar med - vi har lång erfarenhet av arbete på advokatbyrå och förstår branschen väl.",
      en: "We build KYC tools grounded in legal needs: tailored, precise, and without compromise.",
    },
    valueCards: {
      sv: [
        { icon: HourglassLow, title: "Spendera mindre tid på KYC", desc: "Minska tiden som spenderas på KYC-hantering genom att automatisera dina arbetsflöden och genom att samla allt på samma plattform" },
        { icon: Chat, title: "Vi talar ert språk", desc: "Vi förstår Advokatsamfundets krav och vet att kundkännedom kan vara svårt i juristbranschen, med många frågor som är unika för just er bransch." },
        { icon: TrendUp, title: "Växer med er byrå", desc: "Oavsett om ni är fem eller femhundra jurister skalar plattformen med er, utan att kompromissa med kvalitet eller spårbarhet." },
      ],
      en: [
        { icon: Scale, title: "Built for legal requirements", desc: "We understand bar association guidelines and the regulatory landscape — the platform is designed to meet your specific KYC requirements." },
        { icon: MessageSquareQuote, title: "We speak your language", desc: "Our due diligence process is grounded in legal reality — complex ownership structures, PEP exposure, and cross-border engagements." },
        { icon: ShieldCheck, title: "Grows with your firm", desc: "Whether you're five or five hundred lawyers, the platform scales with you without compromising quality or traceability." },
      ],
    },
    testimonial: {
      sv: { quote: "Som en juristbyrå kan det vara knepigt att förstå vilka ärenden som omfattas av PTL. KnownID gick igenom vår allmänna riskbedömning från grunden och satte upp en struktur för vilka ärende vi ska vidta kundkännedom. Det gav mig som styrelseordförande en trygghet i att vi inte exponerar oss för onödiga risker.", name: "Alireza", role: "Styrelseordförande, Juridium" },
      en: { quote: "KnownID stands out in two ways: their understanding of legal requirements and their depth in the details. They reviewed our practice as an advisor — to see if it really works. That gave us confidence.", name: "Maria Lindström", role: "Managing Partner, Lindström Law Firm" },
    },
    stats: {
      sv: [
        { value: "Snabbare", desc: "Minska tiden som spenderas på KYC-hantering genom att automatisera arbetsflöden" },
        { value: "Säkrare", desc: "Hämta verifierad data och undvik osäker kommunikation över email"},
        { value: "Enklare", desc: "Gör det enklare för dina mot parter att besvara KYC-förfrågningar" },
      ],
      en: [
        { value: "97%", desc: "Report an improvement in the quality of their work" },
        { value: "4+", desc: "Non-billable hours saved by experienced users weekly" },
        { value: "$6.4m", desc: "Potential additional billing per 100 lawyers annually" },
      ],
    },
    statsLabel: { sv: "KnownID för juridik", en: "KnownID for legal" },
  },
  fintech: {
    pill: { sv: "Hastighet", en: "Speed" },
    heading: { sv: "Compliance utan friktion", en: "Compliance without friction" },
    subheading: {
      sv: "KYC som håller jämna steg med era produkter — automatiserat, skalbart och redo för audit.",
      en: "KYC that keeps pace with your products — automated, scalable, and audit-ready.",
    },
    valueCards: {
      sv: [
        { icon: Zap, title: "Automatiserat från start", desc: "Integrera KYC-flöden direkt i er onboarding — inga manuella steg, ingen väntan." },
        { icon: Globe, title: "Globalt från dag ett", desc: "Stöd för gränsöverskridande verifiering, sanktionslistor och PEP-kontroller i realtid." },
        { icon: BarChart3, title: "Data ni kan lita på", desc: "Komplett audit trail och dashboards som ger överblick åt compliance-teamet." },
      ],
      en: [
        { icon: Zap, title: "Automated from the start", desc: "Embed KYC flows directly into your onboarding — no manual steps, no waiting." },
        { icon: Globe, title: "Global from day one", desc: "Support for cross-border verification, sanctions lists, and real-time PEP checks." },
        { icon: BarChart3, title: "Data you can trust", desc: "Complete audit trail and dashboards giving your compliance team full visibility." },
      ],
    },
    testimonial: {
      sv: { quote: "Vi behövde en KYC-partner som kunde växa lika snabbt som vår användarbas. KnownID levererade — utan att kompromissa med regelefterlevnad.", name: "Erik Johansson", role: "Head of Compliance, NordPay" },
      en: { quote: "We needed a KYC partner that could scale as fast as our user base. KnownID delivered — without compromising on compliance.", name: "Erik Johansson", role: "Head of Compliance, NordPay" },
    },
    stats: {
      sv: [
        { value: "90%", desc: "Snabbare onboarding jämfört med manuella processer" },
        { value: "10k+", desc: "Verifieringar hanterade per månad" },
        { value: "99,9%", desc: "Plattformens tillgänglighet senaste 12 månaderna" },
      ],
      en: [
        { value: "90%", desc: "Faster onboarding compared to manual processes" },
        { value: "10k+", desc: "Verifications handled per month" },
        { value: "99.9%", desc: "Platform uptime over the last 12 months" },
      ],
    },
    statsLabel: { sv: "KnownID för fintech", en: "KnownID for fintech" },
  },
  other: {
    pill: { sv: "Djup", en: "Depth" },
    heading: { sv: "Due diligence i en annan klass", en: "Due diligence in a class of its own" },
    subheading: {
      sv: "Gå från fragmenterade kontroller till ett samlat, revisionsklart KYC-flöde för varje transaktion.",
      en: "Move from fragmented checks to a unified, audit-ready KYC flow for every transaction.",
    },
    valueCards: {
      sv: [
        { icon: Briefcase, title: "Byggd för transaktioner", desc: "Hantera komplexa ägarstrukturer, flera jurisdiktioner och tidskritiska affärer i ett flöde." },
        { icon: Search, title: "Djupgående granskning", desc: "PEP, sanktioner, negativ media och ägarkedjeanalys — allt samlat och automatiserat." },
        { icon: TrendingUp, title: "Snabbare closing", desc: "Minska ledtiden i due diligence utan att tumma på kvaliteten. Mer tid åt affären, mindre åt admin." },
      ],
      en: [
        { icon: Briefcase, title: "Built for transactions", desc: "Handle complex ownership structures, multiple jurisdictions, and time-sensitive deals in one flow." },
        { icon: Search, title: "Deep-dive screening", desc: "PEP, sanctions, adverse media, and ownership chain analysis — all unified and automated." },
        { icon: TrendingUp, title: "Faster closing", desc: "Reduce due diligence lead time without sacrificing quality. More time on the deal, less on admin." },
      ],
    },
    testimonial: {
      sv: { quote: "I M&A-transaktioner handlar allt om tid och precision. KnownID gav oss båda — och ett revisionsspår vi aldrig haft tidigare.", name: "Anna Bergman", role: "Director, Nordström Advisory" },
      en: { quote: "In M&A transactions, it's all about time and precision. KnownID gave us both — and an audit trail we never had before.", name: "Anna Bergman", role: "Director, Nordström Advisory" },
    },
    stats: {
      sv: [
        { value: "60%", desc: "Kortare ledtid i due diligence-processen" },
        { value: "100%", desc: "Spårbarhet i varje transaktionssteg" },
        { value: "3x", desc: "Fler kontroller genomförda per transaktion" },
      ],
      en: [
        { value: "60%", desc: "Reduction in due diligence lead time" },
        { value: "100%", desc: "Traceability across every transaction step" },
        { value: "3x", desc: "More checks completed per transaction" },
      ],
    },
    statsLabel: { sv: "KnownID för M&A", en: "KnownID for M&A" },
  },
};

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const l = lang as LangKey;

  const legalLottieRef0 = useRef<LottieRefCurrentProps | null>(null);
  const legalLottieRef1 = useRef<LottieRefCurrentProps | null>(null);
  const legalLottieRef2 = useRef<LottieRefCurrentProps | null>(null);
  const legalLottieRefs = [legalLottieRef0, legalLottieRef1, legalLottieRef2];

  const validSlugs = ["legal", "fintech", "other"];
  if (!slug || !validSlugs.includes(slug)) {
    return (
      <div className="py-20 container text-center">
        <p className="text-muted-foreground">Industry not found.</p>
        <Link to="/industries" className="text-sm text-primary mt-4 inline-block">
          ← {t("industries.title")}
        </Link>
      </div>
    );
  }

  const content = industryContent[slug];

  const productSuite = t("index.productSuite") as unknown as {
    title: string;
    columns: Array<{ columnTitle: string; items: Array<{ text: string; tooltip: string }> }>;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col overflow-hidden" style={{ minHeight: "calc(100svh - 4rem)" }}>
        {slug === "legal" ? (
          <>
            <div className="absolute inset-0">
              <WireframeMesh />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-transparent" />
            <FloatingPills />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="absolute top-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full bg-accent/30 blur-2xl" />
          </>
        )}

        <div className="container relative z-10 flex flex-col flex-1 py-10">
          <Link to="/industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block opacity-0 animate-fade-in">
            ← {t("industries.title")}
          </Link>
          <div className="space-y-5 max-w-2xl opacity-0 animate-fade-in">
            <h1>
              <span className="text-foreground">{t(`industries.${slug}.hero`)}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-snug max-w-lg opacity-0 animate-fade-in-delay">
              {t(`industries.${slug}.short`)}
            </p>
          </div>
        </div>
      </section>

      {/* Value section */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="mb-12">
            <Pill className="mb-6">{content.pill[l]}</Pill>
            <h2 className="text-2xl md:text-3xl font-display mb-3">{content.heading[l]}</h2>
            <p className="text-muted-foreground max-w-lg">{content.subheading[l]}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
            <div className="bg-foreground/95 rounded-xl flex items-center justify-center p-8 min-h-[300px] md:min-h-[380px] overflow-hidden">
              <GeometricMotif className="w-full max-w-[280px] opacity-30 invert" />
            </div>
            <div className="bg-muted/60 border border-border rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[380px]">
              <div>
                <span className="text-4xl text-muted-foreground/40 font-serif leading-none">"</span>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-2">
                  "{content.testimonial[l].quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-10 h-10 rounded-full bg-muted-foreground/20" />
                <div>
                  <p className="text-sm font-medium">{content.testimonial[l].name}</p>
                  <p className="text-xs text-muted-foreground">{content.testimonial[l].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {content.valueCards[l].map((card, i) => (
              <div key={i} className="space-y-3">
                <card.icon
                  className="w-6 h-6 text-black"
                  {...(slug === "legal" ? { weight: "light" as const } : {})}
                />
                <h3 className="text-base md:text-lg font-medium">{card.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <div className="w-full">
        <img
          src="/images/industries/legal-fullwidth.png"
          alt={`${slug} industry`}
          className="w-full h-[300px] md:h-[450px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Stats banner */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {content.statsLabel[l]}
            </p>
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {content.stats[l].map((stat, i) => (
                <div
                  key={i}
                  className="border border-border rounded-xl p-6 md:p-8 space-y-2"
                >
                  <p className="text-3xl md:text-4xl font-display font-normal">{stat.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights section */}
      {(() => {
        const cards = t("industries.legal.insightCards") as unknown as Array<{ pill: string; title: string; excerpt: string }>;
        const animations = [onboardingKycAnimation, monitoringKycAnimation, periodicKycAnimation];
        return (
          <section className="py-24 md:py-32">
            <div className="container">
              <div className="flex items-end justify-between mb-12">
                <h2>{t("industries.legal.insightsSectionTitle")}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {cards.map((card, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="relative w-full aspect-[4/3] rounded-xl bg-accent/60 overflow-hidden flex items-center justify-center p-6 md:p-8">
                      <Pill className="absolute top-3 left-3 z-10">
                        {card.pill}
                      </Pill>
                      <div className="flex items-center justify-center w-[65%] h-[65%] max-w-[200px] max-h-[200px] opacity-90">
                        {/* Render at 1.5x then scale down for sharper, less pixelated look */}
                        <div className="w-[180px] h-[180px] overflow-hidden flex items-center justify-center shrink-0">
                          <div style={{ width: 270, height: 270, transform: "scale(0.667)", transformOrigin: "center" }}>
                            <Lottie
                              animationData={animations[i]}
                              loop
                              lottieRef={legalLottieRefs[i]}
                              onDOMLoaded={() => legalLottieRefs[i].current?.setSpeed(0.5)}
                              renderer="svg"
                              rendererSettings={{
                                preserveAspectRatio: "xMidYMid meet",
                                progressiveLoad: true,
                              }}
                              style={{ width: 270, height: 270 }}
                              className="shrink-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-display leading-snug">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-snug">{card.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {productSuite?.title && productSuite?.columns?.length === 4 && (
        <RevealSection className="py-24 md:py-32 border-t border-border">
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

export default IndustryPage;
