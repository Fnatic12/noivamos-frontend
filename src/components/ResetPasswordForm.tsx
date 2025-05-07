
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './ui/input';
import { Eye, EyeOff } from 'lucide-react';
import SuccessDialog from './SuccessDialog';

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nova senha cadastrada:', password);
    // Aqui você normalmente chamaria uma API para atualizar a senha
    setShowSuccess(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSuccessDialogClose = () => {
    setShowSuccess(false);
    // Redirecionar para login após fechar o diálogo
    navigate('/login');
  };

  return (
    <div className="w-full">
      <h1 className="font-garamond font-bold text-[#B28800] text-4xl text-center mb-2">
        Noivamos
      </h1>
      
      <h2 className="font-garamond text-3xl text-center mb-4 text-gray-800">
        Nova senha
      </h2>
      
      <p className="text-center mb-6 text-gray-700 px-4">
        Insira a nova senha a ser utilizada na Noivamos
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="password" className="block font-avenir text-base mb-2">
            Senha
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full h-12 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={toggleShowPassword}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <div className="mb-8">
          <label htmlFor="confirmPassword" className="block font-avenir text-base mb-2">
            Confirmar senha
          </label>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="w-full h-12 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
              placeholder="Digite a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={toggleShowConfirmPassword}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir font-medium rounded-lg transition-colors"
        >
          Cadastrar nova senha
        </button>
      </form>
      
      <SuccessDialog 
        open={showSuccess} 
        onOpenChange={handleSuccessDialogClose} 
      />
    </div>
  );
};

export default ResetPasswordForm;
