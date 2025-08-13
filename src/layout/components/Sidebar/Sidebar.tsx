import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { appConfig } from '../../configs/config';
import { SidebarHeader } from './SidebarHeader';
import { SidebarFooter } from './SidebarFooter';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { categories } = appConfig.header;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <section
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <SidebarHeader onClose={onClose} />

        <nav className="p-6">
          <ul className="space-y-4">
            {categories.map(
              (category): ReactNode => (
                <li key={category}>
                  <Link
                    to={category.toLowerCase()}
                    className="block py-3 px-4 rounded-lg text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors duration-200 font-medium"
                    onClick={onClose}
                  >
                    {category}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <SidebarFooter />
      </section>
    </>
  );
};
