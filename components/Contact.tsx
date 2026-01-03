
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { usePageContent } from '../contexts/PageContentContext';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { content } = usePageContent();
  const { contact } = content;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contato" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto py-20 px-10 bg-white/5 rounded-3xl border border-brand-red/30 backdrop-blur-sm">
            <CheckCircle className="w-16 h-16 text-brand-red mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-white">Protocolo Iniciado!</h2>
            <p className="text-slate-300 mb-8">
              Obrigado pelo contato. Em breve o Dr. Rudy Endo ou sua equipe estratégica entrarão em contato.
            </p>
            <button onClick={() => setSubmitted(false)} className="text-brand-red hover:underline font-semibold">Enviar nova mensagem</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">{contact.title.split(' ').map((w,i) => w === 'Especialista' ? <span key={i} className="text-brand-red">{w} </span> : w + ' ')}</h2>
            <p className="text-slate-400 mb-12 text-lg">
              {contact.description}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-brand-red/20 transition-colors">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp Jurídico</p>
                  <p className="text-lg font-semibold">{contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-brand-red/20 transition-colors">
                  <Mail className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">E-mail Corporativo</p>
                  <p className="text-lg font-semibold">{contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-brand-red/20 transition-colors">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Escritório</p>
                  <p className="text-lg font-semibold">{contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-900 font-bold mb-2 text-xs uppercase tracking-widest">Nome Completo</label>
                  <input required type="text" placeholder="Ex: João Silva" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:outline-none transition-all text-slate-900" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-900 font-bold mb-2 text-xs uppercase tracking-widest">E-mail</label>
                    <input required type="email" placeholder="seu@email.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:outline-none transition-all text-slate-900" />
                  </div>
                  <div>
                    <label className="block text-slate-900 font-bold mb-2 text-xs uppercase tracking-widest">WhatsApp</label>
                    <input required type="tel" placeholder="(11) 90000-0000" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:outline-none transition-all text-slate-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-900 font-bold mb-2 text-xs uppercase tracking-widest">Mensagem</label>
                  <textarea rows={4} placeholder="Como podemos blindar juridicamente o seu condomínio?" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:outline-none transition-all text-slate-900"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-brown transition-all flex items-center justify-center gap-3 group shadow-lg uppercase tracking-widest text-xs">
                  <span>Enviar Solicitação</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
