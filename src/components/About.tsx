
import React, { useEffect, useRef, useState } from 'react'; 
import { Check } from 'lucide-react';

const About = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null); // Referência para o bloco do contador
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true); // Marca que já começou para não repetir
        }
      },
      {
        threshold: 0.6, // Quando 60% do elemento estiver visível
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const target = 3000;
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += Math.ceil(target / 100);
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
      }
      setCount(currentCount);
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <section id="sobre" className="section bg-brand-gray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-brand-blue">Sobre a BlindBox</h2>
            <p className="text-gray-600 mb-6">
            A BlindBox é uma empresa especializada em manutenção e conserto de portas de vidro temperado. Atuamos com agilidade, transparência e excelência em cada serviço prestado. Nossa equipe é formada por técnicos qualificados, prontos para resolver desde pequenos ajustes até consertos completos com rapidez e eficiência.
            Com atendimento ágil e peças de reposição de alta qualidade, garantimos resultados duradouros e seguros.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Mais de 10 anos de experiência no setor</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Atendimento em toda a região</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Garantia em todos os serviços realizados</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-600">Equipe especializada e cordial</p>
              </div>
            </div>
            
            <div>
              <a href="#contato"
              className="btn-primary inline-block"
              onClick={(e) => {
                e.preventDefault();  // Evita o comportamento padrão do link
                const contato = document.getElementById('contato');
                if (contato) {
                  contato.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              >Fale com Nossa Equipe</a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Técnico da BlindBox realizando manutenção em porta de vidro" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Contador com ref */}

              <div 
              ref={counterRef}
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg max-w-xs">
                <div className="font-bold text-brand-blue text-lg mb-1">+ de {count}</div>
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
