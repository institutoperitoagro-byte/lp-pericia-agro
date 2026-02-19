
import React from 'react';

const FinalUrgency: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-agro-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-agro-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
          Quanto custa adiar essa decisão por <span className="text-agro-gold italic">mais um ano?</span>
        </h2>

        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed">
          Enquanto você adia sua entrada na perícia judicial, outros profissionais estão se posicionando, sendo nomeados e construindo reputação dentro do Judiciário.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            "Processos continuam surgindo todos os dias nos tribunais.",
            "Honorários continuam sendo pagos a quem está preparado.",
            "O mercado continua selecionando os profissionais mais capacitados."
          ].map((text, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <p className="text-slate-200 text-sm font-medium leading-relaxed">• {text}</p>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl font-medium mb-10 leading-relaxed">
          A pergunta não é se o mercado vai crescer. <br className="hidden md:block" /> 
          A pergunta é: <span className="text-agro-gold font-bold">você estará pronto quando a oportunidade surgir?</span>
        </p>

        <a href="https://chk.eduzz.com/ftqmnpka"
           className="inline-block bg-agro-gold text-agro-green px-12 py-5 rounded-xl font-bold text-xl hover:bg-white transition-all transform hover:scale-105 shadow-2xl">
           COMEÇAR MINHA CARREIRA NA PERÍCIA AGORA
        </a>
      </div>
    </section>
  );
};

export default FinalUrgency;
