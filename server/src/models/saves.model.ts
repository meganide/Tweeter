import { prisma } from '../services/db.services.js';

async function addSave(userId: string, postId: string) {
  const likes = await prisma.save.create({
    data: {
      postId,
      userId,
    },
  });
  return likes;
}

async function deleteSave(userId: string, postId: string) {
  const likes = await prisma.save.delete({
    where: {
      userId_postId: {
        userId: userId,
        postId: postId,
      },
    },
  });
  return likes;
}

export { addSave, deleteSave };
