
import React from 'react';

interface FooterProps {
  sessionCode: string;
}

const Footer: React.FC<FooterProps> = ({ sessionCode }) => {
  return (
    <footer className="bg-agro-green text-white py-20 border-t border-agro-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-agro-gold rounded-full flex items-center justify-center">
                <span className="text-agro-green font-bold text-xl">P</span>
              </div>
              <span className="font-serif text-2xl tracking-tight text-white">
                Instituto <span className="text-agro-gold">Perito Agro</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
              Capacitando os novos profissionais da perícia judicial agrária no Brasil através da Formação de Peritos Judiciais de Elite, focada em autoridade técnica e resultados financeiros de impacto.
            </p>
            
            <div className="mt-8 inline-flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-agro-gold flex items-center justify-center">
                <svg className="w-5 h-5 text-agro-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-agro-gold leading-none mb-1">Página de Venda Autêntica</p>
                <p className="text-xs font-mono opacity-60">CERTIDÃO: {sessionCode || 'PERITO-ELITE-2026'}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-agro-gold font-bold mb-6 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#oportunidade" className="hover:text-agro-gold transition-colors">Vantagens</a></li>
              <li><a href="#simulador" className="hover:text-agro-gold transition-colors">Ganhos</a></li>
              <li><a href="#diferenciais" className="hover:text-agro-gold transition-colors">Metodologia</a></li>
              <li><a href="#instrutora" className="hover:text-agro-gold transition-colors">Mentora</a></li>
              <li><a href="#curriculo" className="hover:text-agro-gold transition-colors">Conteúdo Programático</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-agro-gold font-bold mb-6 uppercase tracking-widest text-sm">Inscrição</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#bonus" className="hover:text-agro-gold transition-colors">Bônus</a></li>
              <li><a href="#inscricao" className="hover:text-agro-gold transition-colors">Preços e Vagas</a></li>
              <li><a href="#" className="hover:text-agro-gold transition-colors">WhatsApp Suporte</a></li>
              <li><a href="#" className="hover:text-agro-gold transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Instituto Perito Agro. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <p>CNPJ: 00.000.000/0001-00</p>
            <p className="flex items-center gap-1">
              Made for the <span className="text-agro-gold">Agribusiness</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
