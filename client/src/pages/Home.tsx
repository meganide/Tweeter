import CreatedBy from '../components/common/CreatedBy';
import Follow from '../features/Follow/Follow';
import MediaQuery from 'react-responsive';
import Posts from '../features/Posts/Posts';
import Tweet from '../features/Tweet/Tweet';

function Home() {
  return (
    <section className="mx-auto max-w-7xl gap-3 py-4 px-3 pb-16 lg:grid lg:grid-cols-[2fr_1fr] lg:px-3 lg:pb-0 xl:px-0">
      <section>
        <Tweet />
        <Posts fetchUrl={`/api/posts/followed?`} queryName="followersPosts" />
      </section>
      <MediaQuery minWidth={1024}>
        <section className="flex flex-col gap-5">
          <Follow />
        </section>
      </MediaQuery>
      <CreatedBy />
    </section>
  );
}

export default Home;
