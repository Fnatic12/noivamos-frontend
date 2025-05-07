
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#B28800] mt-auto">
      <div className="max-w-[1920px] mx-auto px-24 py-6 flex justify-between items-center">
        <div>
          <img 
            src="/lovable-uploads/a371eb6e-9d00-423b-bc90-a1baed416804.png" 
            alt="Noivamos Logo" 
            className="h-8 brightness-[10] invert" 
          />
        </div>
        <div className="flex items-center text-white">
          <span className="font-avenir mr-4">Acompanhe nossas redes sociais</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
