import { v4 as uuidv4 } from 'uuid';

import { postsData } from '../../utils/data';
import Post from './Post';

function Posts() {
  return (
    <section>
      {postsData.map((post) => {
        return <Post key={uuidv4()} postData={post} />;
      })}
    </section>
  );
}

export default Posts;
