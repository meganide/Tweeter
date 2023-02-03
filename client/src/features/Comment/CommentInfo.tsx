import { convertToLocaleTimezone } from '../../utils/helpers';
import { IProps } from './Comment';

function CommentInfo(props: IProps) {
  const { commentData } = props;

  return (
    <section className="flex w-full flex-col gap-2 rounded-md bg-main-default p-2 dark:bg-main-dark">
      <section className="flex place-items-center gap-3">
        <h2 className="text-neutral-900 dark:text-neutral-300">{commentData?.user.name}</h2>
        <p className="text-xs text-gray-500 dark:text-neutral-500">{commentData?.createdAt && convertToLocaleTimezone(commentData?.createdAt)}</p>
      </section>
      <section>
        <p className="text-sm dark:text-neutral-400 sm:text-base">{commentData?.comment}</p>
        {commentData?.image && <img className="mt-2" src={commentData.image} alt="" loading="lazy" />}
      </section>
    </section>
  );
}

export default CommentInfo;
