
import React, { useState, useEffect } from 'react';

const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a barra após 500px de scroll
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-agro-green text-white p-4 flex justify-between items-center z-[70] md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-agro-gold/30 animate-bounce-in">
      <div className="flex flex-col">
        <span className="text-xs text-agro-gold font-bold uppercase tracking-tighter">Método E.P.A.</span>
        <span className="font-bold text-sm">Torne-se Perito Judicial</span>
      </div>
      <a href="#inscricao" className="bg-agro-gold text-agro-green px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg active:scale-95 transition-transform">
        INSCREVER AGORA
      </a>
    </div>
  );
};

export default MobileStickyBar;
