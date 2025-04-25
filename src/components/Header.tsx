import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md py-2 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-brand-blue font-bold text-xl md:text-2xl">
            Blind<span className="text-brand-lightblue">Box</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('inicio')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Início</button>
          <button onClick={() => scrollToSection('servicos')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('sobre')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('depoimentos')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Depoimentos</button>
          <button onClick={() => scrollToSection('contato')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Contato</button>
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:flex items-center">
          <Button
            className="btn-primary flex items-center gap-2"
            onClick={() => {
              window.open('https://wa.me/5571999129050?text=Olá!', '_blank');
            }}
          >
            <Phone size={18} />
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={toggleMenu} 
          className="md:hidden text-brand-blue p-2 transition-all"
          aria-label="Menu"
          initial={{ rotate: 0 }}
          animate={{ rotate: isMenuOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu com animação de entrada e saída */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2">Início</button>
              <button onClick={() => scrollToSection('servicos')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2">Serviços</button>
              <button onClick={() => scrollToSection('sobre')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2">Sobre</button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2">Contato</button>
              <Button
                className="btn-primary flex items-center justify-center gap-2 w-full"
                onClick={() => {
                  window.open('https://wa.me/5571999129050', '_blank');
                }}
              >
                <Phone size={18} />
                Fale Conosco
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
