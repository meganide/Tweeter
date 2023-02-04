import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import { AuthContext, IAuthContext } from '../../../contexts/authContext';
import Button from '../../../components/common/Button';

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
      <p className="mt-2 text-sm dark:text-neutral-400 lg:max-w-[60%] lg:text-base">{currentUser?.profile?.bio}</p>
    </section>
  );
}

export default UserInfo;
