
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ForgotPasswordForm from '@/components/ForgotPasswordForm';
import { Card } from '@/components/ui/card';

const ForgotPassword = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <Card className="w-full max-w-md mx-auto bg-white p-6 shadow-md">
          <ForgotPasswordForm />
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
