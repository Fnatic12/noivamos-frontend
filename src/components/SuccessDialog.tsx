
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

const SuccessDialog = ({ 
  open, 
  onOpenChange, 
  title = "CONTA CRIADA COM SUCESSO", 
  message = "Agora é só aproveitar. Comece explorando todos os recursos disponíveis.",
  buttonText = "Entendido"
}: SuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="relative">
          <button 
            onClick={() => onOpenChange(false)} 
            className="absolute right-0 top-0 rounded-full p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <DialogTitle className="text-center font-garamond text-xl text-[#B28800]">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-4 text-center">
          <p className="mb-6 text-gray-700">
            {message}
          </p>
          
          <button
            onClick={() => onOpenChange(false)}
            className="w-full py-3 bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir font-medium rounded-lg transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
