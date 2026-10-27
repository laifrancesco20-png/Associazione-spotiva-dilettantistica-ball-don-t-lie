import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowDown, MapPin, MessageCircle, Star } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import ParallaxImage from '../components/ParallaxImage';
import TiltCard from '../components/TiltCard';
import { AppRoutes } from '../types';
import { padelStages } from '../data';
import { photos } from '../photos';

const WHATSAPP_URL = 'https://wa.me/393348983764';

const events = [
  {
    tag: 'Basket 3vs3',
    tagColor: 'bg-[#E53E3E]',
    title: "Ball Don't Lie",
    text: "Il torneo di basket 3vs3 più caldo dell'estate sarda.",
    meta: '30 Luglio - 2 Agosto 2026',
    cta: 'Vai al Basket',
    image: photos.basket,
    route: AppRoutes.BDL,
  },
  {
    tag: 'Padel Open',
    tagColor: 'bg-[#FF6B35]',
    title: 'Open Riviera del Corallo',
    text: 'Il grande padel torna ad Alghero. Un evento imperdibile.',
    meta: 'Padel Club Alghero',
    cta: 'Vai al Padel',
    image: photos.riviera,
    route: AppRoutes.OPEN_RIVIERA,
  },
  {
    tag: 'Circuito regionale',
    tagColor: 'bg-[#4A90E2]',
    title: 'The Island Padel Tour',
    text: "Il circuito regionale che unisce la Sardegna. 6 tappe, un master finale, un'unica grande passione.",
    meta: '6 Tappe + Master Finale',
    cta: 'Scopri il circuito',
    image: photos.padelTour,
    route: AppRoutes.PADEL_TOUR,
  },
];

const stats = [
  { value: '8+', label: 'Edizioni Basket' },
  { value: '20k+', label: 'Montepremi Euro' },
  { value: '6', label: 'Tappe Padel' },
  { value: '100%', label: 'Passione Sarda' },
];

const heroLines = [
  [{ text: 'Dove' }, { text: 'lo' }, { text: 'sport' }],
  [{ text: 'incontra' }, { text: 'la', accent: true }, { text: 'comunità', accent: true }],
];

const marqueeWords = ["Ball Don't Lie", 'Open Riviera del Corallo', 'The Island Padel Tour'];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollToCards = () => {
    const element = document.getElementById('cards-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F5F1EB] text-[#141B2D] overflow-x-clip">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100svh-5rem)] flex items-end overflow-hidden bg-[#141B2D] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ParallaxImage src={photos.homeHero} alt="" speed={0.3} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,27,45,0.35)_0%,rgba(20,27,45,0.55)_45%,#141B2D_100%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(255,107,53,0.25),transparent_55%)]"></div>
          <div className="float-slow absolute -left-24 bottom-10 w-[28rem] h-[28rem] rounded-full bg-[#FF6B35]/25 blur-3xl"></div>
          <div className="float-slower absolute -right-24 top-10 w-[24rem] h-[24rem] rounded-full bg-[#4A90E2]/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 md:pb-24 pt-32">
          <div className="hero-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-[0.18em] uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
            Alghero • Sardegna
          </div>
          <h1 className="text-[3.2rem] leading-[0.95] sm:text-7xl lg:text-[7.5rem] font-extrabold tracking-[-0.04em] uppercase max-w-5xl">
            {heroLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((word, wordIndex) => (
                  <React.Fragment key={word.text}>
                    <span className="word">
                      <span
                        className={word.accent ? 'text-gradient' : ''}
                        style={{ '--word-delay': `${150 + (lineIndex * 2 + wordIndex) * 110}ms` } as React.CSSProperties}
                      >
                        {word.text}
                      </span>
                    </span>
                    {wordIndex < line.length - 1 && ' '}
                  </React.Fragment>
                ))}
              </span>
            ))}
          </h1>
          <div className="hero-in [animation-delay:700ms] mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Ball Don't Lie • Open Riviera del Corallo • The Island Padel Tour
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleScrollToCards} className="px-8 py-4">
                Scopri i tornei <ArrowDown size={18} />
              </Button>
              <Button variant="outline" onClick={() => window.open(WHATSAPP_URL, '_blank')} className="px-8 py-4 border-white/30 backdrop-blur-md">
                <MessageCircle size={18} /> Scrivici su WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Striscia che scorre */}
      <div className="marquee relative overflow-hidden bg-[#FF6B35] py-4 md:py-5 -rotate-1 scale-[1.03] shadow-[0_20px_50px_-15px_rgba(255,107,53,0.6)]">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {[...marqueeWords, ...marqueeWords].map((word, index) => (
                <span key={`${copy}-${index}`} className="flex items-center text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-[#141B2D] px-6 md:px-8 whitespace-nowrap">
                  {word}
                  <Star size={22} className="ml-12 md:ml-16 fill-[#141B2D]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* I tornei */}
      <section id="cards-section" className="relative py-24 md:py-32 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-[-0.03em] leading-[0.95]">
              I nostri <br className="hidden md:block" />
              <span className="text-gradient">tornei</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-md">
              Basket 3vs3 e padel, dalla costa di Alghero a tutta la Sardegna.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {events.map((event, index) => (
              <Reveal key={event.title} delay={index * 120} from="zoom">
                <TiltCard
                  onClick={() => navigate(event.route)}
                  className="group relative w-full h-[480px] md:h-[560px] rounded-[1.75rem] overflow-hidden text-left text-white shadow-[0_30px_60px_-30px_rgba(20,27,45,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141B2D] via-[#141B2D]/40 to-transparent"></div>
                  <div className="absolute inset-0 bg-[#FF6B35]/0 group-hover:bg-[#FF6B35]/10 transition-colors duration-500"></div>

                  <div className="absolute top-5 left-5">
                    <span className={`${event.tagColor} px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em]`}>
                      {event.tag}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF6B35] mb-3">{event.meta}</div>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">{event.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6 max-w-sm">{event.text}</p>
                    <span className="inline-flex items-center gap-2 font-bold text-sm">
                      {event.cta}
                      <span className="w-9 h-9 rounded-full bg-white text-[#141B2D] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#FF6B35] group-hover:text-white">
                        <ArrowRight size={16} />
                      </span>
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numeri */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#141B2D] text-white">
        <div className="float-slow absolute -top-20 right-10 w-80 h-80 rounded-full bg-[#FF6B35]/15 blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-outline text-[22vw] font-extrabold uppercase leading-none tracking-tighter whitespace-nowrap">BDL</span>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} className="text-center md:text-left md:border-l md:border-white/10 md:pl-8">
              <div className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#FF6B35]">
                <CountUp value={stat.value} />
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] font-bold text-slate-300">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Chi siamo */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal from="wipe">
            <div className="relative">
                            <div className="relative rounded-[1.75rem] overflow-hidden h-[380px] md:h-[520px] shadow-[0_30px_60px_-30px_rgba(20,27,45,0.5)]">
                <img src={photos.community} alt="La community di Ball Don't Lie" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B35] mb-5">Chi siamo</div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.02] mb-8">
              "Più di un semplice evento sportivo"
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              L’Associazione <span className="font-bold text-[#FF6B35]">Ball Don’t Lie</span> nasce con l’obiettivo di organizzare tornei di diverse discipline su tutto il territorio regionale, promuovendo l’attività sportiva e valorizzando gli impianti sardi.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              Scopri la storia della nostra associazione e i valori che ci guidano.
            </p>
            <Button onClick={() => navigate(AppRoutes.ABOUT)} className="px-8 py-4">
              Approfondisci <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Il circuito, scorre di lato */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A90E2] mb-4">The Island Padel Tour 2026</div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-none">Le tappe</h2>
            </div>
            <button
              onClick={() => navigate(AppRoutes.PADEL_TOUR)}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#FF6B35] transition-colors"
            >
              Scopri il circuito <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>

        <Reveal>
          <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory rail-pad pt-2 pb-10">
            {padelStages.map((stage) => (
              <div
                key={stage.id}
                className="snap-start shrink-0 w-[250px] md:w-[280px] rounded-3xl bg-white border border-slate-200/70 p-6 shadow-[0_15px_35px_-20px_rgba(20,27,45,0.25)] hover:-translate-y-1 hover:border-[#FF6B35]/40 hover:shadow-[0_25px_45px_-20px_rgba(255,107,53,0.35)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-5xl font-extrabold text-[#141B2D]/10">{String(stage.id).padStart(2, '0')}</span>
                  <span className="px-3 py-1 rounded-full bg-orange-50 text-[#FF6B35] text-[11px] font-bold uppercase tracking-[0.12em]">
                    {stage.date}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">{stage.location}</h3>
                <p className="text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#FF6B35]" /> {stage.club}
                </p>
              </div>
            ))}
            <div className="snap-start shrink-0 w-[250px] md:w-[280px] rounded-3xl bg-gradient-to-br from-[#FF6B35] to-[#E53E3E] text-white p-6 shadow-[0_20px_50px_-15px_rgba(255,107,53,0.6)]">
              <div className="flex items-center justify-between mb-10">
                <span className="text-4xl">★</span>
                <span className="px-3 py-1 rounded-full bg-black/20 text-[11px] font-bold uppercase tracking-[0.12em]">Gennaio 2027</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">Master Finale</h3>
              <p className="text-sm text-white/80 mt-1">Luogo da definire</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contattaci */}
      <section className="px-5 sm:px-8 pb-24">
        <Reveal from="zoom">
          <div className="relative max-w-7xl mx-auto rounded-[2rem] overflow-hidden bg-[#FF6B35] px-8 py-16 md:px-16 md:py-20">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/15 blur-2xl"></div>
            <div className="absolute -left-10 -bottom-24 w-72 h-72 rounded-full bg-[#E53E3E]/40 blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-[-0.03em] leading-[0.95] text-[#141B2D]">Contattaci</h2>
                <p className="mt-4 text-lg md:text-xl text-[#141B2D]/80 max-w-md">Vuoi collaborare o hai domande sui nostri eventi?</p>
              </div>
              <button
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                className="self-start md:self-auto inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#141B2D] text-white font-bold hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300"
              >
                <MessageCircle size={20} /> Scrivici su WhatsApp
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
