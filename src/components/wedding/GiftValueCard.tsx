
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GiftValueCardProps {
  onWithdraw: () => void;
}

const GiftValueCard: React.FC<GiftValueCardProps> = ({ onWithdraw }) => {
  return (
    <Card className="flex-shrink-0 w-80">
      <CardContent className="p-6">
        <h2 className="font-medium mb-2">Valor de presentes recebidos</h2>
        <p className="text-xl font-bold mb-4">R$ 200,00</p>
        <button 
          className="w-full py-2 bg-[#B28800] text-white rounded-md hover:bg-[#a07800]"
          onClick={onWithdraw}
        >
          Sacar valor
        </button>
      </CardContent>
    </Card>
  );
};

export default GiftValueCard;
