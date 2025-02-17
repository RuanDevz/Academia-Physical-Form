import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: 'João Silva',
      role: 'Personal Trainer',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specialties: ['Musculação', 'Crossfit', 'Nutrição Esportiva'],
    },
    {
      name: 'Maria Santos',
      role: 'Instrutora de Zumba',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specialties: ['Zumba', 'Dança', 'Aeróbica'],
    },
    {
      name: 'Pedro Costa',
      role: 'Personal Trainer',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specialties: ['Musculação', 'Reabilitação', 'Treino Funcional'],
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Nossos Professores</h2>
          <p className="text-gray-600">Conheça nossa equipe de profissionais qualificados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                <p className="text-gray-600 mb-4">{trainer.role}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;