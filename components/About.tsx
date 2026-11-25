import React, { useState } from 'react';
import { CheckCircle2, Scale } from 'lucide-react';
import { ABOUT_CONTENT, SITE_CONFIG } from '../src/content';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="sobre" className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-xl aspect-[15/16] max-w-md mx-auto">
              {!imgError ? (
                <img
                  src={SITE_CONFIG.BRANDING.aboutImageUrl}
                  alt={SITE_CONFIG.BRANDING.aboutImageAlt}
                  width={1213}
                  height={1297}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#1A1A1A] to-[#451F19] flex flex-col items-center justify-center p-8 text-center text-white">
                  <Scale className="w-12 h-12 text-[#d9534f] mb-4" aria-hidden="true" />
                  <p className="font-serif text-2xl font-bold mb-1">Dr. Rudy Endo</p>
                  <p className="text-sm text-slate-300">
                    {SITE_CONFIG.BRANDING.oabLawyer}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 text-balance">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-[#912018] mb-6">
              {ABOUT_CONTENT.nameLine}
            </p>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed mb-8">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                {ABOUT_CONTENT.differentialsTitle}
              </h3>
              <ul className="space-y-3">
                {ABOUT_CONTENT.differentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#912018] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 font-medium text-[15px] sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
