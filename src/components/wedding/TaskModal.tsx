
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Tarefa adicionada",
      description: `A tarefa "${task}" foi adicionada com data ${date}`
    });
    
    // Reset form and close modal
    setTask('');
    setDate('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md w-full p-0 gap-0 overflow-hidden">
        <div className="p-4 bg-gray-100 border-b border-gray-200 text-center">
          <h2 className="font-bold text-base uppercase">ADICIONAR TAREFA</h2>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="task" className="block text-sm font-medium">
                Tarefa
              </label>
              <Input 
                id="task" 
                type="text"
                placeholder="Digite a tarefa"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium">
                Data
              </label>
              <Input 
                id="date" 
                type="text" 
                placeholder="dd/mm/aaaa"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-noivamos-gold text-white hover:bg-noivamos-gold/90"
            >
              Adicionar tarefa
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
