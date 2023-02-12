import { AuthContext, IAuthContext } from './../../contexts/authContext';

import Button from './../../components/common/Button';
import { IPostData } from './Post';
import { httpDeletePost } from '../../hooks/requests';
import { useContext } from 'react';
import { useCustomMutation } from '../../hooks/useCustomMutation';
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

  const deletePostMutation = useCustomMutation(
    () => httpDeletePost(postData.id, currentUser?.id),
    'followersPosts'
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
        <Button
          type="button"
          text="Delete"
          styles="opacity-40 bg-red-500 hover:bg-red-700"
          onClick={handleDeletePost}
          loading={loading}
        />
        <Button
          type="button"
          text="Cancel"
          styles="opacity-90"
          onClick={handleCancel}
          loading={loading}
        />
      </section>
    </section>
  );
}

export default PostDeleteButtons;
