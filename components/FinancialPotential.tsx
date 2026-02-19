
import React from 'react';

const FinancialPotential: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="ganhos">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-agro-green mb-6 font-bold">
            Quanto ganha um <span className="text-agro-gold italic font-normal">Perito Judicial?</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A remuneração na perícia judicial agrária segue padrões técnicos fundamentados na tabela de honorários do IBAPE SP — <strong>referência técnica utilizada nacionalmente.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center text-center h-full">
             <div className="mb-6 p-6 bg-white rounded-2xl border-l-4 border-agro-gold">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Hora Técnica Mínima (Ref. Nacional)</p>
                <h4 className="text-4xl md:text-5xl font-serif text-agro-green font-bold">R$ 625,00</h4>
                <p className="text-agro-gold font-bold text-sm mt-1">valor base regulamentar</p>
             </div>

             <div className="p-6 bg-white rounded-2xl border-l-4 border-agro-gold">
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Honorário Mínimo Sugerido</p>
                <h4 className="text-4xl md:text-5xl font-serif text-agro-green font-bold">R$ 6.875,00</h4>
                <p className="text-agro-gold font-bold text-sm mt-1">referente ao mínimo de 11 horas</p>
             </div>
             <p className="text-slate-400 text-[10px] mt-6 italic">
               * Valores vigentes segundo o regulamento de honorários do IBAPE SP.
             </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-agro-green font-bold leading-tight">A segurança técnica que o <span className="italic text-agro-gold font-normal">Juiz exige</span></h3>
            <p className="text-lg text-slate-600">
              No Instituto ensinamos a base normativa para garantir que seus honorários sejam solicitados e pagos corretamente, sem cortes arbitrários.
            </p>
            <ul className="space-y-3">
              {[
                "Petição de honorários blindada tecnicamente",
                "Referencial normativo para precificação",
                "Recebimento antecipado via depósito judicial",
                "Escalabilidade na carteira de processos"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-agro-green font-medium">
                  <span className="w-5 h-5 bg-agro-gold/10 text-agro-gold rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialPotential;
