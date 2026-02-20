import { useLanguage } from "@/contexts/LanguageContext";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import RowList from "@/components/RowList";

const legalDocs = [
  { slug: "terms-individual", sv: "Villkor — privatperson", en: "Terms — Individual", descSv: "Villkor som gäller för privatpersoner som använder tjänsten.", descEn: "Terms applicable to individuals using the service." },
  { slug: "service-description", sv: "Beskrivning av tjänsten", en: "Service Description", descSv: "Översikt av plattformens funktionalitet och kapacitet.", descEn: "Overview of the platform's functionality and capabilities." },
  { slug: "privacy-policy", sv: "Personuppgiftspolicy", en: "Privacy Policy", descSv: "Hur vi samlar in, behandlar och skyddar personuppgifter.", descEn: "How we collect, process, and protect personal data." },
  { slug: "terms-business", sv: "Villkor — företag", en: "Terms — Business", descSv: "Avtalsvillkor för företag som använder plattformen.", descEn: "Agreement terms for businesses using the platform." },
  { slug: "service-specification", sv: "Tjänstebeskrivning", en: "Service Specification", descSv: "Tekniska och funktionella specifikationer för plattformen.", descEn: "Technical and functional specifications for the platform." },
  { slug: "dpa", sv: "Data processing addendum", en: "Data Processing Addendum", descSv: "Biträdesavtal för behandling av personuppgifter enligt GDPR.", descEn: "Data processing agreement in accordance with GDPR." },
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
            desc: lang === "sv" ? doc.descSv : doc.descEn,
            href: `/legal/${doc.slug}`,
          }))}
        />
      </div>
    </div>
  );
};

export default Legal;
