import { useLanguage } from "@/contexts/LanguageContext";
import GeometricMotif from "@/components/GeometricMotif";
import Pill from "@/components/Pill";

const About = () => {
  const { lang, t } = useLanguage();

  const values = t("about.values") as unknown as Array<{ title: string; desc: string }>;
  const team = t("about.team") as unknown as Array<{ name: string; role: string }>;

  return (
    <div>
      {/* Vår idé section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <Pill>{lang === "sv" ? "Vår idé" : "Our idea"}</Pill>
            </div>
            <p className="text-xl md:text-2xl font-display leading-snug">
              {lang === "sv"
                ? "Din data hanteras med högsta säkerhet. Krypterad lagring, strikt åtkomstkontroll och fullständig GDPR-efterlevnad — så att du kan fokusera på affären."
                : "Your data is handled with the highest security. Encrypted storage, strict access control, and full GDPR compliance — so you can focus on business."}
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-normal mb-6">{t("about.title")}</h1>
        <div className="space-y-4 mb-16">
          <p className="text-base text-muted-foreground leading-relaxed">{t("about.story")}</p>
          <p className="text-base text-muted-foreground leading-relaxed">{t("about.storyP2")}</p>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-normal mb-8">{t("about.valuesTitle")}</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {values.map((v, i) => (
            <div key={i} className="bg-card border rounded-lg p-6 space-y-2">
              <h3 className="text-base font-medium">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <h2 className="text-2xl font-normal mb-8">{t("about.teamTitle")}</h2>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {team.map((member, i) => (
            <div key={i} className="text-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-muted mx-auto flex items-center justify-center">
                <GeometricMotif className="w-12 h-12 opacity-50" />
              </div>
              <div>
                <p className="text-sm font-medium">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="bg-card border rounded-lg p-8">
          <h2 className="text-lg font-medium mb-2">{t("nav.contact")}</h2>
          <p className="text-sm text-muted-foreground">info@knownid.io</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
