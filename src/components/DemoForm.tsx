import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useSectionReveal } from "@/hooks/use-section-reveal";

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
      <div className="py-4">
        <p className="text-base font-medium text-foreground">
          {t("nav.bookDemo")} ✓
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {t("demo.subtitle")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
      <Input
        type="text"
        placeholder={t("demo.name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-background rounded-xl"
      />
      <Input
        type="email"
        placeholder={t("demo.email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-background rounded-xl"
      />
      <Button type="submit" variant="hero" className="shrink-0">
        {t("demo.cta")}
      </Button>
    </form>
  );
};

export const DemoBand = () => {
  const { t } = useLanguage();
  const ref = useSectionReveal();

  return (
    <section id="demo" ref={ref} className="section-reveal bg-foreground text-background py-24">
      <div className="container max-w-3xl">
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
    </section>
  );
};

export default DemoForm;
