import code from '../../../assets/code.svg';

export const SidebarFooter = () => {
  return (
    <div className="absolute bottom-6 left-6 right-6">
      <div className="flex items-center gap-2 text-stone-500 text-sm">
        <img src={code} alt="code icon" className="w-4" />
        <span>Thanks for visiting!</span>
      </div>
    </div>
  );
};
