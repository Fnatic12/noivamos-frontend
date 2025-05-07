
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ isOpen, onClose }) => {
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Categoria adicionada",
      description: `${category} foi adicionada com o valor ${value}`
    });
    
    // Reset form and close modal
    setCategory('');
    setValue('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md w-full p-0 gap-0 overflow-hidden">
        <div className="p-4 bg-gray-100 border-b border-gray-200 text-center">
          <h2 className="font-bold text-base uppercase">ADICIONAR CATEGORIA</h2>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium">
                Categoria
              </label>
              <Input 
                id="category" 
                type="text"
                placeholder="Digite a tarefa"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="value" className="block text-sm font-medium">
                Valor
              </label>
              <Input 
                id="value" 
                type="text" 
                placeholder="digite o valor"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-noivamos-gold text-white hover:bg-noivamos-gold/90"
            >
              Adicionar categoria
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;
