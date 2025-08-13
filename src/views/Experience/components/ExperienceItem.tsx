import ItemTitle from './ItemTitle';
import { experience } from '../constants';

interface ExperienceItemProps {
  job: (typeof experience)[0];
}

const ExperienceItem = ({ job }: ExperienceItemProps) => (
  <div className="py-3">
    <ItemTitle theme="teal">
      {job.title} at {job.company}
    </ItemTitle>
    <p>{job.duration}</p>
  </div>
);

export default ExperienceItem;
