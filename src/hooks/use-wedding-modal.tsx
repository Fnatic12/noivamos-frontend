
import { create } from 'zustand';
import { WeddingData } from '@/components/WeddingDetailsModal';

type WeddingModalStore = {
  hasSeenModal: boolean;
  weddingData: WeddingData | null;
  isOpen: boolean;
  markAsSeen: () => void;
  openModal: () => void;
  closeModal: () => void;
  setWeddingData: (data: WeddingData) => void;
};

const getSavedWeddingData = (): WeddingData | null => {
  const savedData = localStorage.getItem('weddingData');
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.error('Error parsing wedding data:', error);
      return null;
    }
  }
  return null;
};

export const useWeddingModal = create<WeddingModalStore>((set) => ({
  hasSeenModal: localStorage.getItem('hasSeenWeddingModal') === 'true',
  weddingData: getSavedWeddingData(),
  isOpen: false,
  markAsSeen: () => {
    localStorage.setItem('hasSeenWeddingModal', 'true');
    set({ hasSeenModal: true });
  },
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setWeddingData: (data) => {
    set({ weddingData: data });
    localStorage.setItem('weddingData', JSON.stringify(data));
  }
}));
