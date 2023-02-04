import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Avatar from '../../components/common/Avatar';
import { makeRequest } from '../../utils/axios';
import { IProps } from './Post';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Button from '../../components/common/Button';
import { useUpload } from '../../hooks/useUpload';

interface IReplyData {
  reply: string;
  postId: string;
}

function PostFooter(props: IProps) {
  const { postData } = props;

  const [reply, setReply] = useState('');
  const [error, setError] = useState('');

  // const { previewImage, inputFileRef, chooseImage, handleFileInputChange, submitUpload } = useUpload();

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (replyData: IReplyData) => {
      const comment = await makeRequest.post('/api/comments', replyData);
      return comment.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('followersPosts');
      },
    }
  );

  async function submitReply() {
    try {
      setError('');
      if (reply.length < 1) {
        return setError("Reply field can't be empty!");
      }
      // const imgUrl = await submitUpload();
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
          {/* <img className="w-16 object-cover" src={previewImage} alt="" /> */}
          {/* <ImageOutlinedIcon className="cursor-pointer text-gray-400 dark:text-neutral-500" onClick={chooseImage} />
          <input className="hidden" type="file" name="commentPic" accept=".jpg, .jpeg, .png" ref={inputFileRef} onChange={handleFileInputChange} /> */}
          {/* <input type="file" /> */}
          <Button type="button" text="Reply" styles="text-xs lg:text-base px-2" onClick={submitReply} />
        </article>
      </section>
      {error && <p className="mt-2 ml-[64px] text-sm text-red-600">{error}</p>}
    </section>
  );
}

export default PostFooter;
