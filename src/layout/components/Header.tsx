import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appConfig } from '../configs/config';
import { Link } from 'react-router-dom';
import { Logo } from '../../common/components/Logo';
import hamburger from '../../assets/hamburger.svg';
import realHamburger from '../../assets/real-hamburger.svg';

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header = ({ onMenuToggle }: HeaderProps) => {
  const { categories } = appConfig.header;
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleHamburgerHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <header className="w-dvw flex items-center justify-between lg:px-14 lg:py-6 py-4 px-6">
      <Logo onClick={handleLogoClick} />
      <div className="flex items-center justify-evenly hidden md:block">
        {categories.map((category): ReactNode => {
          return (
            <Link
              key={category}
              className="cursor-pointer px-5 text-stone-600 hover:text-stone-800"
              to={category.toLowerCase()}
            >
              {category}
            </Link>
          );
        })}
      </div>
      <button
        className="cursor-pointer block md:hidden p-2 rounded-md hover:bg-stone-100 transition-colors duration-200"
        onClick={onMenuToggle}
        onMouseEnter={() => handleHamburgerHover()}
        onMouseLeave={() => handleHamburgerHover()}
        aria-label="Open menu"
      >
        <img
          src={isHovered ? realHamburger : hamburger}
          alt="hamburger menu"
          className="w-6 h-6 transition-all duration-200"
        />
      </button>
    </header>
  );
};
