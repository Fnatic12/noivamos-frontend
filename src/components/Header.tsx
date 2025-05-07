
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path || location.pathname === '/create-site' || location.pathname.includes('/template/');
    }
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/a371eb6e-9d00-423b-bc90-a1baed416804.png" 
            alt="Noivamos Logo" 
            className="h-6" // Reduced from h-7 to h-6
          />
        </Link>
        <nav className="flex items-center">
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12 mr-8 lg:mr-16">
            <Link 
              to="/create-site" 
              className={cn(
                "font-avenir text-base transition-colors",
                isActive("/") || isActive("/create-site") ? "text-noivamos-gold" : "hover:text-noivamos-gold"
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
            <Link 
              to="/advisor" 
              className={cn(
                "font-avenir text-base transition-colors",
                isActive("/advisor") || location.pathname.includes("/advisor") ? "text-noivamos-gold" : "hover:text-noivamos-gold"
              )}
            >
              Assessoria
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
