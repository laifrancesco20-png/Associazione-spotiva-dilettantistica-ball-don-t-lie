import React from 'react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import { padelStages } from '../data';
import { Trophy, Calendar, MapPin, BarChart3, FileText } from 'lucide-react';

const stages = padelStages;

const IslandPadelTour: React.FC = () => {

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-12 px-4 text-center">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-[28rem] rounded-full bg-[#FF6B35]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-[#4A90E2]/10 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="hero-in mx-auto w-52 h-52 md:w-60 md:h-60 rounded-full bg-white shadow-[0_30px_60px_-25px_rgba(26,32,44,0.35)] ring-1 ring-slate-100 flex items-center justify-center mb-8 p-6">
            <img 
              src="https://i.postimg.cc/TYBF227B/Logo-The-Island-Padel-Tour-(3).png" 
              alt="The Island Padel Tour Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="hero-in [animation-delay:100ms] text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1A202C] tracking-[-0.03em] mb-5">
            The Island <span className="text-gradient">Padel Tour</span> 2026
          </h1>
          <div className="hero-in [animation-delay:150ms] w-20 h-1.5 bg-[#FF6B35] mx-auto rounded-full mb-8"></div>
          <p className="hero-in [animation-delay:200ms] text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Il circuito regionale d'eccellenza che unisce la Sardegna attraverso la passione per il padel.
          </p>
          <div className="hero-in [animation-delay:300ms] flex flex-wrap justify-center gap-4">
            <Button 
              className="px-8"
              onClick={() => window.open('https://drive.google.com/file/d/1FymYk0bozmLmP9ZshVFuGqTwms4Gh3mc/view?usp=sharing', '_blank')}
            >
              <BarChart3 size={20} />
              Ranking Ufficiale
            </Button>
          </div>
        </div>
      </section>

      {/* Stats / Info Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Reveal delay={0}>
            <div className="h-full relative overflow-hidden bg-[#1A202C] text-white p-8 rounded-3xl shadow-[0_30px_60px_-25px_rgba(26,32,44,0.6)] flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#FF6B35]/20 blur-3xl"></div>
              <div className="relative">
                <div className="text-6xl font-extrabold tracking-tight mb-1"><CountUp value="7" /></div>
                <div className="text-[#FF6B35] font-bold text-xs tracking-[0.15em] uppercase">Appuntamenti</div>
                <div className="text-xs text-slate-400 mt-1">6 Tappe + Master Finale</div>
              </div>
              <div className="relative w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <Trophy size={28} className="text-[#FF6B35] group-hover:rotate-12 transition-transform" />
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={120}>
            <div className="h-full bg-white p-8 rounded-3xl border border-slate-100 border-t-4 border-t-[#FF6B35] shadow-[0_20px_40px_-20px_rgba(26,32,44,0.2)] flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight mb-1 text-[#FF6B35]">Regione</div>
                <div className="text-slate-500 font-bold text-xs tracking-[0.15em] uppercase">Copertura</div>
                <div className="text-xs text-slate-400 mt-1">Da Olbia a Cagliari</div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                <MapPin size={28} className="text-[#FF6B35] group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="h-full bg-white p-8 rounded-3xl border border-slate-100 border-t-4 border-t-[#4A90E2] shadow-[0_20px_40px_-20px_rgba(26,32,44,0.2)] flex items-center justify-between group hover:-translate-y-1 transition-transform duration-300">
              <div>
                <div className="text-6xl font-extrabold tracking-tight mb-1 text-[#1A202C]"><CountUp value="3" /></div>
                <div className="text-slate-500 font-bold text-xs tracking-[0.15em] uppercase">Categorie</div>
                <div className="text-xs text-slate-400 mt-1">Maschile / Femminile / Misto</div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                <BarChart3 size={28} className="text-[#4A90E2] group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Calendar List */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <Reveal className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
            <Calendar className="text-[#FF6B35] w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A202C]">Calendario Tappe 2026</h2>
        </Reveal>
        
        <div className="space-y-3">
          {stages.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 70} from="left">
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-[0_8px_20px_-12px_rgba(26,32,44,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(255,107,53,0.35)] hover:border-orange-100 hover:translate-x-1 transition-all duration-300 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-4 md:gap-5 min-w-0">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF6B35] font-extrabold text-xl group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                    {stage.id}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-extrabold text-lg md:text-xl text-[#1A202C] tracking-tight">{stage.location}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <MapPin size={14} className="shrink-0 text-[#FF6B35]" /> {stage.club}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 inline-block px-3 md:px-4 py-1.5 md:py-2 bg-orange-50 text-[#FF6B35] rounded-full text-xs md:text-sm font-bold tracking-wide uppercase">
                  {stage.date}
                </span>
              </div>
            </Reveal>
          ))}
          
          {/* Master Finale Highlight */}
          <Reveal from="zoom">
            <div className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] p-8 rounded-3xl shadow-[0_30px_60px_-25px_rgba(26,32,44,0.6)] text-white flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 border-b-4 border-[#FF6B35] group overflow-hidden relative">
              {/* Background Graphic */}
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
                 <Trophy size={200} />
              </div>
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-[#FF6B35]/20 blur-3xl"></div>

              <div className="flex items-center gap-6 relative z-10 text-center sm:text-left flex-col sm:flex-row">
                <div className="w-16 h-16 rounded-2xl bg-[#FF6B35] flex items-center justify-center text-white font-black text-3xl shadow-[0_10px_30px_-5px_rgba(255,107,53,0.6)]">
                  ★
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl tracking-tight">Master Finale</h3>
                  <p className="text-slate-400 font-medium">L'evento conclusivo che incorona i campioni</p>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <div className="text-xs text-[#FF6B35] font-bold uppercase tracking-[0.15em] mb-2">Luogo da definire</div>
                <span className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-lg font-extrabold block">
                  GENNAIO 2027
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Action Buttons at Bottom */}
        <Reveal className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button 
            variant="primary"
            className="px-12 py-4 text-lg w-full md:w-auto"
            onClick={() => window.open('/regolamento-island-padel-tour-2026.pdf', '_blank')}
          >
            <FileText className="w-6 h-6" />
            Regolamento
          </Button>
        </Reveal>
      </section>
    </div>
  );
};

export default IslandPadelTour;
