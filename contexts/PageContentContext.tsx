
import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageContent } from '../types';

const defaultContent: PageContent = {
  branding: {
    logoUrl: "", // Vazio por padrão para usar a logo SVG original
    showDefaultLogo: true
  },
  hero: {
    title: "Assessoria de Elite para Síndicos",
    highlight: "Elite",
    subtitle: "Segurança jurídica inabalável para quem lidera. Rudy Endo Advocacia: Onde a tradição encontra a estratégia moderna.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
    yearsExperience: "10 ANOS"
  },
  about: {
    title: "Liderança Jurídica para Condomínios",
    description: "O Dr. Rudy Endo consolidou sua carreira em uma década de desafios superados. Sua advocacia não se limita a processos; trata-se de viabilizar gestões eficientes através da segurança legal absoluta.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800",
    stats: "Na Vanguarda Condominial",
    items: [
      "Atendimento Personalizado e Direto",
      "Experiência em Conflitos de Alta Complexidade",
      "Especialista em Recuperação de Crédito Condominial",
      "Consultoria Baseada em Prevenção de Riscos",
      "Atualização Constante em Direito Imobiliário"
    ],
    quote: "Nossa missão na Rudy Endo Advocacia é ser o pilar de sustentação para síndicos que buscam uma gestão inabalável."
  },
  contact: {
    title: "Fale com o Especialista",
    description: "Agende uma consultoria para o seu condomínio e descubra como uma assessoria jurídica de alto nível pode transformar sua gestão.",
    phone: "(11) 99999-9999",
    email: "rudy@rudyendo.adv.br",
    address: "São Paulo, SP"
  },
  ebook: {
    title: "Os 5 Maiores Desafios Jurídicos em Condomínios",
    highlight: "Jurídicos",
    description: "Um guia estratégico assinado pelo Dr. Rudy Endo. Saiba como mitigar riscos, reduzir a inadimplência e blindar sua gestão contra nulidades.",
    items: [
      "Checklist para Assembleias Seguras",
      "Guia de Cobrança Pós-Pandemia",
      "Responsabilidade Civil: O que evitar",
      "Gestão de Obras: O Risco da NBR 16.280"
    ]
  }
};

interface ContextType {
  content: PageContent;
  updateContent: (newContent: PageContent) => void;
  resetToDefault: () => void;
}

const PageContentContext = createContext<ContextType | undefined>(undefined);

export const PageContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<PageContent>(() => {
    const saved = localStorage.getItem('rudy_endo_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('rudy_endo_content', JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: PageContent) => setContent(newContent);
  const resetToDefault = () => setContent(defaultContent);

  return (
    <PageContentContext.Provider value={{ content, updateContent, resetToDefault }}>
      {children}
    </PageContentContext.Provider>
  );
};

export const usePageContent = () => {
  const context = useContext(PageContentContext);
  if (!context) throw new Error('usePageContent must be used within provider');
  return context;
};
