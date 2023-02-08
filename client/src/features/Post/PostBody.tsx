import { IProps as IPostProps } from './Post';

interface IProps extends IPostProps {
  editPostProps: IEditPostProps;
}

interface IEditPostProps {
  editPostQuery: string;
  setEditPostQuery: React.Dispatch<React.SetStateAction<string>>;
  editPost: boolean;
}

function PostBody(props: IProps) {
  const {
    editPostProps: { setEditPostQuery, editPost, editPostQuery },
    postData,
  } = props;

  return (
    <section>
      {editPost ? (
        <textarea
          className="my-5 w-full resize-none rounded-md border bg-transparent p-1 text-sm outline-none dark:border-gray-700 dark:text-neutral-400 md:text-lg"
          value={editPostQuery}
          onChange={(e) => setEditPostQuery(e.target.value)}
        />
      ) : (
        <p className="my-5 text-sm dark:text-neutral-400 md:text-lg">{postData?.content}</p>
      )}
      <img className="h-full max-h-[600px] rounded-lg object-contain" crossOrigin="anonymous" src={postData?.image} loading="lazy" alt="" />
    </section>
  );
}

export default PostBody;
