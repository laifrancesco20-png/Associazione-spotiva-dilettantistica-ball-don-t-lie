import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchX, Home } from 'lucide-react';
import Button from '../components/Button';
import { AppRoutes } from '../types';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden min-h-[75vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="absolute top-10 left-1/2 -translate-x-[70%] w-[32rem] h-[32rem] rounded-full bg-[#FF6B35]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 translate-x-[10%] w-[26rem] h-[26rem] rounded-full bg-[#E53E3E]/10 blur-3xl pointer-events-none"></div>
      <div className="relative w-28 h-28 bg-[#FF6B35]/15 rounded-full ring-8 ring-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] mb-8">
        <SearchX size={48} />
      </div>
      <h1 className="hero-in [animation-delay:100ms] relative text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white mb-6">
        Pagina <span className="text-gradient">non trovata</span>
      </h1>
      <p className="hero-in [animation-delay:200ms] relative text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed">
        La pagina che cerchi non esiste o è stata spostata. Torna alla home per scoprire i nostri tornei.
      </p>
      <Button onClick={() => navigate(AppRoutes.HOME)} className="hero-in [animation-delay:300ms] relative">
        <Home size={20} />
        Torna alla home
      </Button>
    </div>
  );
};

export default NotFound;
