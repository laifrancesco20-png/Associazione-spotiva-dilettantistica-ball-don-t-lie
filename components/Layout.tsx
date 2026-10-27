import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, Facebook, Phone } from 'lucide-react';
import { AppRoutes } from '../types';

const navItems = [
  { label: 'Home', path: AppRoutes.HOME },
  { label: 'Chi Siamo', path: AppRoutes.ABOUT },
  { label: "Ball Don't Lie", path: AppRoutes.BDL },
  { label: 'Open Riviera del Corallo', path: AppRoutes.OPEN_RIVIERA },
  { label: 'The Island Padel Tour', path: AppRoutes.PADEL_TOUR },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Auto-scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Il menu diventa più compatto e con ombra quando si scorre la pagina
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#1A202C]">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? 'border-slate-200/80 shadow-[0_8px_30px_-12px_rgba(26,32,44,0.15)]' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link to={AppRoutes.HOME} className="flex items-center gap-3 group" onClick={closeMenu}>
              <img
                src="/logo-bdl.svg"
                alt="BDL Sports Promoters"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-extrabold text-lg tracking-tight hidden sm:block group-hover:text-[#FF6B35] transition-colors">
                ASD Ball Don't Lie
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative py-2 text-sm font-semibold transition-colors duration-200 group ${
                      active ? 'text-[#1A202C]' : 'text-slate-500 hover:text-[#1A202C]'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2.5px] w-full rounded-full bg-[#FF6B35] origin-left transition-transform duration-300 ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                className="p-2 -mr-2 rounded-full text-slate-700 hover:text-[#FF6B35] focus:outline-none"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                style={{ transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms' }}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                } ${
                  location.pathname === item.path
                    ? 'bg-orange-50 text-[#FF6B35]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-[#1A202C] text-gray-300 pt-16 pb-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FF6B35]/10 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo-bdl.svg" alt="BDL Sports Promoters" className="h-7 w-auto brightness-0 invert" />
                <span className="font-bold text-lg text-white">ASD Ball Don't Lie</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Promuoviamo lo sport e la comunità in Sardegna attraverso eventi di qualità.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-5 uppercase text-xs tracking-[0.15em]">Contatti</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#FF6B35]" />
                  <a href="mailto:info@asdbdl.it" className="hover:text-white transition">info@asdbdl.it</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#FF6B35]" />
                  <a href="mailto:segreteria@asdbdl.it" className="hover:text-white transition">segreteria@asdbdl.it</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[#FF6B35]" />
                  <span>PEC: asdbdl@pec.it</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-5 uppercase text-xs tracking-[0.15em]">Social</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Instagram size={16} className="text-[#FF6B35]" />
                  <a 
                    href="https://www.instagram.com/asd_ball_dont_lie?igsh=eGIzNnIwejl2Znll" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition"
                  >
                    @asd_ball_dont_lie
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram size={16} className="text-[#4A90E2]" />
                  <a 
                    href="https://www.instagram.com/the_island_padel_tour?igsh=cWVrc2h4YnZnZGJi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition"
                  >
                    @the_island_padel_tour
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Facebook size={16} className="text-blue-600" />
                  <a 
                    href="https://www.facebook.com/search/top?q=asd%20ball%20don%E2%80%99t%20lie&locale=it_IT" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition"
                  >
                    ASD Ball Don't Lie
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} ASD Ball Don't Lie. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;