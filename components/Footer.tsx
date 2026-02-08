
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12 px-6 border-t border-primary/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-primary font-medium tracking-wider text-xs uppercase">Reserva do Sal – Boutique Living</p>
          <p className="text-primary/50 text-xs">Todos os direitos reservados © {new Date().getFullYear()}</p>
        </div>
        <div className="flex space-x-8 text-primary/70 text-[10px] uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};
