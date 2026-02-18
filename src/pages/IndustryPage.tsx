import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { DemoBand } from "@/components/DemoForm";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

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
                {t("nav.product") === "Produkt" ? "Utmaningar" : "Challenges"}
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
                {t("nav.product") === "Produkt" ? "Resultat" : "Outcomes"}
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

      <DemoBand />
    </>
  );
};

export default IndustryPage;
