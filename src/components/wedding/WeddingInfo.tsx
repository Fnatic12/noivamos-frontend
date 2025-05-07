
import React from 'react';
import { useToast } from '@/hooks/use-toast';

interface WeddingInfoProps {
  daysRemaining: number;
  formattedDate: string;
  userName: string;
}

const WeddingInfo: React.FC<WeddingInfoProps> = ({
  daysRemaining,
  formattedDate,
  userName,
}) => {
  const { toast } = useToast();

  return (
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
  );
};

export default WeddingInfo;
