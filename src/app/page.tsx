import { getAllPosts } from '@/service/posts';
import Footer from 'components/Footer';
import PostCard from 'components/Post/PostCard';

const Home = async () => {
  const posts = await getAllPosts();

  return (
    <section className="section">
      <div className="container">
        {posts.map((post, idx) => (
          <PostCard post={post} key={idx} slug={post.slug} />
        ))}
      </div>
    </section>
  );
};

export default Home;
