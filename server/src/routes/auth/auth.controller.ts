import { Request, Response } from 'express';

import { createUser, findUser } from '../../models/auth.model.js';

export interface IUserCredentials {
  name: string;
  email: string;
  password: string;
}

async function httpRegister(req: Request, res: Response) {
  try {
    const userCredentials: IUserCredentials = req.body;

    const { name, email, password } = userCredentials;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: 'You must provide a name, email and password!',
      });
    }

    const existingUser = await findUser(userCredentials);

    if (existingUser) {
      return res.status(409).json({ error: 'Username or email already exists!' });
    }

    const user = await createUser(userCredentials);

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: 'Something went wrong registering user! Please try again!',
    });
  }
}

export { httpRegister };
