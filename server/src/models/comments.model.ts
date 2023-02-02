import { prisma } from '../services/db.services.js';
import { ICommentsData } from '../routes/comments/comments.controller.js';

async function addComment(commentsData: ICommentsData) {
  const comment: any = await prisma.comment.create({
    data: {
      comment: commentsData.commentData.reply,
      authorId: commentsData.userId,
      postId: commentsData.commentData.postId,
    },
  });

  return comment;
}

export { addComment };
