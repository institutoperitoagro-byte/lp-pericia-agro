
import React, { useState, useEffect } from 'react';

const StickyOffer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos em segundos
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!isVisible || timeLeft <= 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 hidden md:block animate-bounce-in">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-agro-green border-2 border-agro-gold rounded-2xl shadow-2xl p-4 flex items-center justify-between gap-6 backdrop-blur-lg bg-opacity-95">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-agro-gold rounded-full flex items-center justify-center animate-pulse">
              <span className="text-agro-green font-bold">%</span>
            </div>
            <div className="text-white">
              <h4 className="font-bold text-sm">
                CONDIÇÃO ESPECIAL <span className="text-agro-gold">DISPONÍVEL NESTA SESSÃO</span>
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-slate-400 text-[9px] uppercase font-bold tracking-tighter">Expira em:</p>
              <p className="text-white font-mono text-xl font-bold">{formatTime(timeLeft)}</p>
            </div>
            <a 
              href="#inscricao" 
              className="bg-agro-gold hover:bg-white text-agro-green font-bold px-6 py-2.5 rounded-lg transition-all text-sm whitespace-nowrap shadow-md"
            >
              GARANTIR MINHA VAGA
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyOffer;
