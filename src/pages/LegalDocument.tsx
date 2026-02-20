import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

type LegalDocKey = "terms-individual" | "service-description" | "privacy-policy" | "terms-business" | "service-specification" | "dpa";

const LegalDocument = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);

  // Map slug to translation key
  const keyMap: Record<string, string> = {
    "terms-individual": "legalDocs.termsIndividual",
    "service-description": "legalDocs.serviceDescription",
    "privacy-policy": "privacy",
    "terms-business": "legalDocs.termsBusiness",
    "service-specification": "legalDocs.serviceSpecification",
    "dpa": "legalDocs.dpa",
  };

  const translationKey = keyMap[slug || ""] || "terms";
  const title = t(`${translationKey}.title`);
  const disclaimer = t(`${translationKey}.disclaimer`);
  const sections = t(`${translationKey}.sections`) as unknown as Array<{ title: string; content: string }>;

  if (!Array.isArray(sections)) {
    return (
      <div className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <Link to="/legal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {lang === "sv" ? "Tillbaka" : "Back"}
          </Link>
          <h1 className="text-3xl md:text-4xl font-normal mb-3">{lang === "sv" ? "Dokumentet saknas" : "Document not found"}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <Link to="/legal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {lang === "sv" ? "Tillbaka" : "Back"}
        </Link>

        <h1 className="text-3xl md:text-4xl font-normal mb-3">{title}</h1>
        <p className="text-sm text-muted-foreground bg-accent border rounded-lg px-4 py-3 mb-10">
          ⚠️ {disclaimer}
        </p>

        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <nav className="hidden md:block sticky top-24 self-start space-y-1">
            {sections.map((section, i) => (
              <button
                key={i}
                onClick={() => {
                  document.getElementById(`legal-section-${i}`)?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(i);
                }}
                className={`block text-left text-xs py-1 transition-colors w-full ${
                  activeSection === i ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i} id={`legal-section-${i}`}>
                <h2 className="text-lg font-medium mb-2">{section.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocument;
