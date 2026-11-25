import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { HERO_CONTENT, SITE_CONFIG, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[620px] lg:min-h-[88vh] flex items-center overflow-hidden bg-[#1A1A1A] pt-28 pb-20 lg:pt-32 lg:pb-24"
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
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 mb-6">
            {HERO_CONTENT.badge}
          </p>

          <h1 className="text-[clamp(2rem,4.4vw,3.75rem)] font-bold text-white leading-[1.12] mb-6 text-balance">
            {HERO_CONTENT.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 mb-9 leading-relaxed max-w-2xl">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors shadow-lg whitespace-nowrap shrink-0 text-sm sm:text-base"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href="#ebook"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] bg-white/5 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/10 transition-colors whitespace-nowrap shrink-0 text-sm sm:text-base"
            >
              <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{HERO_CONTENT.secondaryCta}</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-300 leading-relaxed">
            {HERO_CONTENT.supportLine}
          </p>
        </div>
      </div>
    </section>
  );
};
