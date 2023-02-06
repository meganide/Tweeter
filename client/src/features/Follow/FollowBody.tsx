import { IProps } from './FollowHeader';

function FollowBody(props: IProps) {
  const { followerData } = props;

  return (
    <section>
      <p className="my-5 dark:text-neutral-300">{followerData.profile?.bio}</p>
      <img className="max-h-36 w-full rounded-lg object-cover" src={followerData.profile?.backgroundImg} alt="background" />
      <hr className="my-7 border-zinc-300 dark:border-border-dark" />
    </section>
  );
}

export default FollowBody;
