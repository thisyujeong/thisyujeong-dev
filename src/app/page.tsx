import { getAllPosts, getSeriesList } from '@/service/posts';
import PostList from 'components/Post/PostList';

const Home = async () => {
  const posts = await getAllPosts();
  const series = await getSeriesList();

  return (
    <section className="section">
      <div className="container">
        <PostList posts={posts} series={series} />
      </div>
    </section>
  );
};

export default Home;
