import { AuthContext, IAuthContext, ICurrentUser } from '../../contexts/authContext';
import { useMutation, useQueryClient } from 'react-query';

import Button from './Button';
import { makeRequest } from '../../utils/axios';
import { useContext } from 'react';

interface IProps {
  userProfile: ICurrentUser;
}

interface IFollower {
  followerId: string;
}

function FollowButton(props: IProps) {
  const { userProfile } = props;
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const isFollowing = userProfile.followers.some((follower: IFollower) => follower.followerId === currentUser?.id);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      try {
        let res;
        if (isFollowing) {
          res = await makeRequest.delete(`/api/followers?followedUserId=${userProfile.id}`);
        } else {
          res = await makeRequest.post(`/api/followers?followedUserId=${userProfile.id}`);
        }
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('profile' + userProfile.name);
      },
    }
  );

  async function handleFollow() {
    await mutation.mutate();
  }

  return <Button type="button" text={isFollowing ? 'Unfollow' : 'Follow'} onClick={handleFollow} />;
}

export default FollowButton;
