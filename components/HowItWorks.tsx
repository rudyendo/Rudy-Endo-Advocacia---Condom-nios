import React from 'react';
import { Info } from 'lucide-react';
import { HOW_IT_WORKS_CONTENT } from '../src/content';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            {HOW_IT_WORKS_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-slate-200 rounded-2xl p-7"
            >
              <span className="inline-block font-serif text-3xl font-bold text-[#912018] tabular-nums mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 max-w-4xl mx-auto">
          <Info
            className="w-5 h-5 text-[#912018] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {HOW_IT_WORKS_CONTENT.note}
          </p>
        </div>
      </div>
    </section>
  );
};
