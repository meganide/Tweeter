import { prisma } from "../services/db.services.js"

async function addRetweet(userId: string, postId: string) {
  const likes = await prisma.retweet.create({
    data: {
      postId,
      userId,
    },
  });
  return likes;
}

async function deleteRetweet(userId: string, postId: string) {
  const likes = await prisma.retweet.delete({
    where: {
      userId_postId: {
        userId: userId,
        postId: postId,
      }
    }
  });
  return likes;
}

export {addRetweet, deleteRetweet}