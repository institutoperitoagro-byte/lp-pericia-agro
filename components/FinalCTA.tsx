
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-agro-green text-white text-center relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-agro-gold rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
          Sua nova jornada profissional <br className="hidden md:block" /> 
          começa <span className="text-agro-gold italic">neste clique.</span>
        </h2>

        <p className="text-xl md:text-2xl mb-14 text-slate-300 max-w-3xl mx-auto leading-relaxed">
          O mercado não espera. Garanta seu lugar no Método ELITE e transforme seu conhecimento técnico em autoridade judicial hoje mesmo.
        </p>

        <div className="flex flex-col items-center gap-8">
          <a href="https://chk.eduzz.com/ftqmnpka"
             className="group relative bg-agro-gold text-agro-green px-16 py-7 rounded-2xl font-bold text-2xl hover:bg-white transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.3)] inline-block">
             <span className="relative z-10">GARANTIR MINHA VAGA AGORA</span>
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl"></div>
          </a>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
               <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-agro-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">Pagamento 100% Criptografado</span>
               </div>
               <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-agro-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">Acesso Imediato à Plataforma</span>
               </div>
            </div>

            <div className="flex justify-center gap-6 opacity-30 grayscale brightness-200">
              <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-1.png" alt="Visa" className="h-4" />
              <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="Mastercard" className="h-4" />
              <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-1.png" alt="Pix" className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
