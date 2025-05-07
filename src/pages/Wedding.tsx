
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeddingDetailsModal from '@/components/WeddingDetailsModal';
import { useWeddingModal } from '@/hooks/use-wedding-modal';
import { WeddingData } from '@/components/WeddingDetailsModal';
import { useToast } from '@/hooks/use-toast';
import WeddingDashboard from '@/components/wedding/WeddingDashboard';

const Wedding = () => {
  const { hasSeenModal, markAsSeen, isOpen, openModal, closeModal, setWeddingData, weddingData } = useWeddingModal();
  const { toast } = useToast();

  // Open modal if user hasn't seen it before
  useEffect(() => {
    if (!hasSeenModal) {
      openModal();
    }
  }, [hasSeenModal, openModal]);
  
  const handleSubmitWeddingData = (data: WeddingData) => {
    setWeddingData(data);
    markAsSeen();
    
    toast({
      title: "Informações salvas",
      description: "Suas informações do casamento foram salvas com sucesso!",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {hasSeenModal && weddingData && <WeddingDashboard weddingData={weddingData} />}
        
        {!hasSeenModal && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Meu Casamento</h1>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-lg mb-4">
                Bem-vindo(a) à página de gerenciamento do seu casamento. 
                Aqui você poderá organizar todos os detalhes do seu grande dia.
              </p>
              <p className="text-gray-500 text-center py-10">
                Por favor, preencha as informações iniciais do seu casamento para começar.
              </p>
            </div>
          </div>
        )}
      </main>
      
      <WeddingDetailsModal 
        isOpen={isOpen} 
        onOpenChange={(open) => {
          if (open) {
            openModal();
          } else {
            closeModal();
          }
        }} 
        onSubmit={handleSubmitWeddingData} 
      />
      
      <Footer />
    </div>
  );
};

export default Wedding;
