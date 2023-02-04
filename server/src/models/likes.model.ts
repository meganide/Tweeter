import { prisma } from '../services/db.services.js';

async function addLike(userId: string, postId: string) {
  const likes = await prisma.like.create({
    data: {
      postId,
      userId,
    },
  });
  return likes;
}

async function deleteLike(userId: string, postId: string) {
  const likes = await prisma.like.delete({
    where: {
      userId_postId: {
        userId: userId,
        postId: postId,
      }
    }
  });
  return likes;
}

export { addLike, deleteLike };
