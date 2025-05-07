
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell } from 'recharts';
import { Edit, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BudgetSectionProps {
  budget: string;
  onAddCategory: () => void;
}

const BudgetSection: React.FC<BudgetSectionProps> = ({ budget, onAddCategory }) => {
  const { toast } = useToast();
  
  // Parse budget string to number for calculations
  const totalBudget = parseFloat(budget.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  
  // Mock data for budget visualization
  const paidValue = 2000;
  const expectedCosts = 3500;
  const availableValue = totalBudget - paidValue - expectedCosts;
  
  const chartData = [
    { name: 'Valor já pago', value: paidValue, color: '#E57373' },
    { name: 'Gastos previstos', value: expectedCosts, color: '#FFB74D' },
    { name: 'Valor disponível', value: availableValue, color: '#81C784' }
  ];
  
  // Mock expense categories
  const expenseCategories = [
    { category: 'Buffet', value: 1200, paid: true },
    { category: 'Local', value: 2000, paid: false },
    { category: 'Convites', value: 200, paid: false },
    { category: 'Música', value: 1400, paid: false }
  ];

  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleEditBudget = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Editar orçamento estará disponível em breve."
    });
  };

  const handleDeleteItem = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Excluir item estará disponível em breve."
    });
  };

  const handleTogglePayment = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Marcar como pago estará disponível em breve."
    });
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Controle Financeiro</h2>
      
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-medium">Orçamento: {formatCurrency(totalBudget)}</h3>
        <button 
          onClick={handleEditBudget}
          className="p-1 text-gray-500 hover:text-gray-700"
        >
          <Edit size={18} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <div className="col-span-2">
          <ChartContainer className="h-80" config={{
            paid: { label: "Valor já pago", color: "#E57373" },
            expected: { label: "Gastos previstos", color: "#FFB74D" },
            available: { label: "Valor disponível", color: "#81C784" }
          }}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <h4 className="text-red-400 mb-1">R$ {paidValue.toLocaleString('pt-BR')}</h4>
            <p className="text-gray-600">Valor já pago</p>
          </div>
          <div className="mb-4">
            <h4 className="text-amber-400 mb-1">R$ {expectedCosts.toLocaleString('pt-BR')}</h4>
            <p className="text-gray-600">Gastos previstos</p>
          </div>
          <div>
            <h4 className="text-green-500 mb-1">R$ {availableValue.toLocaleString('pt-BR')}</h4>
            <p className="text-gray-600">Valor disponível</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-medium mb-4">Faturas</h3>
      <Table>
        <TableHeader className="bg-noivamos-gold text-white">
          <TableRow>
            <TableHead className="font-semibold">Categoria</TableHead>
            <TableHead className="font-semibold">Valor</TableHead>
            <TableHead className="font-semibold">Pagamento</TableHead>
            <TableHead className="font-semibold">Excluir Item</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenseCategories.map((expense, index) => (
            <TableRow key={index}>
              <TableCell>{expense.category}</TableCell>
              <TableCell>R$ {expense.value.toLocaleString('pt-BR')}</TableCell>
              <TableCell>
                <input 
                  type="checkbox" 
                  checked={expense.paid} 
                  onChange={handleTogglePayment}
                  className="h-5 w-5"
                />
              </TableCell>
              <TableCell>
                <button 
                  onClick={handleDeleteItem}
                  className="p-1 text-gray-500 hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={onAddCategory}
          variant="outline" 
          className="bg-noivamos-gold text-white hover:bg-noivamos-gold/90"
        >
          <Plus size={16} className="mr-1" />
          Adicionar nova categoria
        </Button>
      </div>
    </div>
  );
};

export default BudgetSection;
