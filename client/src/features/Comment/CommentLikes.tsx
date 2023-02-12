import { AuthContext, IAuthContext } from '../../contexts/authContext';

import { IProps } from './Comment';
import { httpLikeOrUnlikeComment } from '../../hooks/requests';
import { postOptionsData } from '../../utils/data';
import { useContext } from 'react';
import { useCustomMutation } from '../../hooks/useCustomMutation';

function CommentLikes(props: IProps) {
  const { commentData } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const clicked = commentData.likes.some(
    (like: any) => like.userId === currentUser?.id
  );

  const mutation = useCustomMutation(
    () => httpLikeOrUnlikeComment(clicked, commentData.id),
    'followersPosts'
  );

  async function toggleLike() {
    await mutation.mutate();
  }

  return (
    <section className="mt-2 flex place-items-center gap-1 text-sm text-gray-500 dark:text-neutral-500">
      <section
        className={`${
          clicked && 'text-red-500'
        } flex cursor-pointer place-items-center gap-1`}
        onClick={toggleLike}
      >
        {clicked ? postOptionsData[0].clickedIcon : postOptionsData[0].icon}
        <p>{clicked ? 'Liked' : 'Like'}</p>
      </section>
      <p className="ml-3">
        {commentData.likes.length}
        &nbsp;Likes
      </p>
    </section>
  );
}

export default CommentLikes;
