
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Eye, Edit, Share } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon?: React.ReactNode;
  title: string;
  hasChildren?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  title, 
  hasChildren = false, 
  isOpen = false,
  onClick,
  className
}) => {
  return (
    <div 
      className={cn("py-3 border-b border-gray-200 cursor-pointer", className)}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          <span className="font-avenir">{title}</span>
        </div>
        {hasChildren && (
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
            className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        )}
      </div>
    </div>
  );
};

const ColorBox = ({ color }: { color: string }) => {
  return (
    <div 
      className="w-8 h-8 rounded cursor-pointer border border-gray-300"
      style={{ backgroundColor: color }}
    />
  );
};

const TemplateEditor = () => {
  const { id } = useParams<{ id: string }>();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'photo': true,
    'theme': true,
    'music': false,
    'fonts': true,
    'colors': true,
  });
  
  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex flex-grow w-full">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 bg-white overflow-y-auto">
          {/* Action buttons */}
          <div className="flex border-b border-gray-200">
            <div className="flex-1 flex items-center justify-center py-3 border-r border-gray-200">
              <Eye size={20} className="mr-2" />
              <span className="font-avenir text-sm">Ver site</span>
            </div>
            <div className="flex-1 flex items-center justify-center py-3 border-r border-gray-200">
              <Edit size={20} className="mr-2" />
              <span className="font-avenir text-sm">Editar link</span>
            </div>
            <div className="flex-1 flex items-center justify-center py-3">
              <Share size={20} className="mr-2" />
              <span className="font-avenir text-sm">Compartilhar</span>
            </div>
          </div>
          
          {/* Main sections */}
          <div className="p-4">
            <h2 className="text-2xl font-garamond mb-4">Home</h2>
            
            <SidebarItem 
              icon={<span className="mr-1">📷</span>}
              title="Foto do casal" 
              hasChildren={true}
              isOpen={openSections.photo}
              onClick={() => toggleSection('photo')}
            />
            
            {openSections.photo && (
              <div className="py-3">
                <input 
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-noivamos-gold" 
                />
              </div>
            )}
            
            <h2 className="text-2xl font-garamond my-4">Aparência do site</h2>
            
            <SidebarItem 
              icon={<span className="mr-1">🖼️</span>}
              title="Tema" 
              hasChildren={true}
              isOpen={openSections.theme}
              onClick={() => toggleSection('theme')}
            />
            
            {openSections.theme && (
              <div className="py-3">
                <input 
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-noivamos-gold" 
                />
              </div>
            )}
            
            <SidebarItem 
              icon={<span className="mr-1">🎵</span>}
              title="Música" 
              hasChildren={true}
              isOpen={openSections.music}
              onClick={() => toggleSection('music')}
            />
            
            <SidebarItem 
              icon={<span className="mr-1">🔤</span>}
              title="Fontes" 
              hasChildren={true}
              isOpen={openSections.fonts}
              onClick={() => toggleSection('fonts')}
            />
            
            {openSections.fonts && (
              <>
                <div className="py-3 pl-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">Nome do casal</span>
                    <span className="font-avenir text-gray-500">Helvética</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="py-3 pl-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">Títulos</span>
                    <span className="font-avenir text-gray-500">Helvética</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="py-3 pl-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">Textos</span>
                    <span className="font-avenir text-gray-500">Helvética</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </>
            )}
            
            <SidebarItem 
              icon={<span className="mr-1">🎨</span>}
              title="Cores" 
              hasChildren={true}
              isOpen={openSections.colors}
              onClick={() => toggleSection('colors')}
            />
            
            {openSections.colors && (
              <div className="py-3 pl-6 flex space-x-2">
                <ColorBox color="#d32f2f" />
                <ColorBox color="#1e88e5" />
                <ColorBox color="#fdd835" />
                <ColorBox color="#43a047" />
              </div>
            )}
            
            <h2 className="text-2xl font-garamond my-4">Presentes</h2>
            
            <div className="py-3">
              <input 
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-1 focus:ring-noivamos-gold" 
              />
              <button className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded font-avenir text-sm transition-colors">
                Adicionar presente
              </button>
            </div>
          </div>
        </div>
        
        {/* Preview */}
        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/b11a3294-3327-4dc3-a1a5-729aed2fce5b.png)' }}>
          <div className="h-full flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl font-garamond mb-2">Jeff and Annie</h1>
            <p className="text-3xl font-garamond">07/05/2025</p>
            
            <div className="mt-8">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white">
                <img 
                  src="/lovable-uploads/50e63417-c45a-40a3-99d0-dd09cbb69262.png" 
                  alt="Couple" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TemplateEditor;
