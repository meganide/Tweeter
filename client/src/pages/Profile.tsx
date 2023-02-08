import { useEffect, useState } from 'react';

import ErrorPage from './ErrorPage';
import Posts from '../features/Posts/Posts';
import Spinner from '../components/common/Spinner';
import UserCard from '../features/Profile/User/User';
import UserOptions from '../features/Profile/User/UserOptions';
import { makeRequest } from '../utils/axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { userOptionDataProfile } from '../utils/data';

function Profile() {
  const { name } = useParams();

  const [selectedOption, setSelectedOption] = useState('Tweets');

  useEffect(() => {
    setSelectedOption('Tweets');
  }, [name]);

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
      <UserCard userProfile={userProfile} name={name}/>
      <section className="mx-auto max-w-7xl gap-x-6 py-4 px-3 pb-16 lg:grid lg:grid-cols-[1fr_2fr] lg:px-3 lg:pb-0 xl:px-0">
        <UserOptions selectedOption={selectedOption} setSelectedOption={setSelectedOption} userOptionData={userOptionDataProfile} />
        <section className="-mt-2 lg:-mt-7">
          <Posts fetchUrl={`/api/posts/${selectedOption}?name=${name}&`} queryName={['followersPosts', selectedOption + name]} />
        </section>
      </section>
    </section>
  );
}

export default Profile;
