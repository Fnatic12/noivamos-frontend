
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 max-w-[1920px] mx-auto px-6 md:px-24">
        <div className="lg:col-span-6 flex items-center justify-center py-6">
          <ForgotPasswordForm />
        </div>
        
        <div className="lg:col-span-6 hidden lg:flex items-center justify-center bg-gray-100 py-6">
          {/* Área cinza para futura animação */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
