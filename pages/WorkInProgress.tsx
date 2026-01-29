import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import { AppRoutes } from '../types';

const WorkInProgress: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-[#FF6B35] mb-8 animate-bounce">
        <Construction size={48} />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
        Work in <span className="text-[#FF6B35]">Progress</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-lg mb-12">
        Stiamo preparando la prossima grande edizione. Tornate a trovarci presto per scoprire tutte le novità del 2026!
      </p>
      <Button onClick={() => navigate(-1)} variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50">
        <ArrowLeft size={20} className="mr-2" />
        Torna indietro
      </Button>
    </div>
  );
};

export default WorkInProgress;