import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../../config.js';

import { createUser, findUser } from '../../models/auth.model.js';
import { verifyPassword } from '../../services/auth.services.js';

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

    return res.status(200).json(user); // or res.redirect and save the user in the cookies
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: 'Something went wrong registering user! Please try again!',
    });
  }
}

async function httpLogin(req: Request, res: Response) {
  const userCredentials: IUserCredentials = req.body;

  const { email, password } = userCredentials;

  if (!email || !password) {
    return res.status(400).json({
      error: 'You must provide an email and password!',
    });
  }

  const existingUser = await findUser(userCredentials);

  if (!existingUser) {
    return res.status(404).json({ error: 'User not found!' });
  }

  if (existingUser.password) {
    const checkPassword = await verifyPassword(password, existingUser.password);

    if (!checkPassword) {
      return res.status(401).json({
        error: 'Wrong password!',
      });
    }
  }

  const { password: hashedPassword, ...userWithoutPassword } = existingUser;

  const maxAge = 3 * 24 * 60 * 60; // 3 days
  const token = jwt.sign({ userId: existingUser.id }, config.JSON_SECRET, {
    expiresIn: maxAge,
  });

  res
    .cookie('accessToken', token, {
      httpOnly: true,
      secure: true,
      maxAge: maxAge * 1000,
    })
    .status(200)
    .json(userWithoutPassword);
}

function httpLogout(req: Request, res: Response) {
  res
    .clearCookie('accessToken', {
      secure: true,
    })
    .status(200)
    .json('User has been logged out!');
}

export { httpRegister, httpLogin, httpLogout };
