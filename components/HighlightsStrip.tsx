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
            <div key={index} className="space-y-1.5">
              <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                {item.value}
              </div>
              <p className="text-white/90 text-sm leading-snug max-w-[22ch] mx-auto">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
