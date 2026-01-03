
import React, { useState } from 'react';
import { BookOpen, Download, CheckCircle, ArrowRight, Lock } from 'lucide-react';
import { usePageContent } from '../contexts/PageContentContext';

export const LeadMagnet: React.FC = () => {
  const [isConverted, setIsConverted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { content } = usePageContent();
  const { ebook } = content;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsConverted(true);
    }, 1500);
  };

  // Função para renderizar o título mantendo a posição da palavra-chave
  const renderTitle = () => {
    if (!ebook.highlight || !ebook.title.includes(ebook.highlight)) {
      return ebook.title;
    }

    const parts = ebook.title.split(ebook.highlight);
    return (
      <>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <span className="text-brand-red">{ebook.highlight}</span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <section id="ebook" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-brand-red/20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 skew-x-12 transform origin-right"></div>
          
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/20 text-brand-red rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                <BookOpen className="w-4 h-4" />
                Material Exclusivo Rudy Endo
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {renderTitle()}
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {ebook.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {ebook.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 bg-slate-800/50 p-12 lg:p-20 flex flex-col justify-center relative z-10 backdrop-blur-sm border-l border-white/5">
              {!isConverted ? (
                <div className="max-w-md mx-auto w-full">
                  <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Acesso Imediato</h3>
                    <p className="text-slate-400">Garanta sua cópia digital gratuita.</p>
                  </div>
                  
                  <form onSubmit={handleDownload} className="space-y-5">
                    <div>
                      <input required type="text" placeholder="Nome Completo" className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all" />
                    </div>
                    <div>
                      <input required type="email" placeholder="Seu Melhor E-mail" className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all" />
                    </div>
                    <button type="submit" disabled={loading} className="w-full py-5 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-brown transition-all flex items-center justify-center gap-3 shadow-xl disabled:opacity-70">
                      {loading ? <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <><span>Baixar Ebook Rudy Endo</span><Download className="w-5 h-5" /></>}
                    </button>
                    <p className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-2 uppercase tracking-tighter mt-4">
                      <Lock className="w-3 h-3" /> Respeitamos a sua privacidade.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center animate-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-brand-red" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Material Enviado!</h3>
                  <p className="text-slate-400 mb-8">Sua jornada para uma gestão mais segura começou.</p>
                  <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="w-full flex items-center justify-center gap-2 text-brand-red font-bold hover:underline py-4">Agendar conversa com Dr. Rudy Endo <ArrowRight className="w-4 h-4" /></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
