import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import { ICurrentUser } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

export interface IProps {
  followerData: ICurrentUser;
}

function FollowHeader(props: IProps) {
  const { followerData } = props;

  const navigate = useNavigate();

  function navigateProfile() {
    navigate('/profile/' + followerData.name);
  }

  return (
    <header className="flex place-items-center gap-5">
      <Avatar imgSrc={followerData.profilePic}/>
      <section className="mr-auto flex flex-col justify-between">
        <h3 className="dark:text-neutral-300">{followerData.name}</h3>
        <h4 className="mt-1 text-xs font-normal dark:text-neutral-500">{followerData.followers.length} followers</h4>
      </section>
      <Button text="Visit" type="button" onClick={navigateProfile} />
    </header>
  );
}

export default FollowHeader;
