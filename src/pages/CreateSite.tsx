
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Template data type
interface Template {
  id: string;
  name: string;
  image: string;
  hoverImage?: string;
}

const templates: Template[] = [
  { 
    id: '1', 
    name: 'Template name', 
    image: '/lovable-uploads/8dcb8987-34e1-4eb1-8181-f373e097dddc.png',
    hoverImage: '/lovable-uploads/5bf3a5a9-00d4-44a0-9e8c-009c31f25e09.png'
  },
  { 
    id: '2', 
    name: 'Template name', 
    image: '/lovable-uploads/8dcb8987-34e1-4eb1-8181-f373e097dddc.png',
    hoverImage: '/lovable-uploads/5bf3a5a9-00d4-44a0-9e8c-009c31f25e09.png'
  },
  { 
    id: '3', 
    name: 'Template name', 
    image: '/lovable-uploads/8dcb8987-34e1-4eb1-8181-f373e097dddc.png',
    hoverImage: '/lovable-uploads/5bf3a5a9-00d4-44a0-9e8c-009c31f25e09.png'
  },
  { 
    id: '4', 
    name: 'Template name', 
    image: '/lovable-uploads/8dcb8987-34e1-4eb1-8181-f373e097dddc.png',
    hoverImage: '/lovable-uploads/5bf3a5a9-00d4-44a0-9e8c-009c31f25e09.png'
  },
];

const CreateSite = () => {
  const navigate = useNavigate();
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow w-full">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-10">
          {/* Profile and Plan Information */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            {/* Left side - Profile */}
            <div className="md:w-1/3 flex flex-col items-center">
              <img 
                src="/lovable-uploads/50e63417-c45a-40a3-99d0-dd09cbb69262.png" 
                alt="Couple" 
                className="w-48 h-48 rounded-full object-cover"
              />
              <h1 className="mt-6 text-3xl font-garamond">Jeff & Annie</h1>
              <div className="mt-6">
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-noivamos-gold" 
                  placeholder="jeffeannie"
                />
              </div>
            </div>
            
            {/* Right side - Plan Information */}
            <div className="md:w-1/3 mt-10 md:mt-0">
              <Card className="p-6 bg-white rounded-lg shadow-sm">
                <div className="mb-2">
                  <h2 className="font-avenir text-lg">
                    Templates disponíveis no plano atual: <span className="font-bold">12</span>
                  </h2>
                </div>
                <div className="mb-6">
                  <p className="font-avenir">
                    Plano atual: <span className="font-bold">Basic</span>
                  </p>
                  <Button className="w-full mt-4 bg-noivamos-gold hover:bg-noivamos-gold-dark text-white py-3 rounded font-avenir transition-colors">
                    Atualizar Plano
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Templates Section */}
          <div>
            <h2 className="text-3xl font-garamond mb-2">Escolher templates</h2>
            <p className="font-avenir text-gray-600 mb-6">Escolha o template que mais combine com o casal</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template) => (
                <div key={template.id} className="flex flex-col">
                  <div 
                    className="relative cursor-pointer bg-gray-50 rounded-lg overflow-hidden"
                    onMouseEnter={() => setHoveredTemplate(template.id)}
                    onMouseLeave={() => setHoveredTemplate(null)}
                    onClick={() => navigate(`/template/${template.id}`)}
                  >
                    <img 
                      src={hoveredTemplate === template.id && template.hoverImage ? template.hoverImage : template.image} 
                      alt={template.name} 
                      className="w-full"
                    />
                    {hoveredTemplate === template.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                        <button className="bg-noivamos-gold hover:bg-noivamos-gold-dark text-white px-4 py-2 rounded font-avenir">
                          Escolher template
                        </button>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-garamond">{template.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateSite;
