
import React, { useState, useRef } from 'react';
import { WeddingData } from '@/components/WeddingDetailsModal';
import { Card, CardContent } from '@/components/ui/card';
import BudgetSection from '@/components/wedding/BudgetSection';
import TasksSection from '@/components/wedding/TasksSection';
import GuestsSection from '@/components/wedding/GuestsSection';
import CategoryModal from '@/components/wedding/CategoryModal';
import GuestModal from '@/components/wedding/GuestModal';
import TaskModal from '@/components/wedding/TaskModal';
import WithdrawModal from '@/components/wedding/WithdrawModal';
import { format, differenceInDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Camera, Image, Upload, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface WeddingDashboardProps {
  weddingData: WeddingData;
}

const WeddingDashboard: React.FC<WeddingDashboardProps> = ({ weddingData }) => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string>("/lovable-uploads/50e63417-c45a-40a3-99d0-dd09cbb69262.png");
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle camera capture
  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      // Here we'd normally show a camera UI and let the user take a picture
      // For now, just show a toast that we requested camera access successfully
      toast({
        title: "Câmera ativada",
        description: "Permissão para usar a câmera concedida. Esta funcionalidade será implementada completamente em breve.",
      });
      
      // Clean up
      stream.getTracks().forEach(track => track.stop());
    } catch (err) {
      toast({
        title: "Erro ao acessar a câmera",
        description: "Não foi possível acessar sua câmera. Verifique as permissões do navegador.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-start gap-8">
          {/* Profile Section */}
          <div className="flex-shrink-0 relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              <Avatar className="w-32 h-32">
                <AvatarImage src={profileImage} alt="Foto do casal" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            
            {/* Photo upload options overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex flex-col items-center space-y-2">
                <button 
                  onClick={() => fileInputRef.current?.click()} 
                  className="text-white hover:text-noivamos-gold p-1"
                  title="Escolher da galeria"
                >
                  <Image size={20} />
                </button>
                <button 
                  onClick={handleCameraCapture} 
                  className="text-white hover:text-noivamos-gold p-1"
                  title="Tirar foto"
                >
                  <Camera size={20} />
                </button>
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
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
          </div>

          {/* Gift Value Card */}
          <Card className="flex-shrink-0 w-80">
            <CardContent className="p-6">
              <h2 className="font-medium mb-2">Valor de presentes recebidos</h2>
              <p className="text-xl font-bold mb-4">R$ 200,00</p>
              <button 
                className="w-full py-2 bg-[#B28800] text-white rounded-md hover:bg-[#a07800]"
                onClick={() => setIsWithdrawModalOpen(true)}
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
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        availableAmount={200.00}
      />
    </div>
  );
};

export default WeddingDashboard;
