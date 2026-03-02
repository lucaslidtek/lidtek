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
    "hero.tag": "Para empresas em crescimento",
    "hero.title1": "Sua empresa já tem ",
    "hero.title1_italic": "tecnologia",
    "hero.title2": ". Mas ela tem direção?",
    "hero.desc": "Tecnologia sem direção vira custo. Com estrutura, vira vantagem competitiva.",
    "hero.explore": "Conhecer a estrutura",
    "problem.tag": "O diagnóstico",
    "problem.title": "Tecnologia não deveria ",
    "problem.title_italic": "limitar",
    "problem.title_end": " o seu crescimento.",
    "problem.desc": "Muitas empresas crescem mais rápido do que a estrutura tecnológica consegue acompanhar. O que antes funcionava, hoje começa a travar decisões, pessoas e expansão.",
    "problem.debt.title": "O problema invisível",
    "problem.debt.desc": "Sistemas sem arquitetura clara geram retrabalho, lentidão e dependência constante de ajustes.",
    "problem.generic.title": "A consequência",
    "problem.generic.desc": "A tecnologia passa a consumir energia da operação, em vez de impulsionar resultados.",
    "problem.scale.title": "O que empresas maduras fazem diferente",
    "problem.scale.desc": "Tratam tecnologia como área estratégica — com método, direção e responsabilidade contínua.",
    "problem.solution.title": "O modelo Lidtek",
    "problem.solution.desc": "Substituímos improviso por estrutura. Assumimos sua tecnologia como departamento, não como projeto.",
    "manifesto.tag": "Nossa postura",
    "manifesto.main": "Não atuamos como fornecedores.",
    "manifesto.main_bold": "Assumimos como departamento.",
    "manifesto.desc": "Tecnologia não é um projeto isolado. É uma área que precisa de direção, responsabilidade e continuidade.",
    "manifesto.precision.title": "Estrutura antes de código",
    "manifesto.precision.desc": "Antes de desenvolver qualquer solução, estruturamos decisões. Sem base sólida, crescimento vira improviso.",
    "manifesto.silent.title": "Tecnologia que não aparece",
    "manifesto.silent.desc": "A melhor tecnologia é aquela que simplesmente funciona. Sem ruído. Sem surpresa. Sem dependência.",
    "manifesto.active.title": "Responsabilidade contínua",
    "manifesto.active.desc": "Não entregamos e desaparecemos. Assumimos a evolução da sua operação como compromisso permanente.",
    "manifesto.section_quote": "Tecnologia deve sustentar o negócio. Nunca competir com ele.",
    "approach.tag": "Como entregamos",
    "approach.title": "Tecnologia com propósito. Execução com responsabilidade.",
    "approach.desc": "Não vendemos projetos isolados. Construímos uma base tecnológica que sustenta decisões, crescimento e escala.",
    "approach.code.title": "Engenharia que sustenta o longo prazo",
    "approach.code.desc": "Desenvolvemos com clareza, organização e visão de continuidade. Nada é feito apenas para funcionar hoje.",
    "approach.data.title": "Informação que orienta decisões",
    "approach.data.desc": "Organizamos sistemas e dados para que sua operação tenha visibilidade e controle.",
    "approach.security.title": "Segurança que protege o crescimento",
    "approach.security.desc": "Tecnologia precisa ser confiável. Sua operação não pode depender de soluções frágeis.",
    "approach.perf.title": "Eficiência que respeita o seu tempo",
    "approach.perf.desc": "Processos fluem. Sistemas respondem. Equipes trabalham com menos ruído e mais foco.",
    "model.tag": "Caminho planejado",
    "model.method": "Nosso método",
    "model.title": "Tecnologia exige estrutura.",
    "model.step1.title": "I — Entendimento Real",
    "model.step1.desc": "Entramos na sua operação antes de propor qualquer solução.",
    "model.step2.title": "D — Direção Definida",
    "model.step2.desc": "Arquitetura e prioridades claras antes de executar.",
    "model.step3.title": "E — Execução Focada",
    "model.step3.desc": "Construção com transparência e responsabilidade.",
    "model.step4.title": "A — Ajuste Contínuo",
    "model.step4.desc": "Acompanhamos o crescimento e ajustamos a rota.",
    "model.step5.title": "L — Liderança Ativa",
    "model.step5.desc": "Assumimos responsabilidade real pela sua tecnologia.",
    "cta.tag": "Próximo passo",
    "cta.title": "Se sua empresa está crescendo, sua tecnologia precisa acompanhar.",
    "cta.desc": "A diferença entre continuar ajustando sistemas ou estruturar uma base sólida para escalar é uma decisão estratégica. Estamos prontos para assumir essa responsabilidade com você.",
    "cta.btn": "Falar com a Lidtek",
    "cta.footer": "Escalando o futuro de empresas que constroem o amanhã.",
    "operations.tag": "Governança & Estrutura",
    "operations.title": "Maturidade operacional embutida no processo.",
    "operations.desc": "Não entregamos apenas tecnologia. Entregamos organização, previsibilidade e responsabilidade contínua.",
    "operations.ind1.title": "Metas claras, prioridades definidas e acompanhamento constante.",
    "operations.ind1.value": "Controle",
    "operations.ind2.title": "Planejamento contínuo com visão de curto, médio e longo prazo.",
    "operations.ind2.value": "Processo",
    "operations.ind3.title": "Indicadores simples e objetivos para saber onde estamos e para onde vamos.",
    "operations.ind3.value": "Clareza",
    "operations.ind4.title": "Documentação organizada e decisões registradas. Nada depende da memória de alguém.",
    "operations.ind4.value": "Auditoria",
    "ideal.tag": "Perfil de parceria",
    "ideal.title1": "A Lidtek é para empresas que cresceram.",
    "ideal.title2": "E sabem que estrutura agora é prioridade.",
    "ideal.desc": "Não somos uma fábrica de software comum. Atuamos como departamento para empresas que levam tecnologia a sério.",
    "ideal.pro.title": "É para você se:",
    "ideal.pro.item1": "Está crescendo e sente que sua tecnologia precisa acompanhar",
    "ideal.pro.item2": "Quer previsibilidade em vez de improviso",
    "ideal.pro.item3": "Enxerga tecnologia como base estratégica, não apenas suporte",
    "ideal.pro.item4": "Valoriza clareza, organização e responsabilidade contínua",
    "ideal.con.title": "Talvez não seja o momento se:",
    "ideal.con.item1": "Busca apenas um orçamento pontual",
    "ideal.con.item2": "Quer apenas executar uma ideia isolada",
    "ideal.con.item3": "Trata tecnologia como custo, não como investimento",
    "ideal.con.item4": "Prefere decisões rápidas sem estrutura",
    "ideal.con.footer": "Preferimos ser transparentes agora do que entregar menos do que o seu negócio realmente precisa.",
    "footer.rights": "Estrutura para empresas que crescem.",
    "footer.menu": "Menu",
    "footer.social": "Social",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Serviço",
    "footer.desc": "Atuamos como departamento de tecnologia para empresas em crescimento. Estrutura, direção e responsabilidade contínua."
  },
  en: {
    "nav.manifesto": "What drives us",
    "nav.approach": "Our Approach",
    "nav.model": "How we work",
    "nav.engage": "Talk to Lidtek",
    "hero.tag": "For growing companies",
    "hero.title1": "Your company already has ",
    "hero.title1_italic": "technology",
    "hero.title2": ". But does it have direction?",
    "hero.desc": "Technology without direction is a cost. With structure, it's a competitive advantage.",
    "hero.explore": "Explore our structure",
    "problem.tag": "The Diagnosis",
    "problem.title": "Technology shouldn't ",
    "problem.title_italic": "stall",
    "problem.title_end": " your growth.",
    "problem.desc": "Many companies grow faster than their technological framework can handle. What worked yesterday is now holding back decisions, people, and expansion.",
    "problem.debt.title": "The Hidden Problem",
    "problem.debt.desc": "Systems without clear architecture generate rework, slow down, and constant dependency on fixes.",
    "problem.generic.title": "The Consequence",
    "problem.generic.desc": "Technology starts to drain operational energy instead of driving results.",
    "problem.scale.title": "What Mature Companies Do Differently",
    "problem.scale.desc": "They treat technology as a strategic area — with method, direction, and continuous accountability.",
    "problem.solution.title": "The Lidtek Model",
    "problem.solution.desc": "We replace improvisation with structure. We take over your technology as a department, not a project.",
    "manifesto.tag": "Our Posture",
    "manifesto.main": "We don’t act as vendors.",
    "manifesto.main_bold": "We take over as your department.",
    "manifesto.desc": "Technology isn't an isolated project. It's a key area that requires direction, accountability, and continuity.",
    "manifesto.precision.title": "Structure Before Code",
    "manifesto.precision.desc": "Before developing any solution, we structure decisions. Without a solid foundation, growth becomes improvisation.",
    "manifesto.silent.title": "Invisible Technology",
    "manifesto.silent.desc": "The best technology is the one that just works. No noise. No surprises. No dependency.",
    "manifesto.active.title": "Continuous Accountability",
    "manifesto.active.desc": "We don’t just deliver and disappear. We assume the evolution of your operation as a permanent commitment.",
    "manifesto.section_quote": "Technology should sustain the business. Never compete with it.",
    "approach.tag": "How We Deliver",
    "approach.title": "Technology with purpose. Execution with accountability.",
    "approach.desc": "We don't sell isolated projects. We build a technological foundation that supports decisions, growth, and scale.",
    "approach.code.title": "Long-Term Engineering",
    "approach.code.desc": "We develop with clarity, organization, and a vision of continuity. Nothing is built just to work for today.",
    "approach.data.title": "Decision-Oriented Information",
    "approach.data.desc": "We organize systems and data so your operation has visibility and control.",
    "approach.security.title": "Growth-Protecting Security",
    "approach.security.desc": "Technology must be reliable. Your operation cannot depend on fragile solutions.",
    "approach.perf.title": "Time-Respecting Efficiency",
    "approach.perf.desc": "Processes flow. Systems respond. Teams work with less noise and more focus.",
    "model.tag": "Planned Path",
    "model.method": "Our Method",
    "model.title": "Technology requires structure.",
    "model.step1.title": "I — Real Understanding",
    "model.step1.desc": "We dive into your operation before proposing any solution.",
    "model.step2.title": "D — Defined Direction",
    "model.step2.desc": "Clear architecture and priorities before execution.",
    "model.step3.title": "E — Focused Execution",
    "model.step3.desc": "Build with transparency and accountability.",
    "model.step4.title": "A — Continuous Adjustment",
    "model.step4.desc": "We monitor growth and adjust the path accordingly.",
    "model.step5.title": "L — Active Leadership",
    "model.step5.desc": "We take real responsibility for your technology.",
    "cta.tag": "Next Step",
    "cta.title": "If your company is growing, your technology needs to keep up.",
    "cta.desc": "The difference between continuing to patch systems or building a solid foundation to scale is a strategic decision. We are ready to take on that responsibility with you.",
    "cta.btn": "Talk to Lidtek",
    "cta.footer": "Scaling the future of companies that build tomorrow.",
    "operations.tag": "Governance & Structure",
    "operations.title": "Operational maturity built into the process.",
    "operations.desc": "We don’t just deliver technology. We deliver organization, predictability, and continuous accountability.",
    "operations.ind1.title": "Clear goals, defined priorities, and constant monitoring.",
    "operations.ind1.value": "Control",
    "operations.ind2.title": "Continuous planning with short, medium, and long-term vision.",
    "operations.ind2.value": "Process",
    "operations.ind3.title": "Simple and objective indicators to know where we are and where we're going.",
    "operations.ind3.value": "Clarity",
    "operations.ind4.title": "Organized documentation and recorded decisions. Nothing depends on someone's memory.",
    "operations.ind4.value": "Audit",
    "ideal.tag": "Partnership Profile",
    "ideal.title1": "Lidtek is for companies that have grown.",
    "ideal.title2": "And know that structure is now a priority.",
    "ideal.desc": "We are not a standard software factory. We act as a department for companies that take technology seriously.",
    "ideal.pro.title": "We're a fit if:",
    "ideal.pro.item1": "You're growing and feel your technology must keep up",
    "ideal.pro.item2": "You want predictability instead of improvisation",
    "ideal.pro.item3": "You see technology as a strategic foundation, not just support",
    "ideal.pro.item4": "You value clarity, organization, and continuous accountability",
    "ideal.con.title": "It might not be the right time if:",
    "ideal.con.item1": "You're looking for just a one-off quote",
    "ideal.con.item2": "You just want to execute an isolated idea",
    "ideal.con.item3": "You treat technology as a cost, not an investment",
    "ideal.con.item4": "You prefer quick decisions without structure",
    "ideal.con.footer": "We prefer to be transparent now rather than deliver less than your business truly needs.",
    "footer.rights": "Structure for companies that grow.",
    "footer.menu": "Menu",
    "footer.social": "Social",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.desc": "We act as a technology department for growing companies. Structure, direction, and continuous accountability."
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
