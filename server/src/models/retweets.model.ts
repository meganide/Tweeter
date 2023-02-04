import { prisma } from "../services/db.services.js"

async function getRetweets(postId: string) {

  const retweets = await prisma.like.findMany({
    where: {postId},
  })


  return retweets;
}

export {getRetweets}