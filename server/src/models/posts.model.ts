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

async function getAllLatestPosts(skip: any) {
  const posts = await prisma.post.findMany({
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
      saves: { select: { userId: true, savedAt: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 7,
    skip: parseInt(skip),
  });

  return posts;
}

async function getAllOldestPosts(skip: any) {
  const posts = await prisma.post.findMany({
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
      saves: { select: { userId: true, savedAt: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'asc' },
    take: 7,
    skip: parseInt(skip),
  });

  return posts;
}

async function getAllPostsWithMedia(skip: any) {
  const posts = await prisma.post.findMany({
    where: {NOT: {image: ''}},
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
      saves: { select: { userId: true, savedAt: true } },
      author: { select: { name: true, profilePic: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 7,
    skip: parseInt(skip),
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

async function getOwnTweets(name: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      author: { name },
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

async function getUserPostsWithReplies(name: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      comments: { some: { user: { name } } },
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

async function getUserPostsWithMedia(name: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      author: { name },
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

async function getUserPostsWithLikes(name: string, skip: any) {
  const ownTweets = await prisma.post.findMany({
    where: {
      likes: { some: { likedBy: { name } } },
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

async function getUserBookmarks(userId: string, skip: any) {
  const bookmarks: any = await prisma.post.findMany({
    where: {
      saves: { some: { savedBy: { id: userId } } },
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
      saves: {
        select: {
          savedAt: true,
          userId: true,
        },
        orderBy: {
          savedAt: 'desc',
        },
      },
      likes: { select: { userId: true } },
      retweets: { select: { userId: true } },
      author: { select: { name: true, profilePic: true } },
    },
    take: 7,
    skip: parseInt(skip),
  });

  return bookmarks;
}

export {
  getFollowedPosts,
  getAllLatestPosts,
  getAllOldestPosts,
  getAllPostsWithMedia,
  addPost,
  getOwnTweets,
  getUserPostsWithReplies,
  getUserPostsWithMedia,
  getUserPostsWithLikes,
  getUserBookmarks,
};
