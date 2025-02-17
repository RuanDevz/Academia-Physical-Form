import React from 'react';
import { Dumbbell, Music } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6">Sobre a Physical Form</h2>
            <p className="text-gray-600 mb-6">
              A Physical Form é uma academia completa que oferece o melhor em musculação
              e aulas de Zumba. Nossa estrutura moderna e equipe altamente qualificada
              estão prontas para ajudar você a alcançar seus objetivos.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Dumbbell className="w-8 h-8 text-black" />
                <div>
                  <h3 className="font-semibold mb-2">Musculação</h3>
                  <p className="text-gray-600">Equipamentos modernos e treinos personalizados</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Music className="w-8 h-8 text-black" />
                <div>
                  <h3 className="font-semibold mb-2">Zumba</h3>
                  <p className="text-gray-600">Aulas energéticas e divertidas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Equipamentos"
              className="rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Aula de Zumba"
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;