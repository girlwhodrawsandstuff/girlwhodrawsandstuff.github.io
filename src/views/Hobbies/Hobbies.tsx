import { hobbiesList } from './constants';

const Hobbies = () => {
  return (
    <>
      <h1 className="text-3xl text-stone-700 text-center mb-4 md:mb-6">
        Here's how I spend my free time:
      </h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {hobbiesList.map((hobby, index) => (
          <article key={index}>
            <img src={hobby.image} alt={hobby.title} className="rounded-xl" />
            <div className="py-2 md:py-4 flex flex-col gap-2">
              <h2 className="font-semibold text-stone-700">{hobby.title}</h2>
              <p className="text-stone-600">{hobby.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Hobbies;
