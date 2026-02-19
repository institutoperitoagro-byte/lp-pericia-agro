
import React from 'react';

const MistakesToAvoid: React.FC = () => {
  const mistakes = [
    { text: "Entrar na perícia sem entender as engrenagens invisíveis do Judiciário" },
    { text: "Aceitar honorários baixos por não saber precificar sua hora técnica" },
    { text: "Produzir laudos tecnicamente bons, mas juridicamente frágeis" },
    { text: "Não saber se posicionar diante de juízes e advogados experientes" },
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <svg className="w-6 h-6 text-agro-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
             </svg>
             <span className="text-agro-gold font-bold tracking-widest uppercase text-xs block">Alerta de Carreira</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-agro-green leading-tight">
            Erros que custam <span className="text-agro-gold italic">anos de carreira</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mistakes.map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-sm flex items-center gap-6 hover:shadow-xl transition-all">
              <span className="w-2 h-2 bg-red-400 rounded-full shrink-0"></span>
              <p className="leading-relaxed font-medium text-slate-700 text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-10 md:p-12 bg-agro-green rounded-[2.5rem] text-white shadow-2xl border-2 border-agro-gold/30 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif text-agro-gold font-bold mb-4 italic">
                O Método E.P.A. elimina esses riscos.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">Você domina o jogo processual e atua com total segurança desde a primeira nomeação, evitando prejuízos financeiros e técnicos.</p>
            </div>
            <div className="md:w-1/3 w-full text-right">
              <a href="#inscricao" className="w-full inline-block px-8 py-4 bg-agro-gold text-agro-green text-center font-bold rounded-xl shadow-lg hover:bg-white transition-all transform hover:scale-105">
                QUERO O MÉTODO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MistakesToAvoid;
