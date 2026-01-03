
import React, { useState } from 'react';
import { Settings, Save, RotateCcw, X, Image as ImageIcon, Type, Phone, BookOpen, Palette, Info } from 'lucide-react';
import { usePageContent } from '../contexts/PageContentContext';

export const AdminPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content, updateContent, resetToDefault } = usePageContent();
  const [activeTab, setActiveTab] = useState<'branding' | 'hero' | 'about' | 'contact' | 'ebook'>('branding');

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-6 z-[60] bg-slate-900 text-white p-3 rounded-full shadow-2xl hover:bg-brand-red transition-all border border-white/10"
        title="Painel de Controle"
      >
        <Settings className="w-6 h-6 animate-spin-slow" />
      </button>
    );
  }

  const handleChange = (section: keyof typeof content, field: string, value: any) => {
    updateContent({
      ...content,
      [section]: {
        ...content[section],
        [field]: value
      }
    });
  };

  const tabs = [
    { id: 'branding', icon: Palette, label: 'Identidade' },
    { id: 'hero', icon: Type, label: 'Hero' },
    { id: 'about', icon: Type, label: 'Sobre' },
    { id: 'ebook', icon: BookOpen, label: 'Ebook' },
    { id: 'contact', icon: Phone, label: 'Contato' },
  ];

  return (
    <div className="fixed inset-y-0 right-0 w-80 md:w-96 bg-slate-950 text-white z-[70] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] border-l border-white/10 flex flex-col animate-in slide-in-from-right">
      <div className="p-6 bg-slate-900 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 text-brand-red" />
          <h2 className="font-bold uppercase tracking-widest text-sm">Painel de Controle</h2>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:text-brand-red"><X className="w-6 h-6" /></button>
      </div>

      <div className="flex bg-slate-900/50 border-b border-white/5 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 min-w-[70px] py-3 text-[10px] font-bold uppercase tracking-tighter border-b-2 transition-all flex flex-col items-center gap-1 ${
              activeTab === tab.id ? 'border-brand-red text-white bg-white/5' : 'border-transparent text-slate-500 hover:text-white'
            }`}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {activeTab === 'branding' && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-brand-red uppercase mb-4 flex items-center gap-2"><Palette className="w-3 h-3"/> Logotipos</h3>
            
            <div className="bg-slate-900 p-5 rounded-xl border border-white/5 space-y-6">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase text-slate-400 font-bold tracking-widest">Opção de Exibição</span>
                <label className="flex items-center gap-3 cursor-pointer p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                  <input 
                    type="checkbox"
                    checked={content.branding.showDefaultLogo}
                    onChange={(e) => handleChange('branding', 'showDefaultLogo', e.target.checked)}
                    className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-brand-red focus:ring-brand-red"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs text-white font-bold uppercase tracking-tighter">Logo SVG Original</span>
                    <span className="text-[9px] text-slate-500 uppercase">Usar a logo com o leão e moldura</span>
                  </div>
                </label>
              </div>
              
              {!content.branding.showDefaultLogo && (
                <div className="animate-in fade-in slide-in-from-top-2">
                  <label className="text-[10px] uppercase text-slate-500 mb-2 block flex items-center gap-1 font-bold">
                    <ImageIcon className="w-3 h-3"/> URL da sua Logo Personalizada
                  </label>
                  <input 
                    type="text"
                    placeholder="https://exemplo.com/sua-logo.png"
                    value={content.branding.logoUrl}
                    onChange={(e) => handleChange('branding', 'logoUrl', e.target.value)}
                    className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 text-xs focus:border-brand-red outline-none text-white shadow-inner"
                  />
                  <div className="mt-3 p-3 bg-brand-red/5 rounded-lg flex gap-2 border border-brand-red/10">
                    <Info className="w-4 h-4 text-brand-red shrink-0" />
                    <p className="text-[9px] text-slate-400 leading-normal uppercase font-medium">
                      Recomendado: PNG Transparente de alta resolução. Esta logo será usada no topo e rodapé.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'hero' && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-brand-red uppercase mb-4 flex items-center gap-2"><Type className="w-3 h-3"/> Títulos e Destaques</h3>
            
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg flex gap-3 mb-6">
               <Info className="w-5 h-5 text-blue-400 shrink-0" />
               <p className="text-[10px] text-blue-200 leading-tight">
                 O sistema destacará em vermelho a palavra que você digitar no campo "Palavra-Chave". Ela deve estar presente no texto do "Título Principal".
               </p>
            </div>

            <div>
              <label className="text-[10px] uppercase text-slate-500 mb-1 block font-bold tracking-widest">Título Principal</label>
              <textarea 
                value={content.hero.title}
                onChange={(e) => handleChange('hero', 'title', e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-sm h-28 focus:border-brand-red outline-none shadow-inner"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-brand-red mb-1 block font-bold tracking-widest">Palavra-Chave para Destaque</label>
              <input 
                placeholder="Ex: Elite"
                value={content.hero.highlight}
                onChange={(e) => handleChange('hero', 'highlight', e.target.value)}
                className="w-full bg-slate-900 border border-brand-red/30 rounded-lg p-3 text-sm focus:border-brand-red outline-none shadow-inner"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-slate-500 mb-1 block font-bold tracking-widest">Subtítulo (Abaixo do Título)</label>
              <textarea 
                value={content.hero.subtitle}
                onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded-lg p-3 text-sm h-32 focus:border-brand-red outline-none shadow-inner"
              />
            </div>
          </div>
        )}

        {/* Outras abas mantidas */}
        {activeTab === 'about' && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-brand-red uppercase mb-4 flex items-center gap-2"><Type className="w-3 h-3"/> Sobre</h3>
            <div>
              <label className="text-[10px] uppercase text-slate-500 mb-1 block">Título da Seção</label>
              <input 
                value={content.about.title}
                onChange={(e) => handleChange('about', 'title', e.target.value)}
                className="w-full bg-slate-900 border border-white/10 rounded p-2 text-sm outline-none"
              />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-900 border-t border-white/5 flex gap-3">
        <button 
          onClick={() => setIsOpen(false)}
          className="flex-1 bg-brand-red hover:bg-brand-brown text-white py-3 rounded text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
        >
          <Save className="w-4 h-4" /> Finalizar Edição
        </button>
        <button 
          onClick={resetToDefault}
          className="p-3 bg-white/5 hover:bg-white/10 text-slate-400 rounded transition-all"
          title="Resetar para o padrão"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
