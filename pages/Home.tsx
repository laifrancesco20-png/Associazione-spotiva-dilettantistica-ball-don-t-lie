import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Trophy, MapPin, Mail, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { AppRoutes } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollToCards = () => {
    const element = document.getElementById('cards-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/seed/sports_sardinia/1920/1080")', 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F7FAFC]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Dove lo sport incontra <br className="hidden md:block"/>
            <span className="text-[#FF6B35]">la comunità</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
            Ball Don't Lie • Open Riviera del Corallo • The Island Padel Tour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button onClick={handleScrollToCards} className="text-lg px-8">
              Scopri i tornei
            </Button>
            <Button variant="outline" className="text-lg px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Calendario 2026
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards-section" className="py-20 px-4 md:px-6 max-w-7xl mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div onClick={() => navigate(AppRoutes.ABOUT)} className="cursor-pointer">
            <Card className="h-full border-t-4 border-[#FF6B35] flex flex-col items-start gap-4 hover:bg-orange-50 transition-colors">
              <div className="p-3 bg-orange-100 rounded-lg text-[#FF6B35]">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Chi siamo</h3>
                <p className="text-gray-600">Scopri la storia della nostra associazione e i valori che ci guidano.</p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-[#FF6B35] font-semibold">
                Approfondisci <ArrowRight size={16} className="ml-2" />
              </div>
            </Card>
          </div>

          <div onClick={() => navigate(AppRoutes.BDL)} className="cursor-pointer">
            <Card className="h-full border-t-4 border-[#E53E3E] flex flex-col items-start gap-4 hover:bg-red-50 transition-colors">
              <div className="p-3 bg-red-100 rounded-lg text-[#E53E3E]">
                <Trophy size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ball Don't Lie</h3>
                <p className="text-gray-600">Il torneo di basket 3vs3 più caldo dell'estate sarda.</p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-[#E53E3E] font-semibold">
                Vai al Basket <ArrowRight size={16} className="ml-2" />
              </div>
            </Card>
          </div>

          <div onClick={() => navigate(AppRoutes.OPEN_RIVIERA)} className="cursor-pointer">
            <Card className="h-full border-t-4 border-[#4A90E2] flex flex-col items-start gap-4 hover:bg-blue-50 transition-colors">
              <div className="p-3 bg-blue-100 rounded-lg text-[#4A90E2]">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Open Riviera del Corallo</h3>
                <p className="text-gray-600">Il grande padel torna ad Alghero. Un evento imperdibile.</p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-[#4A90E2] font-semibold">
                Vai al Padel <ArrowRight size={16} className="ml-2" />
              </div>
            </Card>
          </div>

          <div onClick={() => navigate(AppRoutes.PADEL_TOUR)} className="cursor-pointer lg:col-span-2">
            <Card className="h-full border-t-4 border-[#4A90E2] flex flex-col items-start gap-4 hover:bg-blue-50 transition-colors">
              <div className="flex items-center gap-4 w-full">
                <div className="p-3 bg-blue-100 rounded-lg text-[#4A90E2]">
                  <Trophy size={32} />
                </div>
                <h3 className="text-xl font-bold">The Island Padel Tour</h3>
              </div>
              <p className="text-gray-600">
                Il circuito regionale che unisce la Sardegna. 10 tappe, un master finale, un'unica grande passione.
              </p>
              <div className="mt-auto pt-2 flex items-center text-[#4A90E2] font-semibold">
                Scopri il circuito <ArrowRight size={16} className="ml-2" />
              </div>
            </Card>
          </div>

          <div 
            className="cursor-pointer"
            onClick={() => window.open('https://wa.me/393348983764', '_blank')}
          >
            <Card className="h-full border-t-4 border-gray-800 flex flex-col items-start gap-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              <div className="p-3 bg-gray-700 rounded-lg text-white">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contattaci</h3>
                <p className="text-gray-400">Vuoi collaborare o hai domande sui nostri eventi?</p>
              </div>
              <div className="mt-auto pt-4 flex items-center text-white font-semibold">
                Scrivici su WhatsApp <ArrowRight size={16} className="ml-2" />
              </div>
            </Card>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;