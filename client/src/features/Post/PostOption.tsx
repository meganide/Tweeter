import { useState, useEffect, useContext } from 'react';
import { useQuery } from 'react-query';
import MediaQuery from 'react-responsive';
import { AuthContext, IAuthContext } from '../../contexts/authContext';


interface IProps {
  option: IOption;
  postId: string;
}

interface IOption {
  icon: JSX.Element;
  clickedIcon: JSX.Element;
  text: string;
  clickedText: string;
  color: string;
  endpoint: string;
}

function PostOption(props: IProps) {
  const { option, postId } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;


  // const clicked = data.some((obj: any) => obj.userId === currentUser?.id);

  //TODO: Get this from DB
  const [clicked, setClicked] = useState(false);

  return (
    <article
      // onClick={() => setClicked(!clicked)}
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
