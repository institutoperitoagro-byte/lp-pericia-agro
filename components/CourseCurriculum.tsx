
import React, { useState } from 'react';

const CourseCurriculum: React.FC = () => {
  const [openModules, setOpenModules] = useState<number[]>([0]);

  const modules = [
    { title: "Módulo 1: Introdução e Ética Profissional", lessons: ["Aula 1 — Fundamentos", "Aula 2 — Assistente da Justiça", "Aula 3 — Demandas reais", "Aula 4 — Ecossistema Pericial", "Aula 5 — Ética e Blindagem"] },
    { title: "Módulo 2: Estratégia de Carreira e Mercado", lessons: ["Aula 6 — Peritos Sempre Nomeados", "Aula 7 — Primeiras oportunidades", "Aula 8 — Nicho de Atuação", "Aula 9 — Fluxo das Nomeações"] },
    { title: "Módulo 3: Honorários e Negociação de Elite", lessons: ["Aula 10 — Precificação", "Aula 11 — Proposta Blindada", "Aula 11.3 — Checklist da proposta", "Aula 12 — AJG"] },
    { title: "Módulo 4: A Perícia no Processo Civil", lessons: ["Aula 13 — Prova pericial", "Aula 14 — Remuneração", "Aula 16 — Deveres e direitos", "Aula 18 — Requisitos do laudo"] },
    { title: "Módulo 5: Petições e Prática Forense", lessons: ["Aula 20 — Petições essenciais", "Aula 21 — Exemplo de laudo", "Aula 24 — PET Aceite", "Aula 27 — PET Antecipação", "Aula 30 — Resposta à impugnação"] },
    { title: "Módulo 6: Elaboração de Laudos e Inovação", lessons: ["Aula 31 — Estrutura do laudo", "Aula 32 — Jurisprudências úteis", "Aula 33 — IA na perícia"] },
    { title: "Módulo 7: Gestão de Crises e Resultados", lessons: ["Aula 34 — Perito vs Assistente", "Aula 35 — Laudo impugnado", "Aula 36 — Resposta a quesitos", "Aula 37 — Laudo deferido"] }
  ];

  const toggleModule = (idx: number) => {
    setOpenModules(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  return (
    <section className="py-24 bg-slate-50" id="curriculo">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-agro-green font-bold tracking-widest uppercase text-xs mb-4 block">Conteúdo Programático</span>
          <h2 className="text-4xl md:text-5xl font-serif text-agro-green mb-6">A Jornada para a <span className="text-agro-gold italic">Referência</span></h2>
        </div>

        <div className="space-y-4 mb-16">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <button onClick={() => toggleModule(idx)} className="w-full p-8 text-left flex justify-between items-center group">
                <div className="flex items-center gap-6">
                  <span className="w-10 h-10 rounded-full bg-agro-green/5 text-agro-green flex items-center justify-center font-bold text-sm">0{idx + 1}</span>
                  <span className="font-bold text-agro-green md:text-lg group-hover:text-agro-gold transition-colors">{m.title}</span>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openModules.includes(idx) ? 'rotate-180 bg-agro-gold text-white' : 'bg-slate-50 text-slate-400'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </button>
              <div className={`transition-all duration-300 ${openModules.includes(idx) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-12 pb-10 pt-4 bg-white border-t border-slate-50">
                  <ul className="space-y-4">
                    {m.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-4 text-slate-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-agro-gold rounded-full shrink-0"></span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#inscricao" className="inline-block px-12 py-5 bg-agro-green text-white font-bold text-xl rounded-xl shadow-xl hover:bg-agro-gold transition-all transform hover:scale-105">
            GARANTIR ACESSO AO CONTEÚDO
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
