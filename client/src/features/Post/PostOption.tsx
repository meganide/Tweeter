import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import MediaQuery from 'react-responsive';

import { AuthContext, IAuthContext } from '../../contexts/authContext';
import { makeRequest } from '../../utils/axios';
import { IPostData } from './Post';

interface IProps {
  option: IOption;
  postData: IPostData;
}

interface IOption {
  icon: JSX.Element;
  clickedIcon: JSX.Element;
  text: string;
  clickedText: string;
  color: string;
  endpoint: 'likes' | 'saves' | 'retweets';
}

function PostOption(props: IProps) {
  const { option, postData } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const endpoint = option.endpoint;
  const clicked = postData[endpoint].some((optionStat: any) => optionStat.userId === currentUser?.id);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      let res;
      if (clicked) {
        res = await makeRequest.delete(`/api/${option.endpoint}?postId=${postData.id}`);
      } else {
        res = await makeRequest.post(`/api/${option.endpoint}?postId=${postData.id}`);
      }
      return res.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('followersPosts');
      },
    }
  );

  async function handleOnClick() {
    await mutation.mutate();
  }

  return (
    <article
      onClick={handleOnClick}
      className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-3 hover:bg-gray-200 dark:hover:bg-neutral-800"
    >
      {clicked ? option.clickedIcon : option.icon}
      <MediaQuery minWidth={640}>
        <p className={`text-[${clicked ? option.color : 'gray-400'}]`}>{clicked ? option.clickedText : option.text}</p>
      </MediaQuery>
    </article>
  );
}

export default PostOption;
