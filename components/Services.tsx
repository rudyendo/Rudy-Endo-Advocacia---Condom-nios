import React from 'react';
import {
  Landmark,
  Users,
  FileText,
  Scale,
  Gavel,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES_CONTENT } from '../src/content';

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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            {SERVICES_CONTENT.title}
          </h2>
          <div className="w-16 h-1 bg-[#912018] mx-auto mb-5" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {SERVICES_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CONTENT.items.map((service) => (
            <article
              key={service.id}
              className="p-7 border border-slate-200 rounded-2xl bg-slate-50 hover:border-[#912018]/40 transition-colors"
            >
              <div className="text-[#912018] mb-5">{iconMap[service.id]}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
