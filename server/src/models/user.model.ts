import { prisma } from '../services/db.services.js';

async function getUserById(userId: string) {
  const user: any = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      profile: { select: { bio: true, backgroundImg: true } },
    },
  });

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
}

export { getUserById };
