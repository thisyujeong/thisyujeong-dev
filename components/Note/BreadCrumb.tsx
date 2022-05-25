import Link from 'next/link';
import { BreadCrumbContainer } from './BreadCrumb.style';

const BreadCrumb = ({ path }: { path: string }) => {
  const paths = path.split('/');
  paths.shift();
  return (
    <>
      <BreadCrumbContainer>
        {paths.map((p: string, i: number) => (
          <span key={i}>{p}</span>
        ))}
      </BreadCrumbContainer>
    </>
  );
};

export default BreadCrumb;
