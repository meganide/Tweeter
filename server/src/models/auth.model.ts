import { prisma } from '../services/db.services.js';
import { IUserCredentials } from '../routes/auth/auth.controller.js';
import { hashPassword } from '../services/auth.services.js';

export interface IUserTable {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  role: string;
  password?: string | null;
  provider: string;
  profilePic: string | null;
  profile: IUserProfile | null;
}

interface IUserProfile {
  bio: string | null;
  backgroundImg: string | null;
}

async function findUser(userCredentials: IUserCredentials) {
  const { name, email } = userCredentials;

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [{ name }, { email }],
    },
    include: {
      profile: { select: { bio: true, backgroundImg: true } },
    },
  });

  return userExists;
}

async function createUser(userCredentials: IUserCredentials) {
  const { name, email, password } = userCredentials;

  const hashedPassword = await hashPassword(password);

  const user: IUserTable = await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
      email,
      profile: {
        create: {},
      },
    },
    include: {
      profile: { select: { bio: true, backgroundImg: true } },
    },
  });

  const { password: hash, ...userWithoutPassword } = user;

  return { user: userWithoutPassword };
}

async function checkEmailAndPassword() {}

export { findUser, createUser };
