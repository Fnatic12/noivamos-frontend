
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const AdvisorDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow max-w-[1920px] mx-auto px-6 md:px-24 py-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-garamond font-bold text-4xl md:text-5xl text-[#B28800]">
            Olá Cynthia!
          </h1>
          
          <Card className="w-64">
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-avenir font-medium text-lg">Valor de Rev Recebido</h3>
                <p className="font-garamond font-bold text-2xl">R$ 200,00</p>
                <button className="w-full bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir py-2 rounded-md transition-colors">
                  Sacar
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tasks Card */}
          <Card className="bg-gray-50 rounded-lg shadow-sm h-[400px]">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <h2 className="font-garamond font-bold text-3xl">TAREFAS</h2>
            </CardContent>
          </Card>
          
          {/* Access Dashboard Card */}
          <Card className="bg-gray-50 rounded-lg shadow-sm h-[400px]">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <h2 className="font-garamond font-bold text-3xl">ACESSAR DASHBOARD CASAIS</h2>
            </CardContent>
          </Card>
          
          {/* Meetings Card */}
          <Card className="bg-gray-50 rounded-lg shadow-sm md:col-span-2 h-[300px]">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <h2 className="font-garamond font-bold text-3xl">Reuniões</h2>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvisorDashboard;
