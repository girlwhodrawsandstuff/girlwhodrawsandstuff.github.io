const Experience = () => {
  const experience = [
    {
      company: 'Razorpay',
      title: 'Frontend Engineer',
      duration: 'October 2022 - Present',
    },
    {
      company: 'Razorpay',
      title: 'Frontend Engineer Intern',
      duration: 'February 2022 - September 2022',
    },
    {
      company: 'Bikenbiker',
      title: 'Software Engineer Intern',
      duration: 'December 2021 - February 2022',
    },
    {
      company: 'Redgreen Engineering',
      title: 'Software Developer Intern',
      duration: 'March 2021 - July 2021',
    },
  ];

  const education = {
    school: 'Indira Gandhi National Open University',
    degree: 'Bachelor of Computer Applications',
  };

  const certifications = [
    {
      name: 'CS50',
      provider: 'Harvard University',
      duration: 'June 2020 - December 2020',
    },
  ];

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
