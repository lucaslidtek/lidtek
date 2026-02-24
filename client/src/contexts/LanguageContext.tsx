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
    'nav.operations': 'Operações',
    'nav.ideal': 'Cliente Ideal',
    'nav.engage': 'Falar com a Lidtek',
    'hero.title1': 'Sua empresa já',
    'hero.title1_italic': 'tem tecnologia',
    'hero.title2_part1': 'A questão é:',
    'hero.title2_part2': 'ela tem direção?',
    'hero.cta': 'Falar com a Lidtek',
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
    'manifesto.section_quote': 'Tecnologia não é projeto. É área.',
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
    'model.tag': 'Estrutura de Atuação',
    'model.subtitle': 'Tecnologia exige método. Assumimos com estrutura.',
    'model.step1_title': 'Entendimento Real',
    'model.step1_desc': 'Mergulhamos na sua operação para desenhar a arquitetura correta.',
    'model.step2_title': 'Construção Focada',
    'model.step2_desc': 'Nossos engenheiros executam o plano com transparência e rigor técnico.',
    'model.step3_title': 'Integração Fluida',
    'model.step3_desc': 'A tecnologia entra na sua rotina de forma natural e sem fricção.',
    'model.step4_title': 'Evolução Constante',
    'model.step4_desc': 'Acompanhamos o crescimento, ajustando a rota conforme o negócio escala.',
    'model.step5_title': 'Liderança Ativa',
    'model.step5_desc': 'Assumimos responsabilidade real pelo seu ecossistema tecnológico.',
    'cta.tag': 'Filtro de Público',
    'cta.title': 'Para quem exige supremacia técnica.',
    'cta.btn': 'Falar com a Lidtek',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço'
  },
  en: {
    'nav.manifesto': 'Manifesto',
    'nav.approach': 'Approach',
    'nav.model': 'Model',
    'nav.operations': 'Operations',
    'nav.ideal': 'Ideal Client',
    'nav.engage': 'Talk to Lidtek',
    'hero.tag': 'Technology Department',
    'hero.title1': 'Engineering',
    'hero.title1_italic': 'excellence',
    'hero.title2': 'for dominant brands.',
    'hero.cta': 'Talk to Lidtek',
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
    'manifesto.section_quote': 'Technology is not a project. It is an area.',
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
    'model.tag': 'Acting Structure',
    'model.subtitle': 'Technology requires method. We take over with structure.',
    'model.step1_title': 'Real Understanding',
    'model.step1_desc': 'We dive into your operation to design the correct architecture.',
    'model.step2_title': 'Focused Construction',
    'model.step2_desc': 'Our engineers execute the plan with transparency and technical rigor.',
    'model.step3_title': 'Fluid Integration',
    'model.step3_desc': 'Technology enters your routine naturally and without friction.',
    'model.step4_title': 'Constant Evolution',
    'model.step4_desc': 'We monitor growth, adjusting the path as the business scales.',
    'model.step5_title': 'Active Leadership',
    'model.step5_desc': 'We take real responsibility for your technological ecosystem.',
    'cta.tag': 'Audience Filter',
    'cta.title': 'For those who demand technical supremacy.',
    'cta.btn': 'Talk to Lidtek',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
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
