import { IProps } from "./Post";

function PostInfo(props: IProps) {
  const { postData } = props;

  return (
    <section className="mt-5 flex justify-end gap-4 text-xs text-gray-400 dark:text-neutral-500 sm:text-base">
      <p className="cursor-pointer">{postData?.comments?.length} Comments</p>
      <p className="cursor-pointer">4 Retweets</p>
      <p className="cursor-pointer">7 Saved</p>
    </section>
  );
}

export default PostInfo;