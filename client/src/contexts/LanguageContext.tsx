import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    'nav.manifesto': 'Manifesto',
    'nav.approach': 'Abordagem',
    'nav.model': 'Modelo',
    'nav.engage': 'Engajar',
    'hero.tag': 'Departamento de Tecnologia',
    'hero.title1': 'Excelência em',
    'hero.title1_italic': 'engenharia',
    'hero.title2': 'para marcas dominantes.',
    'hero.cta': 'Explorar Estrutura',
    'problem.tag': 'Realidade de Mercado',
    'problem.title': 'A era do software',
    'problem.title_italic': 'frágil',
    'problem.title_end': 'acabou.',
    'problem.desc': 'A maioria das agências entrega templates genéricos e códigos confusos que cedem sob pressão real. Eles constroem para o lançamento, não para o legado.',
    'problem.item1_title': 'Dívida Técnica',
    'problem.item1_desc': 'Acumulada pela pressa em lançar funcionalidades sem planejamento arquitetônico.',
    'problem.item2_title': 'Estética Genérica',
    'problem.item2_desc': 'Templates que diluem a autoridade da marca e falham em diferenciar.',
    'problem.item3_title': 'Falhas de Escalabilidade',
    'problem.item3_desc': 'Sistemas que travam exatamente quando a demanda do mercado atinge o pico.',
    'manifesto.tag': 'O Manifesto',
    'manifesto.main': 'Não somos uma software house. Não somos uma agência. Somos o seu dedicado',
    'manifesto.main_bold': 'Departamento de Tecnologia',
    'manifesto.item1_title': 'Precisão sobre velocidade',
    'manifesto.item1_desc': 'Enquanto outros correm para construir MVPs frágeis, nós construímos bases arquitetônicas robustas projetadas para escala, segurança e domínio de mercado.',
    'manifesto.item2_title': 'Domínio silencioso',
    'manifesto.item2_desc': 'Nossa tecnologia opera de forma invisível, mas poderosa nos bastidores, elevando sua marca sem chamar atenção para a maquinaria.',
    'approach.tag': 'Proposta Estrutural',
    'approach.title': 'Construindo sistemas, não apenas funcionalidades.',
    'approach.desc': 'Abandonamos o modelo de agência fragmentado por uma parceria tecnológica unificada e profundamente integrada.',
    'approach.feat1_title': 'Código Estrutural',
    'approach.feat1_desc': 'Bases de código seguras e modulares. Sem acúmulo de dívida técnica.',
    'approach.feat2_title': 'Dados Escaláveis',
    'approach.feat2_desc': 'Arquiteturas de banco de dados construídas para lidar com volume sem comprometer a latência.',
    'approach.feat3_title': 'Segurança Corporativa',
    'approach.feat3_desc': 'Segurança por design, protegendo sua propriedade intelectual principal.',
    'approach.feat4_title': 'Foco em Performance',
    'approach.feat4_desc': 'Execução ultrarrápida. Velocidades de renderização que mantêm os usuários engajados.',
    'model.tag': 'Modelo Operacional',
    'model.title': 'Como nos integramos à sua marca.',
    'model.step1_title': 'Auditoria & Arquitetura',
    'model.step1_desc': 'Mapeamos seus requisitos para uma infraestrutura escalável.',
    'model.step2_title': 'Execução Silenciosa',
    'model.step2_desc': 'Nossos engenheiros constroem os sistemas centrais com precisão militar.',
    'model.step3_title': 'Integração',
    'model.step3_desc': 'Implantação contínua em seu ecossistema operacional.',
    'model.step4_title': 'Domínio Contínuo',
    'model.step4_desc': 'Otimização contínua e escalonamento estratégico da tecnologia.',
    'cta.tag': 'Filtro de Público',
    'cta.title': 'Para quem exige supremacia técnica.',
    'cta.button': 'Iniciar Diálogo',
    'footer.rights': 'Todos os direitos reservados.'
  },
  en: {
    'nav.manifesto': 'Manifesto',
    'nav.approach': 'Approach',
    'nav.model': 'Model',
    'nav.engage': 'Engage',
    'hero.tag': 'Technology Department',
    'hero.title1': 'Engineering',
    'hero.title1_italic': 'excellence',
    'hero.title2': 'for dominant brands.',
    'hero.cta': 'Explore Structure',
    'problem.tag': 'Market Reality',
    'problem.title': 'The era of',
    'problem.title_italic': 'fragile',
    'problem.title_end': 'software is over.',
    'problem.desc': 'Most agencies deliver generic templates and spaghetti code that buckle under real-world pressure. They build for the launch, not for the legacy.',
    'problem.item1_title': 'Technical Debt',
    'problem.item1_desc': 'Accumulated by rushing features without architectural planning.',
    'problem.item2_title': 'Generic Aesthetics',
    'problem.item2_desc': 'Templates that dilute brand authority and fail to differentiate.',
    'problem.item3_title': 'Scalability Failures',
    'problem.item3_desc': 'Systems that crash exactly when market demand peaks.',
    'manifesto.tag': 'The Manifesto',
    'manifesto.main': 'We are not a software house. We are not an agency. We are your dedicated',
    'manifesto.main_bold': 'Technology Department',
    'manifesto.item1_title': 'Precision over speed',
    'manifesto.item1_desc': 'While others rush to build fragile MVPs, we construct robust architectural foundations designed for scale, security, and market dominance.',
    'manifesto.item2_title': 'Silent dominance',
    'manifesto.item2_desc': 'Our technology operates invisibly yet powerfully behind the scenes, elevating your brand without drawing attention to the machinery.',
    'approach.tag': 'Structural Proposal',
    'approach.title': 'Building systems, not just features.',
    'approach.desc': 'We abandon the fragmented agency model for a unified, deeply integrated technological partnership.',
    'approach.feat1_title': 'Structural Code',
    'approach.feat1_desc': 'Type-safe, highly modular codebases. No technical debt accumulation.',
    'approach.feat2_title': 'Scalable Data',
    'approach.feat2_desc': 'Database architectures built to handle volume without compromising latency.',
    'approach.feat3_title': 'Enterprise Security',
    'approach.feat3_desc': 'Security by design, not as an afterthought. Protecting your core intellectual property.',
    'approach.feat4_title': 'Performance Focus',
    'approach.feat4_desc': 'Lightning-fast execution. Rendering speeds that keep users engaged and convert.',
    'model.tag': 'Operating Model',
    'model.title': 'How we integrate with your brand.',
    'model.step1_title': 'Audit & Architecture',
    'model.step1_desc': 'We map your requirements to a scalable infrastructure.',
    'model.step2_title': 'Silent Execution',
    'model.step2_desc': 'Our engineers build the core systems with military precision.',
    'model.step3_title': 'Integration',
    'model.step3_desc': 'Seamless deployment into your operational ecosystem.',
    'model.step4_title': 'Continuous Dominance',
    'model.step4_desc': 'Ongoing optimization and strategic scaling of the technology.',
    'cta.tag': 'Audience Filter',
    'cta.title': 'For those who demand technical supremacy.',
    'cta.button': 'Initiate Dialogue',
    'footer.rights': 'All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const userLang = navigator.language || (navigator as any).userLanguage;
    if (userLang.startsWith('pt')) {
      setLanguage('pt');
    } else {
      setLanguage('en');
    }
  }, []);

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
