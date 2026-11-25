import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PAIN_POINTS_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

export const PainPoints: React.FC = () => {
  return (
    <section id="dores" className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow-light mb-3">{PAIN_POINTS_CONTENT.eyebrow}</p>
          <h2 className="text-[30px] lg:text-[40px] font-semibold text-slate-900 leading-[1.15] tracking-[-0.01em] text-balance">
            {PAIN_POINTS_CONTENT.title}
          </h2>
          <p className="mt-4 text-[16px] lg:text-[17px] leading-[1.65] text-[#334155] max-w-[65ch]">
            {PAIN_POINTS_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PAIN_POINTS_CONTENT.items.map((item) => (
            <article
              key={item.number}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex items-start gap-4 shadow-xs"
            >
              <span className="font-num text-[20px] text-[#912018] shrink-0 leading-snug">
                {item.number}
              </span>
              <div className="space-y-2">
                <h3 className="font-sans font-semibold text-[18px] leading-snug text-slate-900">
                  {item.title}
                </h3>
                <p className="text-[16px] lg:text-[17px] leading-[1.65] text-[#334155] max-w-[65ch]">
                  {item.consequence}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-7 sm:p-9 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-[65ch]">
            <p className="font-sans font-semibold text-[18px] sm:text-[19px] text-white mb-1.5">
              {PAIN_POINTS_CONTENT.closingTitle}
            </p>
            <p className="text-[16px] lg:text-[17px] leading-[1.65] text-[#CBD5E1]">
              {PAIN_POINTS_CONTENT.closingText}
            </p>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('dores')}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors sm:whitespace-nowrap shrink-0 text-[16px] text-center w-full sm:w-auto"
          >
            <span>{PAIN_POINTS_CONTENT.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
