import Follow from '../components/Follow';
import Post from '../components/Post';
import Trends from '../components/Trends';
import Tweet from '../components/Tweet';

function Home() {
  return (
    <section className="mx-auto max-w-7xl gap-3 py-4 px-3 lg:grid lg:grid-cols-[2fr_1fr] lg:px-0">
      <section>
        <Tweet />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
      <section>
        <Trends />
        <Follow />
      </section>
    </section>
  );
}

export default Home;
