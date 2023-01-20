import { postsData } from '../utils/data';
import Post from './Post';

function Posts() {
  return (
    <section>
      {postsData.map((post) => {
        return <Post postData={post} />;
      })}
    </section>
  );
}

export default Posts;
