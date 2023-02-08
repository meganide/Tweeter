import Card from '../../components/common/Card';
import Comments from '../Comments/Comments';
import { ICommentData } from '../Comment/Comment';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostInfo from './PostInfo';
import PostOptions from './PostOptions';
import PostRetweet from './PostRetweet';

export interface IProps {
  postData: IPostData;
}

export interface IPostData {
  author: IAuthor;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  image?: string;
  id: string;
  likes: { userId: string }[];
  retweets: { userId: string }[];
  saves: { userId: string }[];
  comments: ICommentData[];
  retweetedAt?: string;
  retweetedBy?: { name: string };
}

export interface IAuthor {
  name: string;
  profilePic: string;
}

function Post(props: IProps) {
  const { postData } = props;

  return (
    <section className="my-7">
      {postData.retweetedAt && <PostRetweet postData={postData} />}
      <Card>
        <PostHeader postData={postData} />
        <PostBody postData={postData} />
        <PostInfo postData={postData} />
        <PostOptions postData={postData} />
        <PostFooter postData={postData} />
        {<Comments postData={postData} />}
      </Card>
    </section>
  );
}

export default Post;
