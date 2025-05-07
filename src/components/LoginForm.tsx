
import React, { useState } from 'react';
import { Eye, EyeOff, Apple, Mail, Laptop } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Here you would typically call an authentication API
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="font-garamond font-bold text-4xl md:text-5xl lg:text-6xl text-[#B28800] leading-tight mb-8">
        Entre em sua conta
      </h1>
      
      <div className="flex flex-col space-y-3 mb-6">
        <button className="w-full flex items-center justify-start px-4 py-3 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Mail size={20} className="mr-4" />
          <span className="font-avenir text-base">Entrar com uma conta Google</span>
        </button>
        
        <button className="w-full flex items-center justify-start px-4 py-3 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Laptop size={20} className="mr-4" />
          <span className="font-avenir text-base">Entrar com uma conta Microsoft</span>
        </button>
        
        <button className="w-full flex items-center justify-start px-4 py-3 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Apple size={20} className="mr-4" />
          <span className="font-avenir text-base">Entrar com uma conta Apple</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
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
        
        <div className="mb-4">
          <label htmlFor="password" className="block font-avenir text-base mb-1">
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
              placeholder="Digite sua senha"
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
        
        <button
          type="submit"
          className="w-full py-3 bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir font-bold rounded-lg transition-colors"
        >
          Entrar
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="font-avenir text-sm mb-2">
          Esqueceu sua senha? <a href="#" className="font-bold text-[#B28800] hover:underline">clique aqui</a>
        </p>
        <p className="font-avenir text-sm">
          Não tem conta? <a href="#" className="font-bold text-[#B28800] hover:underline">registra-se</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
