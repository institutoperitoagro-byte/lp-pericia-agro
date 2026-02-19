
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- CONFIGURAÇÃO DE DADOS (SIMULADOR) ---
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

// --- COMPONENTE: HEADER ---
const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-50 py-6 md:py-10">
    <div className="container mx-auto px-6 md:px-8">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-agro-gold rounded-xl flex items-center justify-center shadow-xl">
          <span className="text-agro-green font-bold text-xl md:text-2xl">P</span>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg md:text-2xl leading-none text-white font-bold tracking-tight">Instituto Perito Agro</span>
          <span className="text-[8px] md:text-xs text-agro-gold font-bold uppercase tracking-[0.2em] mt-1">Líder em Formação de Peritos</span>
        </div>
      </div>
    </div>
  </header>
);

// --- COMPONENTE: HERO ---
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-agro-green">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover opacity-20" alt="Plantação agrícola" />
      <div className="absolute inset-0 bg-gradient-to-b from-agro-green/80 via-agro-green/95 to-agro-green"></div>
    </div>
    <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
      <h1 className="text-4xl md:text-7xl font-serif text-white leading-[1.1] mb-8 md:mb-10 font-bold max-w-6xl mx-auto">
        A demanda por perícias rurais cresce todos os anos — e <span className="text-agro-gold italic font-normal">faltam peritos</span> qualificados.
      </h1>
      <p className="text-lg md:text-3xl text-slate-300 max-w-4xl mx-auto mb-12 md:mb-16 font-light leading-relaxed">
        Este curso ensina a construir uma carreira sólida, rentável e valorizada na perícia judicial. Construa uma nova fonte de renda com <span className="text-white font-bold">autonomia profissional e honorários dignos.</span>
      </p>
      <div className="flex justify-center">
        <a href="#inscricao" className="animate-pulse-cta inline-block w-full md:w-auto px-10 md:px-14 py-5 md:py-6 bg-agro-gold text-agro-green font-bold text-xl md:text-2xl rounded-2xl shadow-2xl hover:bg-white transition-all transform hover:scale-105">
          QUERO COMEÇAR AGORA
        </a>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: DESAFIOS ---
const NewProfessionalChallenges = () => (
  <section className="py-20 md:py-32 bg-white" id="desafios-profissionais">
    <div className="container mx-auto px-6 md:px-8 max-w-5xl">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-6xl font-serif text-agro-green font-bold leading-tight mb-8 md:mb-10">
          Você também sente que sua profissão exige cada vez mais esforço e entrega <span className="text-agro-gold italic font-normal">cada vez menos retorno?</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
          Muitos profissionais das Ciências Agrárias enfrentam hoje desafios como:
        </p>
      </div>
      <div className="grid md:grid-cols-1 gap-y-6 md:gap-y-8 mb-16 md:mb-20 max-w-4xl mx-auto">
        {[
          "Renda instável dependente de safra, clima e mercado",
          "Trabalho intenso em campo, longos deslocamentos e desgaste físico constante",
          "Falta de valorização técnica mesmo após anos de experiência",
          "Ganhos limitados mesmo assumindo grandes responsabilidades",
          "Dificuldade de crescer profissionalmente sem depender apenas de volume de serviços",
          "Pouca previsibilidade financeira ao longo do ano"
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 md:gap-6 bg-slate-50 p-5 md:p-6 rounded-2xl border border-slate-100">
            <span className="text-agro-gold font-bold text-2xl md:text-3xl shrink-0 leading-none">✔</span>
            <p className="text-slate-800 font-medium text-lg md:text-2xl leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
      <div className="text-center space-y-10 md:space-y-12 max-w-5xl mx-auto border-t border-slate-100 pt-16 md:pt-20">
        <p className="text-xl md:text-3xl leading-relaxed text-slate-600">
          Enquanto isso, cresce silenciosamente a demanda do Judiciário por profissionais qualificados para atuar como peritos em conflitos envolvendo o meio rural.
        </p>
        <p className="text-2xl md:text-4xl font-serif font-bold text-agro-green leading-tight">
          A pergunta é: você vai continuar apenas executando serviços ou vai passar a atuar como <span className="text-agro-gold italic font-normal">especialista valorizado</span> nas decisões que definem milhões em patrimônio?
        </p>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: VANTAGENS ---
const Opportunity = () => (
  <section className="py-20 md:py-32 bg-slate-50" id="oportunidade">
    <div className="container mx-auto px-6 md:px-8 max-w-6xl">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-6xl font-serif text-agro-green mb-8 font-bold leading-tight">
          Vantagens de ser um Perito Judicial
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
        {[
          { title: "Flexibilidade e Autonomia", desc: "Gerencie sua própria agenda e trabalhe de onde quiser, sem horários fixos." },
          { title: "Alta Remuneração", desc: "Honorários atrativos que proporcionam uma excelente fonte de renda principal ou extra." },
          { title: "Valorização Profissional", desc: "Ser nomeado por um juiz eleva seu status e autoridade na sua especialidade técnica." }
        ].map((adv, idx) => (
          <div key={idx} className="bg-white p-10 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-slate-100 text-center hover:translate-y-[-10px] transition-all">
            <span className="text-agro-gold font-serif text-4xl md:text-5xl font-bold opacity-20 block mb-6 md:mb-8">0{idx + 1}</span>
            <h4 className="text-xl md:text-2xl font-bold text-agro-green mb-4 md:mb-6 font-serif leading-tight">{adv.title}</h4>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">{adv.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] border border-agro-gold/20 shadow-2xl overflow-hidden flex flex-col lg:flex-row items-stretch">
        <div className="p-10 md:p-16 lg:p-20 lg:w-2/3">
          <h3 className="text-2xl md:text-4xl font-serif text-agro-green font-bold mb-8 md:mb-10 flex items-center gap-4 md:gap-6">
            Como o curso vai te preparar para o campo?
          </h3>
          <div className="space-y-6 md:space-y-8 text-slate-700 leading-relaxed text-lg md:text-xl">
            <p>Você aprenderá a se cadastrar e prospectar com estratégias reais, posicionando-se no ecossistema pericial como um expert respeitado.</p>
            <p className="font-bold text-agro-green text-xl md:text-2xl border-l-4 border-agro-gold pl-5 md:pl-6">Dominará a cobrança de honorários, quebrará objeções e criará laudos que resistem a qualquer impugnação.</p>
          </div>
          <div className="mt-10 md:mt-14">
            <a href="#inscricao" className="inline-block w-full md:w-auto text-center px-10 md:px-12 py-5 md:py-6 bg-agro-gold text-agro-green font-bold rounded-2xl shadow-xl hover:bg-agro-green hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest text-base md:text-lg">Garantir minha vaga agora</a>
          </div>
        </div>
        <div className="bg-agro-green lg:w-1/3 p-10 md:p-14 flex flex-col justify-center text-center text-white border-t lg:border-t-0 lg:border-l border-agro-gold/20">
           <p className="text-xl md:text-2xl font-serif italic opacity-80 mb-6 md:mb-8 leading-relaxed">"Você não entra perdido. Entra preparado."</p>
           <div className="h-1 w-16 md:w-20 bg-agro-gold mx-auto"></div>
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: SIMULADOR ---
const HonorariosSimulator = () => {
  const [profissao, setProfissao] = useState("Eng. Agrônomo");
  const [complexidade, setComplexidade] = useState("baixa");
  const valorHora = valoresHora[profissao];
  const horas = horasPorComplexidade[complexidade as keyof typeof horasPorComplexidade];
  const total = valorHora * horas;

  return (
    <section className="py-20 md:py-32 bg-white" id="simulador">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-agro-green mb-6 md:mb-8 leading-tight">
            Quanto ganha um <span className="text-agro-gold italic font-normal">Perito Judicial?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            A remuneração depende de vários fatores ensinados com exclusividade no curso. Simule uma estimativa real abaixo:
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-14">
            <div className="space-y-4 md:space-y-6">
              <label className="text-agro-green font-bold text-xs md:text-sm uppercase tracking-[0.2em] block ml-1">Sua Profissão</label>
              <select
                className="w-full bg-white border-2 border-slate-200 p-4 md:p-6 rounded-2xl text-agro-green font-bold text-lg md:text-xl focus:ring-4 focus:ring-agro-gold/20 outline-none transition-all cursor-pointer"
                value={profissao}
                onChange={(e) => setProfissao(e.target.value)}
              >
                {Object.keys(valoresHora).map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div className="space-y-4 md:space-y-6">
              <label className="text-agro-green font-bold text-sm uppercase tracking-[0.2em] block ml-1">Complexidade da Perícia</label>
              <select
                className="w-full bg-white border-2 border-slate-200 p-4 md:p-6 rounded-2xl text-agro-green font-bold text-lg md:text-xl focus:ring-4 focus:ring-agro-gold/20 outline-none transition-all cursor-pointer"
                value={complexidade}
                onChange={(e) => setComplexidade(e.target.value)}
              >
                <option value="baixa">Baixa complexidade (11h)</option>
                <option value="media">Média complexidade (20h)</option>
                <option value="alta">Alta complexidade (30h)</option>
                <option value="altissima">Altíssima complexidade (60h)</option>
              </select>
            </div>
          </div>
          <div className="bg-agro-green text-white p-10 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl text-center border-2 border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-agro-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-agro-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 relative z-10">Estimativa de Honorários</p>
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 relative z-10">
              <span className="text-2xl md:text-4xl font-serif text-agro-gold font-bold">R$</span>
              <span className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tighter">
                {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 py-3 px-6 md:px-8 bg-white/10 rounded-full text-sm md:text-lg font-medium text-slate-200 border border-white/10 relative z-10">
              <span>{horas} horas de trabalho</span>
              <span className="hidden md:inline w-1.5 h-1.5 bg-agro-gold rounded-full"></span>
              <span>R$ {valorHora.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} / hora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE: DIFERENCIAÇÃO ---
const Differentiation = () => (
  <section className="py-24 bg-white" id="diferenciais">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-agro-green leading-tight">
          Por que alguns profissionais se consolidam <span className="text-agro-gold italic">enquanto outros são preteridos?</span>
        </h2>
      </div>
      <div className="space-y-12 mb-16">
        <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-14 border border-slate-200">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-700 mb-10 flex items-center gap-6">
            <span className="text-red-500 text-4xl font-bold">×</span> Formações Genéricas em Perícia
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Ênfase excessiva em teoria jurídica",
              "Ausência de modelos reais validados",
              "Nenhuma orientação estratégica",
              "Falta de contextualização prática",
              "Insegurança no posicionamento",
              "Foco apenas no conteúdo do CPC"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-600 text-lg">
                <span className="w-1.5 h-1.5 bg-red-300 rounded-full shrink-0"></span>{item}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-agro-green text-white rounded-[2.5rem] p-10 md:p-14 border-2 border-agro-gold shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-agro-gold mb-10 flex items-center gap-6">
            <span className="text-agro-gold text-4xl font-bold">✓</span> Método ELITE – Instituto Perito Agro
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Estratégias reais para nomeações",
              "Modelos de laudos robustos",
              "Foco na visão do Judiciário",
              "Gestão profissional de honorários",
              "Postura técnica institucional",
              "Técnicas contra impugnações"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-100 font-bold text-lg">
                <span className="w-1.5 h-1.5 bg-agro-gold rounded-full shrink-0"></span>{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: INSTRUTORA ---
const Instructor = () => (
  <section className="py-20 md:py-32 bg-white" id="instrutora">
    <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
      <div className="relative group order-2 lg:order-1">
        <div className="absolute -inset-4 md:-inset-6 border-2 border-agro-gold/30 rounded-[2.5rem] md:rounded-[3rem] translate-x-4 md:translate-x-6 translate-y-4 md:translate-y-6 -z-10"></div>
        <div className="overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl bg-agro-green">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Especialista em Perícia" className="w-full h-[500px] md:h-[700px] object-cover mix-blend-overlay opacity-90 transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border-l-8 border-agro-gold max-w-[260px] md:max-w-[320px]">
          <p className="text-agro-green font-serif text-xl md:text-2xl font-bold italic leading-tight">"A perícia é o caminho para a liberdade profissional."</p>
        </div>
      </div>
      <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
        <h2 className="text-3xl md:text-6xl font-serif font-bold text-agro-green leading-tight">Uma trajetória construída na <span className="text-agro-gold italic">prática forense</span></h2>
        <div className="space-y-6 md:space-y-8 text-slate-600 text-lg md:text-2xl leading-relaxed">
          <p>Sou engenheira agrônoma e escolhi a perícia como caminho profissional ainda na graduação, quando quase não havia informações e muitos diziam que era preciso anos de experiência.</p>
          <p className="bg-slate-50 p-8 md:p-10 rounded-2xl md:rounded-3xl border-l-4 border-agro-gold italic text-lg md:text-xl">Iniciei na perícia de seguros rurais — uma experiência importante, mas que exigia longas viagens. Eu sabia que queria algo diferente.</p>
          <p>Hoje, na <strong>perícia judicial</strong>, uno boa remuneração, liberdade geográfica e tempo para qualidade de vida.</p>
          <p className="font-bold text-agro-green text-2xl md:text-3xl font-serif">Este curso nasce para encurtar o caminho de quem quer entrar na área com segurança.</p>
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: CURRÍCULO ---
const CourseCurriculum = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const modules = [
    { title: "Módulo 1: Introdução e Ética Profissional", lessons: ["Aula 1 — Fundamentos", "Aula 2 — Assistente da Justiça", "Aula 3 — Demandas reais", "Aula 4 — Ecossistema Pericial", "Aula 5 — Ética e Blindagem"] },
    { title: "Módulo 2: Estratégia de Carreira e Mercado", lessons: ["Aula 6 — Peritos Sempre Nomeados", "Aula 7 — Primeiras oportunidades", "Aula 8 — Nicho de Atuação", "Aula 9 — Fluxo das Nomeações"] },
    { title: "Módulo 3: Honorários e Negociação de Elite", lessons: ["Aula 10 — Precificação", "Aula 11 — Proposta Blindada", "Aula 11.3 — Checklist da proposta", "Aula 12 — AJG"] },
    { title: "Módulo 4: A Perícia no Processo Civil", lessons: ["Aula 13 — Prova pericial", "Aula 14 — Remuneração", "Aula 16 — Deveres e direitos", "Aula 18 — Requisitos do laudo"] },
    { title: "Módulo 5: Petições e Prática Forense", lessons: ["Aula 20 — Petições essenciais", "Aula 21 — Exemplo de laudo", "Aula 24 — PET Aceite", "Aula 27 — PET Antecipação", "Aula 30 — Resposta à impugnação"] },
    { title: "Módulo 6: Elaboração de Laudos e Inovação", lessons: ["Aula 31 — Estrutura do laudo", "Aula 32 — Jurisprudências úteis", "Aula 33 — IA na perícia"] },
    { title: "Módulo 7: Gestão de Crises e Resultados", lessons: ["Aula 34 — Perito vs Assistente", "Aula 35 — Laudo impugnado", "Aula 36 — Resposta a quesitos", "Aula 37 — Laudo deferido"] }
  ];
  return (
    <section className="py-20 md:py-32 bg-slate-50" id="curriculo">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-serif text-agro-green font-bold leading-tight">Conteúdo <span className="text-agro-gold italic">Programático</span></h2>
        </div>
        <div className="space-y-4">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] border-2 border-slate-200 overflow-hidden shadow-sm">
              <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full p-8 text-left flex justify-between items-center group">
                <span className="font-bold text-agro-green text-lg md:text-xl group-hover:text-agro-gold transition-colors">{m.title}</span>
                <span className="text-agro-gold text-2xl font-bold">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-10 pb-10 pt-4 bg-white border-t-2 border-slate-50">
                  <ul className="space-y-4">
                    {m.lessons.map((l, li) => <li key={li} className="text-slate-700 text-base md:text-lg flex gap-4"><span className="w-2 h-2 bg-agro-gold rounded-full mt-2.5 shrink-0"></span>{l}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE: TESTIMONIALS ---
const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 md:px-8 max-w-7xl">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-serif text-agro-green font-bold leading-tight">Quem seguiu, <span className="text-agro-gold italic">já está no topo</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { text: "Consegui minha primeira nomeação e hoje já atuo com segurança. O curso mostra exatamente a prática.", author: "Lidiane", role: "Eng. Agrônoma • PR" },
          { text: "O que antes parecia muito difícil ficou descomplicado. Realizei minha primeira perícia durante o curso.", author: "Diego", role: "Eng. Florestal • SP" },
          { text: "Encontrei o Método ELITE e salvou minha atuação. Consegui conduzir tudo corretamente.", author: "João", role: "Eng. Agrônomo • SP" },
          { text: "Em 3 meses após o curso, recebi minha primeira nomeação de R$ 8.500.", author: "Ricardo", role: "Eng. Agrônomo • MS" }
        ].map((t, i) => (
          <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all">
            <div className="text-agro-gold text-5xl font-serif mb-6 opacity-30">“</div>
            <p className="italic text-slate-600 mb-10 text-base leading-relaxed flex-grow">{t.text}</p>
            <div className="pt-6 border-t border-slate-200">
              <p className="font-bold text-agro-green font-serif text-lg">{t.author}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-agro-gold mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- COMPONENTE: PRICING (VALUE STACK ATUALIZADO) ---
const Pricing = () => (
  <section className="py-20 md:py-32 bg-agro-green relative overflow-hidden" id="inscricao">
    <div className="container mx-auto px-6 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row border-4 border-agro-gold">
        
        {/* LADO ESQUERDO: VALUE STACK */}
        <div className="lg:w-7/12 p-8 md:p-14 lg:p-20 text-agro-green">
          <h3 className="text-2xl md:text-4xl font-serif font-bold mb-10 md:mb-12 italic leading-tight">
            Invista uma vez na formação que pode gerar honorários por toda a sua carreira.
          </h3>
          <ul className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            {[
              { label: "Curso mais completo e exclusivo do Brasil", val: "R$ 2.997,00" },
              { label: "1 Mentoria Exclusiva de Acompanhamento", val: "R$ 1.500,00" },
              { label: "Kit de Petições e Laudos Editáveis", val: "R$ 199,00" },
              { label: "Prompts de IA para otimizar a atuação", val: "R$ 199,00" },
              { label: "Certificado de capacitação técnica (30h)", val: "Incluso" }
            ].map((item, i) => (
              <li key={i} className="flex items-start justify-between gap-4 font-bold text-lg md:text-2xl border-b border-slate-100 pb-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-agro-gold text-2xl md:text-3xl leading-none shrink-0">✔</span>
                  <span className="leading-tight">{item.label}</span>
                </div>
                <span className="text-agro-gold whitespace-nowrap opacity-60 italic text-base md:text-lg">{item.val}</span>
              </li>
            ))}
          </ul>
          <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border-2 border-slate-100">
             <p className="text-agro-green font-bold text-xl md:text-2xl mb-3 md:mb-4">Garantia incondicional de 7 dias</p>
             <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
               Acesse o curso e, se não gostar, devolvemos 100% do valor.
             </p>
          </div>
        </div>

        {/* LADO DIREITO: CHECKOUT */}
        <div className="lg:w-5/12 bg-slate-50 p-10 md:p-14 lg:p-20 text-center border-t-2 lg:border-t-0 lg:border-l-2 border-slate-200 flex flex-col justify-center">
          <p className="text-slate-400 line-through text-2xl md:text-3xl mb-4 opacity-60">De R$ 4.895,00</p>
          <p className="text-agro-green text-lg md:text-xl font-bold uppercase tracking-widest mb-6">Investimento Especial</p>
          <div className="flex flex-col items-center gap-2 mb-10">
            <div className="flex items-baseline gap-2">
              <span className="text-agro-gold text-2xl md:text-3xl font-bold">12x R$</span>
              <span className="text-agro-green text-7xl md:text-9xl font-serif font-bold tracking-tighter">199</span>
              <span className="text-agro-gold text-2xl md:text-3xl font-bold">,00</span>
            </div>
            <p className="mt-6 text-agro-green font-bold text-2xl md:text-3xl">Ou R$ 1.990,00 à vista no PIX</p>
          </div>
          <a href="#" className="w-full py-8 md:py-10 bg-agro-gold text-agro-green font-bold text-2xl md:text-3xl rounded-3xl shadow-2xl hover:bg-agro-green hover:text-white transition-all transform hover:scale-105 animate-pulse-cta uppercase tracking-widest">GARANTIR MINHA VAGA</a>
          <div className="mt-8 flex items-center justify-center gap-4 text-slate-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            <span className="text-base md:text-lg font-medium">Acesso imediato e seguro</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- COMPONENTE: FAQ ---
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: "Preciso ter experiência prévia?", a: "Não. A Formação foi desenhada para levar o profissional do zero absoluto até a segurança total na prática judicial." },
    { q: "Quais formações podem atuar?", a: "Engenheiros Agrônomos, Florestais, Veterinários, Zootecnistas, Biólogos e áreas correlatas com registro no conselho." },
    { q: "Recebo modelos prontos?", a: "Sim. Modelos editáveis de petições de honorários, manifestações e laudos técnicos completos em Word." },
    { q: "O curso foca na teoria?", a: "Não. Nosso foco é 100% na prática real, na dinâmica dos tribunais e na autoridade estratégica do perito." }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif text-agro-green font-bold text-center mb-16">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full p-6 text-left flex justify-between items-center group">
                <span className="font-bold text-agro-green text-lg">{faq.q}</span>
                <span className="text-agro-gold text-2xl font-bold">{openIdx === i ? '−' : '+'}</span>
              </button>
              {openIdx === i && <div className="px-6 pb-6 text-slate-600 text-lg border-t border-slate-100 pt-4">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE: FINAL CTA ---
const FinalCTA = () => (
  <section className="py-24 bg-agro-green text-white text-center relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight">Sua nova jornada profissional <span className="text-agro-gold italic">começa aqui.</span></h2>
      <p className="text-xl md:text-2xl mb-14 text-slate-300 max-w-3xl mx-auto leading-relaxed">Garanta seu lugar no Método ELITE e transforme seu conhecimento técnico em autoridade judicial hoje mesmo.</p>
      <a href="#inscricao" className="inline-block bg-agro-gold text-agro-green px-12 md:px-20 py-6 md:py-8 rounded-2xl font-bold text-2xl md:text-3xl hover:bg-white transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest">GARANTIR MINHA VAGA AGORA</a>
    </div>
  </section>
);

// --- COMPONENTE: FOOTER ---
const Footer = () => (
  <footer className="bg-[#05140d] text-white py-20 md:py-32 border-t border-agro-gold/20 text-center">
    <div className="container mx-auto px-6 md:px-8">
      <span className="font-serif text-3xl md:text-4xl text-white mb-8 block">Instituto <span className="text-agro-gold">Perito Agro</span></span>
      <p className="text-slate-400 max-w-2xl italic font-light mx-auto mb-12 md:mb-16 text-lg md:text-xl leading-relaxed">"A perícia é o caminho para a sua liberdade profissional e autoridade técnica no Agronegócio."</p>
      <p className="text-slate-600 text-[10px] md:text-xs pt-12 border-t border-white/5 uppercase font-bold tracking-[0.3em]">© 2026 Instituto Perito Agro. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
    </div>
  </footer>
);

// --- COMPONENTE PRINCIPAL: APP ---
const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 antialiased selection:bg-agro-gold selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <NewProfessionalChallenges />
        <Opportunity />
        <HonorariosSimulator />
        <Differentiation />
        <Instructor />
        <CourseCurriculum />
        <Testimonials />
        <FAQ />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />

      {/* STICKY OFFERS */}
      {showSticky && (
        <>
          {/* Mobile Bar */}
          <div className="fixed bottom-0 left-0 w-full bg-agro-green text-white p-4 flex justify-between items-center z-[70] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-agro-gold/30">
            <div className="flex flex-col">
              <span className="text-[10px] text-agro-gold font-bold uppercase tracking-tighter">Método ELITE</span>
              <span className="font-bold text-sm">Vagas Limitadas</span>
            </div>
            <a href="#inscricao" className="bg-agro-gold text-agro-green px-6 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform uppercase">INSCREVER</a>
          </div>
          
          {/* Desktop Offer */}
          <div className="fixed bottom-8 right-8 z-[60] hidden md:block">
            <div className="bg-agro-green border-2 border-agro-gold rounded-3xl shadow-2xl p-6 flex flex-col gap-4 max-w-xs animate-bounce-in">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-agro-gold rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-agro-green font-bold">%</span>
                </div>
                <div className="text-white">
                  <h4 className="font-bold text-sm leading-tight">OFERTA ESPECIAL <span className="text-agro-gold block">12x R$ 199,00</span></h4>
                </div>
              </div>
              <a href="#inscricao" className="bg-agro-gold hover:bg-white text-agro-green font-bold py-3 rounded-xl text-center transition-all text-sm uppercase tracking-widest shadow-md">GARANTIR VAGA</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}
