import { AuthContext, IAuthContext } from './../../contexts/authContext';
import { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IProps as IPostProps } from './Post';
import PostDeleteButtons from './PostDeleteButtons';
import { convertToLocaleTimezone } from '../../utils/helpers';
import { makeRequest } from '../../utils/axios';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

interface IProps extends IPostProps {
  editPostProps: IEditPostProps;
}

interface IEditPostProps {
  editPost: boolean;
  setEditPost: React.Dispatch<React.SetStateAction<boolean>>;
  editPostQuery: string;
}

function PostHeader(props: IProps) {
  const {
    postData,
    editPostProps: { editPost, setEditPost, editPostQuery },
  } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

  const [loading, setLoading] = useState(false);
  const [deletePost, setDeletePost] = useState(false);

  function visitProfile() {
    const authorName = postData.author.name;
    navigate('/profile/' + authorName);
  }

  function handleCancel() {
    setEditPost(false);
    setDeletePost(false);
  }

  const queryClient = useQueryClient();

  const editPostMutation = useMutation(
    async (payload: any) => {
      try {
        const res = await makeRequest.put(`/api/posts`, payload);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('followersPosts');
      },
    }
  );

  async function handleSaveEdit() {
    setLoading(true);
    await editPostMutation.mutate({ postId: postData.id, content: editPostQuery, userId: currentUser?.id });
    setLoading(false);
    handleCancel();
  }

  return (
    <header className="flex w-full items-center gap-6">
      <section className="cursor-pointer" onClick={visitProfile}>
        <Avatar imgSrc={postData?.author.profilePic} />
      </section>
      <section className="mr-auto flex cursor-pointer flex-col" onClick={visitProfile}>
        <h2 className="text-neutral-900 dark:text-neutral-300">{postData?.author.name}</h2>
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          {postData.createdAt === postData.updatedAt
            ? 'Created at ' + convertToLocaleTimezone(postData?.createdAt)
            : 'Updated at ' + convertToLocaleTimezone(postData?.updatedAt)}
        </p>
      </section>
      {currentUser?.id === postData.authorId && editPost ? (
        <section className={`${isMobile && 'flex-col'} flex gap-2`}>
          <Button type="button" text="Save" styles="opacity-80" onClick={handleSaveEdit} loading={loading} />
          <Button type="button" text="Cancel" styles="opacity-60" onClick={handleCancel} loading={loading} />
        </section>
      ) : currentUser?.id === postData.authorId && !editPost && !deletePost ? (
        <section className="flex gap-2">
          <EditIcon className="cursor-pointer" onClick={() => setEditPost(true)} />
          <DeleteIcon className="mr-2 cursor-pointer" onClick={() => setDeletePost(true)} />
        </section>
      ) : (
        currentUser?.id === postData.authorId && <PostDeleteButtons deleteProps={{ loading, setLoading, postData, handleCancel }} />
      )}
    </header>
  );
}

export default PostHeader;
