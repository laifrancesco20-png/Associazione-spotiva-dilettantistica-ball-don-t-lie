import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Trophy, MapPin, Mail, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { AppRoutes } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollToCards = () => {
    const element = document.getElementById('cards-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[88vh] min-h-[620px] flex items-center justify-center overflow-hidden bg-[#1A202C]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ParallaxImage src="https://picsum.photos/seed/sports_sardinia/1920/1080" alt="" speed={0.3} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,32,44,0.72)_0%,rgba(26,32,44,0.82)_60%,#F8FAFC_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white -mt-10">
          <h1 className="hero-in text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] mb-6">
            Dove lo sport incontra <br className="hidden md:block"/>
            <span className="text-gradient">la comunità</span>
          </h1>
          <p className="hero-in [animation-delay:150ms] text-lg md:text-xl text-slate-200/90 tracking-wide max-w-3xl mx-auto mb-10">
            Ball Don't Lie • Open Riviera del Corallo • The Island Padel Tour
          </p>
          <div className="hero-in [animation-delay:300ms] flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleScrollToCards} className="text-base px-9 py-4">
              Scopri i tornei
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards-section" className="pt-4 pb-24 px-4 md:px-6 max-w-7xl mx-auto -mt-28 relative z-20 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Reveal delay={0} className="cursor-pointer group" onClick={() => navigate(AppRoutes.ABOUT)}>
            <Card className="h-full border-t-4 border-t-[#FF6B35] flex flex-col items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Chi siamo</h3>
                <p className="text-slate-600 leading-relaxed">Scopri la storia della nostra associazione e i valori che ci guidano.</p>
              </div>
              <div className="mt-auto pt-2 flex items-center text-[#FF6B35] font-bold text-sm">
                Approfondisci <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100} className="cursor-pointer group" onClick={() => navigate(AppRoutes.BDL)}>
            <Card className="h-full border-t-4 border-t-[#E53E3E] flex flex-col items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E53E3E] group-hover:bg-[#E53E3E] group-hover:text-white transition-colors duration-300">
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Ball Don't Lie</h3>
                <p className="text-slate-600 leading-relaxed">Il torneo di basket 3vs3 più caldo dell'estate sarda.</p>
              </div>
              <div className="mt-auto pt-2 flex items-center text-[#E53E3E] font-bold text-sm">
                Vai al Basket <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={200} className="cursor-pointer group" onClick={() => navigate(AppRoutes.OPEN_RIVIERA)}>
            <Card className="h-full border-t-4 border-t-[#4A90E2] flex flex-col items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#4A90E2] group-hover:bg-[#4A90E2] group-hover:text-white transition-colors duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2">Open Riviera del Corallo</h3>
                <p className="text-slate-600 leading-relaxed">Il grande padel torna ad Alghero. Un evento imperdibile.</p>
              </div>
              <div className="mt-auto pt-2 flex items-center text-[#4A90E2] font-bold text-sm">
                Vai al Padel <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0} className="cursor-pointer group lg:col-span-2" onClick={() => navigate(AppRoutes.PADEL_TOUR)}>
            <Card className="h-full border-t-4 border-t-[#4A90E2] flex flex-col items-start gap-5">
              <div className="flex items-center gap-4 w-full">
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#4A90E2] group-hover:bg-[#4A90E2] group-hover:text-white transition-colors duration-300">
                  <Trophy size={28} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">The Island Padel Tour</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Il circuito regionale che unisce la Sardegna. 6 tappe, un master finale, un'unica grande passione.
              </p>
              <div className="mt-auto pt-2 flex items-center text-[#4A90E2] font-bold text-sm">
                Scopri il circuito <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Reveal>

          <Reveal
            delay={100}
            className="cursor-pointer group"
            onClick={() => window.open('https://wa.me/393348983764', '_blank')}
          >
            <Card className="relative overflow-hidden h-full flex flex-col items-start gap-5 bg-[#1A202C] border-[#1A202C] text-white">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#4A90E2]/20 blur-3xl pointer-events-none"></div>
              <div className="relative w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF6B35] transition-colors duration-300">
                <Mail size={28} />
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold tracking-tight mb-2">Contattaci</h3>
                <p className="text-slate-400 leading-relaxed">Vuoi collaborare o hai domande sui nostri eventi?</p>
              </div>
              <div className="relative mt-auto pt-2 flex items-center text-white font-bold text-sm">
                Scrivici su WhatsApp <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Card>
          </Reveal>

        </div>
      </section>
    </div>
  );
};

export default Home;
