
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/a371eb6e-9d00-423b-bc90-a1baed416804.png" 
            alt="Noivamos Logo" 
            className="h-12" // Increased from h-8 to h-12
          />
        </Link>
        <nav className="flex items-center">
          <div className="flex items-center space-x-12 mr-16">
            <Link 
              to="/" 
              className={cn(
                "font-avenir text-base transition-colors",
                isActive("/") ? "text-noivamos-gold" : "hover:text-noivamos-gold"
              )}
            >
              Criar meu site
            </Link>
            <Link 
              to="/wedding" 
              className={cn(
                "font-avenir text-base transition-colors",
                isActive("/wedding") ? "text-noivamos-gold" : "hover:text-noivamos-gold"
              )}
            >
              Meu casamento
            </Link>
            <Link 
              to="/plans" 
              className={cn(
                "font-avenir text-base transition-colors",
                isActive("/plans") ? "text-noivamos-gold" : "hover:text-noivamos-gold"
              )}
            >
              Planos e Recursos
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "font-avenir text-base transition-colors",
                isActive("/about") ? "text-noivamos-gold" : "hover:text-noivamos-gold"
              )}
            >
              Quem somos
            </Link>
          </div>
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
