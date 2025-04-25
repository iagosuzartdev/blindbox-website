
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Fernanda Oliveira",
    position: "Lojista",
    text: "Atendimento ágil e trabalho impecável. Resolveram o problema da porta da minha loja no mesmo dia. Super indico!",
    rating: 5,
  },
  {
    name: "Marcos Ribeiro",
    position: "Síndico",
    text: "Serviço de primeira! Equipe educada, rápida e muito caprichosa. Recomendo sem pensar duas vezes.",
    rating: 5,
  },
  {
    name: "Juliana Lima",
    position: "Arquiteta",
    text: "Já utilizei o serviço da BlindBox duas vezes e em ambas fui muito bem atendido. Profissionais de confiança.",
    rating: 5,
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section id="depoimentos" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-blue">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600">
          A satisfação dos nossos clientes é nosso maior reconhecimento. Veja o que dizem sobre nossos serviços:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
