import { v4 as uuidv4 } from 'uuid';
import { useQuery } from 'react-query';

import { postsData } from '../../utils/data';
import Post from './Post';
import { makeRequest } from '../../utils/axios';
import Spinner from '../../components/common/Spinner';

function Posts() {
  const { isLoading, isError, data, error } = useQuery('posts', async () => {
    const res = await makeRequest.get('/api/posts');
    console.log(res.data);
    return res.data;
  });

  return (
    <section>
      {error ? (
        'Something went wrong!'
      ) : isLoading ? (
        <Spinner />
      ) : (
        data.map((post: any) => {
          return <Post key={uuidv4()} postData={post} />;
        })
      )}
    </section>
  );
}

export default Posts;
