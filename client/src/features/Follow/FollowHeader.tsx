import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';

export interface IProps {
  followerData: IFollowerData;
}

interface IFollowerData {
  username: string;
  followers: number;
  bio: string;
  backgroundImg: string;
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

export default FollowHeader;
