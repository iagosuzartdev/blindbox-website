
import React from 'react';
import { Wrench, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    title: "Manutenção de Blindex",
    description: "Recuperamos e ajustamos portas de vidro temperado com problemas de funcionamento.",
    icon: <Wrench className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Troca de Roldanas",
    description: "Substituímos roldanas desgastadas que prejudicam o deslizamento das portas de correr.",
    icon: <Settings className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Ajuste de Portas",
    description: "Corrigimos desalinhamentos em portas de vidro que estão arrastando ou com dificuldade para abrir.",
    icon: <Wrench className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Instalação de Fechaduras",
    description: "Instalamos ou substituímos fechaduras e puxadores em portas de vidro temperado.",
    icon: <Settings className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Troca de Molas",
    description: "Substituímos molas de piso desgastadas que impedem o fechamento automático das portas.",
    icon: <Wrench className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Vedação e Borrachas",
    description: "Instalamos ou substituímos borrachas de vedação para evitar entrada de água e poeira.",
    icon: <Settings className="h-10 w-10 text-brand-blue" />,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-blue">Nossos Serviços</h2>
          <p className="text-gray-600">
            Oferecemos soluções completas para todos os problemas com portas de vidro temperado, com atendimento rápido e profissionais experientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-brand-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <a href="#contato" className="text-brand-lightblue hover:text-brand-blue flex items-center gap-1 text-sm font-medium">
                  Solicitar serviço <ArrowRight size={16} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
