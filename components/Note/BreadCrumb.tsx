import Link from 'next/link';
import { CrumbContainer } from './BreadCrumb.style';

const BreadCrumb = ({ path }: { path: string }) => {
  const paths = path.split('/');
  paths.shift();
  console.log('path: ', paths);
  return (
    <>
      <CrumbContainer>
        {paths.map((p: string, i: number) => (
          <span key={i}>{p}</span>
        ))}
      </CrumbContainer>
    </>
  );
};

export default BreadCrumb;
