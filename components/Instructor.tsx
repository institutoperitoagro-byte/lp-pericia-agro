
import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="instrutora">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* FOTO E MOLDURA PREMIUM */}
        <div className="relative group">
          <div className="absolute -inset-4 border border-agro-gold/30 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10"></div>
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl bg-agro-green">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
              alt="Especialista em Perícia Judicial" 
              className="w-full h-[600px] object-cover mix-blend-overlay opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-agro-gold max-w-[240px]">
            <p className="text-agro-green font-serif text-lg font-bold italic leading-tight">"A perícia é o caminho para a liberdade profissional."</p>
          </div>
        </div>

        {/* CONTEÚDO DE AUTORIDADE */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-agro-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-agro-gold font-bold tracking-[0.3em] uppercase text-xs block">Conheça sua mentora</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-agro-green leading-tight">
              Uma trajetória construída na <span className="text-agro-gold italic">prática forense</span>
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              Sou engenheira agrônoma e escolhi a perícia como caminho profissional ainda na graduação, mesmo quando quase não havia informações e muitos diziam que era preciso anos de experiência ou contatos para conseguir atuar na área.
            </p>
            
            <p className="bg-slate-50 p-6 rounded-2xl border-l-2 border-agro-gold italic text-sm md:text-base">
              Iniciei minha carreira na perícia agrícola de seguros rurais — uma experiência importante, mas que exigia longas viagens, alto desgaste e renda sazonal. Eu sabia que queria algo diferente.
            </p>

            <p>
              Foi quando decidi investir de verdade na <strong>perícia judicial</strong>. Hoje, consigo unir boa remuneração, liberdade geográfica e tempo para desenvolver outros projetos e manter qualidade de vida.
            </p>
            
            <p className="font-semibold text-agro-green text-xl font-serif">
              Este curso nasce justamente para encurtar o caminho de quem quer entrar na área com segurança e direção clara.
            </p>
          </div>

          <div className="pt-8">
            <a 
              href="#inscricao" 
              className="inline-flex items-center justify-center gap-4 bg-agro-green text-white px-10 py-5 rounded-xl font-bold hover:bg-agro-gold transition-all shadow-xl group"
            >
              <span>ENCURTAR MEU CAMINHO AGORA</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
