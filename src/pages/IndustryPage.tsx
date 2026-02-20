import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const legalSections = {
  sv: [
    { id: "villkor-privatperson", title: "Villkor – privatperson", items: [
      { title: "Tillämpning", desc: "Dessa villkor gäller för privatpersoner som använder KnownID:s tjänster för identitetsverifiering och KYC-processer." },
      { title: "Användarens ansvar", desc: "Användaren ansvarar för att tillhandahålla korrekt och fullständig information vid identitetsverifiering." },
      { title: "Behandling av personuppgifter", desc: "Personuppgifter behandlas i enlighet med GDPR och vår personuppgiftspolicy." },
      { title: "Avtalstid och uppsägning", desc: "Avtalet gäller tills vidare och kan sägas upp av båda parter med omedelbar verkan." },
    ]},
    { id: "tjanstebeskrivning-privat", title: "Beskrivning av tjänsten", items: [
      { title: "Identitetsverifiering", desc: "Digital verifiering av identitet genom säkra, automatiserade processer med stöd av AI och datakällor." },
      { title: "KYC-kontroll", desc: "Automatiserad kundkännedomskontroll som uppfyller regulatoriska krav för finansiella aktörer." },
      { title: "Riskbedömning", desc: "Kontinuerlig övervakning och riskklassificering baserad på transaktionsdata och externa register." },
      { title: "Rapportering", desc: "Strukturerade rapporter och audit trails för intern och extern granskning." },
    ]},
    { id: "personuppgiftspolicy", title: "Personuppgifspolicy", items: [
      { title: "Personuppgiftsansvarig", desc: "KnownID AB är personuppgiftsansvarig för de uppgifter som samlas in via plattformen." },
      { title: "Kategorier av uppgifter", desc: "Vi behandlar namn, personnummer, adress, e-post och finansiell information som krävs för KYC." },
      { title: "Laglig grund", desc: "Behandlingen grundas på fullgörande av avtal, rättslig förpliktelse och berättigat intresse." },
      { title: "Lagringstid", desc: "Uppgifter lagras så länge det krävs enligt lag och avtal, därefter raderas de säkert." },
      { title: "Dina rättigheter", desc: "Du har rätt till tillgång, rättelse, radering och dataportabilitet enligt GDPR." },
    ]},
    { id: "villkor-foretag", title: "Villkor – företag", items: [
      { title: "Tillämpning", desc: "Dessa villkor gäller för företag och organisationer som nyttjar KnownID:s plattform för KYC och compliance." },
      { title: "Licensmodell", desc: "Tillgång till plattformen ges genom en abonnemangsbaserad licens med definierad omfattning." },
      { title: "Ansvar och garantier", desc: "Företaget ansvarar för att dess användare följer villkoren. KnownID garanterar tjänstens tillgänglighet enligt SLA." },
      { title: "Ansvarsbegränsning", desc: "KnownID:s ansvar begränsas till direkta skador upp till det belopp som betalats under avtalsperioden." },
    ]},
    { id: "tjanstebeskrivning-foretag", title: "Tjänstebeskrivning", items: [
      { title: "Plattformsöversikt", desc: "En heltäckande SaaS-plattform för KYC, AML-screening och löpande kundövervakning." },
      { title: "API-integration", desc: "RESTful API för sömlös integration med befintliga system och arbetsflöden." },
      { title: "Användargränssnitt", desc: "Webbaserat gränssnitt med rollbaserad åtkomst, ärendehantering och dashboards." },
      { title: "Support och SLA", desc: "Dedikerad support med garanterad svarstid och 99,9% drifttid." },
    ]},
    { id: "dpa", title: "Data processing addendum", items: [
      { title: "Personuppgiftsbiträde", desc: "KnownID agerar som personuppgiftsbiträde vid behandling av kunders personuppgifter på uppdrag av företagskunden." },
      { title: "Underbiträden", desc: "Lista över godkända underbiträden tillhandahålls och uppdateras löpande med förhandsnotifiering." },
      { title: "Säkerhetsåtgärder", desc: "Tekniska och organisatoriska åtgärder inkluderar kryptering, åtkomstkontroll och regelbundna säkerhetsrevisioner." },
      { title: "Dataöverföring", desc: "Personuppgifter behandlas inom EU/EES. Vid tredjelandsöverföring tillämpas standardavtalsklausuler." },
      { title: "Incidenthantering", desc: "Personuppgiftsincidenter rapporteras till företagskunden utan onödigt dröjsmål, senast inom 48 timmar." },
    ]},
  ],
  en: [
    { id: "terms-individual", title: "Terms – Individual", items: [
      { title: "Applicability", desc: "These terms apply to individuals using KnownID's services for identity verification and KYC processes." },
      { title: "User responsibility", desc: "The user is responsible for providing correct and complete information during identity verification." },
      { title: "Processing of personal data", desc: "Personal data is processed in accordance with GDPR and our privacy policy." },
      { title: "Term and termination", desc: "The agreement is valid until further notice and may be terminated by either party with immediate effect." },
    ]},
    { id: "service-description-individual", title: "Service description", items: [
      { title: "Identity verification", desc: "Digital identity verification through secure, automated processes supported by AI and data sources." },
      { title: "KYC checks", desc: "Automated know-your-customer checks meeting regulatory requirements for financial actors." },
      { title: "Risk assessment", desc: "Continuous monitoring and risk classification based on transaction data and external registries." },
      { title: "Reporting", desc: "Structured reports and audit trails for internal and external review." },
    ]},
    { id: "privacy-policy", title: "Privacy policy", items: [
      { title: "Data controller", desc: "KnownID AB is the data controller for information collected via the platform." },
      { title: "Categories of data", desc: "We process names, national ID numbers, addresses, emails, and financial information required for KYC." },
      { title: "Legal basis", desc: "Processing is based on performance of contract, legal obligation, and legitimate interest." },
      { title: "Retention period", desc: "Data is stored as long as required by law and agreement, then securely deleted." },
      { title: "Your rights", desc: "You have the right to access, rectification, erasure, and data portability under GDPR." },
    ]},
    { id: "terms-business", title: "Terms – Business", items: [
      { title: "Applicability", desc: "These terms apply to companies and organizations using KnownID's platform for KYC and compliance." },
      { title: "License model", desc: "Access to the platform is provided through a subscription-based license with defined scope." },
      { title: "Liability and warranties", desc: "The company is responsible for ensuring its users comply with the terms. KnownID guarantees service availability per SLA." },
      { title: "Limitation of liability", desc: "KnownID's liability is limited to direct damages up to the amount paid during the contract period." },
    ]},
    { id: "service-description-business", title: "Service description", items: [
      { title: "Platform overview", desc: "A comprehensive SaaS platform for KYC, AML screening, and ongoing customer monitoring." },
      { title: "API integration", desc: "RESTful API for seamless integration with existing systems and workflows." },
      { title: "User interface", desc: "Web-based interface with role-based access, case management, and dashboards." },
      { title: "Support and SLA", desc: "Dedicated support with guaranteed response time and 99.9% uptime." },
    ]},
    { id: "dpa", title: "Data processing addendum", items: [
      { title: "Data processor", desc: "KnownID acts as data processor when processing customer personal data on behalf of the business client." },
      { title: "Sub-processors", desc: "A list of approved sub-processors is provided and updated regularly with prior notification." },
      { title: "Security measures", desc: "Technical and organizational measures include encryption, access control, and regular security audits." },
      { title: "Data transfers", desc: "Personal data is processed within EU/EEA. For third-country transfers, standard contractual clauses apply." },
      { title: "Incident management", desc: "Personal data incidents are reported to the business client without undue delay, within 48 hours at the latest." },
    ]},
  ],
};

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);

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

  // Legal gets the new document-hub UI
  if (slug === "legal") {
    const sections = legalSections[lang] || legalSections.en;

    return (
      <div className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <Link to="/industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
            ← {t("industries.title")}
          </Link>
          <h1 className="text-3xl md:text-4xl font-normal mb-3">
            {lang === "sv" ? "Juridisk dokumentation" : "Legal documentation"}
          </h1>
          <p className="text-sm text-muted-foreground mb-12 max-w-lg">
            {lang === "sv"
              ? "Villkor, policyer och avtal som reglerar användningen av KnownID:s plattform."
              : "Terms, policies, and agreements governing the use of KnownID's platform."}
          </p>

          <div className="grid md:grid-cols-[220px_1fr] gap-12">
            {/* Sidebar TOC */}
            <nav className="hidden md:block sticky top-24 self-start space-y-1">
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => {
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(i);
                  }}
                  className={`block text-left text-xs py-1.5 transition-colors w-full ${
                    activeSection === i ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="space-y-16">
              {sections.map((section, i) => (
                <div key={section.id} id={section.id}>
                  <h2 className="text-lg font-medium mb-6">{section.title}</h2>
                  <div className="divide-y divide-border border-y border-border">
                    {section.items.map((item, j) => (
                      <div key={j} className="grid md:grid-cols-2 gap-4 py-6">
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default industry page for fintech, ma
  const pains = t(`industries.${slug}.pains`) as unknown as string[];
  const outcomes = t(`industries.${slug}.outcomes`) as unknown as string[];

  return (
    <>
      <section className="py-16 md:py-28 bg-muted/50">
        <div className="container max-w-3xl">
          <Link to="/industries" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block">
            ← {t("industries.title")}
          </Link>
          <h1 className="text-3xl md:text-4xl font-normal mb-4">{t(`industries.${slug}.hero`)}</h1>
          <p className="text-lg text-muted-foreground">{t(`industries.${slug}.short`)}</p>
        </div>
      </section>

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
