
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessDialog from './SuccessDialog';
import { Input } from './ui/input';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recuperação de senha solicitada para:', email);
    // Aqui você normalmente chamaria uma API para enviar o email de recuperação
    setShowSuccess(true);
  };

  const handleSuccessDialogClose = () => {
    setShowSuccess(false);
    // Opcionalmente redirecionar para login após fechar o diálogo
    navigate('/login');
  };

  return (
    <div className="w-full">
      <h1 className="font-garamond font-bold text-[#B28800] text-4xl text-center mb-2">
        Noivamos
      </h1>
      
      <h2 className="font-garamond text-3xl text-center mb-4">
        Recuperação de senha
      </h2>
      
      <p className="text-center mb-6 text-gray-700 px-4">
        Insira o endereço de e-mail ou o número do telefone celular associado à sua conta.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block font-avenir text-base mb-2">
            Email ou número
          </label>
          <Input
            type="text"
            id="email"
            className="w-full h-12 px-4 py-2 border border-noivamos-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B28800]"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-[#B28800] hover:bg-[#9a7600] text-white font-avenir font-medium rounded-lg transition-colors"
        >
          Enviar por email
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="font-avenir text-sm">
          Lembrou sua senha? <Link to="/login" className="font-bold text-[#B28800] hover:underline">Voltar para login</Link>
        </p>
      </div>
      
      <SuccessDialog 
        open={showSuccess} 
        onOpenChange={handleSuccessDialogClose} 
      />
    </div>
  );
};

export default ForgotPasswordForm;
