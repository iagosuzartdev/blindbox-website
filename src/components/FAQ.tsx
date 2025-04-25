
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: "Quanto tempo leva para realizar um conserto?",
    answer: "Geralmente resolvemos no mesmo dia, dependendo do tipo de reparo e disponibilidade da peça."
  },
  {
    question: "Vocês atendem em fins de semana?",
    answer: "Sim! Fazemos atendimentos sob agendamento em horários estendidos, inclusive aos sábados."
  },
  {
    question: "Vocês trabalham com qualquer tipo de porta de vidro?",
    answer: "Sim, somos especializados em portas de vidro temperado de correr, pivotantes e automáticas. Nossa equipe é especializada em todos os sistemas de portas de vidro temperado disponíveis no mercado."
  },
  {
    question: "Oferecem garantia para os serviços realizados?",
    answer: "Sim, todos os nosso sserviços possuem garantia. As peças substitídas têm garantia de fábrica e o serviço de instalação tem nossa garantia própria. O período exato varia conforme o tipo de serviço realizado."
  },
  {
    question: "Como solicitar um orçamento?",
    answer: "Você pode solicitar um orçamento pelo WhatsApp, telefone ou preenchendo o formulário de contato em nosso site. Um de nossos técnicos entrará em contato para agendar uma visita técnica ou, em casos simples, fornecer uma estimativa por telefone."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-brand-gray">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-brand-blue">Dúvidas Frequentes</h2>
          <p className="text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
            Se não encontrar sua resposta aqui, entre em contato conosco via Whatsapp!
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-montserrat font-medium text-lg text-brand-blue">
                  {item.question}
                </h3>
                <span className="ml-6 flex-shrink-0">
                  {openItem === index ? (
                    <Minus className="h-5 w-5 text-brand-lightblue" />
                  ) : (
                    <Plus className="h-5 w-5 text-brand-blue" />
                  )}
                </span>
              </button>
              {openItem === index && (
                <div className="mt-3 pr-12">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
