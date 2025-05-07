
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/a371eb6e-9d00-423b-bc90-a1baed416804.png" 
            alt="Noivamos Logo" 
            className="h-8" 
          />
        </Link>
        <nav className="flex items-center space-x-12">
          <Link 
            to="/" 
            className="font-avenir text-base hover:text-noivamos-gold transition-colors"
          >
            Criar meu site
          </Link>
          <Link 
            to="/wedding" 
            className="font-avenir text-base hover:text-noivamos-gold transition-colors"
          >
            Meu casamento
          </Link>
          <Link 
            to="/plans" 
            className="font-avenir text-base hover:text-noivamos-gold transition-colors"
          >
            Planos e Recursos
          </Link>
          <Link 
            to="/about" 
            className="font-avenir text-base hover:text-noivamos-gold transition-colors"
          >
            Quem somos
          </Link>
          <Link 
            to="/login" 
            className={cn(
              "flex items-center font-avenir font-bold text-base",
              "hover:text-noivamos-gold transition-colors"
            )}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
