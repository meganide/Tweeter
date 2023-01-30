import { Request, Response } from 'express';
import { register } from '../../models/auth.model.js';
import bcrypt from "bcrypt";

export interface IUserCredentials {
  name: string;
  email: string;
  password: string;
}

async function httpRegister(req: Request, res: Response) {
  const userCredentials: IUserCredentials = req.body;

  userCredentials.password = await hashPassword(userCredentials.password)
  const user = await register(userCredentials);

  if (user.message === 'User successfully created!') {
    return res.status(200).json(user);
  } else {
    return res.status(400).json(user);
  }
}

async function hashPassword(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export { httpRegister };
