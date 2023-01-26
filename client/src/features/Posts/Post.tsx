import MediaQuery from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';

import Avatar from '../../components/common/Avatar';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { postCommentsData, postOptionsData } from '../../utils/data';
import Card from '../../components/common/Card';
import { useToggle } from '../../hooks/useToggle';

interface IProps {
  postData?: IPostData;
  commentData?: ICommentData;
}

interface IPostData {
  username: string;
  date: string;
  text: string;
  image?: string;
}

interface ICommentData extends IPostData {
  likes: number | 0;
}

function Post(props: IProps) {
  const { postData } = props;

  return (
    <section className="my-7">
      <Card>
        <PostHeader postData={postData} />
        <PostBody postData={postData} />
        <PostInfo />
        <PostOptions />
        <PostFooter />
        {postCommentsData && <PostComments />}
      </Card>
    </section>
  );
}

function PostHeader(props: IProps) {
  const { postData } = props;

  return (
    <header className="flex items-center gap-6">
      <Avatar />
      <section className="flex flex-col">
        <h2 className="text-neutral-900 dark:text-neutral-300">{postData?.username}</h2>
        <p className="text-xs text-gray-500 dark:text-neutral-500">{postData?.date}</p>
      </section>
    </header>
  );
}

function PostBody(props: IProps) {
  const { postData } = props;

  return (
    <section>
      <p className="my-5 text-sm dark:text-neutral-400 md:text-lg">{postData?.text}</p>
      <img className="w-full rounded-lg" src={postData?.image} alt="" />
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
          <article
            key={uuidv4()}
            className="my-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-3 hover:bg-gray-200 dark:hover:bg-neutral-800"
          >
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

function PostComment(props: IProps) {
  const { commentData } = props;
  const { toggle: likeToggle, toggleShow: toggleShowLike } = useToggle();

  return (
    <article className="mt-3 mb-5">
      <article className="flex gap-2">
        <Avatar />
        <section className="flex w-full flex-col">
          <section className="flex w-full flex-col gap-2 rounded-md bg-main-default p-2 dark:bg-main-dark">
            <section className="flex place-items-center gap-3">
              <h2 className="text-neutral-900 dark:text-neutral-300">{commentData?.username}</h2>
              <p className="text-xs text-gray-500 dark:text-neutral-500">{commentData?.date}</p>
            </section>
            <section>
              <p className="dark:text-neutral-400 text-sm sm:text-base">{commentData?.text}</p>
              {commentData?.image && <img className="mt-2" src={commentData.image} alt="" />}
            </section>
          </section>
          <section className="mt-2 flex place-items-center gap-1 text-sm text-gray-500 dark:text-neutral-500">
            <section className={`${likeToggle && 'text-red-500'} flex gap-1`}>
              <FavoriteBorderOutlinedIcon
                className="cursor-pointer"
                style={{ fontSize: '1.1rem' }}
                onClick={toggleShowLike}
              />
              <p>{likeToggle ? 'Liked' : 'Like'}</p>
            </section>
            <p className="ml-3">
              {likeToggle && commentData ? commentData?.likes + 1 : commentData?.likes}
              &nbsp;Likes
            </p>
          </section>
        </section>
      </article>
    </article>
  );
}

function PostComments() {
  return (
    <section>
      <hr className="mt-5 mb-5 border-zinc-300 dark:border-border-dark" />
      {postCommentsData.map((comment) => {
        return <PostComment key={uuidv4()} commentData={comment} />;
      })}
    </section>
  );
}

export default Post;
