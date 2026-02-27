import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

const DemoForm = () => {
  const { t } = useLanguage();
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
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="flex items-center border-b border-border gap-3 pb-2">
        <input
          type="email"
          placeholder={t("demo.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-transparent text-base placeholder:text-muted-foreground focus:outline-none py-2"
        />
        <button type="submit" className="text-muted-foreground hover:text-foreground transition-colors p-1">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default DemoForm;
