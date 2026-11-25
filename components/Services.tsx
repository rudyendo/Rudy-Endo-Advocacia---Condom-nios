import React from 'react';
import {
  Landmark,
  Users,
  FileText,
  Scale,
  Gavel,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_CONTENT, getWhatsAppUrl } from '../src/content';
import { trackWhatsAppClick } from '../src/tracking';

const iconMap: Record<string, React.ReactNode> = {
  cobranca: <Landmark className="w-7 h-7" aria-hidden="true" />,
  assembleias: <Users className="w-7 h-7" aria-hidden="true" />,
  convencao: <FileText className="w-7 h-7" aria-hidden="true" />,
  pareceres: <Scale className="w-7 h-7" aria-hidden="true" />,
  defesa: <Gavel className="w-7 h-7" aria-hidden="true" />,
  contratos: <ShieldCheck className="w-7 h-7" aria-hidden="true" />,
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="eyebrow-light mb-3">{SERVICES_CONTENT.eyebrow}</p>
          <h2 className="text-[30px] lg:text-[40px] font-semibold text-slate-900 leading-[1.15] tracking-[-0.01em] text-balance">
            {SERVICES_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mx-auto mt-5" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CONTENT.items.map((service) => (
            <article
              key={service.id}
              className="p-7 border border-slate-200 rounded-2xl bg-slate-50 hover:border-[#912018]/40 transition-colors"
            >
              <div className="text-[#912018] mb-5">{iconMap[service.id]}</div>
              <h3 className="font-sans font-semibold text-[18px] sm:text-[19px] leading-snug text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-[16px] lg:text-[17px] leading-[1.65] text-[#334155] max-w-[65ch]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('servicos')}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[52px] bg-[#912018] text-white font-semibold rounded-xl hover:bg-[#451F19] transition-colors shadow-sm whitespace-nowrap text-[16px] w-full sm:w-auto"
          >
            <span>{SERVICES_CONTENT.ctaLabel}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
