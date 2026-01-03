
import React from 'react';
import { ShieldCheck, Gavel, Users, FileText, Landmark, Scale } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Combate à Inadimplência',
    description: 'Protocolos rigorosos de cobrança extrajudicial e judicial, preservando o fluxo de caixa do condomínio.',
    icon: <Landmark className="w-8 h-8" />
  },
  {
    id: '2',
    title: 'Assembleias Estratégicas',
    description: 'Apoio jurídico para votações complexas, garantindo atas impecáveis e prevenindo anulações judiciais.',
    icon: <Users className="w-8 h-8" />
  },
  {
    id: '3',
    title: 'Modernização Regimental',
    description: 'Revisão completa de Convenções e Regimentos para adequá-los aos novos tempos e legislação.',
    icon: <FileText className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'Pareceres de Alta Gestão',
    description: 'Respostas técnicas rápidas para fundamentar decisões polêmicas do síndico e do conselho.',
    icon: <Scale className="w-8 h-8" />
  },
  {
    id: '5',
    title: 'Defesa de Interesses',
    description: 'Atuação combativa em processos cíveis e trabalhistas, blindando o patrimônio condominial.',
    icon: <Gavel className="w-8 h-8" />
  },
  {
    id: '6',
    title: 'Auditoria e Compliance',
    description: 'Análise preventiva de contratos e processos para mitigar riscos de corrupção ou erro administrativo.',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Especialidades Rudy Endo</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Soluções jurídicas pensadas para quem está no comando. Atuação técnica, rápida e focada em resultados práticos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-2xl hover:border-brand-red/20 transition-all duration-300 group"
            >
              <div className="text-brand-red mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
