import { Response, Request } from 'express';
import { addComment } from '../../models/comments.model.js';

export interface ICommentsData {
  commentData: ICommentData;
  userId: string;
}

interface ICommentData {
  reply: string;
  postId: string;
}

async function httpAddComment(req: any, res: Response) {
  const commentsData = { commentData: req.body, userId: req.user };

  try {
    const comment = await addComment(commentsData);
    return res.status(200).json({ message: 'Comment created!' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: 'Something went wrong posting comment!' });
  }
}

export { httpAddComment };
