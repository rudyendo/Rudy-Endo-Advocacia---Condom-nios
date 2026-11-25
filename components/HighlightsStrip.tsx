import React from 'react';
import { HIGHLIGHTS_CONTENT } from '../src/content';

export const HighlightsStrip: React.FC = () => {
  return (
    <section
      aria-label="Destaques da atuação"
      className="bg-gradient-to-r from-[#912018] to-[#451F19] py-14 sm:py-16"
    >
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center text-white">
          {HIGHLIGHTS_CONTENT.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="font-num text-[34px] lg:text-[44px] leading-none whitespace-nowrap text-white">
                {item.value}
              </div>
              <p className="font-sans text-[15px] leading-snug text-white/90 max-w-[24ch] mx-auto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
