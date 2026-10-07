import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchX, Home } from 'lucide-react';
import Button from '../components/Button';
import { AppRoutes } from '../types';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-[#FF6B35] mb-8">
        <SearchX size={48} />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
        Pagina <span className="text-[#FF6B35]">non trovata</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-lg mb-12">
        La pagina che cerchi non esiste o è stata spostata. Torna alla home per scoprire i nostri tornei.
      </p>
      <Button onClick={() => navigate(AppRoutes.HOME)}>
        <Home size={20} className="mr-2" />
        Torna alla home
      </Button>
    </div>
  );
};

export default NotFound;
