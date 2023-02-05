import { useNavigate } from 'react-router-dom';

import { convertToLocaleTimezone } from '../../utils/helpers';
import Avatar from '../../components/common/Avatar';
import { IProps } from './Post';

function PostHeader(props: IProps) {
  const { postData } = props;

  const navigate = useNavigate();

  function visitProfile() {
    const authorName = postData.author.name;
    navigate('/profile/' + authorName);
  }

  return (
    <header className="flex w-max cursor-pointer items-center gap-6" onClick={visitProfile}>
      <Avatar imgSrc={postData?.author.profilePic} />
      <section className="flex flex-col">
        <h2 className="text-neutral-900 dark:text-neutral-300">{postData?.author.name}</h2>
        <p className="text-xs text-gray-500 dark:text-neutral-500">{convertToLocaleTimezone(postData?.createdAt)}</p>
      </section>
    </header>
  );
}

export default PostHeader;
