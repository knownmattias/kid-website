import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { ArrowRight } from "lucide-react";

const legalDocs = [
  { slug: "terms-individual", sv: "Villkor — privatperson", en: "Terms — Individual" },
  { slug: "service-description", sv: "Beskrivning av tjänsten", en: "Service Description" },
  { slug: "privacy-policy", sv: "Personuppgiftspolicy", en: "Privacy Policy" },
  { slug: "terms-business", sv: "Villkor — företag", en: "Terms — Business" },
  { slug: "service-specification", sv: "Tjänstebeskrivning", en: "Service Specification" },
  { slug: "dpa", sv: "Data processing addendum", en: "Data Processing Addendum" },
];

const Legal = () => {
  const { lang } = useLanguage();
  const ref = useSectionReveal() as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className="section-reveal py-24 md:py-32">
      <div className="container">
        <div className="max-w-md mb-20 space-y-4">
          <h1 className="text-2xl md:text-3xl font-display leading-tight">
            {lang === "sv" ? "Legal" : "Legal"}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {lang === "sv"
              ? "Villkor, policyer och avtal som reglerar användningen av KnownID:s plattform och tjänster."
              : "Terms, policies, and agreements governing the use of KnownID's platform and services."}
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {legalDocs.map((doc) => (
            <Link
              key={doc.slug}
              to={`/legal/${doc.slug}`}
              className="grid md:grid-cols-2 gap-4 py-8 md:py-10 group"
            >
              <h2 className="text-base md:text-lg font-display group-hover:text-primary transition-colors">
                {lang === "sv" ? doc.sv : doc.en}
              </h2>
              <div className="flex items-center justify-end">
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legal;
