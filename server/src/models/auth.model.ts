import bcrypt from 'bcrypt';

import { prisma } from '../server.js';
import { IUserCredentials } from '../routes/auth/auth.controller.js';
import { create } from 'domain';

interface IUserTable {
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

async function register(userCredentials: IUserCredentials) {
  const userExists = await findUser(userCredentials);

  if (userExists) {
    return { message: 'Username or email already exists!' };
  }

  const user = await createUser(userCredentials);

  return user;
}

async function findUser(userCredentials: IUserCredentials) {
  const { name, email } = userCredentials;

  try {
    const userExists = await prisma.user.findFirst({
      where: {
        OR: [{ name }, { email }],
      },
    });

    return userExists;
  } catch (error) {
    console.log(error);
    return { message: 'There was an error looking up user!' };
  }
}

async function createUser(userCredentials: IUserCredentials) {
  const { name, email, password } = userCredentials;

  const hashedPassword = await hashPassword(password);

  try {
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

    return { message: 'User successfully created!', user: userWithoutPassword };
  } catch (error) {
    console.log(error);
    return { message: 'There was an error creating user!' };
  }
}

async function hashPassword(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function verifyPassword(password: string, hashedPassword: string) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

export { register };
