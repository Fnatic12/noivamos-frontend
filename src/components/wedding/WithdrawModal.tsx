
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableAmount: number;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({
  isOpen,
  onClose,
  availableAmount
}) => {
  const [amount, setAmount] = useState<string>('');
  const [pixKey, setPixKey] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui seria implementada a lógica de transferência real
    toast({
      title: "Solicitação recebida",
      description: "Seu saque foi solicitado com sucesso e está em processamento.",
    });
    
    onClose();
    // Reset form
    setAmount('');
    setPixKey('');
    setPassword('');
  };

  const formattedAvailableAmount = availableAmount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">SAQUE</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-base mb-4">
            Transforme os valores recebidos pelos presentes de casamento em dinheiro diretamente na sua conta via PIX.
          </p>
          
          <div className="mb-6">
            <p className="font-medium mb-2">Saldo disponível: {formattedAvailableAmount}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Valor a ser sacado
              </label>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="R$ 0,00"
                required
                type="text"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Chave PIX
              </label>
              <Input
                value={pixKey}
                onChange={(e) => setPixKey(e.target.value)}
                placeholder="Insira a chave PIX"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Senha Noivamos
              </label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                type="password"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-noivamos-gold hover:bg-noivamos-gold-dark text-white"
            >
              Fazer PIX
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
