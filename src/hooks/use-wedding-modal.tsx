
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

export const useWeddingModal = create<WeddingModalStore>((set) => ({
  hasSeenModal: localStorage.getItem('hasSeenWeddingModal') === 'true',
  weddingData: null,
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
