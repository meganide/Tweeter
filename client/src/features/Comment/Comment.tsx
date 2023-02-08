import Avatar from '../../components/common/Avatar';
import CommentInfo from './CommentInfo';
import CommentLikes from './CommentLikes';
import { IAuthor } from '../Post/Post';
import { useNavigate } from 'react-router-dom';

export interface IProps {
  commentData: ICommentData;
}

export interface ICommentData {
  id: string;
  authorId: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
  likes: { userId: string }[] | [];
  user: IAuthor;
}

function Comment(props: IProps) {
  const { commentData } = props;

  const navigate = useNavigate();

  function visitProfile() {
    const authorName = commentData.user.name;
    navigate('/profile/' + authorName);
  }

  return (
    <article className="mt-3 mb-5">
      <article className="flex gap-2">
        <section className="cursor-pointer" onClick={visitProfile}>
          <Avatar imgSrc={commentData?.user.profilePic} />
        </section>
        <section className="flex w-full flex-col">
          <CommentInfo commentData={commentData} />
          <CommentLikes commentData={commentData} />
        </section>
      </article>
    </article>
  );
}

export default Comment;
