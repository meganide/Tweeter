import Card from '../../components/common/Card';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostInfo from './PostInfo';
import PostOptions from './PostOptions';
import PostFooter from './PostFooter';
import Comments from '../Comments/Comments';
import { ICommentData } from '../Comment/Comment';

export interface IProps {
  postData: IPostData;
}

interface IPostData {
  author: IAuthor;
  createdAt: string;
  updatedAt: string;
  content: string;
  image?: string;
  id: string;
  comments: ICommentData[];
}

export interface IAuthor {
  name: string;
  profilePic: string;
}

function Post(props: IProps) {
  const { postData } = props;

  return (
    <section className="my-7">
      <Card>
        <PostHeader postData={postData} />
        <PostBody postData={postData} />
        <PostInfo postData={postData} />
        <PostOptions />
        <PostFooter postData={postData} />
        {<Comments postData={postData} />}
      </Card>
    </section>
  );
}

export default Post;
