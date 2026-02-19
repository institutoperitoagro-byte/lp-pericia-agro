
import React from 'react';

const Differentiation: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="diferenciais">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-agro-green leading-tight">
            Por que alguns profissionais se consolidam <span className="text-agro-gold italic">enquanto outros são preteridos?</span>
          </h2>
          <div className="w-24 h-1.5 bg-agro-gold mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="space-y-12 mb-16">
          {/* BLOCO: O MERCADO (O PROBLEMA) */}
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-200">
            <div className="flex flex-col md:flex-row gap-6 md:items-center mb-10">
              <div className="shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-700">Formações Genéricas em Perícia</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Ênfase excessiva em teoria jurídica",
                "Ausência de modelos reais validados",
                "Nenhuma orientação estratégica",
                "Falta de contextualização prática",
                "Insegurança no posicionamento",
                "Foco apenas no conteúdo do CPC"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-300 rounded-full shrink-0"></span>
                  <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCO: MÉTODO E.P.A. (A SOLUÇÃO) */}
          <div className="bg-agro-green text-white rounded-[2.5rem] p-10 md:p-14 border-2 border-agro-gold shadow-2xl relative">
            <div className="flex flex-col md:flex-row gap-6 md:items-center mb-10">
              <div className="shrink-0 w-12 h-12 bg-agro-gold text-agro-green rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-agro-gold">Método ELITE – Instituto Perito Agro</h3> <p className="mt-4 text-lg md:text-xl font-semibold text-white">
  Estruturação Pericial Agroambiental
</p>

<p className="text-sm md:text-base text-slate-200 italic mt-1">
  O método que encurta 10 anos de atuação na perícia agroambiental.
</p>

            
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Estratégias reais para nomeações",
                "Modelos de laudos robustos",
                "Foco na visão do Judiciário",
                "Gestão profissional de honorários",
                "Postura técnica institucional",
                "Técnicas contra impugnações"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-agro-gold rounded-full shrink-0"></span>
                  <span className="text-slate-100 font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#inscricao" className="inline-block px-12 py-5 bg-agro-green text-white font-bold text-xl rounded-xl shadow-xl hover:bg-agro-gold transition-all transform hover:scale-105">
            EU QUERO O MÉTODO ELITE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
