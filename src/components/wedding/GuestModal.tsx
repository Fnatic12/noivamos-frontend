
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GuestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuestModal: React.FC<GuestModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Convidado adicionado",
      description: `${name} foi adicionado à lista de convidados`
    });
    
    // Reset form and close modal
    setName('');
    setPhone('');
    setMessage('');
    onClose();
  };

  const handleImportContacts = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Importar contatos estará disponível em breve."
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md w-full p-0 gap-0 overflow-hidden">
        <div className="p-4 bg-gray-100 border-b border-gray-200 text-center">
          <h2 className="font-bold text-base uppercase">ADICIONAR CONVIDADOS</h2>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Nome do convidado
              </label>
              <Input 
                id="name" 
                type="text"
                placeholder="Digite o nome do convidado"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Número do convidado (com ddd)
              </label>
              <Input 
                id="phone" 
                type="text" 
                placeholder="Digite o número do convidado"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Mensagem do convite
              </label>
              <Input 
                id="message" 
                type="text" 
                placeholder="Digite o número do convidado"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div>
              <Button 
                type="button"
                variant="outline"
                onClick={handleImportContacts}
                className="flex items-center gap-2 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Importar contatos
              </Button>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-noivamos-gold text-white hover:bg-noivamos-gold/90"
            >
              Adicionar convidados
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuestModal;
