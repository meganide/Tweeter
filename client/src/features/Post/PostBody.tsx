import { IProps } from './Post';

function PostBody(props: IProps) {
  const { postData } = props;

  return (
    <section>
      <p className="my-5 text-sm dark:text-neutral-400 md:text-lg">{postData?.content}</p>
      <img
        className="h-full max-h-[600px] rounded-lg object-contain"
        crossOrigin="anonymous"
        src={postData?.image}
        loading="lazy"
        alt=""
      />
    </section>
  );
}

export default PostBody;
