import { AuthContext, IAuthContext } from './../../contexts/authContext';
import { useMutation, useQueryClient } from 'react-query';

import Button from './../../components/common/Button';
import { IPostData } from './Post';
import { makeRequest } from '../../utils/axios';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  deleteProps: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    handleCancel: () => void;
    postData: IPostData;
  };
}

function PostDeleteButtons(props: IProps) {
  const {
    deleteProps: { loading, setLoading, handleCancel, postData },
  } = props;

  const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(
    async () => {
      try {
        const res = await makeRequest.delete(`/api/posts?postId=${postData.id}&userId=${currentUser?.id}`);
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

  async function handleDeletePost() {
    setLoading(true);
    await deletePostMutation.mutate();
    setLoading(false);
    handleCancel();
  }
  return (
    <section>
      <section className={`${isMobile && 'flex-col'} flex gap-2`}>
        <Button type="button" text="Delete" styles="opacity-40 bg-red-500 hover:bg-red-700" onClick={handleDeletePost} loading={loading} />
        <Button type="button" text="Cancel" styles="opacity-90" onClick={handleCancel} loading={loading} />
      </section>
    </section>
  );
}

export default PostDeleteButtons;
