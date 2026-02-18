import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-3">
            <span className="text-base font-medium">KnownID</span>
            <p className="text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
            <p className="text-xs text-muted-foreground">{t("footer.address")}</p>
          </div>
          <div className="flex gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("footer.terms")}
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.insights")}
              </Link>
              <Link to="/industries" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.industries")}
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.about")}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-xs text-muted-foreground">
          © {new Date().getFullYear()} KnownID AB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
