import ItemTitle from './ItemTitle';
import { education } from '../constants';

interface EducationItemProps {
  edu: typeof education;
}

const EducationItem = ({ edu }: EducationItemProps) => (
  <div className="py-2">
    <ItemTitle theme="sky">{edu.school}</ItemTitle>
    <p>{edu.degree}</p>
  </div>
);

export default EducationItem;
