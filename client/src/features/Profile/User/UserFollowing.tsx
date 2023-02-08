import Card from './../../../components/common/Card';
import { ICurrentUser } from '../../../contexts/authContext';
import OutsideClickHandler from 'react-outside-click-handler';

interface IProps {
  userProfile: ICurrentUser;
  openclose: {
    openFollowing: boolean;
    setOpenFollowing: () => void;
  }
}

function UserFollowing(props: IProps) {
  const { userProfile, openclose: {setOpenFollowing, openFollowing} } = props;
  return (
    <section className="absolute top-0 z-40 mr-3 sm:left-[15%] sm:w-[75%]">
      {openFollowing && (
        <OutsideClickHandler onOutsideClick={setOpenFollowing}>
          <Card headerTitle={userProfile.name + "'s Followers"} isClose={true} onClick={setOpenFollowing}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iusto ipsa, laboriosam vitae tempore accusantium distinctio quod
              harum! Pariatur veritatis ipsum labore, voluptatibus hic maxime voluptatem quaerat est corporis natus eveniet cumque sequi architecto
              eum, culpa, facilis provident tempore distinctio quidem. Vel magni expedita perspiciatis rerum aspernatur facere esse soluta.
            </p>
          </Card>
        </OutsideClickHandler>
      )}
    </section>
  );
}

export default UserFollowing;
