import { useToggle } from '../../hooks/useToggle';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IProps } from './Comment';

function CommentLikes(props: IProps) {
  const { commentData } = props;

  const { toggle: likeToggle, toggleShow: toggleShowLike } = useToggle();

  return (
    <section className="mt-2 flex place-items-center gap-1 text-sm text-gray-500 dark:text-neutral-500">
      <section className={`${likeToggle && 'text-red-500'} flex gap-1`}>
        <FavoriteBorderOutlinedIcon
          className="cursor-pointer"
          style={{ fontSize: '1.1rem' }}
          onClick={toggleShowLike}
        />
        <p>{likeToggle ? 'Liked' : 'Like'}</p>
      </section>
      <p className="ml-3">
        {likeToggle && commentData?.likes ? commentData?.likes + 1 : commentData?.likes}
        &nbsp;Likes
      </p>
    </section>
  );
}

export default CommentLikes;
