
import React from 'react';

const BonusVault: React.FC = () => {
  const assets = [
    { 
      title: "Kit de Petições Editáveis", 
      desc: "Modelos em Word prontos para uso. Segurança jurídica total.", 
      items: ["Aceite", "Proposta", "Documentos", "Levantamento", "Resposta"]
    },
    { 
      title: "Modelos de Laudos", 
      desc: "Exemplos reais comentados com padrão de excelência.", 
      items: ["Estrutura Premium", "Linguagem Forense", "Resposta a Quesitos"]
    },
    { 
      title: "IA na Perícia + Prompts", 
      desc: "Dobre sua produtividade com Inteligência Artificial.", 
      items: ["Prompts Otimizados", "Análise Ágil", "Redação 10x Veloz"]
    }
  ];

  return (
    <section className="py-24 bg-white" id="bonus">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-agro-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-agro-gold font-bold tracking-widest uppercase text-xs block">Arsenal Tecnológico</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-agro-green mb-6">Recursos <span className="text-agro-gold italic">Inclusos</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {assets.map((asset, i) => (
            <div key={i} className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 hover:shadow-2xl transition-all flex flex-col">
              <div className="w-10 h-1 bg-agro-gold mb-8"></div>
              <h4 className="text-xl font-bold text-agro-green mb-4 font-serif">
                {asset.title}
              </h4>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">{asset.desc}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {asset.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <span className="w-1 h-1 bg-agro-gold/40 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-slate-200 text-agro-gold font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                Recurso Desbloqueado
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://chk.eduzz.com/ftqmnpka" className="inline-block px-12 py-5 bg-agro-gold text-agro-green font-bold text-xl rounded-xl shadow-xl hover:bg-agro-green hover:text-white transition-all transform hover:scale-105">
            QUERO TODOS OS BÔNUS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BonusVault;
