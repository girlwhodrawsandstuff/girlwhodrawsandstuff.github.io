import { ReactNode } from 'react';
import { appConfig } from '../configs/config';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { categories } = appConfig.header;

  return (
    <header className="w-dvw flex items-center justify-between lg:px-14 lg:py-6 py-4 px-6">
      <a href="/" className="cursor-pointer flex items-center gap-1">
        <img src="src/assets/code.svg" alt="code icon" className="w-6" />
        <p className="font-mono text-stone-700 font-medium">
          girl<span className="text-stone-500">who</span>draws
          <span className="text-stone-500">and</span>stuff
        </p>
      </a>
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
      <a className="cursor-pointer block md:hidden">
        <div
          className="w-8 h-8 bg-[url('src/assets/hamburger.svg')] hover:bg-[url('src/assets/real-hamburger.svg')] bg-no-repeat bg-center bg-contain transition-all duration-200"
          role="img"
          aria-label="hamburger menu"
        />
      </a>
    </header>
  );
};
