import { IPostData } from './Post';

interface IProps {
  postData: IPostData;
}

function PostInfo(props: IProps) {
  const { postData } = props;

  return (
    <section className="mt-5 flex justify-end gap-4 text-xs text-gray-400 dark:text-neutral-500 sm:text-base">
      <p className="cursor-pointer">{postData.likes.length} Likes</p>
      <p className="cursor-pointer">{postData?.comments?.length} Comments</p>
      <p className="cursor-pointer">{postData.retweets.length} Retweets</p>
      <p className="cursor-pointer">{postData.saves.length} Saved</p>
    </section>
  );
}

export default PostInfo;
