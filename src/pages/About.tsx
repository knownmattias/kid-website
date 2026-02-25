import { useLanguage } from "@/contexts/LanguageContext";
import GeometricMotif from "@/components/GeometricMotif";
import Pill from "@/components/Pill";

const About = () => {
  const { lang, t } = useLanguage();

  const values = t("about.values") as unknown as Array<{ title: string; desc: string }>;
  const team = t("about.team") as unknown as Array<{ name: string; role: string }>;

  return (
    <div>
      {/* Section 1 — Vår idé */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <h2 className="text-3xl md:text-4xl font-display leading-tight">
              {t("about.title")}
            </h2>
            <div className="space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">{t("about.story")}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{t("about.storyP2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Värderingar */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <h2 className="text-3xl md:text-4xl font-display leading-tight">
              {t("about.valuesTitle")}
            </h2>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i}>
                  <h3 className="text-base font-display">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
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
      </section>
    </div>
  );
};

export default About;
