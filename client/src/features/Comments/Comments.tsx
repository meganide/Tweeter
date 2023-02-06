import { v4 as uuidv4 } from 'uuid';

import Comment from '../Comment/Comment';
import { IProps } from '../Post/Post';

function Comments(props: IProps) {
  const { postData } = props;

  return (
    <section className="max-h-[600px] overflow-auto">
      <hr className="mt-5 mb-5 border-zinc-300 dark:border-border-dark" />
      {postData?.comments &&
        postData.comments.map((comment) => {
          return <Comment key={uuidv4()} commentData={comment} />;
        })}
    </section>
  );
}

export default Comments;
