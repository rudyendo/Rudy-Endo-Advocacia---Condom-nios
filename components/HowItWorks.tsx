import React from 'react';
import { Info } from 'lucide-react';
import { HOW_IT_WORKS_CONTENT } from '../src/content';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow-light mb-3">{HOW_IT_WORKS_CONTENT.eyebrow}</p>
          <h2 className="text-[30px] lg:text-[40px] font-semibold text-slate-900 leading-[1.15] tracking-[-0.01em] text-balance">
            {HOW_IT_WORKS_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-slate-200 rounded-2xl p-7"
            >
              <span className="inline-block font-num text-[28px] text-[#912018] mb-3 leading-none">
                {step.number}
              </span>
              <h3 className="font-sans font-semibold text-[18px] sm:text-[19px] leading-snug text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-[16px] lg:text-[17px] leading-[1.65] text-[#334155] max-w-[65ch]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 max-w-4xl mx-auto">
          <Info
            className="w-5 h-5 text-[#912018] shrink-0 mt-1"
            aria-hidden="true"
          />
          <p className="text-[16px] lg:text-[17px] leading-[1.65] text-[#334155] max-w-[65ch]">
            {HOW_IT_WORKS_CONTENT.note}
          </p>
        </div>
      </div>
    </section>
  );
};
