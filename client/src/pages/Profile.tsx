import Posts from '../features/Posts/Posts';
import UserCard from '../features/Profile/UserCard';
import UserOptions from '../features/Profile/UserOptions';

function Profile() {
  return (
    <section>
      <UserCard />
      <section className="mx-auto max-w-7xl gap-x-6 py-4 px-3 pb-16 lg:grid lg:grid-cols-[1fr_2fr] lg:px-3 lg:pb-0 xl:px-0">
        <UserOptions />
        <section className="-mt-2 lg:-mt-7">
          <Posts />
        </section>
      </section>
    </section>
  );
}

export default Profile;
