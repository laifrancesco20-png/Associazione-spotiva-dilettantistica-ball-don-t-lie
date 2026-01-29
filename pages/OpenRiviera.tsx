import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Trophy, Users, Star, Camera, Calendar } from 'lucide-react';
import { AppRoutes } from '../types';

const OpenRiviera: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Sardinia/Padel Graphics */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-[#1A202C]">
        {/* Background Image: Iconic Alghero (Riviera del Corallo) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528150230181-99bbf7942a8a?q=80&w=2071&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C] via-[#1A202C]/60 to-transparent"></div>
        </div>

        {/* Sardinia Silhouette Graphic behind the title */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
          <svg width="400" height="600" viewBox="0 0 400 600" fill="white" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified Sardinia Path */}
            <path d="M190 20C210 30 230 40 240 60C250 80 260 100 270 120C280 140 300 160 310 180C320 200 330 220 325 240C320 260 310 280 305 300C300 320 300 340 305 360C310 380 320 400 325 420C330 440 325 460 315 480C305 500 280 520 250 540C220 560 190 575 160 580C130 585 100 580 80 560C60 540 50 510 45 480C40 450 40 420 50 390C60 360 75 330 75 300C75 270 65 240 55 210C45 180 30 150 40 120C50 90 80 70 110 50C140 30 170 10 190 20Z" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-block px-4 py-1 bg-[#FF6B35] text-white text-sm font-bold rounded-full">
                PADEL OPEN
              </div>
              <div className="w-12 h-[2px] bg-white/30"></div>
              <span className="text-white/70 text-sm font-semibold tracking-widest uppercase">Alghero • Sardegna</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 leading-[0.9] drop-shadow-2xl">
              Open riviera <br/>
              <span className="text-[#FF6B35]">del Corallo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-xl border-l-4 border-[#FF6B35] pl-6">
              L'appuntamento d'eccellenza per il padel ad Alghero. Competizione, spettacolo e l'energia della nostra terra.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="text-lg px-8 py-4 bg-[#FF6B35] hover:bg-[#e85a2a] shadow-xl shadow-orange-500/20"
                onClick={() => navigate(AppRoutes.WIP)}
              >
                Prossima Edizione 2026
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="p-4 bg-orange-50 rounded-2xl text-[#FF6B35]">
                <Trophy size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900">Torneo Open</h4>
                <p className="text-gray-600">Aperto a tutti i livelli</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="p-4 bg-orange-50 rounded-2xl text-[#FF6B35]">
                <Users size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900">Community</h4>
                <p className="text-gray-600">Oltre 100 partecipanti</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="p-4 bg-orange-50 rounded-2xl text-[#FF6B35]">
                <Star size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900">Prestigio</h4>
                <p className="text-gray-600">Premi di alto livello</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">La nostra Storia</h2>
            <div className="w-20 h-1.5 bg-[#FF6B35] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">Un percorso di crescita costante che ha reso l'Open Riviera un punto di riferimento per il Padel in Sardegna.</p>
          </div>

          <div className="relative border-l-4 border-orange-200 ml-6 md:ml-0 space-y-20">
            {/* Stage 1 - 2023 */}
            <div className="relative pl-10 md:pl-0">
              <div className="md:flex items-center justify-between group">
                <div className="absolute -left-[10px] md:left-auto md:right-1/2 md:-mr-[10px] w-5 h-5 rounded-full bg-[#FF6B35] border-4 border-white shadow-sm transition-transform group-hover:scale-125 z-10"></div>
                <div className="md:w-[45%] md:pr-10 md:text-right">
                  <div className="text-lg font-bold text-[#FF6B35] mb-1">2023</div>
                  <h3 className="text-3xl font-black text-gray-900">1° Edizione</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">L'inizio di una nuova sfida. Alghero accoglie il padel con un entusiasmo senza precedenti.</p>
                </div>
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>

            {/* Stage 2 - 2024 */}
            <div className="relative pl-10 md:pl-0">
              <div className="md:flex items-center justify-between group flex-row-reverse">
                <div className="absolute -left-[10px] md:left-auto md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-[#FF6B35] border-4 border-white shadow-sm transition-transform group-hover:scale-125 z-10"></div>
                <div className="md:w-[45%] md:pl-10 text-left">
                  <div className="text-lg font-bold text-[#FF6B35] mb-1">2024</div>
                  <h3 className="text-3xl font-black text-gray-900">2° Edizione</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">Consolidamento e record di iscritti. Il torneo attira giocatori da tutta l'isola.</p>
                </div>
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>

            {/* Stage 3 - 2025 */}
            <div className="relative pl-10 md:pl-0">
              <div className="md:flex items-center justify-between group">
                <div className="absolute -left-[10px] md:left-auto md:right-1/2 md:-mr-[10px] w-5 h-5 rounded-full bg-[#FF6B35] border-4 border-white shadow-sm transition-transform group-hover:scale-125 z-10"></div>
                <div className="md:w-[45%] md:pr-10 md:text-right">
                  <div className="text-lg font-bold text-[#FF6B35] mb-1">2025</div>
                  <h3 className="text-3xl font-black text-gray-900">3° Edizione</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">L'edizione della maturità. Livello tecnico altissimo e grande partecipazione di pubblico.</p>
                </div>
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>

            {/* Stage 4 - 2026 */}
            <div className="relative pl-10 md:pl-0">
              <div className="md:flex items-center justify-between group flex-row-reverse">
                <div className="absolute -left-[10px] md:left-auto md:left-1/2 md:-ml-[10px] w-8 h-8 rounded-full bg-[#FF6B35] border-4 border-white shadow-lg animate-pulse z-10"></div>
                <div className="md:w-[45%] md:pl-10 text-left">
                  <div className="text-lg font-bold text-[#FF6B35] mb-1">Prossimamente</div>
                  <h3 className="text-3xl font-black text-[#FF6B35]">Verso il 2026</h3>
                  <p className="text-gray-700 mt-3 font-medium italic text-lg leading-relaxed">Preparate le racchette. La prossima edizione supererà ogni aspettativa.</p>
                </div>
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">Momenti di Gioco</h2>
            <p className="text-gray-500 mt-4 text-lg">L'intensità e l'eleganza del padel nella cornice di Alghero.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto h-[400px] md:h-[600px] bg-gray-100 rounded-3xl overflow-hidden group relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop" 
                alt="Padel Match Action" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden group relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1626224580175-340ad0e3a736?q=80&w=600&auto=format&fit=crop" 
                alt="Padel Detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden group relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1613915611241-766116239f28?q=80&w=600&auto=format&fit=crop" 
                alt="Tournament Atmosphere" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            <div className="md:col-span-2 aspect-video bg-gray-100 rounded-3xl overflow-hidden group relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1000&auto=format&fit=crop" 
                alt="Team Spirit" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-20">
            <Button 
              className="px-10 py-5 bg-[#FF6B35] hover:bg-[#e85a2a] text-lg"
              onClick={() => window.open('https://drive.google.com/drive/folders/1P9iwsO8_joAiYVNAeboUNwTWWq3FFIqs', '_blank')}
            >
              <Camera className="w-6 h-6 mr-2" />
              Galleria Completa
            </Button>
            <Button 
              className="px-10 py-5 bg-[#FF6B35] hover:bg-[#e85a2a] text-lg"
              onClick={() => navigate(AppRoutes.WIP)}
            >
              <Calendar className="w-6 h-6 mr-2" />
              Prossima Edizione 2026
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenRiviera;