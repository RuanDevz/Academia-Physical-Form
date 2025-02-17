import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dumbbell, MapPin, MessageCircle, Users, Zap, Menu, X } from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import logo from '../src/Assets/Logo.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para compensar o navbar fixo
        behavior: 'smooth',
      });
      closeMenu();
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <nav className="fixed w-full bg-black text-white z-50 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16"> 
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold">Physical Form</span>
          </div>
          
          <button onClick={toggleMenu} className="md:hidden p-2" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex gap-6">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-gray-300">Sobre</a>
            <a href="#plans" onClick={(e) => handleSmoothScroll(e, '#plans')} className="hover:text-gray-300">Planos</a>
            <a href="#trainers" onClick={(e) => handleSmoothScroll(e, '#trainers')} className="hover:text-gray-300">Professores</a>
            <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} className="hover:text-gray-300">Depoimentos</a>
            <a href="#location" onClick={(e) => handleSmoothScroll(e, '#location')} className="hover:text-gray-300">Localização</a>
          </div>

          <div className={`md:hidden fixed inset-0 bg-black/95 pt-20 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col items-center gap-8 text-lg">
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-gray-300">Sobre</a>
              <a href="#plans" onClick={(e) => handleSmoothScroll(e, '#plans')} className="hover:text-gray-300">Planos</a>
              <a href="#trainers" onClick={(e) => handleSmoothScroll(e, '#trainers')} className="hover:text-gray-300">Professores</a>
              <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, '#testimonials')} className="hover:text-gray-300">Depoimentos</a>
              <a href="#location" onClick={(e) => handleSmoothScroll(e, '#location')} className="hover:text-gray-300">Localização</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Plans />
        <Trainers />
        <Testimonials />
        <Location />
      </main>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-6 h-6" />
                <span className="text-lg font-bold">Physical Form</span>
              </div>
              <p className="text-gray-400">Transforme seu corpo, supere seus limites!</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="flex-1">Av. Pres. Juscelino Kubitschek, 1295 - Cruzeiro, Campina Grande - PB</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>(83) 99600-2631</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Users className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Zap className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Physical Form. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;