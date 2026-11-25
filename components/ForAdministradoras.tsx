import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { ADMINISTRADORAS_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const ForAdministradoras: React.FC = () => {
  return (
    <section id="administradoras" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="rounded-3xl bg-[#1A1A1A] border border-white/10 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3 text-[#d9534f]">
              <Building2 className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                Parcerias
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {ADMINISTRADORAS_CONTENT.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {ADMINISTRADORAS_CONTENT.text}
            </p>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('administradoras')}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors whitespace-nowrap shrink-0 text-sm sm:text-base w-full sm:w-auto"
          >
            <span>{ADMINISTRADORAS_CONTENT.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
