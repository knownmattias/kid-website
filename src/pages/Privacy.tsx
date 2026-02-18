import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Privacy = () => {
  const { t } = useLanguage();
  const sections = t("privacy.sections") as unknown as Array<{ title: string; content: string }>;
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-normal mb-3">{t("privacy.title")}</h1>
        <p className="text-sm text-muted-foreground bg-accent border rounded-lg px-4 py-3 mb-10">
          ⚠️ {t("privacy.disclaimer")}
        </p>

        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          {/* Sidebar TOC */}
          <nav className="hidden md:block sticky top-24 self-start space-y-1">
            {sections.map((section, i) => (
              <button
                key={i}
                onClick={() => {
                  document.getElementById(`privacy-section-${i}`)?.scrollIntoView({ behavior: "smooth" });
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

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i} id={`privacy-section-${i}`}>
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

export default Privacy;
