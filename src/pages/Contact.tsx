import Header from "@/components/layout/Header";
import { ContactSection } from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
    </div>
  );
};

export default Contact;
