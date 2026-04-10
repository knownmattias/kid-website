import { useLanguage } from "@/contexts/LanguageContext";
import GeometricMotif from "@/components/GeometricMotif";
import Pill from "@/components/Pill";

const About = () => {
  const { lang, t } = useLanguage();

  const values = t("about.values") as unknown as Array<{ title: string; desc: string }>;
  const team = t("about.team") as unknown as Array<{ name: string; role: string }>;

  return (
    <div>
      {/* Hero — left-aligned h1 only */}
      <section className="py-24 md:py-32">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-display leading-tight text-foreground max-w-3xl">
            {t("about.heroHeading")}
          </h1>
        </div>
      </section>

      {/* Full-width light gray line */}
      <div className="w-full h-px bg-border" />

      {/* Tagline — centered, pill + two lines + body text */}
      <section className="py-16 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <Pill className="mb-6">Raison d&apos;être</Pill>
          <p className="text-2xl md:text-3xl font-display leading-tight">
            <span className="text-foreground">{t("about.taglineLine1")}</span>
            <br />
            <span className="text-muted-foreground">{t("about.taglineLine2")}</span>
          </p>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {t("about.taglineBody")}
          </p>
        </div>
      </section>

      {/* Image grid: TL 66%×50%, BL 33%×50%, BR-mid 33%×50%, R 33%×100% */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div
            className="grid grid-cols-3 grid-rows-2 gap-4"
            style={{ aspectRatio: "3/1.4", minHeight: "240px" }}
          >
            <div className="col-span-2 row-span-1 rounded-xl bg-accent/60 overflow-hidden" />
            <div className="col-span-1 row-span-2 rounded-xl bg-accent/60 overflow-hidden">
              <img
                src="/images/about-founder.png"
                alt={t("about.mosaicPortraitAlt")}
                className="h-full w-full object-cover object-left"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl bg-accent/50 overflow-hidden" />
            <div className="col-span-1 row-span-1 rounded-xl bg-accent/50 overflow-hidden" />
          </div>
        </div>
      </section>

      {/* Värderingar */}
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
                  <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
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
              <p className="text-base text-muted-foreground">
                {t("about.teamIntro")}
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
