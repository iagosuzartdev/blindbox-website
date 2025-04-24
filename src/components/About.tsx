
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section bg-brand-gray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-brand-blue">Sobre a VidroFoco</h2>
            <p className="text-gray-600 mb-6">
              Há mais de 10 anos no mercado, a VidroFoco se especializou em soluções 
              para portas e janelas de vidro temperado. Nossa equipe é formada por 
              técnicos altamente qualificados, comprometidos em oferecer o melhor 
              atendimento e serviço de alta qualidade.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Atendimento rápido em toda a região</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Técnicos especializados com anos de experiência</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Peças de reposição originais e de alta qualidade</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Garantia nos serviços e peças substituídas</p>
              </div>
            </div>
            
            <div>
              <a href="#contato" className="btn-primary inline-block">Fale com Nossa Equipe</a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Técnico da VidroFoco realizando manutenção em porta de vidro" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg max-w-xs">
                <div className="font-bold text-brand-blue text-lg mb-1">+ de 3.000</div>
                <div className="text-gray-600 text-sm">Clientes satisfeitos nos últimos anos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
