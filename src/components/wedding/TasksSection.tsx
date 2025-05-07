
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TasksSectionProps {
  onAddTask: () => void;
}

const TasksSection: React.FC<TasksSectionProps> = ({ onAddTask }) => {
  const { toast } = useToast();
  
  // Mock tasks data
  const tasks = [
    { id: 1, task: "Definir o orçamento", date: "10/10/2024", completed: true },
    { id: 2, task: "Escolher a data e o local", date: "10/11/2024", completed: false },
    { id: 3, task: "Montar a lista de convidados", date: "10/12/2024", completed: false },
    { id: 4, task: "Contratar fornecedores principais", date: "10/03/2024", completed: false },
    { id: 5, task: "Escolher o vestido e o traje", date: "10/04/2024", completed: false },
    { id: 6, task: "Escolher convites e papelaria", date: "10/04/2024", completed: false },
    { id: 7, task: "Planejar a lua de mel", date: "10/05/2024", completed: false }
  ];

  // Calculate tasks stats
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  
  const handleToggleTask = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Marcar tarefa como completa estará disponível em breve."
    });
  };

  const handleEditTask = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Editar tarefa estará disponível em breve."
    });
  };

  const handleDeleteTask = () => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "Excluir tarefa estará disponível em breve."
    });
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Lista de Tarefas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 bg-white p-6 rounded-md shadow-sm flex items-center gap-4">
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <img 
              src="/lovable-uploads/c07ca9bc-358b-440f-bcd2-0e612b20675e.png" 
              alt="Tarefas" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Tarefas concluídas</h3>
            <p className="text-xl font-bold">{completedTasks} de {totalTasks}</p>
          </div>
        </div>
        
        <div className="col-span-3 md:pl-6">
          <input
            type="search"
            placeholder="Pesquisar tarefas..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
      </div>
      
      <Table>
        <TableHeader className="bg-noivamos-gold text-white">
          <TableRow>
            <TableHead className="font-semibold w-24">Completa</TableHead>
            <TableHead className="font-semibold">Tarefa</TableHead>
            <TableHead className="font-semibold">Data</TableHead>
            <TableHead className="font-semibold w-24">Editar</TableHead>
            <TableHead className="font-semibold w-24">Excluir</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className={task.completed ? "bg-green-50" : ""}>
              <TableCell>
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={handleToggleTask}
                  className="h-5 w-5"
                />
              </TableCell>
              <TableCell>{task.task}</TableCell>
              <TableCell>{task.date}</TableCell>
              <TableCell>
                <button onClick={handleEditTask} className="p-1 text-gray-500 hover:text-blue-500">
                  <Edit size={18} />
                </button>
              </TableCell>
              <TableCell>
                <button onClick={handleDeleteTask} className="p-1 text-gray-500 hover:text-red-500">
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={onAddTask}
          variant="outline" 
          className="bg-noivamos-gold text-white hover:bg-noivamos-gold/90"
        >
          <Plus size={16} className="mr-1" />
          Adicionar nova tarefa
        </Button>
      </div>
    </div>
  );
};

export default TasksSection;
