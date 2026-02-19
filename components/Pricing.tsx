
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-agro-green relative overflow-hidden" id="inscricao">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 font-bold leading-tight">
            Pronto para se tornar um <span className="text-agro-gold italic">Perito de Elite?</span>
          </h2>
          <p className="text-slate-400 text-lg">Escolha investir hoje na carreira que vai transformar seus próximos anos.</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col lg:flex-row border-4 border-agro-gold">
          <div className="lg:w-7/12 p-10 lg:p-14 text-agro-green">
            <div className="flex items-center gap-4 mb-8">
               <svg className="w-8 h-8 text-agro-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
               </svg>
               <h3 className="text-2xl md:text-3xl font-serif font-bold">Incluso na Formação:</h3>
            </div>
            
            <ul className="space-y-5 mb-10">
              {[
                { text: "Formação Completa (37 Aulas Estratégicas)", strong: true },
                { text: "Kit de Petições Editáveis (7 modelos em Word)", strong: true },
                { text: "Laudos Reais Comentados e Exemplos Práticos", strong: true },
                { text: "Comunidade ELITE (Grupo VIP WhatsApp)", strong: true },
                { text: "Prompts de IA Otimizados para Peritos", strong: false },
                { text: "Certificado de Capacitação Técnica 30h", strong: false }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-agro-gold rotate-45 shrink-0"></div>
                  <span className={`${item.strong ? 'font-bold' : 'font-medium'} text-sm md:text-base`}>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-200">
               <div className="flex items-center gap-3 mb-2">
                 <span className="font-bold text-sm uppercase tracking-wider text-agro-green">Garantia Incondicional de 7 Dias</span>
               </div>
               <p className="text-slate-500 text-xs leading-relaxed">
                 Teste o método, baixe o Kit e veja os Laudos. Se em até 7 dias você decidir que não é para você, devolvemos 100% do seu investimento.
               </p>
            </div>
          </div>

          <div className="lg:w-5/12 bg-slate-50 p-10 lg:p-14 flex flex-col justify-center items-center text-center border-l border-slate-100 relative">
            <div className="absolute top-0 right-0 p-6">
              <span className="bg-agro-gold text-agro-green font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">Inscrições Abertas</span>
            </div>

            <div className="mb-8">
              <p className="text-slate-400 line-through text-lg mb-2 opacity-60">De R$ 2.997,00</p>
              <p className="text-agro-green text-lg mb-2 font-bold">Por apenas 12x de</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-agro-gold text-2xl font-bold">R$</span>
                <span className="text-agro-green text-7xl font-serif font-bold">199</span>
                <span className="text-agro-gold text-2xl font-bold">,00</span>
              </div>
              <p className="mt-4 text-slate-500 text-sm">ou R$ 1.790,00 à vista</p>
            </div>

            <a 
              href="https://SEUCHECKOUTAQUI.com" 
              className="w-full py-6 bg-agro-gold text-agro-green font-bold text-xl rounded-2xl shadow-xl hover:bg-agro-green hover:text-white transition-all transform hover:scale-105 active:scale-95 mb-6 animate-pulse-cta"
            >
              GARANTIR MINHA VAGA
            </a>
            
            <div className="flex justify-center gap-4 opacity-30 grayscale mt-4">
              <div className="h-6 w-10 bg-slate-300 rounded"></div>
              <div className="h-6 w-10 bg-slate-300 rounded"></div>
              <div className="h-6 w-10 bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
