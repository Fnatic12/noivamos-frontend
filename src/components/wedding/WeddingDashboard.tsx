
import React, { useState } from 'react';
import { WeddingData } from '@/components/WeddingDetailsModal';
import BudgetSection from '@/components/wedding/BudgetSection';
import TasksSection from '@/components/wedding/TasksSection';
import GuestsSection from '@/components/wedding/GuestsSection';
import CategoryModal from '@/components/wedding/CategoryModal';
import GuestModal from '@/components/wedding/GuestModal';
import TaskModal from '@/components/wedding/TaskModal';
import WithdrawModal from '@/components/wedding/WithdrawModal';
import ProfileSection from '@/components/wedding/ProfileSection';
import WeddingInfo from '@/components/wedding/WeddingInfo';
import GiftValueCard from '@/components/wedding/GiftValueCard';
import { processWeddingDate } from '@/utils/dateUtils';

interface WeddingDashboardProps {
  weddingData: WeddingData;
}

const WeddingDashboard: React.FC<WeddingDashboardProps> = ({ weddingData }) => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  // Process wedding date
  const { daysRemaining, formattedDate } = processWeddingDate(weddingData.weddingDate);

  // Mock name for now - would come from authentication
  const userName = "Annie";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-start gap-8">
          {/* Profile Section */}
          <ProfileSection 
            daysRemaining={daysRemaining}
            formattedDate={formattedDate}
            userName={userName}
          />
          
          {/* Wedding Info */}
          <WeddingInfo
            daysRemaining={daysRemaining}
            formattedDate={formattedDate}
            userName={userName}
          />

          {/* Gift Value Card */}
          <GiftValueCard onWithdraw={() => setIsWithdrawModalOpen(true)} />
        </div>
      </div>

      {/* Budget Section */}
      <BudgetSection 
        budget={weddingData.budget} 
        onAddCategory={() => setIsCategoryModalOpen(true)}
      />

      {/* Tasks Section */}
      <TasksSection onAddTask={() => setIsTaskModalOpen(true)} />

      {/* Guests Section */}
      <GuestsSection onAddGuest={() => setIsGuestModalOpen(true)} />

      {/* Modals */}
      <CategoryModal 
        isOpen={isCategoryModalOpen} 
        onClose={() => setIsCategoryModalOpen(false)} 
      />
      <GuestModal 
        isOpen={isGuestModalOpen} 
        onClose={() => setIsGuestModalOpen(false)} 
      />
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
      />
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        availableAmount={200.00}
      />
    </div>
  );
};

export default WeddingDashboard;
