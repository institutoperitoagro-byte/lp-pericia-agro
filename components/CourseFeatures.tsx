
import React from 'react';

const CourseFeatures: React.FC = () => {
  const features = [
    { title: "Cadastro no Judiciário", desc: "Domine o labirinto burocrático com estratégia." },
    { title: "Posicionamento", desc: "Gere confiança imediata no magistrado." },
    { title: "Carreira de Elite", desc: "Transforme conhecimento em negócio lucrativo." },
    { title: "Laudos Robustos", desc: "Redação blindada contra impugnações." },
    { title: "Peticionamento Ágil", desc: "Linguagem técnica correta dos tribunais." },
    { title: "Gestão de Honorários", desc: "Garanta a melhor remuneração antecipada." }
  ];

  return (
    <section className="py-24 bg-agro-green text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-6 h-6 text-agro-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-agro-gold font-bold tracking-[0.2em] uppercase text-xs block">Formação Estratégica</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight font-bold">
            Os 6 Pilares da sua <span className="text-agro-gold italic">Nova Carreira</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-agro-gold/40 transition-all group">
              <span className="text-agro-gold font-mono text-xs mb-4 block opacity-50">ESTRATÉGIA 0{i+1}</span>
              <h4 className="text-xl font-bold text-agro-gold mb-3 font-serif">
                {f.title}
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://chk.eduzz.com/ftqmnpka" className="animate-pulse-cta inline-block px-12 py-5 bg-agro-gold text-agro-green font-bold text-xl rounded-xl shadow-xl hover:bg-white transition-all transform hover:scale-105">
            CONHECER O CURSO POR DENTRO
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
