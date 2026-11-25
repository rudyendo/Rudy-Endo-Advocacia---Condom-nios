import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_CONTENT } from '../src/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="duvidas" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="eyebrow-light mb-3">{FAQ_CONTENT.eyebrow}</p>
          <h2 className="text-[30px] lg:text-[40px] font-semibold text-slate-900 leading-[1.15] tracking-[-0.01em] mb-4 text-balance">
            {FAQ_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mx-auto" />
        </div>

        <div className="space-y-3">
          {FAQ_CONTENT.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors min-h-[56px]"
                  >
                    <span className="font-sans text-[18px] font-semibold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#912018] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 pt-3 text-[#334155] leading-[1.65] text-[16px] lg:text-[17px] border-t border-slate-200/70 bg-white"
                  >
                    <p className="max-w-[65ch]">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
