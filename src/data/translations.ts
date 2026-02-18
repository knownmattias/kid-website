export const translations: Record<string, any> = {
  sv: {
    nav: {
      product: "Produkt",
      insights: "Insights",
      industries: "Branscher",
      about: "Om oss",
      bookDemo: "Boka demo",
      contact: "Kontakta oss",
    },
    hero: {
      headline: "KYC gjort enkelt — utan att tumma på kontrollen.",
      subhead: "Test",
      cta: "Boka demo",
      secondary: "Se hur det fungerar",
    },
    trust: {
      items: ["Audit trail", "Rollbaserad åtkomst", "GDPR-by-design", "Screening & monitoring", "Smidig datainsamling"],
    },
    value: {
      title: "En plattform. Hela KYC-processen.",
      cards: [
        {
          title: "End-to-end KYC på ett ställe",
          desc: "Samla all kundkännedom i ett flöde — från insamling och granskning till beslut och uppföljning. Slipp fragmenterade verktyg.",
        },
        {
          title: "Mallar & skräddarsydda formulär",
          desc: "Använd färdiga mallar eller skapa egna frågeformulär som passar er verksamhet och era regulatoriska krav.",
        },
        {
          title: "Screening & löpande bevakning",
          desc: "Kontrollera motparter mot PEP-listor, sanktionsregister och negativ mediabevakning — automatiskt och löpande.",
        },
        {
          title: "Dokumentation & revisionsspår",
          desc: "Varje steg loggas. Fullständig spårbarhet för interna och externa revisioner, med ett klick.",
        },
      ],
    },
    howItWorks: {
      title: "Tre steg till säker kundkännedom",
      steps: [
        { title: "Skapa flöde", desc: "Välj en mall eller bygg ert eget KYC-flöde med de kontroller ni behöver." },
        { title: "Samla in data", desc: "Skicka till motparten och samla in uppgifter säkert — direkt i plattformen." },
        {
          title: "Granska & följ upp",
          desc: "Fatta beslut, dokumentera och håll löpande koll med automatisk bevakning.",
        },
      ],
    },
    insights: {
      title: "Insights",
      viewAll: "Alla insights",
      readMore: "Läs mer",
      search: "Sök artiklar...",
      posts: [
        {
          slug: "fran-epost-till-sparbarhet",
          category: "Arbetsflöden",
          title: "Från e-post till spårbarhet: så minskar du KYC-friktion",
          excerpt:
            "Manuell hantering via mejl skapar risk och fördröjning. Så flyttar du KYC-processen till ett digitalt, spårbart flöde.",
          date: "2025-11-12",
          content:
            "Många organisationer hanterar fortfarande KYC via e-post och delade mappar. Det innebär att känslig information skickas okrypterat, att versionshantering saknas och att det är svårt att visa en revisor exakt vad som hänt och när.\n\nEtt digitalt KYC-flöde ger er spårbarhet i varje steg: vem som skickade vad, när det granskades och vilket beslut som fattades. Det minskar friktion för både er och era motparter — och gör revisionen till en icke-händelse.\n\nNyckeln är att göra övergången gradvis. Börja med era mest frekventa ärendetyper, skapa mallar och bygg på därifrån. Med rätt verktyg kan ni vara igång på dagar, inte månader.",
        },
        {
          slug: "praktisk-screening",
          category: "Screening",
          title: "Praktisk screening: bättre signal, mindre brus",
          excerpt:
            "Screening handlar inte om att hitta fler träffar — utan om att hitta rätt träffar. Så ökar du precisionen.",
          date: "2025-10-04",
          content:
            "PEP- och sanktionsscreening är ett regulatoriskt krav, men i praktiken genererar många verktyg enorma mängder falska positiva. Det kostar tid och skapar utmattning hos handläggare.\n\nBättre screening handlar om att kombinera datakällor intelligent, använda fuzzy matching klokt och ge handläggaren kontext direkt i gränssnittet. Målet är att varje träff som kräver manuell granskning verkligen är relevant.\n\nModerna plattformar kan också erbjuda löpande bevakning, så att ni inte bara screenar vid onboarding utan fångar förändringar — som en ny PEP-klassificering eller en sanktionslistning — i realtid.",
        },
        {
          slug: "gdpr-och-kyc",
          category: "Regelverk",
          title: "GDPR och KYC: designprinciper som håller i revision",
          excerpt:
            "Regulatoriska krav behöver inte stå i konflikt. Rätt arkitektur gör GDPR och KYC till naturliga partners.",
          date: "2025-09-18",
          content:
            "GDPR och KYC-regelverken ställer till synes motstridiga krav: å ena sidan ska ni samla in och bevara uppgifter för kundkännedom, å andra sidan ska ni minimera datainsamling och radera när syftet är uppfyllt.\n\nI praktiken går det att designa system som uppfyller båda kraven. Nyckeln ligger i tydliga ändamål, automatiserad gallring och granulär åtkomstkontroll. Varje datapunkt ska ha ett definierat syfte och en livscykel.\n\nGenom att bygga in privacy-by-design från start — inte som en efterhandskonstruktion — skapar ni ett system som håller vid både intern och extern granskning.",
        },
      ],
    },
    industries: {
      title: "Branscher",
      subtitle: "KYC-krav varierar mellan branscher. Vi anpassar oss efter era specifika behov.",
      legal: {
        name: "Juridik",
        short:
          "Advokatbyråer och juridiska rådgivare hanterar känsliga klientrelationer som kräver rigorös kundkännedom.",
        hero: "KYC för juridikbranschen",
        pains: [
          "Komplexa ägarstrukturer och svåridentifierade UBO:er",
          "Tidskrävande manuell dokumentinsamling från klienter",
          "Krav på oberoende granskning vid riskfyllda uppdrag",
        ],
        outcomes: [
          "Digitala formulär som klienter fyller i själva — säkert och spårbart",
          "Automatisk UBO-analys med stöd för komplexa strukturer",
          "Fullständigt revisionsspår som uppfyller advokatsamfundets krav",
        ],
        caseTitle: "Hur en mellanstor advokatbyrå halverade sin KYC-tid",
        caseText:
          "En byrå med 45 jurister gick från manuell e-posthantering till digitala KYC-flöden. Resultatet: 50 % kortare handläggningstid, nöjdare klienter och en revision som gick smärtfritt.",
      },
      fintech: {
        name: "Fintech",
        short: "Snabbväxande fintechbolag behöver skala sin compliance utan att bromsa produktutvecklingen.",
        hero: "KYC för fintech",
        pains: [
          "Höga volymer av onboardingar som kräver snabb handläggning",
          "Regulatorisk press från flera jurisdiktioner samtidigt",
          "Balans mellan användarupplevelse och compliance-krav",
        ],
        outcomes: [
          "API-driven KYC som integreras i er befintliga onboarding",
          "Automatiserad screening som skalar med era volymer",
          "Regelefterlevnad i flera jurisdiktioner utan manuellt arbete",
        ],
        caseTitle: "En betalningsplattform som skalade KYC utan att anställa fler",
        caseText:
          "Ett fintechbolag med 200 000 användare automatiserade sin KYC-process och minskade manuell handläggning med 70 %, utan att kompromissa med regulatoriska krav.",
      },
      ma: {
        name: "M&A",
        short: "Transaktionsrådgivare behöver snabb och tillförlitlig kundkännedom i tidspressade processer.",
        hero: "KYC för M&A",
        pains: [
          "Tidspressade processer där KYC blir en flaskhals",
          "Många motparter med komplexa ägarstrukturer",
          "Behov av att dokumentera due diligence-steg noggrant",
        ],
        outcomes: [
          "Parallella KYC-flöden för flera motparter samtidigt",
          "Strukturerad dokumentation som stärker due diligence",
          "Snabb uppstart med branschspecifika mallar",
        ],
        caseTitle: "Smidigare KYC i en komplex förvärvsprocess",
        caseText:
          "En rådgivare genomförde KYC på 12 motparter parallellt i en förvärvsprocess. Strukturerade flöden och automatisk screening sparade veckor av manuellt arbete.",
      },
    },
    about: {
      title: "Om KnownID",
      story:
        "KnownID grundades med en enkel insikt: kundkännedom borde inte vara krångligt. Vi bygger verktyg som gör KYC-processen transparent, säker och smidig — för både er och era motparter.",
      storyP2:
        "Vår plattform är byggd för team som tar compliance på allvar men som vägrar acceptera ineffektiva processer. Vi tror att rätt teknologi kan göra regelefterlevnad till en konkurrensfördel.",
      valuesTitle: "Våra värderingar",
      values: [
        { title: "Privacy by design", desc: "Dataskydd är inte en funktion — det är en arkitekturprincip." },
        { title: "Tydlighet", desc: "Komplexitet i regelverket ska inte betyda komplexitet i verktyget." },
        { title: "Kontroll", desc: "Ni äger er data och era processer. Alltid." },
        { title: "Samarbete", desc: "KYC fungerar bäst när alla parter kan bidra smidigt och säkert." },
      ],
      teamTitle: "Teamet",
      team: [
        { name: "Anna Lindqvist", role: "VD & grundare" },
        { name: "Erik Johansson", role: "CTO" },
        { name: "Sara Bergström", role: "Head of Compliance" },
      ],
    },
    demo: {
      title: "Redo att förenkla er KYC?",
      subtitle: "Boka en demo och se hur KnownID kan effektivisera era processer.",
      name: "Namn",
      email: "E-post",
      cta: "Boka demo",
      privacy: "Genom att skicka godkänner du vår",
      privacyLink: "integritetspolicy",
    },
    footer: {
      terms: "Villkor",
      privacy: "Integritetspolicy",
      tagline: "Kundkännedom, förenklat.",
      address: "KnownID AB · Stockholm, Sverige · info@knownid.io",
    },
    terms: {
      title: "Allmänna villkor",
      disclaimer: "Malltext — ersätt med era juridiskt granskade villkor.",
      sections: [
        {
          title: "1. Omfattning",
          content:
            "Dessa villkor reglerar användningen av KnownID:s plattform och tjänster. Genom att använda tjänsten accepterar ni dessa villkor i sin helhet.",
        },
        {
          title: "2. Tillåten användning",
          content:
            "Tjänsten får användas för laglig kundkännedom och compliance-ändamål. Användare ansvarar för att deras användning följer tillämplig lagstiftning.",
        },
        {
          title: "3. Begränsningar",
          content:
            "KnownID tillhandahåller verktyg för KYC-processer men utgör inte juridisk rådgivning. Användare ansvarar för sina egna bedömningar och beslut.",
        },
        {
          title: "4. Support",
          content:
            "Support tillhandahålls via e-post och i plattformen under ordinarie kontorstider. Svarstider beror på avtalsnivå.",
        },
        {
          title: "5. Prissättning",
          content:
            "Priser framgår av gällande offert eller avtal. KnownID förbehåller sig rätten att justera priser med 90 dagars varsel.",
        },
        {
          title: "6. Tillämplig lag",
          content: "Dessa villkor lyder under svensk lag. Tvister avgörs av allmän domstol i Stockholm.",
        },
      ],
    },
    privacy: {
      title: "Integritetspolicy",
      disclaimer: "Malltext — ersätt med er juridiskt granskade integritetspolicy.",
      sections: [
        {
          title: "1. Personuppgiftsansvarig",
          content:
            "KnownID AB, org.nr 559XXX-XXXX, är personuppgiftsansvarig för behandling av personuppgifter i samband med tillhandahållande av tjänsten.",
        },
        {
          title: "2. Kategorier av personuppgifter",
          content:
            "Vi behandlar kontaktuppgifter, användardata, samt de uppgifter som laddas upp i plattformen i samband med KYC-processer.",
        },
        {
          title: "3. Ändamål",
          content:
            "Personuppgifter behandlas för att tillhandahålla tjänsten, uppfylla rättsliga förpliktelser och förbättra användarupplevelsen.",
        },
        {
          title: "4. Lagring och gallring",
          content:
            "Uppgifter lagras så länge det krävs för ändamålet eller enligt tillämpliga lagkrav. Gallring sker systematiskt.",
        },
        {
          title: "5. Säkerhet",
          content:
            "Vi vidtar tekniska och organisatoriska åtgärder för att skydda personuppgifter, inklusive kryptering, åtkomstkontroll och regelbundna säkerhetsgranskningar.",
        },
        {
          title: "6. Underbiträden",
          content:
            "Vi använder noggrant utvalda underbiträden för hosting, kommunikation och support. En aktuell lista tillhandahålls på begäran.",
        },
        {
          title: "7. Dina rättigheter",
          content:
            "Du har rätt till tillgång, rättelse, radering och dataportabilitet. Kontakta oss på privacy@knownid.io.",
        },
        {
          title: "8. Kontakt",
          content:
            "Frågor om personuppgiftsbehandling ställs till privacy@knownid.io eller KnownID AB, [Adress], Stockholm.",
        },
      ],
    },
  },
  en: {
    nav: {
      product: "Product",
      insights: "Insights",
      industries: "Industries",
      about: "About",
      bookDemo: "Book a demo",
      contact: "Contact",
    },
    hero: {
      headline: "KYC made simple — without cutting corners.",
      subhead:
        "One platform for customer due diligence: secure data collection, smooth collaboration, and audit-ready workflows.",
      cta: "Book a demo",
      secondary: "See how it works",
    },
    trust: {
      items: ["Audit trail", "Role-based access", "GDPR-by-design", "Screening & monitoring", "Smooth data collection"],
    },
    value: {
      title: "One platform. The entire KYC process.",
      cards: [
        {
          title: "End-to-end KYC in one place",
          desc: "Manage all customer due diligence in a single flow — from collection and review to decision and follow-up. No more fragmented tools.",
        },
        {
          title: "Templates & custom questionnaires",
          desc: "Use ready-made templates or build your own forms tailored to your business and regulatory requirements.",
        },
        {
          title: "Screening & ongoing monitoring",
          desc: "Check counterparties against PEP lists, sanctions registries, and adverse media — automatically and continuously.",
        },
        {
          title: "Record-keeping & audit trails",
          desc: "Every step is logged. Full traceability for internal and external audits, with one click.",
        },
      ],
    },
    howItWorks: {
      title: "Three steps to secure due diligence",
      steps: [
        { title: "Create a flow", desc: "Choose a template or build your own KYC flow with the controls you need." },
        {
          title: "Collect data",
          desc: "Send to the counterparty and collect information securely — directly in the platform.",
        },
        { title: "Review & follow up", desc: "Make decisions, document, and stay on top with automatic monitoring." },
      ],
    },
    insights: {
      title: "Insights",
      viewAll: "All insights",
      readMore: "Read more",
      search: "Search articles...",
      posts: [
        {
          slug: "from-email-to-traceability",
          category: "Workflows",
          title: "From email to traceability: reducing KYC friction",
          excerpt:
            "Manual handling via email creates risk and delays. Here's how to move your KYC process to a digital, traceable flow.",
          date: "2025-11-12",
          content:
            "Many organizations still manage KYC via email and shared folders. This means sensitive information is sent unencrypted, version control is lacking, and it's difficult to show an auditor exactly what happened and when.\n\nA digital KYC flow gives you traceability at every step: who sent what, when it was reviewed, and what decision was made. It reduces friction for both you and your counterparties — and makes the audit a non-event.\n\nThe key is to make the transition gradual. Start with your most frequent case types, create templates, and build from there. With the right tools, you can be up and running in days, not months.",
        },
        {
          slug: "practical-screening",
          category: "Screening",
          title: "Practical screening: better signal, less noise",
          excerpt:
            "Screening isn't about finding more hits — it's about finding the right ones. Here's how to increase precision.",
          date: "2025-10-04",
          content:
            "PEP and sanctions screening is a regulatory requirement, but in practice many tools generate enormous volumes of false positives. This costs time and creates fatigue among case handlers.\n\nBetter screening is about combining data sources intelligently, using fuzzy matching wisely, and giving the handler context directly in the interface. The goal is that every hit requiring manual review is truly relevant.\n\nModern platforms can also offer ongoing monitoring, so you don't just screen at onboarding but catch changes — like a new PEP classification or a sanctions listing — in real time.",
        },
        {
          slug: "gdpr-and-kyc",
          category: "Regulation",
          title: "GDPR and KYC: design principles that hold up in audit",
          excerpt:
            "Regulatory requirements don't have to conflict. The right architecture makes GDPR and KYC natural partners.",
          date: "2025-09-18",
          content:
            "GDPR and KYC regulations pose seemingly conflicting requirements: on one hand you need to collect and retain data for customer due diligence, on the other you must minimize data collection and delete when the purpose is fulfilled.\n\nIn practice, it's possible to design systems that meet both requirements. The key lies in clear purposes, automated deletion, and granular access control. Every data point should have a defined purpose and lifecycle.\n\nBy building in privacy-by-design from the start — not as an afterthought — you create a system that holds up in both internal and external review.",
        },
      ],
    },
    industries: {
      title: "Industries",
      subtitle: "KYC requirements vary by industry. We adapt to your specific needs.",
      legal: {
        name: "Legal",
        short:
          "Law firms and legal advisors handle sensitive client relationships that require rigorous customer due diligence.",
        hero: "KYC for the legal industry",
        pains: [
          "Complex ownership structures and hard-to-identify UBOs",
          "Time-consuming manual document collection from clients",
          "Requirements for independent review in high-risk engagements",
        ],
        outcomes: [
          "Digital forms that clients fill in themselves — securely and traceably",
          "Automatic UBO analysis supporting complex structures",
          "Complete audit trail meeting bar association requirements",
        ],
        caseTitle: "How a mid-size law firm halved its KYC time",
        caseText:
          "A firm with 45 lawyers moved from manual email handling to digital KYC flows. The result: 50% shorter processing time, happier clients, and a painless audit.",
      },
      fintech: {
        name: "Fintech",
        short: "Fast-growing fintech companies need to scale compliance without slowing product development.",
        hero: "KYC for fintech",
        pains: [
          "High volumes of onboardings requiring fast processing",
          "Regulatory pressure from multiple jurisdictions simultaneously",
          "Balancing user experience with compliance requirements",
        ],
        outcomes: [
          "API-driven KYC that integrates into your existing onboarding",
          "Automated screening that scales with your volumes",
          "Multi-jurisdiction compliance without manual work",
        ],
        caseTitle: "A payment platform that scaled KYC without hiring more",
        caseText:
          "A fintech company with 200,000 users automated its KYC process and reduced manual processing by 70%, without compromising on regulatory requirements.",
      },
      ma: {
        name: "M&A",
        short: "Transaction advisors need fast and reliable due diligence in time-pressured processes.",
        hero: "KYC for M&A",
        pains: [
          "Time-pressured processes where KYC becomes a bottleneck",
          "Multiple counterparties with complex ownership structures",
          "Need to document due diligence steps thoroughly",
        ],
        outcomes: [
          "Parallel KYC flows for multiple counterparties simultaneously",
          "Structured documentation that strengthens due diligence",
          "Quick start with industry-specific templates",
        ],
        caseTitle: "Smoother KYC in a complex acquisition process",
        caseText:
          "An advisor conducted KYC on 12 counterparties in parallel during an acquisition. Structured flows and automatic screening saved weeks of manual work.",
      },
    },
    about: {
      title: "About KnownID",
      story:
        "KnownID was founded with a simple insight: customer due diligence shouldn't be complicated. We build tools that make the KYC process transparent, secure, and smooth — for both you and your counterparties.",
      storyP2:
        "Our platform is built for teams that take compliance seriously but refuse to accept inefficient processes. We believe the right technology can turn regulatory compliance into a competitive advantage.",
      valuesTitle: "Our values",
      values: [
        { title: "Privacy by design", desc: "Data protection isn't a feature — it's an architectural principle." },
        { title: "Clarity", desc: "Complexity in regulation shouldn't mean complexity in the tool." },
        { title: "Control", desc: "You own your data and your processes. Always." },
        { title: "Collaboration", desc: "KYC works best when all parties can contribute smoothly and securely." },
      ],
      teamTitle: "The team",
      team: [
        { name: "Anna Lindqvist", role: "CEO & Founder" },
        { name: "Erik Johansson", role: "CTO" },
        { name: "Sara Bergström", role: "Head of Compliance" },
      ],
    },
    demo: {
      title: "Ready to simplify your KYC?",
      subtitle: "Book a demo and see how KnownID can streamline your processes.",
      name: "Name",
      email: "Email",
      cta: "Book a demo",
      privacy: "By submitting you agree to our",
      privacyLink: "privacy policy",
    },
    footer: {
      terms: "Terms",
      privacy: "Privacy policy",
      tagline: "Customer due diligence, simplified.",
      address: "KnownID AB · Stockholm, Sweden · info@knownid.io",
    },
    terms: {
      title: "Terms of Service",
      disclaimer: "Template text — replace with your legally reviewed terms.",
      sections: [
        {
          title: "1. Scope",
          content:
            "These terms govern the use of KnownID's platform and services. By using the service, you accept these terms in their entirety.",
        },
        {
          title: "2. Acceptable use",
          content:
            "The service may be used for lawful customer due diligence and compliance purposes. Users are responsible for ensuring their use complies with applicable legislation.",
        },
        {
          title: "3. Limitations",
          content:
            "KnownID provides tools for KYC processes but does not constitute legal advice. Users are responsible for their own assessments and decisions.",
        },
        {
          title: "4. Support",
          content:
            "Support is provided via email and in-platform during regular business hours. Response times depend on agreement level.",
        },
        {
          title: "5. Pricing",
          content:
            "Prices are as stated in the applicable quote or agreement. KnownID reserves the right to adjust prices with 90 days' notice.",
        },
        {
          title: "6. Governing law",
          content:
            "These terms are governed by Swedish law. Disputes shall be settled by the general courts in Stockholm.",
        },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      disclaimer: "Template text — replace with your legally reviewed privacy policy.",
      sections: [
        {
          title: "1. Data controller",
          content:
            "KnownID AB, reg. no. 559XXX-XXXX, is the data controller for the processing of personal data in connection with the provision of the service.",
        },
        {
          title: "2. Categories of personal data",
          content:
            "We process contact details, user data, and data uploaded to the platform in connection with KYC processes.",
        },
        {
          title: "3. Purposes",
          content:
            "Personal data is processed to provide the service, fulfill legal obligations, and improve the user experience.",
        },
        {
          title: "4. Storage and deletion",
          content:
            "Data is stored for as long as required for the purpose or as required by applicable law. Deletion is performed systematically.",
        },
        {
          title: "5. Security",
          content:
            "We implement technical and organizational measures to protect personal data, including encryption, access control, and regular security reviews.",
        },
        {
          title: "6. Sub-processors",
          content:
            "We use carefully selected sub-processors for hosting, communication, and support. A current list is provided upon request.",
        },
        {
          title: "7. Your rights",
          content:
            "You have the right to access, rectification, erasure, and data portability. Contact us at privacy@knownid.io.",
        },
        {
          title: "8. Contact",
          content:
            "Questions about personal data processing should be directed to privacy@knownid.io or KnownID AB, [Address], Stockholm.",
        },
      ],
    },
  },
};
