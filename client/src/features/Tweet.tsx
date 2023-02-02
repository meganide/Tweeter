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
  previewImage?: string;
  setPreviewImage?: React.Dispatch<React.SetStateAction<string>>;
}

interface IMutationPayload {
  tweet: string;
  image?: string | ArrayBuffer | null;
}

function Tweet() {
  const [tweet, setTweet] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  return (
    <Card headerTitle="Tweet something">
      <TweetBody setTweet={setTweet} tweet={tweet} previewImage={previewImage} />
      <TweetFooter tweet={tweet} setTweet={setTweet} setPreviewImage={setPreviewImage} />
    </Card>
  );
}

function TweetBody(props: ITweetProps) {
  const { setTweet, tweet, previewImage } = props;

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
      <img className="w-16 object-cover" src={previewImage} alt="" />
    </section>
  );
}

function TweetFooter(props: ITweetProps) {
  const { tweet, setTweet, setPreviewImage } = props;

  const inputFileRef = useRef<HTMLInputElement>(null);

  const [uploadFile, setUploadFile] = useState<string | ArrayBuffer | null>('');
  const { toggle: showTooltip, toggleShow: toggleShowTooltip } = useToggle();
  const [replyStatus, setReplyStatus] = useState('Everyone can reply');

  function chooseImage() {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  }

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const imgURL = URL.createObjectURL(e.target?.files[0]);
      setPreviewImage && setPreviewImage(imgURL);

      const reader = new FileReader();
      reader.readAsDataURL(e.target?.files[0]);
      reader.onloadend = () => {
        setUploadFile(reader.result);
      };
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

  async function submitTweet() {
    try {
      let imgUrl = '';
      if (uploadFile) {
        const imageUploadResponse = await makeRequest.post('/api/cloudinary/upload', {
          data: uploadFile,
        });
        imgUrl = imageUploadResponse.data.url;
      }
      mutation.mutate({ tweet, image: imgUrl });
      setTweet('');
      setUploadFile('');
      setPreviewImage && setPreviewImage('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex justify-between lg:ml-[64px]">
      <section className="flex items-center gap-2">
        <ImageIcon
          className="cursor-pointer text-accent hover:text-sky-700"
          onClick={chooseImage}
        />
        <input
          className="hidden"
          type="file"
          name="profilePic"
          accept=".jpg, .jpeg, .png"
          ref={inputFileRef}
          onChange={handleFileInputChange}
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
