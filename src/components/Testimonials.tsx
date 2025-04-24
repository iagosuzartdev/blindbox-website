
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Silva",
    position: "Proprietário de Consultório",
    text: "Serviço excelente! A porta da entrada do meu consultório estava completamente desalinhada e eles consertaram no mesmo dia. Ótimo atendimento e profissionalismo.",
    rating: 5,
  },
  {
    name: "Maria Oliveira",
    position: "Loja de Roupas",
    text: "A manutenção foi rápida e eficiente. Os técnicos são muito educados e deixaram tudo limpo após o serviço. Recomendo fortemente.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    position: "Síndico",
    text: "Contratamos para fazer a manutenção de todas as portas de vidro do condomínio. O serviço foi impecável e com um preço justo. Já é nosso fornecedor fixo.",
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
            A satisfação de nossos clientes é nossa maior recompensa. 
            Confira o que eles têm a dizer sobre nossos serviços.
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
