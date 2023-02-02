import { prisma } from '../services/db.services.js';
import { getFollowers } from './followers.model.js';

async function getFollowedPosts(userId: string) {
  const followedUsers = await getFollowers(userId);

  const followedUserIds = followedUsers.map((user) => user.followedId);

  const posts = await prisma.post.findMany({
    where: {
      OR: [{ authorId: { in: followedUserIds } }, { authorId: userId }],
    },
    include: {
      author: { select: { name: true, profilePic: true } },
    },
  });

  return posts;
}

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: { select: { name: true, profilePic: true } },
    },
  });

  return posts;
}

export { getFollowedPosts, getAllPosts };
