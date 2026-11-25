import React from 'react';
import { ArrowRight, BookOpen, Check } from 'lucide-react';
import { HERO_CONTENT, SITE_CONFIG, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[640px] lg:min-h-[88vh] flex items-center overflow-hidden bg-[#1A1A1A] pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_CONFIG.BRANDING.heroImageUrl}
          alt="Fachada de condomínio residencial moderno"
          width={1600}
          height={900}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/65" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
        <div className="max-w-4xl">
          <p className="eyebrow-dark mb-5">{HERO_CONTENT.eyebrow}</p>

          <h1 className="text-[36px] lg:text-[60px] font-semibold text-white leading-[1.08] tracking-[-0.01em] mb-6 text-balance">
            {HERO_CONTENT.titleMain}
            <span className="block text-[#EF4444] mt-1.5">
              {HERO_CONTENT.titleHighlight}
            </span>
          </h1>

          <p className="text-[16px] lg:text-[17px] leading-[1.65] text-[#CBD5E1] mb-9 max-w-[65ch]">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors shadow-lg whitespace-nowrap shrink-0 text-[16px]"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href="#ebook"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 min-h-[52px] bg-white/5 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-[16px]"
            >
              <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] sm:text-[15px] text-[#CBD5E1]">
            {HERO_CONTENT.supportItems.map((item, idx) => (
              <li key={idx} className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#EF4444] shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
