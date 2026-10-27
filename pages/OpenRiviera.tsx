import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { Trophy, Users, Star, Camera, Calendar, MapPin } from 'lucide-react';
import { AppRoutes } from '../types';

const highlights = [
  { icon: Trophy, title: 'Torneo Open', text: 'Aperto a tutti i livelli', color: '#4A90E2', bg: 'bg-[#4A90E2]/15' },
  { icon: Users, title: 'Community', text: 'Oltre 100 partecipanti', color: '#FF6B35', bg: 'bg-[#FF6B35]/15' },
  { icon: Star, title: 'Prestigio', text: 'Premi di alto livello', color: '#E53E3E', bg: 'bg-[#E53E3E]/15' },
];

const editions = [
  {
    year: '2023',
    title: '1° Edizione',
    text: "L'inizio di una nuova sfida. Alghero accoglie il padel con un entusiasmo senza precedenti.",
  },
  {
    year: '2024',
    title: '2° Edizione',
    text: "Consolidamento e record di iscritti. Il torneo attira giocatori da tutta l'isola.",
  },
  {
    year: '2025',
    title: '3° Edizione',
    text: "L'edizione della maturità. Livello tecnico altissimo e grande partecipazione di pubblico.",
  },
];

const OpenRiviera: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section with Sardinia/Padel Graphics */}
      <section className="px-3 sm:px-6 pt-3 sm:pt-6">
        <div className="relative max-w-7xl mx-auto min-h-[580px] md:h-[70vh] rounded-[2rem] overflow-hidden bg-[#131A26] flex items-end md:items-center">
          {/* Background Image: Iconic Alghero (Riviera del Corallo) */}
          <ParallaxImage
            src="https://images.unsplash.com/photo-1528150230181-99bbf7942a8a?q=80&w=2071&auto=format&fit=crop"
            className="opacity-70"
            speed={0.2}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/65 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-transparent to-transparent md:hidden"></div>

          {/* Sardinia Silhouette Graphic behind the title */}
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
            <svg width="400" height="600" viewBox="0 0 400 600" fill="white" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified Sardinia Path */}
              <path d="M190 20C210 30 230 40 240 60C250 80 260 100 270 120C280 140 300 160 310 180C320 200 330 220 325 240C320 260 310 280 305 300C300 320 300 340 305 360C310 380 320 400 325 420C330 440 325 460 315 480C305 500 280 520 250 540C220 560 190 575 160 580C130 585 100 580 80 560C60 540 50 510 45 480C40 450 40 420 50 390C60 360 75 330 75 300C75 270 65 240 55 210C45 180 30 150 40 120C50 90 80 70 110 50C140 30 170 10 190 20Z" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full px-6 sm:px-12 pt-16 pb-24 md:pb-16">
            <div className="max-w-3xl">
              <div className="hero-in flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-block px-4 py-1.5 bg-[#FF6B35] text-white text-xs font-bold tracking-[0.12em] rounded-full shadow-[0_8px_20px_-6px_rgba(255,107,53,0.6)]">
                  PADEL OPEN
                </div>
                <div className="w-10 h-[2px] bg-white/30"></div>
                <span className="text-white/75 text-xs font-semibold tracking-[0.2em] uppercase">Alghero • Sardegna</span>
              </div>

              <h1 className="hero-in [animation-delay:100ms] text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-[-0.03em] text-white mb-6 leading-[0.95] uppercase">
                Open riviera <br/>
                <span className="text-gradient">del Corallo</span>
              </h1>

              <p className="hero-in [animation-delay:200ms] text-lg md:text-xl text-slate-200 mb-10 max-w-xl border-l-4 border-[#FF6B35] pl-5 leading-relaxed">
                L'appuntamento d'eccellenza per il padel ad Alghero. Competizione, spettacolo e l'energia della nostra terra.
              </p>

              <div className="hero-in [animation-delay:300ms] flex flex-wrap gap-4">
                <Button
                  className="text-base px-8 py-4"
                  onClick={() => navigate(AppRoutes.WIP)}
                >
                  Prossima Edizione 2027
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-10 -mt-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div
                className="h-full bg-[#131A26] rounded-2xl p-6 border border-white/10 border-t-4 shadow-[0_20px_40px_-20px_rgba(26,32,44,0.25)] flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300"
                style={{ borderTopColor: item.color }}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`} style={{ color: item.color }}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 uppercase">La nostra Storia</h2>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6"></div>
            <p className="text-slate-300 max-w-xl mx-auto text-lg">Un percorso di crescita costante che ha reso l'Open Riviera un punto di riferimento per il Padel in Sardegna.</p>
          </Reveal>

          <div className="relative">
            {/* Linea verticale */}
            <div className="absolute left-[11px] md:left-1/2 md:-ml-[1.5px] top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#FF6B35]/10 via-[#FF6B35]/50 to-[#FF6B35]"></div>

            <div className="space-y-14 md:space-y-16">
              {editions.map((edition, index) => {
                const right = index % 2 === 1;
                return (
                  <div key={edition.title} className={`relative pl-12 md:pl-0 md:flex ${right ? 'md:flex-row-reverse' : ''}`}>
                    <div className="absolute left-[3px] md:left-1/2 md:-ml-[10px] top-2 w-5 h-5 rounded-full bg-[#FF6B35] border-4 border-[#0B0F17] shadow-[0_0_0_4px_rgba(255,107,53,0.15)] z-10"></div>
                    <Reveal from={right ? 'right' : 'left'} className={`md:w-1/2 ${right ? 'md:pl-14' : 'md:pr-14 md:text-right'}`}>
                      <div className="text-sm font-bold tracking-[0.15em] text-[#FF6B35] mb-1">{edition.year}</div>
                      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">{edition.title}</h3>
                      <p className="text-slate-300 mt-3 leading-relaxed">{edition.text}</p>
                    </Reveal>
                  </div>
                );
              })}

              {/* Stage 4 - 2026 */}
              <div className="relative pl-12 md:pl-0 md:flex md:flex-row-reverse">
                <div className="absolute left-[-1px] md:left-1/2 md:-ml-[14px] top-6 w-7 h-7 rounded-full bg-[#FF6B35] border-4 border-[#0B0F17] shadow-[0_0_0_6px_rgba(255,107,53,0.2)] animate-pulse z-10"></div>
                <Reveal from="right" className="md:w-1/2 md:pl-14">
                  <div className="bg-white/[0.04] rounded-2xl p-6 md:p-7 border border-[#FF6B35]/30 shadow-[0_20px_40px_-20px_rgba(255,107,53,0.35)]">
                    <div className="text-sm font-bold tracking-[0.15em] uppercase text-[#FF6B35] mb-1">Agosto 2026</div>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#FF6B35]">4° Edizione</h3>
                    <p className="text-slate-200 mt-2 font-semibold flex items-center gap-1.5">
                      <MapPin size={18} className="text-[#4A90E2]" /> Padel Club Alghero
                    </p>
                    <p className="text-slate-300 mt-3 italic text-lg leading-relaxed">La prossima edizione supererà ogni aspettativa. Alghero si prepara al grande show.</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-24 bg-[#131A26] relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-[#4A90E2]/15 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-[#FF6B35]/15 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">Momenti di Gioco</h2>
            <p className="text-slate-400 mt-4 text-lg">L'intensità e l'eleganza del padel nella cornice di Alghero.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
            <Reveal from="zoom" className="md:col-span-2 md:row-span-2">
              <div className="h-[360px] md:h-[600px] rounded-3xl overflow-hidden group relative">
                <img
                  src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop"
                  alt="Padel Match Action"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </Reveal>

            <Reveal from="zoom" delay={100}>
              <div className="aspect-square rounded-3xl overflow-hidden group relative">
                <img
                  src="https://images.unsplash.com/photo-1626224580175-340ad0e3a736?q=80&w=600&auto=format&fit=crop"
                  alt="Padel Detail"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
            </Reveal>

            <Reveal from="zoom" delay={200}>
              <div className="aspect-square rounded-3xl overflow-hidden group relative">
                <img
                  src="https://images.unsplash.com/photo-1613915611241-766116239f28?q=80&w=600&auto=format&fit=crop"
                  alt="Tournament Atmosphere"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
            </Reveal>

            <Reveal from="zoom" delay={300} className="md:col-span-2">
              <div className="aspect-video rounded-3xl overflow-hidden group relative">
                <img
                  src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1000&auto=format&fit=crop"
                  alt="Team Spirit"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>
            </Reveal>
          </div>

          {/* Action Buttons */}
          <Reveal className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
            <Button
              className="px-9 py-4"
              onClick={() => window.open('https://drive.google.com/drive/folders/17zkVviDj63Il48DaLAZXhg1Ybn_83Zh9', '_blank')}
            >
              <Camera className="w-5 h-5" />
              Galleria Completa
            </Button>
            <Button
              variant="light"
              className="px-9 py-4"
              onClick={() => navigate(AppRoutes.WIP)}
            >
              <Calendar className="w-5 h-5" />
              Prossima Edizione 2027
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default OpenRiviera;
