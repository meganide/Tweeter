import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import Spinner from '../../components/common/Spinner';
import { ICurrentUser } from '../../contexts/authContext';
import { makeRequest } from '../../utils/axios';
import FollowBody from './FollowBody';
import FollowHeader from './FollowHeader';

interface IProps {
  apiUrl?: string;
}
function FollowList(props: IProps) {
  const { apiUrl } = props;

  const { isLoading, data: followSuggestions } = useQuery<ICurrentUser[]>(apiUrl ? 'recentusers' : 'followSuggestions', async () => {
    const users = await makeRequest.get(apiUrl || '/api/users/find/random?amount=3');
    return users.data;
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      {followSuggestions &&
        followSuggestions.map((follower) => {
          return (
            <section key={uuidv4()}>
              <FollowHeader followerData={follower} />
              <FollowBody followerData={follower} />
            </section>
          );
        })}
    </section>
  );
}

export default FollowList;
