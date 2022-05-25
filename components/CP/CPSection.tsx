import { CPSection } from 'lib/types';

const CPSection = ({ posts, title }: CPSection) => {
  console.log(posts);
  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

export default CPSection;
