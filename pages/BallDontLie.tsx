import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { Calendar, Users, MapPin, Camera } from 'lucide-react';
import { AppRoutes } from '../types';

const gallery = [
  {
    src: '/prova.svg',
    alt: "Schiacciata spettacolare Ball Don't Lie",
    title: 'Showtime',
    text: "L'intensità del gioco",
    className: 'md:row-span-2',
  },
  {
    src: '/prova.svg',
    alt: 'Foto di gruppo partecipanti e staff',
    title: 'La Community',
    text: 'Uniti dalla passione per il basket',
    className: 'md:col-span-2',
  },
  {
    src: '/prova.svg',
    alt: 'Preparazione del campo',
    title: 'Work in Progress',
    text: 'Cura dei dettagli',
    className: '',
  },
  {
    src: '/prova.svg',
    alt: 'Pubblico e atmosfera serale',
    title: 'Atmosfera Unica',
    text: 'Alghero by night',
    className: '',
  },
];

const BallDontLie: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="px-3 sm:px-6 pt-3 sm:pt-6">
        <div className="relative max-w-7xl mx-auto min-h-[540px] md:h-[64vh] rounded-[2rem] overflow-hidden bg-[#141B2D] flex items-end md:items-center">
          <ParallaxImage src="/prova.svg" speed={0.2} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141B2D] via-[#141B2D]/75 to-[#141B2D]/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141B2D]/80 via-transparent to-transparent md:hidden"></div>

          <div className="relative z-10 w-full px-6 sm:px-12 pt-16 pb-24 md:pb-16">
            <div className="max-w-2xl">
              <div className="hero-in inline-flex items-center gap-2 px-4 py-1.5 bg-[#E53E3E] text-white text-xs font-bold tracking-[0.12em] rounded-full mb-6 shadow-[0_8px_20px_-6px_rgba(229,62,62,0.6)]">
                BASKET 3vs3
              </div>
              <h1 className="hero-in [animation-delay:100ms] text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white mb-6 leading-[1.02] uppercase">
                Ball Don't Lie <br/>
                <span className="text-gradient">Estate Sardegna</span>
              </h1>
              <p className="hero-in [animation-delay:200ms] text-lg md:text-xl text-slate-300 leading-relaxed">
                Il torneo streetball di riferimento. Dove il talento incontra l'asfalto e il tramonto di Alghero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 -mt-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <Reveal delay={0}>
            <div className="h-full bg-white rounded-2xl p-6 border border-slate-100 border-t-4 border-t-[#FF6B35] shadow-[0_20px_40px_-20px_rgba(20,27,45,0.25)] flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF6B35]">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-snug">30 Luglio - 2 Agosto 2026</h4>
                <h4 className="font-bold text-lg leading-snug text-[#FF6B35]">8 Edizioni</h4>
                <p className="text-slate-500 text-sm mt-1">Una storia di successo crescente</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full bg-white rounded-2xl p-6 border border-slate-100 border-t-4 border-t-[#E53E3E] shadow-[0_20px_40px_-20px_rgba(20,27,45,0.25)] flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E53E3E]">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-snug">Livello Top</h4>
                <p className="text-slate-500 text-sm mt-1">Giocatori nazionali + Amatori</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="h-full bg-white rounded-2xl p-6 border border-slate-100 border-t-4 border-t-[#4A90E2] shadow-[0_20px_40px_-20px_rgba(20,27,45,0.25)] flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#4A90E2]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg leading-snug">Location</h4>
                <p className="text-slate-500 text-sm mt-1">Campo da basket Giardini Manca, Alghero</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo Grid - Custom Layout for User Images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">Momenti Epici</h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded-full mt-4"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[260px] md:auto-rows-[290px]">
            {gallery.map((photo, index) => (
              <Reveal key={photo.title} delay={index * 100} from="zoom" className={photo.className}>
                <div className="relative h-full group overflow-hidden rounded-2xl cursor-pointer shadow-[0_20px_40px_-20px_rgba(20,27,45,0.4)]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141B2D]/85 via-[#141B2D]/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="font-extrabold text-2xl tracking-tight">{photo.title}</p>
                    <p className="text-sm text-slate-200 mt-1">{photo.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
            <Button
              variant="secondary"
              className="px-8"
              onClick={() => window.open('https://drive.google.com/drive/folders/1PF-23AnDpQl-35gpxFZ8L94dmQlln4zK', '_blank')}
            >
              <Camera className="w-5 h-5" />
              Galleria Completa
            </Button>
            <Button
              className="px-8"
              onClick={() => navigate(AppRoutes.WIP)}
            >
              Prossima Edizione 2027
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default BallDontLie;
