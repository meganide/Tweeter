import { Response, Request } from 'express';

import { addLikeToComment, addLikeToPost, deleteLikeFromComment, deleteLikeFromPost } from '../../models/likes.model.js';

async function httpAddLikeToPost(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await addLikeToPost(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to add like.' });
  }
}

async function httpAddLikeToComment(req: any, res: Response) {
  const userId = req.user;
  const commentId = req.query.commentId as string;

  try {
    const likes = await addLikeToComment(userId, commentId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to add like.' });
  }
}

async function httpDeleteLikeFromPost(req: any, res: Response) {
  const userId = req.user;
  const postId = req.query.postId as string;

  try {
    const likes = await deleteLikeFromPost(userId, postId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to remove like.' });
  }
}

async function httpDeleteLikeFromComment(req: any, res: Response) {
  const userId = req.user;
  const commentId = req.query.commentId as string;

  try {
    const likes = await deleteLikeFromComment(userId, commentId);

    return res.status(200).json(likes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Failed to remove like.' });
  }
}

export { httpAddLikeToPost, httpAddLikeToComment, httpDeleteLikeFromPost, httpDeleteLikeFromComment };
