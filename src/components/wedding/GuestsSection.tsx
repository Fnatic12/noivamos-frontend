
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GuestsSectionProps {
  onAddGuest: () => void;
}

const GuestsSection: React.FC<GuestsSectionProps> = ({ onAddGuest }) => {
  const { toast } = useToast();
  
  // Mock guests data
  const guests = [
    { id: 1, name: "Troy Barnes", confirmed: "Sim" },
    { id: 2, name: "Shirley Bennet", confirmed: "Não" },
    { id: 3, name: "Abed Nadir", confirmed: "Não" },
    { id: 4, name: "Tony Eddison", confirmed: "Sim" },
    { id: 5, name: "Mary Winger", confirmed: "Não" },
    { id: 6, name: "Britta Perry", confirmed: "Não" },
    { id: 7, name: "Annie Kim", confirmed: "Não" },
    { id: 8, name: "Pierce Hawthorne", confirmed: "Não" },
    { id: 9, name: "Dean Pelton", confirmed: "Não" },
    { id: 10, name: "Chang", confirmed: "Não" }
  ];

  // Calculate guest stats
  const confirmedGuests = guests.filter(guest => guest.confirmed === "Sim").length;
  const totalGuests = guests.length;
  
  const handleDeleteGuest = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Excluir convidado estará disponível em breve."
    });
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl mb-6">Lista de Convidados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 bg-white p-6 rounded-md shadow-sm flex items-center gap-4">
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <img 
              src="/lovable-uploads/b6e8bc2e-2430-4e81-abbd-cdc0051893fa.png" 
              alt="Convidados" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Presenças confirmadas</h3>
            <p className="text-xl font-medium">{confirmedGuests} de {totalGuests}</p>
          </div>
        </div>
      </div>
      
      <Table className="overflow-hidden rounded-lg border border-gray-200">
        <TableHeader>
          <TableRow className="bg-[#B28800]">
            <TableHead className="text-white">Convidado</TableHead>
            <TableHead className="text-white">Presença confirmada</TableHead>
            <TableHead className="text-white w-24">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {guests.map((guest) => (
            <TableRow key={guest.id} className={guest.confirmed === "Sim" ? "bg-green-50" : ""}>
              <TableCell>{guest.name}</TableCell>
              <TableCell>{guest.confirmed}</TableCell>
              <TableCell>
                <button onClick={handleDeleteGuest} className="p-1 text-gray-500 hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={onAddGuest}
          variant="outline" 
          className="bg-[#B28800] text-white hover:bg-[#B28800]/90"
        >
          <Plus size={16} className="mr-1" />
          Adicionar convidados
        </Button>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex gap-2">
          {[1, '...', 6, 7, 8, 9, 10, '...', 12].map((page, index) => (
            <Button 
              key={index}
              variant={page === 7 ? "default" : "outline"}
              className={page === 7 ? "bg-[#B28800]" : ""}
              size="sm"
              onClick={() => {
                if (typeof page === 'number') {
                  toast({
                    title: "Funcionalidade em desenvolvimento",
                    description: `Navegação para página ${page} estará disponível em breve.`
                  });
                }
              }}
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestsSection;
