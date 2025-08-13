import { hobbiesList } from './constants';

const Hobbies = () => {
  return (
    <>
      <h1>Hobbies</h1>
      {hobbiesList.map((hobby, index) => (
        <article key={index}>
          <img src={hobby.image} alt={hobby.title} />
          <div>
            <h2>{hobby.title}</h2>
            <p>{hobby.desc}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default Hobbies;
