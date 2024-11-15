import { ReactNode } from "react";
import { appConfig } from "../configs/config";
import { Link } from "react-router-dom";

export const Header = () => {
  const { categories } = appConfig.header;

  return (
    <header className="w-dvw flex items-center justify-between px-14 py-6">
      <a href="/" className="cursor-pointer">LOGO</a>
      <div className="flex items-center justify-evenly">
      {categories.map((category): ReactNode => {
        return <Link key={category} className="cursor-pointer px-5" to={category.toLowerCase()}>{category}</Link>
      })}
      </div>
    </header>
  );
};
