import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQueryClient } from 'react-query';

import Avatar from '../../components/common/Avatar';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { postCommentsData, postOptionsData } from '../../utils/data';
import Card from '../../components/common/Card';
import { useToggle } from '../../hooks/useToggle';
import { convertToLocaleTimezone } from '../../utils/date';
import Button from '../../components/common/Button';
import { makeRequest } from '../../utils/axios';

interface IProps {
  postData: IPostData;
}

interface ICommentProps {
  commentData?: ICommentData;
  postData?: IPostData;
}

interface IPostData {
  author: IAuthor;
  createdAt: string;
  updatedAt: string;
  content: string;
  image?: string;
  id: string;
  comments: ICommentData[];
}

interface IAuthor {
  name: string;
  profilePic: string;
}

interface ICommentData {
  comment: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  image?: string;
  likes?: number;
  user: IAuthor;
}

function Post(props: IProps) {
  const { postData } = props;

  return (
    <section className="my-7">
      <Card>
        <PostHeader postData={postData} />
        <PostBody postData={postData} />
        <PostInfo postData={postData} />
        <PostOptions />
        <PostFooter postData={postData} />
        {postData.comments && <PostComments postData={postData} />}
      </Card>
    </section>
  );
}

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

function PostBody(props: IProps) {
  const { postData } = props;

  return (
    <section>
      <p className="my-5 text-sm dark:text-neutral-400 md:text-lg">{postData?.content}</p>
      <img
        className="h-full max-h-[600px] rounded-lg object-contain"
        crossOrigin="anonymous"
        src={postData?.image}
        loading="lazy"
        alt=""
      />
    </section>
  );
}

function PostInfo(props: IProps) {
  const { postData } = props;

  return (
    <section className="mt-5 flex justify-end gap-4 text-xs text-gray-400 dark:text-neutral-500 sm:text-base">
      <p className="cursor-pointer">{postData.comments.length} Comments</p>
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

function PostFooter(props: IProps) {
  interface IReplyData {
    reply: string;
    postId: string;
  }

  const { postData } = props;

  const [reply, setReply] = useState('');

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (replyData: IReplyData) => {
      try {
        const comment = await makeRequest.post('/api/comments', replyData);
        return comment.data;
      } catch (err) {
        console.log(err);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('followersPosts');
      },
    }
  );

  async function submitReply() {
    try {
      await mutation.mutate({ reply, postId: postData.id });

      setReply('');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="flex gap-2">
      <Avatar />
      <article className="flex w-full place-items-center gap-2 rounded-lg border bg-main-default p-2 text-sm dark:border-neutral-800 dark:bg-main-dark">
        <input
          className="mr-3 h-full w-full bg-transparent focus:outline-none dark:text-neutral-400 dark:placeholder:text-neutral-600"
          type="text"
          name="reply"
          id="reply"
          placeholder="Tweet your reply"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <ImageOutlinedIcon className="cursor-pointer text-gray-400 dark:text-neutral-500" />
        <Button
          type="button"
          text="Reply"
          styles="text-xs lg:text-base px-2"
          onClick={submitReply}
        />
      </article>
    </section>
  );
}

function PostComment(props: ICommentProps) {
  const { commentData } = props;
  const { toggle: likeToggle, toggleShow: toggleShowLike } = useToggle();

  return (
    <article className="mt-3 mb-5">
      <article className="flex gap-2">
        <Avatar imgSrc={commentData?.user.profilePic} />
        <section className="flex w-full flex-col">
          <section className="flex w-full flex-col gap-2 rounded-md bg-main-default p-2 dark:bg-main-dark">
            <section className="flex place-items-center gap-3">
              <h2 className="text-neutral-900 dark:text-neutral-300">{commentData?.user.name}</h2>
              <p className="text-xs text-gray-500 dark:text-neutral-500">
                {commentData?.createdAt && convertToLocaleTimezone(commentData?.createdAt)}
              </p>
            </section>
            <section>
              <p className="text-sm dark:text-neutral-400 sm:text-base">{commentData?.comment}</p>
              {commentData?.image && (
                <img className="mt-2" src={commentData.image} alt="" loading="lazy" />
              )}
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
              {likeToggle && commentData?.likes ? commentData?.likes + 1 : commentData?.likes}
              &nbsp;Likes
            </p>
          </section>
        </section>
      </article>
    </article>
  );
}

function PostComments(props: ICommentProps) {
  const { postData } = props;

  return (
    <section>
      <hr className="mt-5 mb-5 border-zinc-300 dark:border-border-dark" />
      {postData?.comments &&
        postData.comments.map((comment) => {
          return <PostComment key={uuidv4()} commentData={comment} />;
        })}
    </section>
  );
}

export default Post;
