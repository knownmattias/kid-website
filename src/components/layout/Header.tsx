import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const industryKeys = ["legal", "fintech", "ma"] as const;

  const navItems = [
    { label: t("nav.product"), href: "/#product" },
    { label: t("nav.industries"), href: "/industries", dropdown: true },
    { label: t("nav.insights"), href: "/insights" },
    { label: t("nav.about"), href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl">
      <div className="container flex items-center h-16">
        <Link to="/" className="text-lg font-display font-normal tracking-tight" onClick={() => setMobileOpen(false)}>
          KnownID
        </Link>

        {/* Desktop nav — closer to logo */}
        <nav className="hidden md:flex items-center gap-7 ml-10" aria-label="Main navigation">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-foreground inline-flex items-center gap-1 ${
                    isActive(item.href) ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {industriesOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-background border shadow-sm py-2 min-w-[180px]" style={{ borderRadius: '6px' }}>
                      {industryKeys.map((key) => (
                        <Link
                          key={key}
                          to={`/industries/${key}`}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {t(`industries.${key}.name`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(item.href) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3 ml-auto">
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-full border border-transparent hover:border-border"
            aria-label="Switch language"
          >
            {lang === "sv" ? "EN" : "SV"}
          </button>
          <Link to="/about#contact">
            <Button variant="ghost" size="sm">{t("nav.contact")}</Button>
          </Link>
          <Link to="/#contact">
            <Button variant="hero" size="sm">{t("nav.bookDemo")}</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t">
              <button
                onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                className="text-xs font-medium text-muted-foreground hover:text-foreground px-2 py-1 rounded-full border"
              >
                {lang === "sv" ? "EN" : "SV"}
              </button>
              <Link to="/#contact" onClick={() => setMobileOpen(false)}>
                <Button variant="hero" size="sm">{t("nav.bookDemo")}</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
