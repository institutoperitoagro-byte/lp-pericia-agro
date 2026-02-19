
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { text: "Consegui minha primeira nomeação e hoje já atuo com segurança. O curso mostra exatamente a prática.", author: "Lidiane", role: "Eng. Agrônoma • PR" },
    { text: "O que antes parecia muito difícil ficou descomplicado. Realizei minha primeira perícia durante o curso.", author: "Diego", role: "Eng. Florestal • SP" },
    { text: "Encontrei o Método E.P.A. e salvou minha atuação. Consegui conduzir tudo corretamente.", author: "João", role: "Eng. Agrônomo • SP" },
    { text: "Em 3 meses após o curso, recebi minha primeira nomeação de R$ 8.500.", author: "Ricardo", role: "Eng. Agrônomo • MS" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-agro-gold font-bold tracking-widest uppercase text-xs mb-4 block">Prova Social</span>
          <h2 className="text-4xl md:text-5xl font-serif text-agro-green font-bold">Quem seguiu, <span className="text-agro-gold italic">já está no topo</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all">
              <div className="text-agro-gold text-5xl font-serif mb-6 opacity-30">“</div>
              <p className="italic text-slate-600 mb-10 text-sm leading-relaxed flex-grow">{t.text}</p>
              <div className="pt-6 border-t border-slate-50">
                <p className="font-bold text-agro-green font-serif">{t.author}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-agro-gold mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://chk.eduzz.com/ftqmnpka" className="animate-pulse-cta inline-block px-12 py-5 bg-agro-green text-white font-bold text-xl rounded-xl shadow-xl hover:bg-agro-gold transition-all transform hover:scale-105">
            SER O PRÓXIMO CASE DE SUCESSO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
