import { v4 as uuidv4 } from 'uuid';

import Avatar from '../components/common/Avatar';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { followData } from '../utils/data';

interface IProps {
  followerData: IFollowerData;
}

interface IFollowerData {
  username: string;
  followers: number;
  bio: string;
  backgroundImg: string;
}

function Follow() {
  return (
    <article className="col-start-2 col-end-3 mb-3">
      <Card headerTitle="Who to follow">
        <FollowList />
      </Card>
    </article>
  );
}

function FollowList() {
  return (
    <section>
      {followData.map((follower) => {
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

function FollowHeader(props: IProps) {
  const { followerData } = props;

  return (
    <header className="flex place-items-center gap-5">
      <Avatar />
      <section className="mr-auto flex flex-col justify-between">
        <h3 className="dark:text-neutral-300">{followerData.username}</h3>
        <h4 className="mt-1 text-xs font-normal dark:text-neutral-500">
          {followerData.followers} followers
        </h4>
      </section>
      <Button type="button" text="Follow" />
    </header>
  );
}

function FollowBody(props: IProps) {
  const { followerData } = props;

  return (
    <section>
      <p className="my-5 dark:text-neutral-300">{followerData.bio}</p>
      <img
        className="max-h-36 w-full rounded-lg object-cover"
        src={followerData.backgroundImg}
        alt="background"
      />
      <hr className="my-7 border-zinc-300 dark:border-border-dark" />
    </section>
  );
}

export default Follow;
