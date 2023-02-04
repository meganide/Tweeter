import { v4 as uuidv4 } from 'uuid';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';

import Post from '../Post/Post';
import Spinner from '../../components/common/Spinner';
import { makeRequest } from '../../utils/axios';

function Posts() {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    'followersPosts',
    async ({ pageParam = 0 }) => {
      const res = await makeRequest.get(`/api/posts/followed?skip=${pageParam}`);
      return res.data;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length == 7) {
          // 7 is the amount of posts we fetch aka the limit/"take"
          return allPages.length * 7;
        }
      },
    }
  );

  console.log(data)

  return status === 'loading' ? (
    <Spinner />
  ) : status === 'error' ? (
    <p>Something went wrong!</p>
  ) : (
    <section>
      <InfiniteScroll
        hasMore={hasNextPage || false}
        next={fetchNextPage}
        dataLength={data?.pages.length || 7}
        loader={<Spinner />}
        endMessage={<EndMessage />}
      >
        {data?.pages.map((pages: any) => {
          return pages.map((post: any) => {
            return <Post key={uuidv4()} postData={post} />;
          });
        })}
      </InfiniteScroll>
    </section>
  );
}

export function EndMessage() {
  return (
    <div className="px-4 py-3">
      <div className="flex flex-col items-center justify-center">
        <p className="font-medium ">No more posts! Tweet something, follow people or go to explore!</p>
      </div>
    </div>
  );
}

export default Posts;
