import { v4 as uuidv4 } from 'uuid';

import { followData } from '../../utils/data';
import FollowBody from './FollowBody';
import FollowHeader from './FollowHeader';

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

export default FollowList;
