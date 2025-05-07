
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export interface CoupleData {
  id: string;
  name: string;
  image?: string;
}

interface CouplesListProps {
  couples: CoupleData[];
  onOpenNewDashboard: () => void;
}

const CouplesList = ({ couples, onOpenNewDashboard }: CouplesListProps) => {
  return (
    <Card className="bg-gray-50 rounded-lg shadow-sm h-[400px]">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-garamond font-bold text-3xl">Dashboards</h2>
          <button 
            onClick={onOpenNewDashboard}
            className="flex items-center text-[#B28800] hover:text-[#9a7600] font-avenir"
          >
            criar novo dashboard <Plus className="ml-1" size={20} />
          </button>
        </div>
        
        <div className="divide-y border-t border-b">
          {couples.length === 0 ? (
            <div className="py-8 text-center">
              <p className="font-avenir text-gray-500">Nenhum dashboard criado</p>
            </div>
          ) : (
            couples.map((couple) => (
              <div key={couple.id} className="py-4 flex items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-full mr-4 flex-shrink-0">
                  {couple.image ? (
                    <img 
                      src={couple.image} 
                      alt={couple.name} 
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : null}
                </div>
                <span className="font-garamond text-xl">{couple.name}</span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CouplesList;
