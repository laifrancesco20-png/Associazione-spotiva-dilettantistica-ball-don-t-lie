import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { Calendar, Users, MapPin, Camera } from 'lucide-react';
import { AppRoutes } from '../types';

const BallDontLie: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C] via-[#1A202C]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 bg-[#FF6B35] text-white text-sm font-bold rounded-full mb-4">
              BASKET 3vs3
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ball Don't Lie <br/>
              <span className="text-[#FF6B35]">Estate Sardegna</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Il torneo streetball di riferimento. Dove il talento incontra l'asfalto e il tramonto di Alghero.
            </p>
            <Button 
              className="text-lg px-8 py-4"
              onClick={() => navigate(AppRoutes.WIP)}
            >
              Iscriviti 2026
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 rounded-full text-[#FF6B35]">
                <Calendar size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">8 Edizioni</h4>
                <p className="text-gray-600">Una storia di successo crescente</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 rounded-full text-[#FF6B35]">
                <Users size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Livello Top</h4>
                <p className="text-gray-600">Giocatori nazionali + Amatori</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 rounded-full text-[#FF6B35]">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-gray-600">Parco Santa Giulia, Alghero</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid - Custom Layout for User Images */}
      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Momenti Epici</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
            
            {/* 1. Dunk - Vertical Image (Left, spans 2 rows) */}
            <div className="md:row-span-2 relative group overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img 
                src="https://i.postimg.cc/901LQ2F3/foto1.png" 
                alt="Schiacciata spettacolare Ball Don't Lie" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-bold text-2xl">Showtime</p>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100">L'intensità del gioco</p>
              </div>
            </div>

            {/* 2. Group - Wide Image (Top Right, spans 2 cols) */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2070&auto=format&fit=crop" 
                alt="Foto di gruppo partecipanti e staff" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-bold text-2xl">La Community</p>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Uniti dalla passione per il basket</p>
              </div>
            </div>

            {/* 3. Court Prep (Bottom Middle) */}
            <div className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2186&auto=format&fit=crop" 
                alt="Preparazione del campo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-bold text-xl">Work in Progress</p>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Cura dei dettagli</p>
              </div>
            </div>

            {/* 4. Crowd (Bottom Right) */}
            <div className="relative group overflow-hidden rounded-xl cursor-pointer shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518063311540-06405f63b46a?q=80&w=2070&auto=format&fit=crop" 
                alt="Pubblico e atmosfera serale" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-bold text-xl">Atmosfera Unica</p>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Alghero by night</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Button 
              variant="secondary" 
              className="px-8"
              onClick={() => window.open('https://drive.google.com/drive/folders/1PF-23AnDpQl-35gpxFZ8L94dmQlln4zK', '_blank')}
            >
              <Camera className="w-5 h-5 mr-2" />
              Galleria Completa
            </Button>
            <Button 
              className="px-8"
              onClick={() => navigate(AppRoutes.WIP)}
            >
              Prossima Edizione 2026
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BallDontLie;