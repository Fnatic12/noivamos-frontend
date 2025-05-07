
import React, { useState } from 'react';
import { WeddingData } from '@/components/WeddingDetailsModal';
import { Card, CardContent } from '@/components/ui/card';
import BudgetSection from '@/components/wedding/BudgetSection';
import TasksSection from '@/components/wedding/TasksSection';
import GuestsSection from '@/components/wedding/GuestsSection';
import CategoryModal from '@/components/wedding/CategoryModal';
import GuestModal from '@/components/wedding/GuestModal';
import TaskModal from '@/components/wedding/TaskModal';
import { format, differenceInDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WeddingDashboardProps {
  weddingData: WeddingData;
}

const WeddingDashboard: React.FC<WeddingDashboardProps> = ({ weddingData }) => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const { toast } = useToast();

  // Parse wedding date to calculate days remaining
  let daysRemaining = 0;
  let formattedDate = '';
  
  try {
    // Try to parse the date in different formats
    const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    const match = weddingData.weddingDate.match(datePattern);
    
    if (match) {
      const [_, day, month, year] = match;
      const parsedDate = new Date(`${year}-${month}-${day}`);
      daysRemaining = differenceInDays(parsedDate, new Date());
      formattedDate = format(parsedDate, 'dd/MM/yyyy');
    } else {
      formattedDate = weddingData.weddingDate;
    }
  } catch (error) {
    console.error('Error parsing wedding date:', error);
    formattedDate = weddingData.weddingDate;
  }

  // Mock name for now - would come from authentication
  const userName = "Annie";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-start gap-8">
          {/* Profile Section */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              <img 
                src="/lovable-uploads/50e63417-c45a-40a3-99d0-dd09cbb69262.png" 
                alt="Casal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Wedding Info */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold text-gray-900">Olá, {userName}!</h1>
            <p className="text-xl mt-2">Faltam {daysRemaining > 0 ? daysRemaining : '?'} dias para o seu casamento!</p>
            <div className="flex items-center mt-2">
              <p className="text-xl">{formattedDate}</p>
              <button 
                className="ml-2 text-gray-500 hover:text-gray-700"
                onClick={() => toast({
                  title: "Funcionalidade em desenvolvimento",
                  description: "Editar data do casamento estará disponível em breve."
                })}
              >
                <span className="underline">editar</span>
              </button>
            </div>
            <div className="mt-4">
              <input
                type="search"
                placeholder="Pesquisar..."
                className="border border-gray-300 rounded-md px-4 py-2 w-full max-w-md"
              />
            </div>
          </div>

          {/* Gift Value Card */}
          <Card className="flex-shrink-0 w-80">
            <CardContent className="p-6">
              <h2 className="font-medium mb-2">Valor de presentes recebidos</h2>
              <p className="text-xl font-bold mb-4">R$ 200,00</p>
              <button 
                className="w-full py-2 bg-noivamos-gold text-white rounded-md hover:bg-noivamos-gold/90"
                onClick={() => toast({
                  title: "Funcionalidade em desenvolvimento",
                  description: "Sacar valores estará disponível em breve."
                })}
              >
                Sacar valor
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Budget Section */}
      <BudgetSection 
        budget={weddingData.budget} 
        onAddCategory={() => setIsCategoryModalOpen(true)}
      />

      {/* Tasks Section */}
      <TasksSection onAddTask={() => setIsTaskModalOpen(true)} />

      {/* Guests Section */}
      <GuestsSection onAddGuest={() => setIsGuestModalOpen(true)} />

      {/* Modals */}
      <CategoryModal 
        isOpen={isCategoryModalOpen} 
        onClose={() => setIsCategoryModalOpen(false)} 
      />
      <GuestModal 
        isOpen={isGuestModalOpen} 
        onClose={() => setIsGuestModalOpen(false)} 
      />
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
      />
    </div>
  );
};

export default WeddingDashboard;
