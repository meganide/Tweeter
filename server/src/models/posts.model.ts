import { prisma } from "../services/db.services.js";

async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: {select: {name: true, profilePic: true}}
    }
  });

  console.log(posts)

  return posts;
}

export {getPosts}