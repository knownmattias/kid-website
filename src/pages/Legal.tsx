import { useLanguage } from "@/contexts/LanguageContext";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import RowList from "@/components/RowList";

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

        <RowList
          items={legalDocs.map((doc) => ({
            title: lang === "sv" ? doc.sv : doc.en,
            href: `/legal/${doc.slug}`,
          }))}
        />
      </div>
    </div>
  );
};

export default Legal;
