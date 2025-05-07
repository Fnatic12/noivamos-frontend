
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Instagram, Tiktok } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Logo/Image section */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-80 h-80 rounded-full bg-green-900 flex items-center justify-center relative overflow-hidden">
              <img 
                src="/lovable-uploads/9b8e4d7a-ba53-4c4b-a411-07a92a9dc5e2.png" 
                alt="Noivamos N Logo" 
                className="absolute w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl font-garamond text-noivamos-gold mb-8">
              QUEM SOMOS
            </h1>
            
            <p className="text-lg mb-12 text-center max-w-2xl mx-auto">
              Na Noivamos, ajudamos casais a planejar o casamento perfeito. Com 
              nossa plataforma, você pode criar um site exclusivo, gerenciar seu 
              orçamento e organizar todas as atividades do grande dia, garantindo uma 
              experiência única e sem complicações.
            </p>
            
            <div className="text-center">
              <h2 className="text-2xl font-garamond mb-6">
                Fique por dentro nas nossas redes socias
              </h2>
              
              <div className="flex justify-center items-center space-x-8">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center hover:text-noivamos-gold transition-colors"
                >
                  <Instagram size={42} />
                  <span className="mt-2">Instagram</span>
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-col items-center hover:text-noivamos-gold transition-colors"
                >
                  <Tiktok size={42} />
                  <span className="mt-2">TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
