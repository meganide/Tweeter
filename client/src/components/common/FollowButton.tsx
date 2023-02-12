import { AuthContext, IAuthContext, ICurrentUser } from '../../contexts/authContext';

import Button from './Button';
import { httpFollowOrUnfollow } from '../../hooks/requests';
import { useContext } from 'react';
import { useCustomMutation } from '../../hooks/useCustomMutation';

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

  const mutation = useCustomMutation(() => httpFollowOrUnfollow(isFollowing, userProfile.id), 'profile' + userProfile.name);

  async function handleFollow() {
    await mutation.mutate();
  }

  return <Button type="button" text={isFollowing ? 'Unfollow' : 'Follow'} onClick={handleFollow} />;
}

export default FollowButton;
