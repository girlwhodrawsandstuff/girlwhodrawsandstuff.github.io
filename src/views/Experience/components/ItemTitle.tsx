interface ItemTitleProps {
  children: React.ReactNode;
  theme?: 'teal' | 'sky' | 'indigo';
}

const ItemTitle = ({ children, theme = 'teal' }: ItemTitleProps) => {
  const colorClasses = {
    teal: 'text-teal-900',
    sky: 'text-sky-900',
    indigo: 'text-indigo-900',
  };

  return <h3 className={`text-xl font-medium ${colorClasses[theme]}`}>{children}</h3>;
};

export default ItemTitle;
