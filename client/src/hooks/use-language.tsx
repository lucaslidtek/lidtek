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
    "hero.tag": "Para empresas que já crescem",
    "hero.title1": "Sua empresa já tem ",
    "hero.title1_italic": "tecnologia",
    "hero.title2": ". A questão é: ela tem direção?",
    "hero.explore": "Conheça nossa estrutura",
    "problem.tag": "O diagnóstico",
    "problem.title": "Software não deveria ",
    "problem.title_italic": "travar",
    "problem.title_end": " o seu crescimento.",
    "problem.desc": "Muitas empresas sofrem com soluções improvisadas que funcionavam ontem, mas não suportam o amanhã. A tecnologia passa a ditar a velocidade do negócio, e não o contrário.",
    "problem.debt.title": "O Problema Oculto",
    "problem.debt.desc": "Sistemas que crescem sem arquitetura, gerando dívida técnica e lentidão operacional.",
    "problem.generic.title": "A Consequência",
    "problem.generic.desc": "A tecnologia vira um gargalo. A equipe perde tempo contornando falhas em vez de inovar.",
    "problem.scale.title": "A Realidade Madura",
    "problem.scale.desc": "Sua operação exige previsibilidade, segurança e sistemas que escalam com o negócio.",
    "problem.solution.title": "O Modelo Lidtek",
    "problem.solution.desc": "Substituímos o caos por engenharia. Uma transição segura para a maturidade tecnológica.",
    "manifesto.tag": "Nossa Postura",
    "manifesto.main": "Não somos apenas uma fábrica de software. Assumimos a posição de seu ",
    "manifesto.main_bold": "departamento de tecnologia premium",
    "manifesto.precision.title": "Estrutura e Direção",
    "manifesto.precision.desc": "Mais que código, entregamos governança, inteligência e estabilidade para sustentar sua operação pelos próximos anos.",
    "manifesto.silent.title": "Segurança Invisível",
    "manifesto.silent.desc": "A melhor tecnologia é aquela que você não percebe. Ela apenas funciona, permitindo que você foque inteiramente no negócio.",
    "manifesto.section_quote": "Tecnologia como fundação, não como barreira.",
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
    "model.subtitle": "Tecnologia exige método. Assumimos com estrutura.",
    "model.step1.title": "Entendimento Real",
    "model.step1.desc": "Mergulhamos na sua operação para desenhar a arquitetura correta.",
    "model.step2.title": "Construção Focada",
    "model.step2.desc": "Nossos engenheiros executam o plano com transparência e rigor técnico.",
    "model.step3.title": "Integração Fluida",
    "model.step3.desc": "A tecnologia entra na sua rotina de forma natural e sem fricção.",
    "model.step4.title": "Evolução Constante",
    "model.step4.desc": "Acompanhamos o crescimento, ajustando a rota conforme o negócio escala.",
    "model.step5.title": "Liderança Ativa",
    "model.step5.desc": "Assumimos responsabilidade real pelo seu ecossistema tecnológico.",
    "cta.tag": "Convite Responsável",
    "cta.title": "Se sua empresa está crescendo, sua tecnologia precisa acompanhar.",
    "cta.btn": "Falar com a Lidtek",
    "footer.rights": "Lidtek Tecnologia. Todos os direitos reservados."
  },
  en: {
    "nav.manifesto": "What drives us",
    "nav.approach": "Our Approach",
    "nav.model": "How we work",
    "nav.engage": "Talk to Lidtek",
    "hero.tag": "For growing companies",
    "hero.title1": "Your company already has ",
    "hero.title1_italic": "technology",
    "hero.title2": ". The question is: does it have direction?",
    "hero.explore": "Explore our structure",
    "problem.tag": "The Diagnosis",
    "problem.title": "Software shouldn't ",
    "problem.title_italic": "stall",
    "problem.title_end": " your growth.",
    "problem.desc": "Many companies struggle with makeshift solutions that worked yesterday, but won't support tomorrow. Technology starts to dictate the business speed, instead of the other way around.",
    "problem.debt.title": "The Hidden Problem",
    "problem.debt.desc": "Systems growing without architecture, generating technical debt and operational slowdown.",
    "problem.generic.title": "The Consequence",
    "problem.generic.desc": "Technology becomes a bottleneck. The team spends time working around flaws instead of innovating.",
    "problem.scale.title": "The Mature Reality",
    "problem.scale.desc": "Your operation demands predictability, security, and systems that scale with your success.",
    "problem.solution.title": "The Lidtek Model",
    "problem.solution.desc": "We replace chaos with engineering. A safe transition to technological maturity.",
    "manifesto.tag": "Our Posture",
    "manifesto.main": "We are not just a software factory. We act as your ",
    "manifesto.main_bold": "premium technology department",
    "manifesto.precision.title": "Structure and Direction",
    "manifesto.precision.desc": "More than code, we deliver governance, intelligence, and stability to sustain your operation for years to come.",
    "manifesto.silent.title": "Invisible Security",
    "manifesto.silent.desc": "The best technology is the one you don't notice. It just works, allowing you to focus entirely on your business.",
    "manifesto.section_quote": "Technology as a foundation, not a barrier.",
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
    "model.subtitle": "Technology requires method. We take over with structure.",
    "model.step1.title": "Real Understanding",
    "model.step1.desc": "We dive into your operation to design the right architecture.",
    "model.step2.title": "Focused Build",
    "model.step2.desc": "Our engineers execute the plan with transparency and technical rigor.",
    "model.step3.title": "Fluid Integration",
    "model.step3.desc": "Technology enters your routine naturally and without friction.",
    "model.step4.title": "Constant Evolution",
    "model.step4.desc": "We monitor growth, adjusting the path as the business scales.",
    "model.step5.title": "Active Leadership",
    "model.step5_desc": "We take real responsibility for your technological ecosystem.",
    "cta.tag": "Responsible Invitation",
    "cta.title": "If your company is growing, your technology needs to keep up.",
    "cta.btn": "Talk to Lidtek",
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
