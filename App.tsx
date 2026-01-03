
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { LeadMagnet } from './components/LeadMagnet';
import { AIAssistant } from './components/AIAssistant';
import { AdminPanel } from './components/AdminPanel';
import { PageContentProvider, usePageContent } from './contexts/PageContentContext';
import { Menu, X } from 'lucide-react';

const Logo: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const { content } = usePageContent();
  const { branding } = content;

  if (branding.logoUrl && !branding.showDefaultLogo) {
    return (
      <img 
        src={branding.logoUrl} 
        alt="Rudy Endo Advocacia" 
        className="h-12 w-auto object-contain"
      />
    );
  }

  return (
    <div className="flex items-center gap-4 group">
      <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden shadow-sm">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#912018]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#451F19]"></div>
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full p-1 z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="white" strokeWidth="4" />
          <path d="M35 10 V90 M65 10 V90" fill="none" stroke="white" strokeWidth="4" />
          <path d="M10 65 C10 55, 15 48, 22 45 C28 42, 35 45, 40 50 C45 55, 45 65, 40 75 C35 85, 25 90, 15 90 L10 90 Z" fill="white" />
          <path d="M18 55 C22 52, 28 50, 32 52 C35 54, 35 60, 32 65 C28 70, 22 72, 18 68 Z" fill="#451F19" />
          <path d="M10 42 C15 35 25 32 35 35 C42 38 45 45 42 52 C40 58 35 62 30 60 C25 58 20 52 22 45 C15 45 10 48 10 55 Z" fill="white" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col leading-[0.85]">
          <span className={`text-[26px] font-bold tracking-tight ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
            RUDY
          </span>
          <span className="text-[26px] font-bold tracking-tight text-[#451F19]">
            ENDO
          </span>
        </div>
        <div className="flex flex-col mt-0.5">
          <div className="h-[2px] w-full bg-[#912018]"></div>
          <span className={`text-[9px] font-bold tracking-[0.45em] uppercase py-0.5 ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
            ADVOCACIA
          </span>
        </div>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Ebook', href: '#ebook' },
    { name: 'O Especialista', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => scrollTo('#')}>
            <Logo isScrolled={isScrolled} />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-xs font-bold transition-colors hover:text-[#912018] uppercase tracking-[0.2em] ${
                  isScrolled ? 'text-slate-800' : 'text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollTo('#contato')} className="px-6 py-3 bg-[#912018] text-white text-xs font-bold rounded-sm hover:bg-[#451F19] transition-all shadow-md uppercase tracking-[0.2em]">
              Consultoria Direta
            </button>
          </nav>
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 animate-in fade-in">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => scrollTo(link.href)} className="text-left py-3 text-slate-900 font-bold uppercase tracking-widest border-b border-slate-50">{link.name}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Services />
        <LeadMagnet />
        <About />
        <div className="bg-gradient-to-r from-[#912018] to-[#451F19] py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
              <div className="space-y-2">
                <div className="text-5xl font-bold mb-1">10+</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Anos de Especialização</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold mb-1">500+</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Condomínios Assessorados</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold mb-1">98%</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Recuperação de Ativos</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold mb-1">100%</div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Foco no Síndico</div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>

      <footer className="bg-[#1A1A1A] py-16">
        <div className="container mx-auto px-6 text-center flex flex-col items-center gap-6">
          <Logo isScrolled={false} />
          <div className="text-slate-500 text-[11px] uppercase tracking-widest">
            © {new Date().getFullYear()} Rudy Endo Advocacia. Excelência Jurídica Condominial.
          </div>
        </div>
      </footer>
      <AIAssistant />
      <AdminPanel />
    </div>
  );
};

const App: React.FC = () => (
  <PageContentProvider>
    <AppContent />
  </PageContentProvider>
);

export default App;
