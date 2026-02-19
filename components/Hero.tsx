
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden bg-agro-green">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Agronegócio e Justiça" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-agro-green/80 via-agro-green/90 to-agro-green"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 font-bold">
            O número de processos agrícola é crescente e o <span className="text-agro-gold italic font-normal">Judiciário precisa</span> de peritos agrários capacitados.
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Este curso ensina a construir uma carreira sólida, rentável e valorizada na perícia judicial. Construa uma nova fonte de renda com <span className="text-white font-bold">autonomia profissional e honorários dignos.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://chk.eduzz.com/l7w4tp3b" 
              className="w-full sm:w-auto px-12 py-5 bg-agro-gold text-agro-green text-center font-bold text-xl rounded-xl shadow-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95"
            >
              QUERO APRENDER O MÉTODO E ATUAR COMO PERITO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
