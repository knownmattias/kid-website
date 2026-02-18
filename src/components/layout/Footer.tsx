import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoForm from "@/components/DemoForm";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Footer = () => {
  const { t, lang } = useLanguage();
  const ref = useSectionReveal();

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
            <div className="flex flex-col gap-2 text-base">
              <Link to="/industries" className="text-foreground hover:text-primary transition-colors font-display">
                {t("nav.industries")}
              </Link>
              <Link to="/insights" className="text-foreground hover:text-primary transition-colors font-display">
                {t("nav.insights")}
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-display">
                {t("nav.about")}
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-base">
              <Link to="/terms" className="text-foreground hover:text-primary transition-colors font-display">
                {t("footer.terms")}
              </Link>
              <Link to="/privacy" className="text-foreground hover:text-primary transition-colors font-display">
                {t("footer.privacy")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row: address + logo */}
        <div className="flex flex-col md:flex-row justify-between items-end mt-24 pt-0 gap-8">
          <div className="text-xs text-muted-foreground space-y-1">
            <p>{t("footer.address")}</p>
            <p>© {new Date().getFullYear()} KnownID AB</p>
          </div>
          <span className="text-4xl md:text-5xl font-display text-foreground/5 select-none">
            KnownID
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
