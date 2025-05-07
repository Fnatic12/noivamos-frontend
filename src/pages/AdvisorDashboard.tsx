
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import CouplesList, { CoupleData } from '@/components/advisor/CouplesList';
import NewDashboardModal from '@/components/advisor/NewDashboardModal';
import { useToast } from '@/hooks/use-toast';

const AdvisorDashboard = () => {
  const [isNewDashboardModalOpen, setIsNewDashboardModalOpen] = useState(false);
  const [couples, setCouples] = useState<CoupleData[]>([
    { id: '1', name: 'Victor e Carol' },
    { id: '2', name: 'Marcio e Luciana' }
  ]);
  const { toast } = useToast();

  const handleCreateDashboard = (name: string, image?: File) => {
    const newId = String(couples.length + 1);
    
    let imageUrl: string | undefined = undefined;
    if (image) {
      // In a real app, we would upload the image to a server and get the URL
      // For this example, we're just creating a fake URL
      imageUrl = URL.createObjectURL(image);
    }
    
    const newCouple: CoupleData = {
      id: newId,
      name,
      image: imageUrl
    };
    
    setCouples([...couples, newCouple]);
    setIsNewDashboardModalOpen(false);
    
    toast({
      title: "Dashboard criado",
      description: `Dashboard para ${name} foi criado com sucesso!`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow max-w-[1920px] mx-auto px-6 md:px-24 py-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-garamond font-bold text-4xl md:text-5xl text-[#B28800]">
            Olá Cynthia!
          </h1>
          
          <Card className="w-64">
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-avenir font-medium text-lg">Valor de Rev Recebido</h3>
                <p className="font-garamond font-bold text-2xl">R$ 200,00</p>
                <button className="w-full bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir py-2 rounded-md transition-colors">
                  Sacar
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tasks Card */}
          <Card className="bg-gray-50 rounded-lg shadow-sm h-[400px]">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <h2 className="font-garamond font-bold text-3xl">TAREFAS</h2>
            </CardContent>
          </Card>
          
          {/* Couples Dashboard Card */}
          <CouplesList 
            couples={couples} 
            onOpenNewDashboard={() => setIsNewDashboardModalOpen(true)} 
          />
          
          {/* Meetings Card */}
          <Card className="bg-gray-50 rounded-lg shadow-sm md:col-span-2 h-[300px]">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <h2 className="font-garamond font-bold text-3xl">Reuniões</h2>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
      
      {/* Modal for creating new dashboard */}
      <NewDashboardModal
        isOpen={isNewDashboardModalOpen}
        onClose={() => setIsNewDashboardModalOpen(false)}
        onCreateDashboard={handleCreateDashboard}
      />
    </div>
  );
};

export default AdvisorDashboard;
