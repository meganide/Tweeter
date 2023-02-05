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
    },
  });

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
}

export { getUser, getUserByName };
