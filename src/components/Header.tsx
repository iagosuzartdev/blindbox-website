
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-brand-blue font-bold text-xl md:text-2xl">
            Vidro<span className="text-brand-lightblue">Foco</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Início</a>
          <a href="#servicos" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Serviços</a>
          <a href="#sobre" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Sobre</a>
          <a href="#depoimentos" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Depoimentos</a>
          <a href="#contato" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors">Contato</a>
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:flex items-center">
          <Button className="btn-primary flex items-center gap-2">
            <Phone size={18} />
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-brand-blue p-2"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#inicio" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2" onClick={toggleMenu}>Início</a>
            <a href="#servicos" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2" onClick={toggleMenu}>Serviços</a>
            <a href="#sobre" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2" onClick={toggleMenu}>Sobre</a>
            <a href="#depoimentos" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2" onClick={toggleMenu}>Depoimentos</a>
            <a href="#contato" className="text-brand-blue hover:text-brand-lightblue font-medium transition-colors p-2" onClick={toggleMenu}>Contato</a>
            <Button className="btn-primary flex items-center justify-center gap-2 w-full">
              <Phone size={18} />
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
