
import React, { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import SuccessDialog from './SuccessDialog';
import { useNavigate } from 'react-router-dom';

const AdvisorRegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptEmails, setAcceptEmails] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt with:', { 
      name, 
      phone,
      email, 
      state,
      city,
      password, 
      confirmPassword,
      acceptTerms,
      acceptEmails
    });
    // Normally, you would send this to an API
    // For now, just show the success dialog
    setShowSuccess(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSuccessDialogClose = () => {
    setShowSuccess(false);
    // Optional: redirect to login or dashboard
    // navigate('/login');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="font-garamond font-bold text-4xl md:text-5xl text-[#B28800] text-center mb-6">
        Cadastra-se como Assessor
      </h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block font-avenir text-sm font-medium mb-1">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="phone" className="block font-avenir text-sm font-medium mb-1">
            Celular
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
            placeholder="Digite seu celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="block font-avenir text-sm font-medium mb-1">
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
          <label htmlFor="state" className="block font-avenir text-sm font-medium mb-1">
            Estado
          </label>
          <div className="relative">
            <select
              id="state"
              className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800] appearance-none"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="" disabled>Escolha seu estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="city" className="block font-avenir text-sm font-medium mb-1">
            Cidade
          </label>
          <div className="relative">
            <select
              id="city"
              className="w-full h-10 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800] appearance-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="" disabled>Escolha sua cidade</option>
              <option value="cidade1">Cidade 1</option>
              <option value="cidade2">Cidade 2</option>
              <option value="cidade3">Cidade 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="password" className="block font-avenir text-sm font-medium mb-1">
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
              aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="block font-avenir text-sm font-medium mb-1">
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
              aria-label={showConfirmPassword ? "Esconder senha" : "Mostrar senha"}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="font-avenir text-sm mb-2">sua senha deve incluir:</p>
          <div className="space-y-1 ml-1">
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-[#B28800]" />
              <span className="font-avenir text-sm">1 letra maiúscula</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-[#B28800]" />
              <span className="font-avenir text-sm">1 número</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-[#B28800]" />
              <span className="font-avenir text-sm">1 letra minúscula</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-[#B28800]" />
              <span className="font-avenir text-sm">8 caracteres</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={acceptTerms}
              onCheckedChange={(checked) => setAcceptTerms(checked === true)}
              className="border-gray-400 data-[state=checked]:bg-[#B28800] data-[state=checked]:border-[#B28800]"
            />
            <label htmlFor="terms" className="font-avenir text-sm">
              Termos e condições
            </label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="emails" 
              checked={acceptEmails}
              onCheckedChange={(checked) => setAcceptEmails(checked === true)}
              className="border-gray-400 data-[state=checked]:bg-[#B28800] data-[state=checked]:border-[#B28800]"
            />
            <label htmlFor="emails" className="font-avenir text-sm">
              Aceito receber emails
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir font-bold rounded-lg transition-colors"
        >
          Cadastrar
        </button>
      </form>
      
      <SuccessDialog 
        open={showSuccess} 
        onOpenChange={handleSuccessDialogClose} 
      />
    </div>
  );
};

export default AdvisorRegisterForm;
