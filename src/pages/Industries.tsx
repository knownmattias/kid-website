import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Industries = () => {
  const { t, lang } = useLanguage();
  const ref = useSectionReveal() as React.RefObject<HTMLDivElement>;

  const industryKeys = ["legal", "fintech", "other"] as const;

  return (
    <div ref={ref} className="section-reveal py-16 md:py-24">
      <div className="container">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-display font-normal">
              {t("industries.title")}
            </h1>
            <p className="text-sm text-muted-foreground leading-snug max-w-2xl">
              {t("industries.subtitle")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {industryKeys.map((key) => (
            <Link
              key={key}
              to={`/industries/${key}`}
              className="group space-y-2"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center bg-background">
                <img
                  src={`/images/industries/${key}.png`}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-display leading-snug group-hover:text-primary transition-colors">
                {t(`industries.${key}.name`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">
                {t(`industries.${key}.short`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
