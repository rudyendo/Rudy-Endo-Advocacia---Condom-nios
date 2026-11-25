import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './components/BrandLogo';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { ForAdministradoras } from './components/ForAdministradoras';
import { LeadMagnet } from './components/LeadMagnet';
import { About } from './components/About';
import { HighlightsStrip } from './components/HighlightsStrip';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { PrivacyModal } from './components/PrivacyModal';
import {
  FOOTER_CONTENT,
  NAVIGATION,
  SITE_CONFIG,
  getWhatsAppUrl,
} from './src/content';
import { initTracking, trackWhatsAppClick } from './src/tracking';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    initTracking();
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-shadow duration-200 ${
          isScrolled ? 'shadow-md py-2.5' : 'shadow-xs py-3'
        }`}
      >
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl flex items-center justify-between gap-6">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="shrink-0 focus-visible:outline-2"
            aria-label={SITE_CONFIG.BRANDING.name}
          >
            <BrandLogo variant="dark" />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-6"
          >
            {NAVIGATION.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-800 transition-colors whitespace-nowrap shrink-0 hover:text-[#912018]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('menu')}
              className="px-5 py-2.5 min-h-[42px] inline-flex items-center justify-center bg-[#912018] text-white text-sm font-semibold rounded-xl hover:bg-[#451F19] transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              {NAVIGATION.ctaLabel}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-200"
          >
            <nav
              aria-label="Menu mobile"
              className="flex flex-col p-5 gap-1"
            >
              {NAVIGATION.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3.5 px-3 text-slate-900 font-semibold rounded-xl hover:bg-slate-50 border-b border-slate-100 last:border-b-0 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('menu_mobile');
                  setMobileMenuOpen(false);
                }}
                className="mt-3 py-3.5 px-5 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors text-center"
              >
                {NAVIGATION.ctaLabel}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <PainPoints />
        <Services />
        <HowItWorks />
        <ForAdministradoras />
        <LeadMagnet onOpenPrivacy={() => setPrivacyOpen(true)} />
        <About />
        <HighlightsStrip />
        <FAQ />
        <Contact onOpenPrivacy={() => setPrivacyOpen(true)} />
      </main>

      <footer className="bg-[#1A1A1A] text-slate-300 py-14 border-t border-white/10">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          <div className="flex flex-col items-center text-center gap-4">
            <BrandLogo variant="light" />

            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 max-w-3xl mt-2">
              <p className="font-medium text-white">{FOOTER_CONTENT.societyLine}</p>
              <p>{FOOTER_CONTENT.lawyerLine}</p>
              <p>
                <a
                  href={SITE_CONFIG.CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  {SITE_CONFIG.CONTACT_INFO.address}
                </a>
              </p>
              <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('rodape')}
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  WhatsApp {SITE_CONFIG.CONTACT_INFO.whatsappDisplay}
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={`mailto:${SITE_CONFIG.CONTACT_INFO.email}`}
                  className="hover:text-white underline-offset-4 hover:underline"
                >
                  {SITE_CONFIG.CONTACT_INFO.email}
                </a>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-white underline underline-offset-4"
                >
                  Política de Privacidade
                </button>
              </p>
            </div>

            <p className="text-slate-400 text-xs max-w-2xl pt-4 border-t border-white/10 w-full leading-relaxed">
              {FOOTER_CONTENT.legalNote}
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </div>
  );
};

export default App;
