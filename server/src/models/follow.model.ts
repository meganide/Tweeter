import { prisma } from '../services/db.services.js';

async function follow(followerUserId: string, followedUserId: string) {
  console.log('trying to add follow');
  const follower = await prisma.followers.create({
    data: {
      followerId: followerUserId,
      followedId: followedUserId,
    },
  });

  console.log(follower);

  return follower;
}

async function unfollow(followerUserId: string, followedUserId: string) {
  console.log('trying to unfollow');

  const follower = await prisma.followers.delete({
    where: {
      followerId_followedId: {
        followerId: followerUserId,
        followedId: followedUserId,
      },
    },
  });

  return follower;
}

export { follow, unfollow };
