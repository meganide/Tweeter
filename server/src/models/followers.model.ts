import { prisma } from '../services/db.services.js';

async function getFollowers(userId: string) {
  const followers = await prisma.followers.findMany({
    where: { followerId: userId },
    select: { followedId: true },
  });

  return followers;
}

export { getFollowers };
