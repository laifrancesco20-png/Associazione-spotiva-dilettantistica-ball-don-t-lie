import React from 'react';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import ParallaxImage from '../components/ParallaxImage';
import { Target, Users, Landmark, Trophy, Heart, Map } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Promozione Sportiva',
    text: 'Organizziamo circuiti e tornei di alto livello (Basket 3vs3, Padel) aperti ad atleti di ogni esperienza e abilità.',
  },
  {
    icon: Map,
    title: 'Valorizzazione Territoriale',
    text: 'Scegliamo location iconiche della Sardegna, dai parchi urbani di Alghero ai migliori circoli di Olbia, Sassari e Cagliari.',
  },
  {
    icon: Landmark,
    title: 'Collaborazione',
    text: 'Uniamo enti no-profit, istituzioni e partner commerciali per generare valore condiviso e sostenere iniziative sociali.',
  },
];

const experience = [
  {
    icon: Heart,
    title: 'Impatto Sociale',
    text: 'Sosteniamo iniziative solidali attraverso lo sport, promuovendo valori di inclusione e rispetto.',
  },
  {
    icon: Users,
    title: 'Grande Community',
    text: 'Coinvolgiamo migliaia di atleti ogni anno, creando momenti di aggregazione indimenticabili.',
  },
  {
    icon: Trophy,
    title: 'Qualità Organizzativa',
    text: "Eventi riconosciuti dalla stampa regionale per l'eccellenza logistica e tecnica.",
  },
];

const stats = [
  { value: '8+', label: 'Edizioni Basket' },
  { value: '20k+', label: 'Montepremi Euro' },
  { value: '6', label: 'Tappe Padel' },
  { value: '100%', label: 'Passione Sarda' },
];

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header Image */}
      <div className="relative h-[55vh] min-h-[420px] w-full bg-[#1A202C] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
          alt="Sports Atmosphere"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,32,44,0.55)_0%,rgba(26,32,44,0.7)_55%,#F8FAFC_100%)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 -mt-8">
          <h1 className="hero-in text-5xl md:text-7xl font-extrabold text-white tracking-[-0.03em] mb-5">
            La Nostra <span className="text-gradient">Missione</span>
          </h1>
          <p className="hero-in [animation-delay:150ms] text-white/85 text-lg md:text-xl max-w-2xl">
            Valorizziamo il territorio sardo attraverso l'eccellenza dello sport e la forza della comunità.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10">
        {/* Main Philosophy Card */}
        <Reveal>
          <Card hoverEffect={false} className="relative overflow-hidden text-center py-12 md:py-16 px-6 md:px-12 mb-24">
            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#FF6B35] via-[#E53E3E] to-[#4A90E2]"></div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#1A202C] mb-6 italic">"Più di un semplice evento sportivo"</h2>
            <p className="text-lg md:text-2xl leading-relaxed text-slate-700 max-w-4xl mx-auto">
              L’Associazione <span className="font-bold text-[#FF6B35]">Ball Don’t Lie</span> nasce con l’obiettivo di organizzare tornei di diverse discipline su tutto il territorio regionale, promuovendo l’attività sportiva e valorizzando gli impianti sardi.
            </p>
            <div className="mt-10 pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <p className="text-slate-600 leading-relaxed">
                Il nostro intento è creare eventi in grado di superare il semplice ambito competitivo. Crediamo nel potere dello sport come motore di crescita sociale e territoriale.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Attraverso il coinvolgimento delle istituzioni e degli operatori economici, lavoriamo costantemente per creare un <strong className="text-[#1A202C]">circolo virtuoso tra sport, società e territorio</strong>.
              </p>
            </div>
          </Card>
        </Reveal>

        {/* Values Section */}
        <div className="mb-28">
          <Reveal className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] mb-3 uppercase tracking-tight">I Nostri Pilastri</h3>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded-full"></div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 120} className="group">
                <Card className="h-full border-t-4 border-t-[#FF6B35] flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center text-[#FF6B35] mb-6 group-hover:bg-[#FF6B35] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <pillar.icon size={30} />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight mb-3">{pillar.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{pillar.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <Reveal from="left">
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A202C] mb-8">L'Esperienza <span className="text-gradient">BDL</span></h3>
            </Reveal>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <Reveal key={item.title} from="left" delay={index * 120}>
                  <div className="flex gap-4 p-4 -mx-4 rounded-2xl hover:bg-white hover:shadow-[0_10px_30px_-12px_rgba(26,32,44,0.12)] transition-all duration-300">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                      <item.icon size={22} className="text-[#FF6B35]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">{item.title}</h5>
                      <p className="text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal from="right" className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(26,32,44,0.35)] h-[320px] md:h-[440px] group">
              <img
                src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=2022&auto=format&fit=crop"
                alt="Team spirit"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/40 via-transparent to-transparent"></div>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="relative overflow-hidden bg-[#1A202C] p-6 md:p-8 rounded-3xl text-center h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#FF6B35]/15 blur-2xl"></div>
                <div className="relative text-[#FF6B35] text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                  <CountUp value={stat.value} />
                </div>
                <div className="relative text-white text-xs uppercase tracking-[0.15em] font-bold">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
