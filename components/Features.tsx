
import React from 'react';

const FEATURE_LIST = [
  {
    title: 'Arquitetura Autoral',
    description: 'Linhas contemporâneas que integram o design de alto padrão ao ambiente.'
  },
  {
    title: 'Exclusividade Boutique',
    description: 'Um número limitado de unidades para garantir privacidade absoluta.'
  },
  {
    title: 'Conexão e Bem-Estar',
    description: 'Espaços pensados para o relaxamento e convivência sofisticada.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="bg-secondary py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {FEATURE_LIST.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-start space-y-4 border-l border-primary/20 pl-6">
            <h3 className="text-primary text-2xl font-light tracking-tight">
              {feature.title}
            </h3>
            <p className="text-primary/70 leading-relaxed font-light">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
