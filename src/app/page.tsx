import { getAllPosts, getSeriesTags } from '@/service/posts';
import PostList from 'components/Post/PostList';

const HomePage = async () => {
  const posts = await getAllPosts();
  const series = await getSeriesTags();

  return (
    <section className="section">
      <div className="container">
        <PostList posts={posts} series={series} />
      </div>
    </section>
  );
};

export default HomePage;
