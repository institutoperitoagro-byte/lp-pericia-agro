import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="metodo">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-agro-green mb-6">
            Por que muitos peritos <span className="text-red-600 italic">desistem</span> da carreira?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Muitos profissionais acreditam que basta o registro no conselho e o conhecimento técnico para prosperar na perícia. A realidade nos tribunais exige um preparo muito mais estratégico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {[
            {
              title: "Falta de Rito",
              desc: "Incompreensão sobre as engrenagens processuais e prazos fatais do Judiciário."
            },
            {
              title: "Expectativa do Juiz",
              desc: "Desconhecimento dos elementos técnicos que o magistrado realmente valoriza."
            },
            {
              title: "Insegurança Financeira",
              desc: "Baixa rentabilidade por falta de critérios técnicos na fixação de honorários."
            },
            {
              title: "Laudos Frágeis",
              desc: "Produção de documentos vulneráveis a questionamentos de assistentes técnicos."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-agro-green transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-agro-gold group-hover:text-agro-green transition-colors">
                <span className="text-2xl font-bold">!</span>
              </div>
              <h4 className="text-xl font-bold text-agro-green mb-3 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium px-4">
            Dominar a técnica agronômica é apenas <span className="text-agro-green font-bold">50% do jogo</span>. Sem o domínio do ambiente jurídico, o perito torna-se vulnerável e desacreditado.
          </p>
        </div>

        <div className="bg-agro-green p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-agro-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif mb-6">A Solução: O <span className="text-agro-gold">Método E.P.A.</span></h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Desenvolvemos uma formação que <span className="text-white font-bold italic">blinda sua atuação</span>. Ensinamos não apenas como fazer o laudo, mas como se posicionar como a <span className="text-agro-gold font-bold">autoridade técnica da confiança do juiz</span> dentro do processo.
            </p>
            <a href="https://chk.eduzz.com/ftqmnpka" className="inline-block px-10 py-5 bg-agro-gold text-agro-green font-bold rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-xl text-lg">
              CONHECER O MÉTODO COMPLETO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;