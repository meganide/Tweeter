import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import { AuthContext, IAuthContext, ICurrentUser } from '../../../contexts/authContext';
import FollowButton from '../../../components/common/FollowButton';

interface IProps {
  userProfile: ICurrentUser;
}

function UserInfo(props: IProps) {
  const { userProfile } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <section className="flex w-full -translate-y-10 flex-col">
      <section className="w-full lg:flex lg:justify-between">
        <section className="flex flex-col place-items-center text-center lg:flex-row lg:gap-7">
          <h2 className="text-2xl dark:text-white">{userProfile?.name}</h2>
          <section className="flex place-items-center justify-center gap-5 text-sm">
            <h3 className="text-xs dark:text-white lg:text-sm">
              {userProfile?.following?.length} <span className="text-neutral-500">Following</span>
            </h3>
            <h3 className="text-xs dark:text-white lg:text-sm">
              {userProfile.followers.length} <span className="text-neutral-500">Followers</span>
            </h3>
            {!isBigScreen && currentUser?.name !== userProfile.name && (
              <section className="my-3">
                <FollowButton userProfile={userProfile} />
              </section>
            )}
          </section>
        </section>
        {isBigScreen && currentUser?.name !== userProfile.name && (
          <section className="my-3">
            <FollowButton userProfile={userProfile} />
          </section>
        )}
      </section>
      <p className="mt-2 text-sm dark:text-neutral-400 lg:max-w-[60%] lg:text-base">{userProfile?.profile?.bio}</p>
    </section>
  );
}

export default UserInfo;
