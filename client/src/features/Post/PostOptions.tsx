import { v4 as uuidv4 } from 'uuid';

import { postOptionsData } from '../../utils/data';
import { IPostData } from './Post';
import PostOption from './PostOption';

interface IProps {
  postData: IPostData;
}

function PostOptions(props: IProps) {
  const { postData } = props;

  return (
    <section className="my-3 flex border-b border-t dark:border-border-dark">
      {postOptionsData.map((option) => {
        return <PostOption key={uuidv4()} option={option} postData={postData} />;
      })}
    </section>
  );
}

export default PostOptions;
