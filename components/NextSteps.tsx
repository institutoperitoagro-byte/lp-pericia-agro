
import React from 'react';

const NextSteps: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-agro-green mb-8">
          O que você faz após concluir o curso?
        </h2>

        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Você aprende como se cadastrar no Judiciário e <strong>conduzir sua primeira perícia com segurança</strong> do início ao protocolo do laudo.
        </p>

        <p className="text-2xl font-serif text-agro-green font-bold italic">
          Você não entra perdido. <span className="text-agro-gold font-normal">Entra preparado.</span>
        </p>
        
        <div className="mt-12 flex justify-center">
          <div className="w-20 h-1 bg-agro-gold/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
