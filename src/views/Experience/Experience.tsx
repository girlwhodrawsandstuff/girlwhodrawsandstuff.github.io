import { certifications, education, experience } from './constants';

const Experience = () => {
  return (
    <>
      <h2>Experience</h2>
      <article className="">
        {experience.map((job, index) => (
          <div key={index}>
            <h3>
              {job.title} at {job.company}
            </h3>
            <p>{job.duration}</p>
          </div>
        ))}
      </article>

      <h2>Education</h2>
      <article className="">
        <h3>{education.school}</h3>
        <p>{education.degree}</p>
      </article>

      <h2>Certifications</h2>
      <article className="">
        {certifications.map((cert, index) => (
          <div key={index}>
            <h3>{cert.name}</h3>
          </div>
        ))}
      </article>
    </>
  );
};

export default Experience;
