
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Preciso ter experiência prévia?", a: "Não. A Formação foi desenhada para levar o profissional do zero absoluto até a segurança total." },
    { q: "Quais formações podem atuar?", a: "Engenheiros Agrônomos, Florestais, Veterinários, Zootecnistas e áreas correlatas com registro." },
    { q: "Recebo modelos prontos?", a: "Sim. Modelos editáveis de petições de honorários, manifestações e laudos técnicos." },
    { q: "O curso foca na teoria?", a: "Não. Nosso foco é a prática real e a dinâmica invisível dos tribunais." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-agro-green font-bold">Dúvidas Frequentes</h2>
        </div>
        
        <div className="space-y-4 mb-20">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
              <button className="w-full p-8 flex justify-between items-center text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span className="text-base font-bold text-agro-green">{faq.q}</span>
                <span className={`text-xl font-serif transition-transform duration-300 ${openIndex === i ? 'rotate-45 text-agro-gold' : 'text-slate-300'}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed pt-2">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center p-12 bg-agro-green/5 rounded-[2.5rem] border border-agro-gold/20">
           <h4 className="text-xl font-serif text-agro-green font-bold mb-4">Ainda tem alguma dúvida?</h4>
           <p className="text-slate-500 text-sm mb-8">Nossa equipe está pronta para te ajudar a decidir o seu próximo passo na carreira.</p>
           <a href="#inscricao" className="inline-block px-10 py-4 bg-agro-gold text-agro-green font-bold rounded-xl shadow-lg hover:bg-agro-green hover:text-white transition-all">
             FALAR COM CONSULTOR
           </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
