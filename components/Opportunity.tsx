
import React from 'react';

const Opportunity: React.FC = () => {
  const advantages = [
    {
      title: "Flexibilidade e Autonomia",
      desc: "Gerencie sua própria agenda e trabalhe de onde quiser, sem horários fixos."
    },
    {
      title: "Alta Remuneração",
      desc: "Honorários atrativos que proporcionam uma excelente fonte de renda principal ou extra."
    },
    {
      title: "Valorização Profissional",
      desc: "Ser nomeado por um juiz eleva seu status e autoridade na sua especialidade técnica."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="oportunidade">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-6 h-6 text-agro-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-agro-gold font-bold tracking-widest uppercase text-xs block">Oportunidade de Carreira</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-agro-green mb-6 font-bold leading-tight">
            Vantagens de ser um Perito Judicial
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center">
              <span className="text-agro-gold font-serif text-3xl font-bold opacity-20 block mb-6">0{idx + 1}</span>
              <h4 className="text-xl font-bold text-agro-green mb-3 font-serif">
                {adv.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[2.5rem] border border-agro-gold/20 shadow-lg overflow-hidden flex flex-col md:flex-row items-stretch">
          <div className="p-10 md:p-14 md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-serif text-agro-green font-bold mb-6 flex items-center gap-4">
              <svg className="w-8 h-8 text-agro-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.593-.903l-.547-.547z" />
              </svg>
              Como o curso vai te preparar para o campo?
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>Você aprenderá a se cadastrar e prospectar com estratégias reais, posicionando-se no ecossistema pericial como um expert respeitado.</p>
              <p className="font-semibold text-agro-green">Dominará a cobrança de honorários, quebrará objeções e criará laudos que resistem a qualquer impugnação.</p>
            </div>
            <div className="mt-10">
              <a href="https://chk.eduzz.com/ftqmnpka" className="inline-block px-10 py-5 bg-agro-gold text-agro-green font-bold rounded-xl shadow-lg hover:bg-agro-green hover:text-white transition-all transform hover:scale-105 uppercase tracking-wide">
                Garantir minha vaga agora
              </a>
            </div>
          </div>
          <div className="bg-agro-green md:w-1/3 p-10 flex flex-col justify-center text-center text-white border-l border-agro-gold/20">
             <p className="text-xl font-serif italic opacity-80 mb-6">"Você não entra perdido. Entra preparado."</p>
             <div className="h-0.5 w-12 bg-agro-gold mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
