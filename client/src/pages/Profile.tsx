import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Spinner from '../components/common/Spinner';
import Posts from '../features/Posts/Posts';
import UserCard from '../features/Profile/User/UserCard';
import UserOptions from '../features/Profile/User/UserOptions';
import { makeRequest } from '../utils/axios';
import ErrorPage from './ErrorPage';

function Profile() {
  const { name } = useParams();

  const {
    isLoading,
    isError,
    data: userProfile,
  } = useQuery('profile' + name, async () => {
    const profile = await makeRequest.get('/api/users/find/' + name);
    return profile.data;
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <section>
      <UserCard userProfile={userProfile} />
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
