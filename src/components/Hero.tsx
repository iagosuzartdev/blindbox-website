
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="relative pt-32 pb-48 md:pt-40 md:pb-64 bg-gradient-to-r from-brand-blue to-brand-lightblue overflow-hidden"
    >
      {/* SVG Overlay */}
      <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden opacity-5">
        <svg viewBox="0 0 400 400" className="absolute right-0 top-0 h-full w-auto">
          <defs>
            <pattern id="pattern1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="800" height="800" fill="url(#pattern1)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Especialistas em Conserto de Portas de Vidro Temperado</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">Atendimento rápido, peças originais e técnicos experientes. Soluções práticas e eficazes para residências e empresas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-lightblue text-white hover:bg-brand-blue transition-colors shadow-lg border-2 border-white/20"
              onClick={() => window.open('https://wa.me/5571999129050', '_blank')}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 bg-brand-lightblue text-brand-lightblue border-white hover: text-white bg-white/10 transition-colors"
              onClick={() => {
                const servicos = document.getElementById('servicos');
                if (servicos) {
                  servicos.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-[80px] block"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,122.7C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            />
          </svg>
        </div>
    </section>
  );
};

export default Hero;
