import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Industries = () => {
  const { t, lang } = useLanguage();
  const ref = useSectionReveal() as React.RefObject<HTMLDivElement>;

  const industryKeys = ["legal", "fintech", "ma"] as const;

  return (
    <div ref={ref} className="section-reveal py-16 md:py-24">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-display font-normal mb-12 md:mb-16">
          {t("industries.title")}
        </h1>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16 border-t border-border pt-10 md:pt-14">
          {industryKeys.map((key) => (
            <div key={key} className="flex flex-col gap-3">
              <h2 className="text-lg md:text-xl font-medium">
                {t(`industries.${key}.name`)}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`industries.${key}.short`)}
              </p>
              <Link
                to={`/industries/${key}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium mt-1 group hover:text-primary transition-colors"
              >
                {lang === "sv" ? "Läs mer" : "Learn more"}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
