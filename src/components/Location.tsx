import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Localização</h2>
          <p className="text-gray-600">Venha nos fazer uma visita</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div data-aos="fade-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.9843775835761!2d-35.90469209871991!3d-7.246906899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e07d698956b%3A0xe1f89b14e09c515a!2sAcademia%20Physical%20Form%20em%20Campina%20Grande!5e0!3m2!1spt-BR!2sbr!4v1709764547959!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Av. Pres. Juscelino Kubitschek, 1295 - Cruzeiro, Campina Grande - PB, 58417-725</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(83) 99600-2631</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contato@physicalform.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span>05:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;