import { certifications, education, experience } from './constants';
import { Section, ItemList, ExperienceItem, EducationItem, CertificationItem } from './components';

const Experience = () => {
  return (
    <>
      <Section title="Experience">
        <ItemList
          items={experience}
          renderItem={(job, index) => <ExperienceItem key={index} job={job} />}
        />
      </Section>

      <Section title="Education">
        <EducationItem edu={education} />
      </Section>

      <Section title="Certifications">
        <ItemList
          items={certifications}
          renderItem={(cert, index) => <CertificationItem key={index} cert={cert} />}
        />
      </Section>
    </>
  );
};

export default Experience;
