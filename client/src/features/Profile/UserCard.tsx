import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { AuthContext, IAuthContext } from '../../contexts/authContext';

function UserCard() {
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
        src={
          currentUser?.profile?.backgroundImg
            ? currentUser?.profile?.backgroundImg
            : 'https://www.bsr.org/images/heroes/bsr-travel-hero..jpg'
        }
        alt="background"
      />
      <section className='-translate-y-8" m-auto max-w-7xl px-3 pb-4 lg:px-3 xl:px-0'>
        <Card>
          <section className="flex flex-col place-items-center gap-5 p-4 pb-0 lg:flex-row lg:p-10 lg:pb-0">
            <section className="shrink-0 -translate-y-[50%] place-items-start rounded-lg border-2 border-white shadow-lg dark:border-secondary-dark dark:shadow-sm dark:shadow-gray-500">
              <Avatar height={imgHeight} />
            </section>
            <UserInfo />
          </section>
        </Card>
      </section>
    </section>
  );
}

function UserInfo() {
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <section className="flex w-full -translate-y-10 flex-col">
      <section className="w-full lg:flex lg:justify-between">
        <section className="flex flex-col place-items-center text-center lg:flex-row lg:gap-7">
          <h2 className="text-2xl dark:text-white">{currentUser?.name}</h2>
          <section className="flex place-items-center justify-center gap-5 text-sm">
            <h3 className="text-xs dark:text-white lg:text-sm">
              2580 <span className="text-neutral-500">Following</span>
            </h3>
            <h3 className="text-xs dark:text-white lg:text-sm">
              10020 <span className="text-neutral-500">Followers</span>
            </h3>
            {!isBigScreen && (
              <section className="my-3">
                <Button type="button" text="Follow" />
              </section>
            )}
          </section>
        </section>
        {isBigScreen && (
          <section className="my-3">
            <Button type="button" text="Follow" />
          </section>
        )}
      </section>
      <p className="mt-2 text-sm dark:text-neutral-400 lg:max-w-[60%] lg:text-base">
        {currentUser?.profile?.bio}
      </p>
    </section>
  );
}

export default UserCard;
