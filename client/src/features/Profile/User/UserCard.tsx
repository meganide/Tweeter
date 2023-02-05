import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import Avatar from '../../../components/common/Avatar';
import Card from '../../../components/common/Card';
import { AuthContext, IAuthContext, ICurrentUser } from '../../../contexts/authContext';
import UserInfo from './UserInfo';

interface IProps {
  userProfile: ICurrentUser;
}

function UserCard(props: IProps) {
  const { userProfile } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  let imgHeight = 'w-[100px] h-[100px]';

  if (isBigScreen) {
    imgHeight = 'w-[152px] h-[152px]';
  }

  return (
    <section>
      <img
        className="max-h-[300px] w-full object-cover object-center"
        src={userProfile?.profile?.backgroundImg ? userProfile?.profile?.backgroundImg : 'https://www.bsr.org/images/heroes/bsr-travel-hero..jpg'}
        alt="background"
      />
      <section className='-translate-y-8" m-auto max-w-7xl px-3 pb-4 lg:px-3 xl:px-0'>
        <Card>
          <section className="flex flex-col place-items-center gap-5 p-4 pb-0 lg:flex-row lg:p-10 lg:pb-0">
            <section className="shrink-0 -translate-y-[50%] place-items-start rounded-lg border-2 border-white shadow-lg dark:border-secondary-dark dark:shadow-sm dark:shadow-gray-500">
              <Avatar height={imgHeight} imgSrc={userProfile.profilePic} />
            </section>
            <UserInfo userProfile={userProfile} />
          </section>
        </Card>
      </section>
    </section>
  );
}

export default UserCard;
