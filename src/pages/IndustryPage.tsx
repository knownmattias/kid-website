import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Pill from "@/components/Pill";
import GeometricMotif from "@/components/GeometricMotif";
import { Scale, MessageSquareQuote, ShieldCheck } from "lucide-react";
import legalMeetingImg from "@/assets/legal-meeting.png";

const legalValueCards = {
  sv: [
    {
      icon: Scale,
      title: "Byggd för juridiska krav",
      desc: "Vi förstår advokatsamfundets riktlinjer och regulatoriska landskap — plattformen är utformad för att möta era specifika krav på kundkännedom.",
    },
    {
      icon: MessageSquareQuote,
      title: "Vi talar ert språk",
      desc: "Vår due diligence-process utgår från juridikens verklighet — komplexa ägarstrukturer, PEP-exponering och gränsöverskridande uppdrag.",
    },
    {
      icon: ShieldCheck,
      title: "Växer med er byrå",
      desc: "Oavsett om ni är fem eller femhundra jurister skalar plattformen med er, utan att kompromissa med kvalitet eller spårbarhet.",
    },
  ],
  en: [
    {
      icon: Scale,
      title: "Built for legal requirements",
      desc: "We understand bar association guidelines and the regulatory landscape — the platform is designed to meet your specific KYC requirements.",
    },
    {
      icon: MessageSquareQuote,
      title: "We speak your language",
      desc: "Our due diligence process is grounded in legal reality — complex ownership structures, PEP exposure, and cross-border engagements.",
    },
    {
      icon: ShieldCheck,
      title: "Grows with your firm",
      desc: "Whether you're five or five hundred lawyers, the platform scales with you without compromising quality or traceability.",
    },
  ],
};

const legalTestimonial = {
  sv: {
    quote: "KnownID sticker ut på två sätt: deras förståelse för juridikens krav och deras djup i detaljerna. De granskade vår verksamhet som en rådgivare — för att se om det verkligen fungerar. Det gav oss trygghet.",
    name: "Maria Lindström",
    role: "Managing Partner, Advokatfirman Lindström",
  },
  en: {
    quote: "KnownID stands out in two ways: their understanding of legal requirements and their depth in the details. They reviewed our practice as an advisor — to see if it really works. That gave us confidence.",
    name: "Maria Lindström",
    role: "Managing Partner, Lindström Law Firm",
  },
};

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();

  const validSlugs = ["legal", "fintech", "ma"];
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

  const pains = t(`industries.${slug}.pains`) as unknown as string[];
  const outcomes = t(`industries.${slug}.outcomes`) as unknown as string[];

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-28 bg-muted/50">
        <div className="container max-w-3xl">
          <Link to="/industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
            ← {t("industries.title")}
          </Link>
          <h1 className="text-3xl md:text-4xl font-normal mb-4">{t(`industries.${slug}.hero`)}</h1>
          <p className="text-lg text-muted-foreground">{t(`industries.${slug}.short`)}</p>
        </div>
      </section>

      {/* Pain points + outcomes */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-lg font-medium mb-4">
                {lang === "sv" ? "Utmaningar" : "Challenges"}
              </h2>
              <ul className="space-y-3">
                {pains.map((pain, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">
                {lang === "sv" ? "Resultat" : "Outcomes"}
              </h2>
              <ul className="space-y-3">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal-specific value section */}
      {slug === "legal" && (
        <section className="py-20 md:py-28">
          <div className="container">
            {/* Pill + heading */}
            <div className="mb-12">
              <Pill className="mb-6">
                {lang === "sv" ? "Precision" : "Precision"}
              </Pill>
              <h2 className="text-2xl md:text-3xl font-display mb-3">
                {lang === "sv" ? "En partner som förstår juridiken" : "A partner that understands the law"}
              </h2>
              <p className="text-muted-foreground max-w-lg">
                {lang === "sv"
                  ? "Vi bygger KYC-verktyg som utgår från juridikens behov: skräddarsytt, korrekt och utan kompromisser."
                  : "We build KYC tools grounded in legal needs: tailored, precise, and without compromise."}
              </p>
            </div>

            {/* 2-col grid with gap and individual borders */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
              <div className="bg-foreground/95 rounded-xl flex items-center justify-center p-8 min-h-[300px] md:min-h-[380px] overflow-hidden">
                <GeometricMotif className="w-full max-w-[280px] opacity-30 invert" />
              </div>
              <div className="bg-muted/60 border border-border rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[380px]">
                <div>
                  <span className="text-4xl text-muted-foreground/40 font-serif leading-none">"</span>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-2">
                    "{legalTestimonial[lang as "sv" | "en"].quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-10 h-10 rounded-full bg-muted-foreground/20" />
                  <div>
                    <p className="text-sm font-medium">{legalTestimonial[lang as "sv" | "en"].name}</p>
                    <p className="text-xs text-muted-foreground">{legalTestimonial[lang as "sv" | "en"].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-col grid, no borders */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {legalValueCards[lang as "sv" | "en"].map((card, i) => (
                <div key={i} className="space-y-3">
                  <card.icon className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-sm font-medium">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats banner — legal only */}
      {slug === "legal" && (() => {
        const stats = lang === "sv"
          ? [
              { value: "97%", desc: "Upplever förbättrad kvalitet i sitt arbete" },
              { value: "4+", desc: "Icke-fakturerbara timmar sparade per vecka" },
              { value: "2,4M", desc: "Potentiell merdebitering per 100 jurister årligen" },
            ]
          : [
              { value: "97%", desc: "Report an improvement in the quality of their work" },
              { value: "4+", desc: "Non-billable hours saved by experienced users weekly" },
              { value: "$6.4m", desc: "Potential additional billing per 100 lawyers annually" },
            ];
        return (
          <section className="py-16 md:py-24 border-b border-border">
            <div className="container">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  KnownID {lang === "sv" ? "för juridik" : "for legal"}
                </p>
                <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-4xl md:text-5xl font-display font-normal italic mb-2">{stat.value}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Full-width legal image */}
      {slug === "legal" && (
        <div className="w-full">
          <img
            src={legalMeetingImg}
            alt="Law firm meeting room"
            className="w-full h-[300px] md:h-[450px] object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Insights section for legal */}
      {slug === "legal" && (() => {
        const posts = t("insights.posts") as unknown as Array<{
          slug: string; category: string; title: string; excerpt: string;
        }>;
        return (
          <section className="py-24 md:py-32">
            <div className="container">
              <div className="flex items-end justify-between mb-12">
                <h2>{t("insights.title")}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {posts.slice(0, 4).map((post) => (
                  <div key={post.slug} className="space-y-2">
                    <div className="w-full aspect-[4/5] rounded-xl bg-accent/60 overflow-hidden" />
                    <h3 className="text-lg font-display leading-snug">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Case block */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <div className="bg-background border rounded-lg p-8">
            <h3 className="text-lg font-medium mb-3">{t(`industries.${slug}.caseTitle`)}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(`industries.${slug}.caseText`)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryPage;
