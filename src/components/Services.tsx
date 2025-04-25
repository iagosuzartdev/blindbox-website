
import React from 'react';
import { Wrench, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    title: "Manutenção de Portas de Vidro (Blindex)",
    description: "Diagnóstico completo e conserto de portas com problemas de funcionamento, travamento ou ruído.",
    icon: <Wrench className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Troca de Roldanas",
    description: "Substituímos roldanas desgastadas que dificultam a abertura e o fechamento das portas de correr.",
    icon: <Settings className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Ajuste de Portas Desalinhadas",
    description: "Corrigimos portas que arrastam, não fecham corretamente ou estão desalinhadas.",
    icon: <Wrench className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Instalação e Troca de Fechaduras",
    description: "Instalamos e substituímos fechaduras, trincos e puxadores de forma segura e precisa.",
    icon: <Settings className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Substituição de Molas de Piso",
    description: "Troca de molas danificadas ou desgastadas que afetam o fechamento automático das portas.",
    icon: <Wrench className="h-10 w-10 text-brand-blue" />,
  },
  {
    title: "Instalação de Borrachas de Vedação",
    description: "Aplicação de vedação para evitar entrada de água, vento ou poeira.",
    icon: <Settings className="h-10 w-10 text-brand-blue" />,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-blue">Soluções completas para portas de vidro temperado</h2>
          <p className="text-gray-600">
          Oferecemos manutenção, ajustes e substituição de peças com agilidade e segurança. Confira nossos principais serviços:
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
