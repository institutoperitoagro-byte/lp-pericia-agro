
import React, { useState } from "react";

const horasPorComplexidade = {
  baixa: 11,
  media: 20,
  alta: 30,
  altissima: 60
};

const valoresHora: Record<string, number> = {
  "Eng. Agrônomo": 625,
  "Eng. Florestal": 625,
  "Agrimensor": 430,
  "Topógrafo": 430,
  "Eng. Ambiental": 625,
  "Zootecnista": 625,
  "Tecnólogo": 194.52,
  "Médico Veterinário": 430,
  "Técnico": 194.52,
  "Biólogo Júnior": 100.6,
  "Biólogo Pleno": 146.23,
  "Biólogo Sênior": 225.04,
  "Biólogo Doutor": 372.31
};

const HonorariosSimulator: React.FC = () => {
  const [profissao, setProfissao] = useState("Eng. Agrônomo");
  const [complexidade, setComplexidade] = useState("baixa");

  const valorHora = valoresHora[profissao];
  const horas = horasPorComplexidade[complexidade as keyof typeof horasPorComplexidade];
  const total = valorHora * horas;

  return (
    <section className="py-24 bg-white" id="simulador">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-agro-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-agro-gold font-bold tracking-[0.2em] uppercase text-xs block">Transparência e Resultados</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-agro-green mb-6 leading-tight">
            Quanto ganha um <span className="text-agro-gold italic font-normal">Perito Judicial?</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            A remuneração depende de vários fatores ensinados com exclusividade no curso. Simule uma estimativa real abaixo:
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-50 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 mb-10 relative z-10">
            <div className="space-y-4">
              <label className="text-agro-green font-bold text-sm uppercase tracking-wider block ml-1">Sua Profissão</label>
              <div className="relative">
                <select
                  className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-agro-green font-medium focus:ring-2 focus:ring-agro-gold focus:border-transparent appearance-none transition-all shadow-sm cursor-pointer"
                  value={profissao}
                  onChange={(e) => setProfissao(e.target.value)}
                >
                  {Object.keys(valoresHora).map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-agro-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-agro-green font-bold text-sm uppercase tracking-wider block ml-1">Complexidade da Perícia</label>
              <div className="relative">
                <select
                  className="w-full bg-white border border-slate-200 p-4 rounded-2xl text-agro-green font-medium focus:ring-2 focus:ring-agro-gold focus:border-transparent appearance-none transition-all shadow-sm cursor-pointer"
                  value={complexidade}
                  onChange={(e) => setComplexidade(e.target.value)}
                >
                  <option value="baixa">Baixa complexidade (11h)</option>
                  <option value="media">Média complexidade (20h)</option>
                  <option value="alta">Alta complexidade (30h)</option>
                  <option value="altissima">Altíssima complexidade (60h)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-agro-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-agro-green text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden text-center group border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-agro-gold opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
            
            <p className="text-agro-gold font-bold uppercase tracking-[0.2em] text-xs mb-4">Estimativa de Honorários</p>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl font-serif text-agro-gold font-bold">R$</span>
              <span className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight">
                {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            
            <div className="inline-flex items-center gap-3 py-2 px-6 bg-white/10 rounded-full text-sm font-medium text-slate-300 border border-white/5">
              <span>{horas} horas de trabalho</span>
              <span className="w-1 h-1 bg-agro-gold rounded-full"></span>
              <span>R$ {valorHora.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} / hora</span>
            </div>

            <div className="mt-12">
              <a 
                href="https://chk.eduzz.com/ftqmnpka" 
                className="animate-pulse-cta inline-block w-full sm:w-auto px-12 py-5 bg-agro-gold text-agro-green font-bold text-lg rounded-2xl shadow-xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide"
              >
                Quero alcançar estes honorários
              </a>
            </div>
          </div>
          
          <p className="text-slate-400 text-[11px] text-center mt-10 italic max-w-lg mx-auto leading-relaxed border-t border-slate-200/50 pt-6">
            * Valores baseados nas tabelas de referência técnica vigentes (IBAPE SP) e tempo médio estimado. *
          </p>
        </div>
      </div>
    </section>
  );
};

export default HonorariosSimulator;
