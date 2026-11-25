import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PAIN_POINTS_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const PainPoints: React.FC = () => {
  return (
    <section id="dores" className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight text-balance">
            {PAIN_POINTS_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mt-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PAIN_POINTS_CONTENT.items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-xs"
            >
              <span className="font-serif text-lg font-bold text-[#912018] tabular-nums shrink-0 leading-snug">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <p className="text-slate-700 leading-relaxed text-base">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-7 sm:p-9 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            {PAIN_POINTS_CONTENT.closingLine}
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('dores')}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 min-h-[48px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors whitespace-nowrap shrink-0 text-sm sm:text-base w-full sm:w-auto"
          >
            <span>{PAIN_POINTS_CONTENT.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
