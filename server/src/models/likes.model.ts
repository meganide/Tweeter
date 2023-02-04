import { prisma } from "../services/db.services.js"

async function getLikes(postId: string) {

  const likes = await prisma.like.findMany({
    where: {postId},
  })


  return likes;
}

export {getLikes}