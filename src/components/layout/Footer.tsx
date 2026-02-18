import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoForm from "@/components/DemoForm";
import { useSectionReveal } from "@/hooks/use-section-reveal";

const Footer = () => {
  const { t } = useLanguage();
  const ref = useSectionReveal();

  return (
    <footer id="demo" ref={ref} className="section-reveal bg-foreground text-background">
      {/* Demo CTA area */}
      <div className="container pt-24 pb-20">
        <div className="max-w-3xl">
          <h2 className="text-background mb-3">{t("demo.title")}</h2>
          <p className="text-background/60 mb-10 text-lg">{t("demo.subtitle")}</p>
          <DemoForm />
          <p className="text-xs text-background/40 mt-6">
            {t("demo.privacy")}{" "}
            <Link to="/privacy" className="underline hover:text-background/70 transition-colors">
              {t("demo.privacyLink")}
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Footer links */}
      <div className="container border-t border-background/10 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-3">
            <span className="text-base font-display">KnownID</span>
            <p className="text-sm text-background/50 max-w-xs">{t("footer.tagline")}</p>
            <p className="text-xs text-background/40">{t("footer.address")}</p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="text-background/50 hover:text-background transition-colors">
                {t("footer.terms")}
              </Link>
              <Link to="/privacy" className="text-background/50 hover:text-background transition-colors">
                {t("footer.privacy")}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/insights" className="text-background/50 hover:text-background transition-colors">
                {t("nav.insights")}
              </Link>
              <Link to="/industries" className="text-background/50 hover:text-background transition-colors">
                {t("nav.industries")}
              </Link>
              <Link to="/about" className="text-background/50 hover:text-background transition-colors">
                {t("nav.about")}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-background/10 text-xs text-background/30">
          © {new Date().getFullYear()} KnownID AB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
