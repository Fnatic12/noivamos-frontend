
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 max-w-[1920px] mx-auto px-6 md:px-24">
        <div className="lg:col-span-6 flex items-center justify-center py-8">
          <LoginForm />
        </div>
        
        <div className="lg:col-span-6 hidden lg:flex items-center justify-center py-8">
          <img 
            src="/lovable-uploads/50e63417-c45a-40a3-99d0-dd09cbb69262.png" 
            alt="Wedding Rings" 
            className="max-w-full max-h-[400px] object-contain"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
