
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  plan: 'basic' | 'pro' | 'premium' | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  plan
}) => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');
  const [cardCpf, setCardCpf] = useState<string>('');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardType, setCardType] = useState<'visa' | 'mastercard' | null>(null);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').substring(0, 16);
    const groups = [];
    for (let i = 0; i < digits.length; i += 4) {
      groups.push(digits.substring(i, i + 4));
    }
    return groups.join(' ');
  };

  const formatExpiryDate = (value: string) => {
    const digits = value.replace(/\D/g, '').substring(0, 4);
    if (digits.length > 2) {
      return `${digits.substring(0, 2)}/${digits.substring(2)}`;
    }
    return digits;
  };

  const formatCpf = (value: string) => {
    const digits = value.replace(/\D/g, '').substring(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.substring(0, 3)}.${digits.substring(3)}`;
    if (digits.length <= 9) return `${digits.substring(0, 3)}.${digits.substring(3, 6)}.${digits.substring(6)}`;
    return `${digits.substring(0, 3)}.${digits.substring(3, 6)}.${digits.substring(6, 9)}-${digits.substring(9)}`;
  };

  const detectCardType = (number: string) => {
    const digits = number.replace(/\D/g, '');
    if (digits.startsWith('4')) {
      setCardType('visa');
    } else if (/^5[1-5]/.test(digits)) {
      setCardType('mastercard');
    } else {
      setCardType(null);
    }
  };

  useEffect(() => {
    detectCardType(cardNumber);
    setIsFilled(cardNumber.length > 0);
  }, [cardNumber]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    setCardExpiry(formatted);
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCpf(e.target.value);
    setCardCpf(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      onSuccess();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl p-0 gap-0">
        <div className="border-b border-gray-200 p-6">
          <h2 className="font-bold text-xl text-center">DADOS PARA PAGAMENTO</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">
                    Número do cartão
                  </label>
                  <Input
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    onFocus={() => setIsFlipped(false)}
                    placeholder="Digite o número do cartão"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-1">
                    Nome do cartão
                  </label>
                  <Input
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    onFocus={() => setIsFlipped(false)}
                    placeholder="Digite o nome no cartão"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-1">
                    Data de validade
                  </label>
                  <Input
                    value={cardExpiry}
                    onChange={handleExpiryChange}
                    onFocus={() => setIsFlipped(false)}
                    placeholder="Digite a data de validade"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-1">
                    CVV 
                    <span className="ml-1 inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </span>
                  </label>
                  <Input
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                    onFocus={() => setIsFlipped(true)}
                    onBlur={() => setIsFlipped(false)}
                    placeholder="Digite o CVV"
                    required
                    maxLength={3}
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-1">
                    CPF do titular
                  </label>
                  <Input
                    value={cardCpf}
                    onChange={handleCpfChange}
                    onFocus={() => setIsFlipped(false)}
                    placeholder="Digite o CPF"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-noivamos-gold hover:bg-noivamos-gold-dark text-white py-6"
                >
                  Realizar pagamento
                </Button>
              </form>
            </div>
            
            <div className="md:order-2 flex flex-col items-center justify-center">
              <div className="w-full max-w-[350px] perspective-1000">
                <div 
                  className={cn(
                    "relative w-full h-[200px] transition-all duration-700 transform-style-3d",
                    isFlipped ? "rotate-y-180" : ""
                  )}
                >
                  {/* Front of the card */}
                  <div 
                    className={cn(
                      "absolute w-full h-full backface-hidden rounded-xl p-6 overflow-hidden transition-all duration-700",
                      isFilled ? 
                        "bg-black text-white" : 
                        "bg-gray-300 text-gray-700"
                    )}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <p className="text-lg">{cardNumber || 'número do cartão'}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs opacity-70">TITULAR</p>
                          <p>{cardName || 'nome no cartão'}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>{cardExpiry ? `${cardExpiry}` : 'mm/aa'}</p>
                          {cardType === 'visa' && (
                            <span className="text-2xl font-bold">VISA</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of the card */}
                  <div 
                    className={cn(
                      "absolute w-full h-full backface-hidden rounded-xl overflow-hidden rotate-y-180 transition-all duration-700",
                      isFilled ? "bg-black text-white" : "bg-gray-300 text-gray-700"
                    )}
                  >
                    <div className="w-full h-12 bg-gray-800 mt-5"></div>
                    <div className="p-6">
                      <div className="bg-white h-10 flex items-center justify-end pr-4">
                        <p className="text-black">CVV {cardCvv || '***'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADi0lEQVR4nO2ZTUhUURTHf6OjZWqfVCDRwrCFBBURFYhQq2gTLWoTFBG0qFW0qF3QxlVtWrSoRUGboHZFEYhJBBG1CYKiiCxTQhNNTZ1WHJiv2/Q/8hh9zpt3Z5z3Ax/z5t1777nnnHvPufdMCi9WA93ACDAJ/APGgV7gKrDRiyMZlNMLaeBHnvKjAALXAcNAJocw4+4yLgJ1JRawFhhTnH4HXANagKRyb0DF08erJRKxRjlwE3ju/p8CPrhCjQAtQIMHe3XADmAY+AksBxLA/qKJt8QZJcBj4AhQGdDmJhe+AB0rvJpC7suReOzm3AZgCHgL3ANO4t2TWVwDZoETRnKiEOqUmxsL8GxKeZ4OfMQFKpWbaeBMDE7sciLms5BXumUGfsbEd6RSD2JjoA4Y81lokfAWqPYbcELrAFfPhvBwFAi7oxSoMVyXA/12lMXFORiSVkJjwJ2EbDOWGvTOzkkHdGBBUau4EyY2tpU4jrMII6aC5MDqiPZqlZ5RoA1oDnBmEWKv8+JES8ibzxFWmrtEqYj24rIN6DT2bLvP+TKnTsdZPohxYBWXTgN7fVgZdbh0rnSdCZmCXrBB2bdMC/c6v70SpZpbih0vDmwutLFbnw6KjVnPmzuwxURLFxPLMw11kUETqiKtj5tHBIPGBDBTgoDdW2jyg0RLnf/ThRjouE8FHYfJ/gQWVwaJqTZeGwf+CV0eGvUorCuW/XGnFtiYmifUqdT5yHZkTUIbSyVa0hbYrzWRF5zYqNtQRz0UVWrChjGJkFi5W0BoUYOXo5yPKvcuRRBQ60IYY6oQI7L+SJ28MoKAG+7Z91eJ64oi4CTQO19ryPRJS/Mi5vvJBP8fUWSS/J94xwIQ8Nj99KC1QGdbpsgNXmch4xA7FM6RfbJwuAiEVgt3a1GcssvJLnNFdJcxdvKAz/cz42bvWcgvhieHSNuJQBmZ9cSWEmMnFF2kbzWyos0Ku5X+lCwhRw3WT45TWMR61cnZBO43C9kvFMbZr2TnZ2Bb3IXZIslkdtk4AXSVoLhbK0MPgHeBEbMrSfatlMkXJjLgy0AmX4a5oI8YbXFWq81doV5g3zI9PeJE9FheMFZppOcDHru0bFI+AIdxPooDO4F+FT/dLkMfuJ+/3wM6I3T1FViGP8DvZSAs7ptBp1OhIPyzgNByEvcD+AVz3LfD/ESCywAAAABJRU5ErkJggg==" 
                  alt="Mastercard" 
                  className="h-8" 
                />
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZPS8EURSG31VIKH1ZiYRoFCIKjej9Er9Ao/YDFFQkGr9AQ6HSKBQEldggCgkSBZGwj5wbk8tsuDPumbmz3SdZZe8573ln5u5c0Rr+VADDwBwQB5JA0jmXnf6M0WdDqlD7B+gVRCcBi8CbB+lCvgMrQIdfX4NYB0693noxh4Bm1x4YBbJuPnALDABh12TboFbgAMi4keXgeTQEwEBV4MpNC/Ub+MjH7aqbnxeJQfLEj528ynA1EJVJ1AwDV4FrYKhasUUQaDPXaVGemQQ+KhWJBk5+sehDrgzbQbRqQswCGLcpUB+ygFZTgWWbPT5kAbGCTewprJmOBp0WwKhNgSrxpM/TiE2BPovnQ9IEkLIpkLIAHsKagVrImVK8AO2mAp2lBGvAS1gzvjMaeXH6m5UITAEpF+fOgS5nrBtYc5F4BKaLTXircEBHCnwOvZk/yJch0SqwA3SUkP9vfP/sErP/OH+xpD3bAnNEsM5XiexfBDZjdgTOTAVabQlkgYGfTe5BoM+GQC7L/YFInY3GzfdFbiIwb1oXbLxUipsAXgpMZL9yExt7tabHVrYLHfStl7om7UccAR0yCh5XxY5kREREJCQfJpP4wGVKKaQAAAAASUVORK5CYII=" 
                  alt="Visa" 
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
