import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../common/components/Logo';

interface SidebarHeaderProps {
  onClose: () => void;
}

export const SidebarHeader = ({ onClose }: SidebarHeaderProps) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-200">
      <Logo onClick={handleLogoClick} />
      <button
        onClick={onClose}
        className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        aria-label="Close menu"
      >
        <img src="src/assets/close.svg" alt="close" className="w-5" />
      </button>
    </div>
  );
};
