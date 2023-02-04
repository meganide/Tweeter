import { prisma } from '../services/db.services.js';

async function addLikeToPost(userId: string, postId: string) {
  const likes = await prisma.like.create({
    data: {
      postId,
      userId,
    },
  });
  return likes;
}

async function addLikeToComment(userId: string, commentId: string) {
  const likes = await prisma.like.create({
    data: {
      commentId,
      userId,
    },
  });
  return likes;
}

async function deleteLikeFromPost(userId: string, postId: string) {
  const likes = await prisma.like.delete({
    where: {
      userId_postId: {
        userId: userId,
        postId: postId,
      },
    },
  });
  return likes;
}

async function deleteLikeFromComment(userId: string, commentId: string) {
  const likes = await prisma.like.delete({
    where: {
      userId_commentId: {
        userId: userId,
        commentId: commentId,
      },
    },
  });
  return likes;
}

export { addLikeToPost, addLikeToComment, deleteLikeFromComment, deleteLikeFromPost };
