import { IPostData } from '../Post/Post';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../Post/Post';
import Spinner from '../../components/common/Spinner';
import { makeRequest } from '../../utils/axios';
import { useInfiniteQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  fetchUrl: string;
  queryName: string[] | string;
}

function Posts(props: IProps) {
  const { fetchUrl, queryName } = props;

  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
    queryName,
    async ({ pageParam = 0 }) => {
      const res = await makeRequest.get(fetchUrl + `skip=${pageParam}`);
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

  return isLoading ? (
    <Spinner />
  ) : isError ? (
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
          return pages.map((post: IPostData) => {
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
        <p>No more posts! Tweet something, follow people or go to explore!</p>
      </div>
    </div>
  );
}

export default Posts;
