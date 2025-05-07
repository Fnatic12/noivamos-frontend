
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <h2 className="font-garamond font-bold text-2xl">Dashboards</h2>
          <button 
            onClick={onOpenNewDashboard}
            className="flex items-center text-sm text-[#B28800] hover:text-[#9a7600] font-avenir"
          >
            criar novo dashboard <Plus className="ml-1" size={16} />
          </button>
        </div>
        
        <div className="divide-y border-t border-b overflow-auto max-h-[300px]">
          {couples.length === 0 ? (
            <div className="py-8 text-center">
              <p className="font-avenir text-gray-500">Nenhum dashboard criado</p>
            </div>
          ) : (
            couples.map((couple) => (
              <Link 
                key={couple.id} 
                to={`/advisor/couple/${couple.id}`}
                className="block py-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 rounded-full mr-4 flex-shrink-0">
                    {couple.image ? (
                      <img 
                        src={couple.image} 
                        alt={couple.name} 
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : null}
                  </div>
                  <span className="font-garamond text-lg">{couple.name}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CouplesList;
