import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Industries = () => {
  const { t } = useLanguage();

  const industryKeys = ["legal", "fintech", "ma"] as const;

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-normal mb-3">{t("industries.title")}</h1>
        <p className="text-lg text-muted-foreground mb-12">{t("industries.subtitle")}</p>
        <div className="grid gap-6">
          {industryKeys.map((key) => (
            <Link
              key={key}
              to={`/industries/${key}`}
              className="group bg-card border rounded-lg p-8 hover:shadow-sm transition-shadow"
            >
              <h2 className="text-xl font-medium group-hover:text-primary transition-colors mb-2">
                {t(`industries.${key}.name`)}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
