interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <>
    <h2 className="w-full text-center text-3xl text-stone-700">{title}</h2>
    <article className="py-2">{children}</article>
  </>
);

export default Section;
