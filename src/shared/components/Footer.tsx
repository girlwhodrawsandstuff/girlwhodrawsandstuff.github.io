import { Link } from "react-router-dom";
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import instagramIcon from '../../assets/instagram.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-14 py-6 100dvw flex flex-col items-center justify-center">
      <section className="flex">
        <Link to='https://www.linkedin.com/in/varshas97/'><img className="w-12 cursor-pointer" src={linkedinIcon}></img></Link>
        <Link to='https://github.com/girlwhodrawsandstuff'><img className="w-12 cursor-pointer" src={githubIcon}></img></Link>
        <Link to='https://www.instagram.com/madebyvorshe/'><img className="w-12 cursor-pointer" src={instagramIcon}></img></Link>
      </section>
      <small className="pt-3">©Varsha Singh {currentYear}</small>
    </footer>
  );
};
