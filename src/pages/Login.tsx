import { useLanguage } from "@/contexts/LanguageContext";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const LOGIN_KEYS = ["company", "individual", "training"] as const;

const Login = () => {
  const { t } = useLanguage();
  const ref = useSectionReveal() as React.RefObject<HTMLDivElement>;

  return (
    <div ref={ref} className="section-reveal py-24 md:py-32">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-display font-normal leading-tight mb-16 md:mb-20">
          {t("login.title")}
        </h1>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {LOGIN_KEYS.map((key) => (
            <div
              key={key}
              className="border border-border rounded-xl p-8 flex flex-col gap-4"
            >
              <h2 className="text-xl font-display leading-tight">
                {t(`login.${key}.heading`)}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {t(`login.${key}.desc`)}
              </p>
              <Button variant="hero" size="sm" asChild>
                <a
                  href={t(`login.${key}.url`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  {t(`login.${key}.cta`)}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
