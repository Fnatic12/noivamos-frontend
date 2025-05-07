
import React, { useState } from 'react';
import { Eye, EyeOff, Apple, Google, Microsoft } from 'lucide-react';

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
      <h1 className="font-garamond font-bold text-6xl md:text-7xl lg:text-8xl text-noivamos-gold leading-tight mb-12">
        Entre em sua conta
      </h1>
      
      <div className="flex flex-col space-y-4 mb-8">
        <button className="w-full flex items-center justify-start px-4 py-4 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Google size={20} className="mr-4" />
          <span className="font-avenir text-base">Entrar com uma conta Google</span>
        </button>
        
        <button className="w-full flex items-center justify-start px-4 py-4 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Microsoft size={20} className="mr-4" />
          <span className="font-avenir text-base">Entrar com uma conta Microsoft</span>
        </button>
        
        <button className="w-full flex items-center justify-start px-4 py-4 border border-noivamos-border rounded-lg bg-white hover:bg-gray-50 transition-colors">
          <Apple size={20} className="mr-4" />
          <span className="font-avenir text-base">Entrar com uma conta Apple</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-avenir text-base mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-12 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noivamos-gold"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block font-avenir text-base mb-2">
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full h-12 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-noivamos-gold"
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
          className="w-full py-4 bg-noivamos-gold hover:bg-noivamos-gold-dark text-white font-avenir font-bold rounded-lg transition-colors"
        >
          Entrar
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="font-avenir text-base mb-3">
          Esqueceu sua senha? <a href="#" className="font-bold text-noivamos-gold hover:underline">clique aqui</a>
        </p>
        <p className="font-avenir text-base">
          Não tem conta? <a href="#" className="font-bold text-noivamos-gold hover:underline">registra-se</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
