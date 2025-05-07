
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
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="mx-2"
          >
            <Instagram size={20} className="text-white" />
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="TikTok"
            className="mx-2"
          >
            {/* Replace Tiktok with a custom SVG icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-white"
            >
              <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
              <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              <path d="M15 2v8a8 8 0 0 1-8 8"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
