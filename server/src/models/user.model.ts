import { prisma } from '../services/db.services.js';

async function getUser(userId: string) {
  const user: any = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      profile: { select: { bio: true, backgroundImg: true } },
    },
  });

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
}

async function getUserByName(name: string) {
  const user: any = await prisma.user.findUnique({
    where: { name: name },
    include: {
      profile: { select: { bio: true, backgroundImg: true } },
      followers: { select: { followerId: true } },
      following: { select: { followedId: true } },
      saves: true,
      retweets: true,
      likes: true,
      comments: true,
    },
  });

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
}

async function getRandomUsers(userId: string, amount: number) {
  const totalUsers = await prisma.user.count();
  const randomIndexes = new Set<number>();
  while (randomIndexes.size < amount) {
    const randomIndex = Math.floor(Math.random() * totalUsers);
    randomIndexes.add(randomIndex);
  }
  const randomUsers = [];

  for (const index of Array.from(randomIndexes)) {
    const user: any = await prisma.user.findFirst({
      where: { NOT: { id: userId } },
      include: {
        profile: { select: { bio: true, backgroundImg: true } },
        followers: { select: { followerId: true } },
      },
      skip: index,
    });

    if (user) {
      const { password, ...userWithoutPassword } = user;
      randomUsers.push(userWithoutPassword);
    }
  }

  return randomUsers;
}

async function getMostRecentUsers(userId: string) {
  const users: any = await prisma.user.findMany({
    where: { NOT: { id: userId } },
    include: {
      profile: { select: { bio: true, backgroundImg: true } },
      followers: { select: { followerId: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: 2,
  });

  users.forEach((user: any, index: number) => {
    delete users[index].password;
  });

  return users;
}

async function editUserProfile(userId: string, payload: any) {
  const { bio, backgroundImg, profilePic } = payload;

  await prisma.user.update({
    where: { id: userId },
    data: {
      ...(profilePic && { profilePic }),
      profile: {
        update: { ...(backgroundImg && { backgroundImg }), ...(bio && { bio }) },
      },
    },
  });

  return { message: 'Successfully updated user!' };
}

export { getUser, getUserByName, getRandomUsers, getMostRecentUsers, editUserProfile };
