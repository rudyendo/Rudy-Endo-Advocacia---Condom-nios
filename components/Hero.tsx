
import React from 'react';
import { usePageContent } from '../contexts/PageContentContext';

export const Hero: React.FC = () => {
  const { content } = usePageContent();
  const { hero } = content;

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Função para renderizar o título mantendo a posição da palavra-chave
  const renderTitle = () => {
    if (!hero.highlight || !hero.title.includes(hero.highlight)) {
      return hero.title;
    }

    const parts = hero.title.split(hero.highlight);
    return (
      <>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="text-[#912018]">{hero.highlight}</span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section className="relative h-[100vh] min-h-[700px] flex items-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 z-0">
        <img 
          src={hero.image} 
          alt="Autoridade Jurídica" 
          className="w-full h-full object-cover opacity-20 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 border-l-4 border-[#912018] bg-white/5 backdrop-blur-sm">
             <span className="text-[#912018] font-black text-lg tracking-tighter">{hero.yearsExperience}</span>
             <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">De Experiência Condominial</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.1] mb-8 whitespace-pre-line">
            {renderTitle()}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={scrollToContact}
              className="group px-10 py-5 bg-[#912018] text-white font-bold rounded-sm hover:bg-[#451F19] transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.15em] flex items-center gap-3"
            >
              Falar com Rudy Endo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              onClick={() => document.getElementById('ebook')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-transparent text-white font-bold rounded-sm border border-white/20 hover:bg-white/5 transition-all uppercase tracking-[0.15em]"
            >
              Material Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
