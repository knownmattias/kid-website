import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoForm from "@/components/DemoForm";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const { t, lang } = useLanguage();
  const ref = useSectionReveal();

  const industryKeys = ["legal", "fintech", "ma"] as const;

  return (
    <footer id="demo" ref={ref} className="section-reveal bg-background border-t border-border">
      <div className="container pt-20 pb-12">
        {/* Top row: CTA + Nav links */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-20">
          {/* Left — CTA + form (2 cols wide) */}
          <div className="md:col-span-2 space-y-8">
            <h2>{t("demo.title")}</h2>
            <DemoForm />
            <p className="text-xs text-muted-foreground mt-4">
              {t("demo.privacy")}{" "}
              <Link to="/privacy" className="underline hover:text-foreground transition-colors">
                {t("demo.privacyLink")}
              </Link>
              .
            </p>
          </div>

          {/* Right — nav links */}
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              {/* Industries with sub-items */}
              <div>
                <Link to="/industries" className="text-foreground hover:text-primary transition-colors font-display text-xl">
                  {t("nav.industries")}
                </Link>
                <div className="flex flex-col gap-1 mt-2 ml-4">
                  {industryKeys.map((key) => (
                    <Link
                      key={key}
                      to={`/industries/${key}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t(`industries.${key}.name`)}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/insights" className="text-foreground hover:text-primary transition-colors font-display text-xl">
                {t("nav.insights")}
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-display text-xl">
                {t("nav.about")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row: address + legal */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-24 gap-8">
          <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Legal
          </Link>
          <div className="text-xs text-muted-foreground space-y-1 text-right">
            <p>KnownID AB,</p>
            <p>Artillerigatan 15,</p>
            <p>114 45 Stockholm,</p>
            <p>Sweden</p>
            <p className="mt-2">
              <a href="mailto:info@knownd.io" className="hover:text-foreground transition-colors">
                info@knownd.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
