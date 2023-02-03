import { IAuthor } from '../Post/Post';
import Avatar from '../../components/common/Avatar';
import CommentInfo from './CommentInfo';
import CommentLikes from './CommentLikes';

export interface IProps {
  commentData: ICommentData;
}

export interface ICommentData {
  comment: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  image?: string;
  likes?: number;
  user: IAuthor;
}

function Comment(props: IProps) {
  const { commentData } = props;

  return (
    <article className="mt-3 mb-5">
      <article className="flex gap-2">
        <Avatar imgSrc={commentData?.user.profilePic} />
        <section className="flex w-full flex-col">
          <CommentInfo commentData={commentData} />
          <CommentLikes commentData={commentData} />
        </section>
      </article>
    </article>
  );
}

export default Comment;
