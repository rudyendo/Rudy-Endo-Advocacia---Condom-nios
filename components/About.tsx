
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { usePageContent } from '../contexts/PageContentContext';

export const About: React.FC = () => {
  const { content } = usePageContent();
  const { about } = content;

  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-red z-0"></div>
            <img 
              src={about.image} 
              alt="Dr. Rudy Endo" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover grayscale-[20%] transition-all duration-700"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border-b-4 border-brand-red">
              <div className="text-4xl font-bold text-brand-red mb-1">10 Anos</div>
              <div className="text-slate-600 font-semibold text-sm">{about.stats}</div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{about.title}</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
              {about.description}
            </p>
            
            <div className="space-y-4">
              {about.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-red" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-brand-red shadow-sm">
              <p className="italic text-slate-700 font-serif text-lg">
                "{about.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
