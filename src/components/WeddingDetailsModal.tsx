
import React from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface WeddingDetailsModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (weddingData: WeddingData) => void;
}

export interface WeddingData {
  weddingDate: string;
  budget: string;
  guestCount: string;
}

const WeddingDetailsModal = ({ isOpen, onOpenChange, onSubmit }: WeddingDetailsModalProps) => {
  const [weddingDate, setWeddingDate] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [guestCount, setGuestCount] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      weddingDate,
      budget,
      guestCount
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full p-0 gap-0 overflow-hidden">
        <div className="p-4 bg-gray-100 border-b border-gray-200 text-center">
          <h2 className="font-bold text-base uppercase">Meu casamento</h2>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        
        <div className="p-6">
          <p className="mb-4">
            Gerencie todos os detalhes do seu casamento em um só lugar! Use nosso 
            Orçamentador, Lista de Tarefas e Lista de Convidados para simplificar a organização 
            do seu grande dia.
          </p>
          
          <p className="mb-6 text-gray-700">
            Para oferecer a melhor experiência, pedimos que 
            responda a algumas perguntas sobre o seu casamento:
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="weddingDate" className="block text-sm font-medium">
                  Data do casamento prevista
                </label>
                <Input 
                  id="weddingDate" 
                  type="text"
                  placeholder="dd/mm/aaaa"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="budget" className="block text-sm font-medium">
                  Orçamento do casamento disponível
                </label>
                <Input 
                  id="budget" 
                  type="text" 
                  placeholder="R$ 0,00"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="guestCount" className="block text-sm font-medium">
                  Número de convidados previstos
                </label>
                <Input 
                  id="guestCount" 
                  type="text" 
                  placeholder="100"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  required
                />
              </div>
              
              <p className="text-xs text-gray-600 italic">
                *Você poderá editar essas informações a qualquer momento no nosso organizador de casamento.
              </p>
              
              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-black/90"
              >
                Enviar respostas
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WeddingDetailsModal;
