import { ReactNode } from "react";
import { appConfig } from "../configs/config";

export const Header = () => {
  const { categories } = appConfig.header;

  return (
    <header>
      <a>LOGO</a>
      {categories.map((category): ReactNode => {
        return <a key={category}>{category}</a>
      })}
    </header>
  );
};
