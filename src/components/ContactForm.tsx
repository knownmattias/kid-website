import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { ChevronDown } from "lucide-react";

const subjectOptions = {
  sv: ["Allmän förfrågan", "Boka demo", "Prissättning", "Partnerskap"],
  en: ["General inquiry", "Book a demo", "Pricing", "Partnership"],
};

const CONTACT_FORMSUBMIT_TOKEN = "846e1b8e06b809bb0dc6b4769c083124";

const ContactForm = () => {
  const { lang } = useLanguage();
  const l = (lang as "sv" | "en") || "sv";

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    subject: "",
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    title: "",
    message: "",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        _subject: `${form.subject || (l === "sv" ? "Kontaktförfrågan" : "Contact inquiry")} - KnownID`,
        subject: form.subject,
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        company: form.company,
        title: form.title,
        message: form.message,
      };

      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_FORMSUBMIT_TOKEN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      setSubmitError(l === "sv" ? "Något gick fel. Försök igen." : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-10">
        <p className="text-xl font-display text-foreground">
          {l === "sv" ? "Tack för ditt meddelande!" : "Thank you for your message!"} ✓
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          {l === "sv" ? "Vi återkommer inom kort." : "We'll get back to you shortly."}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-border focus:border-foreground focus:ring-0 outline-none py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors";

  const subjects = subjectOptions[l] || subjectOptions.sv;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        <div className="relative">
          <select
            value={form.subject}
            onChange={update("subject")}
            required
            className={`${inputClass} appearance-none cursor-pointer pr-8`}
          >
            <option value="" disabled>
              {l === "sv" ? "Välj ämne" : "Choose subject"}
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        </div>
        <input type="email" placeholder={l === "sv" ? "E-post" : "Email"} value={form.email} onChange={update("email")} required className={inputClass} />
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        <input type="text" placeholder={l === "sv" ? "Förnamn" : "First name"} value={form.firstName} onChange={update("firstName")} required className={inputClass} />
        <input type="text" placeholder={l === "sv" ? "Efternamn" : "Last name"} value={form.lastName} onChange={update("lastName")} required className={inputClass} />
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        <input type="text" placeholder={l === "sv" ? "Företagsnamn" : "Company name"} value={form.company} onChange={update("company")} className={inputClass} />
        <input type="text" placeholder={l === "sv" ? "Titel" : "Title"} value={form.title} onChange={update("title")} className={inputClass} />
      </div>

      <textarea
        placeholder={l === "sv" ? "Hur kan vi hjälpa dig?" : "How can we help you?"}
        value={form.message}
        onChange={update("message")}
        rows={3}
        className={`${inputClass} resize-y`}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="text-sm font-display text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
      >
        {isSubmitting ? (l === "sv" ? "Skickar..." : "Sending...") : l === "sv" ? "Skicka" : "Send"}
      </button>
      {submitError && <p className="text-sm text-destructive">{submitError}</p>}
    </form>
  );
};

export const ContactSection = () => {
  const { lang } = useLanguage();
  const l = (lang as "sv" | "en") || "sv";
  const ref = useSectionReveal();

  return (
    <section id="contact" ref={ref} className="section-reveal bg-card py-24">
      <div className="container">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-20">
          <div>
            <h2 className="text-2xl font-display text-foreground">
              {l === "sv" ? "Kontakta oss" : "Get in touch"}
            </h2>
          </div>
          <ContactForm />
        </div>
        <p className="text-xs text-muted-foreground/50 mt-12">
          {l === "sv" ? "Genom att skicka godkänner du vår " : "By submitting you agree to our "}
          <Link to="/privacy" className="underline hover:text-muted-foreground transition-colors">
            {l === "sv" ? "integritetspolicy" : "privacy policy"}
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
