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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Auto-scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7FAFC] text-[#1A202C]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={AppRoutes.HOME} className="flex items-center gap-2" onClick={closeMenu}>
              <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                BDL
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">ASD Ball Don't Lie</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-[#FF6B35]'
                      : 'text-gray-600 hover:text-[#FF6B35]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-[#FF6B35] focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-orange-50 text-[#FF6B35]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A202C] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#FF6B35] rounded flex items-center justify-center text-white font-bold text-sm">
                  BDL
                </div>
                <span className="font-bold text-lg text-white">ASD Ball Don't Lie</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Promuoviamo lo sport e la comunità in Sardegna attraverso eventi di qualità.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contatti</h3>
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
              <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Social</h3>
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
          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} ASD Ball Don't Lie. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;