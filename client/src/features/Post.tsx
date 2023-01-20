import MediaQuery from 'react-responsive';

import Avatar from '../components/common/Avatar';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { postOptionsData } from '../utils/data';

interface IProps {
  postData: IPostData;
}

interface IPostData {
  username: string;
  date: string;
  text: string;
  image: string;
}

function Post(props: IProps) {
  const { postData } = props;

  return (
    <article className="my-7 rounded-lg bg-white p-5 shadow-md dark:bg-secondary-dark">
      <PostHeader postData={postData} />
      <PostBody postData={postData} />
      <PostInfo />
      <PostOptions />
      <PostFooter />
    </article>
  );
}

function PostHeader(props: IProps) {
  const { postData } = props;

  return (
    <header className="flex items-center gap-6">
      <Avatar />
      <section className="flex flex-col">
        <h2 className="text-neutral-900 dark:text-neutral-300">{postData.username}</h2>
        <p className="text-xs text-gray-500 dark:text-neutral-500">{postData.date}</p>
      </section>
    </header>
  );
}

function PostBody(props: IProps) {
  const { postData } = props;

  return (
    <section>
      <p className="my-5 text-sm dark:text-neutral-400 md:text-lg">{postData.text}</p>
      <img className="w-full rounded-lg" src={postData.image} alt="" />
    </section>
  );
}

function PostInfo() {
  return (
    <section className="mt-5 flex justify-end gap-4 text-xs text-gray-400 dark:text-neutral-500 sm:text-base">
      <p className="cursor-pointer">449 Comments</p>
      <p className="cursor-pointer">4 Retweets</p>
      <p className="cursor-pointer">7 Saved</p>
    </section>
  );
}

function PostOptions() {
  return (
    <section className="my-3 flex border-b border-t dark:border-border-dark">
      {postOptionsData.map((option) => {
        return (
          <article className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-3 hover:bg-gray-200 dark:hover:bg-neutral-800">
            {option.icon}
            <MediaQuery minWidth={640}>
              <p className={`text-[${option.color}]`}>{option.text}</p>
            </MediaQuery>
          </article>
        );
      })}
    </section>
  );
}

function PostFooter() {
  return (
    <section className="flex gap-2">
      <Avatar />
      <article className="flex w-full rounded-lg border bg-main-default p-2 text-sm dark:border-neutral-800 dark:bg-main-dark">
        <input
          className="mr-3 h-full w-full bg-transparent focus:outline-none dark:text-neutral-400 dark:placeholder:text-neutral-600"
          type="text"
          name="reply"
          id="reply"
          placeholder="Tweet your reply"
        />
        <ImageOutlinedIcon className="cursor-pointer text-gray-400 dark:text-neutral-500" />
      </article>
    </section>
  );
}

export default Post;
