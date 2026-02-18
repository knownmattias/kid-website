import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const DemoForm = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-base font-normal text-foreground">
          {t("nav.bookDemo")} ✓
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {t("demo.subtitle")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
      <Input
        type="text"
        placeholder={t("demo.name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-background"
      />
      <Input
        type="email"
        placeholder={t("demo.email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-background"
      />
      <Button type="submit" variant="hero" className="shrink-0">
        {t("demo.cta")}
      </Button>
    </form>
  );
};

export const DemoBand = () => {
  const { t } = useLanguage();

  return (
    <section id="demo" className="bg-muted py-20">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-normal mb-3">{t("demo.title")}</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t("demo.subtitle")}</p>
        <div className="flex justify-center">
          <DemoForm />
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          {t("demo.privacy")}{" "}
          <Link to="/privacy" className="underline hover:text-foreground transition-colors">
            {t("demo.privacyLink")}
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default DemoForm;
