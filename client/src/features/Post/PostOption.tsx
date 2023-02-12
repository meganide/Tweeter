import { AuthContext, IAuthContext } from '../../contexts/authContext';

import { IPostData } from './Post';
import MediaQuery from 'react-responsive';
import { httpAddOrDeleteOption } from '../../hooks/requests';
import { useContext } from 'react';
import { useCustomMutation } from '../../hooks/useCustomMutation';

interface IProps {
  option: IOption;
  postData: IPostData;
}

export interface IOption {
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
  const clicked = postData[endpoint].some(
    (optionStat: any) => optionStat.userId === currentUser?.id
  );

  const mutation = useCustomMutation(
    () =>
      httpAddOrDeleteOption({
        clicked,
        optionEndpoint: option.endpoint,
        postDataId: postData.id,
      }),
    'followersPosts'
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
        <p className={`text-[${clicked ? option.color : 'gray-400'}]`}>
          {clicked ? option.clickedText : option.text}
        </p>
      </MediaQuery>
    </article>
  );
}

export default PostOption;
