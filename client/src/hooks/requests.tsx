import { makeRequest } from '../utils/axios';

interface IMutationPayload {
  tweet: string;
  image?: string | ArrayBuffer | null;
}

interface IReplyData {
  reply: string;
  postId: string;
}

interface IEditPostData {
  postId: string;
  content: string;
  userId: string | undefined;
}

async function httpAddPost(tweet: IMutationPayload) {
  return await makeRequest.post('/api/posts', tweet);
}

async function httpEditPost(editPostData: IEditPostData) {
  try {
    const res = await makeRequest.put(`/api/posts`, editPostData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function httpDeletePost(
  postDataId: string,
  currentUserId: string | undefined
) {
  try {
    const res = await makeRequest.delete(
      `/api/posts?postId=${postDataId}&userId=${currentUserId}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function httpFollowOrUnfollow(
  isFollowing: boolean,
  userProfileId: string
) {
  try {
    let res;
    if (isFollowing) {
      res = await makeRequest.delete(
        `/api/followers?followedUserId=${userProfileId}`
      );
    } else {
      res = await makeRequest.post(
        `/api/followers?followedUserId=${userProfileId}`
      );
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function httpLikeOrUnlikeComment(
  clicked: boolean,
  commentDataId: string
) {
  try {
    let res;
    if (clicked) {
      res = await makeRequest.delete(
        `/api/likes/comment?commentId=${commentDataId}`
      );
    } else {
      res = await makeRequest.post(
        `/api/likes/comment?commentId=${commentDataId}`
      );
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function httpAddComment(replyData: IReplyData) {
  try {
    const comment = await makeRequest.post('/api/comments', replyData);
    return comment.data;
  } catch (error) {
    console.log(error);
  }
}

async function httpAddOrDeleteOption(options: {
  clicked: boolean;
  optionEndpoint: string;
  postDataId: string;
}) {
  try {
    let res;
    if (options.clicked) {
      res = await makeRequest.delete(
        `/api/${options.optionEndpoint}?postId=${options.postDataId}`
      );
    } else {
      res = await makeRequest.post(
        `/api/${options.optionEndpoint}?postId=${options.postDataId}`
      );
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

async function httpEditUser(userPayload: {
  bio: string;
  backgroundImg: string;
  profilePic: string;
}) {
  return await makeRequest.put('/api/users', userPayload);
}

export {
  httpAddPost,
  httpFollowOrUnfollow,
  httpLikeOrUnlikeComment,
  httpDeletePost,
  httpAddComment,
  httpEditPost,
  httpAddOrDeleteOption,
  httpEditUser,
};
