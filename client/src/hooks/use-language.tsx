import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "nav.manifesto": "Sobre Nós",
    "nav.approach": "Como Atuamos",
    "nav.model": "Metodologia",
    "nav.engage": "Contatar Rafael",
    "hero.tag": "Departamento de Tecnologia",
    "hero.title1": "Excelência em",
    "hero.title1_italic": "engenharia",
    "hero.title2": "para marcas dominantes.",
    "hero.explore": "Explorar Estrutura",
    "problem.tag": "Realidade de Mercado",
    "problem.title": "A era do software ",
    "problem.title_italic": "frágil",
    "problem.title_end": " acabou.",
    "problem.desc": "A maioria das agências entrega templates genéricos e código espaguete que sucumbem sob pressão real. Elas constroem para o lançamento, não para o legado.",
    "problem.debt.title": "Dívida Técnica",
    "problem.debt.desc": "Acumulada ao apressar recursos sem planejamento arquitetônico.",
    "problem.generic.title": "Estética Genérica",
    "problem.generic.desc": "Templates que diluem a autoridade da marca e falham em diferenciar.",
    "problem.scale.title": "Falhas de Escala",
    "problem.scale.desc": "Sistemas que travam exatamente quando a demanda do mercado atinge o pico.",
    "manifesto.tag": "O Manifesto",
    "manifesto.main": "Não somos uma software house. Não somos uma agência. Somos o seu ",
    "manifesto.main_bold": "Departamento de Tecnologia",
    "manifesto.precision.title": "Precisão sobre velocidade",
    "manifesto.precision.desc": "Enquanto outros correm para construir MVPs frágeis, nós construímos fundações arquitetônicas robustas projetadas para escala, segurança e domínio de mercado.",
    "manifesto.silent.title": "Domínio silencioso",
    "manifesto.silent.desc": "Nossa tecnologia opera de forma invisível, mas poderosa, elevando sua marca sem chamar a atenção para o maquinário.",
    "approach.tag": "Proposta Estrutural",
    "approach.title": "Construindo sistemas, não apenas recursos.",
    "approach.desc": "Abandonamos o modelo de agência fragmentada para uma parceria tecnológica unificada e profundamente integrada.",
    "approach.code.title": "Código Estrutural",
    "approach.code.desc": "Codebases tipadas e altamente modulares. Sem espaguete, sem acúmulo de dívida técnica.",
    "approach.data.title": "Dados Escaláveis",
    "approach.data.desc": "Arquiteturas de banco de dados construídas para lidar com volume sem comprometer a latência.",
    "approach.security.title": "Segurança Enterprise",
    "approach.security.desc": "Segurança por design, não como um pensamento posterior. Protegendo sua propriedade intelectual.",
    "approach.perf.title": "Foco em Performance",
    "approach.perf.desc": "Execução ultrarrápida. Velocidades de renderização que mantêm os usuários engajados e convertem.",
    "model.tag": "Modelo Operacional",
    "model.title": "Como nos integramos à sua marca.",
    "model.step1.title": "Auditoria e Arquitetura",
    "model.step1.desc": "Mapeamos seus requisitos para uma infraestrutura escalável.",
    "model.step2.title": "Execução Silenciosa",
    "model.step2.desc": "Nossos engenheiros constroem os sistemas principais com precisão militar.",
    "model.step3.title": "Integração",
    "model.step3.desc": "Implantação perfeita em seu ecossistema operacional.",
    "model.step4.title": "Domínio Contínuo",
    "model.step4.desc": "Otimização contínua e escalonamento estratégico da tecnologia.",
    "cta.tag": "Filtro de Público",
    "cta.title": "Para quem exige supremacia técnica.",
    "cta.btn": "Iniciar Diálogo via WhatsApp",
    "footer.rights": "Todos os direitos reservados."
  },
  en: {
    "nav.manifesto": "About Us",
    "nav.approach": "Our Approach",
    "nav.model": "Methodology",
    "nav.engage": "Contact Rafael",
    "hero.tag": "Technology Department",
    "hero.title1": "Engineering ",
    "hero.title1_italic": "excellence",
    "hero.title2": "for dominant brands.",
    "hero.explore": "Explore Structure",
    "problem.tag": "Market Reality",
    "problem.title": "The era of ",
    "problem.title_italic": "fragile",
    "problem.title_end": " software is over.",
    "problem.desc": "Most agencies deliver generic templates and spaghetti code that buckle under real-world pressure. They build for the launch, not for the legacy.",
    "problem.debt.title": "Technical Debt",
    "problem.debt.desc": "Accumulated by rushing features without architectural planning.",
    "problem.generic.title": "Generic Aesthetics",
    "problem.generic.desc": "Templates that dilute brand authority and fail to differentiate.",
    "problem.scale.title": "Scalability Failures",
    "problem.scale.desc": "Systems that crash exactly when market demand peaks.",
    "manifesto.tag": "The Manifesto",
    "manifesto.main": "We are not a software house. We are not an agency. We are your dedicated ",
    "manifesto.main_bold": "Technology Department",
    "manifesto.precision.title": "Precision over speed",
    "manifesto.precision.desc": "While others rush to build fragile MVPs, we construct robust architectural foundations designed for scale, security, and market dominance.",
    "manifesto.silent.title": "Silent dominance",
    "manifesto.silent.desc": "Our technology operates invisibly yet powerfully behind the scenes, elevating your brand without drawing attention to the machinery.",
    "approach.tag": "Structural Proposal",
    "approach.title": "Building systems, not just features.",
    "approach.desc": "We abandon the fragmented agency model for a unified, deeply integrated technological partnership.",
    "approach.code.title": "Structural Code",
    "approach.code.desc": "Type-safe, highly modular codebases. No spaghetti, no technical debt accumulation.",
    "approach.data.title": "Scalable Data",
    "approach.data.desc": "Database architectures built to handle volume without compromising latency.",
    "approach.security.title": "Enterprise Security",
    "approach.security.desc": "Security by design, not as an afterthought. Protecting your core intellectual property.",
    "approach.perf.title": "Performance Focus",
    "approach.perf.desc": "Lightning-fast execution. Rendering speeds that keep users engaged and convert.",
    "model.tag": "Operating Model",
    "model.title": "How we integrate with your brand.",
    "model.step1.title": "Audit & Architecture",
    "model.step1.desc": "We map your requirements to a scalable infrastructure.",
    "model.step2.title": "Silent Execution",
    "model.step2.desc": "Our engineers build the core systems with military precision.",
    "model.step3.title": "Integration",
    "model.step3.desc": "Seamless deployment into your operational ecosystem.",
    "model.step4.title": "Continuous Dominance",
    "model.step4.desc": "Ongoing optimization and strategic scaling of the technology.",
    "cta.tag": "Audience Filter",
    "cta.title": "For those who demand technical supremacy.",
    "cta.btn": "Start WhatsApp Dialogue",
    "footer.rights": "All rights reserved."
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
