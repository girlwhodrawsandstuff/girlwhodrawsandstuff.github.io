import { Link } from "react-router-dom";

export const Footer = () => {
  // get current year
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-14 py-6 100dvw flex flex-col items-center justify-center">
      <section className="flex">
        <Link to='https://www.linkedin.com/in/varshasingh97/'><img className="w-12 cursor-pointer" src="src/shared/assets/linkedin.svg"></img></Link>
        <Link to='https://github.com/girlwhodrawsandstuff'><img className="w-12 cursor-pointer" src="src/shared/assets/github.svg"></img></Link>
        <Link to='https://www.instagram.com/madebyvorshe/'><img className="w-12 cursor-pointer" src="src/shared/assets/instagram.svg"></img></Link>
      </section>
      <small className="pt-3">©Varsha Singh {currentYear}</small>
    </footer>
  );
};
