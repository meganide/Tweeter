import { AuthContext, IAuthContext } from '../../contexts/authContext';
import { useMutation, useQueryClient } from 'react-query';

import { IProps } from './Comment';
import { makeRequest } from '../../utils/axios';
import { postOptionsData } from '../../utils/data';
import { useContext } from 'react';

function CommentLikes(props: IProps) {
  const { commentData } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const clicked = commentData.likes.some((like: any) => like.userId === currentUser?.id);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      let res;
      if (clicked) {
        res = await makeRequest.delete(`/api/likes/comment?commentId=${commentData.id}`);
      } else {
        res = await makeRequest.post(`/api/likes/comment?commentId=${commentData.id}`);
      }
      return res.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('followersPosts');
      },
    }
  );

  async function toggleLike() {
    await mutation.mutate();
  }

  return (
    <section className="mt-2 flex place-items-center gap-1 text-sm text-gray-500 dark:text-neutral-500">
      <section className={`${clicked && 'text-red-500'} flex cursor-pointer place-items-center gap-1`} onClick={toggleLike}>
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
