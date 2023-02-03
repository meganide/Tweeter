import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import OutsideClickHandler from 'react-outside-click-handler';

import { useToggle } from '../../hooks/useToggle';
import { makeRequest } from '../../utils/axios';
import ReplyToolTip from '../../components/tooltips/ReplyTooltip/ReplyTooltip';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import Button from '../../components/common/Button';

interface IProps {
  upload: IUpload;
  setTweet: React.Dispatch<React.SetStateAction<string>>;
  tweet: string;
  previewImage?: string;
  setPreviewImage?: React.Dispatch<React.SetStateAction<string>>;
}

interface IUpload {
  inputFileRef: React.RefObject<HTMLInputElement>;
  chooseImage: () => void;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitUpload: () => Promise<any>;
}

interface IMutationPayload {
  tweet: string;
  image?: string | ArrayBuffer | null;
}

function TweetFooter(props: IProps) {
  const { tweet, setTweet, upload } = props;
  const { inputFileRef, chooseImage, submitUpload, handleFileInputChange } = upload;

  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();
  const [replyStatus, setReplyStatus] = useState('Everyone can reply');
  const [error, setError] = useState('');

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (tweet: IMutationPayload) => {
      return await makeRequest.post('/api/posts', tweet);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('followersPosts');
      },
    }
  );

  async function submitTweet() {
    try {
      setError('');
      if (tweet.length < 1) {
        return setError("Text field can't be empty!");
      }
      const imgUrl = await submitUpload();
      mutation.mutate({ tweet, image: imgUrl });
      setTweet('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <section className="flex justify-between lg:ml-[64px]">
        <section className="flex items-center gap-2">
          <ImageIcon className="cursor-pointer text-accent hover:text-sky-700" onClick={chooseImage} />
          <input className="hidden" type="file" name="profilePic" accept=".jpg, .jpeg, .png" ref={inputFileRef} onChange={handleFileInputChange} />
          <article className="relative">
            <PublicIcon className="cursor-pointer text-accent hover:text-sky-700" onClick={toggleShowTooltip} />
            {showTooltip && (
              <OutsideClickHandler onOutsideClick={toggleShowTooltip}>
                <ReplyToolTip setReplyStatus={setReplyStatus} />
              </OutsideClickHandler>
            )}
          </article>
          <span className="text-xs text-accent">{replyStatus}</span>
        </section>
        <Button type="button" text="Tweet" onClick={submitTweet} />
      </section>
      {error && <p className='text-red-600 text-sm mt-2 ml-[64px]'>{error}</p>}
    </section>
  );
}

export default TweetFooter;
