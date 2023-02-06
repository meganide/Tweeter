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
      retweets: { select: { userId: true } },
      saves: { select: { userId: true } },
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

async function getOwnTweets(userId: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      authorId: userId,
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
      retweets: { select: { userId: true } },
      saves: { select: { userId: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 7,
    skip: parseInt(skip),
  });

  return ownTweets;
}

async function getUserPostsWithReplies(userId: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      OR: [{ comments: { some: { authorId: userId } } }, { authorId: userId }],
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
      retweets: { select: { userId: true } },
      saves: { select: { userId: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 7,
    skip: parseInt(skip),
  });

  return ownTweets;
}

async function getUserPostsWithMedia(userId: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      authorId: userId,
      image: { not: '' },
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
      retweets: { select: { userId: true } },
      saves: { select: { userId: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 7,
    skip: parseInt(skip),
  });

  return ownTweets;
}

async function getUserPostsWithLikes(userId: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      likes: { some: { userId: userId } },
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
      retweets: { select: { userId: true } },
      saves: { select: { userId: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 7,
    skip: parseInt(skip),
  });

  return ownTweets;
}

export { getFollowedPosts, getAllPosts, addPost, getOwnTweets, getUserPostsWithReplies, getUserPostsWithMedia, getUserPostsWithLikes };
