
import React, { useState } from 'react';

interface LeadFormProps {
  onSubmit: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      onSubmit();
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form 
      className="max-w-lg mx-auto space-y-6 fade-in" 
      onSubmit={handleSubmit}
    >
      <div className="space-y-1">
        <label htmlFor="name" className="text-secondary/70 text-xs uppercase tracking-widest block ml-1">Nome Completo</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Como deseja ser chamado?"
          className="w-full bg-transparent border-b border-secondary/30 text-secondary py-4 px-1 focus:outline-none focus:border-secondary transition-colors placeholder:text-secondary/30"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-secondary/70 text-xs uppercase tracking-widest block ml-1">E-mail</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full bg-transparent border-b border-secondary/30 text-secondary py-4 px-1 focus:outline-none focus:border-secondary transition-colors placeholder:text-secondary/30"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-secondary/70 text-xs uppercase tracking-widest block ml-1">Telefone / WhatsApp</label>
        <input
          required
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(00) 00000-0000"
          className="w-full bg-transparent border-b border-secondary/30 text-secondary py-4 px-1 focus:outline-none focus:border-secondary transition-colors placeholder:text-secondary/30"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-8 py-5 bg-secondary text-primary font-bold uppercase tracking-widest text-sm shadow-2xl transition-all hover:bg-white hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          "Receber Apresentação Exclusiva"
        )}
      </button>
    </form>
  );
};
