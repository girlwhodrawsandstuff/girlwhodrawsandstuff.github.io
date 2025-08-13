interface LogoProps {
  onClick?: () => void;
}

export const Logo = ({ onClick }: LogoProps) => {
  return (
    <button
      className="cursor-pointer flex items-center gap-1 hover:opacity-80 transition-opacity duration-200"
      onClick={onClick}
    >
      <img src="src/assets/code.svg" alt="code icon" className="w-6" />
      <p className="font-mono text-stone-700 font-medium">
        girl<span className="text-stone-500">who</span>draws
        <span className="text-stone-500">and</span>stuff
      </p>
    </button>
  );
};
