import { useMutation, useQueryClient } from 'react-query';

import Button from '../../components/common/Button';
import ImageIcon from '@mui/icons-material/Image';
import { makeRequest } from '../../utils/axios';
import { useState } from 'react';

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
        </section>
        <Button type="button" text="Tweet" onClick={submitTweet} />
      </section>
      {error && <p className="mt-2 ml-[64px] text-sm text-red-600">{error}</p>}
    </section>
  );
}

export default TweetFooter;
