import { CPSection } from 'lib/types';
import Link from 'next/link';
import { CPHeader, CPList } from './CPSection.style';

const CPSection = ({ posts, title }: CPSection) => {
  return (
    <section>
      <CPHeader>
        {title} <sup>{posts.length}</sup>
      </CPHeader>
      <CPList className={title}>
        {posts.map((post) => (
          <li key={post.number} className={post.level}>
            <Link href={`/${post.url_path}`} passHref>
              <a>{post.number}</a>
            </Link>
          </li>
        ))}
      </CPList>
    </section>
  );
};

export default CPSection;
