
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface NewDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateDashboard: (name: string, image?: File) => void;
}

const NewDashboardModal = ({ isOpen, onClose, onCreateDashboard }: NewDashboardModalProps) => {
  const [dashboardName, setDashboardName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!dashboardName.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, adicione um nome para o dashboard",
        variant: "destructive"
      });
      return;
    }

    onCreateDashboard(dashboardName, image || undefined);
    resetForm();
  };

  const resetForm = () => {
    setDashboardName('');
    setImage(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-garamond text-2xl text-[#B28800]">
            Criar novo Dashboard
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <label htmlFor="dashboardName" className="font-garamond text-lg text-[#B28800]">
              Nome do Dashboard
            </label>
            <input
              id="dashboardName"
              type="text"
              placeholder="Adicione o nome do casal"
              className="w-full px-4 py-2 border border-gray-300 rounded-md font-avenir"
              value={dashboardName}
              onChange={(e) => setDashboardName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="coupleImage" className="font-garamond text-lg text-[#B28800]">
              Adicionar foto do casal
            </label>
            <div className="flex items-center">
              <input
                id="coupleImage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <label 
                htmlFor="coupleImage" 
                className="cursor-pointer px-4 py-2 bg-gray-100 border border-gray-300 rounded-md font-avenir"
              >
                {image ? image.name : "Carregar imagem do casal"}
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-4 mt-4">
          <Button
            variant="outline"
            onClick={handleClose}
            className="font-avenir bg-gray-200 hover:bg-gray-300"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            className="font-avenir bg-[#B28800] hover:bg-[#9a7600] text-white"
          >
            Criar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewDashboardModal;
