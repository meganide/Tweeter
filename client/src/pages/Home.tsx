import Follow from '../features/Follow';
import Posts from '../features/Posts';
import Trends from '../features/Trends';
import Tweet from '../features/Tweet';

function Home() {
  return (
    <section className="mx-auto max-w-7xl gap-3 py-4 px-3 lg:grid lg:grid-cols-[2fr_1fr] lg:px-3 xl:px-0">
      <section>
        <Tweet />
        <Posts />
      </section>
      <section>
        <Trends />
        <Follow />
      </section>
    </section>
  );
}

export default Home;
