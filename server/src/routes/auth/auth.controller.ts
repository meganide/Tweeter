import { Request, Response } from 'express';

import { register } from '../../models/auth.model.js';

export interface IUserCredentials {
  name: string;
  email: string;
  password: string;
}

async function httpRegister(req: Request, res: Response) {
  const userCredentials: IUserCredentials = req.body;

  const user = await register(userCredentials);

  if (user.message === 'User successfully created!') {
    return res.status(200).json(user);
  } else {
    return res.status(400).json(user);
  }
}



export { httpRegister };
