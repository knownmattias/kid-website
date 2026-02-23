import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Pill from "@/components/Pill";
import GeometricMotif from "@/components/GeometricMotif";
import { Scale, MessageSquareQuote, ShieldCheck } from "lucide-react";

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
            <div className="border border-border rounded-xl overflow-hidden">
              {/* Top: pill + heading + split hero */}
              <div className="p-8 md:p-12 pb-0 md:pb-0">
                <Pill className="mb-6">
                  {lang === "sv" ? "Precision" : "Precision"}
                </Pill>
                <h2 className="text-2xl md:text-3xl font-display mb-3">
                  {lang === "sv" ? "En partner som förstår juridiken" : "A partner that understands the law"}
                </h2>
                <p className="text-muted-foreground max-w-lg mb-10">
                  {lang === "sv"
                    ? "Vi bygger KYC-verktyg som utgår från juridikens behov: skräddarsytt, korrekt och utan kompromisser."
                    : "We build KYC tools grounded in legal needs: tailored, precise, and without compromise."}
                </p>
              </div>

              {/* Split: geometric motif + testimonial */}
              <div className="grid md:grid-cols-2">
                <div className="bg-foreground/95 flex items-center justify-center p-8 min-h-[320px] md:min-h-[380px] rounded-br-none md:rounded-bl-xl overflow-hidden">
                  <GeometricMotif className="w-full max-w-[280px] opacity-30 invert" />
                </div>
                <div className="bg-muted/60 p-8 md:p-10 flex flex-col justify-between min-h-[320px] md:min-h-[380px]">
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

              {/* Bottom: 3 feature cards */}
              <div className="grid md:grid-cols-3 border-t border-border divide-y md:divide-y-0 md:divide-x divide-border">
                {legalValueCards[lang as "sv" | "en"].map((card, i) => (
                  <div key={i} className="p-7 md:p-8 space-y-3">
                    <card.icon className="w-5 h-5 text-muted-foreground" />
                    <h3 className="text-sm font-medium">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
