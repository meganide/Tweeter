import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import { IProps } from './Post';
import { httpAddComment } from '../../hooks/requests';
import { useCustomMutation } from '../../hooks/useCustomMutation';
import { useState } from 'react';

function PostFooter(props: IProps) {
  const { postData } = props;

  const [reply, setReply] = useState('');
  const [error, setError] = useState('');

  const mutation = useCustomMutation(httpAddComment, 'followersPosts');

  async function submitReply() {
    try {
      setError('');
      if (reply.length < 1) {
        return setError("Reply field can't be empty!");
      }
      await mutation.mutate({ reply, postId: postData.id });
      setReply('');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      <section className="flex gap-2">
        <Avatar />
        <article className="flex w-full place-items-center gap-2 rounded-lg border bg-main-default p-2 text-sm dark:border-neutral-800 dark:bg-main-dark">
          <input
            className="mr-3 h-full w-full bg-transparent focus:outline-none dark:text-neutral-400 dark:placeholder:text-neutral-600"
            type="text"
            name="reply"
            id="reply"
            placeholder="Tweet your reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <Button
            type="button"
            text="Reply"
            styles="text-xs lg:text-base px-2"
            onClick={submitReply}
          />
        </article>
      </section>
      {error && <p className="mt-2 ml-[64px] text-sm text-red-600">{error}</p>}
    </section>
  );
}

export default PostFooter;
