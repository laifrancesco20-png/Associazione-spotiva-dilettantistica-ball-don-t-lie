import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Trophy, Calendar, MapPin, BarChart3, FileText, UserCheck } from 'lucide-react';
import { AppRoutes } from '../types';

const stages = [
  { id: 1, location: 'Olbia', club: 'Sporting Padel Olbia', date: 'Febbraio/Marzo' },
  { id: 2, location: 'Sassari', club: 'Padel Sassari (Padel Park)', date: 'Marzo' },
  { id: 3, location: 'Sassari', club: 'Sporting Padel Sassari', date: 'Aprile' },
  { id: 4, location: 'Alghero', club: 'Padel Club Alghero', date: 'Maggio' },
  { id: 5, location: 'Cagliari', club: 'DLF', date: 'Luglio' },
  { id: 6, location: 'Cagliari', club: 'Sportlife', date: 'Settembre' },
  { id: 7, location: 'Sassari', club: 'Muros Padel Club', date: 'Ottobre' },
  { id: 8, location: 'Olbia', club: 'Sporting Padel Olbia', date: 'Novembre' },
];

const IslandPadelTour: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen animate-fade-in">
      {/* Hero */}
      <section className="bg-white pb-16 pt-10 px-4 text-center border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="mx-auto w-24 h-24 bg-[#FF6B35] rounded-3xl rotate-3 flex items-center justify-center mb-10 shadow-xl">
            <Trophy size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-4">
            The Island <span className="text-[#FF6B35]">Padel Tour</span> 2026
          </h1>
          <div className="w-24 h-1.5 bg-[#FF6B35] mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Il circuito regionale d'eccellenza che unisce la Sardegna attraverso la passione per il padel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-[#FF6B35] hover:bg-[#e85a2a] px-8"
              onClick={() => navigate(AppRoutes.WIP)}
            >
              <BarChart3 size={20} className="mr-2" />
              Ranking Ufficiale
            </Button>
          </div>
        </div>
      </section>

      {/* Stats / Info Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A202C] text-white p-8 rounded-3xl shadow-2xl flex items-center justify-between group hover:scale-[1.02] transition-transform">
            <div>
              <div className="text-5xl font-black mb-1">9</div>
              <div className="text-[#FF6B35] font-bold text-sm tracking-widest uppercase">Appuntamenti</div>
              <div className="text-xs text-gray-400 mt-1 italic">8 Tappe + Master Finale</div>
            </div>
            <Trophy size={40} className="text-[#FF6B35] opacity-80 group-hover:rotate-12 transition-transform" />
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-between group hover:scale-[1.02] transition-transform">
            <div>
              <div className="text-5xl font-black mb-1 text-[#FF6B35]">Regione</div>
              <div className="text-gray-500 font-bold text-sm tracking-widest uppercase">Copertura</div>
              <div className="text-xs text-gray-400 mt-1">Da Olbia a Cagliari</div>
            </div>
            <MapPin size={40} className="text-orange-200 group-hover:translate-y-[-4px] transition-transform" />
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-between group hover:scale-[1.02] transition-transform">
            <div>
              <div className="text-5xl font-black mb-1 text-gray-900">3</div>
              <div className="text-gray-500 font-bold text-sm tracking-widest uppercase">Categorie</div>
              <div className="text-xs text-gray-400 mt-1">Maschile / Femminile / Misto</div>
            </div>
            <BarChart3 size={40} className="text-orange-200 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </section>

      {/* Calendar List */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-orange-50 rounded-xl">
            <Calendar className="text-[#FF6B35] w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-gray-900">Calendario Tappe 2026</h2>
        </div>
        
        <div className="space-y-4">
          {stages.map((stage) => (
            <div 
              key={stage.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B35] font-black text-xl group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                  {stage.id}
                </div>
                <div>
                  <h3 className="font-black text-xl text-gray-900">{stage.location}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
                    <MapPin size={14} className="text-[#FF6B35]" /> {stage.club}
                  </p>
                </div>
              </div>
              <div className="pl-16 sm:pl-0">
                <span className="inline-block px-4 py-2 bg-orange-50 text-[#FF6B35] rounded-xl text-sm font-bold tracking-wide uppercase">
                  {stage.date}
                </span>
              </div>
            </div>
          ))}
          
          {/* Master Finale Highlight */}
          <div className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] p-8 rounded-3xl shadow-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 border-b-4 border-[#FF6B35] group overflow-hidden relative">
            {/* Background Graphic */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <Trophy size={200} />
            </div>

            <div className="flex items-center gap-6 relative z-10 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#FF6B35] flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-orange-500/30">
                ★
              </div>
              <div>
                <h3 className="font-black text-2xl tracking-tight">Master Finale</h3>
                <p className="text-gray-400 font-medium">L'evento conclusivo che incorona i campioni</p>
              </div>
            </div>
            <div className="relative z-10 text-center">
              <div className="text-xs text-[#FF6B35] font-bold uppercase tracking-widest mb-1">Luogo da definire</div>
              <span className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-lg font-black block">
                DICEMBRE 2026
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons at Bottom */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button 
            variant="primary"
            className="px-12 py-5 bg-[#FF6B35] hover:bg-[#e85a2a] text-lg font-black shadow-orange-500/20 w-full md:w-auto"
            onClick={() => navigate(AppRoutes.WIP)}
          >
            <UserCheck className="w-6 h-6 mr-2" />
            Iscrizione
          </Button>
          <Button 
            variant="primary"
            className="px-12 py-5 bg-[#FF6B35] hover:bg-[#e85a2a] text-lg font-black shadow-orange-500/20 w-full md:w-auto"
            onClick={() => navigate(AppRoutes.WIP)}
          >
            <FileText className="w-6 h-6 mr-2" />
            Regolamento
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IslandPadelTour;