
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Minimize2, MessageCircle } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual da Rudy Endo Advocacia. Como posso auxiliar sua gestão condominial hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-red text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group border-2 border-white/20"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm px-0 group-hover:px-2">
            Dúvida Jurídica?
          </span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] md:w-[400px] border border-slate-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
          <div className="bg-slate-950 p-4 text-white flex justify-between items-center border-b border-brand-red/30">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded bg-brand-red">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-tighter">AI Rudy Endo</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-[10px] text-slate-400">Consultoria Básica Ativa</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-brand-red">
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`mt-1 p-1 rounded-full shrink-0 ${msg.role === 'user' ? 'bg-brand-red' : 'bg-brand-brown'}`}>
                    {msg.role === 'user' ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-white" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-red text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-red" />
                  <span className="text-xs text-slate-400 italic">Consultando Jurisprudência...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Como lidar com inadimplência?"
              className="flex-1 bg-slate-100 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-brand-red outline-none"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brand-red text-white p-2 rounded-lg hover:bg-brand-brown disabled:opacity-50 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
