import { ITweetData } from '../routes/posts/posts.controller.js';
import { prisma } from '../services/db.services.js';
import { getFollowers } from './followers.model.js';

async function getFollowedPosts(userId: string, skip: any) {
  const followedUsers = await getFollowers(userId);

  const followedUserIds = followedUsers.map((user) => user.followedId);

  const posts = await prisma.post.findMany({
    where: {
      OR: [{ authorId: { in: followedUserIds } }, { authorId: userId }],
    },
    include: {
      comments: {
        include: {
          user: {
            select: {
              name: true,
              profilePic: true,
            },
          },
          likes: { select: { userId: true } },
        },
        orderBy: { createdAt: 'asc' },
      },
      likes: { select: { userId: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 7,
    skip: parseInt(skip),
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

async function addPost(userId: string, tweetData: ITweetData) {
  const createdPost = await prisma.post.create({
    data: {
      authorId: userId,
      content: tweetData.tweet,
      image: tweetData.image,
    },
  });

  return createdPost;
}

export { getFollowedPosts, getAllPosts, addPost };
