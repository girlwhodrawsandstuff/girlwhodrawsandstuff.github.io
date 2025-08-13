import { certifications, education, experience } from './constants';

const Experience = () => {
  return (
    <>
      <h2 className="w-full text-center text-3xl text-stone-700">Experience</h2>
      <article>
        {experience.map((job, index) => (
          <div key={index} className="py-3">
            <h3 className="text-xl font-medium text-teal-900">
              {job.title} at {job.company}
            </h3>
            <p>{job.duration}</p>
          </div>
        ))}
      </article>

      <h2 className="w-full text-center text-3xl text-stone-700">Education</h2>
      <article className="py-2">
        <h3 className="text-xl font-medium text-sky-900">{education.school}</h3>
        <p>{education.degree}</p>
      </article>

      <h2 className="w-full text-center text-3xl text-stone-700">Certifications</h2>
      <article>
        {certifications.map((cert, index) => (
          <div key={index} className="py-2">
            <h3 className="text-xl font-medium text-indigo-900">{cert.name}</h3>
            <p>{cert.provider}</p>
            <p className="text-sm">{cert.duration}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default Experience;
