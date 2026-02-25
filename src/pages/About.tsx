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
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            {/* Left — image placeholder */}
            <div className="md:col-span-2 bg-accent/60 rounded-xl min-h-[400px] md:min-h-[520px]" />

            {/* Right — text + team grid */}
            <div className="md:col-span-3 flex flex-col justify-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-display leading-tight">
                {t("about.teamTitle")}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {lang === "sv"
                  ? "Vårt team kombinerar djup erfarenhet inom compliance, teknik och reglerade branscher. Vi har byggt system för banker, advokatbyråer och fintechbolag — och vet vad som krävs för att göra kundkännedom rätt."
                  : "Our team combines deep experience in compliance, technology, and regulated industries. We've built systems for banks, law firms, and fintech companies — and know what it takes to get customer due diligence right."}
              </p>

              <div className="w-full h-px bg-border" />

              {/* Team members grid */}
              <div className="grid grid-cols-3 gap-6">
                {team.map((member, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-sm font-display">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
