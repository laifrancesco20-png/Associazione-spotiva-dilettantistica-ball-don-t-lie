import React from 'react';
import Card from '../components/Card';
import { Target, Users, Landmark, Trophy, Heart, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-20 animate-fade-in">
      {/* Header Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-[#1A202C] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop" 
          alt="Sports Atmosphere" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7FAFC] via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl mb-4">
            La Nostra <span className="text-[#FF6B35]">Missione</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
            Valorizziamo il territorio sardo attraverso l'eccellenza dello sport e la forza della comunità.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        {/* Main Philosophy Card */}
        <Card className="text-center py-12 px-8 mb-16 border-b-8 border-[#FF6B35]">
          <h2 className="text-3xl font-black text-gray-900 mb-6 italic">"Più di un semplice evento sportivo"</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light max-w-4xl mx-auto">
            L’Associazione <span className="font-bold text-[#FF6B35]">Ball Don’t Lie</span> nasce con l’obiettivo di organizzare tornei di diverse discipline su tutto il territorio regionale, promuovendo l’attività sportiva e valorizzando gli impianti sardi.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Il nostro intento è creare eventi in grado di superare il semplice ambito competitivo. Crediamo nel potere dello sport come motore di crescita sociale e territoriale.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Attraverso il coinvolgimento delle istituzioni e degli operatori economici, lavoriamo costantemente per creare un <strong>circolo virtuoso tra sport, società e territorio</strong>.
              </p>
            </div>
          </div>
        </Card>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter">I Nostri Pilastri</h3>
            <div className="w-16 h-1 bg-[#FF6B35] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-[#FF6B35] flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B35] mb-6">
                <Target size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Promozione Sportiva</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Organizziamo circuiti e tornei di alto livello (Basket 3vs3, Padel) aperti ad atleti di ogni esperienza e abilità.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-[#FF6B35] flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B35] mb-6">
                <Map size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Valorizzazione Territoriale</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Scegliamo location iconiche della Sardegna, dai parchi urbani di Alghero ai migliori circoli di Olbia, Sassari e Cagliari.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-[#FF6B35] flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#FF6B35] mb-6">
                <Landmark size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Collaborazione</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Uniamo enti no-profit, istituzioni e partner commerciali per generare valore condiviso e sostenere iniziative sociali.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-4xl font-black text-gray-900 mb-6">L'Esperienza <span className="text-[#FF6B35]">BDL</span></h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Heart className="text-[#FF6B35]" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Impatto Sociale</h5>
                  <p className="text-gray-600">Sosteniamo iniziative solidali attraverso lo sport, promuovendo valori di inclusione e rispetto.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Users className="text-[#FF6B35]" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Grande Community</h5>
                  <p className="text-gray-600">Coinvolgiamo migliaia di atleti ogni anno, creando momenti di aggregazione indimenticabili.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Trophy className="text-[#FF6B35]" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Qualità Organizzativa</h5>
                  <p className="text-gray-600">Eventi riconosciuti dalla stampa regionale per l'eccellenza logistica e tecnica.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=2022&auto=format&fit=crop" 
              alt="Team spirit" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#1A202C] p-6 rounded-3xl text-center hover:bg-gray-800 transition-colors">
            <div className="text-[#FF6B35] text-4xl font-black mb-1">8+</div>
            <div className="text-white text-xs uppercase tracking-widest font-bold">Edizioni Basket</div>
          </div>
          <div className="bg-[#1A202C] p-6 rounded-3xl text-center hover:bg-gray-800 transition-colors">
            <div className="text-[#FF6B35] text-4xl font-black mb-1">20k+</div>
            <div className="text-white text-xs uppercase tracking-widest font-bold">Montepremi Euro</div>
          </div>
          <div className="bg-[#1A202C] p-6 rounded-3xl text-center hover:bg-gray-800 transition-colors">
            <div className="text-[#FF6B35] text-4xl font-black mb-1">9</div>
            <div className="text-white text-xs uppercase tracking-widest font-bold">Tappe Padel</div>
          </div>
          <div className="bg-[#1A202C] p-6 rounded-3xl text-center hover:bg-gray-800 transition-colors">
            <div className="text-[#FF6B35] text-4xl font-black mb-1">100%</div>
            <div className="text-white text-xs uppercase tracking-widest font-bold">Passione Sarda</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;