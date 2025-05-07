
import React, { useRef, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { Camera, Image } from 'lucide-react';

interface ProfileSectionProps {
  daysRemaining: number;
  formattedDate: string;
  userName: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  daysRemaining,
  formattedDate,
  userName,
}) => {
  const [profileImage, setProfileImage] = useState<string>("/lovable-uploads/50e63417-c45a-40a3-99d0-dd09cbb69262.png");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle camera capture
  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      // Here we'd normally show a camera UI and let the user take a picture
      // For now, just show a toast that we requested camera access successfully
      toast({
        title: "Câmera ativada",
        description: "Permissão para usar a câmera concedida. Esta funcionalidade será implementada completamente em breve.",
      });
      
      // Clean up
      stream.getTracks().forEach(track => track.stop());
    } catch (err) {
      toast({
        title: "Erro ao acessar a câmera",
        description: "Não foi possível acessar sua câmera. Verifique as permissões do navegador.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-shrink-0 relative group">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
        <Avatar className="w-32 h-32">
          <AvatarImage src={profileImage} alt="Foto do casal" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      
      {/* Photo upload options overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex flex-col items-center space-y-2">
          <button 
            onClick={() => fileInputRef.current?.click()} 
            className="text-white hover:text-noivamos-gold p-1"
            title="Escolher da galeria"
          >
            <Image size={20} />
          </button>
          <button 
            onClick={handleCameraCapture} 
            className="text-white hover:text-noivamos-gold p-1"
            title="Tirar foto"
          >
            <Camera size={20} />
          </button>
        </div>
      </div>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept="image/*"
      />
    </div>
  );
};

export default ProfileSection;
