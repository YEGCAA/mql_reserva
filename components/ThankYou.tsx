
import React from 'react';

interface ThankYouProps {
  onBack: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-center px-6">
      <div className="fade-in max-w-xl space-y-8">
        <img 
          src="https://meu-bucket-highcontorno.s3.us-east-2.amazonaws.com/RESERVA/LOGO+BRANCA.png" 
          alt="Reserva do Sal Logo" 
          className="w-32 mx-auto mb-12 opacity-80"
        />
        
        <div className="space-y-4">
          <svg className="w-16 h-16 text-secondary/60 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-secondary text-4xl md:text-5xl font-light tracking-tight">Obrigado pelo interesse.</h1>
          <p className="text-secondary/80 text-xl font-light leading-relaxed">
            Em breve, um consultor da nossa equipe comercial entrará em contato com você para apresentar todos os detalhes do <span className="font-normal text-secondary">Reserva do Sal</span>.
          </p>
        </div>

        <div className="pt-8">
          <button 
            onClick={onBack}
            className="text-secondary/50 hover:text-secondary text-sm uppercase tracking-widest transition-colors border-b border-transparent hover:border-secondary"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};
