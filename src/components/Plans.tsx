import React from 'react';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Mensal',
      price: 60,
      period: '/mês',
      features: ['Acesso total à academia', 'Aulas de Zumba', 'Avaliação física'],
    },
    {
      name: '2 Meses',
      price: 55,
      period: '/mês',
      features: ['Acesso total à academia', 'Aulas de Zumba', 'Avaliação física', 'Desconto especial'],
    },
    {
      name: '3 Meses',
      price: 50,
      period: '/mês',
      features: ['Acesso total à academia', 'Aulas de Zumba', 'Avaliação física', 'Maior desconto', 'Programa personalizado'],
    },
  ];

  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Nossos Planos</h2>
          <p className="text-gray-600">Escolha o plano ideal para seus objetivos</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R${plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5583996002631?text=Olá! Tenho interesse no plano ${plan.name}`}
                className="block w-full text-center bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Começar agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;