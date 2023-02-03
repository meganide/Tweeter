import Avatar from '../../components/common/Avatar';
import { convertToLocaleTimezone } from '../../utils/date';
import { IProps } from './Post';

function PostHeader(props: IProps) {
  const { postData } = props;

  return (
    <header className="flex items-center gap-6">
      <Avatar imgSrc={postData?.author.profilePic} />
      <section className="flex flex-col">
        <h2 className="text-neutral-900 dark:text-neutral-300">{postData?.author.name}</h2>
        <p className="text-xs text-gray-500 dark:text-neutral-500">
          {convertToLocaleTimezone(postData?.createdAt)}
        </p>
      </section>
    </header>
  );
}

export default PostHeader;
