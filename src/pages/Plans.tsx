
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentModal from '@/components/PaymentModal';
import { Button } from '@/components/ui/button';
import SuccessDialog from '@/components/SuccessDialog';

const Plans = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro' | 'premium' | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const navigate = useNavigate();

  const handleSelectPlan = (plan: 'basic' | 'pro' | 'premium') => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowSuccessDialog(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex flex-col items-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-garamond text-center text-noivamos-gold mb-4">
          Escolha seu plano
        </h1>
        <p className="text-xl md:text-2xl font-garamond text-center mb-16 max-w-3xl">
          Escolha o plano perfeito para organizar o seu casamento dos sonhos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Plano Básico */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col h-full">
            <h2 className="text-3xl font-garamond mb-2">Básico</h2>
            <p className="text-2xl font-garamond mb-6">R$ 10,00 <span className="text-xl">mês</span></p>
            
            <p className="text-lg mb-4">Serviços disponíveis:</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
            </ul>

            <Button 
              onClick={() => handleSelectPlan('basic')}
              className="w-full bg-noivamos-gold hover:bg-noivamos-gold-dark text-white py-2 mt-auto"
            >
              Selecionar plano
            </Button>
          </div>

          {/* Plano Pro */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col bg-noivamos-gold text-white h-full relative">
            <div className="absolute top-4 right-4 bg-white text-black py-1 px-4 rounded-full text-sm font-medium">
              Recomendado
            </div>
            <h2 className="text-3xl font-garamond mb-2">Pro</h2>
            <p className="text-2xl font-garamond mb-6">R$ 25,00 <span className="text-xl">mês</span></p>
            
            <p className="text-lg mb-4">Serviços disponíveis:</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
            </ul>

            <Button 
              onClick={() => handleSelectPlan('pro')}
              className="w-full bg-white hover:bg-gray-100 text-noivamos-gold py-2 mt-auto"
            >
              Selecionar plano
            </Button>
          </div>

          {/* Plano Premium */}
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col h-full">
            <h2 className="text-3xl font-garamond mb-2">Premium</h2>
            <p className="text-2xl font-garamond mb-6">R$ 50,00 <span className="text-xl">mês</span></p>
            
            <p className="text-lg mb-4">Serviços disponíveis:</p>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Feature</span>
              </li>
            </ul>

            <Button 
              onClick={() => handleSelectPlan('premium')}
              className="w-full bg-noivamos-gold hover:bg-noivamos-gold-dark text-white py-2 mt-auto"
            >
              Selecionar plano
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {showPaymentModal && (
        <PaymentModal 
          isOpen={showPaymentModal} 
          onClose={() => setShowPaymentModal(false)}
          onSuccess={handlePaymentSuccess}
          plan={selectedPlan}
        />
      )}

      {showSuccessDialog && (
        <SuccessDialog
          open={showSuccessDialog}
          onOpenChange={(open) => {
            setShowSuccessDialog(open);
            if (!open) {
              navigate('/wedding');
            }
          }}
          title="BEM VINDO À NOIVAMOS"
          message="Pagamento realizado com sucesso! Agora você terá uma experiência ainda melhor para gerenciar seu casamento."
          buttonText="Entendido"
        />
      )}
    </div>
  );
};

export default Plans;
