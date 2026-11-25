import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { ADMINISTRADORAS_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const ForAdministradoras: React.FC = () => {
  return (
    <section id="administradoras" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="rounded-3xl bg-[#1A1A1A] border border-white/10 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-[65ch]">
            <div className="flex items-center gap-2.5 mb-3">
              <Building2 className="w-4 h-4 text-[#F87171] shrink-0" aria-hidden="true" />
              <p className="eyebrow-dark">{ADMINISTRADORAS_CONTENT.eyebrow}</p>
            </div>
            <h2 className="text-[30px] lg:text-[40px] font-semibold text-white leading-[1.15] tracking-[-0.01em] mb-4">
              {ADMINISTRADORAS_CONTENT.title}
            </h2>
            <p className="text-[16px] lg:text-[17px] leading-[1.65] text-[#CBD5E1]">
              {ADMINISTRADORAS_CONTENT.text}
            </p>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('administradoras')}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors whitespace-nowrap shrink-0 text-[16px] w-full sm:w-auto"
          >
            <span>{ADMINISTRADORAS_CONTENT.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
