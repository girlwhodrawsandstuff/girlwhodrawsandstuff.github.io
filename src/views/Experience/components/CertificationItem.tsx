import ItemTitle from './ItemTitle';
import { certifications } from '../constants';

interface CertificationItemProps {
  cert: (typeof certifications)[0];
}

const CertificationItem = ({ cert }: CertificationItemProps) => (
  <div className="py-2">
    <ItemTitle theme="indigo">{cert.name}</ItemTitle>
    <p>{cert.provider}</p>
    <p className="text-sm">{cert.duration}</p>
  </div>
);

export default CertificationItem;
