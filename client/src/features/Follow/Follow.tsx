import Card from '../../components/common/Card/Card';
import FollowList from './FollowList';

function Follow() {
  return (
    <>
      <article className="col-start-2 col-end-3 mb-3">
        <Card headerTitle="Most recent users">
          <FollowList apiUrl='/api/users/find/recent'/>
        </Card>
      </article>
      <article className="col-start-2 col-end-3 mb-3">
        <Card headerTitle="Who to follow">
          <FollowList />
        </Card>
      </article>
    </>
  );
}

export default Follow;
