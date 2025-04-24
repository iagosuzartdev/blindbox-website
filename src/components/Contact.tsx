
import React, { useState } from 'react';
import { Phone, Mail, Map, Calendar, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });
      setFormData({ name: '', phone: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contato" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-blue">Entre em Contato</h2>
          <p className="text-gray-600">
            Estamos prontos para atender sua necessidade. Preencha o formulário ou 
            entre em contato por um dos nossos canais de comunicação.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone/WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Descreva o problema ou serviço desejado..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          </div>
          
          <div className="bg-brand-gray rounded-lg p-8">
            <h3 className="font-bold text-xl text-brand-blue mb-6">Informações de Contato</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-blue rounded-full text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Telefone</h4>
                  <p className="text-brand-blue font-medium">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-blue rounded-full text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <p className="text-brand-blue font-medium">contato@vidrofoco.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-blue rounded-full text-white">
                  <Map className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Endereço</h4>
                  <p className="text-gray-600">
                    Av. Exemplo, 1000 - Bairro
                    <br />São Paulo - SP, 00000-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-brand-blue rounded-full text-white">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Horário de Atendimento</h4>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 18h
                    <br />Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
