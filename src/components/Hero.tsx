import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Academia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforme seu corpo, supere seus limites!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Musculação e Zumba em um ambiente moderno e profissional.
              Comece sua transformação hoje!
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;