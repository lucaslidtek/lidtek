import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "nav.manifesto": "O que nos move",
    "nav.approach": "Nossa Atuação",
    "nav.model": "Como trabalhamos",
    "nav.engage": "Falar com a Lidtek",
    "hero.tag": "Sua estrutura de tecnologia",
    "hero.title1": "Construindo a ",
    "hero.title1_italic": "base sólida",
    "hero.title2": "que o seu negócio exige.",
    "hero.explore": "Conheça nossa estrutura",
    "problem.tag": "O cenário atual",
    "problem.title": "Software não deveria ser ",
    "problem.title_italic": "frágil",
    "problem.title_end": ".",
    "problem.desc": "Muitas empresas sofrem com soluções improvisadas que travam o crescimento. O código não deve ser apenas um meio para o fim, mas o alicerce do seu próximo passo.",
    "problem.debt.title": "Complexidade desnecessária",
    "problem.debt.desc": "Soluções rápidas que geram problemas lentos e caros no futuro.",
    "problem.generic.title": "Falta de identidade",
    "problem.generic.desc": "Sistemas genéricos que não acompanham a maturidade da sua operação.",
    "problem.scale.title": "Incerteza na escala",
    "problem.scale.desc": "O medo de que a tecnologia não suporte o sucesso do seu negócio.",
    "manifesto.tag": "Nossa Visão",
    "manifesto.main": "Não entregamos apenas código. Atuamos como o seu ",
    "manifesto.main_bold": "braço tecnológico estratégico",
    "manifesto.precision.title": "Pés no chão, olho no futuro",
    "manifesto.precision.desc": "Unimos governança e inteligência para criar sistemas que não apenas funcionam hoje, mas sustentam sua empresa pelos próximos anos.",
    "manifesto.silent.title": "Presença que traz paz",
    "manifesto.silent.desc": "Nossa tecnologia é silenciosa e eficiente. Ela resolve problemas antes que você perceba, permitindo que você foque no que realmente importa.",
    "approach.tag": "Como entregamos",
    "approach.title": "Tecnologia com propósito e clareza.",
    "approach.desc": "Substituímos a incerteza de projetos isolados por uma parceria contínua e estruturada.",
    "approach.code.title": "Engenharia Real",
    "approach.code.desc": "Código limpo, seguro e feito para durar. Sem atalhos que comprometem o futuro.",
    "approach.data.title": "Dados com Inteligência",
    "approach.data.desc": "Estruturamos sua informação para que ela trabalhe a favor das suas decisões.",
    "approach.security.title": "Segurança e Governança",
    "approach.security.desc": "Protegemos o que é mais valioso: a continuidade e a confiança do seu negócio.",
    "approach.perf.title": "Eficiência Prática",
    "approach.perf.desc": "Sistemas rápidos e fluidos que respeitam o tempo do seu usuário e da sua equipe.",
    "model.tag": "Caminho planejado",
    "model.title": "Um processo direto e sem ruídos.",
    "model.step1.title": "Entendimento Real",
    "model.step1.desc": "Mergulhamos na sua operação para desenhar a arquitetura correta.",
    "model.step2.title": "Construção Focada",
    "model.step2.desc": "Nossos engenheiros executam o plano com transparência e rigor técnico.",
    "model.step3.title": "Integração Fluida",
    "model.step3.desc": "A tecnologia entra na sua rotina de forma natural e sem fricção.",
    "model.step4.title": "Evolução Constante",
    "model.step4.desc": "Acompanhamos o crescimento, ajustando a rota conforme o negócio escala.",
    "cta.tag": "Próximo Passo",
    "cta.title": "Vamos falar sobre o futuro da sua tecnologia?",
    "cta.btn": "Falar com a Lidtek no WhatsApp",
    "footer.rights": "Lidtek Tecnologia. Todos os direitos reservados."
  },
  en: {
    "nav.manifesto": "What drives us",
    "nav.approach": "Our Approach",
    "nav.model": "How we work",
    "nav.engage": "Talk to Lidtek",
    "hero.tag": "Your technology framework",
    "hero.title1": "Building the ",
    "hero.title1_italic": "solid foundation",
    "hero.title2": "your business demands.",
    "hero.explore": "Explore our structure",
    "problem.tag": "Current Landscape",
    "problem.title": "Software shouldn't be ",
    "problem.title_italic": "fragile",
    "problem.title_end": ".",
    "problem.desc": "Many companies struggle with makeshift solutions that stall growth. Code shouldn't just be a means to an end, but the foundation for your next step.",
    "problem.debt.title": "Unnecessary complexity",
    "problem.debt.desc": "Quick fixes that create slow, expensive problems down the road.",
    "problem.generic.title": "Lack of identity",
    "problem.generic.desc": "Generic systems that don't match the maturity of your operation.",
    "problem.scale.title": "Uncertainty at scale",
    "problem.scale.desc": "The fear that technology won't support your business's success.",
    "manifesto.tag": "Our Vision",
    "manifesto.main": "We don't just deliver code. We act as your ",
    "manifesto.main_bold": "strategic technology arm",
    "manifesto.precision.title": "Grounded, future-focused",
    "manifesto.precision.desc": "We combine governance and intelligence to create systems that don't just work today, but sustain your company for years to come.",
    "manifesto.silent.title": "Peace of mind",
    "manifesto.silent.desc": "Our technology is silent and efficient. It solves problems before you notice, letting you focus on what really matters.",
    "approach.tag": "How we deliver",
    "approach.title": "Technology with purpose and clarity.",
    "approach.desc": "We replace the uncertainty of isolated projects with a continuous, structured partnership.",
    "approach.code.title": "Real Engineering",
    "approach.code.desc": "Clean, secure code built to last. No shortcuts that compromise the future.",
    "approach.data.title": "Intelligent Data",
    "approach.data.desc": "We structure your information so it works in favor of your decisions.",
    "approach.security.title": "Security & Governance",
    "approach.security.desc": "We protect what's most valuable: your business's continuity and trust.",
    "approach.perf.title": "Practical Efficiency",
    "approach.perf.desc": "Fast, fluid systems that respect your user's and team's time.",
    "model.tag": "Planned path",
    "model.title": "A direct process without noise.",
    "model.step1.title": "Real Understanding",
    "model.step1.desc": "We dive into your operation to design the right architecture.",
    "model.step2.title": "Focused Build",
    "model.step2.desc": "Our engineers execute the plan with transparency and technical rigor.",
    "model.step3.title": "Fluid Integration",
    "model.step3.desc": "Technology enters your routine naturally and without friction.",
    "model.step4.title": "Constant Evolution",
    "model.step4.desc": "We follow your growth, adjusting the path as the business scales.",
    "cta.tag": "Next Step",
    "cta.title": "Let's talk about the future of your technology?",
    "cta.btn": "Message Lidtek on WhatsApp",
    "footer.rights": "Lidtek Technology. All rights reserved."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const isPortuguese = browserLang === "pt";
    setLanguage(isPortuguese ? "pt" : "en");
  }, []);

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
