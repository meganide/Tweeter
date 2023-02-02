import { useState, useRef } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useMutation, useQueryClient } from 'react-query';

import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import ReplyToolTip from '../components/tooltips/ReplyTooltip';
import { useToggle } from '../hooks/useToggle';
import Button from '../components/common/Button';
import Avatar from '../components/common/Avatar';
import Card from '../components/common/Card';
import { makeRequest } from '../utils/axios';

interface ITweetProps {
  setTweet: React.Dispatch<React.SetStateAction<string>>;
  tweet: string;
}

interface IMutationPayload {
  tweet: string;
  image?: string;
}

function Tweet() {
  const [tweet, setTweet] = useState('');

  return (
    <Card headerTitle="Tweet something">
      <TweetBody setTweet={setTweet} tweet={tweet} />
      <TweetFooter tweet={tweet} setTweet={setTweet} />
    </Card>
  );
}

function TweetBody(props: ITweetProps) {
  const { setTweet, tweet } = props;

  return (
    <section className="mb-3 flex w-full gap-3">
      <Avatar />
      <textarea
        className="shadow-md] w-full resize-none rounded-md bg-transparent px-3 py-1 placeholder:text-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder:text-neutral-400"
        placeholder="What's happening?"
        name="tweet"
        rows={3}
        required
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      ></textarea>
    </section>
  );
}

function TweetFooter(props: ITweetProps) {
  const { tweet, setTweet } = props;

  const inputFileRef = useRef<any>(null);

  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();
  const [replyStatus, setReplyStatus] = useState('Everyone can reply');

  function chooseImage() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (tweet: IMutationPayload) => {
      return makeRequest.post('/api/posts', tweet);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('followersPosts');
      },
    }
  );

  function submitTweet() {
    mutation.mutate({ tweet });
    setTweet('');
  }

  return (
    <section className="flex justify-between lg:ml-[64px]">
      <section className="flex items-center gap-2">
        <ImageIcon
          className="cursor-pointer text-accent hover:text-sky-700"
          onClick={chooseImage}
        />
        <input
        className='hidden'
          type="file"
          name="profilePic"
          accept=".jpg, .jpeg, .png, "
          ref={inputFileRef}
          // onChange={handleFileInputChange}
        />
        <article className="relative">
          <PublicIcon
            className="cursor-pointer text-accent hover:text-sky-700"
            onClick={toggleShowTooltip}
          />
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
  );
}

export default Tweet;
