import { useContext } from 'react';
import MediaQuery from 'react-responsive';

import { AuthContext, IAuthContext, ICurrentUser } from '../../../contexts/authContext';
import FollowButton from '../../../components/common/FollowButton';
import EditIcon from '@mui/icons-material/Edit';

interface IProps {
  userProfile: ICurrentUser;
  bioProps: {
    setBio: React.Dispatch<React.SetStateAction<string>>;
    bio: string;
    changeBio: boolean;
    toggleChangeBio: () => void;
  };
}

function UserInfo(props: IProps) {
  const { userProfile, bioProps } = props;
  const {setBio, bio, changeBio, toggleChangeBio} = bioProps;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  function handleEditBio() {
    setBio(userProfile.profile.bio);
    toggleChangeBio();
  }

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
            <MediaQuery maxWidth={1024}>
              {currentUser?.name !== userProfile.name && (
                <section className="my-3">
                  <FollowButton userProfile={userProfile} />
                </section>
              )}
            </MediaQuery>
          </section>
        </section>
        <MediaQuery minWidth={1024}>
          {currentUser?.name !== userProfile.name && (
            <section className="my-3">
              <FollowButton userProfile={userProfile} />
            </section>
          )}
        </MediaQuery>
      </section>
      <section className="mt-2 flex place-items-end gap-6">
        {changeBio ? (
          <textarea
            className="h-[100px] w-full resize-none rounded-lg border bg-transparent p-2 dark:text-neutral-400"
            maxLength={300}
            autoFocus
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        ) : (
          <p className="mt-2 text-sm dark:text-neutral-400 lg:max-w-[60%] lg:text-base">{userProfile?.profile?.bio}</p>
        )}
        {currentUser?.name === userProfile.name && !changeBio && (
          <EditIcon
            className="cursor-pointer rounded-[50%] bg-neutral-600 p-[5px] text-white"
            style={{ fontSize: '1.7rem' }}
            onClick={handleEditBio}
          />
        )}
      </section>
    </section>
  );
}

export default UserInfo;
