import { v4 as uuidv4 } from 'uuid';

import { postOptionsData } from '../../utils/data';
import PostOption from './PostOption';

interface IProps {
  postId: string;
}

function PostOptions(props: IProps) {
  const { postId } = props;

  return (
    <section className="my-3 flex border-b border-t dark:border-border-dark">
      {postOptionsData.map((option) => {
        return <PostOption key={uuidv4()} option={option} postId={postId} />;
      })}
    </section>
  );
}

export default PostOptions;
