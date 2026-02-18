import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t("nav.product"), href: "/#product" },
    { label: t("nav.insights"), href: "/insights" },
    { label: t("nav.industries"), href: "/industries" },
    { label: t("nav.about"), href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-lg font-medium tracking-tight" onClick={() => setMobileOpen(false)}>
          KnownID
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm transition-colors hover:text-foreground ${
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-transparent hover:border-border"
            aria-label="Switch language"
          >
            {lang === "sv" ? "EN" : "SV"}
          </button>
          <Link to="/about#contact">
            <Button variant="ghost" size="sm">{t("nav.contact")}</Button>
          </Link>
          <Link to="/#demo">
            <Button variant="hero" size="sm">{t("nav.bookDemo")}</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
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
                className="text-sm text-muted-foreground hover:text-foreground py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3 border-t">
              <button
                onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                className="text-xs font-medium text-muted-foreground hover:text-foreground px-2 py-1 rounded border"
              >
                {lang === "sv" ? "EN" : "SV"}
              </button>
              <Link to="/#demo" onClick={() => setMobileOpen(false)}>
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
