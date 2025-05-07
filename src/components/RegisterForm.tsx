
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Laptop, Apple } from 'lucide-react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt with:', { name, email, password, confirmPassword });
    // Here you would typically call an API to register the user
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="font-garamond font-bold text-4xl md:text-5xl lg:text-6xl text-[#B28800] leading-tight mb-8">
        Crie sua conta
      </h1>
      
      <div className="flex flex-col space-y-3 mb-6">
        <button className="w-full flex items-center justify-start px-4 py-3 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Mail size={20} className="mr-4" />
          <span className="font-avenir text-base">Registrar com uma conta Google</span>
        </button>
        
        <button className="w-full flex items-center justify-start px-4 py-3 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Laptop size={20} className="mr-4" />
          <span className="font-avenir text-base">Registrar com uma conta Microsoft</span>
        </button>
        
        <button className="w-full flex items-center justify-start px-4 py-3 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Apple size={20} className="mr-4" />
          <span className="font-avenir text-base">Registrar com uma conta Apple</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block font-avenir text-base mb-1">
            Nome completo
          </label>
          <input
            type="text"
            id="name"
            className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
            placeholder="Digite seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="block font-avenir text-base mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="block font-avenir text-base mb-1">
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-avenir text-base mb-1">
            Confirme sua senha
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={toggleConfirmPasswordVisibility}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir font-bold rounded-lg transition-colors"
        >
          Criar conta
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="font-avenir text-sm">
          Já tem uma conta? <a href="/login" className="font-bold text-[#B28800] hover:underline">Entre aqui</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
